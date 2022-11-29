const { __ } = wp.i18n;
import classnames from "classnames"
import { generateBlockId } from '../../components/HelperFunction';
import {
    generateCss,
} from '@pbg/helpers';
const {
    Fragment,
} = wp.element

const {
    RichText,
    InnerBlocks, useBlockProps
} = wp.blockEditor

const attributes = {
    block_id: {
        type: "string"
    },
    align: {
        type: "string",
        default: "left"
    },
    repeaterBulletList: {
        type: "array",
        default: [{
            id: 1,
            label: "Title #" + 1,
            image_icon: "icon",
            icon: "fa fa-arrow-circle-right",
            imageURL: "",
            imageID: '',
            icon_color: "#6EC1E4",
            label_color: "#6EC1E4",
            icon_hover_color: "",
            label_hover_color: "",
            icon_bg_color: "",
            icon_bg_hover_color: "",
            item_bg_color: "",
            item_bg_hover_color: "",
            link: "#",
            target: false,
            disableLink: false,
            showContent: false,
            showBulletIcon: true,
            linkTarget: false
        },
        {
            id: 2,
            label: "Title #" + 2,
            image_icon: "icon",
            icon: "fa fa-arrow-circle-right",
            imageURL: "",
            imageID: '',
            icon_color: "#6EC1E4",
            label_color: "#6EC1E4",
            icon_hover_color: "",
            label_hover_color: "",
            icon_bg_color: "",
            icon_bg_hover_color: "",
            item_bg_color: "",
            item_bg_hover_color: "",
            link: "#",
            target: false,
            disableLink: false,
            showContent: false,
            showBulletIcon: true,
            linkTarget: false
        },
        {
            id: 3,
            label: "Title #" + 3,
            image_icon: "icon",
            icon: "fa fa-arrow-circle-right",
            imageURL: "",
            imageID: '',
            icon_color: "#6EC1E4",
            label_color: "#6EC1E4",
            icon_hover_color: "",
            label_hover_color: "",
            icon_bg_color: "",
            icon_bg_hover_color: "",
            item_bg_color: "",
            item_bg_hover_color: "",
            link: "#",
            target: false,
            disableLink: false,
            showContent: false,
            showBulletIcon: true,
            linkTarget: false
        }
        ],
    },
    bulletIconStyles: {
        type: "array",
        default: [{
            bulletListfontSize: 20,
            bulletListfontSizeType: "px",
            bulletListfontSizeMobile: 20,
            bulletListfontSizeTablet: 20,
            bulletIconHoverColor: '',
            bulletIconColor: "#6EC1E4",
            bulletIconBackgroundColor: '',
            bulletIconHoverBackgroundColor: '',
            bulletIconborderType: "none",
            bulletIconborderRadius: 0,
            bulletIconborderColor: '',
            bulletIconpaddingUnit: 'px',
            bulletIconmarginType: 'px'
        }],
    },
    bulletIconBorderWidth: {
        type: "number",
        default: "1"
    },
    bulletIconBorderTop: {
        type: "number"
    },
    bulletIconBorderRight: {
        type: "number"
    },
    bulletIconBorderBottom: {
        type: "number"
    },
    bulletIconBorderLeft: {
        type: "number"
    },
    bulletIconBorderUpdated: {
        type: "boolean",
        default: false
    },
    bulletIconmarginT: {
        type: "number"
    },
    bulletIconmarginR: {
        type: "number"
    },
    bulletIconmarginB: {
        type: "number"
    },
    bulletIconmarginL: {
        type: "number"
    },
    bulletIconmarginTTablet: {
        type: "number"
    },
    bulletIconmarginRTablet: {
        type: "number"
    },
    bulletIconmarginBTablet: {
        type: "number"
    },
    bulletIconmarginLTablet: {
        type: "number"
    },
    bulletIconmarginTMobile: {
        type: "number"
    },
    bulletIconmarginRMobile: {
        type: "number"
    },
    bulletIconmarginBMobile: {
        type: "number"
    },
    bulletIconmarginLMobile: {
        type: "number"
    },
    bulletIconpaddingTop: {
        type: "number"
    },
    bulletIconpaddingRight: {
        type: "number"
    },
    bulletIconpaddingBottom: {
        type: "number"
    },
    bulletIconpaddingLeft: {
        type: "number"
    },
    bulletIconpaddingTTablet: {
        type: "number"
    },
    bulletIconpaddingRTablet: {
        type: "number"
    },
    bulletIconpaddingBTablet: {
        type: "number"
    },
    bulletIconpaddingLTablet: {
        type: "number"
    },
    bulletIconpaddingTMobile: {
        type: "number"
    },
    bulletIconpaddingRMobile: {
        type: "number"
    },
    bulletIconpaddingBMobile: {
        type: "number"
    },
    bulletIconpaddingLMobile: {
        type: "number"
    },
    titleStyles: {
        type: "array",
        default: [{
            titleLetter: 0,
            titleStyle: '',
            titleUpper: false,
            titleWeight: 500,
            titleLine: 0,
            titleSize: 20,
            titlefontSizeType: "px",
            titlefontSizeMobile: 20,
            titlefontSizeTablet: 20,
            titleFontFamily: __('Default', 'premium-blocks-for-gutenberg'),
            titleColor: "#6EC1E4",
            titleHoverColor: "",
            titleshadowColor: '',
            titleshadowBlur: 0,
            titleshadowHorizontal: 0,
            titleshadowVertical: 0,
            titlemarginType: 'px'
        }],
    },
    titlemarginT: {
        type: "number"
    },
    titlemarginR: {
        type: "number"
    },
    titlemarginB: {
        type: "number"
    },
    titlemarginL: {
        type: "number"
    },
    titlemarginTTablet: {
        type: "number"
    },
    titlemarginRTablet: {
        type: "number"
    },
    titlemarginBTablet: {
        type: "number"
    },
    titlemarginLTablet: {
        type: "number"
    },
    titlemarginTMobile: {
        type: "number"
    },
    titlemarginRMobile: {
        type: "number"
    },
    titlemarginBMobile: {
        type: "number"
    },
    titlemarginLMobile: {
        type: "number"
    },
    generalStyles: {
        type: "array",
        default: [{
            generalBackgroundColor: "",
            generalHoverBackgroundColor: '',
            generalborderType: "none",
            generalborderRadius: 0,
            generalborderColor: '',
            generalShadowColor: '',
            generalShadowBlur: 0,
            generalShadowHorizontal: 0,
            generalShadowVertical: 0,
            generalShadowPosition: '',
            generalHoverShadowColor: '',
            generalHoverShadowBlur: '',
            generalHoverShadowHorizontal: '',
            generalHoverShadowVertical: '',
            generalHoverShadowPosition: '',
            generalpaddingUnit: 'px',
            generalmarginType: 'px'
        }],
    },
    generalBorderWidth: {
        type: "number",
        default: "1"
    },
    generalBorderTop: {
        type: "number"
    },
    generalBorderRight: {
        type: "number"
    },
    generalBorderBottom: {
        type: "number"
    },
    generalBorderLeft: {
        type: "number"
    },
    generalBorderUpdated: {
        type: "boolean",
        default: false
    },
    generalmarginT: {
        type: "number"
    },
    generalmarginR: {
        type: "number"
    },
    generalmarginB: {
        type: "number"
    },
    generalmarginL: {
        type: "number"
    },
    generalmarginTTablet: {
        type: "number"
    },
    generalmarginRTablet: {
        type: "number"
    },
    generalmarginBTablet: {
        type: "number"
    },
    generalmarginLTablet: {
        type: "number"
    },
    generalmarginTMobile: {
        type: "number"
    },
    generalmarginRMobile: {
        type: "number"
    },
    generalmarginBMobile: {
        type: "number"
    },
    generalmarginLMobile: {
        type: "number"
    },
    generalpaddingTop: {
        type: "number"
    },
    generalpaddingRight: {
        type: "number"
    },
    generalpaddingBottom: {
        type: "number"
    },
    generalpaddingLeft: {
        type: "number"
    },
    generalpaddingTTablet: {
        type: "number"
    },
    generalpaddingRTablet: {
        type: "number"
    },
    generalpaddingBTablet: {
        type: "number"
    },
    generalpaddingLTablet: {
        type: "number"
    },
    generalpaddingTMobile: {
        type: "number"
    },
    generalpaddingRMobile: {
        type: "number"
    },
    generalpaddingBMobile: {
        type: "number"
    },
    generalpaddingLMobile: {
        type: "number"
    },
    classMigrate: {
        type: "boolean",
        default: false
    },
    layoutPos: {
        type: "string",
        default: "block"
    },
    iconPosition: {
        type: "string",
        default: "before"
    },
    bulletAlign: {
        type: "string",
        default: "center"
    },
    titleFont: {
        type: "string"
    },
    divider: {
        type: "boolean",
        default: false
    },
    dividerStyle: {
        type: "string",
        default: "solid"
    },
    dividerStyles: {
        type: "array",
        default: [{
            dividerWidth: '0',
            dividerWidthTablet: '0',
            dividerWidthMobile: '0',
            dividerWidthType: 'px',
            dividerHeight: '0',
            dividerHeightTablet: '0',
            dividerHeightMobile: '0',
            dividerHeightType: 'px',
            dividerColor: '#ddd'
        }]
    }
}
const newAttributes = {
    block_id: {
        type: "string"
    },
    align: {
        type: "string",
        default: "left"
    },
    repeaterBulletList: {
        type: "array",
        default: [{
            id: 1,
            label: "Title #" + 1,
            image_icon: "icon",
            icon: "fa fa-arrow-circle-right",
            imageURL: "",
            imageID: '',
            icon_color: "#6EC1E4",
            label_color: "#6EC1E4",
            icon_hover_color: "",
            label_hover_color: "",
            icon_bg_color: "",
            icon_bg_hover_color: "",
            item_bg_color: "",
            item_bg_hover_color: "",
            link: "#",
            target: false,
            disableLink: false,
            showContent: false,
            showBulletIcon: true,
            linkTarget: false
        },
        {
            id: 2,
            label: "Title #" + 2,
            image_icon: "icon",
            icon: "fa fa-arrow-circle-right",
            imageURL: "",
            imageID: '',
            icon_color: "#6EC1E4",
            label_color: "#6EC1E4",
            icon_hover_color: "",
            label_hover_color: "",
            icon_bg_color: "",
            icon_bg_hover_color: "",
            item_bg_color: "",
            item_bg_hover_color: "",
            link: "#",
            target: false,
            disableLink: false,
            showContent: false,
            showBulletIcon: true,
            linkTarget: false
        },
        {
            id: 3,
            label: "Title #" + 3,
            image_icon: "icon",
            icon: "fa fa-arrow-circle-right",
            imageURL: "",
            imageID: '',
            icon_color: "#6EC1E4",
            label_color: "#6EC1E4",
            icon_hover_color: "",
            label_hover_color: "",
            icon_bg_color: "",
            icon_bg_hover_color: "",
            item_bg_color: "",
            item_bg_hover_color: "",
            link: "#",
            target: false,
            disableLink: false,
            showContent: false,
            showBulletIcon: true,
            linkTarget: false
        }
        ],
    },
    bulletIconStyles: {
        type: "array",
        default: [{
            bulletListfontSize: 20,
            bulletListfontSizeType: "px",
            bulletListfontSizeMobile: 20,
            bulletListfontSizeTablet: 20,
            bulletIconHoverColor: '',
            bulletIconColor: "#6EC1E4",
            bulletIconBackgroundColor: '',
            bulletIconHoverBackgroundColor: '',
            bulletIconborderType: "none",
            bulletIconborderRadius: 0,
            bulletIconborderColor: '',
            bulletIconpaddingUnit: 'px',
            bulletIconmarginType: 'px'
        }],
    },
    bulletIconBorderWidth: {
        type: "number",
        default: "1"
    },
    bulletIconBorderTop: {
        type: "number"
    },
    bulletIconBorderRight: {
        type: "number"
    },
    bulletIconBorderBottom: {
        type: "number"
    },
    bulletIconBorderLeft: {
        type: "number"
    },
    bulletIconBorderUpdated: {
        type: "boolean",
        default: false
    },
    bulletIconmarginT: {
        type: "number"
    },
    bulletIconmarginR: {
        type: "number"
    },
    bulletIconmarginB: {
        type: "number"
    },
    bulletIconmarginL: {
        type: "number"
    },
    bulletIconmarginTTablet: {
        type: "number"
    },
    bulletIconmarginRTablet: {
        type: "number"
    },
    bulletIconmarginBTablet: {
        type: "number"
    },
    bulletIconmarginLTablet: {
        type: "number"
    },
    bulletIconmarginTMobile: {
        type: "number"
    },
    bulletIconmarginRMobile: {
        type: "number"
    },
    bulletIconmarginBMobile: {
        type: "number"
    },
    bulletIconmarginLMobile: {
        type: "number"
    },
    bulletIconpaddingTop: {
        type: "number"
    },
    bulletIconpaddingRight: {
        type: "number"
    },
    bulletIconpaddingBottom: {
        type: "number"
    },
    bulletIconpaddingLeft: {
        type: "number"
    },
    bulletIconpaddingTTablet: {
        type: "number"
    },
    bulletIconpaddingRTablet: {
        type: "number"
    },
    bulletIconpaddingBTablet: {
        type: "number"
    },
    bulletIconpaddingLTablet: {
        type: "number"
    },
    bulletIconpaddingTMobile: {
        type: "number"
    },
    bulletIconpaddingRMobile: {
        type: "number"
    },
    bulletIconpaddingBMobile: {
        type: "number"
    },
    bulletIconpaddingLMobile: {
        type: "number"
    },
    titleStyles: {
        type: "array",
        default: [{
            titleLetter: 0,
            titleStyle: '',
            titleUpper: false,
            titleWeight: 500,
            titleLine: 0,
            titleSize: 20,
            titlefontSizeType: "px",
            titlefontSizeMobile: 20,
            titlefontSizeTablet: 20,
            titleFontFamily: __('Default', 'premium-blocks-for-gutenberg'),
            titleColor: "#6EC1E4",
            titleHoverColor: "",
            titleshadowColor: '',
            titleshadowBlur: 0,
            titleshadowHorizontal: 0,
            titleshadowVertical: 0,
            titlemarginType: 'px'
        }],
    },
    titlemarginT: {
        type: "number"
    },
    titlemarginR: {
        type: "number"
    },
    titlemarginB: {
        type: "number"
    },
    titlemarginL: {
        type: "number"
    },
    titlemarginTTablet: {
        type: "number"
    },
    titlemarginRTablet: {
        type: "number"
    },
    titlemarginBTablet: {
        type: "number"
    },
    titlemarginLTablet: {
        type: "number"
    },
    titlemarginTMobile: {
        type: "number"
    },
    titlemarginRMobile: {
        type: "number"
    },
    titlemarginBMobile: {
        type: "number"
    },
    titlemarginLMobile: {
        type: "number"
    },
    generalStyles: {
        type: "array",
        default: [{
            generalBackgroundColor: "",
            generalHoverBackgroundColor: '',
            generalborderType: "none",
            generalborderRadius: 0,
            generalborderColor: '',
            generalShadowColor: '',
            generalShadowBlur: 0,
            generalShadowHorizontal: 0,
            generalShadowVertical: 0,
            generalShadowPosition: '',
            generalHoverShadowColor: '',
            generalHoverShadowBlur: '',
            generalHoverShadowHorizontal: '',
            generalHoverShadowVertical: '',
            generalHoverShadowPosition: '',
            generalpaddingUnit: 'px',
            generalmarginType: 'px'
        }],
    },
    generalBorderWidth: {
        type: "number",
        default: "1"
    },
    generalBorderTop: {
        type: "number"
    },
    generalBorderRight: {
        type: "number"
    },
    generalBorderBottom: {
        type: "number"
    },
    generalBorderLeft: {
        type: "number"
    },
    generalBorderUpdated: {
        type: "boolean",
        default: false
    },
    generalmarginT: {
        type: "number"
    },
    generalmarginR: {
        type: "number"
    },
    generalmarginB: {
        type: "number"
    },
    generalmarginL: {
        type: "number"
    },
    generalmarginTTablet: {
        type: "number"
    },
    generalmarginRTablet: {
        type: "number"
    },
    generalmarginBTablet: {
        type: "number"
    },
    generalmarginLTablet: {
        type: "number"
    },
    generalmarginTMobile: {
        type: "number"
    },
    generalmarginRMobile: {
        type: "number"
    },
    generalmarginBMobile: {
        type: "number"
    },
    generalmarginLMobile: {
        type: "number"
    },
    generalpaddingTop: {
        type: "number"
    },
    generalpaddingRight: {
        type: "number"
    },
    generalpaddingBottom: {
        type: "number"
    },
    generalpaddingLeft: {
        type: "number"
    },
    generalpaddingTTablet: {
        type: "number"
    },
    generalpaddingRTablet: {
        type: "number"
    },
    generalpaddingBTablet: {
        type: "number"
    },
    generalpaddingLTablet: {
        type: "number"
    },
    generalpaddingTMobile: {
        type: "number"
    },
    generalpaddingRMobile: {
        type: "number"
    },
    generalpaddingBMobile: {
        type: "number"
    },
    generalpaddingLMobile: {
        type: "number"
    },
    classMigrate: {
        type: "boolean",
        default: false
    },
    layoutPos: {
        type: "string",
        default: "block"
    },
    iconPosition: {
        type: "string",
        default: "before"
    },
    bulletAlign: {
        type: "string",
        default: "center"
    },
    titleFont: {
        type: "string"
    },
    divider: {
        type: "boolean",
        default: false
    },
    dividerStyle: {
        type: "string",
        default: "solid"
    },
    dividerStyles: {
        type: "array",
        default: [{
            dividerWidth: '0',
            dividerWidthTablet: '0',
            dividerWidthMobile: '0',
            dividerWidthType: 'px',
            dividerHeight: '0',
            dividerHeightTablet: '0',
            dividerHeightMobile: '0',
            dividerHeightType: 'px',
            dividerColor: '#ddd'
        }]
    }
}

const newAttributes_v2 = {
    "blockId": {
        "type": "string"
    },
    "align": {
        "type": "object",
        "default": {
            "Desktop": "",
            "Tablet": "",
            "Mobile": ""
        }
    },
    "repeaterBulletList": {
        "type": "array",
        "default": [
            {
                "id": 1,
                "label": "Title #1",
                "image_icon": "icon",
                "icon": "fa fa-arrow-circle-right",
                "imageURL": "",
                "imageID": "",
                "icon_color": "",
                "label_color": "",
                "icon_hover_color": "",
                "label_hover_color": "",
                "icon_bg_color": "",
                "icon_bg_hover_color": "",
                "item_bg_color": "",
                "item_bg_hover_color": "",
                "link": "#",
                "target": false,
                "disableLink": false,
                "showContent": false,
                "showBulletIcon": true,
                "linkTarget": false
            },
            {
                "id": 2,
                "label": "Title #2",
                "image_icon": "icon",
                "icon": "fa fa-arrow-circle-right",
                "imageURL": "",
                "imageID": "",
                "icon_color": "",
                "label_color": "",
                "icon_hover_color": "",
                "label_hover_color": "",
                "icon_bg_color": "",
                "icon_bg_hover_color": "",
                "item_bg_color": "",
                "item_bg_hover_color": "",
                "link": "#",
                "target": false,
                "disableLink": false,
                "showContent": false,
                "showBulletIcon": true,
                "linkTarget": false
            },
            {
                "id": 3,
                "label": "Title #3",
                "image_icon": "icon",
                "icon": "fa fa-arrow-circle-right",
                "imageURL": "",
                "imageID": "",
                "icon_color": "",
                "label_color": "",
                "icon_hover_color": "",
                "label_hover_color": "",
                "icon_bg_color": "",
                "icon_bg_hover_color": "",
                "item_bg_color": "",
                "item_bg_hover_color": "",
                "link": "#",
                "target": false,
                "disableLink": false,
                "showContent": false,
                "showBulletIcon": true,
                "linkTarget": false
            }
        ]
    },
    "bulletIconStyles": {
        "type": "array",
        "default": [
            {
                "bulletIconHoverColor": "",
                "bulletIconColor": "",
                "bulletIconBackgroundColor": "",
                "bulletIconHoverBackgroundColor": "",
                "bulletIconpaddingUnit": "px",
                "bulletIconmarginType": "px"
            }
        ]
    },
    "titleStyles": {
        "type": "array",
        "default": [
            {
                "titleColor": "",
                "titleHoverColor": "",
                "titlemarginType": "px"
            }
        ]
    },
    "generalStyles": {
        "type": "array",
        "default": [
            {
                "generalBackgroundColor": "",
                "generalHoverBackgroundColor": "",
                "generalpaddingUnit": "px",
                "generalmarginType": "px"
            }
        ]
    },
    "classMigrate": {
        "type": "boolean",
        "default": false
    },
    "layoutPos": {
        "type": "string",
        "default": "block"
    },
    "iconPosition": {
        "type": "string",
        "default": "before"
    },
    "bulletAlign": {
        "type": "object",
        "default": {
            "Desktop": "center",
            "Tablet": "center",
            "Mobile": "center"
        }
    },
    "titleFont": {
        "type": "string"
    },
    "divider": {
        "type": "boolean",
        "default": false
    },
    "dividerStyle": {
        "type": "string",
        "default": "solid"
    },
    "dividerStyles": {
        "type": "array",
        "default": [
            {
                "dividerColor": "#ddd"
            }
        ]
    },
    "generalmargin": {
        "type": "object",
        "default": {
            "Desktop": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "Tablet": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "Mobile": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "unit": "px"
        }
    },
    "bulletIconmargin": {
        "type": "object",
        "default": {
            "Desktop": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "Tablet": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "Mobile": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "unit": "px"
        }
    },
    "titlemargin": {
        "type": "object",
        "default": {
            "Desktop": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "Tablet": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "Mobile": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "unit": "px"
        }
    },
    "generalpadding": {
        "type": "object",
        "default": {
            "Desktop": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "Tablet": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "Mobile": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "unit": "px"
        }
    },
    "bulletIconpadding": {
        "type": "object",
        "default": {
            "Desktop": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "Tablet": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "Mobile": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "unit": "px"
        }
    },
    "generalBorder": {
        "type": "object",
        "default": {
            "borderType": "none",
            "borderColor": "",
            "borderWidth": {
                "Desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "Tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "Mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                }
            },
            "borderRadius": {
                "Desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "Tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "Mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                }
            }
        }
    },
    "bulletIconBorder": {
        "type": "object",
        "default": {
            "borderType": "none",
            "borderColor": "",
            "borderWidth": {
                "Desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "Tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "Mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                }
            },
            "borderRadius": {
                "Desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "Tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "Mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                }
            }
        }
    },
    "titleTypography": {
        "type": "object",
        "default": {
            "fontWeight": "Default",
            "fontStyle": "",
            "letterSpacing": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            },
            "fontFamily": "Default",
            "lineHeight": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            },
            "textDecoration": "",
            "textTransform": "",
            "fontSize": {
                "Desktop": "",
                "Tablet": "",
                "Mobile": "",
                "unit": "px"
            }
        }
    },
    "titlesTextShadow": {
        "type": "object",
        "default": {
            "color": "undefined",
            "blur": "10",
            "horizontal": "0",
            "vertical": "0"
        }
    },
    "boxShadow": {
        "type": "object",
        "default": {
            "color": "undefined",
            "blur": "10",
            "horizontal": "0",
            "vertical": "0",
            "position": " "
        }
    },
    "hoverBoxShadow": {
        "type": "object",
        "default": {
            "color": "undefined",
            "blur": "10",
            "horizontal": "0",
            "vertical": "0",
            "position": " "
        }
    },
    "bulletIconFontSize": {
        "type": "object",
        "default": {
            "Desktop": 20,
            "Tablet": 20,
            "Mobile": 20,
            "unit": "px"
        }
    },
    "dividerWidth": {
        "type": "object",
        "default": {
            "Desktop": "",
            "Tablet": "",
            "Mobile": "",
            "unit": "px"
        }
    },
    "dividerHeight": {
        "type": "object",
        "default": {
            "Desktop": "",
            "Tablet": "",
            "Mobile": "",
            "unit": "px"
        }
    },
    "hideDesktop": {
        "type": "boolean",
        "default": ""
    },
    "hideTablet": {
        "type": "boolean",
        "default": ""
    },
    "hideMobile": {
        "type": "boolean",
        "default": ""
    }
}

const deprecated = [
    {
        attributes: newAttributes_v2,
        save: props => {
            const { attributes, className } = props

            const {
                blockId = '',
                layoutPos,
                iconPosition,
                bulletIconStyles,
                bulletIconBorder,
                titleStyles,
                generalStyles,
                generalBorder,
                dividerStyles,
                dividerStyle,
                titlesTextShadow,
                boxShadow,
                hoverBoxShadow,
                titleTypography,
                hideDesktop,
                hideTablet,
                hideMobile,
            } = attributes

            const loadStyles = () => {
                const styles = {};

                styles[`.${blockId} .premium-bullet-list__content-icon i, .${blockId} .premium-bullet-list__content-icon img`] = {
                    'overflow': 'hidden',
                    'color': bulletIconStyles[0].bulletIconColor,
                    'background-color': bulletIconStyles[0].bulletIconBackgroundColor,
                    'border-style': bulletIconBorder?.borderType,
                    'border-color': `${bulletIconBorder?.borderColor}`,
                };

                styles[`.${blockId} .premium-bullet-list__wrapper`] = {
                    'border-style': generalBorder?.borderType,
                    'border-color': `${generalBorder?.borderColor}`,
                    'overflow': 'hidden',
                    'background-color': generalStyles[0].generalBackgroundColor,
                    'box-shadow': `${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.color} ${boxShadow.position}`,
                };

                styles[`.${blockId} .premium-bullet-list__content-wrap`] = {
                    'display': iconPosition == "before" ? "flex" : "inline-flex",
                };

                styles[`.${blockId} .premium-bullet-list__label`] = {
                    'color': titleStyles[0].titleColor,
                    'text-shadow': `${titlesTextShadow.horizontal}px ${titlesTextShadow.vertical}px ${titlesTextShadow.blur}px ${titlesTextShadow.color}`,
                    'font-style': titleTypography?.fontStyle,
                    'font-family': titleTypography?.fontFamily,
                    'font-weight': titleTypography?.fontWeight,
                    'text-decoration': titleTypography?.textDecoration,
                    'text-transform': titleTypography?.textTransform,
                };

                styles[`.${blockId} .premium-bullet-list__content-icon i:hover`] = {
                    'color': `${bulletIconStyles?.[0]?.bulletIconHoverColor}!important`,
                    'background-color': `${bulletIconStyles?.[0]?.bulletIconHoverBackgroundColor}!important`
                };
                styles[`.${blockId} .premium-bullet-list__label-wrap .premium-bullet-list__label:hover`] = {
                    'color': `${titleStyles?.[0]?.titleHoverColor}!important`
                };
                styles[`.${blockId} .premium-bullet-list__wrapper:hover`] = {
                    'background-color': `${generalStyles?.[0]?.generalHoverBackgroundColor}!important`,
                    'box-shadow': `${hoverBoxShadow?.horizontal}px ${hoverBoxShadow?.vertical}px ${hoverBoxShadow?.blur}px ${hoverBoxShadow?.color} ${hoverBoxShadow?.position}!important`
                };

                styles[`.${blockId} .premium-bullet-list-divider-block:not(:last-child)::after`] = {
                    'border-top-style': dividerStyle,
                    'border-top-color': dividerStyles?.[0]?.dividerColor,
                };

                styles[`.${blockId} .premium-bullet-list-divider-inline:not(:last-child)::after`] = {
                    'border-left-style': dividerStyle,
                    'border-left-color': dividerStyles?.[0]?.dividerColor,
                };

                return generateCss(styles);
            }

            return (
                <div
                    {...useBlockProps.save({
                        className: classnames(
                            className,
                            `premium-bullet-list ${blockId}`,
                            {
                                " premium-desktop-hidden": hideDesktop,
                                " premium-tablet-hidden": hideTablet,
                                " premium-mobile-hidden": hideMobile,
                            }
                        ),
                    })}
                >
                    <style>{loadStyles()}</style>
                    <ul className={`premium-bullet-list-${layoutPos} premium-bullet-list`}>
                        <InnerBlocks.Content />
                    </ul>
                </div>
            );
        }
    },
    {
        attributes: Object.assign(attributes, newAttributes),
        isEligible() {
            return true;
        },
        migrate: (attributes) => {
            let newAttributes = {
                blockId: attributes.block_id ? "premium-bullet-list-" + generateBlockId(attributes.block_id) : '',
                generalmargin: {
                    "Desktop": {
                        top: attributes?.generalmarginT || '',
                        right: attributes?.generalmarginR || '',
                        bottom: attributes?.generalmarginB || '',
                        left: attributes?.generalmarginL || ''
                    },
                    "Tablet": {
                        top: attributes?.generalmarginTTablet || '',
                        right: attributes?.generalmarginRTablet || '',
                        bottom: attributes?.generalmarginBTablet || '',
                        left: attributes?.generalmarginLTablet || ''
                    },
                    "Mobile": {
                        top: attributes?.generalmarginTMobile || '',
                        right: attributes?.generalmarginRMobile || '',
                        bottom: attributes?.generalmarginBMobile || '',
                        left: attributes?.generalmarginLMobile || ''
                    },
                    "unit": "px"
                },
                bulletIconmargin: {
                    "Desktop": {
                        top: attributes?.bulletIconmarginT || '',
                        right: attributes?.bulletIconmarginR || '',
                        bottom: attributes?.bulletIconmarginB || '',
                        left: attributes?.bulletIconmarginL || ''
                    },
                    "Tablet": {
                        top: attributes?.bulletIconmarginTTablet || '',
                        right: attributes?.bulletIconmarginRTablet || '',
                        bottom: attributes?.bulletIconmarginBTablet || '',
                        left: attributes?.bulletIconmarginLTablet || ''
                    },
                    "Mobile": {
                        top: attributes?.bulletIconmarginTMobile || '',
                        right: attributes?.bulletIconmarginRMobile || '',
                        bottom: attributes?.bulletIconmarginBMobile || '',
                        left: attributes?.bulletIconmarginLMobile || ''
                    },
                    "unit": "px"
                },
                titlemargin: {
                    "Desktop": {
                        top: attributes?.titlemarginT || '',
                        right: attributes?.titlemarginR || '',
                        bottom: attributes?.titlemarginB || '',
                        left: attributes?.titlemarginL || ''
                    },
                    "Tablet": {
                        top: attributes?.titlemarginTTablet || '',
                        right: attributes?.titlemarginRTablet || '',
                        bottom: attributes?.titlemarginBTablet || '',
                        left: attributes?.titlemarginLTablet || ''
                    },
                    "Mobile": {
                        top: attributes?.titlemarginTMobile || '',
                        right: attributes?.titlemarginRMobile || '',
                        bottom: attributes?.titlemarginBMobile || '',
                        left: attributes?.titlemarginLMobile || ''
                    },
                    "unit": "px"
                },
                generalpadding: {
                    "Desktop": {
                        top: attributes?.generalpaddingTop || '',
                        right: attributes?.generalpaddingRight || '',
                        bottom: attributes?.generalpaddingBottom || '',
                        left: attributes?.generalpaddingLeft || ''
                    },
                    "Tablet": {
                        top: attributes?.generalpaddingTTablet || '',
                        right: attributes?.generalpaddingRTablet || '',
                        bottom: attributes?.generalpaddingBTablet || '',
                        left: attributes?.generalpaddingLTablet || ''
                    },
                    "Mobile": {
                        top: attributes?.generalpaddingTMobile || '',
                        right: attributes?.generalpaddingRMobile || '',
                        bottom: attributes?.generalpaddingBMobile || '',
                        left: attributes?.generalpaddingLMobile || ''
                    },
                    "unit": "px"
                },
                bulletIconpadding: {
                    "Desktop": {
                        top: attributes?.bulletIconpaddingTop || '',
                        right: attributes?.bulletIconpaddingRight || '',
                        bottom: attributes?.bulletIconpaddingBottom || '',
                        left: attributes?.bulletIconpaddingLeft || ''
                    },
                    "Tablet": {
                        top: attributes?.bulletIconpaddingTTablet || '',
                        right: attributes?.bulletIconpaddingRTablet || '',
                        bottom: attributes?.bulletIconpaddingBTablet || '',
                        left: attributes?.bulletIconpaddingLTablet || ''
                    },
                    "Mobile": {
                        top: attributes?.bulletIconpaddingTMobile || '',
                        right: attributes?.bulletIconpaddingRMobile || '',
                        bottom: attributes?.bulletIconpaddingBMobile || '',
                        left: attributes?.bulletIconpaddingLMobile || ''
                    },
                    "unit": "px"
                },
                generalBorder: {
                    "borderType": attributes?.generalStyles?.[0]?.generalborderType || '',
                    "borderColor": attributes?.generalStyles?.[0]?.generalborderColor || '',
                    "borderWidth": {
                        Desktop: {
                            top: attributes?.generalBorderTop || '',
                            right: attributes?.generalBorderRight || '',
                            bottom: attributes?.generalBorderBottom || '',
                            left: attributes?.generalBorderLeft || ''
                        },
                        Tablet: {
                            top: '',
                            right: '',
                            bottom: '',
                            left: ''
                        },
                        Mobile: {
                            top: '',
                            right: '',
                            bottom: '',
                            left: ''
                        }
                    },
                    "borderRadius": {
                        Desktop: {
                            top: attributes?.generalStyles?.[0]?.generalborderRadius || '',
                            right: attributes?.generalStyles?.[0]?.generalborderRadius || '',
                            bottom: attributes?.generalStyles?.[0]?.generalborderRadius || '',
                            left: attributes?.generalStyles?.[0]?.generalborderRadius || ''
                        },
                        Tablet: {
                            top: '',
                            right: '',
                            bottom: '',
                            left: ''
                        },
                        Mobile: {
                            top: '',
                            right: '',
                            bottom: '',
                            left: ''
                        }
                    }
                },
                bulletIconBorder: {
                    "borderType": attributes?.bulletIconStyles?.[0]?.bulletIconborderType || '',
                    "borderColor": attributes?.bulletIconStyles?.[0]?.bulletIconborderColor || '',
                    "borderWidth": {
                        Desktop: {
                            top: '',
                            right: '',
                            bottom: '',
                            left: ''
                        },
                        Tablet: {
                            top: '',
                            right: '',
                            bottom: '',
                            left: ''
                        },
                        Mobile: {
                            top: '',
                            right: '',
                            bottom: '',
                            left: ''
                        }
                    },
                    "borderRadius": {
                        Desktop: {
                            top: attributes?.bulletIconStyles?.[0]?.bulletIconborderRadius || '',
                            right: attributes?.bulletIconStyles?.[0]?.bulletIconborderRadius || '',
                            bottom: attributes?.bulletIconStyles?.[0]?.bulletIconborderRadius || '',
                            left: attributes?.bulletIconStyles?.[0]?.bulletIconborderRadius || ''
                        },
                        Tablet: {
                            top: '',
                            right: '',
                            bottom: '',
                            left: ''
                        },
                        Mobile: {
                            top: '',
                            right: '',
                            bottom: '',
                            left: ''
                        }
                    }
                },
                titleTypography: {
                    "fontWeight": attributes?.titleStyles?.[0]?.titleWeight || '',
                    'fontStyle': attributes?.titleStyles?.[0]?.titleStyle || '',
                    'textTransform': attributes?.titleStyles?.[0]?.titleUpper || '',
                    'letterSpacing': attributes?.titleStyles?.[0]?.titleLetter || '',
                    'fontFamily': attributes?.titleStyles?.[0]?.titleFontFamily || '',
                    'lineHeight': attributes?.titleStyles?.[0]?.titleLine || '',
                    'textDecoration': '',
                    letterSpacing: {
                        Desktop: attributes?.titleStyles?.[0]?.titleLetter || '',
                        Tablet: attributes?.titleStyles?.[0]?.titleLetter || '',
                        Mobile: attributes?.titleStyles?.[0]?.titleLetter || '',
                        unit: "px",
                    },
                    lineHeight: {
                        Desktop: attributes?.titleStyles?.[0]?.titleLine || '',
                        Tablet: attributes?.titleStyles?.[0]?.titleLine || '',
                        Mobile: attributes?.titleStyles?.[0]?.titleLine || '',
                        unit: "px",
                    },
                    'fontSize': {
                        'Desktop': attributes?.titleStyles?.[0]?.titleSize || '',
                        "Tablet": attributes?.titleStyles?.[0]?.titlefontSizeTablet || '',
                        "Mobile": attributes?.titleStyles?.[0]?.titlefontSizeMobile || '',
                        "unit": 'px'
                    }
                },
                titlesTextShadow: {
                    'color': attributes?.titleStyles?.[0]?.titleshadowColor || '',
                    'blur': attributes?.titleStyles?.[0]?.titleshadowBlur || '',
                    'horizontal': attributes?.titleStyles?.[0]?.titleshadowHorizontal || '',
                    'vertical': attributes?.titleStyles?.[0]?.titleshadowVertical || '',
                },
                boxShadow: {
                    'color': attributes?.generalStyles?.[0]?.generalShadowColor || '',
                    'blur': attributes?.generalStyles?.[0]?.generalShadowBlur || '',
                    'horizontal': attributes?.generalStyles?.[0]?.generalShadowHorizontal || '',
                    'vertical': attributes?.generalStyles?.[0]?.generalShadowVertical || '',
                    'position': attributes?.generalStyles?.[0]?.generalShadowPosition || ''
                },
                hoverBoxShadow: {
                    'color': attributes?.generalStyles?.[0]?.generalHoverShadowColor || '',
                    'blur': attributes?.generalStyles?.[0]?.generalHoverShadowBlur || '',
                    'horizontal': attributes?.generalStyles?.[0]?.generalHoverShadowHorizontal || '',
                    'vertical': attributes?.generalStyles?.[0]?.generalHoverShadowVertical || '',
                    'position': attributes?.generalStyles?.[0]?.generalHoverShadowPosition || ''
                },
                bulletIconFontSize: {
                    'Desktop': attributes?.bulletIconStyles?.[0]?.bulletListfontSize || '',
                    'Tablet': attributes?.bulletIconStyles?.[0]?.bulletListfontSizeTablet || '',
                    'Mobile': attributes?.bulletIconStyles?.[0]?.bulletListfontSizeMobile || '',
                    'unit': attributes?.bulletIconStyles?.[0]?.bulletListfontSizeType || 'px'
                },
                dividerWidth: {
                    'Desktop': attributes?.dividerStyles?.[0]?.dividerWidth || '',
                    'Tablet': attributes?.dividerStyles?.[0]?.dividerWidthTablet || '',
                    'Mobile': attributes?.dividerStyles?.[0]?.dividerWidthMobile || '',
                    'unit': 'px'
                },
                dividerHeight: {
                    'Desktop': attributes?.dividerStyles?.[0]?.dividerHeight || '',
                    'Tablet': attributes?.dividerStyles?.[0]?.dividerHeightTablet || '',
                    'Mobile': attributes?.dividerStyles?.[0]?.dividerHeightMobile || '',
                    'unit': 'px'
                },
                bulletAlign: {
                    Desktop: attributes?.bulletAlign,
                    Tablet: attributes?.bulletAlign,
                    Mobile: attributes?.bulletAlign
                },
                align: {
                    Desktop: attributes?.align,
                    Tablet: attributes?.align,
                    Mobile: attributes?.align
                },
            }
            return Object.assign(attributes, newAttributes)
        },
        save: props => {
            const { attributes, className } = props

            const {
                block_id,
                layoutPos,
                iconPosition,
                align,
                repeaterBulletList,
                bulletAlign,
                bulletIconStyles,
                bulletIconBorderUpdated,
                bulletIconBorderTop,
                bulletIconBorderRight,
                bulletIconBorderBottom,
                bulletIconBorderLeft,
                bulletIconBorderWidth,
                titleStyles,
                generalStyles,
                generalBorderWidth,
                generalBorderTop,
                generalBorderRight,
                generalBorderBottom,
                generalBorderLeft,
                generalBorderUpdated,
                titleFont,
                dividerStyles,
                divider,
                dividerStyle
            } = attributes

            return (
                <div className={classnames(
                    className,
                    `premium-bullet-list-${block_id}`
                )}
                    id={`premium-bullet-list-${block_id}`}
                    style={{
                        textAlign: align,
                    }}>
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-bullet-list-${block_id} .premium-bullet-list__content-icon i:hover {`,
                                `color: ${bulletIconStyles[0].bulletIconHoverColor} !important;`,
                                `background-color: ${bulletIconStyles[0].bulletIconHoverBackgroundColor} !important;`,
                                "}",
                                `#premium-bullet-list-${block_id} .premium-bullet-list__label-wrap .premium-bullet-list__label:hover {`,
                                `color: ${titleStyles[0].titleHoverColor} !important;`,
                                "}",
                                `#premium-bullet-list-${block_id} .premium-bullet-list__wrapper:hover {`,
                                `background-color: ${generalStyles[0].generalHoverBackgroundColor} !important;`,
                                `box-shadow: ${generalStyles[0].generalHoverShadowHorizontal}px ${generalStyles[0].generalHoverShadowVertical}px ${generalStyles[0].generalHoverShadowBlur}px ${generalStyles[0].generalHoverShadowColor} ${generalStyles[0].generalHoverShadowPosition} !important;`,
                                "}",
                                `#premium-bullet-list-${block_id} .premium-bullet-list-divider-block:not(:last-child)::after {`,
                                `border-top-style: ${dividerStyle};`,
                                `border-top-color: ${dividerStyles[0].dividerColor};`,
                                "}",
                                `#premium-bullet-list-${block_id} .premium-bullet-list-divider-inline:not(:last-child)::after {`,
                                `border-left-style: ${dividerStyle};`,
                                `border-left-color: ${dividerStyles[0].dividerColor};`,
                                "}",
                            ].join("\n")
                        }}
                    />
                    <ul className={`premium-bullet-list-${layoutPos} premium-bullet-list`}
                        style={{
                            textAlign: align,
                            justifyContent: align == "right" ? "flex-end" : align
                        }}>
                        {
                            repeaterBulletList.map((icon, index) => {

                                let image_icon_html = ""
                                if (icon.showBulletIcon) {
                                    if (icon.image_icon == "icon") {
                                        if (icon.icon) {
                                            image_icon_html = <span className="premium-bullet-list__content-icon" key={index}>
                                                <i
                                                    className={`${icon.icon}`}
                                                    style={{
                                                        overflow: 'hidden',
                                                        color: bulletIconStyles[0].bulletIconColor,
                                                        backgroundColor: bulletIconStyles[0].bulletIconBackgroundColor,
                                                        borderStyle: bulletIconStyles[0].bulletIconborderType,
                                                        borderWidth: bulletIconBorderUpdated
                                                            ? `${bulletIconBorderTop}px ${bulletIconBorderRight}px ${bulletIconBorderBottom}px ${bulletIconBorderLeft}px`
                                                            : bulletIconBorderWidth + "px",
                                                        borderRadius: bulletIconStyles[0].bulletIconborderRadius || 0 + "px",
                                                        borderColor: bulletIconStyles[0].bulletIconborderColor,
                                                        verticalAlign: bulletAlign == 'flex-start' ? 'top' : bulletAlign == 'flex-end' ? 'bottom' : 'middle'
                                                    }}
                                                />
                                            </span>
                                        }
                                    } else {
                                        if (icon.imageURL) {
                                            image_icon_html = <img
                                                src={icon.imageURL}
                                                key={index}
                                                style={{
                                                    width: '20px',
                                                    height: '20px',
                                                    overflow: 'hidden',
                                                    borderStyle: bulletIconStyles[0].bulletIconborderType,
                                                    borderWidth: bulletIconBorderUpdated
                                                        ? `${bulletIconBorderTop}px ${bulletIconBorderRight}px ${bulletIconBorderBottom}px ${bulletIconBorderLeft}px`
                                                        : bulletIconBorderWidth + "px",
                                                    borderRadius: bulletIconStyles[0].bulletIconborderRadius || 0 + "px",
                                                    borderColor: bulletIconStyles[0].bulletIconborderColor,
                                                    verticalAlign: bulletAlign == 'flex-start' ? 'top' : bulletAlign == 'flex-end' ? 'bottom' : 'middle'
                                                }}
                                            />
                                        }
                                    }
                                }

                                let target = (icon.linkTarget) ? "_blank" : "_self"
                                let link_url = (icon.disableLink) ? icon.link : "/"

                                if (!icon.disableLink) {
                                    return (
                                        <Fragment>
                                            <li
                                                className={classnames(
                                                    `premium-bullet-list-content${index}`,
                                                    "premium-bullet-list__wrapper"
                                                )}
                                                key={index}
                                                style={{
                                                    textAlign: align,
                                                    overflow: 'hidden',
                                                    justifyContent: align == "right" ? "flex-end" : align,
                                                    backgroundColor: generalStyles[0].generalBackgroundColor,
                                                    borderStyle: generalStyles[0].generalborderType,
                                                    borderWidth: generalBorderUpdated
                                                        ? `${generalBorderTop}px ${generalBorderRight}px ${generalBorderBottom}px ${generalBorderLeft}px`
                                                        : generalBorderWidth + "px",
                                                    borderRadius: generalStyles[0].generalborderRadius || 0 + "px",
                                                    borderColor: generalStyles[0].generalborderColor,
                                                    boxShadow: `${generalStyles[0].generalShadowHorizontal}px ${generalStyles[0].generalShadowVertical}px ${generalStyles[0].generalShadowBlur}px ${generalStyles[0].generalShadowColor} ${generalStyles[0].generalShadowPosition}`,
                                                }}
                                            >
                                                <div className={`premium-bullet-list__content-wrap premium-bullet-list__content-wrap-${bulletAlign}`} style={{
                                                    justifyContent: align == "right" ? align : align,
                                                    display: iconPosition == "before" ? "flex" : "inline-flex",
                                                    flexDirection: iconPosition == "top" ? align == "right" ? "column" : "column" : iconPosition == "after" ? 'row-reverse' : "",
                                                }}>
                                                    <span className={`premium-bullet-list__icon-wrap`}
                                                        style={{
                                                            overflow: repeaterBulletList[index].image_icon == 'image' ? "hidden" : "",
                                                            alignSelf: bulletAlign == 'left' ? 'flex-start' : bulletAlign == 'right' ? 'flex-end' : 'center',
                                                            textAlign: bulletAlign,
                                                            justifyContent: bulletAlign,
                                                            alignItems: bulletAlign == 'left' ? 'flex-start' : bulletAlign == 'right' ? 'flex-end' : 'center',
                                                        }}
                                                    >{image_icon_html}</span>
                                                    <div className="premium-bullet-list__label-wrap">
                                                        <RichText.Content
                                                            tagName="span"
                                                            value={repeaterBulletList[index].label}
                                                            className='premium-bullet-list__label'
                                                            style={{
                                                                fontFamily: titleFont,
                                                                fontWeight: titleStyles[0].titleWeight,
                                                                letterSpacing: titleStyles[0].titleLetter + "px",
                                                                lineHeight: titleStyles[0].titleLine + "px",
                                                                fontStyle: titleStyles[0].titleStyle,
                                                                textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                                                                fontFamily: titleStyles[0].titleFontFamily,
                                                                color: titleStyles[0].titleColor,
                                                                textShadow: `${titleStyles[0].titleshadowHorizontal}px ${titleStyles[0].titleshadowVertical}px ${titleStyles[0].titleshadowBlur}px ${titleStyles[0].titleshadowColor}`,
                                                            }} />
                                                    </div>
                                                </div>
                                            </li>
                                            {divider &&
                                                <div className={`premium-bullet-list-divider-${layoutPos}`}></div>
                                            }
                                        </Fragment>
                                    )
                                } else {

                                    return (
                                        <Fragment>
                                            <li
                                                className={classnames(
                                                    `premium-bullet-list-content${index}`,
                                                    "premium-bullet-list__wrapper"
                                                )}
                                                key={index}
                                                style={{
                                                    listStyleType: 'none',
                                                    overflow: 'hidden',
                                                    textAlign: align,
                                                    justifyContent: align == "right" ? "flex-end" : align,
                                                    backgroundColor: generalStyles[0].generalBackgroundColor,
                                                    borderStyle: generalStyles[0].generalborderType,
                                                    borderWidth: generalBorderUpdated
                                                        ? `${generalBorderTop}px ${generalBorderRight}px ${generalBorderBottom}px ${generalBorderLeft}px`
                                                        : generalBorderWidth + "px",
                                                    borderRadius: generalStyles[0].generalborderRadius || 0 + "px",
                                                    borderColor: generalStyles[0].generalborderColor,
                                                    boxShadow: `${generalStyles[0].generalShadowHorizontal}px ${generalStyles[0].generalShadowVertical}px ${generalStyles[0].generalShadowBlur}px ${generalStyles[0].generalShadowColor} ${generalStyles[0].generalShadowPosition}`,
                                                }}
                                            >
                                                <a
                                                    href={link_url}
                                                    target={target}
                                                    rel="noopener noreferrer"
                                                >
                                                    <div className={`premium-bullet-list__content-wrap premium-bullet-list__content-wrap-${bulletAlign}`} style={{
                                                        justifyContent: align == "right" ? align : align,
                                                        display: iconPosition == "before" ? "flex" : "inline-flex",
                                                        flexDirection: iconPosition == "top" ? align == "right" ? "column" : "column" : iconPosition == "after" ? 'row-reverse' : "",
                                                    }}>
                                                        <span className={`premium-bullet-list__icon-wrap`}
                                                            style={{
                                                                overflow: repeaterBulletList[index].image_icon == 'image' ? "hidden" : "",
                                                                alignSelf: bulletAlign == 'left' ? 'flex-start' : bulletAlign == 'right' ? 'flex-end' : 'center',
                                                                textAlign: bulletAlign,
                                                                justifyContent: bulletAlign,
                                                                alignItems: bulletAlign == 'left' ? 'flex-start' : bulletAlign == 'right' ? 'flex-end' : 'center',
                                                            }}
                                                        >{image_icon_html}</span>
                                                        <div className="premium-bullet-list__label-wrap">
                                                            <RichText.Content
                                                                tagName="span"
                                                                value={repeaterBulletList[index].label}
                                                                className='premium-bullet-list__label'
                                                                style={{
                                                                    fontFamily: titleFont,
                                                                    fontWeight: titleStyles[0].titleWeight,
                                                                    letterSpacing: titleStyles[0].titleLetter + "px",
                                                                    lineHeight: titleStyles[0].titleLine + "px",
                                                                    fontStyle: titleStyles[0].titleStyle,
                                                                    textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                                                                    fontFamily: titleStyles[0].titleFontFamily,
                                                                    color: titleStyles[0].titleColor,
                                                                    textShadow: `${titleStyles[0].titleshadowHorizontal}px ${titleStyles[0].titleshadowVertical}px ${titleStyles[0].titleshadowBlur}px ${titleStyles[0].titleshadowColor}`,
                                                                }} />
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            {divider &&
                                                <div className={`premium-bullet-list-divider-${layoutPos}`}></div>
                                            }
                                        </Fragment>
                                    )
                                }

                            })
                        }
                    </ul>
                </div>
            )
        }
    }
];
export default deprecated;