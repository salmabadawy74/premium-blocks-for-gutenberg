/**
 * External dependencies
 */
import classnames from 'classnames';
import { escape, pull, size } from 'lodash';
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";

/**
 * WordPress dependencies
 */
import { useSelect, useDispatch, withSelect } from '@wordpress/data';
import {
	PanelBody,
	Popover,
	TextControl,
	TextareaControl,
	ToolbarButton,
	ToolbarGroup,
	ToggleControl,
	SelectControl,
	__experimentalRadio as Radio,
	__experimentalRadioGroup as RadioGroup,
} from '@wordpress/components';
import { displayShortcut, isKeyboardEvent } from '@wordpress/keycodes';
import { __, sprintf } from '@wordpress/i18n';
import {
	BlockControls,
	InnerBlocks,
	useInnerBlocksProps,
	InspectorControls,
	RichText,
	__experimentalLinkControl as LinkControl,
	useBlockProps,
	store as blockEditorStore,
	useSetting
} from '@wordpress/block-editor';
import { isURL, prependHTTP, safeDecodeURI } from '@wordpress/url';
import {
	Fragment,
	useState,
	useEffect,
	useRef,
	createInterpolateElement,
} from '@wordpress/element';
import { placeCaretAtHorizontalEdge } from '@wordpress/dom';
import { link as linkIcon, removeSubmenu } from '@wordpress/icons';
import { store as coreStore } from '@wordpress/core-data';
import { speak } from '@wordpress/a11y';
import { createBlock } from '@wordpress/blocks';
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';

/**
 * Internal dependencies
 */
import { ItemSubmenuIcon } from './icons';
import { name } from './block.json';
import SpacingComponent from '../../components/premium-responsive-spacing';
import PremiumBackgroundControl from "../../components/Premium-Background-Control"
import iconsList from "../../components/premium-icons-list";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent';
import { gradientBackground } from "../../components/HelperFunction";

const ALLOWED_BLOCKS = ['premium/navigation-link', 'premium/navigation-submenu'];

const DEFAULT_BLOCK = {
	name: 'premium/navigation-link',
};

const MAX_NESTING = 5;

/**
 * A React hook to determine if it's dragging within the target element.
 *
 * @typedef {import('@wordpress/element').RefObject} RefObject
 *
 * @param {RefObject<HTMLElement>} elementRef The target elementRef object.
 *
 * @return {boolean} Is dragging within the target element.
 */
const useIsDraggingWithin = (elementRef) => {
	const [isDraggingWithin, setIsDraggingWithin] = useState(false);

	useEffect(() => {
		const { ownerDocument } = elementRef.current;

		function handleDragStart(event) {
			// Check the first time when the dragging starts.
			handleDragEnter(event);
		}

		// Set to false whenever the user cancel the drag event by either releasing the mouse or press Escape.
		function handleDragEnd() {
			setIsDraggingWithin(false);
		}

		function handleDragEnter(event) {
			// Check if the current target is inside the item element.
			if (elementRef.current.contains(event.target)) {
				setIsDraggingWithin(true);
			} else {
				setIsDraggingWithin(false);
			}
		}

		// Bind these events to the document to catch all drag events.
		// Ideally, we can also use `event.relatedTarget`, but sadly that
		// doesn't work in Safari.
		ownerDocument.addEventListener('dragstart', handleDragStart);
		ownerDocument.addEventListener('dragend', handleDragEnd);
		ownerDocument.addEventListener('dragenter', handleDragEnter);

		return () => {
			ownerDocument.removeEventListener('dragstart', handleDragStart);
			ownerDocument.removeEventListener('dragend', handleDragEnd);
			ownerDocument.removeEventListener('dragenter', handleDragEnter);
		};
	}, []);

	return isDraggingWithin;
};

/**
 * Given the Link block's type attribute, return the query params to give to
 * /wp/v2/search.
 *
 * @param {string} type Link block's type attribute.
 * @param {string} kind Link block's entity of kind (post-type|taxonomy)
 * @return {{ type?: string, subtype?: string }} Search query params.
 */
function getSuggestionsQuery(type, kind) {
	switch (type) {
		case 'post':
		case 'page':
			return { type: 'post', subtype: type };
		case 'category':
			return { type: 'term', subtype: 'category' };
		case 'tag':
			return { type: 'term', subtype: 'post_tag' };
		case 'post_format':
			return { type: 'post-format' };
		default:
			if (kind === 'taxonomy') {
				return { type: 'term', subtype: type };
			}
			if (kind === 'post-type') {
				return { type: 'post', subtype: type };
			}
			return {};
	}
}

/**
 * @typedef {'post-type'|'custom'|'taxonomy'|'post-type-archive'} WPNavigationLinkKind
 */

/**
 * Navigation Link Block Attributes
 *
 * @typedef {Object} WPNavigationLinkBlockAttributes
 *
 * @property {string}               [label]         Link text.
 * @property {WPNavigationLinkKind} [kind]          Kind is used to differentiate between term and post ids to check post draft status.
 * @property {string}               [type]          The type such as post, page, tag, category and other custom types.
 * @property {string}               [rel]           The relationship of the linked URL.
 * @property {number}               [id]            A post or term id.
 * @property {boolean}              [opensInNewTab] Sets link target to _blank when true.
 * @property {string}               [url]           Link href.
 * @property {string}               [title]         Link title attribute.
 */

/**
 * Link Control onChange handler that updates block attributes when a setting is changed.
 *
 * @param {Object}                          updatedValue    New block attributes to update.
 * @param {Function}                        setAttributes   Block attribute update function.
 * @param {WPNavigationLinkBlockAttributes} blockAttributes Current block attributes.
 *
 */
export const updateNavigationLinkBlockAttributes = (
	updatedValue = {},
	setAttributes,
	blockAttributes = {}
) => {
	const {
		label: originalLabel = '',
		kind: originalKind = '',
		type: originalType = '',
	} = blockAttributes;
	const {
		title = '',
		url = '',
		opensInNewTab,
		id,
		kind: newKind = originalKind,
		type: newType = originalType,
	} = updatedValue;

	const normalizedTitle = title.replace(/http(s?):\/\//gi, '');
	const normalizedURL = url.replace(/http(s?):\/\//gi, '');
	const escapeTitle =
		title !== '' &&
		normalizedTitle !== normalizedURL &&
		originalLabel !== title;
	const label = escapeTitle
		? escape(title)
		: originalLabel || escape(normalizedURL);

	// In https://github.com/WordPress/gutenberg/pull/24670 we decided to use "tag" in favor of "post_tag"
	const type = newType === 'post_tag' ? 'tag' : newType.replace('-', '_');

	const isBuiltInType =
		['post', 'page', 'tag', 'category'].indexOf(type) > -1;

	const isCustomLink =
		(!newKind && !isBuiltInType) || newKind === 'custom';
	const kind = isCustomLink ? 'custom' : newKind;

	setAttributes({
		// Passed `url` may already be encoded. To prevent double encoding, decodeURI is executed to revert to the original string.
		...(url && { url: encodeURI(safeDecodeURI(url)) }),
		...(label && { label }),
		...(undefined !== opensInNewTab && { opensInNewTab }),
		...(id && Number.isInteger(id) && { id }),
		...(kind && { kind }),
		...(type && type !== 'URL' && { type }),
	});
};

const getColors = (menuColors, submenuColors) => {
	const colors = { ...menuColors };
	if (submenuColors.link) {
		colors.link = submenuColors.link;
	}
	if (submenuColors.linkHover) {
		colors.linkHover = submenuColors.linkHover;
	}
	if (submenuColors.background) {
		colors.background = submenuColors.background;
	}

	return colors;
}

const getTypography = (menuTypography, submenuTypography) => {
	const typography = { ...menuTypography };
	if (submenuTypography.size) {
		typography.size = submenuTypography.size;
	}
	if (submenuTypography.weight) {
		typography.weight = submenuTypography.weight;
	}

	if (submenuTypography.family) {
		typography.family = submenuTypography.family;
	}

	if (submenuTypography.letterSpacing) {
		typography.letterSpacing = submenuTypography.letterSpacing;
	}

	if (submenuTypography.textTransform) {
		typography.textTransform = submenuTypography.textTransform;
	}

	if (submenuTypography.textDecoration) {
		typography.textDecoration = submenuTypography.textDecoration;
	}

	if (submenuTypography.lineHeight) {
		typography.lineHeight = submenuTypography.lineHeight;
	}

	if (submenuTypography.style) {
		typography.style = submenuTypography.style;
	}

	return typography;
}

function NavigationSubmenuEdit({
	attributes,
	isSelected,
	setAttributes,
	mergeBlocks,
	onReplace,
	context,
	clientId,
}) {
	const {
		label,
		type,
		opensInNewTab,
		url,
		description,
		rel,
		title,
		kind,
		megaMenu,
		megaMenuWidth,
		spacing,
		megaMenuBackground,
		linkCustomIcon,
		badgeText,
		badgeColors,
		deviceType = 'Desktop'
	} = attributes;
	const link = {
		url,
		opensInNewTab,
	};
	const { showSubmenuIcon, openSubmenusOnClick, submenuColors, menuColors, submenuWidth, menuTypography,
		submenuTypography: typography, overlayMenu, submenuBorder } = context;
	const { saveEntityRecord } = useDispatch(coreStore);
	const { contentSize } = useSetting('layout');
	let columnPadding = spacing.columnPadding ? spacing.columnPadding : {};
	let padding = spacing.padding ? spacing.padding : {};

	const {
		__unstableMarkNextChangeAsNotPersistent,
		replaceBlock,
	} = useDispatch(blockEditorStore);
	const [isLinkOpen, setIsLinkOpen] = useState(false);
	const listItemRef = useRef(null);
	const isDraggingWithin = useIsDraggingWithin(listItemRef);
	const itemLabelPlaceholder = __('Add text…');
	const ref = useRef();

	const {
		isAtMaxNesting,
		isTopLevelItem,
		isParentOfSelectedBlock,
		isImmediateParentOfSelectedBlock,
		hasDescendants,
		selectedBlockHasDescendants,
		userCanCreatePages,
		userCanCreatePosts,
		onlyDescendantIsEmptyLink,
	} = useSelect(
		(select) => {
			const {
				getClientIdsOfDescendants,
				hasSelectedInnerBlock,
				getSelectedBlockClientId,
				getBlockParentsByBlockName,
				getBlock,
			} = select(blockEditorStore);

			let _onlyDescendantIsEmptyLink;

			const selectedBlockId = getSelectedBlockClientId();

			const descendants = getClientIdsOfDescendants([clientId])
				.length;

			const selectedBlockDescendants = getClientIdsOfDescendants([
				selectedBlockId,
			]);

			// Check for a single descendant in the submenu. If that block
			// is a link block in a "placeholder" state with no label then
			// we can consider as an "empty" link.
			if (selectedBlockDescendants?.length === 1) {
				const singleBlock = getBlock(selectedBlockDescendants[0]);

				_onlyDescendantIsEmptyLink =
					singleBlock?.name === 'premium/navigation-link' &&
					!singleBlock?.attributes?.label;
			}

			return {
				isAtMaxNesting:
					getBlockParentsByBlockName(clientId, name).length >=
					MAX_NESTING,
				isTopLevelItem:
					getBlockParentsByBlockName(clientId, name).length === 0,
				isParentOfSelectedBlock: hasSelectedInnerBlock(
					clientId,
					true
				),
				isImmediateParentOfSelectedBlock: hasSelectedInnerBlock(
					clientId,
					false
				),
				hasDescendants: !!descendants,
				selectedBlockHasDescendants: !!selectedBlockDescendants?.length,
				userCanCreatePages: select(coreStore).canUser(
					'create',
					'pages'
				),
				userCanCreatePosts: select(coreStore).canUser(
					'create',
					'posts'
				),
				onlyDescendantIsEmptyLink: _onlyDescendantIsEmptyLink,
			};
		},
		[clientId]
	);

	// Show the LinkControl on mount if the URL is empty
	// ( When adding a new menu item)
	// This can't be done in the useState call because it conflicts
	// with the autofocus behavior of the BlockListBlock component.
	useEffect(() => {
		if (!openSubmenusOnClick && !url) {
			setIsLinkOpen(true);
		}
	}, []);

	// Store the colors from context as attributes for rendering.
	useEffect(() => {
		// This side-effect should not create an undo level as those should
		// only be created via user interactions. Mark this change as
		// not persistent to avoid undo level creation.
		// See https://github.com/WordPress/gutenberg/issues/34564.
		__unstableMarkNextChangeAsNotPersistent();
		setAttributes({ isTopLevelItem });
	}, [isTopLevelItem]);

	/**
	 * The hook shouldn't be necessary but due to a focus loss happening
	 * when selecting a suggestion in the link popover, we force close on block unselection.
	 */
	useEffect(() => {
		if (!isSelected) {
			setIsLinkOpen(false);
		}
	}, [isSelected]);

	// If the LinkControl popover is open and the URL has changed, close the LinkControl and focus the label text.
	useEffect(() => {
		if (isLinkOpen && url) {
			// Does this look like a URL and have something TLD-ish?
			if (
				isURL(prependHTTP(label)) &&
				/^.+\.[a-z]+/.test(label)
			) {
				// Focus and select the label text.
				selectLabelText();
			} else {
				// Focus it (but do not select).
				placeCaretAtHorizontalEdge(ref.current, true);
			}
		}
	}, [url]);

	/**
	 * Focus the Link label text and select it.
	 */
	function selectLabelText() {
		ref.current.focus();
		const { ownerDocument } = ref.current;
		const { defaultView } = ownerDocument;
		const selection = defaultView.getSelection();
		const range = ownerDocument.createRange();
		// Get the range of the current ref contents so we can add this range to the selection.
		range.selectNodeContents(ref.current);
		selection.removeAllRanges();
		selection.addRange(range);
	}

	let userCanCreate = false;
	if (!type || type === 'page') {
		userCanCreate = userCanCreatePages;
	} else if (type === 'post') {
		userCanCreate = userCanCreatePosts;
	}

	async function handleCreate(pageTitle) {
		const postType = type || 'page';

		const page = await saveEntityRecord('postType', postType, {
			title: pageTitle,
			status: 'draft',
		});

		return {
			id: page.id,
			type: postType,
			title: page.title.rendered,
			url: page.link,
			kind: 'post-type',
		};
	}

	function onKeyDown(event) {
		if (isKeyboardEvent.primary(event, 'k')) {
			setIsLinkOpen(true);
		}
	}

	const defaultSize = {
		Desktop: "",
		Tablet: "",
		Mobile: "",
		unit: "px"
	};

	const { link: linkColor, linkHover: linkHoverColor, background: backgroundColor } = getColors(menuColors, submenuColors);
	const { fontSize: fontSizeValue = defaultSize, fontFamily: family, fontWeight: weight, letterSpacing, textTransform, textDecoration, lineHeight, fontStyle } = getTypography(menuTypography, typography);
	const fontSize = fontSizeValue ? fontSizeValue : defaultSize;
	const blockProps = useBlockProps({
		ref: listItemRef,
		className: classnames('premium-navigation-item', {
			'is-editing': isSelected || isParentOfSelectedBlock,
			'is-dragging-within': isDraggingWithin,
			'has-link': !!url,
			'has-child': hasDescendants,
			'open-on-click': openSubmenusOnClick,
			'premiun-mega-menu': megaMenu && overlayMenu !== 'always',
		}),
		onKeyDown,
	});

	if (isAtMaxNesting) {
		pull(ALLOWED_BLOCKS, 'premium/navigation-submenu');
	}

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: classnames('premium-navigation__submenu-container', {
				'is-parent-of-selected-block': isParentOfSelectedBlock
			}),
			style: {
				color: linkColor,
				backgroundColor: backgroundColor,
				fontSize: `${fontSize?.[deviceType]}${fontSize?.unit}`,
				fontFamily: family,
				fontWeight: weight,
				letterSpacing: letterSpacing,
				textDecoration: textDecoration,
				textTransform: textTransform,
				lineHeight: `${lineHeight}px`,
				fontStyle: fontStyle,
				paddingTop: megaMenu ? `${padding?.[deviceType]?.top}${padding?.unit}` : '',
				paddingRight: megaMenu ? `${padding?.[deviceType]?.right}${padding?.unit}` : '',
				paddingBottom: megaMenu ? `${padding?.[deviceType]?.bottom}${padding?.unit}` : '',
				paddingLeft: megaMenu ? `${padding?.[deviceType]?.left}${padding?.unit}` : '',
				borderTopWidth: submenuBorder?.borderWidth?.[deviceType]?.top,
				borderRightWidth: submenuBorder?.borderWidth?.[deviceType]?.right,
				borderBottomWidth: submenuBorder?.borderWidth?.[deviceType]?.bottom,
				borderLeftWidth: submenuBorder?.borderWidth?.[deviceType]?.left,
				borderTopLeftRadius: `${submenuBorder?.borderRadius?.[deviceType]?.top || 0}px`,
				borderTopRightRadius: `${submenuBorder?.borderRadius?.[deviceType]?.right || 0}px`,
				borderBottomLeftRadius: `${submenuBorder?.borderRadius?.[deviceType]?.bottom || 0}px`,
				borderBottomRightRadius: `${submenuBorder?.borderRadius?.[deviceType]?.left || 0}px`,
				...gradientBackground(megaMenuBackground)
			},
		},
		{
			allowedBlocks: megaMenu ? 'all' : ALLOWED_BLOCKS,
			__experimentalDefaultBlock: DEFAULT_BLOCK,
			__experimentalDirectInsert: true,

			// Ensure block toolbar is not too far removed from item
			// being edited.
			// see: https://github.com/WordPress/gutenberg/pull/34615.
			__experimentalCaptureToolbars: true,

			renderAppender:
				isSelected ||
					(isImmediateParentOfSelectedBlock &&
						!selectedBlockHasDescendants) ||
					// Show the appender while dragging to allow inserting element between item and the appender.
					hasDescendants
					? InnerBlocks.ButtonBlockAppender
					: false,
		}
	);

	const ParentElement = openSubmenusOnClick ? 'button' : 'a';

	function transformToLink() {
		const newLinkBlock = createBlock('premium/navigation-link', attributes);
		replaceBlock(clientId, newLinkBlock);
	}

	const canConvertToLink =
		!selectedBlockHasDescendants || onlyDescendantIsEmptyLink;

	const getOffSet = (el) => {
		var rect = el.getBoundingClientRect();

		return {
			top: rect.top + window.pageYOffset,
			left: rect.left + window.pageXOffset,
		};
	};

	const onChangeSpacing = (value) => {
		const newSpacing = { ...spacing, ...value };
		setAttributes({ spacing: newSpacing });
	}

	useEffect(() => {
		const submenuElement = ref.current.parentElement.parentElement.querySelector('.premium-navigation__submenu-container');
		if (megaMenu && overlayMenu !== 'always') {
			const bodyWidth = document.body.clientWidth - (document.body.querySelector('.interface-interface-skeleton__sidebar') ? document.body.querySelector('.interface-interface-skeleton__sidebar').clientWidth : 0);
			submenuElement.style.left = `0`;
			const megaMenuContainer = submenuElement.parentElement.parentElement;
			const megaMenuContainerWidth = megaMenuWidth === 'content' ? contentSize : megaMenuWidth === 'full' ? 'calc(100vw)' : `${megaMenuContainer.clientWidth}px`;
			submenuElement.style.width = megaMenuContainerWidth;
			let left = megaMenuWidth === 'content' ? (bodyWidth - submenuElement.clientWidth) / 2 - getOffSet(submenuElement).left : `-${getOffSet(submenuElement).left}`;
			left = megaMenuWidth === 'menu-container' ? `-${ref.current.parentElement.parentElement.offsetLeft}` : left;
			submenuElement.style.left = `${megaMenuWidth === 'content' ? left - 9 : left}px`;
		} else {
			submenuElement.style.left = `0`;
			submenuElement.style.width = submenuWidth ? `${submenuWidth}px` : `auto`;
		}
	}, [isSelected, megaMenu, megaMenuWidth, submenuWidth, overlayMenu])

	const setBadgeColor = (color, value) => {
		const newColors = { ...badgeColors };
		newColors[color] = value;
		setAttributes({ badgeColors: newColors });
	}

	const getSecondPart = (str) => {
		return str.split(':')[1];
	}

	let styleArry = [
		`#${blockProps.id}.premiun-mega-menu .premium-navigation__submenu-container > *{`,
		`padding-top: ${columnPadding?.[deviceType]?.top}${columnPadding?.unit};`,
		`padding-right: ${columnPadding?.[deviceType]?.right}${columnPadding?.unit};`,
		`padding-bottom: ${columnPadding?.[deviceType]?.bottom}${columnPadding?.unit};`,
		`padding-left: ${columnPadding?.[deviceType]?.left}${columnPadding?.unit};`,
		`}`,
		`#${blockProps.id} .premium-navigation__submenu-container a{`,
		`--pbg-links-color: ${linkColor};`,
		`}`,
		`#${blockProps.id} .premium-navigation__submenu-container a:hover {`,
		`--pbg-links-hover-color: ${linkHoverColor};`,
		"}"
	];
	styleArry = styleArry.filter(styleLine => {
		const notAllowed = ['px;', 'undefined;', ';'];
		const style = getSecondPart(styleLine) ? getSecondPart(styleLine).replace(/\s/g, '') : styleLine;
		if (!notAllowed.includes(style)) {
			return style;
		}
	}).join('\n')

	return (
		<Fragment>
			<BlockControls>
				<ToolbarGroup>
					{!openSubmenusOnClick && (
						<ToolbarButton
							name="link"
							icon={linkIcon}
							title={__('Link')}
							shortcut={displayShortcut.primary('k')}
							onClick={() => setIsLinkOpen(true)}
						/>
					)}

					<ToolbarButton
						name="revert"
						icon={removeSubmenu}
						title={__('Convert to Link')}
						onClick={transformToLink}
						className="premium-navigation__submenu__revert"
						isDisabled={!canConvertToLink}
					/>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<InspectorTabs tabs={['layout', 'style', 'advance']}>
					<InspectorTab key={'layout'}>
						{isTopLevelItem && <PanelBody title={__('Mega Menu Settings')}>
							{<ToggleControl
								label={__("Enable Mega Menu", 'premium-blocks-for-gutenberg')}
								checked={megaMenu}
								onChange={check => setAttributes({ megaMenu: check })}
							/>}
							{megaMenu && overlayMenu !== 'always' && (
								<>
									<SelectControl
										label={__("Mega Menu Width", 'premium-blocks-for-gutenberg')}
										options={[
											{
												value: "content",
												label: __("Content", 'premium-blocks-for-gutenberg')
											},
											{
												value: "full",
												label: __("Full", 'premium-blocks-for-gutenberg')
											},
											{
												value: "menu-container",
												label: __("Menu Container", 'premium-blocks-for-gutenberg')
											}
										]}
										value={megaMenuWidth}
										onChange={newWidth => setAttributes({ megaMenuWidth: newWidth })}
									/>
									<PremiumBackgroundControl
										value={megaMenuBackground}
										onChange={(value) => setAttributes({ megaMenuBackground: value })}
									/>
								</>
							)}

						</PanelBody>}
						<PanelBody title={__('Link Badge')}>
							<TextControl
								value={badgeText || ''}
								onChange={(badgeTextValue) => {
									setAttributes({
										badgeText: badgeTextValue,
									});
								}}
								label={__('Link Badge Text')}
							/>
						</PanelBody>
						<PanelBody title={__('Link settings')}>
							<FontIconPicker
								icons={iconsList}
								onChange={newIcon => setAttributes({ linkCustomIcon: newIcon })}
								value={linkCustomIcon}
								isMulti={false}
								appendTo="body"
								noSelectedPlaceholder={__("Select Icon", 'premium-blocks-for-gutenberg')}
							/>
							<TextareaControl
								value={description || ''}
								onChange={(descriptionValue) => {
									setAttributes({
										description: descriptionValue,
									});
								}}
								label={__('Description')}
								help={__(
									'The description will be displayed in the menu if the current theme supports it.'
								)}
							/>
							<TextControl
								value={title || ''}
								onChange={(titleValue) => {
									setAttributes({ title: titleValue });
								}}
								label={__('Link title')}
								autoComplete="off"
							/>
							<TextControl
								value={rel || ''}
								onChange={(relValue) => {
									setAttributes({ rel: relValue });
								}}
								label={__('Link rel')}
								autoComplete="off"
							/>
						</PanelBody>
					</InspectorTab>
					<InspectorTab key={'style'}>
						{megaMenu && (
							<>
								<PanelBody
									title={__('Spacing', 'premium-blocks-for-gutenberg')}
									initialOpen={false}
								>
									<SpacingComponent value={padding} responsive={true} showUnits={true} label={__('Mega Menu Padding')} onChange={(value) => onChangeSpacing({ padding: value })} />
									<SpacingComponent value={columnPadding} responsive={true} showUnits={true} label={__('Mega Menu Columns Padding')} onChange={(value) => onChangeSpacing({ columnPadding: value })} />
								</PanelBody>
							</>
						)}
						<PanelBody title={__('Link Badge')}>
							<AdvancedPopColorControl
								label={__(`Text Color`, 'premium-blocks-for-gutenberg')}
								colorValue={badgeColors.text}
								onColorChange={newValue => setBadgeColor('text', newValue)}
								colorDefault={''}
							/>
							<AdvancedPopColorControl
								label={__(`Background Color`, 'premium-blocks-for-gutenberg')}
								colorValue={badgeColors.background}
								onColorChange={newValue => setBadgeColor('background', newValue)}
								colorDefault={''}
							/>
						</PanelBody>
					</InspectorTab>
					<InspectorTab key={'advance'} />
				</InspectorTabs>
			</InspectorControls>
			<div {...blockProps}>
				<style
					dangerouslySetInnerHTML={{
						__html: styleArry
					}}
				/>
				{ /* eslint-disable jsx-a11y/anchor-is-valid */}
				<ParentElement className="premium-navigation-item__content">
					{ /* eslint-enable */}
					{linkCustomIcon && <span className={`pbg-navigation-link-icon ${linkCustomIcon}`}></span>}
					{
						<RichText
							ref={ref}
							identifier="label"
							className="premium-navigation-item__label"
							value={label}
							onChange={(labelValue) =>
								setAttributes({ label: labelValue })
							}
							onMerge={mergeBlocks}
							onReplace={onReplace}
							aria-label={__('Navigation link text')}
							placeholder={itemLabelPlaceholder}
							withoutInteractiveFormatting
							allowedFormats={[
								'core/bold',
								'core/italic',
								'core/image',
								'core/strikethrough',
							]}
							onClick={() => {
								if (!openSubmenusOnClick && !url) {
									setIsLinkOpen(true);
								}
							}}
						/>
					}
					{!openSubmenusOnClick && isLinkOpen && (
						<Popover
							position="bottom center"
							onClose={() => setIsLinkOpen(false)}
							anchorRef={listItemRef.current}
						>
							<LinkControl
								className="premium-navigation-link__inline-link-input"
								value={link}
								showInitialSuggestions={true}
								withCreateSuggestion={userCanCreate}
								createSuggestion={handleCreate}
								createSuggestionButtonText={(searchTerm) => {
									let format;
									if (type === 'post') {
										/* translators: %s: search term. */
										format = __(
											'Create draft post: <mark>%s</mark>'
										);
									} else {
										/* translators: %s: search term. */
										format = __(
											'Create draft page: <mark>%s</mark>'
										);
									}
									return createInterpolateElement(
										sprintf(format, searchTerm),
										{ mark: <mark /> }
									);
								}}
								noDirectEntry={!!type}
								noURLSuggestion={!!type}
								suggestionsQuery={getSuggestionsQuery(
									type,
									kind
								)}
								onChange={(updatedValue) =>
									updateNavigationLinkBlockAttributes(
										updatedValue,
										setAttributes,
										attributes
									)
								}
								onRemove={() => {
									setAttributes({ url: '' });
									speak(__('Link removed.'), 'assertive');
								}}
							/>
						</Popover>
					)}
					{(showSubmenuIcon || openSubmenusOnClick) && (
						<span className="premium-navigation__submenu-icon">
							<ItemSubmenuIcon />
						</span>
					)}
					{badgeText ? <span style={{ color: badgeColors.text, backgroundColor: badgeColors.background }} className='pbg-navigation-link-label'>{badgeText}</span> : ''}
				</ParentElement>
				<div {...innerBlocksProps} />
			</div>
		</Fragment>
	);
}

export default withSelect((select, props) => {
	const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
	let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

	return {
		deviceType: deviceType
	}
})(NavigationSubmenuEdit)