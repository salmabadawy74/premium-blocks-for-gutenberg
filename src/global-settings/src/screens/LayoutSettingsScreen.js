import { __ } from '@wordpress/i18n';
import ScreenHeader from "../components/header"
import { useContext } from "@wordpress/element";
import SettingsContext from '../store/settings-store';
import ResponsiveSingleRangeControl from '../../../components/RangeControl/single-range-control';

const LayoutSettingsScreen = props => {
    const { layoutSettings, setLayoutSettings } = useContext(SettingsContext);
    const changeHandler = (element, value) => {
        const updatedLayoutSettings = { ...layoutSettings };
        updatedLayoutSettings[element] = value;
        setLayoutSettings(updatedLayoutSettings);
    }
    return <>
        <ScreenHeader
            title={__('Layout Settings', "premium-blocks-for-gutenberg")}
        />
        <div className='premium-layout-screen'>
        <p>{__('Control the space between Gutenberg blocks. The default value is 20px.', "premium-blocks-for-gutenberg")}</p>
            <ResponsiveSingleRangeControl defaultValue={20} label={__('Block Spacing', "premium-blocks-for-gutenberg")} value={layoutSettings?.block_spacing} onChange={(value => changeHandler('block_spacing', value))} min={1} max={200} units={['px']} />
        </div>
        <div className='premium-layout-screen'>
            <p>{__('Manage container default width and devices breakpoints.', "premium-blocks-for-gutenberg")}</p>
            <ResponsiveSingleRangeControl defaultValue={1200} label={__('Container Max Width', "premium-blocks-for-gutenberg")} value={layoutSettings?.container_width} onChange={(value => changeHandler('container_width', value))} min={1} max={4000} units={['px']} />
            <ResponsiveSingleRangeControl defaultValue={1024} label={__('Tablet Breakpoint', "premium-blocks-for-gutenberg")} value={layoutSettings?.tablet_breakpoint} onChange={(value => changeHandler('tablet_breakpoint', value))} min={1} max={2000} units={['px']} />
            <ResponsiveSingleRangeControl defaultValue={767} label={__('Mobile Breakpoint', "premium-blocks-for-gutenberg")} value={layoutSettings?.mobile_breakpoint} onChange={(value => changeHandler('mobile_breakpoint', value))} min={1} max={2000} units={['px']} />
        </div>
    </>
}

export default LayoutSettingsScreen