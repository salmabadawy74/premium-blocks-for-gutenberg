const blockClass = 'premium-maps';

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
    TextareaControl,
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

const {
    Component
} = wp.element;

let isMapUpdated = null;

class PremiumMap extends Component {
    constructor() {
        super( ...arguments );
        this.state = {
            currentAddress: '',
            currentMap: null,
            currentMarker: null,
            currentInfo: null,
            fetching: false,
        };

        this.initMap = this.initMap.bind(this);
//        this.fetchLocation = this.fetchLocation.bind(this);
        
    }
    
    componentDidMount() {
        
        const { attributes, setAttributes, clientId } = this.props;
        if (!attributes.mapID) {
            setAttributes( { mapID: 'premium-map-' + clientId } );
            
        }
        this.initMap();
    }

    componentDidUpdate( prevProps, prevState ) {
        
        const { address: prevAddr, useLatLng: prevUseLatLng } = prevProps.attributes;
        const { address, useLatLng } = this.props.attributes;

//        if (prevAddr !== address || prevUseLatLng !== useLatLng || prevState !== this.state)
//            return null;

        if (prevProps.attributes !== this.props.attributes) {
            clearTimeout(isMapUpdated);
            isMapUpdated = setTimeout(this.initMap, 1000);
        }
    }
    
    initMap() {
        
        if(typeof google === 'undefined' || !this.props.attributes.mapID ) return null;
        
//      const DEFAULT_MARKER = 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png';
        const { currentMap, currentMarker, currentInfo } = this.state;
        const { 
            mapID,
            mapStyle,
            mapType,
            height,
            zoom,
            mapTypeControl,
            zoomControl,
            fullscreenControl,
            streetViewControl,
            scrollwheel 
        } = this.props.attributes;
//            const location = { lat: parseFloat(lat), lng: parseFloat(lng) };
//            const that = this;
//            const formattedDesc = markerDesc.replace(/\n/g, '<br/>');
            let map = currentMap;
//            let marker = currentMarker;
//            let infoWindow = currentInfo;

        if (!map) {
            map = new google.maps.Map(document.getElementById(mapID), {
                zoom: zoom,
                gestureHandling: 'cooperative',
                mapTypeId: mapType,
                mapTypeControl: mapTypeControl,
                zoomControl: zoomControl,
                fullscreenControl: fullscreenControl,
                streetViewControl: streetViewControl,
                scrollwheel: scrollwheel,
                center: {
                    lng: 31.31,
                    lat: 31.31,
                },
                style: mapStyle
            });
            this.setState( { currentMap: map } );
        }
        
        map.setZoom( zoom );
    }
    
    
    render() {
        const { isSelected, setAttributes, clientId } = this.props;

        const {
            mapID,
            mapStyle,
            mapType,
            height,
            zoom,
            mapTypeControl,
            zoomControl,
            fullscreenControl,
            streetViewControl,
            scrollwheel
        } = this.props.attributes;

        const TYPES = [
            {
                 value: "roadmap",
                 label: "Road Map"
            },
            {
                value: "satellite",
                label: "Satellite"
            },
            {
                value: "terrain",
                label: "Terrain"
            },
            {
                value: "hybrid",
                label: "Hybrid"
            }
        ];

        return [
            typeof google !== 'undefined' && isSelected && ( <InspectorControls key='key'>
                <PanelBody
                   title={__('Controls')}
                   initialOpen={false}
                >
                    <SelectControl
                        label={__('Map Type')}
                        options={TYPES}
                        value={mapType}
                        onChange={ newType => setAttributes( { mapType: newType } ) }
                    />
                    <RangeControl
                        label={__('Map Height (PX)')}
                        value={height}
                        min='10'
                        max='800'
                        onChange={newSize => setAttributes( { height: newSize } ) }
                    />
                    <RangeControl
                        label={__('Zoom')}
                        value={zoom}
                        min='1'
                        max='14'
                        onChange={newSize => setAttributes( { zoom: newSize } ) }
                    />
                    <CheckboxControl
                        label={__('Map Type Controls')}
                        checked={mapTypeControl}
                        onChange={ check => setAttributes( { mapTypeControl: check } ) }
                    />
                    <CheckboxControl
                        label={__('Zoom Controls')}
                        checked={zoomControl}
                        onChange={ check => setAttributes( { zoomControl: check } ) }
                    />
                    <CheckboxControl
                        label={__('Street View Control')}
                        checked={streetViewControl}
                        onChange={ check => setAttributes( { streetViewControl: check } ) }
                    />

                    <CheckboxControl
                        label={__('Full Screen Control')}
                        checked={fullscreenControl}
                        onChange={ check => setAttributes( { fullscreenControl: check } ) }
                    />
                    <CheckboxControl
                        label={__('Scroll Wheel Zoom')}
                        checked={scrollwheel}
                        onChange={ check => setAttributes( { scrollwheel: check } ) }
                    />
                </PanelBody>

                <PanelBody
                   title={__('Map Style')}
                   initialOpen={false}
                >
                    <TextareaControl
                        label={__('Maps Style')}
                        value={mapStyle}
                        help={__('Get your custom styling from "https://snazzymaps.com/"')}
                        onChange={ newStyle => setAttributes( { mapStyle: newStyle } ) }
                    />
                </PanelBody>
            </InspectorControls> ),
            <div
                className={`${blockClass}__wrap`}
                id={mapID}
                style={{
                    height: height + 'px',
                }}
            >
            </div>
        ];
    }
}

registerBlockType('premium/maps', {
    title: __('Premium Maps'),
    icon: 'location',
    category: 'premium-blocks',
    attributes: {
        mapID: {
            type: 'string'
        },
        mapStyle: {
            type: 'style'
        },
        mapType: {
            type: 'string',
            default: 'roadmap',  
        },
        height: {
            type: 'number',
            default: 500,  
        },
        zoom: {
            type: 'number',
            default: 5,  
        },
        mapTypeControl: {
            type: 'boolean',
            default: true,  
        },
        zoomControl: {
            type: 'boolean',
            default: true,  
        },
        fullscreenControl: {
            type: 'boolean',
            default: true,  
        },
        streetViewControl: {
            type: 'boolean',
            default: false,  
        },
        scrollwheel: {
            type: 'boolean',
            default: false,  
        },
        
    },
    edit: PremiumMap,
    save: (props) => {
        const {
            className,
            clientId,
            attributes: {
                mapID,
                height,
                mapStyle,
                mapType,
                zoom,
                mapTypeControl,
                zoomControl,
                fullscreenControl,
                streetViewControl,
                scrollwheel
            }
        } = props;
        
        return (
            <div
                className={`${blockClass}__wrap`}
                id={mapID}
                style={{
                    height: height + 'px',
                }}
            >
            <script>
                {`window.addEventListener('load',function(){
                    if( typeof google === 'undefined' ) return;
                    var map = new google.maps.Map(document.getElementById('${mapID}'), {
                        zoom: ${zoom},
                        gestureHandling: 'cooperative',
                        mapTypeId: '${mapType}',
                        mapTypeControl: ${mapTypeControl},
                        zoomControl: ${zoomControl},
                        fullscreenControl: ${fullscreenControl},
                        streetViewControl: ${streetViewControl},
                        scrollwheel: ${scrollwheel},
                        center: {
                            lng: 31.31,
                            lat: 31.31,
                        },
                        style: ${mapStyle}
                    });
                });`}
            </script>
            </div>
        );
    }
    
    
});