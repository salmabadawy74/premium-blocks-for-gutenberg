import classnames from "classnames";
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
import { generateBlockId, generateCss, marginCss } from '../../components/HelperFunction';
import PremiumBorder from "../../components/premium-border";
import WebfontLoader from "../../components/typography/fontLoader";

const classNames = "premium-maps__wrap";
const { __ } = wp.i18n;
const { withSelect } = wp.data
const {
    PanelBody,
    SelectControl,
    TextControl,
    TextareaControl,
    ToggleControl,
    Placeholder,
    Button,
} = wp.components;
const { useEffect, Fragment, useState, useRef } = wp.element;
const { InspectorControls, useBlockProps } = wp.blockEditor;
let isMapUpdated = null;

function Edit(props) {
    const { setAttributes, className, clientId } = props;
    const [thisMap, setMap] = useState(null);
    const [thisInfo, setInfo] = useState(null);
    const contentRef = React.createRef();
    const setting_url = PremiumBlocksSettings.admin_url + "admin.php?page=pb_panel&tab=settings";
    console.log(setting_url)

    useEffect(() => {
        setAttributes({
            blockId: "premium-map-" + generateBlockId(clientId)
        });
        initMap();
    }, []);

    useEffect(() => {
        clearTimeout(isMapUpdated);
        isMapUpdated = setTimeout(initMap, 500);
    }, [isMapUpdated]);

    const initMap = () => {
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
            maxWidth
        } = props.attributes;
        if (typeof google === "undefined" || !blockId)
            return null;

        let map = thisMap;
        let infoWindow = thisInfo;
        let latlng = new google.maps.LatLng(
            parseFloat(centerLat),
            parseFloat(centerLng)
        );
        if (!map) {
            let mapElem = contentRef.current.querySelector(
                ".map-container"
            );

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
            setMap(map)
        }

        map.setOptions({
            zoom: zoom,
            mapTypeId: mapType,
            mapTypeControl: mapTypeControl,
            zoomControl: zoomControl,
            fullscreenControl: fullscreenControl,
            streetViewControl: streetViewControl,
            scrollwheel: scrollwheel,
            styles: JSON.parse(mapStyle)
        });

        if (!infoWindow && mapMarker && "" !== markerTitle && "" !== markerDesc) {
            infoWindow = new google.maps.InfoWindow({
                maxWidth: maxWidth
            });
            setInfo(infoWindow)
        }

        if (mapMarker && "" !== markerTitle && "" !== markerDesc) {
            infoWindow.setContent(
                `<div class="${classNames}__info"
            >
            <h3
                class="${classNames}__title"
            >
                ${markerTitle}
            </h3>
            <div
                class="${classNames}__desc"
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
    } = props.attributes;

    let loadTitleGoogleFonts;
    let loadDescriptionGoogleFonts;

    if (titleTypography?.fontFamily !== 'Default') {
        const titleConfig = {
            google: {
                families: [titleTypography.fontFamily]
            }
        }
        loadTitleGoogleFonts = (
            <WebfontLoader config={titleConfig}>
            </WebfontLoader>
        )
    }

    if (descriptionTypography?.fontFamily !== 'Default') {
        const descriptionConfig = {
            google: {
                families: [descriptionTypography.fontFamily]
            }
        }
        loadDescriptionGoogleFonts = (
            <WebfontLoader config={descriptionConfig}>
            </WebfontLoader>
        )
    }

    const loadStyles = () => {
        const styles = {};

        styles[`.${blockId} .${classNames}__title`] = {
            'color': `${titleColor}`,
            'font-family': `${titleTypography?.fontFamily}!important`,
            'font-size': `${titleTypography?.fontSize?.[props.deviceType]}${titleTypography?.fontSize?.unit}`,
            'font-weight': `${titleTypography?.fontWeight}!important`,
            'letter-spacing': `${titleTypography?.letterSpacing?.[props.deviceType]}${titleTypography?.letterSpacing?.unit}`,
            'line-height': `${titleTypography?.lineHeight?.[props.deviceType]}${titleTypography?.lineHeight?.unit}`,
            'font-style': `${titleTypography?.fontStyle}`,
            'text-transform': `${titleTypography?.textTransform}`,
            'text-decoration': `${titleTypography?.textDecoration}`,
            'padding-top': `${titlePadding?.[props.deviceType]?.top}${titlePadding.unit}!important`,
            'padding-right': `${titlePadding?.[props.deviceType]?.right}${titlePadding.unit}!important`,
            'padding-bottom': `${titlePadding?.[props.deviceType]?.bottom}${titlePadding.unit}!important`,
            'padding-left': `${titlePadding?.[props.deviceType]?.left}${titlePadding.unit}!important`,
            'margin-top': `${titleMargin?.[props.deviceType]?.top}${titleMargin.unit}!important`,
            'margin-right': `${titleMargin?.[props.deviceType]?.right}${titleMargin.unit}!important`,
            'margin-bottom': `${titleMargin?.[props.deviceType]?.bottom}${titleMargin.unit}!important`,
            'margin-left': `${titleMargin?.[props.deviceType]?.left}${titleMargin.unit}!important`,
        };

        styles[`.${blockId} .${classNames}__desc`] = {
            'color': `${descColor}`,
            'text-align': `${boxAlign?.[props.deviceType]}!important`,
            'font-family': `${descriptionTypography?.fontFamily}`,
            'font-size': `${descriptionTypography?.fontSize?.[props.deviceType]}${descriptionTypography?.fontSize?.unit}`,
            'font-weight': `${descriptionTypography?.fontWeight}`,
            'letter-spacing': `${descriptionTypography?.letterSpacing?.[props.deviceType]}${descriptionTypography?.letterSpacing?.unit}`,
            'line-height': `${descriptionTypography?.lineHeight?.[props.deviceType]}${descriptionTypography?.lineHeight?.unit}`,
            'font-style': `${descriptionTypography?.fontStyle}`,
            'text-transform': `${descriptionTypography?.textTransform}`,
            'text-decoration': `${descriptionTypography?.textDecoration}`,
            'padding-top': `${descriptionMargin?.[props.deviceType]?.top}${descriptionMargin.unit}!important`,
            'padding-right': `${descriptionMargin?.[props.deviceType]?.right}${descriptionMargin.unit}!important`,
            'padding-bottom': `${descriptionMargin?.[props.deviceType]?.bottom}${descriptionMargin.unit}!important`,
            'padding-left': `${descriptionMargin?.[props.deviceType]?.left}${descriptionMargin.unit}!important`,
            'margin-top': `${descriptionPadding?.[props.deviceType]?.top}${descriptionPadding.unit}!important`,
            'margin-right': `${descriptionPadding?.[props.deviceType]?.right}${descriptionPadding.unit}!important`,
            'margin-bottom': `${descriptionPadding?.[props.deviceType]?.bottom}${descriptionPadding.unit}!important`,
            'margin-left': `${descriptionPadding?.[props.deviceType]?.left}${descriptionPadding.unit}!important`,
        };

        styles[`.${blockId}`] = {
            'border-color': `${mapBorder.borderColor}`,
            'border-style': `${mapBorder.borderType}`,
            'border-top-width': `${mapBorder?.borderWidth?.[props.deviceType]?.top}px`,
            'border-right-width': `${mapBorder?.borderWidth?.[props.deviceType]?.right}px`,
            'border-bottom-width': `${mapBorder?.borderWidth?.[props.deviceType]?.bottom}px`,
            'border-left-width': `${mapBorder?.borderWidth?.[props.deviceType]?.left}px`,
            'border-top-left-radius': `${mapBorder?.borderRadius?.[props.deviceType]?.top}px !important`,
            'border-top-right-radius': `${mapBorder?.borderRadius?.[props.deviceType]?.right}px !important`,
            'border-bottom-left-radius': `${mapBorder?.borderRadius?.[props.deviceType]?.bottom}px !important`,
            'border-bottom-right-radius': `${mapBorder?.borderRadius?.[props.deviceType]?.left}px !important`,
            'padding-top': `${mapPadding?.[props.deviceType]?.top}${mapPadding.unit}`,
            'padding-right': `${mapPadding?.[props.deviceType]?.right}${mapPadding.unit}`,
            'padding-bottom': `${mapPadding?.[props.deviceType]?.bottom}${mapPadding.unit}`,
            'padding-left': `${mapPadding?.[props.deviceType]?.left}${mapPadding.unit}`,
            // 'margin-top': `${mapMargin?.[props.deviceType]?.top}${mapMargin.unit} !important`,
            // 'margin-right': `${mapMargin?.[props.deviceType]?.right}${mapMargin.unit} !important`,
            // 'margin-bottom': `${mapMargin?.[props.deviceType]?.bottom}${mapMargin.unit} !important`,
            // 'margin-left': `${mapMargin?.[props.deviceType]?.left}${mapMargin.unit} !important`,
            'box-shadow': `${mapBoxShadow.horizontal}px ${mapBoxShadow.vertical}px ${mapBoxShadow.blur}px ${mapBoxShadow.color} ${mapBoxShadow?.position} !important`,
        };

        styles[`.${blockId} .map-container`] = {
            'border-top-left-radius': `${mapBorder?.borderRadius?.[props.deviceType]?.top}px !important`,
            'border-top-right-radius': `${mapBorder?.borderRadius?.[props.deviceType]?.right}px !important`,
            'border-bottom-left-radius': `${mapBorder?.borderRadius?.[props.deviceType]?.bottom}px !important`,
            'border-bottom-right-radius': `${mapBorder?.borderRadius?.[props.deviceType]?.left}px !important`
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

    return (
        <Fragment>
            {typeof google !== "undefined" && (
                <InspectorControls key="key">
                    <InspectorTabs tabs={['layout', 'style', 'advance']}>
                        <InspectorTab key={'layout'}>
                            <PanelBody
                                title={__("Center Location", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <TextControl
                                    label={__("Longitude", 'premium-blocks-for-gutenberg')}
                                    value={centerLng}
                                    help={[
                                        __("Get your location coordinates from", 'premium-blocks-for-gutenberg'),
                                        <a href="https://www.latlong.net/" target="_blank">
                                            &nbsp;
                                            {__("here", 'premium-blocks-for-gutenberg')}
                                        </a>
                                    ]}
                                    onChange={newLng => setAttributes({ centerLng: newLng })}
                                />
                                <TextControl
                                    label={__("Latitude", 'premium-blocks-for-gutenberg')}
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
                                            {__("here", 'premium-blocks-for-gutenberg')}
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
                                        value={titleTypography}
                                        onChange={newValue => setAttributes({ titleTypography: newValue })}
                                    />
                                    <AdvancedPopColorControl
                                        label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                        colorValue={titleColor}
                                        colorDefault={''}
                                        onColorChange={newValue => setAttributes({ titleColor: newValue === undefined ? "transparent" : newValue })
                                        }
                                    />
                                    <hr />
                                    <SpacingComponent value={titleMargin} responsive={true} showUnits={true} label={__("Margin", 'premium-blocks-for-gutenberg')} onChange={(value) => setAttributes({ titleMargin: value })} />
                                    <SpacingComponent value={titlePadding} responsive={true} showUnits={true} label={__("Padding", 'premium-blocks-for-gutenberg')} onChange={(value) => setAttributes({ titlePadding: value })} />
                                </PanelBody>
                            )}
                            {mapMarker && markerDesc && (
                                <PanelBody
                                    title={__("Description", 'premium-blocks-for-gutenberg')}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    <PremiumTypo
                                        value={descriptionTypography}
                                        onChange={newValue => setAttributes({ descriptionTypography: newValue })}
                                    />
                                    <AdvancedPopColorControl
                                        label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                        colorValue={descColor}
                                        colorDefault={''}
                                        onColorChange={newValue => setAttributes({ descColor: newValue === undefined ? "transparent" : newValue })}
                                    />
                                    <hr />
                                    <SpacingComponent value={descriptionMargin} responsive={true} showUnits={true} label={__("Margin", 'premium-blocks-for-gutenberg')} onChange={(value) => setAttributes({ descriptionMargin: value })} />
                                    <SpacingComponent value={descriptionPadding} responsive={true} showUnits={true} label={__("Padding", 'premium-blocks-for-gutenberg')} onChange={(value) => setAttributes({ descriptionPadding: value })} />
                                    <hr />
                                    <MultiButtonsControl
                                        choices={[{ value: 'left', label: __('Left', "premium-blocks-for-gutenberg"), icon: Icons.alignLeft }, { value: 'center', label: __('Center', "premium-blocks-for-gutenberg"), icon: Icons.alignCenter }, { value: 'right', label: __('Right', "premium-blocks-for-gutenberg"), icon: Icons.alignRight }]}
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
                                    value={mapBoxShadow}
                                    onChange={(value) => setAttributes({ mapBoxShadow: value })}
                                />
                                <hr />
                                <PremiumBorder
                                    label={__("Border", 'premium-blocks-for-gutenberg')}
                                    value={mapBorder}
                                    onChange={(value) => setAttributes({ mapBorder: value })}
                                />
                                <hr />
                                <SpacingComponent value={mapMargin} responsive={true} showUnits={true} label={__("Margin", 'premium-blocks-for-gutenberg')} onChange={(value) => setAttributes({ mapMargin: value })} />
                                <SpacingComponent value={mapPadding} responsive={true} showUnits={true} label={__("Padding", 'premium-blocks-for-gutenberg')} onChange={(value) => setAttributes({ mapPadding: value })} />
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
            )}
            <div
                {...useBlockProps({
                    className: classnames(
                        className,
                        `${blockId}`,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
                style={{
                    ...marginCss(mapMargin, props.deviceType)
                }}
            >
                {
                    typeof google !== "undefined" ?
                        <div ref={contentRef}>
                            <div className="map-container" style={{
                                height: height + "px"
                            }} />
                        </div>
                        :
                        <Placeholder
                            label={__('Maps', 'premium-blocks-for-gutenberg')}
                            className={className}
                        >
                            <div>
                                {__("Premium Maps requires an API key.", 'premium-blocks-for-gutenberg')}{" "}
                                <a target="_blank" href={setting_url}>
                                    {__("Add API key here", 'premium-blocks-for-gutenberg')}
                                </a>
                            </div>
                        </Placeholder>
                }
                <style>{loadStyles()}</style>
                {loadDescriptionGoogleFonts}
                {loadTitleGoogleFonts}
            </div>
        </Fragment>
    )
}
export default withSelect((select) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(Edit)