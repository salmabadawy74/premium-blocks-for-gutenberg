import PremiumPadding from './premium-padding';

const {
    TabPanel,
    Dashicon
} = wp.components;

function PremiumResponsivePadding(props) {

    const {
        showUnits,
        setAttributes,
        paddingU,
        onChangePadSizeUnit,
        paddingT,
        paddingR,
        paddingB,
        paddingL,
        onChangePadTop,
        onChangePadRight,
        onChangePadBottom,
        onChangePadLeft,
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

    return (
        <TabPanel className="premium-size-type-field-tabs" activeClass="active-tab"
            tabs={
                [
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
                if ("mobile" === tab.neme) {
                    tabout = (
                        <PremiumPadding
                            paddingTop={20}
                            paddingRight={paddingR}
                            paddingBottom={paddingB}
                            paddingLeft={paddingL}
                            onChangePadTop={alert("OK")}

                            onChangePadRight={(newValue) => setAttributes({ paddingR: newValue })
                            }
                            onChangePadBottom={(newValue) => setAttributes({ paddingB: newValue })
                            }
                            onChangePadLeft={(newValue) => setAttributes({ paddingL: newValue })
                            }
                            showUnits={showUnits}
                            selectedUnit={selectedUnit}
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
                            onChangePadTop={(newValue) => setAttributes({ paddingTTablet: newValue })
                            }
                            onChangePadRight={(newValue) => setAttributes({ paddingRTablet: newValue })
                            }
                            onChangePadBottom={(newValue) => setAttributes({ paddingBTablet: newValue })
                            }
                            onChangePadLeft={(newValue) => setAttributes({ paddingLTablet: newValue })
                            }
                            showUnits={showUnits}
                            selectedUnit={paddingU}
                            onChangePadSizeUnit={onChangePadSizeUnit}
                        />
                    )
                } else {
                    tabout = (
                        <PremiumPadding
                            paddingTop={paddingTMobile}
                            paddingRight={paddingRMobile}
                            paddingBottom={paddingBMobile}
                            paddingLeft={paddingLMobile}
                            onChangePadTop={(newValue) => setAttributes({ paddingTMobile: newValue })
                            }
                            onChangePadRight={(newValue) => setAttributes({ paddingRMobile: newValue })
                            }
                            onChangePadBottom={(newValue) => setAttributes({ paddingBMobile: newValue })
                            }
                            onChangePadLeft={(newValue) => setAttributes({ paddingLMobile: newValue })
                            }
                            showUnits={showUnits}
                            selectedUnit={paddingU}
                            onChangePadSizeUnit={onChangePadSizeUnit}
                        />
                    )
                }
                return <div>{tabout}</div>
            }

            }

        </TabPanel>
    )
}
export default PremiumResponsivePadding