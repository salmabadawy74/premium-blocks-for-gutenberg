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
	BlockControls,
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
	ToolbarGroup,
	Button,
	Spinner,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { speak } from '@wordpress/a11y';

/**
 * Internal dependencies
 */
import useListViewModal from './use-list-view-modal';
import useNavigationMenu from '../use-navigation-menu';
import useNavigationEntities from '../use-navigation-entities';
import Placeholder from './placeholder';
import NavigationInnerBlocks from './inner-blocks';
import NavigationMenuSelector from './navigation-menu-selector';
import NavigationMenuNameControl from './navigation-menu-name-control';
import UnsavedInnerBlocks from './unsaved-inner-blocks';
import NavigationMenuDeleteControl from './navigation-menu-delete-control';
import useNavigationNotice from './use-navigation-notice';
import useConvertClassicToBlockMenu, {
	CLASSIC_MENU_CONVERSION_ERROR,
	CLASSIC_MENU_CONVERSION_PENDING,
	CLASSIC_MENU_CONVERSION_SUCCESS,
} from './use-convert-classic-menu-to-block-menu';
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
	setBackgroundColor,
	textColor,
	setTextColor,
	context: { navigationArea },

	// These props are used by the navigation editor to override specific
	// navigation block settings.
	hasSubmenuIndicatorSetting = true,
	hasColorSettings = true,
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
		hasIcon,
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
		name: 'block-library/kemet/mega-menu/create',
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
		navigationMenu,
		canUserUpdateNavigationMenu,
		hasResolvedCanUserUpdateNavigationMenu,
		canUserDeleteNavigationMenu,
		hasResolvedCanUserDeleteNavigationMenu,
		canUserCreateNavigationMenu,
		isResolvingCanUserCreateNavigationMenu,
		hasResolvedCanUserCreateNavigationMenu,
	} = useNavigationMenu(ref);

	const navRef = useRef();
	const isDraftNavigationMenu = navigationMenu?.status === 'draft';

	const { listViewToolbarButton, listViewModal } = useListViewModal(
		clientId
	);

	const {
		convert,
		status: classicMenuConversionStatus,
		error: classicMenuConversionError,
		value: classicMenuConversionResult,
	} = useConvertClassicToBlockMenu(clientId);

	const isConvertingClassicMenu =
		classicMenuConversionStatus === CLASSIC_MENU_CONVERSION_PENDING;

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
		!isConvertingClassicMenu &&
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
		isConvertingClassicMenu ||
		!!(ref && !isEntityAvailable && !isConvertingClassicMenu);

	const blockProps = useBlockProps({
		ref: navRef,
		className: classnames(className, {
			'items-justified-right': justifyContent === 'right',
			'items-justified-space-between': justifyContent === 'space-between',
			'items-justified-left': justifyContent === 'left',
			'items-justified-center': justifyContent === 'center',
			'is-vertical': orientation === 'vertical',
			'no-wrap': flexWrap === 'nowrap',
			'has-text-color': !!textColor.color || !!textColor?.class,
			[getColorClassName(
				'color',
				textColor?.slug
			)]: !!textColor?.slug,
			'has-background': !!backgroundColor.color || backgroundColor.class,
			[getColorClassName(
				'background-color',
				backgroundColor?.slug
			)]: !!backgroundColor?.slug,
		}),
		style: {
			color: !textColor?.slug && textColor?.color,
			backgroundColor: !backgroundColor?.slug && backgroundColor?.color,
		},
	});


	// Turn on contrast checker for web only since it's not supported on mobile yet.
	const enableContrastChecking = Platform.OS === 'web';

	const [detectedBackgroundColor, setDetectedBackgroundColor] = useState();
	const [detectedColor, setDetectedColor] = useState();

	const [
		showClassicMenuConversionErrorNotice,
		hideClassicMenuConversionErrorNotice,
	] = useNavigationNotice({
		name: 'block-library/kemet/mega-menu/classic-menu-conversion/error',
	});

	function handleUpdateMenu(menuId) {
		setRef(menuId);
		selectBlock(clientId);
	}

	useEffect(() => {
		if (classicMenuConversionStatus === CLASSIC_MENU_CONVERSION_PENDING) {
			speak(__('Classic menu importing.'));
		}

		if (
			classicMenuConversionStatus === CLASSIC_MENU_CONVERSION_SUCCESS &&
			classicMenuConversionResult
		) {
			handleUpdateMenu(classicMenuConversionResult?.id);
			hideClassicMenuConversionErrorNotice();
			speak(__('Classic menu imported successfully.'));
		}

		if (classicMenuConversionStatus === CLASSIC_MENU_CONVERSION_ERROR) {
			showClassicMenuConversionErrorNotice(classicMenuConversionError);
			speak(__('Classic menu import failed.'));
		}
	}, [
		classicMenuConversionStatus,
		classicMenuConversionResult,
		classicMenuConversionError,
	]);

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
		name: 'block-library/kemet/mega-menu/permissions/update',
		message: __(
			'You do not have permission to edit this Menu. Any changes made will not be saved.'
		),
	});

	const [showCantCreateNotice, hideCantCreateNotice] = useNavigationNotice(
		{
			name: 'block-library/kemet/mega-menu/permissions/create',
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

	const handleSelectNavigation = useCallback(
		(navPostOrClassicMenu) => {
			if (!navPostOrClassicMenu) {
				return;
			}

			const isClassicMenu = navPostOrClassicMenu.hasOwnProperty(
				'auto_add'
			);

			if (isClassicMenu) {
				convert(navPostOrClassicMenu.id, navPostOrClassicMenu.name);
			} else {
				handleUpdateMenu(navPostOrClassicMenu.id);
			}
		},
		[convert, handleUpdateMenu]
	);

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
					onFinish={handleSelectNavigation}
					onCreateEmpty={() => createNavigationMenu('', [])}
				/>
			</TagName>
		);
	}

	return (
		<EntityProvider kind="postType" type="wp_navigation" id={ref}>
			<RecursionProvider>
				<BlockControls>
					{!isDraftNavigationMenu && isEntityAvailable && (
						<ToolbarGroup className="wp-block-navigation__toolbar-menu-selector">
							<NavigationMenuSelector
								currentMenuId={ref}
								clientId={clientId}
								onSelect={handleSelectNavigation}
								onCreateNew={resetToEmptyBlock}
								/* translators: %s: The name of a menu. */
								actionLabel={__("Switch to '%s'")}
								showManageActions
							/>
						</ToolbarGroup>
					)}
					<ToolbarGroup>{listViewToolbarButton}</ToolbarGroup>
				</BlockControls>
				{listViewModal}
				<InspectorControls>
					{hasSubmenuIndicatorSetting && (
						<PanelBody title={__('Display')}>
							{hasSubmenus && (
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
					)}
					<PanelBody title={__('Mega Menu Settings')}>

					</PanelBody>
					{hasColorSettings && (
						<PanelColorSettings
							__experimentalHasMultipleOrigins
							__experimentalIsRenderedInSidebar
							title={__('Color')}
							initialOpen={false}
							colorSettings={[
								{
									value: textColor.color,
									onChange: setTextColor,
									label: __('Text'),
								},
								{
									value: backgroundColor.color,
									onChange: setBackgroundColor,
									label: __('Background'),
								}
							]}
						>
							{enableContrastChecking && (
								<>
									<ContrastChecker
										backgroundColor={
											detectedBackgroundColor
										}
										textColor={detectedColor}
									/>
								</>
							)}
						</PanelColorSettings>
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
						<Spinner className="wp-block-navigation__loading-indicator" />
					</TagName>
				)}

				{!isLoading && (
					<TagName {...blockProps}>
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
