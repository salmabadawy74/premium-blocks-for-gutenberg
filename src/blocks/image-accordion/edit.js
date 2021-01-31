import classnames from "classnames";
//import styling from "./styling";
// import PremiumTypo from "../../components/premium-typo";
// import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBackground from "../../components/premium-background";
import PremiumResponsive from "../../components/premium-responsive";
import PremiumIcon from "../../components/premium-icon";
import PremiumSizeUnits from "../../components/premium-size-units";

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
  RangeControl,
  TextareaControl,
  IconButton,
  TabPanel,
  Dashicon,
} = wp.components;

const SortableItem = SortableElement(
  ({
    edit,
    removeItem,
    newIndex,
    value,
    changeFancyValue,
    changeFixed,
    changePosition,
    changeRepeat,
    changeCustom,
    changeSize,
    changeContent,
    changeIcon,
    changeTitle,
    changeDesc,
    changeHUnit,
    changeHorizontal,
    changeVUnit,
    changeVertical,
    changeLink,
    items,
    hundleLink,
    hundleTitleLink,
    hundleWhole,
  }) => (
    <div className="premium-repeater-item">
      <div className={`premium-repeater-item__container ${newIndex}`}>
        <span className="premium-repeater-item__dragHandle"></span>
        <div
          className="premium-repeater-item__content"
          onClick={() => edit(newIndex)}
        >
          {value.title}{" "}
        </div>

        {items.length != 1 ? (
          <button
            className="premium-repeater-item__trashicon fa fa-trash"
            onClick={() => removeItem(newIndex, value)}
          ></button>
        ) : (
          ""
        )}
      </div>
      <div
        className={`premium-repeater-item-controls ${
          value.edit ? "editable" : ""
        }`}
      >
        <PremiumBackground
          imageID={value.imageID}
          imageURL={value.imageURL}
          backgroundPosition={value.backgroundPosition}
          backgroundRepeat={value.backgroundRepeat}
          backgroundSize={value.backgroundSize}
          fixed={value.fixed}
          onSelectMedia={(newimage) => changeFancyValue(newimage, newIndex)}
          onRemoveImage={() => console.log("HI")}
          onChangeBackPos={(newPos) => changePosition(newPos, newIndex)}
          onchangeBackRepeat={(newRepeat) => changeRepeat(newRepeat, newIndex)}
          onChangeBackSize={(newSize) => changeSize(newSize, newIndex)}
          onChangeFixed={() => changeFixed(newIndex)}
        />
        <ToggleControl
          label={__("Content")}
          checked={value.content}
          onChange={() => changeContent(newIndex)}
        />
        <ToggleControl
          label={__("Icon")}
          checked={value.icon}
          onChange={() => changeIcon(newIndex)}
        />
        {value.icon && (
          <PremiumIcon
            iconType={value.imageID}
            selectedIcon={value.selectedIcon}
            onChangeTyp={() => console.log("HI")}
            onChangeIcon={() => console.log("HI")}
          />
        )}
        {value.content && (
          <Fragment>
            <TextControl
              label={__("Image #1")}
              value={value.title}
              onChange={(newTitle) => changeTitle(newTitle, newIndex)}
            />
            <TextareaControl
              label="Text"
              help="Enter some text"
              value={value.desc}
              onChange={(newDesc) => changeDesc(newDesc, newIndex)}
            />
            <ToggleControl
              label={__("Custom Position")}
              checked={value.custom}
              onChange={(newcustom) => changeCustom(newcustom, newIndex)}
            />
          </Fragment>
        )}
        <PremiumSizeUnits
          units={["px", "em", "%"]}
          value={value.horizontalU}
          onChange={(newHUnit) => changeHUnit(newHUnit, newIndex)}
        />
        <RangeControl
          label={__("Horizontal Offset")}
          value={value.horizontal}
          onChange={(newvalue) => changeHorizontal(newvalue, newIndex)}
        />
        <PremiumSizeUnits
          units={["px", "em", "%"]}
          value={value.verticalU}
          onChange={(newvalue) => changeVUnit(newvalue, newIndex)}
        />
        <RangeControl
          label={__("Vertical Offset")}
          value={value.vertical}
          onChange={(newvalue) => changeVertical(newvalue, newIndex)}
        />

        <ToggleControl
          label={__("Link")}
          checked={value.link}
          onChange={(newIndex) => changeLink(newIndex)}
        />
        {value.link && (
          <Fragment>
            <SelectControl
              label={__("Link Type")}
              value={value.imageID}
              options={[
                {
                  label: __("URL"),
                  value: "url",
                },
                { label: __("Existing Page"), value: "page" },
              ]}
              onChange={() => console.log("Ok")}
            />
            <TextControl
              label={__("link")}
              value={value.url}
              onChange={(newvalue) => hundleLink(newvalue, newIndex)}
            />
            <TextControl
              label={__("link Title")}
              value={value.urlTitle}
              onChange={(newvalue) => hundleTitleLink(newvalue, newIndex)}
            />
          </Fragment>
        )}

        <ToggleControl
          label={__("Whole Image Link")}
          value={value.whole}
          onChange={(newvalue) => hundleWhole(newvalue, newIndex)}
        />
      </div>
    </div>
  )
);
const SortableList = SortableContainer(
  ({
    items,
    removeItem,
    edit,
    changeFancyValue,
    changePosition,
    changeRepeat,
    changeSize,
    changeFixed,
    changeContent,
    changeIcon,
    changeDesc,
    changeTitle,
    changeCustom,
    changeHUnit,
    changeHorizontal,
    changeVUnit,
    changeVertical,
    changeLink,
    hundleLink,
    hundleTitleLink,
    hundleWhole,
  }) => {
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
            changePosition={changePosition}
            changeRepeat={changeRepeat}
            changeSize={changeSize}
            changeFixed={changeFixed}
            changeContent={changeContent}
            changeIcon={changeIcon}
            changeTitle={changeTitle}
            changeDesc={changeDesc}
            changeCustom={changeCustom}
            changeHUnit={changeHUnit}
            changeHorizontal={changeHorizontal}
            changeVUnit={changeVUnit}
            changeVertical={changeVertical}
            changeLink={changeLink}
            hundleLink={hundleLink}
            hundleTitleLink={hundleTitleLink}
            hundleWhole={hundleWhole}
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

    const {
      block_id,
      align,
      repeaterImageAccordion,
      direction,
      skew,
      height,
      heightU,
      contentPosition,
      alignPosition,
      hideDesc,
      hoverIndex,
    } = attributes;

    var element = document.getElementById(
      "premium-style-image-accordion-" + block_id
    );

    if (null != element && "undefined" != typeof element) {
      element.innerHTML = styling(this.props);
    }
    const changeFancyValue = (newimage, newIndex) => {
      setAttributes({
        repeaterImageAccordion: onRepeaterChange(
          "imageURL",
          newimage.url,
          newIndex
        ),
      });
    };
    const changePosition = (newPos, newIndex) => {
      setAttributes({
        repeaterImageAccordion: onRepeaterChange(
          "backgroundPosition",
          newPos,
          newIndex
        ),
      });
    };

    const changeRepeat = (newRepeat, newIndex) => {
      setAttributes({
        repeaterImageAccordion: onRepeaterChange(
          "backgroundRepeat",
          newRepeat,
          newIndex
        ),
      });
    };

    const changeSize = (newSize, newIndex) => {
      setAttributes({
        repeaterImageAccordion: onRepeaterChange(
          "backgroundSize",
          newSize,
          newIndex
        ),
      });
    };
    const changeFixed = (newIndex) => {
      return repeaterImageAccordion.map((item, i) => {
        if (newIndex == i) {
          setAttributes({
            repeaterImageAccordion: onRepeaterChange(
              "fixed",
              item.fixed ? false : true,
              newIndex
            ),
          });
        } else {
          setAttributes({
            repeaterImageAccordion: onRepeaterChange("fixed", false, i),
          });
        }
      });
    };
    const changeContent = (newIndex) => {
      return repeaterImageAccordion.map((item, i) => {
        if (newIndex == i) {
          setAttributes({
            repeaterImageAccordion: onRepeaterChange(
              "content",
              item.content ? false : true,
              newIndex
            ),
          });
        } else {
          setAttributes({
            repeaterImageAccordion: onRepeaterChange("content", false, i),
          });
        }
      });
    };
    const changeIcon = (newIndex) => {
      return repeaterImageAccordion.map((item, i) => {
        if (newIndex == i) {
          setAttributes({
            repeaterImageAccordion: onRepeaterChange(
              "icon",
              item.icon ? false : true,
              newIndex
            ),
          });
        } else {
          setAttributes({
            repeaterImageAccordion: onRepeaterChange("icon", false, i),
          });
        }
      });
    };

    const changeTitle = (newTitle, newIndex) => {
      setAttributes({
        repeaterImageAccordion: onRepeaterChange("title", newTitle, newIndex),
      });
    };
    const changeDesc = (newDesc, newIndex) => {
      setAttributes({
        repeaterImageAccordion: onRepeaterChange("desc", newDesc, newIndex),
      });
    };
    const changeCustom = (newIndex) => {
      return repeaterImageAccordion.map((item, i) => {
        if (newIndex == i) {
          setAttributes({
            repeaterImageAccordion: onRepeaterChange(
              "custom",
              item.custom ? false : true,
              newIndex
            ),
          });
        } else {
          setAttributes({
            repeaterImageAccordion: onRepeaterChange("custom", false, i),
          });
        }
      });
    };

    const changeHUnit = (newHUnit, newIndex) => {
      setAttributes({
        repeaterImageAccordion: onRepeaterChange("hunit", newHUnit, newIndex),
      });
    };

    const changeHorizontal = (newvalue, newIndex) => {
      setAttributes({
        repeaterImageAccordion: onRepeaterChange(
          "horizontal",
          newvalue,
          newIndex
        ),
      });
    };
    const changeVUnit = (newvalue, newIndex) => {
      setAttributes({
        repeaterImageAccordion: onRepeaterChange(
          "verticalU",
          newvalue,
          newIndex
        ),
      });
    };
    const changeVertical = (newvalue, newIndex) => {
      setAttributes({
        repeaterImageAccordion: onRepeaterChange(
          "vertical",
          newvalue,
          newIndex
        ),
      });
    };
    const changeLink = (newIndex) => {
      return repeaterImageAccordion.map((item, i) => {
        if (newIndex == i) {
          setAttributes({
            repeaterImageAccordion: onRepeaterChange(
              "link",
              item.link ? false : true,
              newIndex
            ),
          });
        } else {
          setAttributes({
            repeaterImageAccordion: onRepeaterChange("link", false, i),
          });
        }
      });
    };
    const hundleLink = (newvalue, newIndex) => {
      setAttributes({
        repeaterImageAccordion: onRepeaterChange("url", newvalue, newIndex),
      });
    };
    const hundleTitleLink = (newvalue, newIndex) => {
      setAttributes({
        repeaterImageAccordion: onRepeaterChange(
          "urlTitle",
          newvalue,
          newIndex
        ),
      });
    };
    const hundleWhole = (newvalue, newIndex) => {
      setAttributes({
        repeaterImageAccordion: onRepeaterChange("whole", newvalue, newIndex),
      });
    };
    const onSortEndSingle = ({ oldIndex, newIndex }) => {
      let arrayItem = repeaterImageAccordion.map((cont) => cont);

      const sortedArray = arrayMove(arrayItem, oldIndex, newIndex);

      setAttributes({
        repeaterImageAccordion: sortedArray,
      });
    };

    const shouldCancelStart = (e) => {
      // Prevent sorting from being triggered if target is input or button
      if (
        ["button", "div", "input", "textarea", "i"].indexOf(
          e.target.tagName.toLowerCase()
        ) !== -1
      ) {
        return true; // Return true to cancel sorting
      }
    };

    const onRepeaterChange = (attr, value, index) => {
      return repeaterImageAccordion.map(function (item, currIndex) {
        if (index == currIndex) {
          item[attr] = value;
        }
        return item;
      });
    };

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

    const addNewFancyText = () => {
      setAttributes({
        repeaterImageAccordion: repeaterImageAccordion.concat([
          {
            title: __("Image"),
            edit: true,
          },
        ]),
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
                  onSortEnd={(oldIndex, newIndex) =>
                    onSortEndSingle(oldIndex, newIndex)
                  }
                  removeItem={(value) => removeItem(value)}
                  edit={(value) => edit(value)}
                  shouldCancelStart={shouldCancelStart}
                  changeFancyValue={changeFancyValue}
                  changeRepeat={changeRepeat}
                  changePosition={changePosition}
                  changeSize={changeSize}
                  changeFixed={changeFixed}
                  changeContent={changeContent}
                  changeIcon={changeIcon}
                  changeTitle={changeTitle}
                  changeDesc={changeDesc}
                  changeCustom={changeCustom}
                  changeHUnit={changeHUnit}
                  changeHorizontal={changeHorizontal}
                  changeVUnit={changeVUnit}
                  changeVertical={changeVertical}
                  changeLink={changeLink}
                  hundleLink={hundleLink}
                  hundleTitleLink={hundleTitleLink}
                  hundleWhole={hundleWhole}
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
          <PanelBody
            title={__("Display Options")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <RangeControl
              label={__("Hovered By Default Index")}
              value={hoverIndex}
              onChange={() => console.log("HO")}
            />
            <SelectControl
              label={__("Direction")}
              value={direction}
              options={[
                {
                  label: __("Horizontal"),
                  value: "horizontal",
                },
                {
                  label: __("Vertical"),
                  value: "vertical",
                },
              ]}
              onChange={(newvalue) => setAttribute({ direction: newvalue })}
            />
            <ToggleControl
              label={__("Skew Images")}
              value={skew}
              onChange={() => setAttribute({ skew: !skew })}
            />
            <PremiumSizeUnits
              units={["px", "em", "vh"]}
              value={heightU}
              onChange={(newvalue) => setAttribute({ heightU: newvalue })}
            />
            <RangeControl
              label={__("Image Height")}
              value={height}
              onChange={(newvalue) => setAttribute({ height: newvalue })}
            />
            <Fragment>
              <h2> {__("Content Vertical Positionment")}</h2>
              <IconButton
                key={"left"}
                icon="editor-alignleft"
                label="Left"
                onClick={() => setAttributes({ contentPosition: "left" })}
                aria-pressed={"left" === contentPosition}
                isPrimary={"left" === contentPosition}
              />
              <IconButton
                key={"center"}
                icon="editor-aligncenter"
                label="Right"
                onClick={() => setAttributes({ contentPosition: "center" })}
                aria-pressed={"center" === contentPosition}
                isPrimary={"center" === contentPosition}
              />
              <IconButton
                key={"right"}
                icon="editor-alignright"
                label="Right"
                onClick={() => setAttributes({ contentPosition: "right" })}
                aria-pressed={"right" === contentPosition}
                isPrimary={"right" === contentPosition}
              />
            </Fragment>
            <Fragment>
              <h2> {__("Content Alignment")}</h2>
              <IconButton
                key={"left"}
                icon="editor-alignleft"
                label="Left"
                onClick={() => setAttributes({ alignPosition: "left" })}
                aria-pressed={"left" === alignPosition}
                isPrimary={"left" === alignPosition}
              />
              <IconButton
                key={"center"}
                icon="editor-aligncenter"
                label="Right"
                onClick={() => setAttributes({ alignPosition: "center" })}
                aria-pressed={"center" === alignPosition}
                isPrimary={"center" === alignPosition}
              />
              <IconButton
                key={"right"}
                icon="editor-alignright"
                label="Right"
                onClick={() => setAttributes({ alignPosition: "right" })}
                aria-pressed={"right" === alignPosition}
                isPrimary={"right" === alignPosition}
              />
            </Fragment>
            <RangeControl
              label={__("Hide Description Below Width (PX)")}
              value={hideDesc}
              min={0}
              max={0}
              onChange={() => console.log("hide")}
            />
          </PanelBody>
          <PanelBody
            title={__("Images")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <ColorPalette
              label={__("Overlay Color")}
              value={overlayColor}
              onChange={(newColor) => setAttributes({ overlay: newColor })}
            />
            <ColorPalette
              label={__("Overlay Hover Color")}
              value={overlayHover}
              onChange={(newColor) => setAttributes({ overlayHover: newColor })}
            />
            <PremiumFilters
              blur={blur}
              bright={bright}
              contrast={contrast}
              saturation={saturation}
              hue={hue}
              onChangeBlur={(value) => setAttributes({ blur: value })}
              onChangeBright={(value) => setAttributes({ bright: value })}
              onChangeContrast={(value) => setAttributes({ contrast: value })}
              onChangeSat={(value) => setAttributes({ saturation: value })}
              onChangeHue={(value) => setAttributes({ hue: value })}
            />
          </PanelBody>
          <PanelBody
            title={__("content")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <PremiumSizeUnits
              units={["px", "em"]}
              value={iconU}
              onChange={(newvalue) => setAttributes({ iconU: newvalue })}
            />
            <RangeControl
              label={__("Size")}
              value={iconSize}
              onChange={(newvalue) => setAttributes({ iconSize: newvalue })}
            />
            <ColorPalette
              label={__("Color")}
              value={iconColor}
              onchange={(newvalue) => setAttributes({ iconColor: newvalue })}
            />
            <ColorPalette
              label={__("Hover Color")}
              value={iconHoverColor}
              onchange={(newvalue) =>
                setAttributes({ iconHoverColor: newvalue })
              }
            />
            <ColorPalette
              label={__("Background Color")}
              value={backgroundColor}
              onchange={(newvalue) =>
                setAttributes({ backgroundColor: newvalue })
              }
            />
            <ColorPalette
              label={__("Background Color")}
              value={backgroundColor}
              onchange={(newvalue) =>
                setAttributes({ backgroundColor: newvalue })
              }
            />
          </PanelBody>
        </InspectorControls>
      ),
      <div className="premium-accordion-container">
        <div
          id={`premium-accordion-section-${block_id}`}
          className={`premium-accordion-section`}
        >
          <div className={`premium-accordion-${direction}`}>
            <ul className={`premium-accordion-ul premium-accordion-center`}>
              {repeaterImageAccordion.map((item, index) => {
                return (
                  <li className={`premium-accordion-li`}>
                    <div className={`premium-accordion-background`}>
                      <img src={item.imageURL} />
                    </div>
                    <div className={`premium-accordion-overlay-wrap`}>
                      <div
                        className={`accpremium-accordion-content premium-ordion-${contentPosition}`}
                      >
                        <h3 className={`premium-accordiontitle`}></h3>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>,
    ];
  }
}
export default edit;
