import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBackground from "../../components/premium-background";
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
  TabPanel,
} = wp.components;

const SortableItem = SortableElement(
  ({
    edit,
    removeItem,
    newIndex,
    value,
    changeImageValue,
    UpdateValues,
    items,
    hundleRemove,
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
          fixed={value.fixed}
          onSelectMedia={(newimage) => changeImageValue(newimage, newIndex)}
          onRemoveImage={() => hundleRemove(newIndex)}
          onChangeBackPos={(newPos) =>
            UpdateValues(newPos, "backgroundPosition", newIndex)
          }
          onchangeBackRepeat={(newRepeat) =>
            UpdateValues(newRepeat, "backgroundRepeat", newIndex)
          }
          onChangeBackSize={(newSize) =>
            UpdateValues(newSize, "backgroundSize", newIndex)
          }
          onChangeFixed={() => UpdateValues(null, "fixed", newIndex)}
        />
        <ToggleControl
          label={__("Content")}
          checked={value.content}
          onChange={() => UpdateValues(null, "content", newIndex)}
        />
        {value.content && (
          <ToggleControl
            label={__("Icon")}
            checked={value.icon}
            onChange={() => UpdateValues(null, "icon", newIndex)}
          />
        )}
        {value.icon && (
          <FontIconPicker
            icons={iconsList}
            onChange={(newIcon) =>
              UpdateValues(newIcon, "selectedIcon", newIndex)
            }
            value={value.selectedIcon}
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
              onChange={(newTitle) => UpdateValues(newTitle, "title", newIndex)}
            />
            <TextareaControl
              label="Text"
              help="Enter some text"
              value={value.desc}
              onChange={(newDesc) => UpdateValues(newDesc, "desc", newIndex)}
            />
            <ToggleControl
              label={__("Custom Position")}
              checked={value.custom}
              onChange={() => UpdateValues(null, "custom", newIndex)}
            />
          </Fragment>
        )}
        {value.custom && (
          <Fragment>
            <PremiumSizeUnits
              units={["px", "em", "%"]}
              value={value.horizontalU}
              onChangeSizeUnit={(newHUnit) =>
                UpdateValues(newHUnit, "horizontalU", newIndex)
              }
            />
            <RangeControl
              label={__("Horizontal Offset")}
              value={value.horizontal}
              onChange={(newvalue) =>
                UpdateValues(newvalue, "horizontal", newIndex)
              }
            />
            <PremiumSizeUnits
              units={["px", "em", "%"]}
              value={value.verticalU}
              onChangeSizeUnit={(newvalue) =>
                UpdateValues(newvalue, "verticalU", newIndex)
              }
            />
            <RangeControl
              label={__("Vertical Offset")}
              value={value.vertical}
              onChange={(newvalue) =>
                UpdateValues(newvalue, "vertical", newIndex)
              }
            />
          </Fragment>
        )}

        <ToggleControl
          label={__("Link")}
          checked={value.link}
          onChange={() => UpdateValues(null, "link", newIndex)}
        />
        {value.link && (
          <Fragment>
            <TextControl
              label={__("link")}
              value={value.url}
              onChange={(newvalue) => UpdateValues(newvalue, "url", newIndex)}
            />
            <TextControl
              label={__("link Title")}
              value={value.urlTitle}
              onChange={(newvalue) =>
                UpdateValues(newvalue, "urlTitle", newIndex)
              }
            />
          </Fragment>
        )}
        <ToggleControl
          label={__("Whole Image Link")}
          checked={value.whole}
          onChange={() => UpdateValues(null, "whole", newIndex)}
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
    UpdateValues,
    hundleRemove,
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
            UpdateValues={UpdateValues}
            hundleRemove={hundleRemove}
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
      iconbackgroundColor,
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
        repeaterImageAccordion: onRepeaterChange("imageURL", null, newIndex),
      });
    };

    const UpdateValues = (newValue, attr, newIndex) => {
      return repeaterImageAccordion.map((item, i) => {
        if (newIndex == i) {
          if (newValue === null) {
            setAttributes({
              repeaterImageAccordion: onRepeaterChange(
                attr,
                item[`${attr}`] ? false : true,
                newIndex
              ),
            });
          } else {
            setAttributes({
              repeaterImageAccordion: onRepeaterChange(
                attr,
                newValue,
                newIndex
              ),
            });
          }
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

    const addNewItem = () => {
      setAttributes({
        repeaterImageAccordion: repeaterImageAccordion.concat([
          {
            title: __(`Image`),
            edit: true,
          },
        ]),
      });
    };

    const skewClass = skew ? "premium-accordion-skew" : null;
    const hundleHide = (newvalue) => {
      setAttributes({ hideDesc: newvalue });
      if (hideDesc > window.outerWidth) {
        document.querySelector(
          ".premium-accordion-description"
        ).style.cssText = `display:none`;
      }
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
              <div className="premium-image-accordion-control-content">
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
                  UpdateValues={UpdateValues}
                  hundleRemove={hundleRemove}
                />
                <div className="premium-repeater-btn__wrap">
                  <button
                    className={"premium-repeater-btn"}
                    onClick={() => addNewItem()}
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
              onChange={(value) => setAttributes({ hoverIndex: value })}
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
                  checked={skew}
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
              onChangeSizeUnit={(newvalue) =>
                setAttributes({ heightU: newvalue })
              }
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
                icon="arrow-up"
                label="Up"
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
                icon="arrow-down"
                label="Down"
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
              onChange={(newvalue) => hundleHide(newvalue)}
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
              onChange={(newColor) => setAttributes({ overlayColor: newColor })}
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
            title={__("Content")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <TabPanel
              className="Premium-image-accordion-tab-panel"
              activeClass="active-tab"
              tabs={[
                {
                  name: "icon",
                  title: "Icon",
                  className: "premium-tab",
                },
                {
                  name: "title",
                  title: "Title",
                  className: "premium-tab",
                },
                {
                  name: "description",
                  title: "Description",
                  className: "premium-tab",
                },
              ]}
            >
              {(tab) => {
                let tabout;

                if ("icon" === tab.name) {
                  tabout = (
                    <Fragment>
                      <PremiumSizeUnits
                        units={["px", "em"]}
                        value={iconU}
                        onChange={(newvalue) =>
                          setAttributes({ iconU: newvalue })
                        }
                      />
                      <RangeControl
                        label={__("Size")}
                        value={iconSize}
                        onChange={(newvalue) =>
                          setAttributes({ iconSize: newvalue })
                        }
                      />
                      <ColorPalette
                        value={iconColor}
                        onChange={(newvalue) =>
                          setAttributes({ iconColor: newvalue })
                        }
                      />
                      <ColorPalette
                        value={iconHoverColor}
                        onChange={(newvalue) =>
                          setAttributes({ iconHoverColor: newvalue })
                        }
                      />
                      <ColorPalette
                        value={iconbackgroundColor}
                        onChange={(newvalue) =>
                          setAttributes({ iconbackgroundColor: newvalue })
                        }
                      />

                      <ColorPalette
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
                            iconborderWidth:
                              newWidth === undefined ? 0 : newWidth,
                          })
                        }
                        onChangeColor={(colorValue) =>
                          setAttributes({
                            iconborderColor:
                              colorValue === undefined
                                ? "transparent"
                                : colorValue.hex,
                          })
                        }
                        onChangeRadius={(newRadius) =>
                          setAttributes({
                            iconborderRadius:
                              newRadius === undefined ? 0 : newRadius,
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
                            iconmarginTop: value,
                          })
                        }
                        onChangeMarRight={(value) =>
                          setAttributes({
                            iconmarginRight: value,
                          })
                        }
                        onChangeMarBottom={(value) =>
                          setAttributes({
                            iconmarginBottom: value,
                          })
                        }
                        onChangeMarLeft={(value) =>
                          setAttributes({
                            iconmarginLeft: value,
                          })
                        }
                      />
                      <PremiumPadding
                        paddingTop={iconpaddingTop}
                        paddingRight={iconpaddingRight}
                        paddingBottom={iconpaddingBottom}
                        paddingLeft={iconpaddingLeft}
                        onChangePadTop={(value) =>
                          setAttributes({
                            iconpaddingTop: value,
                          })
                        }
                        onChangePadRight={(value) =>
                          setAttributes({
                            iconpaddingRight: value,
                          })
                        }
                        onChangePadBottom={(value) =>
                          setAttributes({
                            iconpaddingBottom: value,
                          })
                        }
                        onChangePadLeft={(value) =>
                          setAttributes({
                            iconpaddingLeft: value,
                          })
                        }
                        showUnits={true}
                        selectedUnit={iconpaddingUnit}
                        onChangePadSizeUnit={(newvalue) =>
                          setAttributes({ iconpaddingUnit: newvalue })
                        }
                      />
                    </Fragment>
                  );
                } else if ("title" === tab.name) {
                  tabout = (
                    <Fragment>
                      <ColorPalette
                        value={titleColor}
                        onChange={(newvalue) =>
                          setAttributes({ titleColor: newvalue })
                        }
                      />
                      <PremiumTypo
                        components={[
                          "size",
                          "weight",
                          "style",
                          "upper",
                          "spacing",
                        ]}
                        size={titleSize}
                        onChangeSize={(newSize) =>
                          setAttributes({ titleSize: newSize })
                        }
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
                        onChangeUpper={(check) =>
                          setAttributes({ titleUpper: check })
                        }
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
                            titlemarginTop: value,
                          })
                        }
                        onChangeMarRight={(value) =>
                          setAttributes({
                            titlemarginRight: value,
                          })
                        }
                        onChangeMarBottom={(value) =>
                          setAttributes({
                            titlemarginBottom: value,
                          })
                        }
                        onChangeMarLeft={(value) =>
                          setAttributes({
                            titlemarginLeft: value,
                          })
                        }
                      />
                      <PremiumPadding
                        paddingTop={titlepaddingTop}
                        paddingRight={titlepaddingRight}
                        paddingBottom={titlepaddingBottom}
                        paddingLeft={titlepaddingLeft}
                        onChangePadTop={(value) =>
                          setAttributes({
                            titlepaddingTop: value,
                          })
                        }
                        onChangePadRight={(value) =>
                          setAttributes({
                            titlepaddingRight: value,
                          })
                        }
                        onChangePadBottom={(value) =>
                          setAttributes({
                            titlepaddingBottom: value,
                          })
                        }
                        onChangePadLeft={(value) =>
                          setAttributes({
                            titlepaddingLeft: value,
                          })
                        }
                        showUnits={true}
                        selectedUnit={titlepaddingUnit}
                        onChangePadSizeUnit={(newvalue) =>
                          setAttributes({ titlepaddingUnit: newvalue })
                        }
                      />
                    </Fragment>
                  );
                } else {
                  tabout = (
                    <Fragment>
                      <ColorPalette
                        value={descColor}
                        onChange={(newvalue) =>
                          setAttributes({ descColor: newvalue })
                        }
                      />
                      <PremiumTypo
                        components={[
                          "size",
                          "weight",
                          "style",
                          "upper",
                          "spacing",
                        ]}
                        size={descSize}
                        onChangeSize={(newSize) =>
                          setAttributes({ descSize: newSize })
                        }
                        weight={descWeight}
                        style={descStyle}
                        spacing={descLetter}
                        upper={descUpper}
                        onChangeWeight={(newWeight) =>
                          setAttributes({ descWeight: newWeight })
                        }
                        onChangeStyle={(newStyle) =>
                          setAttributes({ descStyle: newStyle })
                        }
                        onChangeSpacing={(newValue) =>
                          setAttributes({ descLetter: newValue })
                        }
                        onChangeUpper={(check) =>
                          setAttributes({ descUpper: check })
                        }
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
                            descmarginTop: value,
                          })
                        }
                        onChangeMarRight={(value) =>
                          setAttributes({
                            descmarginRight: value,
                          })
                        }
                        onChangeMarBottom={(value) =>
                          setAttributes({
                            descmarginBottom: value,
                          })
                        }
                        onChangeMarLeft={(value) =>
                          setAttributes({
                            descmarginLeft: value,
                          })
                        }
                      />
                      <PremiumPadding
                        paddingTop={descpaddingTop}
                        paddingRight={descpaddingRight}
                        paddingBottom={descpaddingBottom}
                        paddingLeft={descpaddingLeft}
                        onChangePadTop={(value) =>
                          setAttributes({
                            descpaddingTop: colorValue
                          })
                        }
                        onChangePadRight={(value) =>
                          setAttributes({
                            descpaddingRight: value
                          })
                        }
                        onChangePadBottom={(value) =>
                          setAttributes({
                            descpaddingBottom: value
                          })
                        }
                        onChangePadLeft={(value) =>
                          setAttributes({
                            descpaddingLeft: value
                          })
                        }
                        showUnits={true}
                        selectedUnit={descpaddingUnit}
                        onChangePadSizeUnit={(newvalue) =>
                          setAttributes({ descpaddingUnit: newvalue })
                        }
                      />
                    </Fragment>
                  );
                }
                return <div>{tabout}</div>;
              }}
            </TabPanel>
          </PanelBody>
          <PanelBody
            title={__("Link")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <ColorPalette
              value={linkColor}
              onChange={(newvalue) => setAttributes({ linkColor: newvalue })}
            />
            <ColorPalette
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
                  containermarginTop: value,
                })
              }
              onChangeMarRight={(value) =>
                setAttributes({
                  containermarginRight: value,
                })
              }
              onChangeMarBottom={(value) =>
                setAttributes({
                  containermarginBottom: value,
                })
              }
              onChangeMarLeft={(value) =>
                setAttributes({
                  containermarginLeft: value,
                })
              }
            />
          </PanelBody>
        </InspectorControls>
      ),
      <div className="premium-accordion-container">
        <div
          id={`premium-accordion-section-${block_id}`}
          className={`premium-accordion-section ${skewClass}`}
          data-skew={skew ? skewDirection : null}
          data-hide={hideDesc}
          style={{
            border: containerborderType,
            borderWidth: containerborderWidth + "px",
            borderRadius: containerborderRadius + "px",
            borderColor: containerborderColor,
            boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`,
            marginTop: containermarginTop,
            marginBottom: containermarginBottom,
            marginRight: containermarginRight,
            marginLeft: containermarginLeft,
          }}
        >
          <div className={`premium-accordion-${direction}`}>
            <ul
              className={`premium-accordion-ul premium-accordion-${contentPosition}`}
            >
              {repeaterImageAccordion.map((item, index) => {
                return (
                  <li
                    className={`premium-accordion-li ${
                      index === hoverIndex
                        ? "premium-accordion-li-active"
                        : null
                    }`}
                    id={`premium-accordion-li-${index}`}
                    style={{
                      height: height + heightU,
                      filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`,
                    }}
                  >
                    <div className={`premium-accordion-background`}></div>

                    <div
                      className={`premium-accordion-overlay-wrap`}
                      style={{
                        alignItems: contentPosition,
                        justifyContent: alignPosition,
                      }}
                    >
                      {item.content && (
                        <div
                          className={`premium-accordion-content premium-accordion-${alignPosition} ${
                            item.custom ? "custom-content" : null
                          }`}
                        >
                          {item.icon && (
                            <i
                              className={`premium-accordion-icon ${item.selectedIcon}`}
                              style={{
                                fontStyle: "normal",
                                fontSize: iconSize + iconU,
                                paddingTop: iconpaddingTop + iconpaddingUnit,
                                paddingRight:
                                  iconpaddingRight + iconpaddingUnit,
                                paddingBottom:
                                  iconpaddingBottom + iconpaddingUnit,
                                paddingLeft: iconpaddingLeft + iconpaddingUnit,
                                boxShadow: `${iconShadowHorizontal}px ${iconShadowVertical}px ${iconShadowBlur}px ${iconShadowColor} ${iconShadowPosition}`,
                                border: iconborderType,
                                borderWidth: iconborderWidth + "px",
                                borderRadius: iconborderRadius + "px",
                                borderColor: iconborderColor,
                                marginTop: iconmarginTop,
                                marginBottom: iconmarginBottom,
                                marginRight: iconmarginRight,
                                marginLeft: iconmarginLeft,
                              }}
                            ></i>
                          )}
                          <h3
                            className={`premium-accordion-title`}
                            style={{
                              fontSize: titleSize + "px",
                              color: titleColor,
                              fontWeight: titleWeight,
                              letterSpacing: titleLetter,
                              textTransform: titleUpper ? "uppercase" : null,
                              fontStyle: titleStyle,
                              paddingTop: titlepaddingTop + titlepaddingUnit,
                              paddingRight: titlepaddingRight + titlepaddingUnit,
                              paddingBottom: titlepaddingBottom + titlepaddingUnit,
                              paddingLeft: titlepaddingLeft + titlepaddingUnit,
                              marginTop: titlemarginTop,
                              marginBottom: titlemarginBottom,
                              marginRight: titlemarginRight,
                              marginLeft: titlemarginLeft,
                              textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                            }}
                          >
                            {item.title}
                          </h3>
                          <div
                            className={`premium-accordion-description`}
                            style={{
                              fontSize: descSize + "px",
                              color: descColor,
                              fontWeight: descWeight,
                              letterSpacing: descLetter,
                              fontStyle: descStyle,
                              paddingTop: descpaddingTop + descpaddingUnit,
                              paddingRight: descpaddingRight + descpaddingUnit,
                              paddingBottom: descpaddingBottom + descpaddingUnit,
                              paddingLeft: descpaddingLeft + descpaddingUnit,
                              textTransform: descUpper ? "uppercase" : null,
                              marginTop: descmarginTop,
                              marginBottom: descmarginBottom,
                              marginRight: descmarginRight,
                              marginLeft: descmarginLeft,
                              textShadow: `${descShadowHorizontal}px ${descShadowVertical}px ${descShadowBlur}px ${descShadowColor}`,
                            }}
                          >
                            {item.desc}
                          </div>
                          {item.link && (
                            <a
                              className={`${
                                item.whole
                                  ? "premium-accordion-item-link"
                                  : "premium-accordion-item-link-title"
                              }`}
                              title={item.urlTitle}
                              href={item.url}
                              style={{
                                fontSize: linkSize + "px",
                                fontWeight: linkWeight,
                                fontStyle: linkStyle,
                                letterSpacing: linkLetter,
                                textTransform: linkUpper ? "uppercase" : null,
                              }}
                            >
                              {item.whole ? " " : item.urlTitle}
                            </a>
                          )}
                        </div>
                      )}
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
                          `#premium-accordion-section-${block_id} #premium-accordion-li-${index} .custom-content{`,
                          `position: absolute;`,
                          `top:${item.horizontal}${item.horizontalU};`,
                          `left:${item.vertical}${item.verticalU};`,
                          "}",
                          `.premium-accordion-section .premium-accordion-item-link {`,
                          `color: ${linkColor};`,
                          "}",
                          `.premium-accordion-section:hover .premium-accordion-item-link {`,
                          `color: ${linkHover};`,
                          "}",
                          ".premium-accordion-section .premium-accordion-overlay-wrap{",
                          `background-color: ${overlayColor};`,
                          "}",
                          `.premium-accordion-section:hover .premium-accordion-overlay-wrap {`,
                          `background-color: ${overlayHover};`,
                          "}",
                          ` .premium-accordion-section .premium-accordion-icon{`,
                          `color:${iconColor};`,
                          `background-color :${iconbackgroundColor};`,
                          "}",
                          ` .premium-accordion-section:hover .premium-accordion-icon{`,
                          `color:${iconHoverColor};`,
                          `background-color :${backgroundHover};`,
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
