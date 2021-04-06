
import PremiumMargin from './premium-margin';

const {

    Dashicon,
    TabPanel,

} = wp.components;

function PremiumResponsiveMargin(props) {
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
                if ("mobile" === tab.neme) {
                    tabout = (
                        <PremiumMargin
                            directions={props.directions}
                            marginTop={props.marginTop}
                            marginRight={props.marginRight}
                            marginBottom={props.marginBottom}
                            marginLeft={props.marginLeft}
                            onChangeMarTop={props.onChangeMarTop
                            }
                            onChangeMarRight={props.onChangeMarRight
                            }
                            onChangeMarBottom={props.onChangeMarBottom
                            }
                            onChangeMarLeft={props.onChangeMarLeft
                            }
                        />
                    )
                } else if ("tablet" === tab.name) {
                    tabout = (
                        <PremiumMargin
                            directions={props.directions}
                            marginTop={props.marginTopTable}
                            marginRight={props.marginRightTablet}
                            marginBottom={props.marginBottomTablet}
                            marginLeft={props.marginLeftTablet}
                            onChangeMarTop={props.onChangeMarTopTablet
                            }
                            onChangeMarRight={props.onChangeMarRightTablet
                            }
                            onChangeMarBottom={props.onChangeMarBottomTablet
                            }
                            onChangeMarLeft={props.onChangeMarLeftTablet
                            }
                        />
                    )
                } else {
                    tabout = (
                        <PremiumMargin
                            directions={props.directions}
                            marginTop={props.marginTopTableMobile}
                            marginRight={props.marginRightTabletMobile}
                            marginBottom={props.marginBottomTabletMobile}
                            marginLeft={props.marginLeftTabletMobile}
                            onChangeMarTop={props.onChangeMarTopTabletMobile
                            }
                            onChangeMarRight={props.onChangeMarRightTabletMobile
                            }
                            onChangeMarBottom={props.onChangeMarBottomTabletMobile
                            }
                            onChangeMarLeft={props.onChangeMarLeftTabletMobile
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

