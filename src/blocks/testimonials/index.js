import DefaultImage from "../../components/default-image";
import PremiumTypo from "../../components/premium-typo";
import PremiumUpperQuote from "../../components/testimonials/upper-quote";
import PremiumLowerQuote from "../../components/testimonials/lower-quote";
import { testimonial } from "../settings";
import PbgIcon from "../icons";

if (testimonial) {
  const className = "premium-testimonial";

  const { __ } = wp.i18n;

  const { registerBlockType } = wp.blocks;

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
    PanelColorSettings
  } = wp.editor;

  const testimonialsAttrs = {
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
      type: "array",
      source: "children",
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
      type: "string"
    },
    quotOpacity: {
      type: "number"
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
  };

  registerBlockType("premium/testimonial", {
    title: __("Testimonial"),
    icon: <PbgIcon icon="testimonials" />,
    category: "premium-blocks",
    attributes: testimonialsAttrs,
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
        quotOpacity,
        bodyColor,
        bodySize,
        bodyLine,
        bodyTop,
        bodyBottom,
        dashColor
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
                    onChange={newWeight =>
                      setAttributes({ imgRadius: newWeight })
                    }
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
                  <PanelColorSettings
                    title={__("Border Color")}
                    className="premium-panel-body-inner"
                    initialOpen={false}
                    colorSettings={[
                      {
                        value: imgBorderColor,
                        onChange: colorValue =>
                          setAttributes({ imgBorderColor: colorValue }),
                        label: __("Color")
                      }
                    ]}
                  />
                )}
              </PanelBody>
              <PanelBody
                title={__("Font")}
                className="premium-panel-body-inner"
                initialOpen={false}
              >
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
                  components={["size"]}
                  size={authorSize}
                  onChangeSize={newSize =>
                    setAttributes({ authorSize: newSize })
                  }
                />
              </PanelBody>
              <PanelColorSettings
                title={__("Colors")}
                className="premium-panel-body-inner"
                initialOpen={false}
                colorSettings={[
                  {
                    value: authorColor,
                    onChange: colorValue =>
                      setAttributes({ authorColor: colorValue }),
                    label: __("Text Color")
                  }
                ]}
              />
            </PanelBody>
            <PanelBody
              title={__("Content")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <PanelBody
                title={__("Font")}
                className="premium-panel-body-inner"
                initialOpen={false}
              >
                <PremiumTypo
                  components={["size", "line"]}
                  size={bodySize}
                  line={bodyLine}
                  onChangeSize={newSize => setAttributes({ bodySize: newSize })}
                  onChangeLine={newWeight =>
                    setAttributes({ bodyLine: newWeight })
                  }
                />
              </PanelBody>
              <PanelColorSettings
                title={__("Colors")}
                className="premium-panel-body-inner"
                initialOpen={false}
                colorSettings={[
                  {
                    value: bodyColor,
                    onChange: colorValue =>
                      setAttributes({ bodyColor: colorValue }),
                    label: __("Text Color")
                  }
                ]}
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
              <PanelBody
                title={__("Font")}
                className="premium-panel-body-inner"
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
              </PanelBody>
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
              <PanelColorSettings
                title={__("Colors")}
                className="premium-panel-body-inner"
                initialOpen={false}
                colorSettings={[
                  {
                    value: quotColor,
                    onChange: colorValue =>
                      setAttributes({ quotColor: colorValue }),
                    label: __("Quotations Color")
                  }
                ]}
              />
              <RangeControl
                label={__("Opacity")}
                min="0"
                max="100"
                value={quotOpacity}
                onChange={newValue => setAttributes({ quotOpacity: newValue })}
              />
            </PanelBody>
          </InspectorControls>
        ),
        <div className={`${className}__wrap`}>
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
        quotOpacity,
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
                  <RichText.Content
                    tagName="p"
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
              <PremiumLowerQuote
                color={quotColor}
                size={quotSize}
                opacity={quotOpacity}
              />
            </span>
          </div>
        </div>
      );
    },
    deprecated: [
      {
        attributes: testimonialsAttrs,
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
            quotOpacity,
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
                  <PremiumUpperQuote
                    size={quotSize}
                    color="rgba(110,193,228,0.2)"
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
                      <RichText.Content
                        tagName="p"
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
                  <PremiumLowerQuote
                    color="rgba(110,193,228,0.2)"
                    size={quotSize}
                    opacity={quotOpacity}
                  />
                </span>
              </div>
            </div>
          );
        }
      }
    ]
  });
}
