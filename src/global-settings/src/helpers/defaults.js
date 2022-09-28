import { __ } from '@wordpress/i18n';

const defaults = {
    typography: {
        heading1: {
            "fontWeight": "400",
            "fontStyle": "",
            "textTransform": "",
            "fontFamily": "Default",
            "textDecoration": "",
            "fontSize": {
                "Desktop": '',
                "Tablet": '',
                "Mobile": '',
                "unit": "px"
            },
            "lineHeight": {
                "Desktop": '',
                "Tablet": '',
                "Mobile": '',
                "unit": "px"
            },
            "letterSpacing": {
                "Desktop": 0,
                "Tablet": 0,
                "Mobile": 0,
                "unit": "px"
            }
        },
        heading2: {
            "fontWeight": "400",
            "fontStyle": "",
            "textTransform": "",
            "fontFamily": "Default",
            "textDecoration": "",
            "fontSize": {
                "Desktop": '',
                "Tablet": '',
                "Mobile": '',
                "unit": "px"
            },
            "lineHeight": {
                "Desktop": '',
                "Tablet": '',
                "Mobile": '',
                "unit": "px"
            },
            "letterSpacing": {
                "Desktop": '',
                "Tablet": '',
                "Mobile": '',
                "unit": "px"
            }
        },
        heading3: {
            "fontWeight": "400",
            "fontStyle": "",
            "textTransform": "none",
            "fontFamily": "Default",
            "textDecoration": "",
            "fontSize": {
                "Desktop": '',
                "Tablet": '',
                "Mobile": '',
                "unit": "px"
            },
            "lineHeight": {
                "Desktop": '',
                "Tablet": '',
                "Mobile": '',
                "unit": "px"
            },
            "letterSpacing": {
                "Desktop": '',
                "Tablet": '',
                "Mobile": '',
                "unit": "px"
            }
        },
        heading4: {
            "fontWeight": "400",
            "fontStyle": "",
            "textTransform": "",
            "fontFamily": "Default",
            "textDecoration": "",
            "fontSize": {
                "Desktop": '',
                "Tablet": '',
                "Mobile": '',
                "unit": "px"
            },
            "lineHeight": {
                "Desktop": '',
                "Tablet": '',
                "Mobile": '',
                "unit": "px"
            },
            "letterSpacing": {
                "Desktop": '',
                "Tablet": '',
                "Mobile": '',
                "unit": "px"
            }
        },
        heading5: {
            "fontWeight": "400",
            "fontStyle": "",
            "textTransform": "",
            "fontFamily": "Default",
            "textDecoration": "",
            "fontSize": {
                "Desktop": '',
                "Tablet": '',
                "Mobile": '',
                "unit": "px"
            },
            "lineHeight": {
                "Desktop": '',
                "Tablet": '',
                "Mobile": '',
                "unit": "px"
            },
            "letterSpacing": {
                "Desktop": '',
                "Tablet": '',
                "Mobile": '',
                "unit": "px"
            }
        },
        heading6: {
            "fontWeight": "400",
            "fontStyle": "",
            "textTransform": "",
            "fontFamily": "Default",
            "textDecoration": "",
            "fontSize": {
                "Desktop": '',
                "Tablet": '',
                "Mobile": '',
                "unit": "px"
            },
            "lineHeight": {
                "Desktop": '',
                "Tablet": '',
                "Mobile": '',
                "unit": "px"
            },
            "letterSpacing": {
                "Desktop": '',
                "Tablet": '',
                "Mobile": '',
                "unit": "px"
            }
        },
        button: {
            "fontWeight": "400",
            "fontStyle": "",
            "textTransform": "",
            "fontFamily": "Default",
            "textDecoration": "",
            "fontSize": {
                "Desktop": '',
                "Tablet": '',
                "Mobile": '',
                "unit": "px"
            },
            "lineHeight": {
                "Desktop": '',
                "Tablet": '',
                "Mobile": '',
                "unit": "px"
            },
            "letterSpacing": {
                "Desktop": '',
                "Tablet": '',
                "Mobile": '',
                "unit": "px"
            }
        },
        paragraph: {
            "fontWeight": "400",
            "fontStyle": "",
            "textTransform": "",
            "fontFamily": "Default",
            "textDecoration": "",
            "fontSize": {
                "Desktop": '',
                "Tablet": '',
                "Mobile": '',
                "unit": "px"
            },
            "lineHeight": {
                "Desktop": '',
                "Tablet": '',
                "Mobile": '',
                "unit": "px"
            },
            "letterSpacing": {
                "Desktop": '',
                "Tablet": '',
                "Mobile": '',
                "unit": "px"
            }
        },
    },
    colors: [
        {
            slug: 'color1',
            name: __(`Buttons background color \n& Links hover color`),
            color: '#0085ba',
            default: true,
            type: 'pbg'
        },
        {
            slug: 'color2',
            name: __("Headings & Links color"),
            color: '#333333',
            default: true,
            type: 'pbg'
        },
        {
            slug: 'color3',
            name: __("Body text"),
            color: '#444140',
            default: true,
            type: 'pbg'
        },
        {
            slug: 'color4',
            name: __("Borders color"),
            color: '#eaeaea',
            default: true,
            type: 'pbg'
        },
        {
            slug: 'color5',
            name: __(
                "Body background, a tint for Input fields"
            ),
            color: '#ffffff',
            default: true,
            type: 'pbg'
        },
    ]
}

export default defaults 