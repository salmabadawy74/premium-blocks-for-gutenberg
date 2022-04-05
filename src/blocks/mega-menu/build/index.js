/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/icon/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/icon/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps} props icon is the SVG component to render
 *                          size is a number specifiying the icon size in pixels
 *                          Other props will be passed to wrapped SVG component
 *
 * @return {JSX.Element}  Icon component
 */

function Icon(_ref) {
  let {
    icon,
    size = 24,
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon, {
    width: size,
    height: size,
    ...props
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Icon);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/list-view.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/list-view.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const listView = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M13.8 5.2H3v1.5h10.8V5.2zm-3.6 12v1.5H21v-1.5H10.2zm7.2-6H6.6v1.5h10.8v-1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (listView);
//# sourceMappingURL=list-view.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/navigation.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/navigation.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const navigation = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.5c-3.6 0-6.5-2.9-6.5-6.5S8.4 5.5 12 5.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zM9 16l4.5-3L15 8.4l-4.5 3L9 16z"
}));
/* harmony default export */ __webpack_exports__["default"] = (navigation);
//# sourceMappingURL=navigation.js.map

/***/ }),

/***/ "./mega-menu/edit/index.js":
/*!*********************************!*\
  !*** ./mega-menu/edit/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/a11y */ "@wordpress/a11y");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _use_list_view_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./use-list-view-modal */ "./mega-menu/edit/use-list-view-modal.js");
/* harmony import */ var _use_navigation_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../use-navigation-menu */ "./mega-menu/use-navigation-menu.js");
/* harmony import */ var _use_navigation_entities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../use-navigation-entities */ "./mega-menu/use-navigation-entities.js");
/* harmony import */ var _placeholder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./placeholder */ "./mega-menu/edit/placeholder/index.js");
/* harmony import */ var _inner_blocks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./inner-blocks */ "./mega-menu/edit/inner-blocks.js");
/* harmony import */ var _navigation_menu_selector__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navigation-menu-selector */ "./mega-menu/edit/navigation-menu-selector.js");
/* harmony import */ var _navigation_menu_name_control__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navigation-menu-name-control */ "./mega-menu/edit/navigation-menu-name-control.js");
/* harmony import */ var _unsaved_inner_blocks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./unsaved-inner-blocks */ "./mega-menu/edit/unsaved-inner-blocks.js");
/* harmony import */ var _navigation_menu_delete_control__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./navigation-menu-delete-control */ "./mega-menu/edit/navigation-menu-delete-control.js");
/* harmony import */ var _use_navigation_notice__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./use-navigation-notice */ "./mega-menu/edit/use-navigation-notice.js");
/* harmony import */ var _use_convert_classic_menu_to_block_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./use-convert-classic-menu-to-block-menu */ "./mega-menu/edit/use-convert-classic-menu-to-block-menu.js");
/* harmony import */ var _use_create_navigation_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./use-create-navigation-menu */ "./mega-menu/edit/use-create-navigation-menu.js");


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */













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
  let backgroundColor = getComputedStyle(backgroundColorNode).backgroundColor;

  while (backgroundColor === 'rgba(0, 0, 0, 0)' && backgroundColorNode.parentNode && backgroundColorNode.parentNode.nodeType === backgroundColorNode.parentNode.ELEMENT_NODE) {
    backgroundColorNode = backgroundColorNode.parentNode;
    backgroundColor = getComputedStyle(backgroundColorNode).backgroundColor;
  }

  setBackground(backgroundColor);
}

function Navigation(_ref) {
  let {
    attributes,
    setAttributes,
    clientId,
    isSelected,
    className,
    backgroundColor,
    setBackgroundColor,
    textColor,
    setTextColor,
    context: {
      navigationArea
    },
    // These props are used by the navigation editor to override specific
    // navigation block settings.
    hasSubmenuIndicatorSetting = true,
    hasColorSettings = true,
    customPlaceholder: CustomPlaceholder = null
  } = _ref;
  const {
    openSubmenusOnClick,
    showSubmenuIcon,
    layout: {
      justifyContent,
      orientation = 'horizontal',
      flexWrap = 'wrap'
    } = {},
    hasIcon
  } = attributes;
  let areaMenu,
      setAreaMenu = lodash__WEBPACK_IMPORTED_MODULE_2__.noop;
  [areaMenu, setAreaMenu] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.useEntityProp)('root', 'navigationArea', 'navigation', navigationArea);
  const navigationAreaMenu = areaMenu === 0 ? undefined : areaMenu;
  const ref = navigationArea ? navigationAreaMenu : attributes.ref;
  const registry = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useRegistry)();
  const setRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(postId => {
    setAttributes({
      ref: postId
    });

    if (navigationArea) {
      setAreaMenu(postId);
    }
  }, [navigationArea]);
  const [hasAlreadyRendered, RecursionProvider] = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalUseNoRecursiveRenders)(`navigationMenu/${ref}`); // Preload classic menus, so that they don't suddenly pop-in when viewing
  // the Select Menu dropdown.

  (0,_use_navigation_entities__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const [showNavigationMenuCreateNotice, hideNavigationMenuCreateNotice] = (0,_use_navigation_notice__WEBPACK_IMPORTED_MODULE_18__["default"])({
    name: 'block-library/kemet/mega-menu/create'
  });
  const {
    create: createNavigationMenu,
    status: createNavigationMenuStatus,
    error: createNavigationMenuError,
    value: createNavigationMenuPost
  } = (0,_use_create_navigation_menu__WEBPACK_IMPORTED_MODULE_20__["default"])(clientId);
  const isCreatingNavigationMenu = createNavigationMenuStatus === _use_create_navigation_menu__WEBPACK_IMPORTED_MODULE_20__.CREATE_NAVIGATION_MENU_PENDING;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    hideNavigationMenuCreateNotice();

    if (createNavigationMenuStatus === _use_create_navigation_menu__WEBPACK_IMPORTED_MODULE_20__.CREATE_NAVIGATION_MENU_PENDING) {
      (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_8__.speak)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)(`Creating Navigation Menu.`));
    }

    if (createNavigationMenuStatus === _use_create_navigation_menu__WEBPACK_IMPORTED_MODULE_20__.CREATE_NAVIGATION_MENU_SUCCESS) {
      setRef(createNavigationMenuPost.id);
      selectBlock(clientId);
      showNavigationMenuCreateNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)(`Navigation Menu successfully created.`));
    }

    if (createNavigationMenuStatus === _use_create_navigation_menu__WEBPACK_IMPORTED_MODULE_20__.CREATE_NAVIGATION_MENU_ERROR) {
      showNavigationMenuCreateNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Failed to create Navigation Menu.'));
    }
  }, [createNavigationMenu, createNavigationMenuStatus, createNavigationMenuError, createNavigationMenuPost]);
  const {
    hasUncontrolledInnerBlocks,
    uncontrolledInnerBlocks,
    isInnerBlockSelected,
    hasSubmenus
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    const {
      getBlock,
      getBlocks,
      hasSelectedInnerBlock
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store); // This relies on the fact that `getBlock` won't return controlled
    // inner blocks, while `getBlocks` does. It might be more stable to
    // introduce a selector like `getUncontrolledInnerBlocks`, just in
    // case `getBlock` is fixed.

    const _uncontrolledInnerBlocks = getBlock(clientId).innerBlocks;

    const _hasUncontrolledInnerBlocks = !!(_uncontrolledInnerBlocks !== null && _uncontrolledInnerBlocks !== void 0 && _uncontrolledInnerBlocks.length);

    const _controlledInnerBlocks = _hasUncontrolledInnerBlocks ? EMPTY_ARRAY : getBlocks(clientId);

    const innerBlocks = _hasUncontrolledInnerBlocks ? _uncontrolledInnerBlocks : _controlledInnerBlocks;
    return {
      hasSubmenus: !!innerBlocks.find(block => block.name === 'kemet/navigation-submenu'),
      hasUncontrolledInnerBlocks: _hasUncontrolledInnerBlocks,
      uncontrolledInnerBlocks: _uncontrolledInnerBlocks,
      isInnerBlockSelected: hasSelectedInnerBlock(clientId, true)
    };
  }, [clientId]);
  const {
    replaceInnerBlocks,
    selectBlock,
    __unstableMarkNextChangeAsNotPersistent
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store);
  const [hasSavedUnsavedInnerBlocks, setHasSavedUnsavedInnerBlocks] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
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
    hasResolvedCanUserCreateNavigationMenu
  } = (0,_use_navigation_menu__WEBPACK_IMPORTED_MODULE_10__["default"])(ref);
  const navRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const isDraftNavigationMenu = (navigationMenu === null || navigationMenu === void 0 ? void 0 : navigationMenu.status) === 'draft';
  const {
    listViewToolbarButton,
    listViewModal
  } = (0,_use_list_view_modal__WEBPACK_IMPORTED_MODULE_9__["default"])(clientId);
  const {
    convert,
    status: classicMenuConversionStatus,
    error: classicMenuConversionError,
    value: classicMenuConversionResult
  } = (0,_use_convert_classic_menu_to_block_menu__WEBPACK_IMPORTED_MODULE_19__["default"])(clientId);
  const isConvertingClassicMenu = classicMenuConversionStatus === _use_convert_classic_menu_to_block_menu__WEBPACK_IMPORTED_MODULE_19__.CLASSIC_MENU_CONVERSION_PENDING; // The standard HTML5 tag for the block wrapper.

  const TagName = 'nav'; // "placeholder" shown if:
  // - there is no ref attribute pointing to a Navigation Post.
  // - there is no classic menu conversion process in progress.
  // - there is no menu creation process in progress.
  // - there are no uncontrolled blocks.
  // - (legacy) there is a Navigation Area without a ref attribute pointing to a Navigation Post.

  const isPlaceholder = !ref && !isCreatingNavigationMenu && !isConvertingClassicMenu && (!hasUncontrolledInnerBlocks || isWithinUnassignedArea);
  const isEntityAvailable = !isNavigationMenuMissing && isNavigationMenuResolved; // "loading" state:
  // - there is a menu creation process in progress.
  // - there is a classic menu conversion process in progress.
  // OR
  // - there is a ref attribute pointing to a Navigation Post
  // - the Navigation Post isn't available (hasn't resolved) yet.

  const isLoading = isCreatingNavigationMenu || isConvertingClassicMenu || !!(ref && !isEntityAvailable && !isConvertingClassicMenu);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    ref: navRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
      'items-justified-right': justifyContent === 'right',
      'items-justified-space-between': justifyContent === 'space-between',
      'items-justified-left': justifyContent === 'left',
      'items-justified-center': justifyContent === 'center',
      'is-vertical': orientation === 'vertical',
      'no-wrap': flexWrap === 'nowrap',
      'has-text-color': !!textColor.color || !!(textColor !== null && textColor !== void 0 && textColor.class),
      [(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('color', textColor === null || textColor === void 0 ? void 0 : textColor.slug)]: !!(textColor !== null && textColor !== void 0 && textColor.slug),
      'has-background': !!backgroundColor.color || backgroundColor.class,
      [(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('background-color', backgroundColor === null || backgroundColor === void 0 ? void 0 : backgroundColor.slug)]: !!(backgroundColor !== null && backgroundColor !== void 0 && backgroundColor.slug)
    }),
    style: {
      color: !(textColor !== null && textColor !== void 0 && textColor.slug) && (textColor === null || textColor === void 0 ? void 0 : textColor.color),
      backgroundColor: !(backgroundColor !== null && backgroundColor !== void 0 && backgroundColor.slug) && (backgroundColor === null || backgroundColor === void 0 ? void 0 : backgroundColor.color)
    }
  }); // Turn on contrast checker for web only since it's not supported on mobile yet.

  const enableContrastChecking = _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Platform.OS === 'web';
  const [detectedBackgroundColor, setDetectedBackgroundColor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [detectedColor, setDetectedColor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [showClassicMenuConversionErrorNotice, hideClassicMenuConversionErrorNotice] = (0,_use_navigation_notice__WEBPACK_IMPORTED_MODULE_18__["default"])({
    name: 'block-library/kemet/mega-menu/classic-menu-conversion/error'
  });

  function handleUpdateMenu(menuId) {
    setRef(menuId);
    selectBlock(clientId);
  }

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (classicMenuConversionStatus === _use_convert_classic_menu_to_block_menu__WEBPACK_IMPORTED_MODULE_19__.CLASSIC_MENU_CONVERSION_PENDING) {
      (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_8__.speak)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Classic menu importing.'));
    }

    if (classicMenuConversionStatus === _use_convert_classic_menu_to_block_menu__WEBPACK_IMPORTED_MODULE_19__.CLASSIC_MENU_CONVERSION_SUCCESS && classicMenuConversionResult) {
      handleUpdateMenu(classicMenuConversionResult === null || classicMenuConversionResult === void 0 ? void 0 : classicMenuConversionResult.id);
      hideClassicMenuConversionErrorNotice();
      (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_8__.speak)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Classic menu imported successfully.'));
    }

    if (classicMenuConversionStatus === _use_convert_classic_menu_to_block_menu__WEBPACK_IMPORTED_MODULE_19__.CLASSIC_MENU_CONVERSION_ERROR) {
      showClassicMenuConversionErrorNotice(classicMenuConversionError);
      (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_8__.speak)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Classic menu import failed.'));
    }
  }, [classicMenuConversionStatus, classicMenuConversionResult, classicMenuConversionError]); // Spacer block needs orientation from context. This is a patch until
  // https://github.com/WordPress/gutenberg/issues/36197 is addressed.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (orientation) {
      __unstableMarkNextChangeAsNotPersistent();

      setAttributes({
        orientation
      });
    }
  }, [orientation]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _navRef$current;

    if (!enableContrastChecking) {
      return;
    }

    detectColors(navRef.current, setDetectedColor, setDetectedBackgroundColor);
    const subMenuElement = (_navRef$current = navRef.current) === null || _navRef$current === void 0 ? void 0 : _navRef$current.querySelector('[data-type="kemet/navigation-link"] [data-type="kemet/navigation-link"]');

    if (subMenuElement) {
      detectColors(subMenuElement);
    }
  });
  const [showCantEditNotice, hideCantEditNotice] = (0,_use_navigation_notice__WEBPACK_IMPORTED_MODULE_18__["default"])({
    name: 'block-library/kemet/mega-menu/permissions/update',
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('You do not have permission to edit this Menu. Any changes made will not be saved.')
  });
  const [showCantCreateNotice, hideCantCreateNotice] = (0,_use_navigation_notice__WEBPACK_IMPORTED_MODULE_18__["default"])({
    name: 'block-library/kemet/mega-menu/permissions/create',
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('You do not have permission to create Navigation Menus.')
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isSelected && !isInnerBlockSelected) {
      hideCantEditNotice();
      hideCantCreateNotice();
    }

    if (isSelected || isInnerBlockSelected) {
      if (hasResolvedCanUserUpdateNavigationMenu && !canUserUpdateNavigationMenu) {
        showCantEditNotice();
      }

      if (!ref && hasResolvedCanUserCreateNavigationMenu && !canUserCreateNavigationMenu) {
        showCantCreateNotice();
      }
    }
  }, [isSelected, isInnerBlockSelected, canUserUpdateNavigationMenu, hasResolvedCanUserUpdateNavigationMenu, canUserCreateNavigationMenu, hasResolvedCanUserCreateNavigationMenu, ref]);
  const handleSelectNavigation = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(navPostOrClassicMenu => {
    if (!navPostOrClassicMenu) {
      return;
    }

    const isClassicMenu = navPostOrClassicMenu.hasOwnProperty('auto_add');

    if (isClassicMenu) {
      convert(navPostOrClassicMenu.id, navPostOrClassicMenu.name);
    } else {
      handleUpdateMenu(navPostOrClassicMenu.id);
    }
  }, [convert, handleUpdateMenu]);
  const resetToEmptyBlock = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    registry.batch(() => {
      if (navigationArea) {
        setAreaMenu(0);
      }

      setAttributes({
        ref: undefined
      });

      if (!ref) {
        replaceInnerBlocks(clientId, []);
      }
    });
  }, [clientId, ref]); // If the block has inner blocks, but no menu id, this was an older
  // navigation block added before the block used a wp_navigation entity.
  // Either this block was saved in the content or inserted by a pattern.
  // Consider this 'unsaved'. Offer an uncontrolled version of inner blocks,
  // that automatically saves the menu.

  const hasUnsavedBlocks = hasUncontrolledInnerBlocks && !isEntityAvailable;

  if (hasUnsavedBlocks) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TagName, blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unsaved_inner_blocks__WEBPACK_IMPORTED_MODULE_16__["default"], {
      blockProps: blockProps,
      blocks: uncontrolledInnerBlocks,
      clientId: clientId,
      navigationMenus: navigationMenus,
      hasSelection: isSelected || isInnerBlockSelected,
      hasSavedUnsavedInnerBlocks: hasSavedUnsavedInnerBlocks,
      onSave: post => {
        // Set some state used as a guard to prevent the creation of multiple posts.
        setHasSavedUnsavedInnerBlocks(true); // Switch to using the wp_navigation entity.

        setRef(post.id);
      }
    }));
  } // Show a warning if the selected menu is no longer available.
  // TODO - the user should be able to select a new one?


  if (ref && isNavigationMenuMissing) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.Warning, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Navigation menu has been deleted or is unavailable. '), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
      onClick: resetToEmptyBlock,
      variant: "link"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Create a new menu?'))));
  }

  if (isEntityAvailable && hasAlreadyRendered) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.Warning, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Block cannot be rendered inside itself.')));
  }

  const PlaceholderComponent = CustomPlaceholder ? CustomPlaceholder : _placeholder__WEBPACK_IMPORTED_MODULE_12__["default"];

  if (isPlaceholder) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TagName, blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PlaceholderComponent, {
      isSelected: isSelected,
      currentMenuId: ref,
      clientId: clientId,
      canUserCreateNavigationMenu: canUserCreateNavigationMenu,
      isResolvingCanUserCreateNavigationMenu: isResolvingCanUserCreateNavigationMenu,
      onFinish: handleSelectNavigation,
      onCreateEmpty: () => createNavigationMenu('', [])
    }));
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.EntityProvider, {
    kind: "postType",
    type: "wp_navigation",
    id: ref
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RecursionProvider, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, !isDraftNavigationMenu && isEntityAvailable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarGroup, {
    className: "wp-block-navigation__toolbar-menu-selector"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigation_menu_selector__WEBPACK_IMPORTED_MODULE_14__["default"], {
    currentMenuId: ref,
    clientId: clientId,
    onSelect: handleSelectNavigation,
    onCreateNew: resetToEmptyBlock
    /* translators: %s: The name of a menu. */
    ,
    actionLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)("Switch to '%s'"),
    showManageActions: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarGroup, null, listViewToolbarButton)), listViewModal, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, hasSubmenuIndicatorSetting && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Display')
  }, hasSubmenus && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Submenus')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    checked: openSubmenusOnClick,
    onChange: value => {
      setAttributes({
        openSubmenusOnClick: value,
        ...(value && {
          showSubmenuIcon: true
        }) // Make sure arrows are shown when we toggle this on.

      });
    },
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Open on click')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    checked: showSubmenuIcon,
    onChange: value => {
      setAttributes({
        showSubmenuIcon: value
      });
    },
    disabled: attributes.openSubmenusOnClick,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Show arrow')
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Mega Menu Settings')
  }), hasColorSettings && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    __experimentalHasMultipleOrigins: true,
    __experimentalIsRenderedInSidebar: true,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Color'),
    initialOpen: false,
    colorSettings: [{
      value: textColor.color,
      onChange: setTextColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Text')
    }, {
      value: backgroundColor.color,
      onChange: setBackgroundColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Background')
    }]
  }, enableContrastChecking && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ContrastChecker, {
    backgroundColor: detectedBackgroundColor,
    textColor: detectedColor
  })))), isEntityAvailable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    __experimentalGroup: "advanced"
  }, hasResolvedCanUserUpdateNavigationMenu && canUserUpdateNavigationMenu && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigation_menu_name_control__WEBPACK_IMPORTED_MODULE_15__["default"], null), hasResolvedCanUserDeleteNavigationMenu && canUserDeleteNavigationMenu && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigation_menu_delete_control__WEBPACK_IMPORTED_MODULE_17__["default"], {
    onDelete: resetToEmptyBlock
  })), isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TagName, blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Spinner, {
    className: "wp-block-navigation__loading-indicator"
  })), !isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TagName, blockProps, isEntityAvailable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inner_blocks__WEBPACK_IMPORTED_MODULE_13__["default"], {
    clientId: clientId,
    hasCustomPlaceholder: !!CustomPlaceholder,
    orientation: orientation
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.withColors)({
  textColor: 'color'
}, {
  backgroundColor: 'color'
})(Navigation));

/***/ }),

/***/ "./mega-menu/edit/inner-blocks.js":
/*!****************************************!*\
  !*** ./mega-menu/edit/inner-blocks.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NavigationInnerBlocks; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _placeholder_placeholder_preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./placeholder/placeholder-preview */ "./mega-menu/edit/placeholder/placeholder-preview.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


const ALLOWED_BLOCKS = ['kemet/navigation-link', 'core/search', 'core/social-links', 'kemet/page-list', 'core/spacer', 'core/home-link', 'core/site-title', 'core/site-logo', 'kemet/navigation-submenu'];
const DEFAULT_BLOCK = {
  name: 'kemet/navigation-link'
};
const LAYOUT = {
  type: 'default',
  alignments: []
};
function NavigationInnerBlocks(_ref) {
  let {
    clientId,
    hasCustomPlaceholder,
    orientation
  } = _ref;
  const {
    isImmediateParentOfSelectedBlock,
    selectedBlockHasDescendants,
    isSelected
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    var _getClientIdsOfDescen;

    const {
      getClientIdsOfDescendants,
      hasSelectedInnerBlock,
      getSelectedBlockClientId
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store);
    const selectedBlockId = getSelectedBlockClientId();
    return {
      isImmediateParentOfSelectedBlock: hasSelectedInnerBlock(clientId, false),
      selectedBlockHasDescendants: !!((_getClientIdsOfDescen = getClientIdsOfDescendants([selectedBlockId])) !== null && _getClientIdsOfDescen !== void 0 && _getClientIdsOfDescen.length),
      // This prop is already available but computing it here ensures it's
      // fresh compared to isImmediateParentOfSelectedBlock.
      isSelected: selectedBlockId === clientId
    };
  }, [clientId]);
  const [blocks, onInput, onChange] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.useEntityBlockEditor)('postType', 'wp_navigation');
  const shouldDirectInsert = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => blocks.every(_ref2 => {
    let {
      name
    } = _ref2;
    return name === 'kemet/navigation-link' || name === 'kemet/navigation-submenu' || name === 'kemet/page-list';
  }), [blocks]); // When the block is selected itself or has a top level item selected that
  // doesn't itself have children, show the standard appender. Else show no
  // appender.

  const parentOrChildHasSelection = isSelected || isImmediateParentOfSelectedBlock && !selectedBlockHasDescendants;
  const placeholder = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_placeholder_placeholder_preview__WEBPACK_IMPORTED_MODULE_4__["default"], null), []);
  const hasMenuItems = !!(blocks !== null && blocks !== void 0 && blocks.length); // If there is a `ref` attribute pointing to a `wp_navigation` but
  // that menu has no **items** (i.e. empty) then show a placeholder.
  // The block must also be selected else the placeholder will display
  // alongside the appender.

  const showPlaceholder = !hasCustomPlaceholder && !hasMenuItems && !isSelected;
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)({
    className: 'wp-block-navigation__container'
  }, {
    value: blocks,
    onInput,
    onChange,
    allowedBlocks: ALLOWED_BLOCKS,
    __experimentalDefaultBlock: DEFAULT_BLOCK,
    __experimentalDirectInsert: shouldDirectInsert,
    orientation,
    // As an exception to other blocks which feature nesting, show
    // the block appender even when a child block is selected.
    // This should be a temporary fix, to be replaced by improvements to
    // the sibling inserter.
    // See https://github.com/WordPress/gutenberg/issues/37572.
    renderAppender: isSelected || isImmediateParentOfSelectedBlock && !selectedBlockHasDescendants || // Show the appender while dragging to allow inserting element between item and the appender.
    parentOrChildHasSelection ? _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.ButtonBlockAppender : false,
    // Template lock set to false here so that the Nav
    // Block on the experimental menus screen does not
    // inherit templateLock={ 'all' }.
    templateLock: false,
    __experimentalLayout: LAYOUT,
    placeholder: showPlaceholder ? placeholder : undefined
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalBlockContentOverlay, {
    clientId: clientId,
    tagName: 'div',
    wrapperProps: innerBlocksProps
  });
}

/***/ }),

/***/ "./mega-menu/edit/navigation-menu-delete-control.js":
/*!**********************************************************!*\
  !*** ./mega-menu/edit/navigation-menu-delete-control.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NavigationMenuDeleteControl; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);


/**
 * WordPress dependencies
 */





function NavigationMenuDeleteControl(_ref) {
  let {
    onDelete
  } = _ref;
  const [isConfirmModalVisible, setIsConfirmModalVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const id = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.useEntityId)('postType', 'wp_navigation');
  const [title] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.useEntityProp)('postType', 'wp_navigation', 'title');
  const {
    deleteEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "wp-block-navigation-delete-menu-button",
    variant: "secondary",
    isDestructive: true,
    onClick: () => {
      setIsConfirmModalVisible(true);
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Delete menu')), isConfirmModalVisible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)(
    /* translators: %s: the name of a menu to delete */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Delete %s'), title),
    closeLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Cancel'),
    onRequestClose: () => setIsConfirmModalVisible(false)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Are you sure you want to delete this navigation menu?')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    justify: "flex-end"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    onClick: () => {
      setIsConfirmModalVisible(false);
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Cancel'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: () => {
      deleteEntityRecord('postType', 'wp_navigation', id, {
        force: true
      });
      onDelete();
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Confirm'))))));
}

/***/ }),

/***/ "./mega-menu/edit/navigation-menu-name-control.js":
/*!********************************************************!*\
  !*** ./mega-menu/edit/navigation-menu-name-control.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NavigationMenuNameControl; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */



function NavigationMenuNameControl() {
  const [title, updateTitle] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.useEntityProp)('postType', 'wp_navigation', 'title');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Menu name'),
    value: title,
    onChange: updateTitle
  });
}

/***/ }),

/***/ "./mega-menu/edit/navigation-menu-selector.js":
/*!****************************************************!*\
  !*** ./mega-menu/edit/navigation-menu-selector.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NavigationMenuSelector; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _use_navigation_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../use-navigation-menu */ "./mega-menu/use-navigation-menu.js");
/* harmony import */ var _use_navigation_entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../use-navigation-entities */ "./mega-menu/use-navigation-entities.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



function NavigationMenuSelector(_ref) {
  let {
    currentMenuId,
    onSelect,
    onCreateNew,
    showManageActions = false,
    actionLabel,
    toggleProps = {}
  } = _ref;

  /* translators: %s: The name of a menu. */
  const createActionLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Create from '%s'");

  actionLabel = actionLabel || createActionLabel;
  const {
    menus: classicMenus
  } = (0,_use_navigation_entities__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const {
    navigationMenus,
    canUserCreateNavigationMenu,
    canUserUpdateNavigationMenu,
    canSwitchNavigationMenu
  } = (0,_use_navigation_menu__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const handleSelect = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(_onClose => selectedId => {
    _onClose();

    onSelect(navigationMenus === null || navigationMenus === void 0 ? void 0 : navigationMenus.find(post => post.id === selectedId));
  }, [navigationMenus]);
  const handleSelectClassic = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_onClose, menu) => () => {
    _onClose();

    onSelect(menu);
  }, []);
  const menuChoices = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return (navigationMenus === null || navigationMenus === void 0 ? void 0 : navigationMenus.map(_ref2 => {
      let {
        id,
        title
      } = _ref2;
      const label = (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__.decodeEntities)(title.rendered);
      return {
        value: id,
        label,
        ariaLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(actionLabel, label)
      };
    })) || [];
  }, [navigationMenus]);
  const hasNavigationMenus = !!(navigationMenus !== null && navigationMenus !== void 0 && navigationMenus.length);
  const hasClassicMenus = !!(classicMenus !== null && classicMenus !== void 0 && classicMenus.length);
  const showNavigationMenus = !!canSwitchNavigationMenu;
  const showClassicMenus = !!canUserCreateNavigationMenu;
  const hasManagePermissions = canUserCreateNavigationMenu || canUserUpdateNavigationMenu; // Show the selector if:
  // - has switch or create permissions and there are block or classic menus.
  // - user has create or update permisisons and component should show the menu actions.

  const showSelectMenus = (canSwitchNavigationMenu || canUserCreateNavigationMenu) && (hasNavigationMenus || hasClassicMenus) || hasManagePermissions && showManageActions;

  if (!showSelectMenus) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarDropdownMenu, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Menu'),
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Menu'),
    icon: null,
    toggleProps: toggleProps
  }, _ref3 => {
    let {
      onClose
    } = _ref3;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, showNavigationMenus && hasNavigationMenus && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuGroup, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Menus')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItemsChoice, {
      value: currentMenuId,
      onSelect: handleSelect(onClose),
      choices: menuChoices
    })), showClassicMenus && hasClassicMenus && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuGroup, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Classic Menus')
    }, classicMenus === null || classicMenus === void 0 ? void 0 : classicMenus.map(menu => {
      const label = (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__.decodeEntities)(menu.name);
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
        onClick: handleSelectClassic(onClose, menu),
        key: menu.id,
        "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(createActionLabel, label)
      }, label);
    })), showManageActions && hasManagePermissions && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuGroup, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tools')
    }, canUserCreateNavigationMenu && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
      onClick: onCreateNew
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Create new menu')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
      href: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_4__.addQueryArgs)('edit.php', {
        post_type: 'wp_navigation'
      })
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Manage menus'))));
  });
}

/***/ }),

/***/ "./mega-menu/edit/placeholder/index.js":
/*!*********************************************!*\
  !*** ./mega-menu/edit/placeholder/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NavigationPlaceholder; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/navigation.js");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/a11y */ "@wordpress/a11y");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _use_navigation_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../use-navigation-entities */ "./mega-menu/use-navigation-entities.js");
/* harmony import */ var _placeholder_preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./placeholder-preview */ "./mega-menu/edit/placeholder/placeholder-preview.js");
/* harmony import */ var _navigation_menu_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../navigation-menu-selector */ "./mega-menu/edit/navigation-menu-selector.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




function NavigationPlaceholder(_ref) {
  let {
    isSelected,
    currentMenuId,
    clientId,
    canUserCreateNavigationMenu = false,
    isResolvingCanUserCreateNavigationMenu,
    onFinish,
    onCreateEmpty
  } = _ref;
  const {
    isResolvingMenus,
    hasResolvedMenus
  } = (0,_use_navigation_entities__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isSelected) {
      return;
    }

    if (isResolvingMenus) {
      (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_3__.speak)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Loading Navigation block setup options.'));
    }

    if (hasResolvedMenus) {
      (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_3__.speak)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Navigation block setup options ready.'));
    }
  }, [isResolvingMenus, isSelected]);
  const isResolvingActions = isResolvingMenus && isResolvingCanUserCreateNavigationMenu;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Placeholder, {
    className: "wp-block-navigation-placeholder"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_placeholder_preview__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isVisible: !isSelected
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "aria-hidden": !isSelected ? true : undefined,
    className: "wp-block-navigation-placeholder__controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-navigation-placeholder__actions"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-navigation-placeholder__actions__indicator"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"], {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Navigation')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), isResolvingActions && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigation_menu_selector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    currentMenuId: currentMenuId,
    clientId: clientId,
    onSelect: onFinish,
    toggleProps: {
      variant: 'tertiary',
      iconPosition: 'right',
      className: 'wp-block-navigation-placeholder__actions__dropdown'
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), canUserCreateNavigationMenu && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "tertiary",
    onClick: onCreateEmpty
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start empty'))))));
}

/***/ }),

/***/ "./mega-menu/edit/placeholder/placeholder-preview.js":
/*!***********************************************************!*\
  !*** ./mega-menu/edit/placeholder/placeholder-preview.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/navigation.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */



const PlaceholderPreview = _ref => {
  let {
    isVisible = true
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "aria-hidden": !isVisible ? true : undefined,
    className: "wp-block-navigation-placeholder__preview"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-navigation-placeholder__actions__indicator"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Navigation')));
};

/* harmony default export */ __webpack_exports__["default"] = (PlaceholderPreview);

/***/ }),

/***/ "./mega-menu/edit/unsaved-inner-blocks.js":
/*!************************************************!*\
  !*** ./mega-menu/edit/unsaved-inner-blocks.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UnsavedInnerBlocks; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _use_navigation_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../use-navigation-menu */ "./mega-menu/use-navigation-menu.js");
/* harmony import */ var _use_create_navigation_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./use-create-navigation-menu */ "./mega-menu/edit/use-create-navigation-menu.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



const EMPTY_OBJECT = {};
const DRAFT_MENU_PARAMS = ['postType', 'wp_navigation', {
  status: 'draft',
  per_page: -1
}];
function UnsavedInnerBlocks(_ref) {
  let {
    blockProps,
    blocks,
    clientId,
    hasSavedUnsavedInnerBlocks,
    onSave,
    hasSelection
  } = _ref;
  // The block will be disabled in a block preview, use this as a way of
  // avoiding the side-effects of this component for block previews.
  const isDisabled = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Disabled.Context);
  const savingLock = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)(blockProps, {
    renderAppender: hasSelection ? undefined : false
  });
  const {
    isSaving,
    draftNavigationMenus,
    hasResolvedDraftNavigationMenus
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    if (isDisabled) {
      return EMPTY_OBJECT;
    }

    const {
      getEntityRecords,
      hasFinishedResolution,
      isSavingEntityRecord
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store);
    return {
      isSaving: isSavingEntityRecord('postType', 'wp_navigation'),
      draftNavigationMenus: getEntityRecords(...DRAFT_MENU_PARAMS),
      hasResolvedDraftNavigationMenus: hasFinishedResolution('getEntityRecords', DRAFT_MENU_PARAMS)
    };
  }, [isDisabled]);
  const {
    hasResolvedNavigationMenus,
    navigationMenus
  } = (0,_use_navigation_menu__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const {
    create: createNavigationMenu
  } = (0,_use_create_navigation_menu__WEBPACK_IMPORTED_MODULE_7__["default"])(clientId); // Automatically save the uncontrolled blocks.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {
    // The block will be disabled when used in a BlockPreview.
    // In this case avoid automatic creation of a wp_navigation post.
    // Otherwise the user will be spammed with lots of menus!
    //
    // Also ensure other navigation menus have loaded so an
    // accurate name can be created.
    //
    // Don't try saving when another save is already
    // in progress.
    //
    // And finally only create the menu when the block is selected,
    // which is an indication they want to start editing.
    if (isDisabled || hasSavedUnsavedInnerBlocks || isSaving || savingLock.current || !hasResolvedDraftNavigationMenus || !hasResolvedNavigationMenus || !hasSelection) {
      return;
    }

    savingLock.current = true;
    const menu = await createNavigationMenu(null, blocks);
    onSave(menu);
    savingLock.current = false;
  }, [isDisabled, isSaving, hasResolvedDraftNavigationMenus, hasResolvedNavigationMenus, draftNavigationMenus, navigationMenus, hasSelection, createNavigationMenu, blocks]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-navigation__unsaved-changes"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Disabled, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('wp-block-navigation__unsaved-changes-overlay', {
      'is-saving': hasSelection
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps)), hasSelection && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null));
}

/***/ }),

/***/ "./mega-menu/edit/use-convert-classic-menu-to-block-menu.js":
/*!******************************************************************!*\
  !*** ./mega-menu/edit/use-convert-classic-menu-to-block-menu.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CLASSIC_MENU_CONVERSION_SUCCESS": function() { return /* binding */ CLASSIC_MENU_CONVERSION_SUCCESS; },
/* harmony export */   "CLASSIC_MENU_CONVERSION_ERROR": function() { return /* binding */ CLASSIC_MENU_CONVERSION_ERROR; },
/* harmony export */   "CLASSIC_MENU_CONVERSION_PENDING": function() { return /* binding */ CLASSIC_MENU_CONVERSION_PENDING; },
/* harmony export */   "CLASSIC_MENU_CONVERSION_IDLE": function() { return /* binding */ CLASSIC_MENU_CONVERSION_IDLE; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _use_create_navigation_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-create-navigation-menu */ "./mega-menu/edit/use-create-navigation-menu.js");
/* harmony import */ var _menu_items_to_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu-items-to-blocks */ "./mega-menu/menu-items-to-blocks.js");
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



const CLASSIC_MENU_CONVERSION_SUCCESS = 'success';
const CLASSIC_MENU_CONVERSION_ERROR = 'error';
const CLASSIC_MENU_CONVERSION_PENDING = 'pending';
const CLASSIC_MENU_CONVERSION_IDLE = 'idle';

function useConvertClassicToBlockMenu(clientId) {
  const {
    create: createNavigationMenu
  } = (0,_use_create_navigation_menu__WEBPACK_IMPORTED_MODULE_4__["default"])(clientId);
  const registry = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useRegistry)();
  const [status, setStatus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(CLASSIC_MENU_CONVERSION_IDLE);
  const [value, setValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null);

  async function convertClassicMenuToBlockMenu(menuId, menuName) {
    let navigationMenu;
    let classicMenuItems; // 1. Fetch the classic Menu items.

    try {
      classicMenuItems = await registry.resolveSelect(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).getMenuItems({
        menus: menuId,
        per_page: -1,
        context: 'view'
      });
    } catch (err) {
      throw new Error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)( // translators: %s: the name of a menu (e.g. Header navigation).
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(`Unable to fetch classic menu "%s" from API.`), menuName), {
        cause: err
      });
    } // Handle offline response which resolves to `null`.


    if (classicMenuItems === null) {
      throw new Error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)( // translators: %s: the name of a menu (e.g. Header navigation).
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(`Unable to fetch classic menu "%s" from API.`), menuName));
    } // 2. Convert the classic items into blocks.


    const {
      innerBlocks
    } = (0,_menu_items_to_blocks__WEBPACK_IMPORTED_MODULE_5__["default"])(classicMenuItems);
    console.log(innerBlocks, 'innerBlocks'); // 3. Create the `wp_navigation` Post with the blocks.

    try {
      navigationMenu = await createNavigationMenu(menuName, innerBlocks);
    } catch (err) {
      throw new Error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)( // translators: %s: the name of a menu (e.g. Header navigation).
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(`Unable to create Navigation Menu "%s".`), menuName), {
        cause: err
      });
    }

    return navigationMenu;
  }

  const convert = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)((menuId, menuName) => {
    if (!menuId || !menuName) {
      setError('Unable to convert menu. Missing menu details.');
      setStatus(CLASSIC_MENU_CONVERSION_ERROR);
      return;
    }

    setStatus(CLASSIC_MENU_CONVERSION_PENDING);
    setValue(null);
    setError(null);
    convertClassicMenuToBlockMenu(menuId, menuName).then(navMenu => {
      setValue(navMenu);
      setStatus(CLASSIC_MENU_CONVERSION_SUCCESS);
    }).catch(err => {
      setError(err === null || err === void 0 ? void 0 : err.message);
      setStatus(CLASSIC_MENU_CONVERSION_ERROR); // Rethrow error for debugging.

      throw new Error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)( // translators: %s: the name of a menu (e.g. Header navigation).
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(`Unable to create Navigation Menu "%s".`), menuName), {
        cause: err
      });
    });
  }, [clientId]);
  return {
    convert,
    status,
    value,
    error
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useConvertClassicToBlockMenu);

/***/ }),

/***/ "./mega-menu/edit/use-create-navigation-menu.js":
/*!******************************************************!*\
  !*** ./mega-menu/edit/use-create-navigation-menu.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CREATE_NAVIGATION_MENU_SUCCESS": function() { return /* binding */ CREATE_NAVIGATION_MENU_SUCCESS; },
/* harmony export */   "CREATE_NAVIGATION_MENU_ERROR": function() { return /* binding */ CREATE_NAVIGATION_MENU_ERROR; },
/* harmony export */   "CREATE_NAVIGATION_MENU_PENDING": function() { return /* binding */ CREATE_NAVIGATION_MENU_PENDING; },
/* harmony export */   "CREATE_NAVIGATION_MENU_IDLE": function() { return /* binding */ CREATE_NAVIGATION_MENU_IDLE; },
/* harmony export */   "default": function() { return /* binding */ useCreateNavigationMenu; }
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _use_generate_default_navigation_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-generate-default-navigation-title */ "./mega-menu/edit/use-generate-default-navigation-title.js");
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


const CREATE_NAVIGATION_MENU_SUCCESS = 'success';
const CREATE_NAVIGATION_MENU_ERROR = 'error';
const CREATE_NAVIGATION_MENU_PENDING = 'pending';
const CREATE_NAVIGATION_MENU_IDLE = 'idle';
function useCreateNavigationMenu(clientId) {
  const [status, setStatus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(CREATE_NAVIGATION_MENU_IDLE);
  const [value, setValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const {
    saveEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store);
  const generateDefaultTitle = (0,_use_generate_default_navigation_title__WEBPACK_IMPORTED_MODULE_4__["default"])(clientId); // This callback uses data from the two placeholder steps and only creates
  // a new navigation menu when the user completes the final step.

  const create = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async function () {
    let title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let blocks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    // Guard against creating Navigations without a title.
    // Note you can pass no title, but if one is passed it must be
    // a string otherwise the title may end up being empty.
    if (title && typeof title !== 'string') {
      setError('Invalid title supplied when creating Navigation Menu.');
      setStatus(CREATE_NAVIGATION_MENU_ERROR);
      throw new Error(`Value of supplied title argument was not a string.`);
    }

    setStatus(CREATE_NAVIGATION_MENU_PENDING);
    setValue(null);
    setError(null);

    if (!title) {
      title = await generateDefaultTitle().catch(err => {
        setError(err === null || err === void 0 ? void 0 : err.message);
        setStatus(CREATE_NAVIGATION_MENU_ERROR);
        throw new Error('Failed to create title when saving new Navigation Menu.', {
          cause: err
        });
      });
    }

    const record = {
      title,
      content: (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.serialize)(blocks),
      status: 'publish'
    }; // Return affords ability to await on this function directly

    return saveEntityRecord('postType', 'wp_navigation', record).then(response => {
      setValue(response);
      setStatus(CREATE_NAVIGATION_MENU_SUCCESS);
      return response;
    }).catch(err => {
      setError(err === null || err === void 0 ? void 0 : err.message);
      setStatus(CREATE_NAVIGATION_MENU_ERROR);
      throw new Error('Unable to save new Navigation Menu', {
        cause: err
      });
    });
  }, [_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.serialize, saveEntityRecord]);
  return {
    create,
    status,
    value,
    error
  };
}

/***/ }),

/***/ "./mega-menu/edit/use-generate-default-navigation-title.js":
/*!*****************************************************************!*\
  !*** ./mega-menu/edit/use-generate-default-navigation-title.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useGenerateDefaultNavigationTitle; }
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _use_template_part_area_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../use-template-part-area-label */ "./mega-menu/use-template-part-area-label.js");
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


const DRAFT_MENU_PARAMS = ['postType', 'wp_navigation', {
  status: 'draft',
  per_page: -1
}];
const PUBLISHED_MENU_PARAMS = ['postType', 'wp_navigation', {
  per_page: -1,
  status: 'publish'
}];
function useGenerateDefaultNavigationTitle(clientId) {
  // The block will be disabled in a block preview, use this as a way of
  // avoiding the side-effects of this component for block previews.
  const isDisabled = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useContext)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Disabled.Context); // Because we can't conditionally call hooks, pass an undefined client id
  // arg to bypass the expensive `useTemplateArea` code. The hook will return
  // early.

  const area = (0,_use_template_part_area_label__WEBPACK_IMPORTED_MODULE_5__["default"])(isDisabled ? undefined : clientId);
  const registry = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useRegistry)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async () => {
    // Ensure other navigation menus have loaded so an
    // accurate name can be created.
    if (isDisabled) {
      return '';
    }

    const {
      getEntityRecords
    } = registry.resolveSelect(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store);
    const [draftNavigationMenus, navigationMenus] = await Promise.all([getEntityRecords(...DRAFT_MENU_PARAMS), getEntityRecords(...PUBLISHED_MENU_PARAMS)]);
    const title = area ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)( // translators: %s: the name of a menu (e.g. Header navigation).
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('%s navigation'), area) : // translators: 'navigation' as in website navigation.
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Navigation'); // Determine how many menus start with the automatic title.

    const matchingMenuTitleCount = [...draftNavigationMenus, ...navigationMenus].reduce((count, menu) => {
      var _menu$title, _menu$title$raw;

      return menu !== null && menu !== void 0 && (_menu$title = menu.title) !== null && _menu$title !== void 0 && (_menu$title$raw = _menu$title.raw) !== null && _menu$title$raw !== void 0 && _menu$title$raw.startsWith(title) ? count + 1 : count;
    }, 0); // Append a number to the end of the title if a menu with
    // the same name exists.

    const titleWithCount = matchingMenuTitleCount > 0 ? `${title} ${matchingMenuTitleCount + 1}` : title;
    return titleWithCount || '';
  }, [isDisabled, area]);
}

/***/ }),

/***/ "./mega-menu/edit/use-list-view-modal.js":
/*!***********************************************!*\
  !*** ./mega-menu/edit/use-list-view-modal.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useListViewModal; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/list-view.js");


/**
 * WordPress dependencies
 */







function NavigationBlockListView(_ref) {
  let {
    clientId,
    __experimentalFeatures
  } = _ref;
  const blocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store).__unstableGetClientIdsTree(clientId), [clientId]);
  const listViewRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [minHeight, setMinHeight] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(300);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _listViewRef$current$, _listViewRef$current;

    setMinHeight((_listViewRef$current$ = listViewRef === null || listViewRef === void 0 ? void 0 : (_listViewRef$current = listViewRef.current) === null || _listViewRef$current === void 0 ? void 0 : _listViewRef$current.clientHeight) !== null && _listViewRef$current$ !== void 0 ? _listViewRef$current$ : 300);
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      minHeight
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalListView, {
    ref: listViewRef,
    blocks: blocks,
    showBlockMovers: true,
    showNestedBlocks: true,
    __experimentalFeatures: __experimentalFeatures
  }));
}

function useListViewModal(clientId, __experimentalFeatures) {
  const [isModalOpen, setIsModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const listViewToolbarButton = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
    className: "components-toolbar__control",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Open list view'),
    onClick: () => setIsModalOpen(true),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"]
  });
  const listViewModal = isModalOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('List View'),
    closeLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Close'),
    onRequestClose: () => {
      setIsModalOpen(false);
    },
    shouldCloseOnClickOutside: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(NavigationBlockListView, {
    clientId: clientId,
    __experimentalFeatures: __experimentalFeatures
  }));
  return {
    listViewToolbarButton,
    listViewModal
  };
}

/***/ }),

/***/ "./mega-menu/edit/use-navigation-notice.js":
/*!*************************************************!*\
  !*** ./mega-menu/edit/use-navigation-notice.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */




function useNavigationNotice() {
  let {
    name,
    message = ''
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const noticeRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    createWarningNotice,
    removeNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_2__.store);

  const showNotice = customMsg => {
    if (noticeRef.current) {
      return;
    }

    noticeRef.current = name;
    createWarningNotice(customMsg || message, {
      id: noticeRef.current,
      type: 'snackbar'
    });
  };

  const hideNotice = () => {
    if (!noticeRef.current) {
      return;
    }

    removeNotice(noticeRef.current);
    noticeRef.current = null;
  };

  return [showNotice, hideNotice];
}

/* harmony default export */ __webpack_exports__["default"] = (useNavigationNotice);

/***/ }),

/***/ "./mega-menu/index.js":
/*!****************************!*\
  !*** ./mega-menu/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/navigation.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./mega-menu/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./mega-menu/edit/index.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./mega-menu/save.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./mega-menu/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./mega-menu/style.scss");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */






const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(name, {
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"],
  example: {
    innerBlocks: [{
      name: 'kemet/navigation-link',
      attributes: {
        // translators: 'Home' as in a website's home page.
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Home'),
        url: 'https://make.wordpress.org/'
      }
    }, {
      name: 'kemet/navigation-link',
      attributes: {
        // translators: 'About' as in a website's about page.
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('About'),
        url: 'https://make.wordpress.org/'
      }
    }, {
      name: 'kemet/navigation-link',
      attributes: {
        // translators: 'Contact' as in a website's contact page.
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Contact'),
        url: 'https://make.wordpress.org/'
      }
    }]
  },

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});
console.log('hello from kemet');

/***/ }),

/***/ "./mega-menu/menu-items-to-blocks.js":
/*!*******************************************!*\
  !*** ./mega-menu/menu-items-to-blocks.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ menuItemsToBlocks; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Convert a flat menu item structure to a nested blocks structure.
 *
 * @param {Object[]} menuItems An array of menu items.
 *
 * @return {WPBlock[]} An array of blocks.
 */

function menuItemsToBlocks(menuItems) {
  if (!menuItems) {
    return null;
  }

  const menuTree = createDataTree(menuItems);
  const blocks = mapMenuItemsToBlocks(menuTree);
  return (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)('blocks.navigation.__unstableMenuItemsToBlocks', blocks, menuItems);
}
/**
 * A recursive function that maps menu item nodes to blocks.
 *
 * @param {WPNavMenuItem[]} menuItems An array of WPNavMenuItem items.
 * @return {Object} Object containing innerBlocks and mapping.
 */

function mapMenuItemsToBlocks(menuItems) {
  let mapping = {}; // The menuItem should be in menu_order sort order.

  const sortedItems = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.sortBy)(menuItems, 'menu_order');
  const innerBlocks = sortedItems.map(menuItem => {
    var _menuItem$children, _menuItem$children2;

    if (menuItem.type === 'block') {
      const [block] = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.parse)(menuItem.content.raw);

      if (!block) {
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.createBlock)('core/freeform', {
          content: menuItem.content
        });
      }

      return block;
    }

    const attributes = menuItemToBlockAttributes(menuItem); // If there are children recurse to build those nested blocks.

    const {
      innerBlocks: nestedBlocks = [],
      // alias to avoid shadowing
      mapping: nestedMapping = {} // alias to avoid shadowing

    } = (_menuItem$children = menuItem.children) !== null && _menuItem$children !== void 0 && _menuItem$children.length ? mapMenuItemsToBlocks(menuItem.children) : {}; // Update parent mapping with nested mapping.

    mapping = { ...mapping,
      ...nestedMapping
    };
    const blockType = (_menuItem$children2 = menuItem.children) !== null && _menuItem$children2 !== void 0 && _menuItem$children2.length ? 'kemet/navigation-submenu' : 'kemet/navigation-link'; // Create block with nested "innerBlocks".

    const block = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.createBlock)(blockType, attributes, nestedBlocks); // Create mapping for menuItem -> block.

    mapping[menuItem.id] = block.clientId;
    return block;
  });
  return {
    innerBlocks,
    mapping
  };
}
/**
 * A WP nav_menu_item object.
 * For more documentation on the individual fields present on a menu item please see:
 * https://core.trac.wordpress.org/browser/tags/5.7.1/src/wp-includes/nav-menu.php#L789
 *
 * Changes made here should also be mirrored in packages/edit-navigation/src/store/utils.js.
 *
 * @typedef WPNavMenuItem
 *
 * @property {Object} title       stores the raw and rendered versions of the title/label for this menu item.
 * @property {Array}  xfn         the XFN relationships expressed in the link of this menu item.
 * @property {Array}  classes     the HTML class attributes for this menu item.
 * @property {string} attr_title  the HTML title attribute for this menu item.
 * @property {string} object      The type of object originally represented, such as 'category', 'post', or 'attachment'.
 * @property {string} object_id   The DB ID of the original object this menu item represents, e.g. ID for posts and term_id for categories.
 * @property {string} description The description of this menu item.
 * @property {string} url         The URL to which this menu item points.
 * @property {string} type        The family of objects originally represented, such as 'post_type' or 'taxonomy'.
 * @property {string} target      The target attribute of the link element for this menu item.
 */

/**
 * Convert block attributes to menu item.
 *
 * @param {WPNavMenuItem} menuItem the menu item to be converted to block attributes.
 * @return {Object} the block attributes converted from the WPNavMenuItem item.
 */


function menuItemToBlockAttributes(_ref) {
  var _object;

  let {
    title: menuItemTitleField,
    xfn,
    classes,
    // eslint-disable-next-line camelcase
    attr_title,
    object,
    // eslint-disable-next-line camelcase
    object_id,
    description,
    url,
    type: menuItemTypeField,
    target
  } = _ref;

  // For historical reasons, the `kemet/navigation-link` variation type is `tag`
  // whereas WP Core expects `post_tag` as the `object` type.
  // To avoid writing a block migration we perform a conversion here.
  // See also inverse equivalent in `blockAttributesToMenuItem`.
  if (object && object === 'post_tag') {
    object = 'tag';
  }

  return {
    label: (menuItemTitleField === null || menuItemTitleField === void 0 ? void 0 : menuItemTitleField.rendered) || '',
    ...(((_object = object) === null || _object === void 0 ? void 0 : _object.length) && {
      type: object
    }),
    kind: (menuItemTypeField === null || menuItemTypeField === void 0 ? void 0 : menuItemTypeField.replace('_', '-')) || 'custom',
    url: url || '',
    ...((xfn === null || xfn === void 0 ? void 0 : xfn.length) && xfn.join(' ').trim() && {
      rel: xfn.join(' ').trim()
    }),
    ...((classes === null || classes === void 0 ? void 0 : classes.length) && classes.join(' ').trim() && {
      className: classes.join(' ').trim()
    }),

    /* eslint-disable camelcase */
    ...((attr_title === null || attr_title === void 0 ? void 0 : attr_title.length) && {
      title: attr_title
    }),
    ...(object_id && 'custom' !== object && {
      id: object_id
    }),

    /* eslint-enable camelcase */
    ...((description === null || description === void 0 ? void 0 : description.length) && {
      description
    }),
    ...(target === '_blank' && {
      opensInNewTab: true
    })
  };
}
/**
 * Creates a nested, hierarchical tree representation from unstructured data that
 * has an inherent relationship defined between individual items.
 *
 * For example, by default, each element in the dataset should have an `id` and
 * `parent` property where the `parent` property indicates a relationship between
 * the current item and another item with a matching `id` properties.
 *
 * This is useful for building linked lists of data from flat data structures.
 *
 * @param {Array}  dataset  linked data to be rearranged into a hierarchical tree based on relational fields.
 * @param {string} id       the property which uniquely identifies each entry within the array.
 * @param {*}      relation the property which identifies how the current item is related to other items in the data (if at all).
 * @return {Array} a nested array of parent/child relationships
 */


function createDataTree(dataset) {
  let id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
  let relation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'parent';
  const hashTable = Object.create(null);
  const dataTree = [];

  for (const data of dataset) {
    hashTable[data[id]] = { ...data,
      children: []
    };

    if (data[relation]) {
      hashTable[data[relation]] = hashTable[data[relation]] || {};
      hashTable[data[relation]].children = hashTable[data[relation]].children || [];
      hashTable[data[relation]].children.push(hashTable[data[id]]);
    } else {
      dataTree.push(hashTable[data[id]]);
    }
  }

  return dataTree;
}

/***/ }),

/***/ "./mega-menu/save.js":
/*!***************************!*\
  !*** ./mega-menu/save.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

function save(_ref) {
  let {
    attributes
  } = _ref;

  if (attributes.ref) {
    // Avoid rendering inner blocks when a ref is defined.
    // When this id is defined the inner blocks are loaded from the
    // `wp_navigation` entity rather than the hard-coded block html.
    return;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null);
}

/***/ }),

/***/ "./mega-menu/use-navigation-entities.js":
/*!**********************************************!*\
  !*** ./mega-menu/use-navigation-entities.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useNavigationEntities; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


/**
 * @typedef {Object} NavigationEntitiesData
 * @property {Array|undefined} pages                - a collection of WP Post entity objects of post type "Page".
 * @property {boolean}         isResolvingPages     - indicates whether the request to fetch pages is currently resolving.
 * @property {boolean}         hasResolvedPages     - indicates whether the request to fetch pages has finished resolving.
 * @property {Array|undefined} menus                - a collection of Menu entity objects.
 * @property {boolean}         isResolvingMenus     - indicates whether the request to fetch menus is currently resolving.
 * @property {boolean}         hasResolvedMenus     - indicates whether the request to fetch menus has finished resolving.
 * @property {Array|undefined} menusItems           - a collection of Menu Item entity objects for the current menuId.
 * @property {boolean}         hasResolvedMenuItems - indicates whether the request to fetch menuItems has finished resolving.
 * @property {boolean}         hasPages             - indicates whether there is currently any data for pages.
 * @property {boolean}         hasMenus             - indicates whether there is currently any data for menus.
 */

/**
 * Manages fetching and resolution state for all entities required
 * for the Navigation block.
 *
 * @param {number} menuId the menu for which to retrieve menuItem data.
 * @return { NavigationEntitiesData } the entity data.
 */

function useNavigationEntities(menuId) {
  return { ...usePageEntities(),
    ...useMenuEntities(),
    ...useMenuItemEntities(menuId)
  };
}

function useMenuEntities() {
  const {
    records,
    isResolving,
    hasResolved
  } = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.__experimentalUseEntityRecords)('root', 'menu', {
    per_page: -1,
    context: 'view'
  });
  return {
    menus: records,
    isResolvingMenus: isResolving,
    hasResolvedMenus: hasResolved,
    hasMenus: !!(hasResolved && records !== null && records !== void 0 && records.length)
  };
}

function useMenuItemEntities(menuId) {
  const {
    menuItems,
    hasResolvedMenuItems
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const {
      getMenuItems,
      hasFinishedResolution
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store);
    const hasSelectedMenu = menuId !== undefined;
    const menuItemsParameters = hasSelectedMenu ? [{
      menus: menuId,
      per_page: -1,
      context: 'view'
    }] : undefined;
    return {
      menuItems: hasSelectedMenu ? getMenuItems(...menuItemsParameters) : undefined,
      hasResolvedMenuItems: hasSelectedMenu ? hasFinishedResolution('getMenuItems', menuItemsParameters) : false
    };
  }, [menuId]);
  return {
    menuItems,
    hasResolvedMenuItems
  };
}

function usePageEntities() {
  const {
    records,
    isResolving,
    hasResolved
  } = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.__experimentalUseEntityRecords)('postType', 'page', {
    parent: 0,
    order: 'asc',
    orderby: 'id',
    per_page: -1,
    context: 'view'
  });
  return {
    pages: records,
    isResolvingPages: isResolving,
    hasResolvedPages: hasResolved,
    hasPages: !!(hasResolved && records !== null && records !== void 0 && records.length)
  };
}

/***/ }),

/***/ "./mega-menu/use-navigation-menu.js":
/*!******************************************!*\
  !*** ./mega-menu/use-navigation-menu.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useNavigationMenu; }
/* harmony export */ });
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


function useNavigationMenu(ref) {
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    var _navigationMenu;

    const {
      getEntityRecord,
      getEditedEntityRecord,
      getEntityRecords,
      hasFinishedResolution,
      isResolving,
      canUser
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__.store);
    const navigationMenuSingleArgs = ['postType', 'wp_navigation', ref];
    const rawNavigationMenu = ref ? getEntityRecord(...navigationMenuSingleArgs) : null;
    let navigationMenu = ref ? getEditedEntityRecord(...navigationMenuSingleArgs) : null; // getEditedEntityRecord will return the post regardless of status.
    // Therefore if the found post is not published then we should ignore it.

    if (((_navigationMenu = navigationMenu) === null || _navigationMenu === void 0 ? void 0 : _navigationMenu.status) !== 'publish') {
      navigationMenu = null;
    }

    const hasResolvedNavigationMenu = ref ? hasFinishedResolution('getEditedEntityRecord', navigationMenuSingleArgs) : false;
    const navigationMenuMultipleArgs = ['postType', 'wp_navigation', {
      per_page: -1,
      status: 'publish'
    }];
    const navigationMenus = getEntityRecords(...navigationMenuMultipleArgs);
    const canSwitchNavigationMenu = ref ? (navigationMenus === null || navigationMenus === void 0 ? void 0 : navigationMenus.length) > 1 : (navigationMenus === null || navigationMenus === void 0 ? void 0 : navigationMenus.length) > 0;
    return {
      isNavigationMenuResolved: hasResolvedNavigationMenu,
      isNavigationMenuMissing: !ref || hasResolvedNavigationMenu && !rawNavigationMenu,
      canSwitchNavigationMenu,
      hasResolvedNavigationMenus: hasFinishedResolution('getEntityRecords', navigationMenuMultipleArgs),
      navigationMenu,
      navigationMenus,
      canUserUpdateNavigationMenu: ref ? canUser('update', 'navigation', ref) : undefined,
      hasResolvedCanUserUpdateNavigationMenu: hasFinishedResolution('canUser', ['update', 'navigation', ref]),
      canUserDeleteNavigationMenu: ref ? canUser('delete', 'navigation', ref) : undefined,
      hasResolvedCanUserDeleteNavigationMenu: hasFinishedResolution('canUser', ['delete', 'navigation', ref]),
      canUserCreateNavigationMenu: canUser('create', 'navigation'),
      isResolvingCanUserCreateNavigationMenu: isResolving('canUser', ['create', 'navigation']),
      hasResolvedCanUserCreateNavigationMenu: hasFinishedResolution('canUser', ['create', 'navigation'])
    };
  }, [ref]);
}

/***/ }),

/***/ "./mega-menu/use-template-part-area-label.js":
/*!***************************************************!*\
  !*** ./mega-menu/use-template-part-area-label.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useTemplatePartAreaLabel; }
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */



function useTemplatePartAreaLabel(clientId) {
  const createTemplatePartId = (theme, slug) => {
    return theme && slug ? theme + '//' + slug : null;
  };

  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    // Use the lack of a clientId as an opportunity to bypass the rest
    // of this hook.
    if (!clientId) {
      return;
    }

    const {
      getBlock,
      getBlockParentsByBlockName
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.store);
    const withAscendingResults = true;
    const parentTemplatePartClientIds = getBlockParentsByBlockName(clientId, 'core/template-part', withAscendingResults);

    if (!(parentTemplatePartClientIds !== null && parentTemplatePartClientIds !== void 0 && parentTemplatePartClientIds.length)) {
      return;
    } // FIXME: @wordpress/block-library should not depend on @wordpress/editor.
    // Blocks can be loaded into a *non-post* block editor.
    // This code is lifted from this file:
    // packages/block-library/src/template-part/edit/advanced-controls.js
    // eslint-disable-next-line @wordpress/data-no-store-string-literals


    const definedAreas = select('core/editor').__experimentalGetDefaultTemplatePartAreas();

    const {
      getEditedEntityRecord
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store);

    for (const templatePartClientId of parentTemplatePartClientIds) {
      const templatePartBlock = getBlock(templatePartClientId); // The 'area' usually isn't stored on the block, but instead
      // on the entity.

      const {
        theme,
        slug
      } = templatePartBlock.attributes;
      const templatePartEntityId = createTemplatePartId(theme, slug);
      const templatePartEntity = getEditedEntityRecord('postType', 'wp_template_part', templatePartEntityId); // Look up the `label` for the area in the defined areas so
      // that an internationalized label can be used.

      if (templatePartEntity !== null && templatePartEntity !== void 0 && templatePartEntity.area) {
        var _definedAreas$find;

        return (_definedAreas$find = definedAreas.find(definedArea => definedArea.area !== 'uncategorized' && definedArea.area === templatePartEntity.area)) === null || _definedAreas$find === void 0 ? void 0 : _definedAreas$find.label;
      }
    }
  }, [clientId]);
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./mega-menu/editor.scss":
/*!*******************************!*\
  !*** ./mega-menu/editor.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./mega-menu/style.scss":
/*!******************************!*\
  !*** ./mega-menu/style.scss ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/a11y":
/*!******************************!*\
  !*** external ["wp","a11y"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["a11y"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["htmlEntities"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/notices":
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["notices"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["url"];

/***/ }),

/***/ "./mega-menu/block.json":
/*!******************************!*\
  !*** ./mega-menu/block.json ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"kemet/mega-menu","title":"Kemet Navigation","category":"premium-blocks","description":"A collection of blocks that allow visitors to get around your site.","keywords":["menu","navigation","links"],"textdomain":"default","attributes":{"ref":{"type":"number"},"textColor":{"type":"string"},"customTextColor":{"type":"string"},"rgbTextColor":{"type":"string"},"backgroundColor":{"type":"string"},"customBackgroundColor":{"type":"string"},"rgbBackgroundColor":{"type":"string"},"showSubmenuIcon":{"type":"boolean","default":true},"openSubmenusOnClick":{"type":"boolean","default":false},"__unstableLocation":{"type":"string"},"customOverlayBackgroundColor":{"type":"string"}},"usesContext":["navigationArea"],"providesContext":{"textColor":"textColor","customTextColor":"customTextColor","backgroundColor":"backgroundColor","customBackgroundColor":"customBackgroundColor","showSubmenuIcon":"showSubmenuIcon","openSubmenusOnClick":"openSubmenusOnClick","style":"style","orientation":"orientation"},"supports":{"align":["wide","full"],"anchor":true,"html":false,"inserter":true,"__experimentalLayout":{"allowSwitching":false,"allowInheriting":false,"default":{"type":"flex"}}},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkextra_blocks"] = self["webpackChunkextra_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./mega-menu/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map