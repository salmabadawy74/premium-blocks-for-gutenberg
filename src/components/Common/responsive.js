import React, { Component } from 'react'
const { __ } = wp.i18n;
// import kmtEvents from './events';
const { Fragment } = wp.element;
class Responsive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'desktop'
        };
        // this.linkResponsiveButtons();
    }
    render() {
        const { label } = this.props;
        const devices = ['desktop', 'tablet', 'mobile'];
        let previewDevice = wp.customize ? wp.customize.previewedDevice.get() : wp.data &&
            wp.data.select &&
            wp.data.select('core/edit-post') &&
            wp.data.select('core/edit-post').__experimentalGetPreviewDeviceType ? wp.data
                .select('core/edit-post')
                .__experimentalGetPreviewDeviceType()
                .toLowerCase() : 'desktop';
        return (
            <Fragment>
                {label ? <span className="customize-control-title kmt-control-title">{label}</span> : null}
                <ul className="kmt-responsive-control-btns kmt-responsive-slider-btns">
                    {devices.map((device, key) => {
                        const activeClass = device === previewDevice ? ' active' : '';
                        const icon = device === 'mobile' ? 'smartphone' : device;
                        return <li className={`${device}${activeClass}`}>
                            <button type="button" className={`preview-${device}${activeClass}`} data-device={device}>
                                <i class={`dashicons dashicons-${icon}`} onClick={() => {
                                    const nextDevice = key + 1 > devices.length - 1 ? devices[0] : devices[key + 1];
                                    this.changeViewType(nextDevice);
                                }} ></i>
                            </button>
                        </li>
                    })}
                </ul>
                {this.props.children}
            </Fragment>
        )
    }
    changeViewType(device) {
        this.setState({ view: device });
        wp.customize && wp.customize.previewedDevice(device);
        if (
            wp.data &&
            wp.data.dispatch &&
            wp.data.dispatch('core/edit-post') &&
            wp.data.dispatch('core/edit-post')
                .__experimentalSetPreviewDeviceType
        ) {
            wp.data
                .dispatch('core/edit-post')
                .__experimentalSetPreviewDeviceType(
                    device.replace(/\w/, (c) => c.toUpperCase())
                )
        }
        this.props.onChange(device);
    }
    // linkResponsiveButtons() {
    //     let self = this;
    //     kmtEvents.on('KemetChangedRepsonsivePreview', function (e) {
    //         self.changeViewType(e.detail);
    //     })
    // }
}

export default Responsive;