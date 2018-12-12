import { maps } from "../settings";
import PbgIcon from "../icons";
if (maps) {
  const className = "premium-maps";

  const { __ } = wp.i18n;

  const { registerBlockType } = wp.blocks;

  const {
    IconButton,
    Toolbar,
    PanelBody,
    SelectControl,
    RangeControl,
    TextControl,
    TextareaControl,
    ToggleControl
  } = wp.components;

  const { InspectorControls, MediaUpload, PanelColorSettings } = wp.editor;

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
      default: __("Awesome Title")
    },
    markerDesc: {
      type: "string",
      default: __("Cool Description")
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
    }
  };

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

        google.maps.event.addListener(marker, "click", function() {
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
        gapBetween
      } = this.props.attributes;

      const TYPES = [
        {
          value: "roadmap",
          label: __("Road Map")
        },
        {
          value: "satellite",
          label: __("Satellite")
        },
        {
          value: "terrain",
          label: __("Terrain")
        },
        {
          value: "hybrid",
          label: __("Hybrid")
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
                    {__("here")}
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
              title={__("Marker")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <ToggleControl
                label={__("Enable Marker")}
                checked={mapMarker}
                onChange={check => setAttributes({ mapMarker: check })}
                help={__("Disable marker is applied on page reload")}
              />
              {mapMarker && (
                <Fragment>
                  <TextControl
                    label={__("Marker Title")}
                    value={markerTitle}
                    onChange={newText =>
                      setAttributes({ markerTitle: newText })
                    }
                  />
                  <TextareaControl
                    label={__("Marker Description")}
                    value={markerDesc}
                    onChange={newText => setAttributes({ markerDesc: newText })}
                  />
                  <RangeControl
                    label={__("Spacing (PX)")}
                    value={gapBetween}
                    min="10"
                    max="80"
                    onChange={newSize => setAttributes({ gapBetween: newSize })}
                  />
                  <ToggleControl
                    label={__("Description opened by default")}
                    checked={markerOpen}
                    onChange={newValue =>
                      setAttributes({ markerOpen: newValue })
                    }
                  />
                  <Toolbar
                    controls={ALIGNS.map(align => ({
                      icon: "editor-align" + align,
                      isActive: align === boxAlign,
                      onClick: () => setAttributes({ boxAlign: align })
                    }))}
                  />
                  <ToggleControl
                    label={__("Custom Marker Icon")}
                    checked={markerCustom}
                    onChange={check => setAttributes({ markerCustom: check })}
                  />
                  {markerCustom && markerIconUrl && (
                    <img src={markerIconUrl} width="100%" height="auto" />
                  )}
                  {markerCustom && (
                    <MediaUpload
                      allowedTypes={["image"]}
                      onSelect={media => {
                        setAttributes({
                          markerIconId: media.id,
                          markerIconUrl:
                            "undefined" === typeof media.sizes.thumbnail
                              ? media.url
                              : media.sizes.thumbnail.url
                        });
                      }}
                      type="image"
                      value={markerIconId}
                      render={({ open }) => (
                        <IconButton
                          label={__("Change Marker Icon")}
                          icon="edit"
                          onClick={open}
                        >
                          {__("Change Marker Icon")}
                        </IconButton>
                      )}
                    />
                  )}
                  <RangeControl
                    label={__("Description Box Max Width (PX)")}
                    value={maxWidth}
                    min="10"
                    max="500"
                    onChange={newSize => setAttributes({ maxWidth: newSize })}
                  />
                  <RangeControl
                    label={__("Description Box Padding (PX)")}
                    value={boxPadding}
                    min="1"
                    max="50"
                    onChange={newSize => setAttributes({ boxPadding: newSize })}
                  />
                </Fragment>
              )}
            </PanelBody>
            {mapMarker && markerTitle && (
              <PanelBody
                title={__("Marker Title Style")}
                className="premium-panel-body"
                initialOpen={false}
              >
                <RangeControl
                  label={__("Font Size (PX)")}
                  value={titleSize}
                  min="10"
                  max="80"
                  onChange={newSize => setAttributes({ titleSize: newSize })}
                />
                <PanelColorSettings
                  title={__("Colors")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                  colorSettings={[
                    {
                      value: titleColor,
                      onChange: colorValue =>
                        setAttributes({ titleColor: colorValue }),
                      label: __("Text Color")
                    }
                  ]}
                />
              </PanelBody>
            )}
            {mapMarker && markerDesc && (
              <PanelBody
                title={__("Marker Description Style")}
                className="premium-panel-body"
                initialOpen={false}
              >
                <RangeControl
                  label={__("Font Size (PX)")}
                  value={descSize}
                  min="10"
                  max="80"
                  onChange={newSize => setAttributes({ descSize: newSize })}
                />
                <PanelColorSettings
                  title={__("Colors")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                  colorSettings={[
                    {
                      value: descColor,
                      onChange: colorValue =>
                        setAttributes({ descColor: colorValue }),
                      label: __("Text Color")
                    }
                  ]}
                />
              </PanelBody>
            )}
            <PanelBody
              title={__("Controls")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <SelectControl
                label={__("Map Type")}
                options={TYPES}
                value={mapType}
                onChange={newType => setAttributes({ mapType: newType })}
              />
              <RangeControl
                label={__("Map Height (PX)")}
                value={height}
                min="10"
                max="800"
                onChange={newSize => setAttributes({ height: newSize })}
              />
              <RangeControl
                label={__("Zoom")}
                value={zoom}
                min="1"
                max="14"
                onChange={newSize => setAttributes({ zoom: newSize })}
              />
              <ToggleControl
                label={__("Map Type Controls")}
                checked={mapTypeControl}
                onChange={check => setAttributes({ mapTypeControl: check })}
              />
              <ToggleControl
                label={__("Zoom Controls")}
                checked={zoomControl}
                onChange={check => setAttributes({ zoomControl: check })}
              />
              <ToggleControl
                label={__("Street View Control")}
                checked={streetViewControl}
                onChange={check => setAttributes({ streetViewControl: check })}
              />

              <ToggleControl
                label={__("Full Screen Control")}
                checked={fullscreenControl}
                onChange={check => setAttributes({ fullscreenControl: check })}
              />
              <ToggleControl
                label={__("Scroll Wheel Zoom")}
                checked={scrollwheel}
                onChange={check => setAttributes({ scrollwheel: check })}
              />
            </PanelBody>
            <PanelBody
              title={__("Map Style")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <TextareaControl
                label={__("Maps Style")}
                value={mapStyle}
                help={[
                  __("Get your custom styling from"),
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
          </InspectorControls>
        ),
        <div
          className={`${className}__wrap`}
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
    },
    deprecated: [
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
}
