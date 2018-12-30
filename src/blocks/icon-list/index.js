import { iconList } from "../settings";
import { FontAwesomeEnabled } from "../settings";
import PremiumIcon from "../../components/premium-icon";
import PremiumBorder from "../../components/premium-border";
import PremiumMargin from "../../components/premium-margin";
import PremiumPadding from "../../components/premium-padding";
import PremiumTextShadow from "../../components/premium-text-shadow";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/icon-list";
import PbgIcon from "../icons";

if (iconList) {
  const className = "premium-icon-list";

  const { __ } = wp.i18n;

  const { registerBlockType } = wp.blocks;

  const {
    PanelBody,
    Toolbar,
    SelectControl,
    RangeControl,
    ToggleControl
  } = wp.components;
  const { InspectorControls, PanelColorSettings, URLInput } = wp.editor;

  const iconListAttrs = {
    id: {
      type: "string"
    },
    iconType: {
      type: "string",
      default: "dash"
    },
    selectedIcon: {
      type: "string",
      default: "facebook"
    },
    iconColor: {
      type: "string"
    },
    iconBack: {
      type: "string"
    },
    iconHoverColor: {
      type: "string"
    },
    iconHoverBack: {
      type: "string"
    }
  };

  registerBlockType("premium/icon-list", {
    title: __("Icon List"),
    icon: <PbgIcon icon="icon" />,
    category: "premium-blocks",
    attributes: iconListAttrs,
    edit: props => {
      const { isSelected, setAttributes, clientId: blockId } = props;
      const {
        id,
        iconType,
        selectedIcon,
        iconColor,
        iconBack,
        iconHoverColor,
        iconHoverBack
      } = props.attributes;
      let iconClass =
        "fa" === iconType
          ? `${selectedIcon}`.startsWith("fa-")
            ? `fa ${selectedIcon}`
            : `fa fa-${selectedIcon}`
          : `dashicons ${selectedIcon}`;
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

      const ALIGNS = ["left", "center", "right"];
      setAttributes({ id: blockId });
      return [
        isSelected && (
          <InspectorControls key="inspector">
            <PanelBody
              className="premium-panel-body"
              title={__("Icon")}
              initialOpen={false}
            />
            <FontIconPicker
              icons={iconsList}
              onChange={newIcon => setAttributes({ selectedIcon: newIcon })}
            />
            <PanelColorSettings
              title={__("Colors")}
              className="premium-panel-body-inner"
              colorSettings={[
                {
                  value: iconColor,
                  onChange: colorValue =>
                    setAttributes({ iconColor: colorValue }),
                  label: __("Icon Color")
                },
                {
                  value: iconBack,
                  onChange: colorValue =>
                    setAttributes({ iconBack: colorValue }),
                  label: __("Background Color")
                },
                {
                  value: iconHoverColor,
                  onChange: colorValue =>
                    setAttributes({ iconHoverColor: colorValue }),
                  label: __("Icon Hover Color")
                },
                {
                  value: iconHoverBack,
                  onChange: colorValue =>
                    setAttributes({ iconHoverBack: colorValue }),
                  label: __("Background Hover Color")
                }
              ]}
            />
          </InspectorControls>
        ),

        <div id={`${className}-${id}`} className={`${className}__container`}>
          <style
            dangerouslySetInnerHTML={{
              __html: [
                `#premium-icon-list-${id} .premium-icon-list__icon:hover {`,
                `color: ${iconHoverColor} !important;`,
                `background-color: ${iconHoverBack} !important;`,
                "}"
              ].join("\n")
            }}
          />
          <div className={`${className}__list_wrap`}>
            <i
              className={`${className}__icon ${iconClass} `}
              style={{
                color: iconColor,
                backgroundColor: iconBack
              }}
            />
          </div>
        </div>
      ];
    },
    save: props => {
      const {
        id,
        iconType,
        selectedIcon,
        iconColor,
        iconBack,
        iconHoverColor,
        iconHoverBack
      } = props.attributes;
      let iconClass =
        "fa" === iconType
          ? `fa fa-${selectedIcon}`
          : `dashicons ${selectedIcon}`;
      return (
        <div id={`${className}-${id}`} className={`${className}__container`}>
          <style
            dangerouslySetInnerHTML={{
              __html: [
                `#premium-icon-list-${id} .premium-icon-list__icon:hover {`,
                `color: ${iconHoverColor} !important;`,
                `background-color: ${iconHoverBack} !important;`,
                "}"
              ].join("\n")
            }}
          />
          <div className={`${className}__list_wrap`}>
            <i
              className={`${className}__icon ${iconClass}`}
              style={{
                color: iconColor,
                backgroundColor: iconBack
              }}
            />
          </div>
        </div>
      );
    }
  });
}
