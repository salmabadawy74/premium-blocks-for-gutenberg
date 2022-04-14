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
	Platform,
} from '@wordpress/element';
import {
	InspectorControls,
	useBlockProps,
	__experimentalUseNoRecursiveRenders as useNoRecursiveRenders,
	store as blockEditorStore,
	withColors,
	PanelColorSettings,
	ContrastChecker,
	getColorClassName,
	Warning,
} from '@wordpress/block-editor';
import { EntityProvider, useEntityProp } from '@wordpress/core-data';

import { useDispatch, useSelect, useRegistry } from '@wordpress/data';
import {
	PanelBody,
	ToggleControl,
	Button,
	Spinner,
	TabPanel
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
		layout: {
			justifyContent,
			orientation = 'horizontal',
			flexWrap = 'wrap',
		} = {},
		menuColors,
		submenuColors,
		spacing,
		typography
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
					(block) => block.name === 'kemet/navigation-submenu'
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

	const blockProps = useBlockProps({
		ref: navRef,
		className: classnames(className, {
			'items-justified-right': justifyContent === 'right',
			'items-justified-space-between': justifyContent === 'space-between',
			'items-justified-left': justifyContent === 'left',
			'items-justified-center': justifyContent === 'center',
			'is-vertical': orientation === 'vertical',
			'no-wrap': flexWrap === 'nowrap',
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


	// Turn on contrast checker for web only since it's not supported on mobile yet.
	const enableContrastChecking = Platform.OS === 'web';

	const [detectedBackgroundColor, setDetectedBackgroundColor] = useState();
	const [detectedColor, setDetectedColor] = useState();


	// Spacer block needs orientation from context. This is a patch until
	// https://github.com/WordPress/gutenberg/issues/36197 is addressed.
	useEffect(() => {
		if (orientation) {
			__unstableMarkNextChangeAsNotPersistent();
			setAttributes({ orientation });
		}
	}, [orientation]);

	useEffect(() => {
		if (!enableContrastChecking) {
			return;
		}
		detectColors(
			navRef.current,
			setDetectedColor,
			setDetectedBackgroundColor
		);
		const subMenuElement = navRef.current?.querySelector(
			'[data-type="kemet/navigation-link"] [data-type="kemet/navigation-link"]'
		);
		if (subMenuElement) {
			detectColors(
				subMenuElement,
			);
		}
	});

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

	const setSubmenuColor = (color, value) => {
		const newColors = { ...menuColors };
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

	const onChangeFontSize = (value, device) => {
		const newSize = { ...fontSize };
		newSize[device] = value;
		setAttributes({ typography: { ...typography, size: newSize } });
	}

	const onChangeFont = (value, attr) => {
		setAttributes({ typography: { ...typography, [attr]: value } });
	}

	return (
		<EntityProvider kind="postType" type="wp_navigation" id={ref}>
			<RecursionProvider>
				<InspectorControls>
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
							marginTop={padding.desktop.top}
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
							<PanelBody title={__('Display')}>
								{(
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
									`#${blockProps.id} a{`,
									`color: ${menuColors?.link};`,
									`#${blockProps.id} a:hover {`,
									`color: ${menuColors.linkHover};`,
									"}"
								].join("\n")
							}}
						/>
						{isEntityAvailable && (
							<NavigationInnerBlocks
								clientId={clientId}
								hasCustomPlaceholder={
									!!CustomPlaceholder
								}
								orientation={orientation}
							/>
						)}
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
