
const { __ } = wp.i18n;
const {
    PanelBody,
    ToggleControl,
} = wp.components;
function PremiumResponsiveTabs(props) {

    const {
        onChangeDesktop = () => { },
        onChangeTablet = () => { },
        onChangeMobile = () => { },
        Desktop,
        Tablet,
        Mobile
    } = props;

    return (
        <PanelBody
            title={__("Responsive")}
            className="premium-panel-body"
            initialOpen={true}
        >
            <ToggleControl
                label={__('Hide in Desktop')}
                checked={Desktop}
                onChange={onChangeDesktop}
            />
            <ToggleControl
                label={__('Hide in Tablet')}
                checked={Tablet}
                onChange={onChangeTablet}
            />
            <ToggleControl
                label={__('Hide in Mobile')}
                checked={Mobile}
                onChange={onChangeMobile}
            />
        </PanelBody>
    )
}
export default PremiumResponsiveTabs;