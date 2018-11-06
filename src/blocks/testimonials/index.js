import DefaultImage from "../../components/default-image";
import PremiumUpperQuote from "../../components/testimonials/upper-quote";
import PremiumLowerQuote from "../../components/testimonials/lower-quote";

const className = "premium-testimonial";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

const { Fragment } = wp.element;

const {
  IconButton,
  Toolbar,
  PanelBody,
  PanelColor,
  SelectControl,
  RangeControl,
  TextControl,
  CheckboxControl
} = wp.components;

const {
  BlockControls,
  InspectorControls,
  AlignmentToolbar,
  RichText,
  MediaUpload,
  ColorPalette
} = wp.editor;

registerBlockType("premium/testimonial", {
  title: __("Premium Testimonial"),
  icon: "format-quote",
  category: "premium-blocks",
  attributes: {
    align: {
      type: "string",
      default: "center"
    },
    authorImgId: {
      type: "string"
    },
    authorImgUrl: {
      type: "string"
    },
    imgRadius: {
      type: "string",
      default: "50%"
    },
    imgSize: {
      type: "number"
    },
    imgBorder: {
      type: "number",
      default: "1"
    },
    imgBorderColor: {
      type: "string"
    },
    author: {
      type: "array",
      source: "children",
      selector: ".premium-testimonial__author",
      default: "John Doe"
    },
    authorTag: {
      type: "string",
      default: "H3"
    },
    authorColor: {
      type: "string"
    },
    authorSize: {
      type: "number"
    },
    authorComTag: {
      type: "string",
      default: "H4"
    },
    text: {
      source: "array",
      selector: ".premium-testimonial__text"
    },
    authorCom: {
      type: "array",
      source: "children",
      selector: ".premium-testimonial__author_comp",
      default: "Leap13"
    },
    authorComColor: {
      type: "string"
    },
    authorComSize: {
      type: "number"
    },
    urlCheck: {
      type: "boolean",
      default: false
    },
    urlText: {
      type: "string"
    },
    urlTarget: {
      type: "boolean",
      default: false
    },
    quotSize: {
      type: "number"
    },
    quotColor: {
      type: "string",
      default: "rgba(110,193,228,0.2)"
    },
    bodyColor: {
      type: "string"
    },
    bodySize: {
      type: "number"
    },
    bodyLine: {
      type: "number"
    },
    bodyTop: {
      type: "number"
    },
    bodyBottom: {
      type: "number"
    },
    dashColor: {
      type: "string"
    }
  },

  edit: props => {
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
      bodyColor,
      bodySize,
      bodyLine,
      bodyTop,
      bodyBottom,
      dashColor
    } = props.attributes;
    const ALIGNS = [
      {
        value: "left",
        label: "Left"
      },
      {
        value: "center",
        label: "Center"
      },
      {
        value: "right",
        label: "Right"
      }
    ];
    const RADIUS = [
      {
        value: "0",
        label: "Square"
      },
      {
        value: "50%",
        label: "Circle"
      },
      {
        value: "15px",
        label: "Rounded"
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
          <PanelBody title={__("Content")} initialOpen={false}>
            <PanelColor title={__("Color")} colorValue={bodyColor}>
              <ColorPalette
                value={bodyColor}
                onChange={newColor => setAttributes({ bodyColor: newColor })}
              />
            </PanelColor>
            <RangeControl
              label={__("Font Size (PX)")}
              value={bodySize}
              min="10"
              max="80"
              onChange={newSize => setAttributes({ bodySize: newSize })}
            />
            <RangeControl
              label={__("Line Height (PX)")}
              value={bodyLine}
              min="10"
              max="50"
              onChange={newSize => setAttributes({ bodyLine: newSize })}
            />
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

          <PanelBody title={__("Author")} initialOpen={true}>
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
              <PanelColor
                title={__("Border Color")}
                colorValue={imgBorderColor}
              >
                <ColorPalette
                  value={imgBorderColor}
                  onChange={newColor =>
                    setAttributes({ imgBorderColor: newColor })
                  }
                />
              </PanelColor>
            )}
            <p>{__("Author HTML Tag")}</p>
            <Toolbar
              controls={"123456".split("").map(tag => ({
                icon: "heading",
                isActive: "H" + tag === authorTag,
                onClick: () => setAttributes({ authorTag: "H" + tag }),
                subscript: tag
              }))}
            />
            <PanelColor title={__("Color")} colorValue={authorColor}>
              <ColorPalette
                value={authorColor}
                onChange={newColor => setAttributes({ authorColor: newColor })}
              />
            </PanelColor>
            <RangeControl
              label={__("Font Size (PX)")}
              value={authorSize}
              min="10"
              max="80"
              onChange={newSize => setAttributes({ authorSize: newSize })}
            />
          </PanelBody>
          <PanelBody title={__("Company")} initialOpen={false}>
            <p>{__("HTML Tag")}</p>
            <Toolbar
              controls={"123456".split("").map(tag => ({
                icon: "heading",
                isActive: "H" + tag === authorComTag,
                onClick: () => setAttributes({ authorComTag: "H" + tag }),
                subscript: tag
              }))}
            />
            <PanelColor title={__("Color")} colorValue={authorComColor}>
              <ColorPalette
                value={authorComColor}
                onChange={newColor =>
                  setAttributes({ authorComColor: newColor })
                }
              />
            </PanelColor>
            <RangeControl
              label={__("Font Size (PX")}
              value={authorComSize}
              onChange={newSize => setAttributes({ authorComSize: newSize })}
            />
            <PanelColor title={__("Dash Color")} colorValue={dashColor}>
              <ColorPalette
                value={dashColor}
                onChange={newColor => setAttributes({ dashColor: newColor })}
              />
            </PanelColor>
            <CheckboxControl
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
              <CheckboxControl
                label={__("Open Link in a New Tab")}
                checked={urlTarget}
                onChange={newCheck => setAttributes({ urlTarget: newCheck })}
              />
            )}
          </PanelBody>
          <PanelBody title={__("Quotations")} initialOpen={false}>
            <RangeControl
              label={__("Size (EM)")}
              value={quotSize}
              min="1"
              max="12"
              onChange={newSize => setAttributes({ quotSize: newSize })}
            />
            <PanelColor title={__("Color")} colorValue={quotColor}>
              <ColorPalette
                value={quotColor}
                onChange={newColor => setAttributes({ quotColor: newColor })}
              />
            </PanelColor>
          </PanelBody>
        </InspectorControls>
      ),
      <div className={`${className}__wrap`}>
        <div className={`${className}__container`}>
          <span className={`${className}__upper`}>
            <PremiumUpperQuote size={quotSize} color={quotColor} />
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
                  tagName={"p"}
                  className={`${className}__text`}
                  onChange={newText => setAttributes({ text: newText })}
                  value={text}
                  isSelected={false}
                  placeholder="Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus."
                  style={{
                    color: bodyColor,
                    fontSize: bodySize + "px",
                    lineHeight: bodyLine + "px",
                    marginTop: bodyTop + "px",
                    marginBottom: bodyBottom + "px"
                  }}
                  isSelected={isSelected}
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
                onChange={newText => setAttributes({ author: newText })}
                value={author}
                isSelected={false}
                style={{
                  color: authorColor,
                  fontSize: authorSize + "px"
                }}
                isSelected={false}
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
            <PremiumLowerQuote size={quotSize} color={quotColor} />
          </span>
        </div>
      </div>
    ];
  },
  save: props => {
    const {
      align,
      authorImgUrl,
      imgRadius,
      imgBorder,
      imgBorderColor,
      imgSize,
      text,
      authorTag,
      authorColor,
      authorSize,
      author,
      authorComTag,
      authorComColor,
      authorComSize,
      authorCom,
      quotSize,
      quotColor,
      bodyColor,
      bodySize,
      bodyLine,
      bodyTop,
      bodyBottom,
      dashColor,
      urlCheck,
      urlText,
      urlTarget
    } = props.attributes;

    return (
      <div className={`${className}__wrap`}>
        <div className={`${className}__container`}>
          <span className={`${className}__upper`}>
            <PremiumUpperQuote size={quotSize} color={quotColor} />
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
                <RichText.Content
                  tagName={"p"}
                  className={`${className}__text`}
                  value={text}
                  style={{
                    color: bodyColor,
                    fontSize: bodySize + "px",
                    lineHeight: bodyLine + "px",
                    marginTop: bodyTop + "px",
                    marginBottom: bodyBottom + "px"
                  }}
                />
              </div>
            </div>
            <div className={`${className}__info`}>
              <RichText.Content
                tagName={authorTag.toLowerCase()}
                className={`${className}__author`}
                value={author}
                style={{
                  color: authorColor,
                  fontSize: authorSize + "px"
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
              <div className={`${className}__link_wrap`}>
                <RichText.Content
                  tagName={authorComTag.toLowerCase()}
                  className={`${className}__author_comp`}
                  value={authorCom}
                  style={{
                    color: authorComColor,
                    fontSize: authorComSize + "px"
                  }}
                />
                {urlCheck && (
                  <a href={urlText} target={urlTarget ? "_blank" : ""} />
                )}
              </div>
            </div>
          </div>
          <span className={`${className}__lower`}>
            <PremiumLowerQuote color={quotColor} size={quotSize} />
          </span>
        </div>
      </div>
    );
  }
});
