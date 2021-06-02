import PremiumResponsive from "./premium-responsive"

const { __ } = wp.i18n;
const {
    Dashicon,
    TabPanel,
    RangeControl
} = wp.components;

export default function PremiumRangeResponsive(props) {
    const {
        rangeMobile, rangeTablet, range,
        onChangeDesktop = () => { },
        onChangeTablet = () => { },
        onChangeMobile = () => { }, } = props;

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
                        <RangeControl
                            label={rangeMobile.label}
                            value={rangeMobile.value}
                            onChange={onChangeMobile}
                            min={props.min || 0}
                            max={props.max || 200}
                            initalPosition={props.initalPosition || 30}
                            {...props}
                        />
                    )
                } else if ("tablet" === tab.name) {
                    tabout = (
                        <RangeControl
                            label={rangeTablet.label}
                            value={rangeTablet.value}
                            onChange={onChangeTablet}
                            min={props.min || 0}
                            max={props.max || 200}
                            initalPosition={props.initalPosition || 30}
                            {...props}
                        />
                    )
                } else {
                    tabout = (
                        <RangeControl
                            label={range.label}
                            value={range.value}
                            onChange={onChangeDesktop}
                            min={props.min || 0}
                            max={props.max || 200}
                            initalPosition={props.initalPosition || 30}
                            {...props}
                        />
                    )
                }
                return <div>{tabout}</div>
            }

            }
        </ TabPanel>
    )

}