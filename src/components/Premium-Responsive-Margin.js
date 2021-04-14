
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
                if ("mobile" === tab.name) {
                    tabout = (
                        <PremiumMargin
                            directions={directions}
                            marginTop={marginTop}
                            marginRight={marginRight}
                            marginBottom={marginBottom}
                            marginLeft={marginLeft}
                            onChangeMarTop={(marginTop) => props.onChangeMarginTop("mobile", marginTop)
                            }
                            onChangeMarRight={(marginRight) => props.onChangeMarginRight("mobile", marginRight)
                            }
                            onChangeMarBottom={(marginBottom) => props.onChangeMarginBottom("mobile", marginBottom)
                            }
                            onChangeMarLeft={(marginLeft) => props.onChangeMarginLeft("mobile", marginLeft)
                            }
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
                            onChangeMarTop={(marginTop) => props.onChangeMarginTop("tablet", marginTop)
                            }
                            onChangeMarRight={(marginRight) => props.onChangeMarginRight("tablet", marginRight)
                            }
                            onChangeMarBottom={(marginBottom) => props.onChangeMarginBottom("tablet", marginBottom)
                            }
                            onChangeMarLeft={(marginLeft) => props.onChangeMarginLeft("tablet", marginLeft)
                            }
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
                            onChangeMarTop={(marginTop) => props.onChangeMarginTop("desktop", marginTop)
                            }
                            onChangeMarRight={(marginRight) => props.onChangeMarginRight("desktop", marginRight)
                            }
                            onChangeMarBottom={(marginBottom) => props.onChangeMarginBottom("desktop", marginBottom)
                            }
                            onChangeMarLeft={(marginLeft) => props.onChangeMarginLeft("desktop", marginLeft)
                            }
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

