import classnames from "classnames";
import PremiumBorder from "../../components/premium-border";
import PremiumPadding from "../../components/premium-padding";
import PremiumMargin from "../../components/premium-margin";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumBackgroud from "../../components/premium-background";
import PremiumSizeUnits from "../../components/premium-size-units";

const { __ } = wp.i18n;

const { PanelBody, ToggleControl, RangeControl, SelectControl } = wp.components;

const { Fragment } = wp.element;

const {
  BlockControls,
  AlignmentToolbar,
  InnerBlocks,
  InspectorControls,
  ColorPalette,
} = wp.blockEditor;

const CONTENT = [
  ["core/paragraph", { content: __("Insert your text or select a block ") }],
];

const edit = (props) => {
  const { isSelected, className, setAttributes } = props;

  const {
    isUpdated,
    stretchSection,
    horAlign,
    innerWidthType,
    innerWidth,
    minHeight,
    minHeightUnit,
    vPos,
    height,
    color,
    imageID,
    imageURL,
    fixed,
    backgroundRepeat,
    backgroundPosition,
    backgroundSize,
    borderType,
    borderWidth,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
    borderColor,
    borderRadius,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginUnit,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    paddingUnit,
    shadowBlur,
    shadowColor,
    shadowHorizontal,
    shadowVertical,
    shadowPosition,
  } = props.attributes;
  const WIDTH = [
    {
      value: "boxed",
      label: __("Boxed"),
    },
    {
      value: "full",
      label: __("Full Width"),
    },
  ];
  const HEIGHT = [
    {
      value: "fit",
      label: __("Fit to Screen"),
    },
    {
      value: "min",
      label: __("Min Height"),
    },
  ];
  const VPOSITION = [
    {
      value: "top",
      label: __("Top"),
    },
    {
      value: "middle",
      label: __("Middle"),
    },
    {
      value: "bottom",
      label: __("Bottom"),
    },
  ];

  const mainClasses = classnames(className, "premium-container");

  return [
    isSelected && (
      <BlockControls key="controls">
        <AlignmentToolbar
          value={horAlign}
          onChange={(newAlign) => setAttributes({ horAlign: newAlign })}
        />
      </BlockControls>
    ),
    isSelected && (
      <InspectorControls key="inspector">
        <PanelBody
          title={__("General Settings")}
          className={`premium-panel-body premium-stretch-section`}
          initialOpen={true}
        >
          <ToggleControl
            label={__("Stretch Section")}
            checked={stretchSection}
            onChange={(check) => setAttributes({ stretchSection: check })}
            help={__(
              "This option stretches the section to the full width of the page using JS. You will need to reload the page after you enable this option for the first time."
            )}
          />
          {stretchSection && (
            <SelectControl
              label={__("Content Width")}
              options={WIDTH}
              value={innerWidthType}
              onChange={(newValue) =>
                setAttributes({ innerWidthType: newValue })
              }
            />
          )}
          {"boxed" === innerWidthType && stretchSection && (
            <RangeControl
              label={__("Max Width (%)")}
              min="1"
              max="1600"
              value={innerWidth}
              onChange={(newValue) => setAttributes({ innerWidth: newValue })}
            />
          )}
          <SelectControl
            label={__("Height")}
            options={HEIGHT}
            value={height}
            onChange={(newValue) => setAttributes({ height: newValue })}
          />
          {"min" === height && (
            <Fragment>
              <PremiumSizeUnits
                units={["px", "vh", "vw"]}
                onChangeSizeUnit={(newValue) =>
                  setAttributes({ minHeightUnit: newValue })
                }
              />
              <RangeControl
                label={__("Min Height")}
                value={minHeight}
                min="1"
                max="800"
                onChange={(newValue) => setAttributes({ minHeight: newValue })}
              />
            </Fragment>
          )}
          <SelectControl
            label={__("Content Position")}
            help={__(
              "If you have two or more inner columns then this option will work only on the preview page"
            )}
            options={VPOSITION}
            value={vPos}
            onChange={(newValue) => setAttributes({ vPos: newValue })}
          />
        </PanelBody>
        <PanelBody
          title={__("Background")}
          className="premium-panel-body"
          initialOpen={false}
        >
          <p>{__("Background Color")}</p>
          <ColorPalette
            value={color}
            onChange={(newValue) =>
              setAttributes({
                color: newValue,
              })
            }
            allowReset={true}
          />
          {imageURL && <img src={imageURL} width="100%" height="auto" />}
          <PremiumBackgroud
            imageID={imageID}
            imageURL={imageURL}
            backgroundPosition={backgroundPosition}
            backgroundRepeat={backgroundRepeat}
            backgroundSize={backgroundSize}
            fixed={fixed}
            onSelectMedia={(media) => {
              setAttributes({
                imageID: media.id,
                imageURL: media.url,
              });
            }}
            onRemoveImage={(value) =>
              setAttributes({ imageURL: "", imageID: "" })
            }
            onChangeBackPos={(newValue) =>
              setAttributes({ backgroundPosition: newValue })
            }
            onchangeBackRepeat={(newValue) =>
              setAttributes({ backgroundRepeat: newValue })
            }
            onChangeBackSize={(newValue) =>
              setAttributes({ backgroundSize: newValue })
            }
            onChangeFixed={(check) => setAttributes({ fixed: check })}
          />
        </PanelBody>
        <PremiumBorder
          borderType={borderType}
          borderWidth={borderWidth}
          top={borderTop}
          right={borderRight}
          bottom={borderBottom}
          left={borderLeft}
          borderColor={borderColor}
          borderRadius={borderRadius}
          onChangeType={(newType) => setAttributes({ borderType: newType })}
          onChangeWidth={({ top, right, bottom, left }) =>
            setAttributes({
              borderTop: top,
              borderRight: right,
              borderBottom: bottom,
              borderLeft: left,
              isUpdated: true,
            })
          }
          onChangeColor={(colorValue) =>
            setAttributes({ borderColor: colorValue.hex })
          }
          onChangeRadius={(newrRadius) =>
            setAttributes({ borderRadius: newrRadius })
          }
        />
        <PremiumBoxShadow
          inner={false}
          color={shadowColor}
          blur={shadowBlur}
          horizontal={shadowHorizontal}
          vertical={shadowVertical}
          position={shadowPosition}
          onChangeColor={(newColor) =>
            setAttributes({
              shadowColor:
                newColor === undefined ? "transparent" : newColor.hex,
            })
          }
          onChangeBlur={(newBlur) =>
            setAttributes({
              shadowBlur: newBlur === undefined ? 0 : newBlur,
            })
          }
          onChangehHorizontal={(newValue) =>
            setAttributes({
              shadowHorizontal: newValue === undefined ? 0 : newValue,
            })
          }
          onChangeVertical={(newValue) =>
            setAttributes({
              shadowVertical: newValue === undefined ? 0 : newValue,
            })
          }
          onChangePosition={(newValue) =>
            setAttributes({
              shadowPosition: newValue === undefined ? 0 : newValue,
            })
          }
        />
        <PremiumMargin
          directions={["all"]}
          marginTop={marginTop}
          marginRight={marginRight}
          marginBottom={marginBottom}
          marginLeft={marginLeft}
          onChangeMarTop={(value) =>
            setAttributes({
              marginTop: value === undefined ? 0 : value,
            })
          }
          onChangeMarRight={(value) =>
            setAttributes({
              marginRight: value === undefined ? 0 : value,
            })
          }
          onChangeMarBottom={(value) =>
            setAttributes({
              marginBottom: value === undefined ? 0 : value,
            })
          }
          onChangeMarLeft={(value) =>
            setAttributes({
              marginLeft: value === undefined ? 0 : value,
            })
          }
          showUnits={true}
          onChangeMarSizeUnit={(newvalue) =>
            setAttributes({ marginUnit: newvalue })
          }
        />
        <PremiumPadding
          paddingTop={paddingTop}
          paddingRight={paddingRight}
          paddingBottom={paddingBottom}
          paddingLeft={paddingLeft}
          onChangePadTop={(value) =>
            setAttributes({
              paddingTop: value === undefined ? 0 : value,
            })
          }
          onChangePadRight={(value) =>
            setAttributes({
              paddingRight: value === undefined ? 0 : value,
            })
          }
          onChangePadBottom={(value) =>
            setAttributes({
              paddingBottom: value === undefined ? 0 : value,
            })
          }
          onChangePadLeft={(value) =>
            setAttributes({
              paddingLeft: value === undefined ? 0 : value,
            })
          }
          showUnits={true}
          selectedUnit={paddingUnit}
          onChangePadSizeUnit={(newvalue) =>
            setAttributes({ paddingUnit: newvalue })
          }
        />
      </InspectorControls>
    ),
    <div
      className={`${mainClasses} premium-container__stretch_${stretchSection} premium-container__${innerWidthType}`}
      style={{
        textAlign: horAlign,
        minHeight: "fit" === height ? "100vh" : minHeight + minHeightUnit,
        backgroundColor: color,
        border: borderType,
        borderWidth: isUpdated
          ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
          : borderWidth + "px",
        borderRadius: borderRadius + "px",
        borderColor: borderColor,
        backgroundImage: imageURL ? `url('${imageURL}')` : "none",
        backgroundRepeat: backgroundRepeat,
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize,
        backgroundAttachment: fixed ? "fixed" : "unset",
        marginTop: marginTop + marginUnit,
        marginBottom: marginBottom + marginUnit,
        marginLeft: marginLeft + marginUnit,
        marginRight: marginRight + marginUnit,
        paddingTop: paddingTop + paddingUnit,
        paddingBottom: paddingBottom + paddingUnit,
        paddingLeft: paddingLeft + paddingUnit,
        paddingRight: paddingRight + paddingUnit,
        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
      }}
    >
      <div
        className={`premium-container__content_wrap premium-container__${vPos}`}
        style={{
          maxWidth:
            "boxed" == innerWidthType && stretchSection
              ? innerWidth
                ? innerWidth + "px"
                : "1140px"
              : "100%",
        }}
      >
        <div className={`premium-container__content_inner`}>
          <InnerBlocks template={CONTENT} />
        </div>
      </div>
    </div>,
  ];
};

export default edit;
