/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./accordion-item/edit.js":
/*!********************************!*\
  !*** ./accordion-item/edit.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_HelperFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/HelperFunction */ "../components/HelperFunction.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);








function AccordionItemEdit(_ref) {
  let {
    attributes,
    setAttributes,
    context,
    clientId,
    className,
    isSelected
  } = _ref;
  const {
    blockId,
    title,
    description
  } = attributes;
  const {
    titleTag,
    contentType,
    direction,
    arrowStyles
  } = context;
  const iconClasse = isSelected ? '' : ' premium-accordion__closed';
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, blockId, 'premium-accordion__content_wrap')
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setAttributes({
      blockId: "premium-accordion-item-" + (0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_2__.generateBlockId)(clientId)
    });
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (direction !== attributes.direction) {
      setAttributes({
        direction: direction
      });
    }

    if (contentType !== attributes.contentType) {
      setAttributes({
        contentType: contentType
      });
    }

    if (titleTag !== attributes.titleTag) {
      setAttributes({
        titleTag: titleTag
      });
    }

    if (arrowStyles[0].arrowPos !== attributes.arrowPosition) {
      setAttributes({
        arrowPosition: arrowStyles[0].arrowPos
      });
    }
  }, [titleTag, contentType, direction, arrowStyles]);
  const {
    isInnerBlockSelected
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      hasSelectedInnerBlock
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store);
    return {
      isInnerBlockSelected: hasSelectedInnerBlock(clientId, true)
    };
  }, [clientId]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-accordion__title_wrap premium-accordion__${direction} premium-accordion__${arrowStyles[0].arrowPos}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-accordion__title`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
    tagName: titleTag.toLowerCase(),
    className: `premium-accordion__title_text`,
    onChange: newText => setAttributes({
      title: newText
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Awesome Title", 'premium-blocks-for-gutenberg'),
    value: title
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-accordion__icon_wrap`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: `premium-accordion__icon${iconClasse}`,
    role: "img",
    focusable: "false",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("polygon", {
    points: "16.7,3.3 10,10 3.3,3.4 0,6.7 10,16.7 10,16.6 20,6.7 "
  })))), (isSelected || isInnerBlockSelected) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-accordion__desc_wrap`
  }, "text" === contentType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
    tagName: "p",
    className: `premium-accordion__desc`,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 'premium-blocks-for-gutenberg'),
    onChange: newText => setAttributes({
      description: newText
    }),
    value: description
  }), "block" === contentType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks, {
    templateLock: false
  })));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withSelect)((select, props) => {
  const {
    __experimentalGetPreviewDeviceType = null
  } = select('core/edit-post');
  let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;
  return {
    deviceType: deviceType
  };
})(AccordionItemEdit));

/***/ }),

/***/ "./accordion-item/save.js":
/*!********************************!*\
  !*** ./accordion-item/save.js ***!
  \********************************/
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */


function save(props) {
  const {
    className
  } = props;
  const {
    blockId,
    description,
    direction,
    titleTag,
    arrowPosition,
    contentType,
    title
  } = props.attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, blockId, 'premium-accordion__content_wrap')
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-accordion__title_wrap premium-accordion__${direction} premium-accordion__${arrowPosition}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-accordion__title`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: titleTag.toLowerCase(),
    className: `premium-accordion__title_text`,
    value: title
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-accordion__icon_wrap`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: `premium-accordion__icon`,
    role: "img",
    focusable: "false",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("polygon", {
    points: "16.7,3.3 10,10 3.3,3.4 0,6.7 10,16.7 10,16.6 20,6.7 "
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-accordion__desc_wrap`
  }, "text" === contentType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    className: `premium-accordion__desc`,
    value: description
  }), "block" === contentType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)));
}

/***/ }),

/***/ "../components/HelperFunction.js":
/*!***************************************!*\
  !*** ../components/HelperFunction.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationAttr": function() { return /* binding */ animationAttr; },
/* harmony export */   "borderCss": function() { return /* binding */ borderCss; },
/* harmony export */   "filterJsCss": function() { return /* binding */ filterJsCss; },
/* harmony export */   "generateBlockId": function() { return /* binding */ generateBlockId; },
/* harmony export */   "generateCss": function() { return /* binding */ generateCss; },
/* harmony export */   "gradientBackground": function() { return /* binding */ gradientBackground; },
/* harmony export */   "gradientValue": function() { return /* binding */ gradientValue; },
/* harmony export */   "marginCss": function() { return /* binding */ marginCss; },
/* harmony export */   "paddingCss": function() { return /* binding */ paddingCss; },
/* harmony export */   "typographyCss": function() { return /* binding */ typographyCss; },
/* harmony export */   "videoBackground": function() { return /* binding */ videoBackground; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const gradientBackground = value => {
  const {
    backgroundType,
    backgroundColor,
    backgroundRepeat,
    backgroundPosition,
    fixed,
    backgroundSize,
    gradientColorTwo,
    gradientPosition,
    gradientType,
    gradientLocationOne,
    gradientLocationTwo,
    gradientAngle,
    backgroundImageURL
  } = value;
  let btnGrad, btnGrad2, btnbg;

  if (undefined !== backgroundType && "gradient" === backgroundType) {
    btnGrad = "transparent" === backgroundColor || undefined === backgroundColor ? "rgba(255,255,255,0)" : backgroundColor;
    btnGrad2 = undefined !== gradientColorTwo && undefined !== gradientColorTwo && "" !== gradientColorTwo ? gradientColorTwo : "#777";

    if ("radial" === gradientType) {
      btnbg = `radial-gradient(at ${gradientPosition}, ${btnGrad} ${gradientLocationOne}%, ${btnGrad2} ${gradientLocationTwo}%)`;
    } else if ("radial" !== gradientType) {
      btnbg = `linear-gradient(${gradientAngle}deg, ${btnGrad} ${gradientLocationOne}%, ${btnGrad2} ${gradientLocationTwo}%)`;
    }
  } else {
    btnbg = backgroundImageURL ? `url('${backgroundImageURL}')` : "";
  }

  return {
    backgroundColor: backgroundColor,
    backgroundImage: gradientValue(value),
    backgroundRepeat: backgroundRepeat,
    backgroundPosition: backgroundPosition,
    backgroundSize: backgroundSize,
    backgroundAttachment: fixed ? "fixed" : "unset"
  };
};
const borderCss = (value, device) => {
  var _value$borderWidth, _value$borderWidth$de, _value$borderWidth2, _value$borderWidth2$d, _value$borderWidth3, _value$borderWidth3$d, _value$borderWidth4, _value$borderWidth4$d, _value$borderRadius, _value$borderRadius$d, _value$borderRadius2, _value$borderRadius2$, _value$borderRadius3, _value$borderRadius3$, _value$borderRadius4, _value$borderRadius4$;

  return {
    borderStyle: value === null || value === void 0 ? void 0 : value.borderType,
    borderTopWidth: value === null || value === void 0 ? void 0 : (_value$borderWidth = value.borderWidth) === null || _value$borderWidth === void 0 ? void 0 : (_value$borderWidth$de = _value$borderWidth[device]) === null || _value$borderWidth$de === void 0 ? void 0 : _value$borderWidth$de.top,
    borderRightWidth: value === null || value === void 0 ? void 0 : (_value$borderWidth2 = value.borderWidth) === null || _value$borderWidth2 === void 0 ? void 0 : (_value$borderWidth2$d = _value$borderWidth2[device]) === null || _value$borderWidth2$d === void 0 ? void 0 : _value$borderWidth2$d.right,
    borderBottomWidth: value === null || value === void 0 ? void 0 : (_value$borderWidth3 = value.borderWidth) === null || _value$borderWidth3 === void 0 ? void 0 : (_value$borderWidth3$d = _value$borderWidth3[device]) === null || _value$borderWidth3$d === void 0 ? void 0 : _value$borderWidth3$d.bottom,
    borderLeftWidth: value === null || value === void 0 ? void 0 : (_value$borderWidth4 = value.borderWidth) === null || _value$borderWidth4 === void 0 ? void 0 : (_value$borderWidth4$d = _value$borderWidth4[device]) === null || _value$borderWidth4$d === void 0 ? void 0 : _value$borderWidth4$d.left,
    borderColor: value === null || value === void 0 ? void 0 : value.borderColor,
    borderTopLeftRadius: `${(value === null || value === void 0 ? void 0 : (_value$borderRadius = value.borderRadius) === null || _value$borderRadius === void 0 ? void 0 : (_value$borderRadius$d = _value$borderRadius[device]) === null || _value$borderRadius$d === void 0 ? void 0 : _value$borderRadius$d.top) || 0}px`,
    borderTopRightRadius: `${(value === null || value === void 0 ? void 0 : (_value$borderRadius2 = value.borderRadius) === null || _value$borderRadius2 === void 0 ? void 0 : (_value$borderRadius2$ = _value$borderRadius2[device]) === null || _value$borderRadius2$ === void 0 ? void 0 : _value$borderRadius2$.right) || 0}px`,
    borderBottomLeftRadius: `${(value === null || value === void 0 ? void 0 : (_value$borderRadius3 = value.borderRadius) === null || _value$borderRadius3 === void 0 ? void 0 : (_value$borderRadius3$ = _value$borderRadius3[device]) === null || _value$borderRadius3$ === void 0 ? void 0 : _value$borderRadius3$.bottom) || 0}px`,
    borderBottomRightRadius: `${(value === null || value === void 0 ? void 0 : (_value$borderRadius4 = value.borderRadius) === null || _value$borderRadius4 === void 0 ? void 0 : (_value$borderRadius4$ = _value$borderRadius4[device]) === null || _value$borderRadius4$ === void 0 ? void 0 : _value$borderRadius4$.left) || 0}px`
  };
};
const paddingCss = (value, device) => {
  var _value$device, _value$device2, _value$device3, _value$device4, _value$device5, _value$device6, _value$device7, _value$device8;

  return {
    paddingTop: (value === null || value === void 0 ? void 0 : (_value$device = value[device]) === null || _value$device === void 0 ? void 0 : _value$device.top) && `${value === null || value === void 0 ? void 0 : (_value$device2 = value[device]) === null || _value$device2 === void 0 ? void 0 : _value$device2.top}${value === null || value === void 0 ? void 0 : value.unit}`,
    paddingRight: (value === null || value === void 0 ? void 0 : (_value$device3 = value[device]) === null || _value$device3 === void 0 ? void 0 : _value$device3.right) && `${value === null || value === void 0 ? void 0 : (_value$device4 = value[device]) === null || _value$device4 === void 0 ? void 0 : _value$device4.right}${value === null || value === void 0 ? void 0 : value.unit}`,
    paddingBottom: (value === null || value === void 0 ? void 0 : (_value$device5 = value[device]) === null || _value$device5 === void 0 ? void 0 : _value$device5.bottom) && `${value === null || value === void 0 ? void 0 : (_value$device6 = value[device]) === null || _value$device6 === void 0 ? void 0 : _value$device6.bottom}${value === null || value === void 0 ? void 0 : value.unit}`,
    paddingLeft: (value === null || value === void 0 ? void 0 : (_value$device7 = value[device]) === null || _value$device7 === void 0 ? void 0 : _value$device7.left) && `${value === null || value === void 0 ? void 0 : (_value$device8 = value[device]) === null || _value$device8 === void 0 ? void 0 : _value$device8.left}${value === null || value === void 0 ? void 0 : value.unit}`
  };
};
const marginCss = (value, device) => {
  var _value$device9, _value$device10, _value$device11, _value$device12, _value$device13, _value$device14, _value$device15, _value$device16;

  return {
    marginTop: (value === null || value === void 0 ? void 0 : (_value$device9 = value[device]) === null || _value$device9 === void 0 ? void 0 : _value$device9.top) && `${value === null || value === void 0 ? void 0 : (_value$device10 = value[device]) === null || _value$device10 === void 0 ? void 0 : _value$device10.top}${value === null || value === void 0 ? void 0 : value.unit}`,
    marginRight: (value === null || value === void 0 ? void 0 : (_value$device11 = value[device]) === null || _value$device11 === void 0 ? void 0 : _value$device11.right) && `${value === null || value === void 0 ? void 0 : (_value$device12 = value[device]) === null || _value$device12 === void 0 ? void 0 : _value$device12.right}${value === null || value === void 0 ? void 0 : value.unit}`,
    marginBottom: (value === null || value === void 0 ? void 0 : (_value$device13 = value[device]) === null || _value$device13 === void 0 ? void 0 : _value$device13.bottom) && `${value === null || value === void 0 ? void 0 : (_value$device14 = value[device]) === null || _value$device14 === void 0 ? void 0 : _value$device14.bottom}${value === null || value === void 0 ? void 0 : value.unit}`,
    marginLeft: (value === null || value === void 0 ? void 0 : (_value$device15 = value[device]) === null || _value$device15 === void 0 ? void 0 : _value$device15.left) && `${value === null || value === void 0 ? void 0 : (_value$device16 = value[device]) === null || _value$device16 === void 0 ? void 0 : _value$device16.left}${value === null || value === void 0 ? void 0 : value.unit}`
  };
};
const typographyCss = (value, device) => {
  var _value$fontSize;

  return {
    fontSize: (value === null || value === void 0 ? void 0 : value.fontSize[device]) && `${value === null || value === void 0 ? void 0 : value.fontSize[device]}${value === null || value === void 0 ? void 0 : (_value$fontSize = value.fontSize) === null || _value$fontSize === void 0 ? void 0 : _value$fontSize.unit}`,
    fontStyle: value === null || value === void 0 ? void 0 : value.fontStyle,
    fontFamily: value === null || value === void 0 ? void 0 : value.fontFamily,
    fontWeight: value === null || value === void 0 ? void 0 : value.fontWeight,
    letterSpacing: (value === null || value === void 0 ? void 0 : value.letterSpacing[device]) && `${value === null || value === void 0 ? void 0 : value.letterSpacing[device]}px`,
    textDecoration: value === null || value === void 0 ? void 0 : value.textDecoration,
    textTransform: value === null || value === void 0 ? void 0 : value.textTransform,
    lineHeight: (value === null || value === void 0 ? void 0 : value.lineHeight[device]) && `${value === null || value === void 0 ? void 0 : value.lineHeight[device]}px`
  };
};
const generateBlockId = clientId => {
  return clientId.split("-")[4];
};
const generateCss = styles => {
  let styleCss = "";

  for (const selector in styles) {
    const selectorStyles = styles[selector];
    const filteredStyles = Object.keys(selectorStyles).map(property => {
      const value = selectorStyles[property];
      const valueWithoutUnits = value ? value.toString().replaceAll(/px|em|rem|!important|%/g, "").replaceAll(/\s/g, "") : "";

      if (value && !value.toString().includes("undefined") && valueWithoutUnits) {
        return `${property}: ${value};`;
      }
    }).filter(style => !!style).join("\n");
    styleCss += `${selector}{
                    ${filteredStyles}
                }\n`;
  }

  return styleCss;
};
const filterJsCss = styles => {
  const asArray = Object.entries(styles);
  const filtered = asArray.filter(_ref => {
    let [property, value] = _ref;
    const valueWithoutUnits = value ? value.toString().replaceAll(/px|em|rem|!important|%/g, "").replaceAll(/\s/g, "") : "";
    return value && !value.toString().includes("undefined") && valueWithoutUnits;
  });
  const filteredStyles = Object.fromEntries(filtered);
  return filteredStyles;
};
const videoBackground = (backgroundType, videoSource, videoURL, bgExternalVideo) => {
  if (backgroundType == "video") {
    if (videoSource == "local") {
      if (videoURL) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "premium-blocks-video-bg-wrap"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
          className: "premium-blocks-video-bg",
          autoPlay: true,
          muted: true,
          loop: true
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
          src: videoURL
        })));
      }
    }

    if (videoSource == "external") {
      if (bgExternalVideo) {
        let video = bgExternalVideo,
            src = "";

        if (video.match("youtube|youtu.be")) {
          let id = 0;

          if (video.match("embed") && video.split(/embed\//)[1]) {
            id = video.split(/embed\//)[1].split('"')[0];
          } else if (video.split(/v\/|v=|youtu\.be\//)[1]) {
            id = video.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0];
          }

          src = "//www.youtube.com/embed/" + id + "?playlist=" + id + "&iv_load_policy=3&enablejsapi=1&disablekb=1&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&wmode=transparent&widgetid=1";
        } else if (video.match("vimeo.com")) {
          let id = video.split(/video\/|https:\/\/vimeo\.com\//)[1].split(/[?&]/)[0];
          src = "//player.vimeo.com/video/" + id + "?autoplay=1&loop=1&title=0&byline=0&portrait=0";
        }

        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "premium-blocks-video-bg-wrap"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
          src: src,
          frameBorder: "0",
          allowFullScreen: true
        }));
      }
    }
  }
};
const animationAttr = data => {
  if (typeof data !== "undefined" && typeof data.name !== "undefined" && data.openAnimation) {
    return {
      "data-premiumanimation": JSON.stringify(data)
    };
  } else {
    return {};
  }
};
const gradientValue = value => {
  const {
    backgroundType,
    backgroundColor,
    gradientColorTwo,
    gradientPosition,
    gradientType,
    gradientLocationOne,
    gradientLocationTwo,
    gradientAngle,
    backgroundImageURL
  } = value;
  let btnGrad, btnGrad2, btnbg;

  if (undefined !== backgroundType && "gradient" === backgroundType) {
    btnGrad = "transparent" === backgroundColor || undefined === backgroundColor ? "rgba(255,255,255,0)" : backgroundColor;
    btnGrad2 = undefined !== gradientColorTwo && undefined !== gradientColorTwo && "" !== gradientColorTwo ? gradientColorTwo : "#777";

    if ("radial" === gradientType) {
      btnbg = `radial-gradient(at ${gradientPosition}, ${btnGrad} ${gradientLocationOne}%, ${btnGrad2} ${gradientLocationTwo}%)`;
    } else if ("radial" !== gradientType) {
      btnbg = `linear-gradient(${gradientAngle}deg, ${btnGrad} ${gradientLocationOne}%, ${btnGrad2} ${gradientLocationTwo}%)`;
    }
  } else {
    btnbg = backgroundImageURL ? `url('${backgroundImageURL}')` : "";
  }

  return btnbg;
};

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

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./accordion-item/block.json":
/*!***********************************!*\
  !*** ./accordion-item/block.json ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"premium/accordion-item","title":"Accordion Item","category":"premium-blocks","parent":["premium/accordion"],"description":"A collection of blocks that allow visitors to get around your site.","keywords":["accordion"],"textdomain":"default","attributes":{"blockId":{"type":"string"},"title":{"type":"string","default":"Awesome Title"},"description":{"type":"string","default":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},"titleTag":{"type":"string"},"contentType":{"type":"string"},"direction":{"type":"string"},"arrowPosition":{"type":"string"}},"supports":{"anchor":true},"usesContext":["direction","arrowStyles","titleTag","contentType"],"editorScript":"file:./build/index.js"}');

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*********************************!*\
  !*** ./accordion-item/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": function() { return /* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_1__; },
/* harmony export */   "name": function() { return /* binding */ name; }
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./accordion-item/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./accordion-item/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./accordion-item/save.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */




const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, {
  // icon: ,
  __experimentalLabel: _ref => {
    let {
      label
    } = _ref;
    return label;
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map