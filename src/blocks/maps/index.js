import { maps } from "../../../assets/js/settings";
import PremiumMediaUpload from "../../components/premium-media-upload";
import PbgIcon from "../icons";
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent';
import RadioComponent from '../../components/radio-control';
const className = "premium-maps";
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const {
    PanelBody,
    SelectControl,
    TextControl,
    TextareaControl,
    ToggleControl,
} = wp.components;

const { InspectorControls } = wp.editor;

const { Component, Fragment } = wp.element;

let isMapUpdated = null;

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

class PremiumMap extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            thisAddress: "",
            thisMap: null,
            thisInfo: null,
            fetching: false
        };

        this.initMap = this.initMap.bind(this);
    }

    componentDidMount() {
        const { attributes, setAttributes, clientId } = this.props;
        if (!attributes.mapID) {
            setAttributes({ mapID: "premium-map-" + clientId });
        }
        this.initMap();
    }

    componentDidUpdate(prevProps, prevState) {
        //if (prevProps.attributes !== this.props.attributes) {
        clearTimeout(isMapUpdated);
        isMapUpdated = setTimeout(this.initMap, 500);
        //}
    }

    initMap() {
        if (typeof google === "undefined" || !this.props.attributes.mapID)
            return null;

        const { thisMap, thisInfo } = this.state;
        const {
            mapID,
            mapStyle,
            mapType,
            zoom,
            mapTypeControl,
            zoomControl,
            fullscreenControl,
            streetViewControl,
            scrollwheel,
            centerLng,
            centerLat,
            markerTitle,
            markerOpen,
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

        let map = thisMap;
        let infoWindow = thisInfo;
        let latlng = new google.maps.LatLng(
            parseFloat(centerLat),
            parseFloat(centerLng)
        );
        if (!map) {
            let mapElem = document.getElementById(mapID);
            map = new google.maps.Map(mapElem, {
                zoom: zoom,
                gestureHandling: "cooperative",
                mapTypeId: mapType,
                mapTypeControl: mapTypeControl,
                zoomControl: zoomControl,
                fullscreenControl: fullscreenControl,
                streetViewControl: streetViewControl,
                scrollwheel: scrollwheel,
                center: latlng,
                styles: JSON.parse(mapStyle)
            });
            this.setState({ thisMap: map });
        }

        map.setOptions({
            zoom: zoom,
            mapTypeId: mapType,
            mapTypeControl: mapTypeControl,
            zoomControl: zoomControl,
            fullscreenControl: fullscreenControl,
            streetViewControl: streetViewControl,
            styles: JSON.parse(mapStyle)
        });

        if (!infoWindow && mapMarker && "" !== markerTitle && "" !== markerDesc) {
            infoWindow = new google.maps.InfoWindow({
                maxWidth: maxWidth
            });
            this.setState({ thisInfo: infoWindow });
        }

        if (mapMarker && "" !== markerTitle && "" !== markerDesc) {
            infoWindow.setContent(
                `<div class="${className}__info" style="text-align:${boxAlign};padding:${boxPadding}px"
            >
            <h3
                class="${className}__title"
                style="color:${titleColor};font-size:${titleSize}px;margin-bottom:${gapBetween}px"
            >
                ${markerTitle}
            </h3>
            <div
                class="${className}__desc"
                style="color: ${descColor};font-size: ${descSize}px"
            >
                ${markerDesc}
            </div>
        </div>`
            );
        }

        map.setCenter(latlng);

        if (mapMarker) {
            let marker = new google.maps.Marker({
                position: latlng,
                map: map,
                icon: markerCustom ? markerIconUrl : ""
            });

            if (markerOpen) {
                infoWindow.open(map, marker);
            }

            google.maps.event.addListener(marker, "click", function () {
                infoWindow.open(map, marker);
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
            markerOpen,
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
            gapBetween,
            hideDesktop,
            hideTablet,
            hideMobile
        } = this.props.attributes;

        const TYPES = [
            {
                value: "roadmap",
                label: __("Road Map", 'premium-blocks-for-gutenberg')
            },
            {
                value: "satellite",
                label: __("Satellite", 'premium-blocks-for-gutenberg')
            },
            {
                value: "terrain",
                label: __("Terrain", 'premium-blocks-for-gutenberg')
            },
            {
                value: "hybrid",
                label: __("Hybrid", 'premium-blocks-for-gutenberg')
            }
        ];

        const ALIGNS = ["left", "center", "right"];
        return [
            typeof google !== "undefined" && isSelected && (
                <InspectorControls key="key">
                    <PanelBody
                        title={__("Center Location")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <TextControl
                            label={__("Longitude")}
                            value={centerLng}
                            help={[
                                __("Get your location coordinates from"),
                                <a href="https://www.latlong.net/" target="_blank">
                                    &nbsp;
                                    {__("here", 'premium-blocks-for-gutenberg')}
                                </a>
                            ]}
                            onChange={newLng => setAttributes({ centerLng: newLng })}
                        />
                        <TextControl
                            label={__("Latitude")}
                            value={centerLat}
                            onChange={newLat => setAttributes({ centerLat: newLat })}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Marker", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__("Enable Marker", 'premium-blocks-for-gutenberg')}
                            checked={mapMarker}
                            onChange={check => setAttributes({ mapMarker: check })}
                            help={__("Disable marker is applied on page reload", 'premium-blocks-for-gutenberg')}
                        />
                        {mapMarker && (
                            <Fragment>
                                <TextControl
                                    label={__("Marker Title", 'premium-blocks-for-gutenberg')}
                                    value={markerTitle}
                                    onChange={newText => setAttributes({ markerTitle: newText })}
                                />
                                <TextareaControl
                                    label={__("Marker Description", 'premium-blocks-for-gutenberg')}
                                    value={markerDesc}
                                    onChange={newText => setAttributes({ markerDesc: newText })}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Spacing (PX)", 'premium-blocks-for-gutenberg')}
                                    value={gapBetween}
                                    min="10"
                                    max="80"
                                    onChange={newSize => setAttributes({ gapBetween: newSize })}
                                    showUnit={false}
                                    defaultValue={10}
                                />
                                <ToggleControl
                                    label={__("Description opened by default", 'premium-blocks-for-gutenberg')}
                                    checked={markerOpen}
                                    onChange={newValue => setAttributes({ markerOpen: newValue })}
                                />
                                <RadioComponent
                                    choices={["left", "center", "right"]}
                                    value={boxAlign}
                                    onChange={newValue => setAttributes({ boxAlign: newValue })}
                                    label={__("Align", 'premium-blocks-for-gutenberg')}
                                />
                                <ToggleControl
                                    label={__("Custom Marker Icon", 'premium-blocks-for-gutenberg')}
                                    checked={markerCustom}
                                    onChange={check => setAttributes({ markerCustom: check })}
                                />
                                {markerCustom && (
                                    <PremiumMediaUpload
                                        type="image"
                                        imageID={markerIconId}
                                        imageURL={markerIconUrl}
                                        onSelectMedia={media => {
                                            setAttributes({
                                                markerIconId: media.id,
                                                markerIconUrl: media.url
                                            });
                                        }}
                                        onRemoveImage={() =>
                                            setAttributes({
                                                markerIconId: "",
                                                markerIconUrl: ""
                                            })
                                        }

                                    />
                                )}
                                <ResponsiveSingleRangeControl
                                    label={__("Description Box Max Width (PX)", 'premium-blocks-for-gutenberg')}
                                    value={maxWidth}
                                    min="10"
                                    max="500"
                                    onChange={newSize => setAttributes({ maxWidth: newSize })}
                                    showUnit={false}
                                    defaultValue={0}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Description Box Padding (PX)", 'premium-blocks-for-gutenberg')}
                                    value={boxPadding}
                                    min="1"
                                    max="50"
                                    onChange={newSize => setAttributes({ boxPadding: newSize })}
                                    showUnit={false}
                                    defaultValue={0}
                                />
                            </Fragment>
                        )}
                    </PanelBody>
                    {mapMarker && markerTitle && (
                        <PanelBody
                            title={__("Marker Title Style", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <ResponsiveSingleRangeControl
                                label={__("Font Size (PX)", 'premium-blocks-for-gutenberg')}
                                value={titleSize}
                                min="10"
                                max="80"
                                onChange={newSize => setAttributes({ titleSize: newSize })}
                                showUnit={false}
                                defaultValue={0}
                            />
                            <AdvancedPopColorControl
                                label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                colorValue={titleColor}
                                colorDefault={''}
                                onColorChange={newValue => setAttributes({ titleColor: newValue === undefined ? "transparent" : newValue })
                                }
                            />
                        </PanelBody>
                    )}
                    {mapMarker && markerDesc && (
                        <PanelBody
                            title={__("Marker Description Style", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <ResponsiveSingleRangeControl
                                label={__("Font Size (PX)", 'premium-blocks-for-gutenberg')}
                                value={descSize}
                                min="10"
                                max="80"
                                onChange={newSize => setAttributes({ descSize: newSize })}
                                showUnit={false}
                                defaultValue={0}
                            />
                            <AdvancedPopColorControl
                                label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                colorValue={descColor}
                                colorDefault={''}
                                onColorChange={newValue => setAttributes({ descColor: newValue === undefined ? "transparent" : newValue })}
                            />
                        </PanelBody>
                    )}
                    <PanelBody
                        title={__("Controls", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <SelectControl
                            label={__("Map Type", 'premium-blocks-for-gutenberg')}
                            options={TYPES}
                            value={mapType}
                            onChange={newType => setAttributes({ mapType: newType })}
                        />
                        <ResponsiveSingleRangeControl
                            label={__("Map Height (PX)", 'premium-blocks-for-gutenberg')}
                            value={height}
                            min="10"
                            max="800"
                            onChange={newSize => setAttributes({ height: newSize })}
                            showUnit={false}
                            defaultValue={0}
                        />
                        <ResponsiveSingleRangeControl
                            label={__("Zoom", 'premium-blocks-for-gutenberg')}
                            value={zoom}
                            min="1"
                            max="14"
                            onChange={newSize => setAttributes({ zoom: newSize })}
                            showUnit={false}
                            defaultValue={0}
                        />
                        <ToggleControl
                            label={__("Map Type Controls", 'premium-blocks-for-gutenberg')}
                            checked={mapTypeControl}
                            onChange={check => setAttributes({ mapTypeControl: check })}
                        />
                        <ToggleControl
                            label={__("Zoom Controls", 'premium-blocks-for-gutenberg')}
                            checked={zoomControl}
                            onChange={check => setAttributes({ zoomControl: check })}
                        />
                        <ToggleControl
                            label={__("Street View Control", 'premium-blocks-for-gutenberg')}
                            checked={streetViewControl}
                            onChange={check => setAttributes({ streetViewControl: check })}
                        />

                        <ToggleControl
                            label={__("Full Screen Control", 'premium-blocks-for-gutenberg')}
                            checked={fullscreenControl}
                            onChange={check => setAttributes({ fullscreenControl: check })}
                        />
                        <ToggleControl
                            label={__("Scroll Wheel Zoom", 'premium-blocks-for-gutenberg')}
                            checked={scrollwheel}
                            onChange={check => setAttributes({ scrollwheel: check })}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Map Style", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <TextareaControl
                            label={__("Maps Style", 'premium-blocks-for-gutenberg')}
                            value={mapStyle}
                            help={[
                                __("Get your custom styling from", 'premium-blocks-for-gutenberg'),
                                <a href="https://snazzymaps.com/" target="_blank">
                                    &nbsp;
                                    {__("here")}
                                </a>
                            ]}
                            onChange={newStyle =>
                                setAttributes({ mapStyle: "" !== newStyle ? newStyle : "[]" })
                            }
                        />
                    </PanelBody>
                    <PremiumResponsiveTabs
                        Desktop={hideDesktop}
                        Tablet={hideTablet}
                        Mobile={hideMobile}
                        onChangeDesktop={(value) => setAttributes({ hideDesktop: value ? " premium-desktop-hidden" : "" })}
                        onChangeTablet={(value) => setAttributes({ hideTablet: value ? " premium-tablet-hidden" : "" })}
                        onChangeMobile={(value) => setAttributes({ hideMobile: value ? " premium-mobile-hidden" : "" })}
                    />
                </InspectorControls>
            ),
            <div
                className={`${className}__wrap ${hideDesktop} ${hideTablet} ${hideMobile}`}
                id={mapID}
                style={{
                    height: height + "px"
                }}
            />
        ];
    }
}

registerBlockType("premium/maps", {
    title: __("Maps"),
    icon: <PbgIcon icon="maps" />,
    category: "premium-blocks",
    attributes: mapAttrs,
    supports: {
        inserter: maps
    },
    edit: PremiumMap,
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
    },
    deprecated: [
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
    ]
});
