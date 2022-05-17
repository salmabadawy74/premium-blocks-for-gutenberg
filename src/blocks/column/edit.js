import SpacingComponent from "../../components/premium-responsive-spacing";
import PremiumShadow from "../../components/PremiumShadow";
import PremiumBackgroundControl from '../../components/Premium-Background-Control'
import classnames from "classnames";
import PremiumBorder from "../../components/premium-border";
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';
import Animation from '../../components/Animation'
const { __ } = wp.i18n;
const { PanelBody, ToggleControl, SelectControl, TextControl } = wp.components;
const { Fragment } = wp.element;
const { withSelect } = wp.data
const edit = (props) => {

}
export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(edit)