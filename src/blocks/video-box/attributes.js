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
    videoDesc: {
        type: "boolean"
    },
    playIcon: {
        type: "boolean",
        default: true
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
    },
    colorStyles: {
        type: 'array',
        default: [
            {
                playColor: '',
                playBack: '',
                playOpacity: 1,
                videoDescColor: '',
                videoDescBack: '',
                videoDescOpacity: 1,
                playHoverColor: '',
                playHoverBackColor: '',
            }
        ]
    },
    boxStyles: {
        type: 'array',
        default: [
            {
                boxBorderType: 'none',
                boxBorderWidth: 1,
                boxBorderTop: '',
                boxBorderRight: '',
                boxBorderBottom: '',
                boxBorderLeft: '',
                boxBorderRadius: '',
                boxBorderColor: '',
                shadowColor: '',
                shadowBlur: '',
                shadowHorizontal: '',
                shadowVertical: '',
                shadowPosition: '',
            }
        ]
    },
    overlayStyles: {
        type: 'array',
        default: [
            {
                overlayImgID: '',
                overlayImgURL: '',
                blur: 0,
                bright: 100,
                contrast: 100,
                saturation: 100,
                hue: 0,
            }
        ]
    },
    playStyles: {
        type: 'array',
        default: [
            {
                playTop: '',
                playSize: '',
                playPadding: '',
                playBorderType: 'none',
                playBorderWidth: 1,
                playBorderRadius: '',
                playBorderColor: '',
                playBorderTop: '',
                playBorderRight: '',
                playBorderBottom: '',
                playBorderLeft: ''

            }
        ]

    },
    descStyles: {
        type: 'array',
        default: [
            {
                videoDescText: '',
                videoDescFamily: '',
                videoDescSize: '',
                videoDescSizeUnit: 'px',
                videoDescSizeMobile: '',
                videoDescSizeTablet: '',
                videoDescWeight: '',
                videoDescLetter: '',
                videoDescStyle: '',
                videoDescUpper: false,
                videoDescPadding: '',
                videoDescBorderRadius: '',
                descShadowColor: '',
                descShadowBlur: 0,
                descShadowHorizontal: 0,
                descShadowVertical: 0,
                descLeft: '',
                descTop: '',
            }
        ]
    }

};
export default videoBoxAttrs;