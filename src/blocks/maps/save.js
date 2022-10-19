import { filterJsCss } from '@pbg/helpers';
import classnames from "classnames";
const { useBlockProps } = wp.blockEditor;

const className = "premium-maps__wrap";

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
        <div
            {...useBlockProps.save({
                className: classnames(
                    className,
                    `premium-maps ${blockId}`,
                    {
                        " premium-desktop-hidden": hideDesktop,
                        " premium-tablet-hidden": hideTablet,
                        " premium-mobile-hidden": hideMobile,
                    }
                ),
            })}
            style={filterJsCss({
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
                                    textDecoration: titleTypography?.textDecoration,
                                    textTransform: titleTypography?.textTransform,
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
                                    textDecoration: descriptionTypography?.textDecoration,
                                    textTransform: descriptionTypography?.textTransform,
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
                let mapElem = document.getElementsByClassName('${blockId}')[0];
                mapElem = mapElem.getElementsByClassName('map-container')[0];
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