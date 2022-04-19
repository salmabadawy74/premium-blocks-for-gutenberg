/**
 * External dependencies
 */
import classnames from 'classnames';
import { noop } from 'lodash';

/**
 * WordPress dependencies
 */
import {
	useState,
	useEffect,
	useRef,
	useCallback,
} from '@wordpress/element';
import {
	InspectorControls,
	useBlockProps,
	__experimentalUseNoRecursiveRenders as useNoRecursiveRenders,
	store as blockEditorStore,
	withColors,
	Warning,
} from '@wordpress/block-editor';
import { EntityProvider, useEntityProp } from '@wordpress/core-data';

import { useDispatch, useSelect, useRegistry } from '@wordpress/data';
import {
	PanelBody,
	ToggleControl,
	Button,
	Spinner,
	TabPanel,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	RangeControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { speak } from '@wordpress/a11y';

/**
 * Internal dependencies
 */
import AdvancedPopColorControl from '../../../components/Color Control/ColorComponent';
import PremiumResponsivePadding from '../../../components/Premium-Responsive-Padding';
import PremiumResponsiveMargin from '../../../components/Premium-Responsive-Margin';
import PremiumTypo from "../../../components/premium-typo"
import useNavigationMenu from '../use-navigation-menu';
import useNavigationEntities from '../use-navigation-entities';
import Placeholder from './placeholder';
import NavigationInnerBlocks from './inner-blocks';
import NavigationMenuNameControl from './navigation-menu-name-control';
import UnsavedInnerBlocks from './unsaved-inner-blocks';
import NavigationMenuDeleteControl from './navigation-menu-delete-control';
import useNavigationNotice from './use-navigation-notice';
import ResponsiveWrapper from './responsive-wrapper';
import OverlayMenuIcon from './overlay-menu-icon';
import useCreateNavigationMenu, {
	CREATE_NAVIGATION_MENU_ERROR,
	CREATE_NAVIGATION_MENU_PENDING,
	CREATE_NAVIGATION_MENU_SUCCESS,
} from './use-create-navigation-menu';

const EMPTY_ARRAY = [];

function getComputedStyle(node) {
	return node.ownerDocument.defaultView.getComputedStyle(node);
}

function detectColors(colorsDetectionElement, setColor, setBackground) {
	if (!colorsDetectionElement) {
		return;
	}
	setColor(getComputedStyle(colorsDetectionElement).color);

	let backgroundColorNode = colorsDetectionElement;
	let backgroundColor = getComputedStyle(backgroundColorNode)
		.backgroundColor;
	while (
		backgroundColor === 'rgba(0, 0, 0, 0)' &&
		backgroundColorNode.parentNode &&
		backgroundColorNode.parentNode.nodeType ===
		backgroundColorNode.parentNode.ELEMENT_NODE
	) {
		backgroundColorNode = backgroundColorNode.parentNode;
		backgroundColor = getComputedStyle(backgroundColorNode)
			.backgroundColor;
	}

	setBackground(backgroundColor);
}

function Navigation({
	attributes,
	setAttributes,
	clientId,
	isSelected,
	className,
	backgroundColor,
	textColor,
	context: { navigationArea },

	// These props are used by the navigation editor to override specific
	// navigation block settings.
	hasSubmenuIndicatorSetting = true,
	customPlaceholder: CustomPlaceholder = null,
}) {
	const {
		openSubmenusOnClick,
		showSubmenuIcon,
		overlayMenu,
		hasIcon,
		layout: {
			justifyContent,
			orientation = 'horizontal',
			flexWrap = 'wrap',
		} = {},
		menuColors,
		submenuColors,
		spacing,
		typography,
		menuStyle,
		submenuWidth,
		dropdownReveal,
		submenuShadow,
		submenuTypography,
		overlayColors
	} = attributes;

	let areaMenu,
		setAreaMenu = noop;
	[areaMenu, setAreaMenu] = useEntityProp(
		'root',
		'navigationArea',
		'navigation',
		navigationArea
	);
	const navigationAreaMenu = areaMenu === 0 ? undefined : areaMenu;

	const ref = navigationArea ? navigationAreaMenu : attributes.ref;

	const registry = useRegistry();
	const setRef = useCallback(
		(postId) => {
			setAttributes({ ref: postId });
			if (navigationArea) {
				setAreaMenu(postId);
			}
		},
		[navigationArea]
	);

	const [hasAlreadyRendered, RecursionProvider] = useNoRecursiveRenders(
		`navigationMenu/${ref}`
	);

	const [isResponsiveMenuOpen, setResponsiveMenuVisibility] = useState(
		false
	);

	const [overlayMenuPreview, setOverlayMenuPreview] = useState(false);

	// Preload classic menus, so that they don't suddenly pop-in when viewing
	// the Select Menu dropdown.
	useNavigationEntities();

	const [
		showNavigationMenuCreateNotice,
		hideNavigationMenuCreateNotice,
	] = useNavigationNotice({
		name: 'block-library/core/navigation/create',
	});

	const {
		create: createNavigationMenu,
		status: createNavigationMenuStatus,
		error: createNavigationMenuError,
		value: createNavigationMenuPost,
	} = useCreateNavigationMenu(clientId);

	const isCreatingNavigationMenu =
		createNavigationMenuStatus === CREATE_NAVIGATION_MENU_PENDING;

	useEffect(() => {
		hideNavigationMenuCreateNotice();

		if (createNavigationMenuStatus === CREATE_NAVIGATION_MENU_PENDING) {
			speak(__(`Creating Navigation Menu.`));
		}

		if (createNavigationMenuStatus === CREATE_NAVIGATION_MENU_SUCCESS) {
			setRef(createNavigationMenuPost.id);
			selectBlock(clientId);

			showNavigationMenuCreateNotice(
				__(`Navigation Menu successfully created.`)
			);
		}

		if (createNavigationMenuStatus === CREATE_NAVIGATION_MENU_ERROR) {
			showNavigationMenuCreateNotice(
				__('Failed to create Navigation Menu.')
			);
		}
	}, [
		createNavigationMenu,
		createNavigationMenuStatus,
		createNavigationMenuError,
		createNavigationMenuPost,
	]);

	const {
		hasUncontrolledInnerBlocks,
		uncontrolledInnerBlocks,
		isInnerBlockSelected,
		hasSubmenus,
	} = useSelect(
		(select) => {
			const { getBlock, getBlocks, hasSelectedInnerBlock } = select(
				blockEditorStore
			);

			// This relies on the fact that `getBlock` won't return controlled
			// inner blocks, while `getBlocks` does. It might be more stable to
			// introduce a selector like `getUncontrolledInnerBlocks`, just in
			// case `getBlock` is fixed.
			const _uncontrolledInnerBlocks = getBlock(clientId).innerBlocks;
			const _hasUncontrolledInnerBlocks = !!_uncontrolledInnerBlocks?.length;
			const _controlledInnerBlocks = _hasUncontrolledInnerBlocks
				? EMPTY_ARRAY
				: getBlocks(clientId);
			const innerBlocks = _hasUncontrolledInnerBlocks
				? _uncontrolledInnerBlocks
				: _controlledInnerBlocks;

			return {
				hasSubmenus: !!innerBlocks.find(
					(block) => block.name === 'premium/navigation-submenu'
				),
				hasUncontrolledInnerBlocks: _hasUncontrolledInnerBlocks,
				uncontrolledInnerBlocks: _uncontrolledInnerBlocks,
				isInnerBlockSelected: hasSelectedInnerBlock(clientId, true),
			};
		},
		[clientId]
	);
	const {
		replaceInnerBlocks,
		selectBlock,
		__unstableMarkNextChangeAsNotPersistent,
	} = useDispatch(blockEditorStore);

	const [
		hasSavedUnsavedInnerBlocks,
		setHasSavedUnsavedInnerBlocks,
	] = useState(false);

	const isWithinUnassignedArea = !!navigationArea && !ref;


	const {
		isNavigationMenuResolved,
		isNavigationMenuMissing,
		navigationMenus,
		canUserUpdateNavigationMenu,
		hasResolvedCanUserUpdateNavigationMenu,
		canUserDeleteNavigationMenu,
		hasResolvedCanUserDeleteNavigationMenu,
		canUserCreateNavigationMenu,
		isResolvingCanUserCreateNavigationMenu,
		hasResolvedCanUserCreateNavigationMenu,
	} = useNavigationMenu(ref);

	const navRef = useRef();

	// The standard HTML5 tag for the block wrapper.
	const TagName = 'nav';

	// "placeholder" shown if:
	// - there is no ref attribute pointing to a Navigation Post.
	// - there is no classic menu conversion process in progress.
	// - there is no menu creation process in progress.
	// - there are no uncontrolled blocks.
	// - (legacy) there is a Navigation Area without a ref attribute pointing to a Navigation Post.
	const isPlaceholder =
		!ref &&
		!isCreatingNavigationMenu &&
		(!hasUncontrolledInnerBlocks || isWithinUnassignedArea);

	const isEntityAvailable =
		!isNavigationMenuMissing && isNavigationMenuResolved;

	// "loading" state:
	// - there is a menu creation process in progress.
	// - there is a classic menu conversion process in progress.
	// OR
	// - there is a ref attribute pointing to a Navigation Post
	// - the Navigation Post isn't available (hasn't resolved) yet.
	const isLoading =
		isCreatingNavigationMenu ||
		!!(ref && !isEntityAvailable);

	const defaultSpacingValue = {
		desktop: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		},
		tablet: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		},
		mobile: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	};
	const defaultSize = {
		desktop: "",
		tablet: "",
		mobile: "",
		unit: "px"
	};
	let margin = spacing.margin ? spacing.margin : defaultSpacingValue;
	let padding = spacing.padding ? spacing.padding : defaultSpacingValue;
	const fontSize = typography.size ? typography.size : defaultSize;
	const itemPadding = spacing.itemPadding ? spacing.itemPadding : defaultSpacingValue;
	const submenuFontSize = submenuTypography.size ? submenuTypography.size : defaultSize;

	const blockProps = useBlockProps({
		ref: navRef,
		className: classnames(dropdownReveal && overlayMenu !== 'always' ? `submenu-${dropdownReveal}` : '', menuStyle && overlayMenu !== 'always' ? `effect-${menuStyle}` : '', className, {
			'items-justified-right': justifyContent === 'right',
			'items-justified-space-between': justifyContent === 'space-between',
			'items-justified-left': justifyContent === 'left',
			'items-justified-center': justifyContent === 'center',
			'is-vertical': orientation === 'vertical',
			'no-wrap': flexWrap === 'nowrap',
			'submenu-box-shadow': submenuShadow && overlayMenu !== 'always'
		}),
		style: {
			color: menuColors?.link,
			backgroundColor: menuColors?.background,
			marginTop: `${margin.desktop.top}px`,
			marginRight: `${margin.desktop.right}px`,
			marginBottom: `${margin.desktop.bottom}px`,
			marginLeft: `${margin.desktop.left}px`,
			paddingTop: `${padding.desktop.top}px`,
			paddingRight: `${padding.desktop.right}px`,
			paddingBottom: `${padding.desktop.bottom}px`,
			paddingLeft: `${padding.desktop.left}px`,
			fontSize: `${fontSize.desktop}${fontSize.unit}`,
			fontFamily: typography.family,
			fontWeight: typography.weight,
			letterSpacing: typography.letterSpacing,
			textDecoration: typography.textDecoration,
			textTransform: typography.textTransform,
			lineHeight: `${typography.lineHeight}px`
		},
	});


	// Spacer block needs orientation from context. This is a patch until
	// https://github.com/WordPress/gutenberg/issues/36197 is addressed.
	useEffect(() => {
		if (orientation) {
			__unstableMarkNextChangeAsNotPersistent();
			setAttributes({ orientation });
		}
	}, [orientation]);

	const [showCantEditNotice, hideCantEditNotice] = useNavigationNotice({
		name: 'block-library/core/navigation/permissions/update',
		message: __(
			'You do not have permission to edit this Menu. Any changes made will not be saved.'
		),
	});

	const [showCantCreateNotice, hideCantCreateNotice] = useNavigationNotice(
		{
			name: 'block-library/core/navigation/permissions/create',
			message: __(
				'You do not have permission to create Navigation Menus.'
			),
		}
	);

	useEffect(() => {
		if (!isSelected && !isInnerBlockSelected) {
			hideCantEditNotice();
			hideCantCreateNotice();
		}

		if (isSelected || isInnerBlockSelected) {
			if (
				hasResolvedCanUserUpdateNavigationMenu &&
				!canUserUpdateNavigationMenu
			) {
				showCantEditNotice();
			}

			if (
				!ref &&
				hasResolvedCanUserCreateNavigationMenu &&
				!canUserCreateNavigationMenu
			) {
				showCantCreateNotice();
			}
		}
	}, [
		isSelected,
		isInnerBlockSelected,
		canUserUpdateNavigationMenu,
		hasResolvedCanUserUpdateNavigationMenu,
		canUserCreateNavigationMenu,
		hasResolvedCanUserCreateNavigationMenu,
		ref,
	]);

	const resetToEmptyBlock = useCallback(() => {
		registry.batch(() => {
			if (navigationArea) {
				setAreaMenu(0);
			}
			setAttributes({
				ref: undefined,
			});
			if (!ref) {
				replaceInnerBlocks(clientId, []);
			}
		});
	}, [clientId, ref]);

	// If the block has inner blocks, but no menu id, this was an older
	// navigation block added before the block used a wp_navigation entity.
	// Either this block was saved in the content or inserted by a pattern.
	// Consider this 'unsaved'. Offer an uncontrolled version of inner blocks,
	// that automatically saves the menu.
	const hasUnsavedBlocks = hasUncontrolledInnerBlocks && !isEntityAvailable;
	if (hasUnsavedBlocks) {
		return (
			<TagName {...blockProps}>
				<UnsavedInnerBlocks
					blockProps={blockProps}
					blocks={uncontrolledInnerBlocks}
					clientId={clientId}
					navigationMenus={navigationMenus}
					hasSelection={isSelected || isInnerBlockSelected}
					hasSavedUnsavedInnerBlocks={
						hasSavedUnsavedInnerBlocks
					}
					onSave={(post) => {
						// Set some state used as a guard to prevent the creation of multiple posts.
						setHasSavedUnsavedInnerBlocks(true);
						// Switch to using the wp_navigation entity.
						setRef(post.id);
					}}
				/>
			</TagName>
		);
	}

	// Show a warning if the selected menu is no longer available.
	// TODO - the user should be able to select a new one?
	if (ref && isNavigationMenuMissing) {
		return (
			<div {...blockProps}>
				<Warning>
					{__(
						'Navigation menu has been deleted or is unavailable. '
					)}
					<Button onClick={resetToEmptyBlock} variant="link">
						{__('Create a new menu?')}
					</Button>
				</Warning>
			</div>
		);
	}

	if (isEntityAvailable && hasAlreadyRendered) {
		return (
			<div {...blockProps}>
				<Warning>
					{__('Block cannot be rendered inside itself.')}
				</Warning>
			</div>
		);
	}

	const PlaceholderComponent = CustomPlaceholder
		? CustomPlaceholder
		: Placeholder;

	const isResponsive = 'never' !== overlayMenu;

	const overlayMenuPreviewClasses = classnames(
		'premium-navigation__overlay-menu-preview',
		{ open: overlayMenuPreview }
	);

	if (isPlaceholder) {
		return (
			<TagName {...blockProps}>
				<PlaceholderComponent
					isSelected={isSelected}
					currentMenuId={ref}
					clientId={clientId}
					canUserCreateNavigationMenu={canUserCreateNavigationMenu}
					isResolvingCanUserCreateNavigationMenu={
						isResolvingCanUserCreateNavigationMenu
					}
					onCreateEmpty={() => createNavigationMenu('', [])}
				/>
			</TagName>
		);
	}

	const setMenuColor = (color, value) => {
		const newColors = { ...menuColors };
		newColors[color] = value;
		setAttributes({ menuColors: newColors });
	}

	const setOverlayMenuColor = (color, value) => {
		const newColors = { ...overlayColors };
		newColors[color] = value;
		setAttributes({ overlayColors: newColors });
	}

	const setSubmenuColor = (color, value) => {
		const newColors = { ...submenuColors };
		newColors[color] = value;
		setAttributes({ submenuColors: newColors });
	}

	const onChangeMargin = (side, value, device) => {
		const newMargin = { ...margin };
		newMargin[device][side] = value;
		setAttributes({ spacing: { ...spacing, margin: newMargin } });
	}

	const onChangePadding = (side, value, device) => {
		const newPadding = { ...padding };
		newPadding[device][side] = value;
		setAttributes({ spacing: { ...spacing, padding: newPadding } });
	}

	const onChangeItemPadding = (side, value, device) => {
		const newPadding = { ...padding };
		newPadding[device][side] = value;
		setAttributes({ spacing: { ...spacing, itemPadding: newPadding } });
	}

	const onChangeFontSize = (value, device) => {
		const newSize = { ...fontSize };
		newSize[device] = value;
		setAttributes({ typography: { ...typography, size: newSize } });
	}

	const onChangeFont = (value, attr) => {
		setAttributes({ typography: { ...typography, [attr]: value } });
	}

	const onChangeSubmenuFontSize = (value, device) => {
		const newSize = { ...submenuFontSize };
		newSize[device] = value;
		setAttributes({ submenuTypography: { ...submenuTypography, size: newSize } });
	}

	const onChangeSubmenuFont = (value, attr) => {
		setAttributes({ submenuTypography: { ...submenuTypography, [attr]: value } });
	}

	return (
		<EntityProvider kind="postType" type="wp_navigation" id={ref}>
			<RecursionProvider>
				<InspectorControls>
					<PanelBody title={__('Display')}>
						{(
							<>
								{isResponsive && (
									<Button
										className={overlayMenuPreviewClasses}
										onClick={() => {
											setOverlayMenuPreview(
												!overlayMenuPreview
											);
										}}
									>
										{hasIcon && <OverlayMenuIcon />}
										{!hasIcon && (
											<span>{__('Menu')}</span>
										)}
									</Button>
								)}
								{overlayMenuPreview && (
									<ToggleControl
										label={__('Show icon button')}
										help={__(
											'Configure the visual appearance of the button opening the overlay menu.'
										)}
										onChange={(value) =>
											setAttributes({ hasIcon: value })
										}
										checked={hasIcon}
									/>
								)}
								<h3>{__('Overlay Menu')}</h3>
								<ToggleGroupControl
									label={__('Configure overlay menu')}
									value={overlayMenu}
									help={__(
										'Collapses the navigation options in a menu icon opening an overlay.'
									)}
									onChange={(value) =>
										setAttributes({ overlayMenu: value })
									}
									isBlock
									hideLabelFromVision
								>
									<ToggleGroupControlOption
										value="never"
										label={__('Off')}
									/>
									<ToggleGroupControlOption
										value="mobile"
										label={__('Mobile')}
									/>
									<ToggleGroupControlOption
										value="always"
										label={__('Always')}
									/>
								</ToggleGroupControl>
								{hasSubmenus && hasSubmenuIndicatorSetting && (
									<>
										<h3>{__('Submenus')}</h3>
										<ToggleControl
											checked={openSubmenusOnClick}
											onChange={(value) => {
												setAttributes({
													openSubmenusOnClick: value,
													...(value && {
														showSubmenuIcon: true,
													}), // Make sure arrows are shown when we toggle this on.
												});
											}}
											label={__('Open on click')}
										/>

										<ToggleControl
											checked={showSubmenuIcon}
											onChange={(value) => {
												setAttributes({
													showSubmenuIcon: value,
												});
											}}
											disabled={
												attributes.openSubmenusOnClick
											}
											label={__('Show arrow')}
										/>
									</>
								)}
							</>
						)}
					</PanelBody>
					<PanelBody title={__('Menu Settings')}>
						<div className='menu-styles'>
							<label>{__('Hover Effect', 'premium-blocks-for-gutenberg')}</label>
							<select style={{ display: "block", width: "100%" }} onChange={(e) => setAttributes({ menuStyle: e.target.value })} value={menuStyle}>
								<option value="none">{__('None', 'premium-blocks-for-gutenberg')}</option>
								<option value="underline-stroke">{__('Underline Stroke', 'premium-blocks-for-gutenberg')}</option>
								<option value="underline-fill">{__('Underline Fill', 'premium-blocks-for-gutenberg')}</option>
								<option value="underline-dots">{__('Underline Dots', 'premium-blocks-for-gutenberg')}</option>
								<option value="textcolor-fill">{__('Text Color Fill', 'premium-blocks-for-gutenberg')}</option>
								<option value="topbottom-lines">{__('Top Bottom Lines', 'premium-blocks-for-gutenberg')}</option>
							</select>
						</div>
					</PanelBody>
					<PanelBody title={__('Menu Colors')}>
						<TabPanel
							className="premium-color-tabpanel"
							activeClass="active-tab"
							tabs={[
								{
									name: "normal",
									title: "Normal",
									className: "premium-tab",
								},
								{
									name: "hover",
									title: "Hover",
									className: "premium-tab",
								},
							]}
						>
							{(tab) => {
								if ("normal" === tab.name) {
									return (
										<Fragment>
											<AdvancedPopColorControl
												label={__(`Links Color`, 'premium-blocks-for-gutenberg')}
												colorValue={menuColors.link}
												onColorChange={newValue => setMenuColor('link', newValue)}
												colorDefault={''}
											/>
											<AdvancedPopColorControl
												label={__(`Background Color`, 'premium-blocks-for-gutenberg')}
												colorValue={menuColors.background}
												onColorChange={newValue => setMenuColor('background', newValue)}
												colorDefault={''}
											/>
										</Fragment>
									);
								}
								if ("hover" === tab.name) {
									return (
										<Fragment>
											<AdvancedPopColorControl
												label={__(`Links Color`, 'premium-blocks-for-gutenberg')}
												colorValue={menuColors.linkHover}
												onColorChange={newValue => setMenuColor('linkHover', newValue)}
												colorDefault={''}
											/>
										</Fragment>
									);
								}
							}}
						</TabPanel>
					</PanelBody>
					<PanelBody title={__('Overlay Menu Colors')}>
						<TabPanel
							className="premium-color-tabpanel"
							activeClass="active-tab"
							tabs={[
								{
									name: "normal",
									title: "Normal",
									className: "premium-tab",
								},
								{
									name: "hover",
									title: "Hover",
									className: "premium-tab",
								},
							]}
						>
							{(tab) => {
								if ("normal" === tab.name) {
									return (
										<Fragment>
											<AdvancedPopColorControl
												label={__(`Links Color`, 'premium-blocks-for-gutenberg')}
												colorValue={overlayColors.link}
												onColorChange={newValue => setOverlayMenuColor('link', newValue)}
												colorDefault={''}
											/>
											<AdvancedPopColorControl
												label={__(`Background Color`, 'premium-blocks-for-gutenberg')}
												colorValue={overlayColors.background}
												onColorChange={newValue => setOverlayMenuColor('background', newValue)}
												colorDefault={''}
											/>
											<AdvancedPopColorControl
												label={__(`Icon`, 'premium-blocks-for-gutenberg')}
												colorValue={overlayColors.icon}
												onColorChange={newValue => setOverlayMenuColor('icon', newValue)}
												colorDefault={''}
											/>
										</Fragment>
									);
								}
								if ("hover" === tab.name) {
									return (
										<Fragment>
											<AdvancedPopColorControl
												label={__(`Links Color`, 'premium-blocks-for-gutenberg')}
												colorValue={overlayColors.linkHover}
												onColorChange={newValue => setOverlayMenuColor('linkHover', newValue)}
												colorDefault={''}
											/>
											<AdvancedPopColorControl
												label={__(`Icon`, 'premium-blocks-for-gutenberg')}
												colorValue={overlayColors.iconHover}
												onColorChange={newValue => setOverlayMenuColor('iconHover', newValue)}
												colorDefault={''}
											/>
										</Fragment>
									);
								}
							}}
						</TabPanel>
					</PanelBody>
					<PanelBody
						title={__('Spacing', 'premium-blocks-for-gutenberg')}
						initialOpen={false}
					>
						<PremiumResponsiveMargin
							directions={["all"]}
							marginTop={margin.desktop.top}
							marginRight={margin.desktop.right}
							marginBottom={margin.desktop.bottom}
							marginLeft={margin.desktop.left}
							marginTopTablet={margin.tablet.top}
							marginRightTablet={margin.tablet.right}
							marginBottomTablet={margin.tablet.bottom}
							marginLeftTablet={margin.tablet.left}
							marginTopMobile={margin.mobile.top}
							marginRightMobile={margin.mobile.right}
							marginBottomMobile={margin.mobile.bottom}
							marginLeftMobile={margin.mobile.left}
							onChangeMarginTop={
								(device, newValue) => {
									onChangeMargin('top', newValue, device);
								}
							}
							onChangeMarginRight={
								(device, newValue) => {
									onChangeMargin('right', newValue, device);
								}
							}
							onChangeMarginBottom={
								(device, newValue) => {
									onChangeMargin('bottom', newValue, device);
								}
							}
							onChangeMarginLeft={
								(device, newValue) => {
									onChangeMargin('left', newValue, device);
								}
							}
						/>
						<PremiumResponsivePadding
							directions={["all"]}
							paddingTop={padding.desktop.top}
							paddingRight={padding.desktop.right}
							paddingBottom={padding.desktop.bottom}
							paddingLeft={padding.desktop.left}
							paddingTopTablet={padding.tablet.top}
							paddingRightTablet={padding.tablet.right}
							paddingBottomTablet={padding.tablet.bottom}
							paddingLeftTablet={padding.tablet.left}
							paddingTopMobile={padding.mobile.top}
							paddingRightMobile={padding.mobile.right}
							paddingBottomMobile={padding.mobile.bottom}
							paddingLeftMobile={padding.mobile.left}
							onChangePaddingTop={
								(device, newValue) => {
									onChangePadding('top', newValue, device);
								}
							}
							onChangePaddingRight={
								(device, newValue) => {
									onChangePadding('right', newValue, device);
								}
							}
							onChangePaddingBottom={
								(device, newValue) => {
									onChangePadding('bottom', newValue, device);
								}
							}
							onChangePaddingLeft={
								(device, newValue) => {
									onChangePadding('left', newValue, device);
								}
							}
						/>
					</PanelBody>
					<PanelBody
						title={__('Menu Item Spacing', 'premium-blocks-for-gutenberg')}
						initialOpen={false}
					>
						<PremiumResponsivePadding
							directions={["all"]}
							paddingTop={itemPadding.desktop.top}
							paddingRight={itemPadding.desktop.right}
							paddingBottom={itemPadding.desktop.bottom}
							paddingLeft={itemPadding.desktop.left}
							paddingTopTablet={itemPadding.tablet.top}
							paddingRightTablet={itemPadding.tablet.right}
							paddingBottomTablet={itemPadding.tablet.bottom}
							paddingLeftTablet={itemPadding.tablet.left}
							paddingTopMobile={itemPadding.mobile.top}
							paddingRightMobile={itemPadding.mobile.right}
							paddingBottomMobile={itemPadding.mobile.bottom}
							paddingLeftMobile={itemPadding.mobile.left}
							onChangePaddingTop={
								(device, newValue) => {
									onChangeItemPadding('top', newValue, device);
								}
							}
							onChangePaddingRight={
								(device, newValue) => {
									onChangeItemPadding('right', newValue, device);
								}
							}
							onChangePaddingBottom={
								(device, newValue) => {
									onChangeItemPadding('bottom', newValue, device);
								}
							}
							onChangePaddingLeft={
								(device, newValue) => {
									onChangeItemPadding('left', newValue, device);
								}
							}
						/>
					</PanelBody>
					<PanelBody
						title={__("Typography", 'premium-blocks-for-gutenberg')}
						className="premium-panel-body"
						initialOpen={false}
					>
						<PremiumTypo
							components={["responsiveSize", "weight", "family", "spacing", "style", "Upper", "line", "Decoration"]}
							setAttributes={value => onChangeFontSize(value.SizeUnit, 'unit')}
							fontSizeType={{
								value: fontSize.unit,
								label: __("SizeUnit", 'premium-blocks-for-gutenberg'),
							}}
							fontSize={fontSize.desktop}
							fontSizeMobile={fontSize.mobile}
							fontSizeTablet={fontSize.tablet}
							onChangeSize={newSize => onChangeFontSize(newSize, 'desktop')}
							onChangeTabletSize={newSize => onChangeFontSize(newSize, 'tablet')}
							onChangeMobileSize={newSize => onChangeFontSize(newSize, 'mobile')}
							fontFamily={typography.family}
							weight={typography.weight}
							onChangeWeight={newWeight =>
								onChangeFont(newWeight, 'weight')
							}
							onChangeFamily={(fontFamily) => onChangeFont(fontFamily, 'family')}
							line={typography.lineHeight}
							onChangeLine={(lineHeight) => onChangeFont(lineHeight, 'lineHeight')}
							style={typography.style}
							onChangeStyle={(newStyle) => onChangeFont(newStyle, 'style')}
							spacing={typography.letterSpacing}
							onChangeSpacing={(letterSpacing) => onChangeFont(letterSpacing, 'letterSpacing')}
							textTransform={typography.textTransform}
							onChangeTextTransform={(textTransform) => onChangeFont(textTransform, 'textTransform')}
							textDecoration={typography.textDecoration}
							onChangeTextDecoration={(textDecoration) => onChangeFont(textDecoration, 'textDecoration')}
						/>
					</PanelBody>
					{hasSubmenus && hasSubmenuIndicatorSetting && (
						<>
							<PanelBody
								title={__("Submenu Typography", 'premium-blocks-for-gutenberg')}
								className="premium-panel-body"
								initialOpen={false}
							>
								<PremiumTypo
									components={["responsiveSize", "weight", "family", "spacing", "style", "Upper", "line", "Decoration"]}
									setAttributes={value => onChangeSubmenuFontSize(value.SizeUnit, 'unit')}
									fontSizeType={{
										value: submenuFontSize.unit,
										label: __("SizeUnit", 'premium-blocks-for-gutenberg'),
									}}
									fontSize={submenuFontSize.desktop}
									fontSizeMobile={submenuFontSize.mobile}
									fontSizeTablet={submenuFontSize.tablet}
									onChangeSize={newSize => onChangeSubmenuFontSize(newSize, 'desktop')}
									onChangeTabletSize={newSize => onChangeSubmenuFontSize(newSize, 'tablet')}
									onChangeMobileSize={newSize => onChangeSubmenuFontSize(newSize, 'mobile')}
									fontFamily={submenuTypography.family}
									weight={submenuTypography.weight}
									onChangeWeight={newWeight =>
										onChangeSubmenuFont(newWeight, 'weight')
									}
									onChangeFamily={(fontFamily) => onChangeSubmenuFont(fontFamily, 'family')}
									line={submenuTypography.lineHeight}
									onChangeLine={(lineHeight) => onChangeSubmenuFont(lineHeight, 'lineHeight')}
									style={submenuTypography.style}
									onChangeStyle={(newStyle) => onChangeSubmenuFont(newStyle, 'style')}
									spacing={submenuTypography.letterSpacing}
									onChangeSpacing={(letterSpacing) => onChangeSubmenuFont(letterSpacing, 'letterSpacing')}
									textTransform={submenuTypography.textTransform}
									onChangeTextTransform={(textTransform) => onChangeSubmenuFont(textTransform, 'textTransform')}
									textDecoration={submenuTypography.textDecoration}
									onChangeTextDecoration={(textDecoration) => onChangeSubmenuFont(textDecoration, 'textDecoration')}
								/>
							</PanelBody>
							<PanelBody title={__('Submenu Settings')}>
								<div className='menu-styles' style={{ marginBottom: '20px' }}>
									<label className='components-base-control__label'>{__('Dropdown Reveal', 'premium-blocks-for-gutenberg')}</label>
									<select style={{ display: "block", width: "100%" }} onChange={(e) => setAttributes({ dropdownReveal: e.target.value })} value={dropdownReveal}>
										<option value="none">{__('None', 'premium-blocks-for-gutenberg')}</option>
										<option value="fade">{__('Fade', 'premium-blocks-for-gutenberg')}</option>
										<option value="fade-up">{__('Fade Up', 'premium-blocks-for-gutenberg')}</option>
										<option value="fade-down">{__('Fade Down', 'premium-blocks-for-gutenberg')}</option>
									</select>
								</div>
								<RangeControl
									label={__('Submenu Width', 'premium-blocks-for-gutenberg')}
									value={submenuWidth}
									onChange={(size) => setAttributes({ submenuWidth: size })}
									min={200}
									max={500}
								/>
								<ToggleControl
									label={__("Submenu Box Shadow", 'premium-blocks-for-gutenberg')}
									checked={submenuShadow}
									onChange={check => setAttributes({ submenuShadow: check })}
								/>
							</PanelBody>
							<PanelBody title={__('Submenu Colors')}>
								<TabPanel
									className="premium-color-tabpanel"
									activeClass="active-tab"
									tabs={[
										{
											name: "normal",
											title: "Normal",
											className: "premium-tab",
										},
										{
											name: "hover",
											title: "Hover",
											className: "premium-tab",
										},
									]}
								>
									{(tab) => {
										if ("normal" === tab.name) {
											return (
												<Fragment>
													<AdvancedPopColorControl
														label={__(`Links Color`, 'premium-blocks-for-gutenberg')}
														colorValue={submenuColors.link}
														onColorChange={newValue => setSubmenuColor('link', newValue)}
														colorDefault={''}
													/>
													<AdvancedPopColorControl
														label={__(`Background Color`, 'premium-blocks-for-gutenberg')}
														colorValue={submenuColors.background}
														onColorChange={newValue => setSubmenuColor('background', newValue)}
														colorDefault={''}
													/>
												</Fragment>
											);
										}
										if ("hover" === tab.name) {
											return (
												<Fragment>
													<AdvancedPopColorControl
														label={__(`Links Color`, 'premium-blocks-for-gutenberg')}
														colorValue={submenuColors.linkHover}
														onColorChange={newValue => setSubmenuColor('linkHover', newValue)}
														colorDefault={''}
													/>
												</Fragment>
											);
										}
									}}
								</TabPanel>
							</PanelBody>

						</>
					)}
				</InspectorControls>
				{isEntityAvailable && (
					<InspectorControls __experimentalGroup="advanced">
						{hasResolvedCanUserUpdateNavigationMenu &&
							canUserUpdateNavigationMenu && (
								<NavigationMenuNameControl />
							)}
						{hasResolvedCanUserDeleteNavigationMenu &&
							canUserDeleteNavigationMenu && (
								<NavigationMenuDeleteControl
									onDelete={resetToEmptyBlock}
								/>
							)}
					</InspectorControls>
				)}

				{isLoading && (
					<TagName {...blockProps}>
						<Spinner className="premium-navigation__loading-indicator" />
					</TagName>
				)}

				{!isLoading && (
					<TagName {...blockProps}>
						<style
							dangerouslySetInnerHTML={{
								__html: [
									`#${blockProps.id} .premium-navigation-item__content{`,
									`--pbg-links-color: ${menuColors?.link};`,
									`--pbg-links-hover-color: ${menuColors?.linkHover};`,
									`color: var(--pbg-links-color);`,
									`}`,
									`#${blockProps.id} .premium-navigation__container > div > .premium-navigation-item__content{`,
									`padding-top: ${itemPadding.desktop.top}px;`,
									`padding-right: ${itemPadding.desktop.right}px;`,
									`padding-bottom: ${itemPadding.desktop.bottom}px;`,
									`padding-left: ${itemPadding.desktop.left}px;`,
									`}`,
									`#${blockProps.id} .premium-navigation-item__content:hover {`,
									`color: var(--pbg-links-hover-color);`,
									"}",
									`#${blockProps.id} .premium-navigation__responsive-container-open {`,
									`color: ${overlayColors.icon};`,
									"}",
									`#${blockProps.id} .premium-navigation__responsive-container-open:hover {`,
									`color: ${overlayColors.iconHover};`,
									"}",
									`#${blockProps.id} .premium-navigation__responsive-container.is-menu-open {`,
									`background-color: ${overlayColors.background};`,
									"}",
									`#${blockProps.id} .premium-navigation__responsive-container.is-menu-open .premium-navigation-item__content{`,
									`--pbg-links-color: ${overlayColors.link};`,
									"}",
									`#${blockProps.id} .premium-navigation__responsive-container.is-menu-open .premium-navigation-item__content:hover{`,
									`--pbg-links-hover-color: ${overlayColors.linkHover};`,
									"}",
								].join("\n")
							}}
						/>
						<ResponsiveWrapper
							id={clientId}
							onToggle={setResponsiveMenuVisibility}
							label={__('Menu')}
							hasIcon={hasIcon}
							isOpen={isResponsiveMenuOpen}
							isResponsive={isResponsive}
							isHiddenByDefault={'always' === overlayMenu}
						>
							{isEntityAvailable && (
								<NavigationInnerBlocks
									clientId={clientId}
									hasCustomPlaceholder={
										!!CustomPlaceholder
									}
									orientation={orientation}
								/>
							)}
						</ResponsiveWrapper>
					</TagName>
				)}
			</RecursionProvider>
		</EntityProvider>
	);
}

export default withColors(
	{ textColor: 'color' },
	{ backgroundColor: 'color' },
)(Navigation);
