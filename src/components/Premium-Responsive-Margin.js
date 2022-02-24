
import PremiumMargin from './premium-margin';

const {
    Dashicon,
    TabPanel,
} = wp.components;
const { useSelect, useDispatch } = wp.data;
const { useState } = wp.element;
const { __ } = wp.i18n;

function PremiumResponsiveMargin(props) {
    const {
        directions,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        marginTopTablet,
        marginRightTablet,
        marginBottomTablet,
        marginLeftTablet,
        marginTopMobile,
        marginRightMobile,
        marginBottomMobile,
        marginLeftMobile,
        selectedUnit,
        showUnits,
        onChangeMarSizeUnit,
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
        <PremiumMargin
            directions={directions}
            marginTop={marginTopMobile}
            marginRight={marginRightMobile}
            marginBottom={marginBottomMobile}
            marginLeft={marginLeftMobile}
            onChangeMarTop={(marginTopMobile) => props.onChangeMarginTop("mobile", marginTopMobile)
            }
            onChangeMarRight={(marginRightMobile) => props.onChangeMarginRight("mobile", marginRightMobile)
            }
            onChangeMarBottom={(marginBottomMobile) => props.onChangeMarginBottom("mobile", marginBottomMobile)
            }
            onChangeMarLeft={(marginLeftMobile) => props.onChangeMarginLeft("mobile", marginLeftMobile)
            }
            showUnits={showUnits}
            selectedUnit={selectedUnit}
            onChangeMarSizeUnit={onChangeMarSizeUnit}
        />
    )
    output.Tablet = (
        <PremiumMargin
            directions={directions}
            marginTop={marginTopTablet}
            marginRight={marginRightTablet}
            marginBottom={marginBottomTablet}
            marginLeft={marginLeftTablet}
            onChangeMarTop={(marginTopTablet) => props.onChangeMarginTop("tablet", marginTopTablet)
            }
            onChangeMarRight={(marginRightTablet) => props.onChangeMarginRight("tablet", marginRightTablet)
            }
            onChangeMarBottom={(marginBottomTablet) => props.onChangeMarginBottom("tablet", marginBottomTablet)
            }
            onChangeMarLeft={(marginLeftTablet) => props.onChangeMarginLeft("tablet", marginLeftTablet)
            }
            showUnits={showUnits}
            selectedUnit={selectedUnit}
            onChangeMarSizeUnit={onChangeMarSizeUnit}
        />
    )
    output.Desktop = (
        <PremiumMargin
            directions={directions}
            marginTop={marginTop}
            marginRight={marginRight}
            marginBottom={marginBottom}
            marginLeft={marginLeft}
            onChangeMarTop={(marginTop) => props.onChangeMarginTop("desktop", marginTop)
            }
            onChangeMarRight={(marginRight) => props.onChangeMarginRight("desktop", marginRight)
            }
            onChangeMarBottom={(marginBottom) => props.onChangeMarginBottom("desktop", marginBottom)
            }
            onChangeMarLeft={(marginLeft) => props.onChangeMarginLeft("desktop", marginLeft)
            }
            showUnits={showUnits}
            selectedUnit={selectedUnit}
            onChangeMarSizeUnit={onChangeMarSizeUnit}
        />
    )
    return (
        <div>
            <header>
                <div className={`premium-slider-title-wrap`}>
                    <span className="customize-control-title premium-control-title">  {__("Margin")}</span>
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
                            onChangeMarSizeUnit(newValue)
                        }
                    />
                )}
            </header>
            { (output[deviceType] ? output[deviceType] : output.Desktop)}
        </div>
    )
}
export default PremiumResponsiveMargin;