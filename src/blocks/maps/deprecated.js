const className = "premium-maps";

const { __ } = wp.i18n;
const mapAttrs = {
    mapID: {
        type: "string"
    },
    mapStyle: {
        type: "string",
        default: "[]"
    },
    mapType: {
        type: "string",
        default: "roadmap"
    },
    height: {
        type: "number",
        default: 500
    },
    zoom: {
        type: "number",
        default: 6
    },
    mapTypeControl: {
        type: "boolean",
        default: true
    },
    zoomControl: {
        type: "boolean",
        default: true
    },
    fullscreenControl: {
        type: "boolean",
        default: true
    },
    streetViewControl: {
        type: "boolean",
        default: false
    },
    scrollwheel: {
        type: "boolean",
        default: false
    },
    centerLat: {
        type: "string",
        default: "40.7569733"
    },
    centerLng: {
        type: "string",
        default: " -73.98878250000001"
    },
    markerOpen: {
        type: "boolean",
        default: false
    },
    markerTitle: {
        type: "string",
        default: __("Awesome Title", 'premium-blocks-for-gutenberg')
    },
    markerDesc: {
        type: "string",
        default: __("Cool Description", 'premium-blocks-for-gutenberg')
    },
    mapMarker: {
        type: "boolean",
        default: true
    },
    markerIconUrl: {
        type: "string"
    },
    markerIconId: {
        type: "number",
        default: ""
    },
    markerCustom: {
        type: "boolean",
        default: false
    },
    maxWidth: {
        type: "number",
        default: 300
    },
    titleColor: {
        type: "string",
        default: "#6ec1e4"
    },
    titleSize: {
        type: "number",
        default: 20
    },
    descColor: {
        type: "string",
        default: "#000"
    },
    descSize: {
        type: "number",
        default: 16
    },
    boxAlign: {
        type: "string",
        default: "center"
    },
    boxPadding: {
        type: "number",
        default: "0"
    },
    gapBetween: {
        type: "number",
        default: 5
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

const mapAttrs_1_2 = {
    mapID: {
        type: "string"
    },
    mapStyle: {
        type: "string",
        default: "[]"
    },
    mapType: {
        type: "string",
        default: "roadmap"
    },
    height: {
        type: "number",
        default: 500
    },
    zoom: {
        type: "number",
        default: 6
    },
    mapTypeControl: {
        type: "boolean",
        default: true
    },
    zoomControl: {
        type: "boolean",
        default: true
    },
    fullscreenControl: {
        type: "boolean",
        default: true
    },
    streetViewControl: {
        type: "boolean",
        default: false
    },
    scrollwheel: {
        type: "boolean",
        default: false
    },
    centerLat: {
        type: "string",
        default: "40.7569733"
    },
    centerLng: {
        type: "string",
        default: " -73.98878250000001"
    },
    markerOpen: {
        type: "boolean",
        default: false
    },
    markerTitle: {
        type: "string",
        default: __("Awesome Title", 'premium-blocks-for-gutenberg')
    },
    markerDesc: {
        type: "string",
        default: __("Cool Description", 'premium-blocks-for-gutenberg')
    },
    mapMarker: {
        type: "boolean",
        default: true
    },
    markerIconUrl: {
        type: "string"
    },
    markerIconId: {
        type: "number",
        default: ""
    },
    markerCustom: {
        type: "boolean",
        default: false
    },
    maxWidth: {
        type: "number",
        default: 300
    },
    titleColor: {
        type: "string",
        default: "#6ec1e4"
    },
    titleSize: {
        type: "number",
        default: 20
    },
    descColor: {
        type: "string",
        default: "#000"
    },
    descSize: {
        type: "number",
        default: 16
    },
    boxAlign: {
        type: "string",
        default: "center"
    },
    boxPadding: {
        type: "number",
        default: "0"
    },
    gapBetween: {
        type: "number",
        default: 5
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
}
const newAttributes_1_0 = {
    hideDesktop: {
        type: "boolean",
        default: false
    },
    hideTablet: {
        type: "boolean",
        default: false
    },
    hideMobile: {
        type: 'boolean',
        default: false
    }
}

const mapAttrs_1_3 = Object.assign(mapAttrs_1_2, newAttributes_1_0);

const v3Attributes = {
    mapID: {
        type: "string"
    },
    mapStyle: {
        type: "string",
        default: "[]"
    },
    mapType: {
        type: "string",
        default: "roadmap"
    },
    height: {
        type: "number",
        default: 500
    },
    zoom: {
        type: "number",
        default: 6
    },
    mapTypeControl: {
        type: "boolean",
        default: true
    },
    zoomControl: {
        type: "boolean",
        default: true
    },
    fullscreenControl: {
        type: "boolean",
        default: true
    },
    streetViewControl: {
        type: "boolean",
        default: false
    },
    scrollwheel: {
        type: "boolean",
        default: false
    },
    centerLat: {
        type: "string",
        default: "40.7569733"
    },
    centerLng: {
        type: "string",
        default: " -73.98878250000001"
    },
    markerOpen: {
        type: "boolean",
        default: false
    },
    markerTitle: {
        type: "string",
        default: __("Awesome Title", 'premium-blocks-for-gutenberg')
    },
    markerDesc: {
        type: "string",
        default: __("Cool Description", 'premium-blocks-for-gutenberg')
    },
    mapMarker: {
        type: "boolean",
        default: true
    },
    markerIconUrl: {
        type: "string"
    },
    markerIconId: {
        type: "number",
        default: ""
    },
    markerCustom: {
        type: "boolean",
        default: false
    },
    maxWidth: {
        type: "number",
        default: 300
    },
    titleColor: {
        type: "string",
        default: "#6ec1e4"
    },
    titleSize: {
        type: "number",
        default: 20
    },
    descColor: {
        type: "string",
        default: "#000"
    },
    descSize: {
        type: "number",
        default: 16
    },
    boxAlign: {
        type: "string",
        default: "center"
    },
    boxPadding: {
        type: "number",
        default: "0"
    },
    gapBetween: {
        type: "number",
        default: 5
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
};

const deprecated = [
    {
        attributes: v3Attributes,
        isEligible() {
            return true;
        },
        migrate: attributes => {
            let newAttributes = {
                blockId: attributes.mapID ? `premium-maps-${attributes.mapID.split('-')[6]}` : '',
                titleTypography: {
                    "fontWeight": 'Default',
                    'fontStyle': '',
                    'textTransform': '',
                    'fontFamily': 'Default',
                    letterSpacing: {
                        Desktop: "",
                        Tablet: "",
                        Mobile: "",
                        unit: "px",
                    },
                    lineHeight: {
                        Desktop: "",
                        Tablet: "",
                        Mobile: "",
                        unit: "px",
                    },
                    'textDecoration': '',
                    'fontSize': {
                        'Desktop': attributes?.titleSize || '',
                        "Tablet": attributes?.titleSize || '',
                        "Mobile": attributes?.titleSize || '',
                        "unit": 'px'
                    }
                },
                descriptionTypography: {
                    "fontWeight": 'Default',
                    'fontStyle': '',
                    'textTransform': '',
                    'fontFamily': 'Default',
                    'textDecoration': '',
                    letterSpacing: {
                        Desktop: "",
                        Tablet: "",
                        Mobile: "",
                        unit: "px",
                    },
                    lineHeight: {
                        Desktop: "",
                        Tablet: "",
                        Mobile: "",
                        unit: "px",
                    },
                    'fontSize': {
                        'Desktop': attributes?.descSize || '',
                        "Tablet": attributes?.descSize || '',
                        "Mobile": attributes?.descSize || '',
                        "unit": 'px'
                    }
                },
                descriptionMargin: {
                    Desktop: {
                        top: attributes?.gapBetween || '',
                        right: attributes?.gapBetween || '',
                        bottom: attributes?.gapBetween || '',
                        left: attributes?.gapBetween || ''
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
                    },
                    unit: 'px'
                },
                descriptionPadding: {
                    Desktop: {
                        top: attributes?.boxPadding || '',
                        right: attributes?.boxPadding || '',
                        bottom: attributes?.boxPadding || '',
                        left: attributes?.boxPadding || ''
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
                    },
                    unit: 'px'
                },
                "mapBoxShadow": {
                    "color": "undefined",
                    "blur": "10",
                    "horizontal": "0",
                    "vertical": "0",
                    "position": ""
                },
                "mapMargin": {
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
                },
                "mapPadding": {
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
                },
                "mapBorder": {
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
                    },
                    "titlePadding": {
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
                        unit: "px"
                    },
                    "titleMargin": {
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
                        unit: "px"
                    }


                }
            }
            return Object.assign(attributes, newAttributes)
        },
        save: props => {
            const {
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
                markerOpen,
                markerIconUrl,
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
                gapBetween,
                hideDesktop,
                hideTablet,
                hideMobile
            } = props.attributes;

            return (
                <div
                    className={`${className}__wrap ${hideDesktop} ${hideTablet} ${hideMobile}`}
                    id={mapID}
                    style={{
                        height: height + "px"
                    }}
                >
                    <div className={`${className}__marker`}>
                        <div
                            className={`${className}__info`}
                            style={{
                                textAlign: boxAlign,
                                padding: boxPadding + "px"
                            }}
                        >
                            {markerTitle && (
                                <h3
                                    className={`${className}__title`}
                                    style={{
                                        color: titleColor,
                                        fontSize: titleSize + "px",
                                        marginBottom: gapBetween + "px"
                                    }}
                                >
                                    {markerTitle}
                                </h3>
                            )}
                            {markerDesc && (
                                <div
                                    className={`${className}__desc`}
                                    style={{
                                        color: descColor,
                                        fontSize: descSize + "px"
                                    }}
                                >
                                    {markerDesc}
                                </div>
                            )}
                        </div>
                    </div>
                    <script>
                        {`window.addEventListener('load',function(){
                        if( typeof google === 'undefined' ) return;
                        let mapElem = document.getElementById('${mapID}');
                        let pin = mapElem.querySelector('.${className}__marker');
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
                            if (${markerOpen}) {
                              infowindow.open( map, marker );
                            }
                            google.maps.event.addListener(marker, 'click', function() {
                                infowindow.open( map, marker );
                            });
                        }
        
                    });`}
                    </script>
                </div>
            );
        }
    },
    {
        attributes: mapAttrs_1_3,
        migrate: attributes => {
            let newAttributes = {
                hideDesktop: false,
                hideTablet: false,
                hideMobile: false
            }
            return Object.assign(attributes, newAttributes)
        },
        save: props => {
            const {
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
                markerOpen,
                markerIconUrl,
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
                gapBetween,
            } = props.attributes;

            return (
                <div
                    className={`${className}__wrap `}
                    id={mapID}
                    style={{
                        height: height + "px"
                    }}
                >
                    <div className={`${className}__marker`}>
                        <div
                            className={`${className}__info`}
                            style={{
                                textAlign: boxAlign,
                                padding: boxPadding + "px"
                            }}
                        >
                            {markerTitle && (
                                <h3
                                    className={`${className}__title`}
                                    style={{
                                        color: titleColor,
                                        fontSize: titleSize + "px",
                                        marginBottom: gapBetween + "px"
                                    }}
                                >
                                    {markerTitle}
                                </h3>
                            )}
                            {markerDesc && (
                                <div
                                    className={`${className}__desc`}
                                    style={{
                                        color: descColor,
                                        fontSize: descSize + "px"
                                    }}
                                >
                                    {markerDesc}
                                </div>
                            )}
                        </div>
                    </div>
                    <script>
                        {`window.addEventListener('load',function(){
                        if( typeof google === 'undefined' ) return;
                        let mapElem = document.getElementById('${mapID}');
                        let pin = mapElem.querySelector('.${className}__marker');
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
                            if (${markerOpen}) {
                              infowindow.open( map, marker );
                            }
                            google.maps.event.addListener(marker, 'click', function() {
                                infowindow.open( map, marker );
                            });
                        }
                    });`}
                    </script>
                </div>
            );
        }
    },
    {
        attributes: mapAttrs,
        save: props => {
            const {
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
                markerOpen,
                markerIconUrl,
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
            } = props.attributes;

            return (
                <div
                    className={`${className}__wrap`}
                    id={mapID}
                    style={{
                        height: height + "px"
                    }}
                >
                    <div className={`${className}__marker`}>
                        <div
                            className={`${className}__info`}
                            style={{
                                textAlign: boxAlign,
                                padding: boxPadding + "px"
                            }}
                        >
                            {markerTitle && (
                                <h3
                                    className={`${className}__title`}
                                    style={{
                                        color: titleColor,
                                        fontSize: titleSize + "px",
                                        marginBottom: gapBetween + "px"
                                    }}
                                >
                                    {markerTitle}
                                </h3>
                            )}
                            {markerDesc && (
                                <div
                                    className={`${className}__desc`}
                                    style={{
                                        color: descColor,
                                        fontSize: descSize + "px"
                                    }}
                                >
                                    {markerDesc}
                                </div>
                            )}
                        </div>
                    </div>
                    <script>
                        {`window.addEventListener('load',function(){
                    if( typeof google === 'undefined' ) return;
                    let mapElem = document.getElementById('${mapID}');
                    let pin = mapElem.querySelector('.${className}__marker');
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
                        if (${markerOpen}) {
                            infowindow.open( map, marker );
                        }
                        google.maps.event.addListener(marker, 'click', function() {
                            infowindow.open( map, marker );
                        });
                    }
                });`}
                    </script>
                </div>
            );
        }
    }
];

export default deprecated;