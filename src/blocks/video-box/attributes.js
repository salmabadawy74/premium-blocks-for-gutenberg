const videoBoxAttrs = {
    block_id: {
        type: 'string'
    },
    borderPlayUpdated: {
        type: "boolean",
        default: false
    },
    borderBoxUpdated: {
        type: "boolean",
        default: false
    },
    videoBoxId: {
        type: "string"
    },
    videoType: {
        type: "string",
        default: "youtube"
    },
    videoURL: {
        type: "string",
        default: "07d2dXHYb94"
    },
    videoID: {
        type: "string"
    },
    autoPlay: {
        type: "boolean",
        default: false
    },
    loop: {
        type: "boolean",
        default: false
    },
    controls: {
        type: "boolean",
        default: true
    },
    relatedVideos: {
        type: "boolean",
        default: false
    },
    mute: {
        type: "boolean",
        default: false
    },
    overlay: {
        type: "boolean",
        default: false
    },
    overlayImgID: {
        type: "string"
    },
    overlayImgURL: {
        type: "string"
    },
    blur: {
        type: "number",
        default: 0
    },
    bright: {
        type: "number",
        default: 100
    },
    contrast: {
        type: "number",
        default: 100
    },
    saturation: {
        type: "number",
        default: 100
    },
    hue: {
        type: "number",
        default: 0
    },
    playTop: {
        type: "number"
    },
    playIcon: {
        type: "boolean",
        default: true
    },
    playSize: {
        type: "number"
    },
    playColor: {
        type: "string"
    },
    playBack: {
        type: "string"
    },
    playOpacity: {
        type: "number",
        default: "1"
    },
    playHoverColor: {
        type: "string"
    },
    playHoverBackColor: {
        type: "string"
    },
    playPadding: {
        type: "number"
    },
    playBorderType: {
        type: "string",
        default: "none"
    },
    playBorderWidth: {
        type: "number",
        default: "1"
    },
    playBorderRadius: {
        type: "number"
    },
    playBorderColor: {
        type: "string"
    },
    videoDescText: {
        type: "string"
    },
    videoDesc: {
        type: "boolean"
    },
    descLeft: {
        type: "number"
    },
    descTop: {
        type: "number"
    },
    videoDescSize: {
        type: "number"
    },
    videoDescSizeUnit: {
        type: "string",
        default: 'px'
    },
    videoDescSizeMobile: {
        type: 'number'
    },
    videoDescSizeTablet: {
        type: 'number'
    },
    videoDescFamily: {
        type: "string"
    },
    videoDescWeight: {
        type: "number"
    },
    videoDescLetter: {
        type: "number"
    },
    videoDescStyle: {
        type: "string"
    },
    videoDescUpper: {
        type: "boolean"
    },
    videoDescColor: {
        type: "string"
    },
    videoDescBack: {
        type: "string"
    },
    videoDescOpacity: {
        type: "number",
        default: "1"
    },
    videoDescPadding: {
        type: "number"
    },
    videoDescBorderRadius: {
        type: "number"
    },
    descShadowColor: {
        type: "string"
    },
    descShadowBlur: {
        type: "number",
        default: "0"
    },
    descShadowHorizontal: {
        type: "number",
        default: "0"
    },
    descShadowVertical: {
        type: "number",
        default: "0"
    },
    boxBorderType: {
        type: "string",
        default: "none"
    },
    boxBorderWidth: {
        type: "number",
        default: "1"
    },
    boxBorderTop: {
        type: "number"
    },
    boxBorderRight: {
        type: "number"
    },
    boxBorderBottom: {
        type: "number"
    },
    boxBorderLeft: {
        type: "number"
    },
    playBorderTop: {
        type: "number"
    },
    playBorderRight: {
        type: "number"
    },
    playBorderBottom: {
        type: "number"
    },
    playBorderLeft: {
        type: "number",
    },
    boxBorderRadius: {
        type: "number"
    },
    boxBorderColor: {
        type: "string"
    },
    shadowColor: {
        type: "string"
    },
    shadowBlur: {
        type: "number",
        default: "0"
    },
    shadowHorizontal: {
        type: "number",
        default: "0"
    },
    shadowVertical: {
        type: "number",
        default: "0"
    },
    shadowPosition: {
        type: "string",
        default: ""
    },

    // Old props
    playLeft: {
        type: "number"
    },
    classMigrate: {
        type: 'boolean',
        default: false
    },
    hideDesktop: {
        type: 'boolean',
        default: false
    },
    hideTablet: {
        type: 'boolean',
        default: false
    },
    hideMobile: {
        type: 'boolean',
        default: false
    }
};
export default videoBoxAttrs;