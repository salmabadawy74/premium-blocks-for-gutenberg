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
    RichText
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
      }
    },
    edit: props => {
      const { isSelected, setAttributes } = props;

      const { btnText, btnSize, btnAlign } = props.attributes;
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
          <a className={`${className} ${className}__${btnSize}`}>
            <RichText
              tagName="span"
              className={`${className}__text`}
              onChange={newText => setAttributes({ btnText: newText })}
              value={btnText}
            />
          </a>
        </div>
      ];
    },
    save: props => {
      const { btnText, btnSize, btnAlign } = props.attributes;
      return (
        <div className={`${className}__wrap`} style={{ textAlign: btnAlign }}>
          <a className={`${className} ${className}__${btnSize}`}>
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
