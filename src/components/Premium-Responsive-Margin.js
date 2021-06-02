
import PremiumMargin from './premium-margin';

const {
    Dashicon,
    TabPanel,
} = wp.components;

function PremiumResponsiveMargin(props) {
    const {
        directions,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        marginTopTablet,
        marginRightTablet,
        marginBottomTablet,
        marginLeftTablet,
        marginTopMobile,
        marginRightMobile,
        marginBottomMobile,
        marginLeftMobile,
        selectedUnit,
        showUnits,
        onChangeMarSizeUnit,
    } = props;
    return (
        < TabPanel className="premium-size-type-field-tabs" activeClass="active-tab"
            tabs={[
                {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className: "premium-desktop-tab premium-responsive-tabs",
                },
                {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className: "premium-tablet-tab premium-responsive-tabs",
                },
                {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className: "premium-mobile-tab premium-responsive-tabs",
                },
            ]}>
            {(tab) => {
                let tabout;
                if ("desktop" === tab.name) {
                    tabout = (
                        <PremiumMargin
                            directions={directions}
                            marginTop={marginTop}
                            marginRight={marginRight}
                            marginBottom={marginBottom}
                            marginLeft={marginLeft}
                            onChangeMarTop={(marginTop) => props.onChangeMarginTop("desktop", marginTop)
                            }
                            onChangeMarRight={(marginRight) => props.onChangeMarginRight("desktop", marginRight)
                            }
                            onChangeMarBottom={(marginBottom) => props.onChangeMarginBottom("desktop", marginBottom)
                            }
                            onChangeMarLeft={(marginLeft) => props.onChangeMarginLeft("desktop", marginLeft)
                            }
                            showUnits={showUnits}
                            selectedUnit={selectedUnit}
                            onChangeMarSizeUnit={onChangeMarSizeUnit}
                        />
                    )
                } else if ("tablet" === tab.name) {
                    tabout = (
                        <PremiumMargin
                            directions={directions}
                            marginTop={marginTopTablet}
                            marginRight={marginRightTablet}
                            marginBottom={marginBottomTablet}
                            marginLeft={marginLeftTablet}
                            onChangeMarTop={(marginTopTablet) => props.onChangeMarginTop("tablet", marginTopTablet)
                            }
                            onChangeMarRight={(marginRightTablet) => props.onChangeMarginRight("tablet", marginRightTablet)
                            }
                            onChangeMarBottom={(marginBottomTablet) => props.onChangeMarginBottom("tablet", marginBottomTablet)
                            }
                            onChangeMarLeft={(marginLeftTablet) => props.onChangeMarginLeft("tablet", marginLeftTablet)
                            }
                            showUnits={showUnits}
                            selectedUnit={selectedUnit}
                            onChangeMarSizeUnit={onChangeMarSizeUnit}
                        />
                    )
                } else {
                    tabout = (
                        <PremiumMargin
                            directions={directions}
                            marginTop={marginTopMobile}
                            marginRight={marginRightMobile}
                            marginBottom={marginBottomMobile}
                            marginLeft={marginLeftMobile}
                            onChangeMarTop={(marginTopMobile) => props.onChangeMarginTop("mobile", marginTopMobile)
                            }
                            onChangeMarRight={(marginRightMobile) => props.onChangeMarginRight("mobile", marginRightMobile)
                            }
                            onChangeMarBottom={(marginBottomMobile) => props.onChangeMarginBottom("mobile", marginBottomMobile)
                            }
                            onChangeMarLeft={(marginLeftMobile) => props.onChangeMarginLeft("mobile", marginLeftMobile)
                            }
                            showUnits={showUnits}
                            selectedUnit={selectedUnit}
                            onChangeMarSizeUnit={onChangeMarSizeUnit}
                        />
                    )
                }
                return <div>{tabout}</div>
            }

            }
        </ TabPanel>
    )
}
export default PremiumResponsiveMargin;