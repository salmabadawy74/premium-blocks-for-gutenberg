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
                "Desktop": 48,
                "Tablet": 48,
                "Mobile": 48,
                "unit": "px"
            },
            "lineHeight": {
                "Desktop": 27,
                "Tablet": 27,
                "Mobile": 27,
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
                "Desktop": 42,
                "Tablet": 42,
                "Mobile": 42,
                "unit": "px"
            },
            "lineHeight": {
                "Desktop": 25,
                "Tablet": 25,
                "Mobile": 25,
                "unit": "px"
            },
            "letterSpacing": {
                "Desktop": 0,
                "Tablet": 0,
                "Mobile": 0,
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
                "Desktop": 30,
                "Tablet": 30,
                "Mobile": 30,
                "unit": "px"
            },
            "lineHeight": {
                "Desktop": 23,
                "Tablet": 23,
                "Mobile": 23,
                "unit": "px"
            },
            "letterSpacing": {
                "Desktop": 0,
                "Tablet": 0,
                "Mobile": 0,
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
                "Desktop": 20,
                "Tablet": 20,
                "Mobile": 20,
                "unit": "px"
            },
            "lineHeight": {
                "Desktop": 20,
                "Tablet": 20,
                "Mobile": 20,
                "unit": "px"
            },
            "letterSpacing": {
                "Desktop": 0,
                "Tablet": 0,
                "Mobile": 0,
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
                "Desktop": 17,
                "Tablet": 17,
                "Mobile": 17,
                "unit": "px"
            },
            "lineHeight": {
                "Desktop": 17,
                "Tablet": 17,
                "Mobile": 17,
                "unit": "px"
            },
            "letterSpacing": {
                "Desktop": 0,
                "Tablet": 0,
                "Mobile": 0,
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
                "Desktop": 15,
                "Tablet": 15,
                "Mobile": 15,
                "unit": "px"
            },
            "lineHeight": {
                "Desktop": 15,
                "Tablet": 15,
                "Mobile": 15,
                "unit": "px"
            },
            "letterSpacing": {
                "Desktop": 0,
                "Tablet": 0,
                "Mobile": 0,
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
                "Desktop": 15,
                "Tablet": 15,
                "Mobile": 15,
                "unit": "px"
            },
            "lineHeight": {
                "Desktop": 15,
                "Tablet": 15,
                "Mobile": 15,
                "unit": "px"
            },
            "letterSpacing": {
                "Desktop": 0,
                "Tablet": 0,
                "Mobile": 0,
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
                "Desktop": 15,
                "Tablet": 15,
                "Mobile": 15,
                "unit": "px"
            },
            "lineHeight": {
                "Desktop": 15,
                "Tablet": 15,
                "Mobile": 15,
                "unit": "px"
            },
            "letterSpacing": {
                "Desktop": 0,
                "Tablet": 0,
                "Mobile": 0,
                "unit": "px"
            }
        },
    },
    colorSettings: {
        pbg: [
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
                name: __("Body text & Meta color"),
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
}

export default defaults 