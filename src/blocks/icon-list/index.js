import { iconList } from "../settings";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/icon-list";
import PbgIcon from "../icons";

if (iconList) {
  const className = "premium-icon-list";

  const { __ } = wp.i18n;

  const { registerBlockType } = wp.blocks;

  const {
    PanelBody,
    SelectControl,
    RangeControl,
    TextControl,
    ToggleControl
  } = wp.components;

  const { Component } = wp.element;
  const {
    InspectorControls,
    AlignmentToolbar,
    PanelColorSettings,
    BlockControls
  } = wp.editor;
  let defaultObj = {
    selectedIcon: "fa fa-facebook",
    iconColor: "#000",
    iconBackColor: "#fff",
    iconHoverColor: "#000",
    iconHoverBack: "#fff",
    iconWidth: 25,
    iconSize: 20,
    iconRadius: 0,
    iconPadding: 0,
    iconLabel: "Icon Label",
    labelSpacing: 10,
    labelPosition: "column",
    labelColor: "#000",
    labelHoverColor: "#000",
    iconUrl: "#",
    iconTab: false,
    iconEffect: "none"
  };
  const iconListAttrs = {
    id: {
      type: "string"
    },
    contentAlign: {
      type: "string",
      default: "center"
    },
    iconsNumber: {
      type: "number",
      default: 1
    },
    selectedIcon: {
      type: "string"
    },
    iconColor: {
      type: "string"
    },
    iconEffect: {
      type: "string"
    },
    iconBackColor: {
      type: "string"
    },
    iconHoverColor: {
      type: "string"
    },
    iconHoverBack: {
      type: "string"
    },
    iconWidth: {
      type: "number"
    },
    iconSize: {
      type: "number"
    },
    iconRadius: {
      type: "number"
    },
    iconPadding: {
      type: "number"
    },
    iconLabel: {
      type: "string"
    },
    labelsPositions: {
      type: "string"
    },
    labelSpacing: {
      type: "number"
    },
    labelsColors: {
      type: "string"
    },
    labelsHoverColors: {
      type: "string"
    },
    iconUrl: {
      type: "string"
    },
    iconTab: {
      type: "boolean"
    },
    icons: {
      type: "array",
      default: [
        defaultObj,
        defaultObj,
        defaultObj,
        defaultObj,
        defaultObj,
        defaultObj,
        defaultObj,
        defaultObj
      ]
    }
  };

  class PremiumIconList extends Component {
    constructor() {
      super(...arguments);
    }

    componentDidMount() {
      const { attributes, setAttributes, clientId } = this.props;
      if (!attributes.id) {
        setAttributes({ id: clientId });
      }
    }

    mergeObjects(source, object1, object2) {
      const merged = Object.assign(source, object1, object2);
      return merged;
    }

    saveChanges(value, repeaterIndex) {
      const { attributes, setAttributes } = this.props;

      setAttributes({
        icons: attributes.icons.map((icon, index) => {
          return (
            repeaterIndex === index &&
              (icon = this.mergeObjects({}, icon, value)),
            icon
          );
        })
      });
    }

    render() {
      const { isSelected, setAttributes } = this.props;
      const { id, contentAlign, iconsNumber, icons } = this.props.attributes;
      console.log(icons);
      const EFFECTS = [
        {
          value: "none",
          label: __("None")
        },
        {
          value: "pulse",
          label: __("Pulse")
        },
        {
          value: "rotate",
          label: __("Rotate")
        },
        {
          value: "drotate",
          label: __("3D Rotate")
        },
        {
          value: "buzz",
          label: __("Buzz")
        },
        {
          value: "drop",
          label: __("Drop Shadow")
        },
        {
          value: "wobble",
          label: __("Wobble")
        }
      ];

      const POSITIONS = [
        {
          value: "column",
          label: __("Below")
        },
        {
          value: "row",
          label: __("Right")
        },
        {
          value: "row-reverse",
          label: __("Left")
        }
      ];

      const panelComponents = icons.map((element, index) => {
        return (
          iconsNumber > index && (
            <PanelBody
              className="premium-panel-body"
              title={__(`Icon #${index + 1} Style`)}
              initialOpen={false}
            >
              <FontIconPicker
                icons={iconsList}
                value={icons[index].selectedIcon}
                isMulti={false}
                noSelectedPlaceholder={__("Select Icon")}
                onChange={newValue =>
                  this.saveChanges({ selectedIcon: newValue }, index)
                }
              />
              <TextControl
                label={__("Label")}
                value={icons[index].iconLabel}
                onChange={newValue =>
                  this.saveChanges({ iconLabel: newValue }, index)
                }
              />
              <TextControl
                label={__("URL")}
                value={icons[index].iconUrl}
                onChange={newValue =>
                  this.saveChanges({ iconUrl: newValue }, index)
                }
              />
              <ToggleControl
                label={__("Open link in new tab")}
                checked={icons[index].iconTab}
                onChange={newValue =>
                  this.saveChanges({ iconTab: newValue }, index)
                }
              />
              <SelectControl
                label={__("Label Position")}
                options={POSITIONS}
                value={icons[index].labelPosition}
                onChange={newValue =>
                  this.saveChanges({ labelPosition: newValue }, index)
                }
              />
              <RangeControl
                label={__("Icon/Label Size (PX)")}
                value={icons[index].iconSize}
                onChange={newValue =>
                  this.saveChanges({ iconSize: newValue }, index)
                }
              />
              {icons[index].iconLabel && (
                <RangeControl
                  label={__("Spacing (PX)")}
                  value={icons[index].labelSpacing}
                  onChange={newValue =>
                    this.saveChanges({ labelSpacing: newValue }, index)
                  }
                />
              )}
              <RangeControl
                label={__("Width (%)")}
                value={icons[index].iconWidth}
                onChange={newValue =>
                  this.saveChanges({ iconWidth: newValue }, index)
                }
              />
              <SelectControl
                label={__("Hover Effect")}
                options={EFFECTS}
                value={icons[index].iconEffect}
                onChange={newValue =>
                  this.saveChanges({ iconEffect: newValue }, index)
                }
              />
              <PanelColorSettings
                title={__("Colors")}
                className="premium-panel-body-inner"
                colorSettings={[
                  {
                    value: icons[index].iconColor,
                    onChange: newValue =>
                      this.saveChanges({ iconColor: newValue }, index),
                    label: __("Icon Color")
                  },
                  {
                    value: icons[index].labelColor,
                    onChange: newValue =>
                      this.saveChanges({ labelColor: newValue }, index),
                    label: __("Label Color")
                  },
                  {
                    value: icons[index].iconBackColor,
                    onChange: newValue =>
                      this.saveChanges({ iconBackColor: newValue }, index),
                    label: __("Background Color")
                  },
                  {
                    value: icons[index].iconHoverColor,
                    onChange: newValue =>
                      this.saveChanges({ iconHoverColor: newValue }, index),
                    label: __("Icon Hover Color")
                  },
                  {
                    value: icons[index].labelHoverColor,
                    onChange: newValue =>
                      this.saveChanges({ labelHoverColor: newValue }, index),
                    label: __("Label Hover Color")
                  },
                  {
                    value: icons[index].iconHoverBack,
                    onChange: newValue =>
                      this.saveChanges({ iconHoverBack: newValue }, index),
                    label: __("Background Hover Color")
                  }
                ]}
              />
              <RangeControl
                label={__("Border Radius (%)")}
                value={icons[index].iconRadius}
                onChange={newValue =>
                  this.saveChanges({ iconRadius: newValue }, index)
                }
              />
              <RangeControl
                label={__("Padding (PX)")}
                value={icons[index].iconPadding}
                onChange={newValue =>
                  this.saveChanges({ iconPadding: newValue }, index)
                }
              />
            </PanelBody>
          )
        );
      });

      const iconListItems = icons.map((element, index) => {
        return (
          iconsNumber > index && (
            <div
              id={`${className}__icon_wrap-${index}`}
              className={`${className}__icon_wrap list-${
                icons[index].labelPosition
              }`}
              style={{
                color: icons[index].iconColor,
                backgroundColor: icons[index].iconBackColor,
                flexBasis: icons[index].iconWidth + "%",
                borderRadius: icons[index].iconRadius,
                padding: icons[index].iconPadding
              }}
            >
              <style
                dangerouslySetInnerHTML={{
                  __html: [
                    `#premium-icon-list-${id} #premium-icon-list__icon_wrap-${index}:hover {`,
                    `color: ${icons[index].iconHoverColor} !important;`,
                    `background-color: ${
                      icons[index].iconHoverBack
                    } !important;`,
                    "}",
                    `#premium-icon-list-${id} #premium-icon-list__icon_wrap-${index}:hover .premium-icon-list__text {`,
                    `color: ${icons[index].labelHoverColor} !important;`,
                    "}"
                  ].join("\n")
                }}
              />
              <i
                className={`${className}__icon ${
                  icons[index].selectedIcon
                } ${className}__${icons[index].iconEffect}`}
                style={{
                  fontSize: icons[index].iconSize
                }}
              />
              {icons[index].iconLabel && (
                <p
                  className={`${className}__text`}
                  style={{
                    color: icons[index].labelColor,
                    fontSize: icons[index].iconSize,
                    marginTop:
                      "column" === icons[index].labelPosition
                        ? icons[index].labelSpacing
                        : 0,
                    marginRight:
                      "row-reverse" === icons[index].labelPosition
                        ? icons[index].labelSpacing
                        : 0,
                    marginLeft:
                      "row" === icons[index].labelPosition
                        ? icons[index].labelSpacing
                        : 0
                  }}
                >
                  {icons[index].iconLabel}
                </p>
              )}
              {icons[index].iconUrl && (
                <a
                  className={`${className}__link`}
                  href="javascript:void(0)"
                  target="_self"
                />
              )}
            </div>
          )
        );
      });

      return [
        isSelected && (
          <BlockControls key="controls">
            <AlignmentToolbar
              value={contentAlign}
              onChange={newAlign =>
                setAttributes({
                  contentAlign: newAlign === undefined ? "left" : newAlign
                })
              }
            />
          </BlockControls>
        ),
        isSelected && (
          <InspectorControls key="inspector">
            <PanelBody
              className="premium-panel-body"
              title={__("Number of Icons")}
              initialOpen={false}
            >
              <RangeControl
                label={__("Set Number of Icons")}
                value={iconsNumber}
                min="1"
                max="8"
                onChange={newValue => setAttributes({ iconsNumber: newValue })}
              />
            </PanelBody>
            {panelComponents}
          </InspectorControls>
        ),

        <div id={`${className}-${id}`} className={`${className}`}>
          <div
            className={`${className}__list_wrap`}
            style={{
              justifyContent: contentAlign
            }}
          >
            {iconListItems}
          </div>
        </div>
      ];
    }
  }

  registerBlockType("premium/icon-list", {
    title: __("Icon List"),
    icon: <PbgIcon icon="icon" />,
    category: "premium-blocks",
    attributes: iconListAttrs,
    edit: PremiumIconList,
    save: props => {
      const { id, contentAlign, iconsNumber, icons } = props.attributes;

      const iconListItems = icons.map((element, index) => {
        return (
          iconsNumber > index && (
            <div
              id={`${className}__icon_wrap-${index}`}
              className={`${className}__icon_wrap list-${
                icons[index].labelPosition
              }`}
              style={{
                color: icons[index].iconColor,
                backgroundColor: icons[index].iconBackColor,
                flexBasis: icons[index].iconWidth + "%",
                borderRadius: icons[index].iconRadius,
                padding: icons[index].iconPadding
              }}
            >
              <style
                dangerouslySetInnerHTML={{
                  __html: [
                    `#premium-icon-list-${id} #premium-icon-list__icon_wrap-${index}:hover {`,
                    `color: ${icons[index].iconHoverColor} !important;`,
                    `background-color: ${
                      icons[index].iconHoverBack
                    } !important;`,
                    "}",
                    `#premium-icon-list-${id} #premium-icon-list__icon_wrap-${index}:hover .premium-icon-list__text {`,
                    `color: ${icons[index].labelHoverColor} !important;`,
                    "}"
                  ].join("\n")
                }}
              />
              <i
                className={`${className}__icon ${
                  icons[index].selectedIcon
                } ${className}__${icons[index].iconEffect}`}
                style={{
                  fontSize: icons[index].iconSize
                }}
              />
              {icons[index].iconLabel && (
                <p
                  className={`${className}__text`}
                  style={{
                    color: icons[index].labelColor,
                    fontSize: icons[index].iconSize,
                    marginTop:
                      "column" === icons[index].labelPosition
                        ? icons[index].labelSpacing
                        : 0,
                    marginRight:
                      "row-reverse" === icons[index].labelPosition
                        ? icons[index].labelSpacing
                        : 0,
                    marginLeft:
                      "row" === icons[index].labelPosition
                        ? icons[index].labelSpacing
                        : 0
                  }}
                >
                  {icons[index].iconLabel}
                </p>
              )}
              {icons[index].iconUrl && (
                <a
                  className={`${className}__link`}
                  href={icons[index].iconUrl}
                  target={icons[index].iconTab && "_blank"}
                />
              )}
            </div>
          )
        );
      });

      return (
        <div id={`${className}-${id}`} className={`${className}`}>
          <div
            className={`${className}__list_wrap`}
            style={{
              justifyContent: contentAlign
            }}
          >
            {iconListItems}
          </div>
        </div>
      );
    }
  });
}
