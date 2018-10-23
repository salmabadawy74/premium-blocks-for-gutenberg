const {
    __
} = wp.i18n;

const {
    registerBlockType
} = wp.blocks;

const {
    Toolbar,
    PanelBody,
    PanelColor,
    SelectControl,
    RangeControl,
    TextControl,
    CheckBoxControl
} = wp.components;

const {
    BlockControls,
    InspectorControls,
    AlignmentToolbar,
    RichText,
    MediaUpload,
    ColorPalette,
    URLInput
} = wp.editor;

registerBlockType('premium/banner', {
        title: __('Banner'),
        icon: 'admin-page',
        category: 'premium-blocks',
        edit: (props)   => {
            
        },
        save: (props)   => {
            
        }
    }
);