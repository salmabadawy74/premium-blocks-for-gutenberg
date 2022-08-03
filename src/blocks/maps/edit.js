import PremiumMediaUpload from "../../components/premium-media-upload";
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent';
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';
import MultiButtonsControl from '../../components/responsive-radio';
import Icons from "../../components/icons";
import PremiumTypo from "../../components/premium-typo";
import SpacingComponent from '../../components/premium-responsive-spacing';
import PremiumShadow from "../../components/PremiumShadow";
import { generateBlockId, generateCss } from '../../components/HelperFunction';
import PremiumBorder from "../../components/premium-border";

const className = "premium-maps";
const { __ } = wp.i18n;
const { withSelect } = wp.data
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

class edit extends Component {
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
        const { setAttributes, clientId } = this.props;
        setAttributes({ blockId: "premium-map-" + generateBlockId(clientId) });
        this.initMap();
    }

    componentDidUpdate(prevProps, prevState) {
        //if (prevProps.attributes !== this.props.attributes) {
        clearTimeout(isMapUpdated);
        isMapUpdated = setTimeout(this.initMap, 500);
        //}
    }

    initMap() {
        if (typeof google === "undefined" || !this.props.attributes.blockId)
            return null;

        const { thisMap, thisInfo } = this.state;
        const {
            blockId,
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
        } = this.props.attributes;

        let map = thisMap;
        let infoWindow = thisInfo;
        let latlng = new google.maps.LatLng(
            parseFloat(centerLat),
            parseFloat(centerLng)
        );
        if (!map) {
            let mapElem = document.querySelector(`.${blockId} .map-container`);
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
                `<div class="${className}__info"
            >
            <h3
                class="${className}__title"
            >
                ${markerTitle}
            </h3>
            <div
                class="${className}__desc"
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
        const { isSelected, setAttributes } = this.props;

        const {
            blockId,
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
            titleColor,
            descColor,
            boxAlign,
            hideDesktop,
            hideTablet,
            hideMobile,
            titleTypography,
            descriptionTypography,
            titleMargin,
            titlePadding,
            descriptionMargin,
            descriptionPadding,
            mapMargin,
            mapPadding,
            mapBorder,
            mapBoxShadow,
            maxWidth,
        } = this.props.attributes;

        const loadStyles = () => {
            const styles = {};

            styles[`.${blockId} .${className}__title`] = {
                'color': `${titleColor}`,
                'font-family': `${titleTypography?.fontFamily}!important`,
                'font-size': `${titleTypography?.fontSize?.[this.props.deviceType]}${titleTypography?.fontSize?.unit}`,
                'font-weight': `${titleTypography?.fontWeight}!important`,
                'letter-spacing': `${titleTypography?.letterSpacing}`,
                'line-height': `${titleTypography?.lineHeight}`,
                'font-style': `${titleTypography?.fontStyle}`,
                'text-transform': `${titleTypography?.textTransform}`,
                'text-decoration': `${titleTypography?.textDecoration}`,
                'padding-top': `${titlePadding?.[this.props.deviceType]?.top}${titlePadding.unit}!important`,
                'padding-right': `${titlePadding?.[this.props.deviceType]?.right}${titlePadding.unit}!important`,
                'padding-bottom': `${titlePadding?.[this.props.deviceType]?.bottom}${titlePadding.unit}!important`,
                'padding-left': `${titlePadding?.[this.props.deviceType]?.left}${titlePadding.unit}!important`,
                'margin-top': `${titleMargin?.[this.props.deviceType]?.top}${titleMargin.unit}!important`,
                'margin-right': `${titleMargin?.[this.props.deviceType]?.right}${titleMargin.unit}!important`,
                'margin-bottom': `${titleMargin?.[this.props.deviceType]?.bottom}${titleMargin.unit}!important`,
                'margin-left': `${titleMargin?.[this.props.deviceType]?.left}${titleMargin.unit}!important`,
            };

            styles[`.${blockId} .${className}__desc`] = {
                'color': `${descColor}`,
                'text-align': `${boxAlign?.[this.props.deviceType]}!important`,
                'font-family': `${descriptionTypography?.fontFamily}`,
                'font-size': `${descriptionTypography?.fontSize?.[this.props.deviceType]}${descriptionTypography?.fontSize?.unit}`,
                'font-weight': `${descriptionTypography?.fontWeight}`,
                'letter-spacing': `${descriptionTypography?.letterSpacing}`,
                'line-height': `${descriptionTypography?.lineHeight}`,
                'font-style': `${descriptionTypography?.fontStyle}`,
                'text-transform': `${descriptionTypography?.textTransform}`,
                'text-decoration': `${descriptionTypography?.textDecoration}`,
                'padding-top': `${descriptionMargin?.[this.props.deviceType]?.top}${descriptionMargin.unit}!important`,
                'padding-right': `${descriptionMargin?.[this.props.deviceType]?.right}${descriptionMargin.unit}!important`,
                'padding-bottom': `${descriptionMargin?.[this.props.deviceType]?.bottom}${descriptionMargin.unit}!important`,
                'padding-left': `${descriptionMargin?.[this.props.deviceType]?.left}${descriptionMargin.unit}!important`,
                'margin-top': `${descriptionPadding?.[this.props.deviceType]?.top}${descriptionPadding.unit}!important`,
                'margin-right': `${descriptionPadding?.[this.props.deviceType]?.right}${descriptionPadding.unit}!important`,
                'margin-bottom': `${descriptionPadding?.[this.props.deviceType]?.bottom}${descriptionPadding.unit}!important`,
                'margin-left': `${descriptionPadding?.[this.props.deviceType]?.left}${descriptionPadding.unit}!important`,
            };

            styles[`.${blockId}`] = {
                'border-color': `${mapBorder.borderColor}`,
                'border-style': `${mapBorder.borderType}`,
                'border-top-width': `${mapBorder?.borderWidth?.[this.props.deviceType]?.top}px`,
                'border-right-width': `${mapBorder?.borderWidth?.[this.props.deviceType]?.right}px`,
                'border-bottom-width': `${mapBorder?.borderWidth?.[this.props.deviceType]?.bottom}px`,
                'border-left-width': `${mapBorder?.borderWidth?.[this.props.deviceType]?.left}px`,
                'border-top-left-radius': `${mapBorder?.borderRadius?.[this.props.deviceType]?.top}px`,
                'border-top-right-radius': `${mapBorder?.borderRadius?.[this.props.deviceType]?.right}px`,
                'border-bottom-left-radius': `${mapBorder?.borderRadius?.[this.props.deviceType]?.bottom}px`,
                'border-bottom-right-radius': `${mapBorder?.borderRadius?.[this.props.deviceType]?.left}px`,
                'padding-top': `${mapPadding?.[this.props.deviceType]?.top}${mapPadding.unit}`,
                'padding-right': `${mapPadding?.[this.props.deviceType]?.right}${mapPadding.unit}`,
                'padding-bottom': `${mapPadding?.[this.props.deviceType]?.bottom}${mapPadding.unit}`,
                'padding-left': `${mapPadding?.[this.props.deviceType]?.left}${mapPadding.unit}`,
                'margin-top': `${mapMargin?.[this.props.deviceType]?.top}${mapMargin.unit}`,
                'margin-right': `${mapMargin?.[this.props.deviceType]?.right}${mapMargin.unit}`,
                'margin-bottom': `${mapMargin?.[this.props.deviceType]?.bottom}${mapMargin.unit}`,
                'margin-left': `${mapMargin?.[this.props.deviceType]?.left}${mapMargin.unit}`,
                'box-shadow': `${mapBoxShadow.horizontal}px ${mapBoxShadow.vertical}px ${mapBoxShadow.blur}px ${mapBoxShadow.color} ${mapBoxShadow?.position}`,
            };

            return generateCss(styles);
        };

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

        return [
            typeof google !== "undefined" && isSelected && (
                <InspectorControls key="key">
                    <InspectorTabs tabs={['layout', 'style', 'advance']}>
                        <InspectorTab key={'layout'}>
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
                                        <ResponsiveSingleRangeControl
                                            label={__("Max Width (PX)", 'premium-blocks-for-gutenberg')}
                                            value={maxWidth}
                                            min="10"
                                            max="500"
                                            onChange={newSize => setAttributes({ maxWidth: newSize })}
                                            showUnit={false}
                                            defaultValue={0}
                                        />
                                        <ToggleControl
                                            label={__("Description opened by default", 'premium-blocks-for-gutenberg')}
                                            checked={markerOpen}
                                            onChange={newValue => setAttributes({ markerOpen: newValue })}
                                        />
                                        <ToggleControl
                                            label={__("Custom Marker Icon", 'premium-blocks-for-gutenberg')}
                                            checked={markerCustom}
                                            onChange={check => setAttributes({ markerCustom: check })}
                                        />
                                        {markerOpen && (
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
                                            </Fragment>
                                        )}
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
                                    </Fragment>
                                )}
                            </PanelBody>
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
                                title={__("Map", 'premium-blocks-for-gutenberg')}
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
                        </InspectorTab>
                        <InspectorTab key={'style'}>
                            {mapMarker && markerTitle && (
                                <PanelBody
                                    title={__("Title", 'premium-blocks-for-gutenberg')}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    <PremiumTypo
                                        components={["responsiveSize", "weight", "family", "spacing", "style", "Upper", "line", "Decoration"]}
                                        value={titleTypography}
                                        onChange={newValue => setAttributes({ titleTypography: newValue })}
                                    />
                                    <hr />
                                    <AdvancedPopColorControl
                                        label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                        colorValue={titleColor}
                                        colorDefault={''}
                                        onColorChange={newValue => setAttributes({ titleColor: newValue === undefined ? "transparent" : newValue })
                                        }
                                    />
                                    <hr />
                                    <SpacingComponent value={titleMargin} responsive={true} showUnits={true} label={__("Margin")} onChange={(value) => setAttributes({ titleMargin: value })} />
                                    <SpacingComponent value={titlePadding} responsive={true} showUnits={true} label={__("Padding")} onChange={(value) => setAttributes({ titlePadding: value })} />
                                </PanelBody>
                            )}
                            {mapMarker && markerDesc && (
                                <PanelBody
                                    title={__("Description", 'premium-blocks-for-gutenberg')}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    <PremiumTypo
                                        components={["responsiveSize", "weight", "family", "spacing", "style", "Upper", "line", "Decoration"]}
                                        value={descriptionTypography}
                                        onChange={newValue => setAttributes({ descriptionTypography: newValue })}
                                    />
                                    <hr />
                                    <AdvancedPopColorControl
                                        label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                        colorValue={descColor}
                                        colorDefault={''}
                                        onColorChange={newValue => setAttributes({ descColor: newValue === undefined ? "transparent" : newValue })}
                                    />
                                    <hr />
                                    <SpacingComponent value={descriptionMargin} responsive={true} showUnits={true} label={__("Margin")} onChange={(value) => setAttributes({ descriptionMargin: value })} />
                                    <SpacingComponent value={descriptionPadding} responsive={true} showUnits={true} label={__("Padding")} onChange={(value) => setAttributes({ descriptionPadding: value })} />
                                    <hr />
                                    <MultiButtonsControl
                                        choices={[{ value: 'left', label: __('Left'), icon: Icons.alignLeft }, { value: 'center', label: __('Center'), icon: Icons.alignCenter }, { value: 'right', label: __('Right'), icon: Icons.alignRight }]}
                                        value={boxAlign}
                                        onChange={(align) => setAttributes({ boxAlign: align })}
                                        label={__("Align", "premium-blocks-for-gutenberg")}
                                        showIcons={true} />
                                </PanelBody>
                            )}
                            <PanelBody
                                title={__("Map", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumShadow
                                    label={__("Shadow", 'premium-blocks-for-gutenberg')}
                                    boxShadow={false}
                                    value={mapBoxShadow}
                                    onChange={(value) => setAttributes({ mapBoxShadow: value })}
                                />
                                <hr />
                                <PremiumBorder
                                    label={__("Border")}
                                    value={mapBorder}
                                    onChange={(value) => setAttributes({ mapBorder: value })}
                                />
                                <hr />
                                <SpacingComponent value={mapMargin} responsive={true} showUnits={true} label={__("Margin")} onChange={(value) => setAttributes({ mapMargin: value })} />
                                <SpacingComponent value={mapPadding} responsive={true} showUnits={true} label={__("Padding")} onChange={(value) => setAttributes({ mapPadding: value })} />
                            </PanelBody>
                        </InspectorTab>
                        <InspectorTab key={'advance'}>
                            <PremiumResponsiveTabs
                                Desktop={hideDesktop}
                                Tablet={hideTablet}
                                Mobile={hideMobile}
                                onChangeDesktop={(value) => setAttributes({ hideDesktop: value ? " premium-desktop-hidden" : "" })}
                                onChangeTablet={(value) => setAttributes({ hideTablet: value ? " premium-tablet-hidden" : "" })}
                                onChangeMobile={(value) => setAttributes({ hideMobile: value ? " premium-mobile-hidden" : "" })}
                            />
                        </InspectorTab>
                    </InspectorTabs>
                </InspectorControls>
            ),
            <div
                className={`${className}__wrap ${blockId} ${hideDesktop || ''} ${hideTablet || ''} ${hideMobile || ''}`}
            >
                <div className="map-container" style={{
                    height: height + "px"
                }} />
                <style>{loadStyles()}</style>
            </div>
        ];
    }
}
export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(edit)