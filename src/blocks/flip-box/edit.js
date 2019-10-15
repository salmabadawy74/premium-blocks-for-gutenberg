
import PremiumTypo from "../../components/premium-typo";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumPadding from "../../components/premium-padding";
import PremiumMargin from "../../components/premium-margin";
import PremiumSizeUnits from "../../components/premium-size-units";
import { FontAwesomeEnabled } from "../../../assets/js/settings";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/premium-icons-list";

//define for translation
const { __ } = wp.i18n;

const { TextControl, PanelBody, SelectControl , ToggleControl , RangeControl} = wp.components;
const { RichText, InspectorControls, ColorPalette } = wp.editor;

const edit = props => {

    const { isSelected, setAttributes, className } = props;
    const {
        position,
        widthhh,
        height,
        backfaceVisibility,
        frontTitle,
        frontTitleTag,
        frontTitleColor,
        frontDescription,
        frontDescriptionColor,
        frontBackgroundColor,
        backTitle,
        backTitleTag,
        backTitleColor,
        backDescription,
        backDescriptionColor,
        backBackgroundColor,
        backTransform,
        imgWidth,
        imgHeight,
        frontIconType,
        frontIconSelected,
        frontIconCheck,
        frontIconSize,
        frontIconColor,
        frontIconBackground,
        frontIconAlign,
        frontIconPaddingTop,
        frontIconPaddingRight,
        frontIconPaddingBottom,
        frontIconPaddingLeft,
        frontIconMarginTop,
        frontIconMarginRight,
        frontIconMarginBottom,
        frontIconMarginLeft,
        frontTitleCheck,
        frontTitleSize,
        frontTitlelineHeight,
        frontTitleShadowColor,
        frontTitleShadowBlur,
        frontTitleShadowHorizontal,
        frontTitleShadowVertical, 
        frontTitlePaddingTop,
        frontTitlePaddingRight,
        frontTitlePaddingBottom,
        frontTitlePaddingLeft,
        frontTitleMarginTop,
        frontTitleMarginRight,
        frontTitleMarginBottom,
        frontTitleMarginLeft,
        frontDescCheck,
        frontDescSize,
        frontDesclineHeight,
        frontDescShadowColor,
        frontDescShadowBlur,
        frontDescShadowHorizontal,
        frontDescShadowVertical,
        frontDescPaddingTop,
        frontDescPaddingRight,
        frontDescPaddingBottom,
        frontDescPaddingLeft,
        frontDescMarginTop,
        frontDescMarginRight,
        frontDescMarginBottom,
        frontDescMarginLeft,
        pxUnit,
        paddingUnit,
        marginUnit,
        backIconType,
        backIconSelected,
        backIconCheck,
        backIconSize,
        backIconColor,
        backIconBackground,
        backIconAlign,
        backIconPaddingTop,
        backIconPaddingRight,
        backIconPaddingBottom,
        backIconPaddingLeft,
        backIconMarginTop,
        backIconMarginRight,
        backIconMarginBottom,
        backIconMarginLeft,
        backTitleCheck,
        backTitleSize,
        backTitleLineHeight,
        backTitleShadowColor,
        backTitleShadowBlur,
        backTitleShadowHorizontal,
        backTitleShadowVertical, 
        backTitlePaddingTop,
        backTitlePaddingRight,
        backTitlePaddingBottom,
        backTitlePaddingLeft,
        backTitleMarginTop,
        backTitleMarginRight,
        backTitleMarginBottom,
        backTitleMarginLeft,
        backDescCheck,
        backDescSize,
        backDesclineHeight,
        backDescShadowColor,
        backDescShadowBlur,
        backDescShadowHorizontal,
        backDescShadowVertical,
        backDescPaddingTop,
        backDescPaddingRight,
        backDescPaddingBottom,
        backDescPaddingLeft,
        backDescMarginTop,
        backDescMarginRight,
        backDescMarginBottom,
        backDescMarginLeft,

    } = props.attributes;

    const ALIGNS = ["left", "center", "right"];

    return [
        isSelected && (
            <InspectorControls>
                <PanelBody
                     title={__("Front Side")}
                     className="premium-panel-body"
                     initialOpen={false}                 
                >
                    <ColorPalette
                        value={frontBackgroundColor}
                        onChange={newFroBackgroundColor => setAttributes({ frontBackgroundColor: newFroBackgroundColor || "#7c5707" })}
                        allowReset={true}
                    />

                    {/* Front icon options */}

                    <div className="premium-control-toggle">                    
                        <ToggleControl
                            label={__("Icon")}
                            checked={frontIconCheck}
                            onChange={newFroIconCheck => setAttributes({ frontIconCheck: newFroIconCheck })}
                        />   
                    </div>                 
                    {frontIconCheck && (
                        <FontIconPicker
                            icons={iconsList}
                            onChange={newIcon => setAttributes({ frontIconSelected: newIcon || "dashicons dashicons-admin-site" })}
                            value={frontIconSelected}
                            isMulti={false}
                            appendTo="body"
                            noSelectedPlaceholder={__("Select Icon")}
                        />
                    )}
                    {frontIconCheck && (
                        <PremiumSizeUnits
                            onChangeSizeUnit={newValue =>
                            setAttributes({ pxUnit: newValue || "px"})
                            }
                        />
                    )}   
                    {frontIconCheck && (
                        <RangeControl
                            label={__("Size")}
                            value={frontIconSize}
                            onChange={newValue => setAttributes({ frontIconSize: newValue || "50"})}
                            initialPosition={50}
                            allowReset={true}
                        /> 
                    )}
                    {frontIconCheck && (
                        <PanelBody
                            title={__("Front Icon Style")}
                            className="premium-panel-body"
                            initialOpen={false}                  
                        >  
                            <div className="premium-control-toggle">
                                <p><strong>{__("Color")}</strong></p>
                                <ColorPalette
                                    value={frontIconColor}
                                    onChange={newFroIconColor => setAttributes({ frontIconColor: newFroIconColor || "#fff" })}
                                    allowReset={true}
                                />
                            </div>  
                            <div className="premium-control-toggle">
                                <p><strong>{__("Background Color")}</strong></p>
                                <ColorPalette
                                    value={frontIconBackground}
                                    onChange={newFroIconBackground => setAttributes({ frontIconBackground: newFroIconBackground || "transparent" })}
                                    allowReset={true}
                                />
                            </div>   
                            <div className="premium-control-toggle">
                                <PremiumPadding
                                    paddingTop={frontIconPaddingTop}
                                    paddingRight={frontIconPaddingRight}
                                    paddingBottom={frontIconPaddingBottom}
                                    paddingLeft={frontIconPaddingLeft}
                                    onChangePadTop={newfroIconPaddingTop=>
                                    setAttributes({
                                        frontIconPaddingTop: newfroIconPaddingTop || "0"
                                    })
                                    }
                                    onChangePadRight={newfroIconPaddingRight=>
                                    setAttributes({
                                        frontIconPaddingRight: newfroIconPaddingRight || "0"
                                    })
                                    }
                                    onChangePadBottom={newfroIconPaddingBottom =>
                                    setAttributes({
                                        frontIconPaddingBottom: newfroIconPaddingBottom || "0"
                                    })
                                    }
                                    onChangePadLeft={newfroIconPaddingleft=>
                                    setAttributes({
                                        frontIconPaddingLeft: newfroIconPaddingleft || "0"
                                    })
                                    }
                                    showUnits={true}
                                    onChangePadSizeUnit={newvalue =>
                                    setAttributes({ paddingUnit: newvalue || "px" })
                                    }
                                />
                                <PremiumMargin
                                    directions={["top", "right" , "bottom" , "left"]}
                                    marginTop={frontIconMarginTop}
                                    marginRight={frontIconMarginRight}
                                    marginBottom={frontIconMarginBottom}
                                    marginLeft={frontIconMarginLeft}
                                    onChangeMarTop={ newfroIconMarginTop =>
                                    setAttributes({
                                        frontIconMarginTop: newfroIconMarginTop || "0"
                                    })
                                    }
                                    onChangeMarRight={ newfroIconMarginRight=>
                                    setAttributes({
                                        frontIconMarginRight: newfroIconMarginRight || "0"
                                    })
                                    }
                                    onChangeMarBottom={ newfroIconMarginBottom =>
                                    setAttributes({
                                        frontIconMarginBottom: newfroIconMarginBottom || "0"
                                    })
                                    }
                                    onChangeMarLeft={ newfroIconMarginLeft=>
                                    setAttributes({
                                        frontIconMarginLeft: newfroIconMarginLeft || "0"
                                    })
                                    }
                                    showUnits={true}
                                    onChangeMarSizeUnit={newMarginUnit =>
                                    setAttributes({ marginUnit: newMarginUnit || "px"})
                                    }
                                />
                            </div>
                        </PanelBody> 
                    )}                      

                    {/* Front Title options */}

                    <div className="premium-control-toggle">
                        <ToggleControl
                            label={__("Title")}
                            checked={frontTitleCheck}
                            onChange={newFroTitleCheck => setAttributes({ frontTitleCheck: newFroTitleCheck })}
                        />
                    </div>
                    {frontTitleCheck && (
                        <TextControl
                            label={__("Title Text")}
                            value={frontTitle}
                            onChange={newFrontTitle=> setAttributes({ frontTitle: newFrontTitle})}
                        />
                    )}
                    {frontTitleCheck && (
                        <PanelBody
                            title={__("Front Title Style")}
                            className="premium-panel-body"
                            initialOpen={false}                  
                        >
                            <ColorPalette
                                value={frontTitleColor}
                                onChange={newFroTitleColor => setAttributes({ frontTitleColor: newFroTitleColor || "#e3d192"})}
                                allowReset={true}
                            />
                            <PremiumTypo
                                components={["size", "line"]}
                                size= { frontTitleSize }
                                line= { frontTitlelineHeight }
                                onChangeSize= { newfroTitleSize => setAttributes({ frontTitleSize: newfroTitleSize }) }
                                onChangeLine= { newfroTitlelineHeight => setAttributes({ frontTitlelineHeight: newfroTitlelineHeight }) }
                            />
                            <PremiumTextShadow
                                color= { frontTitleShadowColor }
                                blur= { frontTitleShadowBlur }
                                horizontal= { frontTitleShadowHorizontal }
                                vertical= { frontTitleShadowVertical }
                                onChangeColor= { newfroTitleShadowColor => setAttributes({ frontTitleShadowColor : newfroTitleShadowColor.hex || "transparent" }) }
                                onChangeBlur= { newfroTitleShadowBlur=> setAttributes({ frontTitleShadowBlur: newfroTitleShadowBlur || "0"  }) }
                                onChangehHorizontal= { newfroTitleShadowHorizontal => setAttributes({ frontTitleShadowHorizontal : newfroTitleShadowHorizontal || "0"  }) }
                                onChangeVertical= { newfroTitleShadowVertical => setAttributes({ frontTitleShadowVertical : newfroTitleShadowVertical  || "0" }) }
                            />
                            <PremiumPadding
                                paddingTop={frontTitlePaddingTop}
                                paddingRight={frontTitlePaddingRight}
                                paddingBottom={frontTitlePaddingBottom}
                                paddingLeft={frontTitlePaddingLeft}
                                onChangePadTop={ newfroTitlePaddingTop =>
                                setAttributes({
                                    frontTitlePaddingTop: newfroTitlePaddingTop
                                })
                                }
                                onChangePadRight={ newfroTitlePaddingRight=>
                                setAttributes({
                                    frontTitlePaddingRight: newfroTitlePaddingRight
                                })
                                }
                                onChangePadBottom={ newfroTitlePaddingBottom =>
                                setAttributes({
                                    frontTitlePaddingBottom: newfroTitlePaddingBottom
                                })
                                }
                                onChangePadLeft={ newfroTitlePaddingLeft=>
                                setAttributes({
                                    frontTitlePaddingLeft: newfroTitlePaddingLeft
                                })
                                }
                                showUnits={true}
                                onChangePadSizeUnit={newvalue =>
                                setAttributes({ pxUnit: newvalue || "px"})
                                }
                            />
                            <PremiumMargin
                                directions={["top", "right" , "bottom" , "left"]}
                                marginTop={frontTitleMarginTop}
                                marginRight={frontTitleMarginRight}
                                marginBottom={frontTitleMarginBottom}
                                marginLeft={frontTitleMarginLeft}
                                onChangeMarTop={ newfroTitleMarginTop =>
                                setAttributes({
                                    frontTitleMarginTop: newfroTitleMarginTop
                                })
                                }
                                onChangeMarRight={ newfroTitleMarginRight=>
                                setAttributes({
                                    frontTitleMarginRight: newfroTitleMarginRight
                                })
                                }
                                onChangeMarBottom={ newfroTitleMarginBottom =>
                                setAttributes({
                                    frontTitleMarginBottom: newfroTitleMarginBottom
                                })
                                }
                                onChangeMarLeft={ newfroTitleMarginLeft=>
                                setAttributes({
                                    frontTitleMarginLeft: newfroTitleMarginLeft
                                })
                                }
                                showUnits={true}
                                onChangeMarSizeUnit={newMarvalue =>
                                setAttributes({ pxUnit: newMarvalue || "px" })
                                }
                            />
                        </PanelBody>    
                    )}

                    {/* Front Description options */}

                    <div className="premium-control-toggle">
                        <ToggleControl
                            label={__("Description")}
                            checked={frontDescCheck}
                            onChange={newFroDescCheck => setAttributes({ frontDescCheck: newFroDescCheck })}
                        />
                    </div>
                    {frontDescCheck && (
                        <TextControl
                            label={__("Description Text")}
                            value={frontDescription}
                            onChange={newFrontDesc=> setAttributes({ frontDescription: newFrontDesc })}
                        />
                    )}
                    {frontDescCheck && (
                        <PanelBody
                            title={__("Front Description Style")}
                            className="premium-panel-body"
                            initialOpen={false}                  
                        >
                            <ColorPalette
                                value={frontDescriptionColor}
                                onChange={newFroDescColor => setAttributes({ frontDescriptionColor: newFroDescColor || "#ddd"})}
                                allowReset={true}
                            />
                            <PremiumTypo
                                components={["size", "line"]}
                                size= { frontDescSize }
                                line= { frontDesclineHeight }
                                onChangeSize= { newfroDescSize => setAttributes({ frontDescSize: newfroDescSize  }) }
                                onChangeLine= { newfroDesclineHeight => setAttributes({ frontDesclineHeight: newfroDesclineHeight }) }
                            />
                            <PremiumTextShadow
                                color= { frontDescShadowColor }
                                blur= { frontDescShadowBlur }
                                horizontal= { frontDescShadowHorizontal }
                                vertical= { frontDescShadowVertical }
                                onChangeColor= { newfroDescShadowColor => setAttributes({ frontDescShadowColor : newfroDescShadowColor.hex || "transparent" }) }
                                onChangeBlur= { newfroDescShadowBlur=> setAttributes({ frontDescShadowBlur: newfroDescShadowBlur || "0" }) }
                                onChangehHorizontal= { newfroDescShadowHorizontal => setAttributes({ frontDescShadowHorizontal : newfroDescShadowHorizontal || "0"  }) }
                                onChangeVertical= { newfroDescShadowVertical => setAttributes({ frontDescShadowVertical : newfroDescShadowVertical || "0"  }) }
                            />
                            <PremiumPadding
                                paddingTop={frontDescPaddingTop}
                                paddingRight={frontDescPaddingRight}
                                paddingBottom={frontDescPaddingBottom}
                                paddingLeft={frontDescPaddingLeft}
                                onChangePadTop={ newfroDescPaddingTop =>
                                setAttributes({
                                    frontDescPaddingTop: newfroDescPaddingTop
                                })
                                }
                                onChangePadRight={ newfroDescPaddingRight=>
                                setAttributes({
                                    frontDescPaddingRight: newfroDescPaddingRight
                                })
                                }
                                onChangePadBottom={ newfroDescPaddingBottom =>
                                setAttributes({
                                    frontDescPaddingBottom: newfroDescPaddingBottom
                                })
                                }
                                onChangePadLeft={ newfroDescPaddingLeft=>
                                setAttributes({
                                    frontDescPaddingLeft: newfroDescPaddingLeft
                                })
                                }
                                showUnits={true}
                                onChangePadSizeUnit={newvalue =>
                                setAttributes({ pxUnit: newvalue || "px"})
                                }
                            />
                            <PremiumMargin
                                directions={["top", "right" , "bottom" , "left"]}
                                marginTop={frontDescMarginTop}
                                marginRight={frontDescMarginRight}
                                marginBottom={frontDescMarginBottom}
                                marginLeft={frontDescMarginLeft}
                                onChangeMarTop={ newfroDescMarginTop =>
                                setAttributes({
                                    frontDescMarginTop: newfroDescMarginTop
                                })
                                }
                                onChangeMarRight={ newfroDescMarginRight=>
                                setAttributes({
                                    frontDescMarginRight: newfroDescMarginRight
                                })
                                }
                                onChangeMarBottom={ newfroDescMarginBottom =>
                                setAttributes({
                                    frontDescMarginBottom: newfroDescMarginBottom
                                })
                                }
                                onChangeMarLeft={ newfroDescMarginLeft=>
                                setAttributes({
                                    frontDescMarginLeft: newfroDescMarginLeft
                                })
                                }
                                showUnits={true}
                                onChangeMarSizeUnit={newMarvalue =>
                                setAttributes({ pxUnit: newMarvalue || "px"})
                                }
                            />
                        </PanelBody>    
                    )}


                </PanelBody>
                <PanelBody
                     title={__("Back Side")}
                     className="premium-panel-body"
                     initialOpen={false}                  
                >
                    <ColorPalette
                        value={backBackgroundColor}
                        onChange={newbackBackgroundColor => setAttributes({ backBackgroundColor: newbackBackgroundColor || "#ae8686" })}
                        allowReset={true}
                    />

                    {/* Back icon options */}

                    <div className="premium-control-toggle">                    
                        <ToggleControl
                            label={__("Icon")}
                            checked={backIconCheck}
                            onChange={newBackIconCheck => setAttributes({ backIconCheck: newBackIconCheck })}
                        />   
                    </div>                 
                    {backIconCheck && (
                        <FontIconPicker
                            icons={iconsList}
                            onChange={newIcon => setAttributes({ backIconSelected: newIcon || "dashicons dashicons-admin-site"})}
                            value={backIconSelected}
                            isMulti={false}
                            appendTo="body"
                            noSelectedPlaceholder={__("Select Icon")}
                        />
                    )}
                    {backIconCheck && (
                        <PremiumSizeUnits
                            onChangeSizeUnit={newValue =>
                            setAttributes({ pxUnit: newValue || "px"})
                            }
                        />
                    )}   
                    {backIconCheck && (
                        <RangeControl
                            label={__("Size")}
                            value={backIconSize}
                            onChange={newValue => setAttributes({ backIconSize: newValue || "50"})}
                            initialPosition={50}
                            allowReset={true}
                        /> 
                    )}
                    {backIconCheck && (
                        <PanelBody
                            title={__("Back Icon Style")}
                            className="premium-panel-body"
                            initialOpen={false}                  
                        >  
                            <div className="premium-control-toggle">
                                <p><strong>{__("Color")}</strong></p>
                                <ColorPalette
                                    value={backIconColor}
                                    onChange={newBackIconColor => setAttributes({ backIconColor: newBackIconColor || "#fff" })}
                                    allowReset={true}
                                />
                            </div>  
                            <div className="premium-control-toggle">
                                <p><strong>{__("Background Color")}</strong></p>
                                <ColorPalette
                                    value={backIconBackground}
                                    onChange={newBackIconBackground => setAttributes({ backIconBackground: newBackIconBackground || "transparent"})}
                                    allowReset={true}
                                />
                            </div>   
                            <div className="premium-control-toggle">
                                <PremiumPadding
                                    paddingTop={backIconPaddingTop}
                                    paddingRight={backIconPaddingRight}
                                    paddingBottom={backIconPaddingBottom}
                                    paddingLeft={backIconPaddingLeft}
                                    onChangePadTop={newBackIconPaddingTop=>
                                    setAttributes({
                                        backIconPaddingTop: newBackIconPaddingTop || "0"
                                    })
                                    }
                                    onChangePadRight={newBackIconPaddingRight=>
                                    setAttributes({
                                        backIconPaddingRight: newBackIconPaddingRight || "0"
                                    })
                                    }
                                    onChangePadBottom={newBackIconPaddingBottom =>
                                    setAttributes({
                                        backIconPaddingBottom: newBackIconPaddingBottom || "0"
                                    })
                                    }
                                    onChangePadLeft={newBackIconPaddingleft=>
                                    setAttributes({
                                        backIconPaddingLeft: newBackIconPaddingleft || "0"
                                    })
                                    }
                                    showUnits={true}
                                    onChangePadSizeUnit={newvalue =>
                                    setAttributes({ paddingUnit: newvalue || "px"})
                                    }
                                />
                                <PremiumMargin
                                    directions={["top", "right" , "bottom" , "left"]}
                                    marginTop={backIconMarginTop}
                                    marginRight={backIconMarginRight}
                                    marginBottom={backIconMarginBottom}
                                    marginLeft={backIconMarginLeft}
                                    onChangeMarTop={ newBackIconMarginTop =>
                                    setAttributes({
                                        backIconMarginTop: newBackIconMarginTop || "0"
                                    })
                                    }
                                    onChangeMarRight={ newBackIconMarginRight=>
                                    setAttributes({
                                        backIconMarginRight: newBackIconMarginRight || "0"
                                    })
                                    }
                                    onChangeMarBottom={ newBackIconMarginBottom =>
                                    setAttributes({
                                        backIconMarginBottom: newBackIconMarginBottom || "0"
                                    })
                                    }
                                    onChangeMarLeft={ newBackIconMarginLeft=>
                                    setAttributes({
                                        backIconMarginLeft: newBackIconMarginLeft || "0"
                                    })
                                    }
                                    showUnits={true}
                                    onChangeMarSizeUnit={newMarginUnit =>
                                    setAttributes({ marginUnit: newMarginUnit || "px"})
                                    }
                                />
                            </div>
                        </PanelBody> 
                    )}                     

                    {/* Back Title options */}

                    <div className="premium-control-toggle"> 
                        <ToggleControl
                            label={__("Title")}
                            checked={backTitleCheck}
                            onChange={newBackTitleCheck => setAttributes({ backTitleCheck: newBackTitleCheck })}
                        />
                    </div>
                    {backTitleCheck && (
                        <TextControl
                            label={__("Title Text")}
                            value={backTitle}
                            onChange={newBackTitle=> setAttributes({ backTitle: newBackTitle})}
                        />
                    )}
                    {backTitleCheck && (
                        <PanelBody
                            title={__("Back Title Style")}
                            className="premium-panel-body"
                            initialOpen={false}                  
                        >
                            <ColorPalette
                                value={backTitleColor}
                                onChange={newBackTitleColor => setAttributes({ backTitleColor: newBackTitleColor || "#fff"})}
                                allowReset={true}
                            />
                            <PremiumTypo
                                components={["size", "line"]}
                                size= { backTitleSize }
                                line= { backTitleLineHeight }
                                onChangeSize= { newBackTitleSize => setAttributes({ backTitleSize : newBackTitleSize  }) }
                                onChangeLine= { newBackTitleLineHeight => setAttributes({ backTitleLineHeight: newBackTitleLineHeight }) }
                            />
                            <PremiumTextShadow
                                color= { backTitleShadowColor }
                                blur= { backTitleShadowBlur }
                                horizontal= { backTitleShadowHorizontal }
                                vertical= { backTitleShadowVertical }
                                onChangeColor= { newBackTitleShadowColor => setAttributes({ backTitleShadowColor : newBackTitleShadowColor.hex || "transparent" }) }
                                onChangeBlur= { newBackTitleShadowBlur=> setAttributes({ backTitleShadowBlur: newBackTitleShadowBlur || "0" }) }
                                onChangehHorizontal= { newBackTitleShadowHorizontal => setAttributes({ backTitleShadowHorizontal : newBackTitleShadowHorizontal || "0"  }) }
                                onChangeVertical= { newBackTitleShadowVertical => setAttributes({ backTitleShadowVertical : newBackTitleShadowVertical  || "0"  }) }
                            />
                            <PremiumPadding
                                paddingTop={backTitlePaddingTop}
                                paddingRight={backTitlePaddingRight}
                                paddingBottom={backTitlePaddingBottom}
                                paddingLeft={backTitlePaddingLeft}
                                onChangePadTop={ newBackTitlePaddingTop =>
                                setAttributes({
                                    backTitlePaddingTop: newBackTitlePaddingTop
                                })
                                }
                                onChangePadRight={ newBackTitlePaddingRight=>
                                setAttributes({
                                    backTitlePaddingRight: newBackTitlePaddingRight
                                })
                                }
                                onChangePadBottom={ newBackTitlePaddingBottom =>
                                setAttributes({
                                    backTitlePaddingBottom: newBackTitlePaddingBottom
                                })
                                }
                                onChangePadLeft={ newBackTitlePaddingLeft=>
                                setAttributes({
                                    backTitlePaddingLeft: newBackTitlePaddingLeft
                                })
                                }
                                showUnits={true}
                                onChangePadSizeUnit={newvalue =>
                                setAttributes({ pxUnit: newvalue || "px" })
                                }
                            />
                            <PremiumMargin
                                directions={["top", "right" , "bottom" , "left"]}
                                marginTop={backTitleMarginTop}
                                marginRight={backTitleMarginRight}
                                marginBottom={backTitleMarginBottom}
                                marginLeft={backTitleMarginLeft}
                                onChangeMarTop={ newBackTitleMarginTop =>
                                setAttributes({
                                    backTitleMarginTop: newBackTitleMarginTop
                                })
                                }
                                onChangeMarRight={ newBackTitleMarginRight=>
                                setAttributes({
                                    backTitleMarginRight: newBackTitleMarginRight
                                })
                                }
                                onChangeMarBottom={ newBackTitleMarginBottom =>
                                setAttributes({
                                    backTitleMarginBottom: newBackTitleMarginBottom
                                })
                                }
                                onChangeMarLeft={ newBackTitleMarginLeft=>
                                setAttributes({
                                    backTitleMarginLeft: newBackTitleMarginLeft
                                })
                                }
                                showUnits={true}
                                onChangeMarSizeUnit={newMarvalue =>
                                setAttributes({ pxUnit: newMarvalue || "px" })
                                }
                            />
                        </PanelBody>    
                    )}
                    {/* Back Description options */}

                    <div className="premium-control-toggle">
                        <ToggleControl
                            label={__("Description")}
                            checked={backDescCheck}
                            onChange={newBackDescCheck=> setAttributes({ backDescCheck: newBackDescCheck })}
                        />
                    </div>
                    {backDescCheck && (
                        <TextControl
                            label={__("Description Text")}
                            value={backDescription}
                            onChange={newBackDescription=> setAttributes({ backDescription: newBackDescription })}
                        />
                    )}
                    {backDescCheck && (
                        <PanelBody
                            title={__("Back Description Style")}
                            className="premium-panel-body"
                            initialOpen={false}                  
                        >
                            <ColorPalette
                                value={backDescriptionColor}
                                onChange={newBackDescColor => setAttributes({ backDescriptionColor: newBackDescColor || "#ddd"})}
                                allowReset={true}
                            />
                            <PremiumTypo
                                components={["size", "line"]}
                                size= { backDescSize }
                                line= { backDesclineHeight }
                                onChangeSize= { newBackDescSize => setAttributes({ backDescSize: newBackDescSize }) }
                                onChangeLine= { newBackDesclineHeight => setAttributes({ backDesclineHeight: newBackDesclineHeight }) }
                            />
                            <PremiumTextShadow
                                color= { backDescShadowColor }
                                blur= { backDescShadowBlur }
                                horizontal= { backDescShadowHorizontal }
                                vertical= { backDescShadowVertical }
                                onChangeColor= { newBackDescShadowColor => setAttributes({ backDescShadowColor : newBackDescShadowColor.hex || "transparent" }) }
                                onChangeBlur= { newBackDescShadowBlur=> setAttributes({ backDescShadowBlur : newBackDescShadowBlur || "0" }) }
                                onChangehHorizontal= { newBackDescShadowHorizontal => setAttributes({ backDescShadowHorizontal : newBackDescShadowHorizontal || "0"  }) }
                                onChangeVertical= { newBackDescShadowVertical => setAttributes({ backDescShadowVertical : newBackDescShadowVertical || "0" }) }
                            />
                            <PremiumPadding
                                paddingTop={backDescPaddingTop}
                                paddingRight={backDescPaddingRight}
                                paddingBottom={backDescPaddingBottom}
                                paddingLeft={backDescPaddingLeft}
                                onChangePadTop={ newBackDescPaddingTop =>
                                setAttributes({
                                    backDescPaddingTop: newBackDescPaddingTop
                                })
                                }
                                onChangePadRight={ newBackDescPaddingRight =>
                                setAttributes({
                                    backDescPaddingRight: newBackDescPaddingRight
                                })
                                }
                                onChangePadBottom={ newBackDescPaddingBottom =>
                                setAttributes({
                                    backDescPaddingBottom: newBackDescPaddingBottom
                                })
                                }
                                onChangePadLeft={ newBackDescPaddingLeft =>
                                setAttributes({
                                    backDescPaddingLeft: newBackDescPaddingLeft
                                })
                                }
                                showUnits={true}
                                onChangePadSizeUnit={newvalue =>
                                setAttributes({ pxUnit: newvalue || "px"})
                                }
                            />
                            <PremiumMargin
                                directions={["top", "right" , "bottom" , "left"]}
                                marginTop={backDescMarginTop}
                                marginRight={backDescMarginRight}
                                marginBottom={backDescMarginBottom}
                                marginLeft={backDescMarginLeft}
                                onChangeMarTop={ newBackDescMarginTop =>
                                setAttributes({
                                    backDescMarginTop: newBackDescMarginTop
                                })
                                }
                                onChangeMarRight={ newBackDescMarginRight=>
                                setAttributes({
                                    backDescMarginRight: newBackDescMarginRight
                                })
                                }
                                onChangeMarBottom={ newBackDescMarginBottom =>
                                setAttributes({
                                    backDescMarginBottom: newBackDescMarginBottom
                                })
                                }
                                onChangeMarLeft={ newBackDescMarginLeft=>
                                setAttributes({
                                    backDescMarginLeft: newBackDescMarginLeft
                                })
                                }
                                showUnits={true}
                                onChangeMarSizeUnit={newMarvalue =>
                                setAttributes({ pxUnit: newMarvalue || "px"})
                                }
                            />
                        </PanelBody>    
                    )}

                </PanelBody>
                
            </InspectorControls>
        ),
        <div className="premium-flip-container flip-card "  >
            <div className="premium-flip-main-box flip-card-inner">

                <div className="premium-flip-front premium-flip-frontlr flip-card-front" style={{backgroundColor: frontBackgroundColor || "#7c5707"}}>
                    <div className="premium-flip-front-overlay">
                        <div className="premium-flip-front-content-container">
                            <div className="premium-flip-front-content">
                                <div className="premium-flip-text-wrapper PafadeInRevLeft">

                                    {frontIconCheck && (
                                        <div 
                                            className={`premium-flipbox__froIcon`}
                                            style={{
                                                width: widthhh ,
                                                height: height,
                                                marginTop: (frontIconMarginTop || "0") + (marginUnit + "px"),
                                                marginRight: (frontIconMarginRight || "0") + (marginUnit + "px"),
                                                marginBottom: (frontIconMarginBottom ||"0") + (marginUnit + "px"),
                                                marginLeft: (frontIconMarginLeft ||"0") + (marginUnit + "px"),
                                            }}
                                        >

                                            {frontIconType === "fa" && 1 != FontAwesomeEnabled && (
                                                <p className={`premium-icon__alert`}>
                                                    {__("Please Enable Font Awesome Icons from Plugin settings")}
                                                </p>
                                            )}
                                            {(frontIconType === "dash" || 1 == FontAwesomeEnabled) && (
                                                <i
                                                    className={`premium-icon ${frontIconSelected}`}
                                                    style={{
                                                        width:widthhh,
                                                        height:height,
                                                        color: frontIconColor || "#fff",
                                                        backgroundColor: frontIconBackground || "transparent",
                                                        fontSize: (frontIconSize || 50) + "px",
                                                        paddingTop: (frontIconPaddingTop || "0") + (paddingUnit || "px"),
                                                        paddingRight: (frontIconPaddingRight || "0") + (paddingUnit || "px"),
                                                        paddingBottom: (frontIconPaddingBottom || "0" )+ (paddingUnit || "px"),
                                                        paddingLeft: (frontIconPaddingLeft || "0")+ (paddingUnit || "px"),
                                                    }}
                                                />
                                            )}

                                        </div>
                                    )}

                                    {frontTitleCheck && (
                                        <RichText
                                            tagName="h1"
                                            className={`premium-flip-front-title`}
                                            value={frontTitle}
                                            isSelected={false}
                                            placeholder="Please Enter your title"
                                            onChange={newFrontTitle=> setAttributes({ frontTitle: newFrontTitle})}
                                            style={{
                                                color: frontTitleColor || "#e3d192",
                                                fontSize: frontTitleSize + "px",
                                                lineHeight: frontTitlelineHeight + "px",
                                                textShadow: `${frontTitleShadowHorizontal}px ${frontTitleShadowVertical}px ${frontTitleShadowBlur }px ${frontTitleShadowColor}`,
                                                paddingTop: frontTitlePaddingTop + "px",
                                                paddingBottom: frontTitlePaddingBottom + "px",
                                                paddingLeft: frontTitlePaddingLeft + "px",
                                                paddingRight: frontTitlePaddingRight + "px",
                                                marginTop: frontTitleMarginTop + "px",
                                                marginBottom: frontTitleMarginBottom + "px",
                                                marginLeft: frontTitleMarginLeft + "px",
                                                marginRight: frontTitleMarginRight + "px",
                                            }}
                                            keepPlaceholderOnFocus                    
                                        /> 
                                    )}
                                    {frontDescCheck && (
                                        <RichText
                                            tagName="p"
                                            className={`premium-flip-front-description`}
                                            value={frontDescription}
                                            isSelected={false}
                                            placeholder="Please Enter your description"
                                            onChange={newFrontDesc=> setAttributes({ frontDescription: newFrontDesc})}
                                            style={{
                                                color : frontDescriptionColor || "#ddd",
                                                fontSize: frontDescSize + "px",
                                                lineHeight: frontDesclineHeight + "px",
                                                textShadow: `${frontDescShadowHorizontal}px ${frontDescShadowVertical}px ${frontDescShadowBlur }px ${frontDescShadowColor}`,
                                                paddingTop: frontDescPaddingTop + "px",
                                                paddingBottom: frontDescPaddingBottom + "px",
                                                paddingLeft: frontDescPaddingLeft + "px",
                                                paddingRight: frontDescPaddingRight + "px",
                                                marginTop: frontDescMarginTop + "px",
                                                marginBottom: frontDescMarginBottom + "px",
                                                marginLeft: frontDescMarginLeft + "px",
                                                marginRight: frontDescMarginRight + "px",
                                            }}
                                            keepPlaceholderOnFocus                    
                                        /> 
                                    )}

                                </div>
                            </div>    
                        </div>  
                    </div>
                </div>

                <div className="premium-flip-back premium-flip-backlr flip-card-back" style={{backgroundColor: backBackgroundColor || "#ae8686" }}>
                    <div className="premium-flip-back-overlay">   
                        <div className="premium-flip-back-content-container">    
                            <div className="premium-flip-back-content">   
                                <div className="premium-flip-back-text-wrapper PafadeInRevRight">      

                                        {backIconCheck && (
                                            <div 
                                                className={`premium-flipbox__backIcon`}
                                                style={{
                                                    width: widthhh,
                                                    height: height,
                                                    marginTop: (backIconMarginTop || "0") + "px",
                                                    marginRight: (backIconMarginRight || "0") + "px",
                                                    marginBottom: (backIconMarginBottom || "0")+ "px",
                                                    marginLeft: (backIconMarginLeft || "0") + "px",                                                     
                                                }}
                                            >

                                                {backIconType === "fa" && 1 != FontAwesomeEnabled && (
                                                    <p className={`premium-icon__alert`}>
                                                        {__("Please Enable Font Awesome Icons from Plugin settings")}
                                                    </p>
                                                )}
                                                {( backIconType === "dash" || 1 == FontAwesomeEnabled) && (
                                                    <i
                                                        className={`premium-icon ${backIconSelected}`}
                                                        style={{
                                                            width:widthhh,
                                                            height:height,
                                                            color: backIconColor || "#fff",
                                                            backgroundColor: backIconBackground || "transparent",
                                                            fontSize: (backIconSize || 50) + "px",
                                                            paddingTop: (backIconPaddingTop || "0") + "px",
                                                            paddingRight: (backIconPaddingRight || "0") + "px",
                                                            paddingBottom: (backIconPaddingBottom || "0") + "px",
                                                            paddingLeft: (backIconPaddingLeft || "0") + "px",
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        )}        

                                        {backTitleCheck && (
                                            <RichText
                                                tagName="h1"
                                                className={`premium-flip-back-title`}
                                                value={backTitle}
                                                isSelected={false}
                                                placeholder="Please Enter your title"
                                                onChange={newBackTitle=> setAttributes({ backTitle: newBackTitle})}
                                                style={{
                                                    color: backTitleColor || "#fff",
                                                    fontSize: backTitleSize + "px",
                                                    lineHeight: backTitleLineHeight + "px",
                                                    textShadow: `${backTitleShadowHorizontal}px ${backTitleShadowVertical}px ${backTitleShadowBlur }px ${backTitleShadowColor}`,
                                                    paddingTop: backTitlePaddingTop + "px",
                                                    paddingBottom: backTitlePaddingBottom + "px",
                                                    paddingLeft: backTitlePaddingLeft + "px",
                                                    paddingRight: backTitlePaddingRight + "px",
                                                    marginTop: backTitleMarginTop + "px",
                                                    marginBottom: backTitleMarginBottom + "px",
                                                    marginLeft: backTitleMarginLeft + "px",
                                                    marginRight: backTitleMarginRight + "px",
                                                }}
                                                keepPlaceholderOnFocus                    
                                            /> 
                                        )}
                                        {backDescCheck && (
                                            <RichText
                                                tagName="p"
                                                className={`premium-flip-back-description`}
                                                value={backDescription}
                                                isSelected={false}
                                                placeholder="Please Enter your description"
                                                onChange={newBackDesc=> setAttributes({ backDescription: newBackDesc})}
                                                style={{
                                                    color : backDescriptionColor || "#ddd",
                                                    fontSize: backDescSize + "px",
                                                    lineHeight: backDesclineHeight + "px",
                                                    textShadow: `${backDescShadowHorizontal}px ${backDescShadowVertical}px ${backDescShadowBlur }px ${backDescShadowColor}`,
                                                    paddingTop: backDescPaddingTop + "px",
                                                    paddingBottom: backDescPaddingBottom + "px",
                                                    paddingLeft: backDescPaddingLeft + "px",
                                                    paddingRight: backDescPaddingRight + "px",
                                                    marginTop: backDescMarginTop + "px",
                                                    marginBottom: backDescMarginBottom + "px",
                                                    marginLeft: backDescMarginLeft + "px",
                                                    marginRight: backDescMarginRight + "px",
                                                }}
                                                keepPlaceholderOnFocus                    
                                            /> 
                                        )}

                                </div>                        
                            </div>            
                        </div>
                    </div>                                         
                </div> 

            </div>
        </div>
    ];
};

export default edit;
