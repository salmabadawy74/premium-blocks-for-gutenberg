import classnames from "classnames";
import styling from "./styling";
// import PremiumTypo from "../../components/premium-typo";
// import PremiumTextShadow from "../../components/premium-text-shadow";

import {
  SortableContainer,
  SortableElement,
  arrayMove,
} from "react-sortable-hoc";

const { __ } = wp.i18n;

const { Component, Fragment } = wp.element;

const {
  BlockControls,
  AlignmentToolbar,
  InspectorControls,
  ColorPalette,
  MediaUpload,
} = wp.editor;

const {
  PanelBody,
  SelectControl,
  TextControl,
  ToggleControl,
  Toolbar,
  IconButton,
  TabPanel,
  Dashicon,
} = wp.components;
const sizeOptions = [
  { label: "Auto", value: "auto" },
  { label: "Contain", value: "contain" },
  { label: "Cover", value: "cover" },
  { label: "Custom", value: "custom" },
];
const positionOptions = [
  { label: "Center Center", value: "center center" },
  { label: "Center Left", value: "center left" },
  { label: "Center Right", value: "center right" },
  { label: "Top Center", value: "top center" },
  { label: "Top Left", value: "top left" },
  { label: "Top Right", value: "top right" },
  { label: "Bottom Center", value: "bottom center" },
  { label: "Bottom Left", value: "bottom left" },
  { label: "Bottom Right", value: "bottom right" },
];
const repeatOptions = [
  { label: "Repeat", value: "repeat" },
  { label: "No-repeat", value: "no-repeat" },
  { label: "Repeat-x", value: "repeat-x" },
  { label: "Repeat-y", value: "repeat-y" },
];
const SortableItem = SortableElement(
  ({ edit, removeItem, newIndex, changeFancyValue, value, items }) => (
    <div className="premium-repeater-item">
      <div className={`premium-repeater-item__container ${newIndex}`}>
        <span className="premium-repeater-item__dragHandle"></span>
        <div
          className="premium-repeater-item__content"
          onClick={() => edit(newIndex)}
        >
          Images
        </div>

        {items.length != 1 ? (
          <button
            className="premium-repeater-item__trashicon fa fa-trash"
            onClick={() => removeItem(newIndex, value)}
          ></button>
        ) : (
          ""
        )}

        <div
          className={`premium-repeater-item-controls editable ${
            value.edit ? "editable" : ""
          }`}
        >
          <MediaUpload
            onSelect={(newImage) => changeFancyValue(newImage, newIndex)}
            value={items.imageID}
            render={({ open }) => (
              <IconButton
                className="premium-media-uplpad-btn"
                label={__("Change Image")}
                icon="edit"
                onClick={open}
              >
                {__("Upload Image")}
              </IconButton>
            )}
          />
          <TabPanel
            className="premium-size-type-field-tabs"
            activeClass="active-tab"
            tabs={[
              {
                name: "desktop",
                title: <Dashicon icon="desktop" />,
                className: "premium-desktop-tab premium-responsive-tabs",
              },
              {
                name: "tablet",
                title: <Dashicon icon="tablet" />,
                className: "premium-tablet-tab premium-responsive-tabs",
              },
              {
                name: "mobile",
                title: <Dashicon icon="smartphone" />,
                className: "premium-mobile-tab premium-responsive-tabs",
              },
            ]}
          >
            {(tab) => {
              let tabout;
              if ("mobile" === tab.name) {
                tabout = (
                  <SelectControl
                    options={sizeOptions}
                    label={__("Size")}
                    value={items.imageID}
                    onChange={(sizeMobile) =>
                      changeFancyValue(sizeMobile, newIndex)
                    }
                  />
                );
              } else if ("tablet" === tab.name) {
                tabout = (
                  <SelectControl
                    options={sizeOptions}
                    label={__("Size")}
                    value={items.imageID}
                    onChange={(sizeTablet) =>
                      changeFancyValue(sizeTablet, newIndex)
                    }
                  />
                );
              } else {
                tabout = (
                  <SelectControl
                    options={sizeOptions}
                    label={__("Size")}
                    value={items.imageID}
                    onChange={(size) => changeFancyValue(size, newIndex)}
                  />
                );
              }
              return <div>{tabout}</div>;
            }}
          </TabPanel>
          <TabPanel
            className="premium-size-type-field-tabs"
            activeClass="active-tab"
            tabs={[
              {
                name: "desktop",
                title: <Dashicon icon="desktop" />,
                className: "premium-desktop-tab premium-responsive-tabs",
              },
              {
                name: "tablet",
                title: <Dashicon icon="tablet" />,
                className: "premium-tablet-tab premium-responsive-tabs",
              },
              {
                name: "mobile",
                title: <Dashicon icon="smartphone" />,
                className: "premium-mobile-tab premium-responsive-tabs",
              },
            ]}
          >
            {(tab) => {
              let tabout;
              if ("mobile" === tab.name) {
                tabout = (
                  <SelectControl
                    options={positionOptions}
                    label={__("Position")}
                    value={items.imageID}
                    onChange={(sizeMobile) =>
                      changeFancyValue(sizeMobile, newIndex)
                    }
                  />
                );
              } else if ("tablet" === tab.name) {
                tabout = (
                  <SelectControl
                    options={positionOptions}
                    label={__("Position")}
                    value={items.imageID}
                    onChange={(sizeTablet) =>
                      changeFancyValue(sizeTablet, newIndex)
                    }
                  />
                );
              } else {
                tabout = (
                  <SelectControl
                    options={positionOptions}
                    label={__("Position")}
                    value={items.imageID}
                    onChange={(size) => changeFancyValue(size, newIndex)}
                  />
                );
              }
              return <div>{tabout}</div>;
            }}
          </TabPanel>
          <TabPanel
            className="premium-size-type-field-tabs"
            activeClass="active-tab"
            tabs={[
              {
                name: "desktop",
                title: <Dashicon icon="desktop" />,
                className: "premium-desktop-tab premium-responsive-tabs",
              },
              {
                name: "tablet",
                title: <Dashicon icon="tablet" />,
                className: "premium-tablet-tab premium-responsive-tabs",
              },
              {
                name: "mobile",
                title: <Dashicon icon="smartphone" />,
                className: "premium-mobile-tab premium-responsive-tabs",
              },
            ]}
          >
            {(tab) => {
              let tabout;
              if ("mobile" === tab.name) {
                tabout = (
                  <SelectControl
                    options={repeatOptions}
                    label={__("Repeat")}
                    value={items.imageID}
                    onChange={(sizeMobile) =>
                      changeFancyValue(sizeMobile, newIndex)
                    }
                  />
                );
              } else if ("tablet" === tab.name) {
                tabout = (
                  <SelectControl
                    options={repeatOptions}
                    label={__("Repeat")}
                    value={items.imageID}
                    onChange={(sizeTablet) =>
                      changeFancyValue(sizeTablet, newIndex)
                    }
                  />
                );
              } else {
                tabout = (
                  <SelectControl
                    options={repeatOptions}
                    label={__("Repeat")}
                    value={items.imageID}
                    onChange={(size) => changeFancyValue(size, newIndex)}
                  />
                );
              }
              return <div>{tabout}</div>;
            }}
          </TabPanel>
          <ToggleControl
            label={__("Content")}
            checked={items.loop}
            onChange={(valueLoop) => changeFancyValue(valueLoop, newIndex)}
          />
      
            <ToggleControl
            label={__("Icon")}
            checked={items.icon}
            onChange={(valueIcon) => changeFancyValue(valueIcon, newIndex)}
          />
          <TextControl
               label={__("Image #1")}
               value={items.imageID}
               onChange={(newText) => changeFancyValue(newText, newIndex)}
          />
           <TextareaControl
        label="Text"
        help="Enter some text"
        value={ items.imageID }
        onChange={ (newText) => changeFancyValue(newText, newIndex) }
          />
            <ToggleControl
            label={__("Custom Position")}
            checked={items.icon}
            onChange={(valueIcon) => changeFancyValue(valueIcon, newIndex)}
          />
        </div>
      </div>
    </div>
  )
);
const SortableList = SortableContainer(
  ({ items, removeItem, edit, changeFancyValue }) => {
    return (
      <div>
        {" "}
        {items.map((value, index) => (
          <SortableItem
            key={`item-${value}`}
            index={index}
            newIndex={index}
            value={value}
            removeItem={removeItem}
            edit={edit}
            changeFancyValue={changeFancyValue}
            items={items}
          />
        ))}{" "}
      </div>
    );
  }
);

class edit extends Component {
  constructor() {
    super(...arguments);
  }
  componentDidMount() {
    // Assigning id in the attribute.
    this.props.setAttributes({ block_id: this.props.clientId.substr(0, 6) });
    this.props.setAttributes({ classMigrate: true });

    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "premium-style-image-accrodion-" + this.props.clientId.substr(0, 6)
    );
    document.head.appendChild($style);
  }
  render() {
    const { attributes, setAttributes, isSelected } = this.props;

    const { block_id, align, repeaterImageAccordion } = attributes;

    var element = document.getElementById(
      "premium-style-image-accordion-" + block_id
    );

    if (null != element && "undefined" != typeof element) {
      element.innerHTML = styling(this.props);
    }
    const edit = (index) => {
      return repeaterImageAccordion.map((item, i) => {
        if (index == i) {
          setAttributes({
            repeaterImageAccordion: onRepeaterChange(
              "edit",
              item.edit ? false : true,
              index
            ),
          });
        } else {
          setAttributes({
            repeaterImageAccordion: onRepeaterChange("edit", false, i),
          });
        }
      });
    };

    const addNewFancyText = () => {
      setAttributes({
        repeaterImageAccordion: repeaterImageAccordion.concat([
          {
            imageURL:
              "http://localhost:8080/mywebsite/wp-content/plugins/elementor/assets/images/placeholder.png",
          },
        ]),
      });
    };
    const onRepeaterChange = (attr, value, index) => {
      return repeaterImageAccordion.map(function (item, currIndex) {
        if (index == currIndex) {
          item[attr] = value;
        }
        return item;
      });
    };
    const changeFancyValue = (newvalue, newIndex) => {
      setAttributes({
        repeaterImageAccordion: onRepeaterChange(
          "imageUrl",
          newvalue.url,
          newIndex
        ),
        repeaterImageAccordion: onRepeaterChange(
          "size",
          sizeMobile,
          newIndex
        ),
        repeaterImageAccordion: onRepeaterChange(
          "loop",
        true,
          newIndex
        ),

        
       
      });
    };

    const removeItem = (index, item) => {
      let array = repeaterImageAccordion
        .map((cont, currIndex) => {
          return cont;
        })
        .filter((f, i) => i != index);
      setAttributes({
        repeaterImageAccordion: array,
      });
    };

    return [
      isSelected && (
        <BlockControls>
          <AlignmentToolbar
            value={align}
            onChange={(value) => setAttributes({ align: value })}
          />
        </BlockControls>
      ),
      isSelected && (
        <InspectorControls>
          <PanelBody
            title={__("Accordion")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <Fragment>
              <div className="premium-fancy-text-control-content">
                <label></label>
                <SortableList
                  items={repeaterImageAccordion}
                  removeItem={(value) => removeItem(value)}
                  edit={(value) => edit(value)}
                  changeFancyValue={changeFancyValue}
                  helperClass="premium-fancy-text__sortableHelper"
                />
                <div className="premium-repeater-btn__wrap">
                  <button
                    className={"premium-repeater-btn"}
                    onClick={() => addNewFancyText()}
                  >
                    <i className="dashicons dashicons-plus premium-repeater__icon" />
                    <span>{__("Add New Item")}</span>
                  </button>
                </div>
              </div>
              <br />
            </Fragment>
          </PanelBody>
        </InspectorControls>
      ),
      <div>
        <ul className={`premium-accordion-ul premium-accordion-center`}>
          {repeaterImageAccordion.map((item, index) => {
            return (
              <li className={`premium-accordion-li`}>
                <img src={item.imageURL} />
              </li>
            );
          })}
        </ul>
      </div>,
    ];
  }
}
export default edit;
