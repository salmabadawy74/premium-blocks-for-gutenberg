import PremiumPadding from './premium-padding';

const {
    TabPanel,
    Dashicon
} = wp.components;

function PremiumResponsivePadding(props) {

    const {
        showUnits,
        selectedUnit,
        onChangePadSizeUnit,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        paddingTopTablet,
        paddingRightTablet,
        paddingBottomTablet,
        paddingLeftTablet,
        paddingTopMobile,
        paddingRightMobile,
        paddingBottomMobile,
        paddingLeftMobile,

    } = props;

    return (
        <TabPanel
            className="premium-size-type-field-tabs"
            activeClass="active-tab"
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
            ]}
        >
            {(tab) => {
                let tabout;
                if ("desktop" === tab.name) {
                    tabout = (
                        <PremiumPadding
                            paddingTop={paddingTop}
                            paddingRight={paddingRight}
                            paddingBottom={paddingBottom}
                            paddingLeft={paddingLeft}
                            onChangePadTop={(paddingTop) =>
                                props.onChangePaddingTop("desktop", paddingTop)
                            }
                            onChangePadRight={(paddingRight) =>
                                props.onChangePaddingRight("desktop", paddingRight)
                            }
                            onChangePadBottom={(paddingBottom) =>
                                props.onChangePaddingBottom("desktop", paddingBottom)
                            }
                            onChangePadLeft={(paddingLeft) =>
                                props.onChangePaddingLeft("desktop", paddingLeft)
                            }
                            showUnits={showUnits}
                            selectedUnit={selectedUnit}
                            onChangePadSizeUnit={onChangePadSizeUnit}
                        />
                    )
                } else if ("tablet" === tab.name) {
                    tabout = (
                        <PremiumPadding
                            paddingTop={paddingTopTablet}
                            paddingRight={paddingRightTablet}
                            paddingBottom={paddingBottomTablet}
                            paddingLeft={paddingLeftTablet}
                            onChangePadTop={(paddingTopTablet) =>
                                props.onChangePaddingTop("tablet", paddingTopTablet)
                            }
                            onChangePadRight={(paddingRightTablet) =>
                                props.onChangePaddingRight("tablet", paddingRightTablet)
                            }
                            onChangePadBottom={(paddingBottomTablet) =>
                                props.onChangePaddingBottom("tablet", paddingBottomTablet)
                            }
                            onChangePadLeft={(paddingLeftTablet) =>
                                props.onChangePaddingLeft("tablet", paddingLeftTablet)
                            }
                            showUnits={showUnits}
                            selectedUnit={selectedUnit}
                            onChangePadSizeUnit={onChangePadSizeUnit}
                        />
                    )
                } else if ("mobile" === tab.name) {
                    tabout = (

                        <PremiumPadding
                            paddingTop={paddingTopMobile}
                            paddingRight={paddingRightMobile}
                            paddingBottom={paddingBottomMobile}
                            paddingLeft={paddingLeftMobile}
                            onChangePadTop={(paddingTopMobile) =>
                                props.onChangePaddingTop("mobile", paddingTopMobile)
                            }
                            onChangePadRight={(paddingRightMobile) =>
                                props.onChangePaddingRight("mobile", paddingRightMobile)
                            }
                            onChangePadBottom={(paddingBottomMobile) =>
                                props.onChangePaddingBottom("mobile", paddingBottomMobile)
                            }
                            onChangePadLeft={(paddingLeftMobile) =>
                                props.onChangePaddingLeft("mobile", paddingLeftMobile)
                            }
                            showUnits={showUnits}
                            selectedUnit={selectedUnit}
                            onChangePadSizeUnit={onChangePadSizeUnit}
                        />
                    )
                }
                return <div>{tabout}</div>;
            }}

        </TabPanel>
    )
}
export default PremiumResponsivePadding