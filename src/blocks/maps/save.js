import { generateCss, filterJsCss } from "../../components/HelperFunction";

const className = "premium-maps";

export default function save(props) {
    const {
        blockId,
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
        descColor,
        hideDesktop,
        hideTablet,
        hideMobile,
        titleTypography,
        descriptionTypography,
        mapBorder,
        mapBoxShadow,
    } = props.attributes;

    return (
        <div className={`${className}__wrap ${blockId} ${hideDesktop || ''} ${hideTablet || ''} ${hideMobile || ''}`} style={filterJsCss({
            borderStyle: mapBorder?.borderType,
            borderColor: mapBorder?.borderColor,
            boxShadow: `${mapBoxShadow.horizontal}px ${mapBoxShadow.vertical}px ${mapBoxShadow.blur}px ${mapBoxShadow.color} ${mapBoxShadow.position}`,
        })}>
            <div className="map-container" style={filterJsCss({
                height: height + "px"
            })}>
                <div className={`${className}__marker`}>
                    <div
                        className={`${className}__info`}
                    >
                        {markerTitle && (
                            <h3
                                className={`${className}__title`}
                                style={filterJsCss({
                                    color: titleColor,
                                    fontStyle: titleTypography?.fontStyle,
                                    fontFamily: titleTypography?.fontFamily,
                                    fontWeight: titleTypography?.fontWeight,
                                    letterSpacing: titleTypography?.letterSpacing,
                                    textDecoration: titleTypography?.textDecoration,
                                    textTransform: titleTypography?.textTransform,
                                    lineHeight: `${titleTypography?.lineHeight}px`,
                                })}
                            >
                                {markerTitle}
                            </h3>
                        )}
                        {markerDesc && (
                            <div
                                className={`${className}__desc`}
                                style={filterJsCss({
                                    color: descColor,
                                    fontStyle: descriptionTypography?.fontStyle,
                                    fontFamily: descriptionTypography?.fontFamily,
                                    fontWeight: descriptionTypography?.fontWeight,
                                    letterSpacing: descriptionTypography?.letterSpacing,
                                    textDecoration: descriptionTypography?.textDecoration,
                                    textTransform: descriptionTypography?.textTransform,
                                    lineHeight: `${descriptionTypography?.lineHeight}px`,
                                })}
                            >
                                {markerDesc}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <script>
                {`window.addEventListener('load',function(){
                if( typeof google === 'undefined' ) return;
                let mapElem = document.querySelector('.${blockId} .map-container');
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