import React from 'react'
const { useSelect, useDispatch } = wp.data;

function Responsive(props) {
    console.log(wp.customize);
    let previewDevice = wp.customize?.previewedDevice ? wp.customize.previewedDevice.get() : wp.data &&
        wp.data.select &&
        wp.data.select('core/edit-post') &&
        wp.data.select('core/edit-post').__experimentalGetPreviewDeviceType ? wp.data
            .select('core/edit-post')
            .__experimentalGetPreviewDeviceType() : 'Desktop';

    let customSetPreviewDeviceType = (device) => {
        props.onChange(device);
    };
    if (wp.data.select('core/edit-post')) {
        const theDevice = useSelect((select) => {
            const {
                __experimentalGetPreviewDeviceType = null,
            } = select('core/edit-post');
            return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : 'Desktop';
        }, []);
        if (theDevice !== props.deviceType) {
            props.onChange(theDevice);
        }

        const {
            __experimentalSetPreviewDeviceType = null,
        } = useDispatch('core/edit-post');
        customSetPreviewDeviceType = (device) => {
            __experimentalSetPreviewDeviceType(device);
            props.onChange(device);
        };
    }

    return (
        <ul className="premium-blocks-device">
            <button
                type="button"
                className={`premium-blocks-device-desktop ${previewDevice === "Desktop" ? "active" : ''}`}
                onClick={() => customSetPreviewDeviceType("Desktop")} >
                <svg class="fa-desktop" aria-hidden="true" focusable="false" data-prefix="far" data-icon="desktop" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M528 0H48C21.5 0 0 21.5 0 48v288c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-6 336H54c-3.3 0-6-2.7-6-6V54c0-3.3 2.7-6 6-6h468c3.3 0 6 2.7 6 6v276c0 3.3-2.7 6-6 6zm-42 152c0 13.3-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h98.7l18.6-55.8c1.6-4.9 6.2-8.2 11.4-8.2h78.7c5.2 0 9.8 3.3 11.4 8.2l18.6 55.8H456c13.3 0 24 10.7 24 24z"></path></svg>
            </button>
            <button type="button" className={`premium-blocks-device-tablet ${previewDevice === "Tablet" ? "active" : ''}`} onClick={() => customSetPreviewDeviceType("Tablet")} >
                <svg class="fa-tablet-alt" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tablet-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM224 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm176-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h328c6.6 0 12 5.4 12 12v312z"></path></svg>
            </button>
            <button type="button" className={`premium-blocks-device-mobile ${previewDevice === "Mobile" ? "active" : ''}`} onClick={() => customSetPreviewDeviceType("Mobile")} >
                <svg class="fa-mobile-alt" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mobile-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg>
            </button>



        </ul>
    )
}

export default Responsive