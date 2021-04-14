import PremiumPadding from './premium-padding';

const {
    TabPanel,
    Dashicon
} = wp.components;

function PremiumResponsivePadding(props) {

    const {

        selectedUnit,
        showUnits,

        paddingU,
        onChangePadSizeUnit,
        paddingT,
        paddingR,
        paddingB,
        paddingL,
        paddingTTablet,
        paddingRTablet,
        paddingBTablet,
        paddingLTablet,
        onChangePadTopTablet,
        onChangePadRightTablet,
        onChangePadBottomTablet,
        onChangePadLeftTablet,
        paddingTMobile,
        paddingRMobile,
        paddingBMobile,
        paddingLMobile,
        onChangePadTopMobile,
        onChangePadBottomMobile,
        onChangePadRightMobile,
        onChangePadLeftMobile
    } = props;

    console.log(props);
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
                            paddingTop={paddingT}
                            paddingRight={paddingR}
                            paddingBottom={paddingB}
                            paddingLeft={paddingL}
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
                            selectedUnit={paddingU || "px"}
                            onChangePadSizeUnit={onChangePadSizeUnit}
                        />
                    )
                } else if ("tablet" === tab.name) {
                    tabout = (
                        <PremiumPadding
                            paddingTop={paddingTTablet}
                            paddingRight={paddingRTablet}
                            paddingBottom={paddingBTablet}
                            paddingLeft={paddingLTablet}
                            onChangePadTop={(paddingTop) =>
                                props.onChangePaddingTop("tablet", paddingTop)
                            }
                            onChangePadRight={(paddingRight) =>
                                props.onChangePaddingRight("tablet", paddingRight)
                            }
                            onChangePadBottom={(paddingBottom) =>
                                props.onChangePaddingBottom("tablet", paddingBottom)
                            }
                            onChangePadLeft={(paddingLeft) =>
                                props.onChangePaddingLeft("tablet", paddingLeft)
                            }
                            showUnits={showUnits}
                            selectedUnit={paddingU || 'px'}
                            onChangePadSizeUnit={onChangePadSizeUnit}
                        />
                    )
                } else if ("mobile" === tab.name) {
                    tabout = (

                        <PremiumPadding
                            paddingTop={paddingTMobile}
                            paddingRight={paddingRMobile}
                            paddingBottom={paddingBMobile}
                            paddingLeft={paddingLMobile}
                            onChangePadTop={(paddingTop) =>
                                props.onChangePaddingTop("mobile", paddingTop)
                            }
                            onChangePadRight={(paddingRight) =>
                                props.onChangePaddingRight("mobile", paddingRight)
                            }
                            onChangePadBottom={(paddingBottom) =>
                                props.onChangePaddingBottom("mobile", paddingBottom)
                            }
                            onChangePadLeft={(paddingLeft) =>
                                props.onChangePaddingLeft("mobile", paddingLeft)
                            }
                            showUnits={showUnits}
                            selectedUnit={selectedUnit || 'px'}
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