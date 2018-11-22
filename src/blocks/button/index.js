import { button } from "../settings";
if (button) {
  const className = "premium-button";

  const { __ } = wp.i18n;

  const { registerBlockType } = wp.blocks;

  const {
    PanelBody,
    Toolbar,
    SelectControl,
    TextControl,
    RangeControl,
    ToggleControl,
    IconButton
  } = wp.components;
  const {
    InspectorControls,
    PanelColorSettings,
    AlignmentToolbar,
    BlockControls,
    MediaUpload,
    RichText,
    URLInput
  } = wp.editor;
  const { Fragment } = wp.element;

  registerBlockType("premium/button", {
    title: __("Button"),
    icon: "clock",
    category: "premium-blocks",
    attributes: {
      btnText: {
        type: "string",
        default: "Premium Button"
      },
      btnSize: {
        type: "string",
        default: "md"
      },
      btnAlign: {
        type: "string",
        default: "center"
      },
      btnLink: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-button"
      }
    },
    edit: props => {
      const { isSelected, setAttributes } = props;

      const { btnText, btnSize, btnAlign, btnLink } = props.attributes;
      const SIZE = [
        {
          value: "sm",
          label: __("Small")
        },
        {
          value: "md",
          label: __("Medium")
        },
        {
          value: "lg",
          label: __("Large")
        },
        {
          value: "block",
          label: __("Block")
        }
      ];
      return [
        isSelected && "block" != btnSize && (
          <BlockControls key="controls">
            <AlignmentToolbar
              value={btnAlign}
              onChange={newAlign => setAttributes({ btnAlign: newAlign })}
            />
          </BlockControls>
        ),
        isSelected && (
          <InspectorControls key={"inspector"}>
            <PanelBody
              title={__("General Settings")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <SelectControl
                options={SIZE}
                label={__("Button Size")}
                value={btnSize}
                onChange={newSize => setAttributes({ btnSize: newSize })}
              />
            </PanelBody>
          </InspectorControls>
        ),
        <div className={`${className}__wrap`} style={{ textAlign: btnAlign }}>
          <a className={`${className} ${className}__${btnSize}`} href={btnLink}>
            <RichText
              tagName="span"
              className={`${className}__text`}
              onChange={newText => setAttributes({ btnText: newText })}
              value={btnText}
            />
          </a>
          <URLInput
            value={btnLink}
            onChange={newLink => setAttributes({ btnLink: newLink })}
          />
        </div>
      ];
    },
    save: props => {
      const { btnText, btnSize, btnAlign, btnLink } = props.attributes;
      return (
        <div className={`${className}__wrap`} style={{ textAlign: btnAlign }}>
          <a className={`${className} ${className}__${btnSize}`} href={btnLink}>
            <RichText.Content
              tagName="span"
              className={`${className}__text`}
              onChange={newText => setAttributes({ btnText: newText })}
              value={btnText}
            />
          </a>
        </div>
      );
    }
  });
}
