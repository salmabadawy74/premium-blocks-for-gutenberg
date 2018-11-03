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
            thisAddress: '',
            thisMap: null,
            thisMarker: null,
            thisInfo: null,
            fetching: false,
        };

        this.initMap = this.initMap.bind(this);
//        this.fetchLocation = this.fetchLocation.bind(this);
        
    }
    
    componentDidMount() {
        
        const {
            attributes,
            setAttributes,
            clientId
        } = this.props;
        
        if ( ! attributes.mapID ) {
            setAttributes( { mapID: 'premium-map-' + clientId } );
        }
        this.initMap();
    }

    componentDidUpdate( prevProps, prevState ) {
        
        const {
            address: prevAddr,
            useLatLng: prevUseLatLng
        } = prevProps.attributes;
        
        const {
            address,
            useLatLng
        } = this.props.attributes;
        
//        if (prevAddr !== address || prevUseLatLng !== useLatLng || prevState !== this.state)
//            return null;

        if (prevProps.attributes !== this.props.attributes) {
            clearTimeout(isMapUpdated);
            isMapUpdated = setTimeout(this.initMap, 500);
        }
    }
    
    initMap() {
        
        if( typeof google === 'undefined' || ! this.props.attributes.mapID ) return null;

        const {
            thisMap,
            thisMarker,
            thisInfo
        } = this.state;
        const {
            setAttributes
        } = this.props;
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
            scrollwheel,
            centerLng,
            centerLat,
            markerTitle,
            markerDesc,
            mapMarker,
            markerIconUrl,
            markerCustom,
            maxWidth,
            boxAlign,
            boxPadding,
            titleColor,
            titleSize,
            descColor,
            descSize,
            gapBetween
        } = this.props.attributes;
        
//            const that = this;
//            const formattedDesc = markerDesc.replace(/\n/g, '<br/>');
        
        let map = thisMap;
        let marker = thisMarker;
        let infoWindow = thisInfo;
        let latlng = new google.maps.LatLng( parseFloat( centerLat ) , parseFloat( centerLng ) );
        
        if (!map) {
            let mapElem = document.getElementById(mapID);
            
            map = new google.maps.Map(mapElem, {
                zoom: zoom,
                gestureHandling: 'cooperative',
                mapTypeId: mapType,
                mapTypeControl: mapTypeControl,
                zoomControl: zoomControl,
                fullscreenControl: fullscreenControl,
                streetViewControl: streetViewControl,
                scrollwheel: scrollwheel,
                center: latlng,
                styles: JSON.parse( mapStyle )
            });
            this.setState( { thisMap: map } );
            
        }
        
        map.setOptions({
            zoom: zoom,
            mapTypeId: mapType,
            mapTypeControl: mapTypeControl,
            zoomControl: zoomControl,
            fullscreenControl: fullscreenControl,
            streetViewControl: streetViewControl,
            styles: JSON.parse( mapStyle )
        });

        if( ! infoWindow && mapMarker && '' !== markerTitle && '' !== markerDesc ) {
            infoWindow = new google.maps.InfoWindow({
                maxWidth    : maxWidth
            });
            this.setState( { thisInfo: infoWindow } );
        }

        if( mapMarker && '' !== markerTitle && '' !== markerDesc ) {
            infoWindow.setContent(
                `<div class="${blockClass}__info" style="text-align:${boxAlign};padding:${boxPadding}px"
                    >
                    <h3
                        class="${blockClass}__title"
                        style="color:${titleColor};font-size:${titleSize}px;margin-bottom:${gapBetween}px"
                    >
                        ${markerTitle}
                    </h3>
                    <div
                        class="${blockClass}__desc"
                        style="color: ${descColor};font-size: ${descSize}px"
                    >
                        ${markerDesc}
                    </div>
                </div>`
            );
        }
        
        map.setCenter( latlng );
        
        if( mapMarker ) {
            
            let marker = new google.maps.Marker({
                position	: latlng,
                map			: map,
                icon        : markerCustom ? markerIconUrl : ''
            });

            google.maps.event.addListener(marker, 'click', function() {
                infoWindow.open( map, marker );
            }); 
        }
        
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
            scrollwheel,
            centerLng,
            centerLat,
            markerDesc,
            markerTitle,
            mapMarker,
            markerIconUrl,
            markerIconId,
            markerCustom,
            maxWidth,
            titleColor,
            titleSize,
            descColor,
            descSize,
            boxAlign,
            boxPadding,
            gapBetween
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
        
        const ALIGNS = [
            'left',
            'center',
            'right'
        ];
        return [
            typeof google !== 'undefined' && isSelected && ( <InspectorControls key='key'>
                <PanelBody
                    title={__('Center Location')}
                    initialOpen={false}
                >
                    <TextControl
                        label={__('Longitude')}
                        value={centerLng}
                        help={ [
                            __('Get your location coordinates from'),
                            <a href="https://www.latlong.net/" target="_blank">&nbsp;{__('here') }</a> 
                        ] }
                        onChange={ newLng => setAttributes( { centerLng: newLng } ) }
                    />
                    <TextControl
                        label={__('Latitude')}
                        value={centerLat}
                        onChange={ newLat => setAttributes( { centerLat: newLat } ) }
                    />
                </PanelBody>
                <PanelBody
                   title={__('Marker')}
                   initialOpen={false}
                >
                    <CheckboxControl
                        label={__('Enable Marker')}
                        checked={mapMarker}
                        onChange={ check => setAttributes( { mapMarker: check } ) }
                    />
                    { mapMarker && (
                        <TextControl
                            label={__('Marker Title')}
                            value={markerTitle}
                            onChange={ newText => setAttributes( { markerTitle: newText } ) }
                        />
                    ) }
                    { mapMarker && (
                        <TextareaControl
                            label={__('Marker Description')}
                            value={markerDesc}
                            onChange={ newText => setAttributes( { markerDesc: newText } ) }
                        />
                    ) }
                    { mapMarker && (
                        <RangeControl
                            label={__('Spacing (PX)')}
                            value={gapBetween}
                            min='10'
                            max='80'
                            onChange={newSize => setAttributes( { gapBetween: newSize } ) }
                        />
                    ) }
                    { mapMarker && (
                        <Toolbar
                            controls={
                                ALIGNS.map( ( align ) => (
                                    {
                                        icon: 'editor-align' + align,
                                        isActive: align === boxAlign,
                                        onClick: () => setAttributes( { boxAlign: align } ),
                                    }
                                    )
                                )
                            }
                        />
                    ) }
                    { mapMarker && (
                        <CheckboxControl
                            label={__('Custom Marker Icon')}
                            checked={markerCustom}
                            onChange={ check => setAttributes( { markerCustom: check } ) }
                        />
                    ) }
                    { mapMarker && markerCustom && markerIconUrl &&
                        <img src={ markerIconUrl } width="100%" height="auto" />
                    }
                    { markerCustom && mapMarker && (
                        <MediaUpload
                            allowedTypes={ ["image"] }
                            onSelect={ media => {
                                setAttributes( {
                                    markerIconId: media.id,
                                    markerIconUrl: ( 'undefined' === typeof media.sizes.thumbnail ) ? media.url : media.sizes.thumbnail.url 
                                } )
                            } }
                            type="image"
                            value={ markerIconId }
                            render={({ open }) => (
                                <IconButton
                                    label={ __( "Change Marker Icon" ) }
                                    icon="edit"
                                    onClick={ open }
                                >{ __("Change Marker Icon") }</IconButton>
                            )}
                        />
                    ) }
                    { ( mapMarker && '' !== markerDesc || '' !== markerTitle ) && (
                        <RangeControl
                            label={__('Description Box Max Width (PX)')}
                            value={maxWidth}
                            min='10'
                            max='500'
                            onChange={newSize => setAttributes( { maxWidth: newSize } ) }
                        />
                    ) }
                    { mapMarker && (
                        <RangeControl
                            label={__('Description Box Padding (PX)')}
                            value={boxPadding}
                            min='1'
                            max='50'
                            onChange={newSize => setAttributes( { boxPadding: newSize } ) }
                        />
                        
                    ) }
                </PanelBody>
                { mapMarker && '' !== markerTitle && ( <PanelBody
                   title={__('Marker Title Style')}
                   initialOpen={false}
                >
                    <PanelColor
                        label={__('Color')}
                        colorValue={titleColor}
                    >
                        <ColorPalette
                            value={titleColor}
                            onChange= { newColor => setAttributes( { titleColor: newColor } ) }
                        />
                    </PanelColor>
                    <RangeControl
                        label={__('Font Size (PX)')}
                        value={titleSize}
                        min='10'
                        max='80'
                        onChange={newSize => setAttributes( { titleSize: newSize } ) }
                    />
                </PanelBody> ) }
                { mapMarker && '' !== markerDesc && ( <PanelBody
                   title={__('Marker Description Style')}
                   initialOpen={false}
                >
                    <PanelColor
                        label={__('Color')}
                        colorValue={descColor}
                    >
                        <ColorPalette
                            value={descColor}
                            onChange= { newColor => setAttributes( { descColor: newColor } ) }
                        />
                    </PanelColor>
                    <RangeControl
                        label={__('Font Size (PX)')}
                        value={descSize}
                        min='10'
                        max='80'
                        onChange={newSize => setAttributes( { descSize: newSize } ) }
                    />
                </PanelBody> ) }
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
                        help={ [
                            __('Get your custom styling from'),
                            <a href="https://snazzymaps.com/" target="_blank">&nbsp;{__('here') }</a> 
                        ] }
                        onChange={ newStyle => setAttributes( { mapStyle: '' !== newStyle ? newStyle : '[]' } ) }
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
            type: 'string',
            default: '[]'
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
            default: 6,
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
        centerLat: {
            type: 'number',
            default: '40.7569733'
        },
        centerLng: {
            type: 'string',
            default: ' -73.98878250000001'
        },
        markerTitle: {
            type: 'string',
            default: __('Awesome Title'),  
        },
        markerDesc: {
            type: 'string',
            default: __('Cool Description'),  
        },
        mapMarker: {
            type: 'boolean',
            default: true,  
        },
        markerIconUrl: {
            type: 'string',
        },
        markerIconId: {
            type: 'number',
            default: '',  
        },
        markerCustom: {
            type: 'boolean',
            default: false,  
        },
        maxWidth: {
            type: 'number',
            default: 300,
        },
        titleColor: {
            type: 'string',
            default: '#6ec1e4',  
        },
        titleSize: {
            type: 'number',
            default: 20,
        },
        descColor: {
            type: 'string',
            default: '#000'
        },
        descSize: {
            type: 'number',
            default: 16,
        },
        boxAlign: {
            type: 'string',
            default: 'center',
        },
        boxPadding: {
            type: 'number',
            default: '0',  
        },
        gapBetween: {
            type: 'number',
            default: 5,
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
                scrollwheel,
                centerLat,
                centerLng,
                mapMarker,
                markerIconUrl,
                markerIconId,
                markerCustom,
                maxWidth,
                markerTitle,
                markerDesc,
                titleColor,
                titleSize,
                descColor,
                descSize,
                boxAlign,
                boxPadding,
                gapBetween
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
                <div
                    className={`${blockClass}__marker`}
                >
			        <div
                        className={`${blockClass}__info`}
                        style={{
                            textAlign: boxAlign,
                            padding: boxPadding + 'px',
                        }}
                    >
                        { '' !== markerTitle && (
                            <h3
                                className={`${blockClass}__title`}
                                style={{
                                    color: titleColor,
                                    fontSize: titleSize + 'px',
                                    marginBottom: gapBetween + 'px'
                                }}
                            >
                                {markerTitle}
                            </h3>
                        ) }
                        { '' !== markerDesc && (
                            <div
                                className={`${blockClass}__desc`}
                                style={{
                                    color: descColor,
                                    fontSize: descSize + 'px'
                                }}
                            >
                                {markerDesc}
                            </div>
                        ) }
                    </div>
		        </div>
            <script>
                {`window.addEventListener('load',function(){
                    if( typeof google === 'undefined' ) return;
                    let mapElem = document.getElementById('${mapID}');
                    let pin = mapElem.querySelector('.${blockClass}__marker');
                    
                    let latlng = new google.maps.LatLng( parseFloat( ${centerLat} ) , parseFloat( ${centerLng} ) );
                    let map = new google.maps.Map(mapElem, {
                        zoom: ${zoom},
                        gestureHandling: 'cooperative',
                        mapTypeId: '${mapType}',
                        mapTypeControl: ${mapTypeControl},
                        zoomControl: ${zoomControl},
                        fullscreenControl: ${fullscreenControl},
                        streetViewControl: ${streetViewControl},
                        scrollwheel: ${scrollwheel},
                        center: latlng,
                        styles: ${mapStyle}
                    });
                    if( ${mapMarker} ) {
                        let markerIcon = '${markerIconUrl}';
                        let marker = new google.maps.Marker({
                            position	: latlng,
                            map			: map,
                            icon        : ${markerCustom} ? markerIcon : ''
                        });
                        
                        let infowindow = new google.maps.InfoWindow({
                            maxWidth    : ${maxWidth},
                            content		: pin.innerHTML
                        });
                        
                        google.maps.event.addListener(marker, 'click', function() {
                            infowindow.open( map, marker );
                        });
                    }
                    
                });`}
            </script>
            </div>
        );
    } 
});