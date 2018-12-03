import { accordion } from "../settings";
import PremiumBorder from "../../components/premium-border";
import PremiumPadding from "../../components/premium-padding";
import PremiumMargin from "../../components/premium-margin";

if (accordion) {
  const className = "premium-accordion";

  const { __ } = wp.i18n;

  const { registerBlockType } = wp.blocks;

  const { Fragment } = wp.element;

  const {
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
    PanelColorSettings,
    URLInput
  } = wp.editor;

  registerBlockType("premium/accordion", {
    title: __("Accordion"),
    icon: "share-alt2",
    category: "premium-blocks",
    attributes: {
      titleText: {
        type: "array",
        source: "children",
        selector: ".premium-accordion__title_text",
        default: __("Awesome Title")
      },
      titleTag: {
        type: "string",
        default: "H4"
      },
      descText: {
        type: "array",
        source: "children",
        selector: ".premium-accordion__desc",
        default:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
    },
    edit: props => {
      const { isSelected, setAttributes, clientId } = props;
      const { titleText, titleTag, descText } = props.attributes;
      return [
        isSelected && (
          <InspectorControls key="inspector">
            <PanelBody
              title={__("Title")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <Toolbar
                controls={"123456".split("").map(tag => ({
                  icon: "heading",
                  isActive: "H" + tag === titleTag,
                  onClick: () => setAttributes({ titleTag: "H" + tag }),
                  subscript: tag
                }))}
              />
            </PanelBody>
          </InspectorControls>
        ),

        <div className={`${className}`}>
          <div className={`${className}__content_wrap`}>
            <div className={`${className}__title_wrap`}>
              <div className={`${className}__title`}>
                <RichText
                  tagName={titleTag.toLowerCase()}
                  className={`${className}__title_text`}
                  onChange={newText => setAttributes({ titleText: newText })}
                  placeholder={__("Awesome Title")}
                  value={titleText}
                />
              </div>
              <div className={`${className}__icon_wrap`}>
                <svg
                  className={`${className}__icon`}
                  role="img"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <polygon points="16.7,3.3 10,10 3.3,3.4 0,6.7 10,16.7 10,16.6 20,6.7 " />
                </svg>
              </div>
            </div>
            <div className={`${className}__desc_wrap`}>
              <RichText
                tagName="p"
                className={`${className}__desc`}
                onChange={newText => setAttributes({ descText: newText })}
                value={descText}
              />
            </div>
          </div>
        </div>
      ];
    },
    save: props => {
      const { titleText, titleTag, descText } = props.attributes;
      return (
        <div className={`${className}`}>
          <div className={`${className}__content_wrap`}>
            <div className={`${className}__title_wrap`}>
              <div className={`${className}__title`}>
                <RichText.Content
                  tagName={titleTag.toLowerCase()}
                  className={`${className}__title_text`}
                  value={titleText}
                />
              </div>
              <div className={`${className}__icon_wrap`}>
                <svg
                  className={`${className}__icon`}
                  role="img"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <polygon points="16.7,3.3 10,10 3.3,3.4 0,6.7 10,16.7 10,16.6 20,6.7 " />
                </svg>
              </div>
            </div>
            <div className={`${className}__desc_wrap`}>
              <RichText.Content
                tagName="p"
                className={`${className}__desc`}
                value={descText}
              />
            </div>
          </div>
        </div>
      );
    }
  });
}
