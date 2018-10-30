const {
    __
} = wp.i18n;

const {
    registerBlockType
} = wp.blocks;

const {
    IconButton,
    Toolbar,
    Button,
    PanelBody,
    PanelColor,
    SelectControl,
    RangeControl,
    TextControl,
    CheckboxControl
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

registerBlockType('premium/maps', {
    title: __('Premium Maps'),
    icon: 'location',
    category: 'premium-blocks',
    attributes: {
        mapID: {
            type: 'string',
        },
        
    },
    edit: (props) => {
        
        const { isSelected, setAttributes, className, clientId } = props;
        
        const {
            mapID
        } = props.attributes;
        
        let blockClass = className.replace('wp-block-','');
        
        setAttributes( { mapID: clientId } );
        
        return [
            <div
                className={`${blockClass}__wrap`}
                id={mapID}
            >
            </div>
        ];
        
    },
    save: (props) => {
        
        const {
            className,
            clientId,
            attributes: {
                mapID
            }
        } = props;
        
        let blockClass = 'premium-maps';
        return (
            <div
                className={`${blockClass}__wrap`}
                id={mapID}
            >
            <script>
                {`window.addEventListener('load',function(){
                    if(typeof google === 'undefined') return;
                    var map = new google.maps.Map(document.getElementById('${mapID}'), {
                        zoom: 5,
                        gestureHandling: 'cooperative',
                        center: {
                            lng: 31.31,
                            lat: 31.31,
                        },
                        styles: 

[
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": "50"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "30"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "40"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    }
]


                    });
                });`}
            </script>
            </div>
        );
    }
    
    
});