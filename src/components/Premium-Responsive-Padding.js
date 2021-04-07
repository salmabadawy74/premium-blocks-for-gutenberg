import PremiumPadding from './premium-padding';

const {
    TabPanel,
    Dashicon
} = wp.components;

function PremiumResponsivePadding(props) {
    const {
        showUnits,
        paddingU,
        onChangePadSizeUnit,
        paddingT,
        paddingR,
        paddingB,
        paddingL,
        onChangePadTop = () => { },
        onChangePadRight = () => { },
        onChangePadBottom = () => { },
        onChangePadLeft = () => { },
        paddingTTablet,
        paddingRTablet,
        paddingBTablet,
        paddingLTablet,
        paddingTMobile,
        paddingRMobile,
        paddingBMobile,
        paddingLMobile,
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
                            paddingTop={paddingT}
                            paddingRight={paddingR}
                            paddingBottom={paddingB}
                            paddingLeft={paddingL}
                            onChangePadTop={() => onChangePadTop(tab.name)
                            }
                            onChangePadRight={() => onChangePadRight(tab.name)
                            }
                            onChangePadBottom={() => onChangePadBottom(tab.name)
                            }
                            onChangePadLeft={() => onChangePadLeft(tab.name)
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
                            onChangePadTop={() => onChangePadTop(tab.name)
                            }
                            onChangePadRight={() => onChangePadRight(tab.name)
                            }
                            onChangePadBottom={() => onChangePadBottom(tab.name)
                            }
                            onChangePadLeft={() => onChangePadLeft(tab.name)
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
                            onChangePadTop={() => onChangePadTop(tab.name)
                            }
                            onChangePadRight={() => onChangePadRight(tab.name)
                            }
                            onChangePadBottom={() => onChangePadBottom(tab.name)
                            }
                            onChangePadLeft={() => onChangePadLeft(tab.name)
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