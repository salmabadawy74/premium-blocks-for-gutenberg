import classnames from "classnames";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBackground from "../../components/premium-background";
import PremiumIcon from "../../components/premium-icon";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/premium-icons-list";
import PremiumSizeUnits from "../../components/premium-size-units";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumMargin from "../../components/premium-margin";
import PremiumPadding from "../../components/premium-padding";
import PremiumTypo from "../../components/premium-typo";
import PremiumFilters from "../../components/premium-filters";
import PremiumBorder from "../../components/premium-border";

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
  RangeControl,
  TextareaControl,
  IconButton,
} = wp.components;

const SortableItem = SortableElement(
  ({
    edit,
    removeItem,
    newIndex,
    value,
    changeImageValue,
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
    hundleRemove,
    setIcon
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
          onSelectMedia={(newimage) => changeImageValue(newimage, newIndex)}
          onRemoveImage={() => hundleRemove(newIndex)}
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
          <FontIconPicker
          icons={iconsList}
          onChange={(newIcon) =>setIcon(newIcon,newIndex)}
          value={value.selectedicon}
          isMulti={false}
          appendTo="body"
          noSelectedPlaceholder={__("Select Icon")}
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
          onChange={() => hundleWhole(newIndex)}
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
    changeImageValue,
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
    hundleRemove,
    setIcon
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
            changeImageValue={changeImageValue}
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
            hundleRemove={ hundleRemove }
            setIcon={setIcon}
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
      skewDirection,
      height,
      heightU,
      contentPosition,
      alignPosition,
      hideDesc,
      hoverIndex,
      overlayColor,
      overlayHover,
      blur,
      bright,
      contrast,
      saturation,
      hue,
      iconU,
      iconSize,
      iconColor,
      iconHoverColor,
      backgroundColor,
      backgroundHover,
      iconShadowColor,
      iconShadowBlur,
      iconShadowHorizontal,
      iconShadowVertical,
      iconShadowPosition,
      iconborderType,
      iconborderWidth,
      iconborderColor,
      iconborderRadius,
      iconmarginTop,
      iconmarginRight,
      iconmarginBottom,
      iconmarginLeft,
      iconpaddingUnit,
      iconpaddingTop,
      iconpaddingRight,
      iconpaddingBottom,
      iconpaddingLeft,
      titleColor,
      titleSize,
      titleWeight,
      titleStyle,
      titleLetter,
      titleUpper,
      titleShadowColor,
      titleShadowBlur,
      titleShadowHorizontal,
      titleShadowVertical,
      titlemarginTop,
      titlemarginRight,
      titlemarginBottom,
      titlemarginLeft,
      titlemarginUnit,
      titlepaddingUnit,
      titlepaddingTop,
      titlepaddingRight,
      titlepaddingBottom,
      titlepaddingLeft,
      descColor,
      descSize,
      descWeight,
      descStyle,
      descLetter,
      descUpper,
      descShadowColor,
      descShadowBlur,
      descShadowHorizontal,
      descShadowVertical,
      descmarginTop,
      descmarginRight,
      descmarginBottom,
      descmarginLeft,
      descpaddingUnit,
      descpaddingTop,
      descpaddingRight,
      descpaddingBottom,
      descpaddingLeft,
      linkColor,
      linkHover,
      linkSize,
      linkWeight,
      linkStyle,
      linkLetter,
      linkUpper,
      containerborderType,
      containerborderWidth,
      containerborderRadius,
      containerborderColor,
      containerShadowColor,
      containerShadowBlur,
      containerShadowHorizontal,
      containerShadowVertical,
      containerShadowPosition,
      containermarginTop,
      containermarginRight,
      containermarginBottom,
      containermarginLeft,
      containermarginUnit,
    } = attributes;

    const changeImageValue = (newimage, newIndex) => {
      setAttributes({
        repeaterImageAccordion: onRepeaterChange(
          "imageURL",
          newimage.url,
          newIndex
        ),
      });
    };

    const hundleRemove = (newIndex) => {
      setAttributes({
        repeaterImageAccordion: onRepeaterChange("imageURL", "", newIndex),
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

    const hundleWhole = (newIndex) => {
      return repeaterImageAccordion.map((item, i) => {
        if (newIndex == i) {
          setAttributes({
            repeaterImageAccordion: onRepeaterChange(
              "whole",
              item.whole ? false : true,
              newIndex
            ),
          });
        } else {
          setAttributes({
            repeaterImageAccordion: onRepeaterChange("whole", false, i),
          });
        }
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

    const setIcon = ( newvalue, newIndex ) =>
    {
      setAttributes( {
        repeaterImageAccordion:onRepeaterChange('selectedIcon',newvalue,newIndex)
      })
    }

    const addNewFancyText = () => {
      setAttributes({
        repeaterImageAccordion: repeaterImageAccordion.concat([
          {
            title: __("Image "),
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
                  changeImageValue={changeImageValue}
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
                  hundleRemove={ hundleRemove }
                  setIcon={setIcon}
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
              onChange={(newvalue) => setAttributes({ direction: newvalue })}
            />
            {"horizontal" === direction && (
              <Fragment>
                <ToggleControl
                  label={__("Skew Images")}
                  value={skew}
                  onChange={() => setAttributes({ skew: !skew })}
                />
                <SelectControl
                  label={__("Skew Direction")}
                  value={skewDirection}
                  options={[
                    { label: __("Right"), value: "right" },
                    { label: __("Left"), value: "left" },
                  ]}
                  onChange={(newvalue) =>
                    setAttributes({ skewDirection: newvalue })
                  }
                />
              </Fragment>
            )}

            <PremiumSizeUnits
              units={["px", "em", "vh"]}
              value={heightU}
              onChange={(newvalue) => setAttributes({ heightU: newvalue })}
            />
            <RangeControl
              label={__("Image Height")}
              value={height}
              onChange={(newvalue) => setAttributes({ height: newvalue })}
              min={0}
              max={1000}
            />
            <Fragment>
              <h2> {__("Content Vertical Position")}</h2>
              <IconButton
                key={"start"}
                icon="editor-alignleft"
                label="Left"
                onClick={() => setAttributes({ contentPosition: "start" })}
                aria-pressed={"start" === contentPosition}
                isPrimary={"start" === contentPosition}
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
                key={"end"}
                icon="editor-alignright"
                label="Right"
                onClick={() => setAttributes({ contentPosition: "end" })}
                aria-pressed={"end" === contentPosition}
                isPrimary={"end" === contentPosition}
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
              label={__("Backgroud Hover Color")}
              value={backgroundHover}
              onChange={(newvalue) =>
                setAttributes({ backgroundHover: newvalue })
              }
            />
            <PremiumBoxShadow
              inner={true}
              color={iconShadowColor}
              blur={iconShadowBlur}
              horizontal={iconShadowHorizontal}
              vertical={iconShadowVertical}
              position={iconShadowPosition}
              onChangeColor={(newColor) =>
                setAttributes({
                  iconShadowColor: newColor.hex,
                })
              }
              onChangeBlur={(newBlur) =>
                setAttributes({
                  iconShadowBlur: newBlur,
                })
              }
              onChangehHorizontal={(newValue) =>
                setAttributes({
                  iconShadowHorizontal: newValue,
                })
              }
              onChangeVertical={(newValue) =>
                setAttributes({
                  iconShadowVertical: newValue,
                })
              }
              onChangePosition={(newValue) =>
                setAttributes({
                  iconShadowPosition: newValue,
                })
              }
            />
            <PremiumBorder
              borderType={iconborderType}
              borderWidth={iconborderWidth}
              borderColor={iconborderColor}
              borderRadius={iconborderRadius}
              onChangeType={(newType) =>
                setAttributes({ iconborderType: newType })
              }
              onChangeWidth={(newWidth) =>
                setAttributes({
                  iconborderWidth: newWidth === undefined ? 0 : newWidth,
                })
              }
              onChangeColor={(colorValue) =>
                setAttributes({
                  iconborderColor:
                    colorValue === undefined ? "transparent" : colorValue.hex,
                })
              }
              onChangeRadius={(newRadius) =>
                setAttributes({
                  iconborderRadius: newRadius === undefined ? 0 : newRadius,
                })
              }
            />
            <PremiumMargin
              directions={["all"]}
              marginTop={iconmarginTop}
              marginRight={iconmarginRight}
              marginBottom={iconmarginBottom}
              marginLeft={iconmarginLeft}
              onChangeMarTop={(value) =>
                setAttributes({
                  iconmarginTop: value === undefined ? 0 : value,
                })
              }
              onChangeMarRight={(value) =>
                setAttributes({
                  iconmarginRight: value === undefined ? 0 : value,
                })
              }
              onChangeMarBottom={(value) =>
                setAttributes({
                  iconmarginBottom: value === undefined ? 0 : value,
                })
              }
              onChangeMarLeft={(value) =>
                setAttributes({
                  iconmarginLeft: value === undefined ? 0 : value,
                })
              }
              showUnits={true}
              onChangeMarSizeUnit={(newvalue) =>
                setAttributes({ iconmarginUnit: newvalue })
              }
            />
            <PremiumPadding
              paddingTop={iconpaddingTop}
              paddingRight={iconpaddingRight}
              paddingBottom={iconpaddingBottom}
              paddingLeft={iconpaddingLeft}
              onChangePadTop={(value) =>
                setAttributes({
                  iconpaddingTop: value === undefined ? 0 : value,
                })
              }
              onChangePadRight={(value) =>
                setAttributes({
                  iconpaddingRight: value === undefined ? 0 : value,
                })
              }
              onChangePadBottom={(value) =>
                setAttributes({
                  iconpaddingBottom: value === undefined ? 0 : value,
                })
              }
              onChangePadLeft={(value) =>
                setAttributes({
                  iconpaddingLeft: value === undefined ? 0 : value,
                })
              }
              showUnits={true}
              selectedUnit={iconpaddingUnit}
              onChangePadSizeUnit={(newvalue) =>
                setAttributes({ iconpaddingUnit: newvalue })
              }
            />
          </PanelBody>
          <PanelBody
            title={__("Title")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <ColorPalette
              label={__("Color")}
              value={titleColor}
              onChange={(newvalue) => setAttributes({ titleColor: newvalue })}
            />
            <PremiumTypo
              components={["size", "weight", "style", "upper", "spacing"]}
              size={titleSize}
              onChangeSize={(newSize) => setAttributes({ titleSize: newSize })}
              weight={titleWeight}
              style={titleStyle}
              spacing={titleLetter}
              upper={titleUpper}
              onChangeWeight={(newWeight) =>
                setAttributes({ titleWeight: newWeight })
              }
              onChangeStyle={(newStyle) =>
                setAttributes({ titleStyle: newStyle })
              }
              onChangeSpacing={(newValue) =>
                setAttributes({ titleLetter: newValue })
              }
              onChangeUpper={(check) => setAttributes({ titleUpper: check })}
            />
            <PremiumTextShadow
              color={titleShadowColor}
              blur={titleShadowBlur}
              horizontal={titleShadowHorizontal}
              vertical={titleShadowVertical}
              onChangeColor={(newColor) =>
                setAttributes({ titleShadowColor: newColor.hex })
              }
              onChangeBlur={(newBlur) =>
                setAttributes({ titleShadowBlur: newBlur })
              }
              onChangehHorizontal={(newValue) =>
                setAttributes({ titleShadowHorizontal: newValue })
              }
              onChangeVertical={(newValue) =>
                setAttributes({ titleShadowVertical: newValue })
              }
            />
            <PremiumMargin
              directions={["all"]}
              marginTop={titlemarginTop}
              marginRight={titlemarginRight}
              marginBottom={titlemarginBottom}
              marginLeft={titlemarginLeft}
              onChangeMarTop={(value) =>
                setAttributes({
                  titlemarginTop: value === undefined ? 0 : value,
                })
              }
              onChangeMarRight={(value) =>
                setAttributes({
                  titlemarginRight: value === undefined ? 0 : value,
                })
              }
              onChangeMarBottom={(value) =>
                setAttributes({
                  titlemarginBottom: value === undefined ? 0 : value,
                })
              }
              onChangeMarLeft={(value) =>
                setAttributes({
                  titlemarginLeft: value === undefined ? 0 : value,
                })
              }
              showUnits={true}
              onChangeMarSizeUnit={(newvalue) =>
                setAttributes({ tiilemarginUnit: newvalue })
              }
            />
            <PremiumPadding
              paddingTop={titlepaddingTop}
              paddingRight={titlepaddingRight}
              paddingBottom={titlepaddingBottom}
              paddingLeft={titlepaddingLeft}
              onChangePadTop={(value) =>
                setAttributes({
                  titlepaddingTop: value === undefined ? 0 : value,
                })
              }
              onChangePadRight={(value) =>
                setAttributes({
                  titlepaddingRight: value === undefined ? 0 : value,
                })
              }
              onChangePadBottom={(value) =>
                setAttributes({
                  titlepaddingBottom: value === undefined ? 0 : value,
                })
              }
              onChangePadLeft={(value) =>
                setAttributes({
                  titlepaddingLeft: value === undefined ? 0 : value,
                })
              }
              showUnits={true}
              selectedUnit={titlepaddingUnit}
              onChangePadSizeUnit={(newvalue) =>
                setAttributes({ titlepaddingUnit: newvalue })
              }
            />
          </PanelBody>
          <PanelBody
            title={__("Description")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <ColorPalette
              label={__("Color")}
              value={descColor}
              onChange={(newvalue) => setAttributes({ descColor: newvalue })}
            />
            <PremiumTypo
              components={["size", "weight", "style", "upper", "spacing"]}
              size={descSize}
              onChangeSize={(newSize) => setAttributes({ descSize: newSize })}
              weight={descWeight}
              style={descStyle}
              spacing={descLetter}
              upper={descUpper}
              onChangeWeight={(newWeight) =>
                setAttributes({ desceWeight: newWeight })
              }
              onChangeStyle={(newStyle) =>
                setAttributes({ desceStyle: newStyle })
              }
              onChangeSpacing={(newValue) =>
                setAttributes({ desceLetter: newValue })
              }
              onChangeUpper={(check) => setAttributes({ desceUpper: check })}
            />
            <PremiumTextShadow
              color={descShadowColor}
              blur={descShadowBlur}
              horizontal={descShadowHorizontal}
              vertical={descShadowVertical}
              onChangeColor={(newColor) =>
                setAttributes({ descShadowColor: newColor.hex })
              }
              onChangeBlur={(newBlur) =>
                setAttributes({ descShadowBlur: newBlur })
              }
              onChangehHorizontal={(newValue) =>
                setAttributes({ descShadowHorizontal: newValue })
              }
              onChangeVertical={(newValue) =>
                setAttributes({ descShadowVertical: newValue })
              }
            />
            <PremiumMargin
              directions={["all"]}
              marginTop={descmarginTop}
              marginRight={descmarginRight}
              marginBottom={descmarginBottom}
              marginLeft={descmarginLeft}
              onChangeMarTop={(value) =>
                setAttributes({
                  descmarginTop: value === undefined ? 0 : value,
                })
              }
              onChangeMarRight={(value) =>
                setAttributes({
                  descmarginRight: value === undefined ? 0 : value,
                })
              }
              onChangeMarBottom={(value) =>
                setAttributes({
                  descmarginBottom: value === undefined ? 0 : value,
                })
              }
              onChangeMarLeft={(value) =>
                setAttributes({
                  descmarginLeft: value === undefined ? 0 : value,
                })
              }
              showUnits={true}
              onChangeMarSizeUnit={(newvalue) =>
                setAttributes({ descmarginUnit: newvalue })
              }
            />
            <PremiumPadding
              paddingTop={descpaddingTop}
              paddingRight={descpaddingRight}
              paddingBottom={descpaddingBottom}
              paddingLeft={descpaddingLeft}
              onChangePadTop={(value) =>
                setAttributes({
                  descpaddingTop: value === undefined ? 0 : value,
                })
              }
              onChangePadRight={(value) =>
                setAttributes({
                  descpaddingRight: value === undefined ? 0 : value,
                })
              }
              onChangePadBottom={(value) =>
                setAttributes({
                  descpaddingBottom: value === undefined ? 0 : value,
                })
              }
              onChangePadLeft={(value) =>
                setAttributes({
                  descpaddingLeft: value === undefined ? 0 : value,
                })
              }
              showUnits={true}
              selectedUnit={descpaddingUnit}
              onChangePadSizeUnit={(newvalue) =>
                setAttributes({ descpaddingUnit: newvalue })
              }
            />
          </PanelBody>
          <PanelBody
            title={__("Link")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <ColorPalette
              label={__("Color")}
              value={linkColor}
              onChange={(newvalue) => setAttributes({ linkColor: newvalue })}
            />
            <ColorPalette
              label={__("Hover Color")}
              value={linkHover}
              onChange={(newvalue) => setAttributes({ linkColor: newvalue })}
            />
            <PremiumTypo
              components={["size", "weight", "style", "upper", "spacing"]}
              size={linkSize}
              onChangeSize={(newSize) => setAttributes({ linkSize: newSize })}
              weight={linkWeight}
              style={linkStyle}
              spacing={linkLetter}
              upper={linkUpper}
              onChangeWeight={(newWeight) =>
                setAttributes({ linkWeight: newWeight })
              }
              onChangeStyle={(newStyle) =>
                setAttributes({ linkStyle: newStyle })
              }
              onChangeSpacing={(newValue) =>
                setAttributes({ linkLetter: newValue })
              }
              onChangeUpper={(check) => setAttributes({ linkUpper: check })}
            />
          </PanelBody>
          <PanelBody
            title={__("container")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <PremiumBorder
              borderType={containerborderType}
              borderWidth={containerborderWidth}
              borderColor={containerborderColor}
              borderRadius={containerborderRadius}
              onChangeType={(newType) =>
                setAttributes({ containerborderType: newType })
              }
              onChangeWidth={(newWidth) =>
                setAttributes({
                  containerborderWidth: newWidth === undefined ? 0 : newWidth,
                })
              }
              onChangeColor={(colorValue) =>
                setAttributes({
                  containerborderColor:
                    colorValue === undefined ? "transparent" : colorValue.hex,
                })
              }
              onChangeRadius={(newRadius) =>
                setAttributes({
                  containerborderRadius:
                    newRadius === undefined ? 0 : newRadius,
                })
              }
            />
            <PremiumBoxShadow
              inner={true}
              color={containerShadowColor}
              blur={containerShadowBlur}
              horizontal={containerShadowHorizontal}
              vertical={containerShadowVertical}
              position={containerShadowPosition}
              onChangeColor={(newColor) =>
                setAttributes({
                  containerShadowColor: newColor.hex,
                })
              }
              onChangeBlur={(newBlur) =>
                setAttributes({
                  containerShadowBlur: newBlur,
                })
              }
              onChangehHorizontal={(newValue) =>
                setAttributes({
                  containerShadowHorizontal: newValue,
                })
              }
              onChangeVertical={(newValue) =>
                setAttributes({
                  containerShadowVertical: newValue,
                })
              }
              onChangePosition={(newValue) =>
                setAttributes({
                  containerShadowPosition: newValue,
                })
              }
            />
            <PremiumMargin
              directions={["all"]}
              marginTop={containermarginTop}
              marginRight={containermarginRight}
              marginBottom={containermarginBottom}
              marginLeft={containermarginLeft}
              onChangeMarTop={(value) =>
                setAttributes({
                  containermarginTop: value === undefined ? 0 : value,
                })
              }
              onChangeMarRight={(value) =>
                setAttributes({
                  containermarginRight: value === undefined ? 0 : value,
                })
              }
              onChangeMarBottom={(value) =>
                setAttributes({
                  containermarginBottom: value === undefined ? 0 : value,
                })
              }
              onChangeMarLeft={(value) =>
                setAttributes({
                  containermarginLeft: value === undefined ? 0 : value,
                })
              }
              showUnits={true}
              onChangeMarSizeUnit={(newvalue) =>
                setAttributes({ containermarginUnit: newvalue })
              }
            />
          </PanelBody>
        </InspectorControls>
      ),
      <div className="premium-accordion-container">
        <div
          id={`premium-accordion-section-${block_id}`}
          className={`premium-accordion-section`}
          style={{
            border: containerborderType,
            borderWidth: containerborderWidth + "px",
            borderRadius: containerborderRadius + "px",
            borderColor: containerborderColor,
            boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`,
            marginTop: containermarginTop + containermarginUnit,
            marginBottom: containermarginBottom + containermarginUnit,
            marginRight: containermarginRight + containermarginUnit,
            marginLeft: containermarginLeft + containermarginUnit,
          }}
        >
          <div className={`premium-accordion-${direction}`}>
            <ul className={`premium-accordion-ul premium-accordion-center`}>
              {repeaterImageAccordion.map((item, index) => {
                return (
                  <li
                    className={`premium-accordion-li`}
                    id={`premium-accordion-li-${index}`}
                    style={{
                      height: height + heightU,
                      filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`,
                    }}
                  >
                    <div className={`premium-accordion-background`}></div>
                    <a
                      className={`premium-accordion-item-link`}
                      title={item.urlTitle}
                      href={item.url}
                      style={{
                        color: linkColor,
                        fontSize: linkSize + "px",
                        fontWeight: linkWeight,
                        fontStyle: linkStyle,
                        letterSpacing: linkLetter,
                      }}
                    >
                      {item.urlTitle}
                    </a>
                    <div
                      className={`premium-accordion-overlay-wrap`}
                      style={{
                        alignItems: contentPosition,
                        justifyContent: alignPosition,
                        backgroundColor: backgroundColor,
                      }}
                    >
                      <div
                        className={`accpremium-accordion-content premium-accordion-${contentPosition}`}
                      >
                        <h3
                          className={`premium-accordion-title`}
                          style={{
                            font: titleSize + "px",
                            color: titleColor,
                            fontWeight: titleWeight,
                            letterSpacing: titleLetter,
                            fontStyle: titleStyle,
                            marginTop: titlemarginTop + "px",
                            marginBottom: titlemarginBottom + "px",
                            marginRight: titlemarginRight + "px",
                            marginLeft: titlemarginLeft + "px",
                            paddingTop: titlepaddingTop + titlepaddingUnit,
                            paddingBottom:
                              titlepaddingBottom + titlepaddingUnit,
                            paddingRight: titlepaddingRight + titlepaddingUnit,
                            paddingLeft: titlepaddingLeft + titlepaddingUnit,
                            textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                          }}
                        >
                          {item.title}
                        </h3>
                        <div
                          className={`premium-accordion-description`}
                          style={{
                            font: descSize + "px",
                            color: descColor,
                            fontWeight: descWeight,
                            letterSpacing: descLetter,
                            fontStyle: descStyle,
                            marginTop: descmarginTop + "px",
                            marginBottom: descmarginBottom + "px",
                            marginRight: descmarginRight + "px",
                            marginLeft: descmarginLeft + "px",
                            paddingTop: descpaddingTop + descpaddingUnit,
                            paddingBottom: descpaddingBottom + descpaddingUnit,
                            paddingRight: descpaddingRight + descpaddingUnit,
                            paddingLeft: descpaddingLeft + descpaddingUnit,
                            textShadow: `${descShadowHorizontal}px ${descShadowVertical}px ${descShadowBlur}px ${descShadowColor}`,
                          }}
                        >
                          {item.desc}
                        </div>
                      </div>
                    </div>
                    <style
                      dangerouslySetInnerHTML={{
                        __html: [
                          `#premium-accordion-section-${block_id} #premium-accordion-li-${index} .premium-accordion-background{`,
                          `background-image:url(${item.imageURL});`,
                          `background-size : ${item.backgroundSize};`,
                          `background-position : ${item.backgroundPosition};`,
                          `background-repeat : ${item.backgroundRepeat};`,
                          "}",
                        ].join("\n"),
                      }}
                    />
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
