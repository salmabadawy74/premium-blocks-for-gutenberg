import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/icon-list";

const className = "premium-icon-list";

const { __ } = wp.i18n;

const { Component } = wp.element;

const { registerBlockType } = wp.blocks;

const { PanelBody, RangeControl } = wp.components;
const { InspectorControls } = wp.editor;

let defaultArr = [
  {
    selectedIcon: "fa fa-facebook",
    iconColor: "#000"
  }
];

const iconListAttrs = {
  id: {
    type: "string"
  },
  iconsNumber: {
    type: "number",
    default: 3
  },
  selectedIcon: {
    type: "string"
  },
  iconColor: {
    type: "string"
  },
  icons: {
    type: "array",
    default: defaultArr
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

  saveChanges(propertyIndex, value, index) {
    var n = this.props,
      a = n.attributes;
    let property = "";
    switch (propertyIndex) {
      case "1":
        property = "selectedIcon";
        break;

      case "2":
        property = "iconColor";
        break;
    }
    n.setAttributes({
      icons: a.icons.map(function(icon, iconIndex) {
        console.log(typeof icon);
        return index === iconIndex && (icon.selectedIcon = value);
      })
    });
  }

  render() {
    const { isSelected, setAttributes } = this.props;
    const { id, iconsNumber, icons } = this.props.attributes;

    const panelComponents = icons.map((element, index) => {
      return (
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
            onChange={newValue => this.saveChanges("1", newValue, index)}
          />
        </PanelBody>
      );
    });

    const iconListItems = icons.map((element, index) => {
      return (
        <div
          id={`${className}__icon_wrap-${index}`}
          className={`${className}__icon_wrap`}
        >
          <i className={`${className}__icon ${icons[index].selectedIcon} `} />
        </div>
      );
    });

    return [
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
              onChange={newValue => this.save(newValue)}
            />
          </PanelBody>
          {panelComponents}
        </InspectorControls>
      ),

      <div id={`${className}-${id}`} className={`${className}`}>
        <div className={`${className}__list_wrap`}>{iconListItems}</div>
      </div>
    ];
  }
}

registerBlockType("premium/test", {
  title: __("Test"),
  icon: "admin-site",
  category: "premium-blocks",
  attributes: iconListAttrs,
  edit: PremiumIconList,
  save: props => {
    const { id, iconsNumber, icons } = props.attributes;
    const iconListItems = icons.map((element, index) => {
      return (
        <div
          id={`${className}__icon_wrap-${index}`}
          className={`${className}__icon_wrap}`}
        >
          <i className={`${className}__icon ${icons[index].selectedIcon} `} />
        </div>
      );
    });

    return (
      <div id={`${className}-${id}`} className={`${className}`}>
        <div className={`${className}__list_wrap`}>{iconListItems}</div>
      </div>
    );
  }
});
