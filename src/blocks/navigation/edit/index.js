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

import { useDispatch, useSelect, useRegistry, withSelect } from '@wordpress/data';
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
import SpacingComponent from '../../../components/premium-responsive-spacing';
import PremiumBorder from "../../../components/premium-border"
import PremiumTypo from "../../../components/premium-typo"
import PremiumResponsiveTabs from "../../../components/premium-responsive-tabs";
import InspectorTabs from '../../../components/inspectorTabs';
import InspectorTab from '../../../components/inspectorTab';
import { generateBlockId, generateCss, typographyCss, paddingCss, marginCss, borderCss } from '../../../components/HelperFunction';
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

function Navigation({
	attributes,
	setAttributes,
	clientId,
	isSelected,
	className,
	context: { navigationArea },

	// These props are used by the navigation editor to override specific
	// navigation block settings.
	hasSubmenuIndicatorSetting = true,
	customPlaceholder: CustomPlaceholder = null,
	deviceType = 'Desktop',
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
		overlayColors,
		mobileBreakPoint,
		menuBorder,
		submenuBorder,
		overlayMenuBorder,
		overlayMenuWidth,
		overlayMenuStyle,
		blockId,
		hideDesktop,
		hideTablet,
		hideMobile,
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

	useEffect(() => {
		if (!blockId) {
			setAttributes({ blockId: "premium-navigation-" + generateBlockId(clientId) })
		}
	})

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

	const defaultSize = {
		desktop: "",
		tablet: "",
		mobile: "",
		unit: "px"
	};
	let margin = spacing.margin ? spacing.margin : {};
	let padding = spacing.padding ? spacing.padding : {};
	const fontSize = typography.fontSize ? typography.fontSize : defaultSize;
	const itemPadding = spacing.itemPadding ? spacing.itemPadding : {};

	const blockProps = useBlockProps({
		ref: navRef,
		className: classnames(dropdownReveal && overlayMenu !== 'always' ? `submenu-${dropdownReveal}` : '', menuStyle && overlayMenu !== 'always' ? `effect-${menuStyle}` : '', className, overlayMenu !== 'never' && overlayMenuStyle === 'slide' ? 'overlay-menu-slide' : '', blockId, {
			'items-justified-right': justifyContent === 'right',
			'items-justified-space-between': justifyContent === 'space-between',
			'items-justified-left': justifyContent === 'left',
			'items-justified-center': justifyContent === 'center',
			'is-vertical': orientation === 'vertical',
			'no-wrap': flexWrap === 'nowrap',
			'submenu-box-shadow': submenuShadow && overlayMenu !== 'always',
			'premium-desktop-hidden': hideDesktop,
			'premium-tablet-hidden': hideTablet,
			'premium-mobile-hidden': hideMobile,
		}),
		style: {
			color: menuColors?.link,
			backgroundColor: menuColors?.background,
			...paddingCss(padding, deviceType),
			...marginCss(margin, deviceType),
			...borderCss(menuBorder, deviceType),
			...typographyCss(typography, deviceType)
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

	const onChangeSpacing = (value) => {
		const newSpacing = { ...spacing, ...value };
		setAttributes({ spacing: newSpacing });
	}

	const loadStyles = () => {
		const styles = {};

		styles[`.${blockId}.overlay-menu-slide .premium-navigation__responsive-container`] = {
			'--overlay-menu-width': `${overlayMenuWidth}px`
		}

		styles[`.${blockId} > div.is-menu-open .wp-block-premium-navigation-submenu .premium-navigation__submenu-container`] = {
			'border': 'none !important'
		}

		styles[`.${blockId} .premium-navigation-item__content`] = {
			'--pbg-links-color': menuColors?.link,
			'--pbg-links-hover-color': menuColors?.linkHover
		}

		styles[`.${blockId} .premium-navigation__container > div > .premium-navigation-item__content`] = {
			'padding-top': `${itemPadding?.[deviceType]?.top}${itemPadding?.unit}`,
			'padding-right': `${itemPadding?.[deviceType]?.right}${itemPadding?.unit}`,
			'padding-bottom': `${itemPadding?.[deviceType]?.bottom}${itemPadding?.unit}`,
			'padding-left': `${itemPadding?.[deviceType]?.left}${itemPadding?.unit}`,
		}

		styles[`.${blockId} .premium-navigation__responsive-container-open`] = {
			'color': overlayColors?.icon
		}

		styles[`.${blockId} .premium-navigation__responsive-container-open:hover`] = {
			'color': overlayColors?.iconHover
		}

		styles[`.${blockId} .premium-navigation__responsive-container.is-menu-open`] = {
			'background-color': overlayColors?.background
		}

		styles[`.${blockId} .premium-navigation__responsive-container.is-menu-open .premium-navigation-item__content`] = {
			'--pbg-links-color': overlayColors?.link,
			'--pbg-links-hover-color': overlayColors?.linkHover
		}

		return generateCss(styles);
	}


	return (
		<EntityProvider kind="postType" type="wp_navigation" id={ref}>
			<RecursionProvider>
				<InspectorControls>
					<InspectorTabs tabs={['layout', 'style', 'advance']}>
						<InspectorTab key={'layout'}>
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
											<ToggleGroupControlOption
												value="custom"
												label={__('Custom')}
											/>
										</ToggleGroupControl>
										{overlayMenu === 'custom' && <RangeControl
											label={__('Width', 'premium-blocks-for-gutenberg')}
											value={mobileBreakPoint}
											onChange={(size) => setAttributes({ mobileBreakPoint: size })}
											min={200}
											max={3000}
										/>}
										{overlayMenu !== 'never' && (
											<>
												<h3>{__('Overlay Menu Style')}</h3>
												<ToggleGroupControl
													label={__('Overlay menu styles')}
													value={overlayMenuStyle}
													onChange={(value) =>
														setAttributes({ overlayMenuStyle: value })
													}
													isBlock
													hideLabelFromVision
												>
													<ToggleGroupControlOption
														value="full"
														label={__('Full Width')}
													/>
													<ToggleGroupControlOption
														value="slide"
														label={__('Slide')}
													/>
												</ToggleGroupControl>
											</>
										)}
										{overlayMenu !== 'never' && overlayMenuStyle === 'slide' && <RangeControl
											label={__('Overlay Menu Width', 'premium-blocks-for-gutenberg')}
											value={overlayMenuWidth}
											onChange={(size) => setAttributes({ overlayMenuWidth: size })}
											min={300}
											max={2000}
										/>}
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
						</InspectorTab>
						<InspectorTab key={'style'}>
							<PanelBody title={__('Menu')}>
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
								<hr />
								<PremiumTypo
									components={["responsiveSize", "weight", "family", "spacing", "style", "Upper", "line", "Decoration"]}
									value={typography}
									onChange={newValue => setAttributes({ typography: newValue })}
								/>
								<hr />
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
								<hr />
								<PremiumBorder
									label={__("Border")}
									value={menuBorder}
									onChange={(value) => setAttributes({ menuBorder: value })}
								/>
								<hr />
								<SpacingComponent value={margin} responsive={true} showUnits={true} label={__('Menu Margin')} onChange={(value) => onChangeSpacing({ margin: value })} />
								<SpacingComponent value={padding} responsive={true} showUnits={true} label={__('Menu Padding')} onChange={(value) => onChangeSpacing({ padding: value })} />
								<SpacingComponent value={itemPadding} responsive={true} showUnits={true} label={__('Menu Item Padding')} onChange={(value) => onChangeSpacing({ itemPadding: value })} />
							</PanelBody>
							<PanelBody title={__('Overlay Menu')}>
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
								<hr />
								<PremiumBorder
									label={__("Border")}
									value={overlayMenuBorder}
									onChange={(value) => setAttributes({ overlayMenuBorder: value })}
								/>
							</PanelBody>
							{hasSubmenus && hasSubmenuIndicatorSetting && (
								<>
									<PanelBody title={__('Submenu')}>
										<div className='menu-styles' style={{ marginBottom: '20px' }}>
											<label className='components-base-control__label'>{__('Dropdown Reveal', 'premium-blocks-for-gutenberg')}</label>
											<select style={{ display: "block", width: "100%" }} onChange={(e) => setAttributes({ dropdownReveal: e.target.value })} value={dropdownReveal}>
												<option value="none">{__('None', 'premium-blocks-for-gutenberg')}</option>
												<option value="fade">{__('Fade', 'premium-blocks-for-gutenberg')}</option>
												<option value="fade-up">{__('Fade Up', 'premium-blocks-for-gutenberg')}</option>
												<option value="fade-down">{__('Fade Down', 'premium-blocks-for-gutenberg')}</option>
											</select>
										</div>
										<hr />
										<RangeControl
											label={__('Submenu Width', 'premium-blocks-for-gutenberg')}
											value={submenuWidth}
											onChange={(size) => setAttributes({ submenuWidth: size })}
											min={200}
											max={500}
										/>
										<hr />
										<PremiumTypo
											components={["responsiveSize", "weight", "family", "spacing", "style", "Upper", "line", "Decoration"]}
											value={submenuTypography}
											onChange={newValue => setAttributes({ submenuTypography: newValue })}
										/>
										<hr />
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
										<hr />
										<ToggleControl
											label={__("Submenu Box Shadow", 'premium-blocks-for-gutenberg')}
											checked={submenuShadow}
											onChange={check => setAttributes({ submenuShadow: check })}
										/>
										<hr />
										<PremiumBorder
											label={__("Border")}
											value={submenuBorder}
											onChange={(value) => setAttributes({ submenuBorder: value })}
										/>
									</PanelBody>

								</>
							)}
						</InspectorTab>
						<InspectorTab key={"advance"}>
							<PremiumResponsiveTabs
								Desktop={hideDesktop}
								Tablet={hideTablet}
								Mobile={hideMobile}
								onChangeDesktop={(value) =>
									setAttributes({
										hideDesktop: value,
									})
								}
								onChangeTablet={(value) =>
									setAttributes({
										hideTablet: value,
									})
								}
								onChangeMobile={(value) =>
									setAttributes({
										hideMobile: value,
									})
								}
							/>
						</InspectorTab>
					</InspectorTabs>
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
								__html: loadStyles()
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
							styles={isResponsiveMenuOpen ? {
								...borderCss(overlayMenuBorder, deviceType),
							} : {}}
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

export default withSelect((select, props) => {
	const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
	let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

	return {
		deviceType: deviceType
	}
})(Navigation)