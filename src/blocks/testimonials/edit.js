import PremiumTypo from "../../components/premium-typo";
import DefaultImage from "../../components/default-image";
import PremiumUpperQuote from "../../components/testimonials/upper-quote";
import PremiumLowerQuote from "../../components/testimonials/lower-quote";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumBackgroud from "../../components/premium-background";

const { __ } = wp.i18n;

const {
  IconButton,
  Toolbar,
  PanelBody,
  SelectControl,
  RangeControl,
  TextControl,
  ToggleControl
} = wp.components;

const {
  BlockControls,
  InspectorControls,
  AlignmentToolbar,
  RichText,
  MediaUpload,
  PanelColorSettings,
  ColorPalette
} = wp.editor;

const { Fragment } = wp.element;

const className = "premium-testimonial";

const edit = props => {
  const { isSelected, setAttributes } = props;
  const {
    align,
    authorImgId,
    authorImgUrl,
    imgRadius,
    imgSize,
    imgBorder,
    imgBorderColor,
    text,
    authorTag,
    authorColor,
    authorSize,
    authorLetter,
    authorStyle,
    authorUpper,
    authorWeight,
    author,
    authorComTag,
    authorCom,
    authorComColor,
    authorComSize,
    urlCheck,
    urlText,
    urlTarget,
    quotSize,
    quotColor,
    quotOpacity,
    bodyColor,
    bodySize,
    bodyLine,
    bodyTop,
    bodyBottom,
    dashColor,
    shadowBlur,
    shadowColor,
    shadowHorizontal,
    shadowVertical,
    shadowPosition,
    backColor,
    imageID,
    imageURL,
    fixed,
    backgroundRepeat,
    backgroundPosition,
    backgroundSize
  } = props.attributes;

  const RADIUS = [
    {
      value: "0",
      label: __("Square")
    },
    {
      value: "50%",
      label: __("Circle")
    },
    {
      value: "15px",
      label: __("Rounded")
    }
  ];

  return [
    isSelected && (
      <BlockControls key="controls">
        <AlignmentToolbar
          value={align}
          onChange={newAlign => setAttributes({ align: newAlign })}
        />
      </BlockControls>
    ),
    isSelected && (
      <InspectorControls key={"inspector"}>
        <PanelBody
          title={__("Author")}
          className="premium-panel-body"
          initialOpen={true}
        >
          <PanelBody
            title={__("Image")}
            className="premium-panel-body-inner"
            initialOpen={false}
          >
            <p>{__("Author Image")}</p>
            {authorImgUrl && (
              <img src={authorImgUrl} width="100%" height="auto" />
            )}
            {!authorImgUrl && <DefaultImage />}
            <MediaUpload
              allowedTypes={["image"]}
              onSelect={media => {
                setAttributes({
                  authorImgId: media.id,
                  authorImgUrl:
                    "undefined" === typeof media.sizes.thumbnail
                      ? media.url
                      : media.sizes.thumbnail.url
                });
              }}
              type="image"
              value={authorImgId}
              render={({ open }) => (
                <IconButton
                  label={__("Change Author Image")}
                  icon="edit"
                  onClick={open}
                >
                  {__("Change Author Image")}
                </IconButton>
              )}
            />
            {authorImgUrl && (
              <SelectControl
                label={__("Image Style")}
                options={RADIUS}
                value={imgRadius}
                onChange={newWeight => setAttributes({ imgRadius: newWeight })}
              />
            )}
            {authorImgUrl && (
              <RangeControl
                label={__("Size")}
                max="200"
                value={imgSize}
                onChange={newSize => setAttributes({ imgSize: newSize })}
              />
            )}
            {authorImgUrl && (
              <RangeControl
                label={__("Border Width (PX)")}
                value={imgBorder}
                onChange={newSize => setAttributes({ imgBorder: newSize })}
              />
            )}
            {authorImgUrl && (
              <Fragment>
                <p>{__("Border Color")}</p>
                <ColorPalette
                  value={imgBorderColor}
                  onChange={newValue =>
                    setAttributes({
                      imgBorderColor: newValue
                    })
                  }
                  allowReset={true}
                />
              </Fragment>
            )}
          </PanelBody>
            <p>{__("Author HTML Tag")}</p>
            <Toolbar
              controls={"123456".split("").map(tag => ({
                icon: "heading",
                isActive: "H" + tag === authorTag,
                onClick: () => setAttributes({ authorTag: "H" + tag }),
                subscript: tag
              }))}
            />
            <PremiumTypo
              components={["size", "weight", "style", "upper", "spacing"]}
              size={authorSize}
              onChangeSize={newSize => setAttributes({ authorSize: newSize })}
              weight={authorWeight}
              style={authorStyle}
              spacing={authorLetter}
              upper={authorUpper}
              onChangeWeight={newWeight =>
                setAttributes({ authorWeight: newWeight })
              }
              onChangeStyle={newStyle =>
                setAttributes({ authorStyle: newStyle })
              }
              onChangeSpacing={newValue =>
                setAttributes({ authorLetter: newValue })
              }
              onChangeUpper={check => setAttributes({ authorUpper: check })}
            />
            <p>{__("Color")}</p>
            <ColorPalette
              value={authorColor}
              onChange={newValue =>
                setAttributes({
                  authorColor: newValue
                })
              }
              allowReset={true}
            />
        </PanelBody>
        <PanelBody
          title={__("Content")}
          className="premium-panel-body"
          initialOpen={false}
        >
            <PremiumTypo
              components={["size", "line"]}
              size={bodySize}
              line={bodyLine}
              onChangeSize={newSize => setAttributes({ bodySize: newSize })}
              onChangeLine={newWeight => setAttributes({ bodyLine: newWeight })}
            />
            <p>{__("Color")}</p>
            <ColorPalette
              value={bodyColor}
              onChange={newValue =>
                setAttributes({
                  bodyColor: newValue
                })
              }
              allowReset={true}
            />
          <PanelBody
            title={__("Spacings")}
            className="premium-panel-body-inner"
            initialOpen={false}
          >
            <RangeControl
              label={__("Margin Top (PX)")}
              value={bodyTop}
              onChange={newSize => setAttributes({ bodyTop: newSize })}
            />
            <RangeControl
              label={__("Margin Bottom (PX)")}
              value={bodyBottom}
              onChange={newSize => setAttributes({ bodyBottom: newSize })}
            />
          </PanelBody>
        </PanelBody>
        <PanelBody
          title={__("Company")}
          className="premium-panel-body"
          initialOpen={false}
        >
            <p>{__("HTML Tag")}</p>
            <Toolbar
              controls={"123456".split("").map(tag => ({
                icon: "heading",
                isActive: "H" + tag === authorComTag,
                onClick: () => setAttributes({ authorComTag: "H" + tag }),
                subscript: tag
              }))}
            />
            <PremiumTypo
              components={["size"]}
              size={authorComSize}
              onChangeSize={newSize =>
                setAttributes({ authorComSize: newSize })
              }
            />
          <PanelColorSettings
            title={__("Colors")}
            className="premium-panel-body-inner"
            initialOpen={false}
            colorSettings={[
              {
                value: authorComColor,
                onChange: colorValue =>
                  setAttributes({ authorComColor: colorValue }),
                label: __("Text Color")
              },
              {
                value: dashColor,
                onChange: colorValue =>
                  setAttributes({ dashColor: colorValue }),
                label: __("Dash Color")
              }
            ]}
          />
          <ToggleControl
            label={__("URL")}
            checked={urlCheck}
            onChange={newCheck => setAttributes({ urlCheck: newCheck })}
          />
          {urlCheck && (
            <TextControl
              label={__("URL")}
              value={urlText}
              onChange={newURL => setAttributes({ urlText: newURL })}
            />
          )}
          {urlCheck && (
            <ToggleControl
              label={__("Open Link in a New Tab")}
              checked={urlTarget}
              onChange={newCheck => setAttributes({ urlTarget: newCheck })}
            />
          )}
        </PanelBody>
        <PanelBody
          title={__("Quotations")}
          className="premium-panel-body"
          initialOpen={false}
        >
          <RangeControl
            label={__("Size (EM)")}
            value={quotSize}
            min="1"
            max="12"
            onChange={newSize => setAttributes({ quotSize: newSize })}
          />
          <Fragment>
            <p>{__("Quotations Color")}</p>
            <ColorPalette
              value={quotColor}
              onChange={newValue =>
                setAttributes({
                  quotColor: newValue
                })
              }
              allowReset={true}
            />
          </Fragment>
          <RangeControl
            label={__("Opacity")}
            min="0"
            max="100"
            value={quotOpacity}
            onChange={newValue => setAttributes({ quotOpacity: newValue })}
          />
        </PanelBody>
        <PanelBody
          title={__("Container")}
          className="premium-panel-body"
          initialOpen={false}
        >
          <Fragment>
            <p>{__("Background Color")}</p>
            <ColorPalette
              value={backColor}
              onChange={newValue =>
                setAttributes({
                  backColor: newValue
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
              onSelectMedia={media => {
                setAttributes({
                  imageID: media.id,
                  imageURL: media.url
                });
              }}
              onRemoveImage={value =>
                setAttributes({ imageURL: "", imageID: "" })
              }
              onChangeBackPos={newValue =>
                setAttributes({ backgroundPosition: newValue })
              }
              onchangeBackRepeat={newValue =>
                setAttributes({ backgroundRepeat: newValue })
              }
              onChangeBackSize={newValue =>
                setAttributes({ backgroundSize: newValue })
              }
              onChangeFixed={check => setAttributes({ fixed: check })}
            />
          </Fragment>
          <PremiumBoxShadow
            inner={true}
            color={shadowColor}
            blur={shadowBlur}
            horizontal={shadowHorizontal}
            vertical={shadowVertical}
            position={shadowPosition}
            onChangeColor={newColor =>
              setAttributes({
                shadowColor: newColor
              })
            }
            onChangeBlur={newBlur =>
              setAttributes({
                shadowBlur: newBlur
              })
            }
            onChangehHorizontal={newValue =>
              setAttributes({
                shadowHorizontal: newValue
              })
            }
            onChangeVertical={newValue =>
              setAttributes({
                shadowVertical: newValue
              })
            }
            onChangePosition={newValue =>
              setAttributes({
                shadowPosition: newValue
              })
            }
          />
        </PanelBody>
      </InspectorControls>
    ),
    <div
      className={`${className}__wrap`}
      style={{
        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
        backgroundColor: backColor,
        backgroundImage: `url('${imageURL}')`,
        backgroundRepeat: backgroundRepeat,
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize,
        backgroundAttachment: fixed ? "fixed" : "unset"
      }}
    >
      <div className={`${className}__container`}>
        <span className={`${className}__upper`}>
          <PremiumUpperQuote
            size={quotSize}
            color={quotColor}
            opacity={quotOpacity}
          />
        </span>
        <div
          className={`${className}__content`}
          style={{
            textAlign: align
          }}
        >
          <div className={`${className}__img_wrap`}>
            {authorImgUrl && (
              <img
                className={`${className}__img`}
                src={`${authorImgUrl}`}
                alt="Author"
                style={{
                  borderWidth: imgBorder + "px",
                  borderRadius: imgRadius,
                  borderColor: imgBorderColor,
                  width: imgSize + "px",
                  height: imgSize + "px"
                }}
              />
            )}
            {!authorImgUrl && <DefaultImage className={className} />}
          </div>
          <div className={`${className}__text_wrap`}>
            <div>
              <RichText
                tagName="p"
                className={`${className}__text`}
                value={text}
                isSelected={false}
                placeholder="Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus."
                onChange={newText => setAttributes({ text: newText })}
                style={{
                  color: bodyColor,
                  fontSize: bodySize + "px",
                  lineHeight: bodyLine + "px",
                  marginTop: bodyTop + "px",
                  marginBottom: bodyBottom + "px"
                }}
                keepPlaceholderOnFocus
              />
            </div>
          </div>
          <div
            className={`${className}__info`}
            style={{ justifyContent: align }}
          >
            <RichText
              tagName={authorTag.toLowerCase()}
              className={`${className}__author`}
              value={author}
              isSelected={false}
              onChange={newText => setAttributes({ author: newText })}
              style={{
                color: authorColor,
                fontSize: authorSize + "px",
                letterSpacing: authorLetter + "px",
                textTransform: authorUpper ? "uppercase" : "none",
                fontStyle: authorStyle,
                fontWeight: authorWeight
              }}
            />
            <span
              className={`${className}__sep`}
              style={{
                color: dashColor
              }}
            >
              &nbsp;-&nbsp;
            </span>
            <RichText
              tagName={authorComTag.toLowerCase()}
              className={`${className}__author_comp`}
              onChange={newText => setAttributes({ authorCom: newText })}
              value={authorCom}
              isSelected={false}
              style={{
                color: authorComColor,
                fontSize: authorComSize + "px"
              }}
            />
          </div>
        </div>
        <span className={`${className}__lower`}>
          <PremiumLowerQuote
            size={quotSize}
            color={quotColor}
            opacity={quotOpacity}
          />
        </span>
      </div>
    </div>
  ];
};

export default edit;
