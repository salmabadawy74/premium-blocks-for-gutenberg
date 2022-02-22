import PremiumPadding from './premium-padding';
import PremiumSizeUnits from "./premium-size-units";
const { __ } = wp.i18n;

const { useSelect, useDispatch } = wp.data;
const { useState } = wp.element;
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
    const [deviceType, setDeviceType] = useState('Desktop');
    let customSetPreviewDeviceType = (device) => {
        setDeviceType(device);
    };
    if (wp.data.select('core/edit-post')) {
        const theDevice = useSelect((select) => {
            const {
                __experimentalGetPreviewDeviceType = null,
            } = select('core/edit-post');
            return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : 'Desktop';
        }, []);
        if (theDevice !== deviceType) {
            setDeviceType(theDevice);
        }
        const {
            __experimentalSetPreviewDeviceType = null,
        } = useDispatch('core/edit-post');
        customSetPreviewDeviceType = (device) => {
            __experimentalSetPreviewDeviceType(device);
            setDeviceType(device);
        };
    }
    const devices = ['Desktop', 'Tablet', 'Mobile'];
    const output = {};
    output.Mobile = (
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
            showUnits={false}
            selectedUnit={selectedUnit}
            onChangePadSizeUnit={onChangePadSizeUnit}
        />
    );
    output.Tablet = (
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
            showUnits={false}
            selectedUnit={selectedUnit}
            onChangePadSizeUnit={onChangePadSizeUnit}
        />
    );
    output.Desktop = (
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
            showUnits={false}
            selectedUnit={selectedUnit}
            onChangePadSizeUnit={onChangePadSizeUnit}
        />
    );
    return (
        <div>
            <header>
                <div className={`premium-slider-title-wrap`}>

                    <span className="customize-control-title premium-control-title">  {__("Padding")}</span>

                    <ul className="premium-responsive-control-btns premium-responsive-slider-btns">
                        {devices.map((device, key) => {
                            const activeClass = device === deviceType ? ' active' : '';
                            const icon = device.toLowerCase() === 'mobile' ? 'smartphone' : device.toLowerCase();
                            return <li key={key} className={`${device}${activeClass}`}>
                                <button type="button" className={`preview-${device}${activeClass}`} data-device={device}>
                                    <i class={`dashicons dashicons-${icon}`} onClick={() => {
                                        const nextDevice = key + 1 > devices.length - 1 ? devices[0] : devices[key + 1];
                                        customSetPreviewDeviceType(nextDevice)
                                            ;
                                    }} ></i>
                                </button>
                            </li>
                        })}
                    </ul>
                </div>
                {showUnits && (
                    <PremiumSizeUnits
                        activeUnit={selectedUnit}
                        onChangeSizeUnit={newValue =>
                            onChangePadSizeUnit(newValue)
                        }
                    />
                )}
            </header>
            { (output[deviceType] ? output[deviceType] : output.Desktop)}
        </div>
    )
}
export default PremiumResponsivePadding