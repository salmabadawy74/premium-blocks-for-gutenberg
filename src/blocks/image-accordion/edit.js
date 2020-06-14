import classnames from "classnames"
import styling from "./styling"
import iconsList from "../../components/premium-icons-list";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import PremiumRangeResponsive from "../../components/premium-range-responsive";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumFilters from "../../components/premium-filters";
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import DefaultImage from "../../components/default-image";
import { fancyText } from "../../../assets/js/settings";

const { __ } = wp.i18n

const {
    Component,
    Fragment,
} = wp.element

const {
    BlockControls,
    AlignmentToolbar,
    InspectorControls,
    ColorPalette,
    MediaUpload
} = wp.editor

const {
    PanelBody,
    SelectControl,
    TextControl,
    ToggleControl,
    IconButton,
    TextareaControl,
    RangeControl
} = wp.components

const SortableItem = SortableElement(({
  edit,
  removeItem,
  newIndex,
  value,
  items,
  changeImageValue,
  ImgId,
  changeSizeValue,
  changeContentValue,
  changePositionValue,
  changeRepeatValue,
  changeIconValue,
  changeIcon,
  changeTitleValue,
  changeDescValue,
  changeCustomPosValue,
  changeHorizontalValue,
  changeVerticalValue,
  changeUrlValue,
  changeLinkTargetValue,
  changeLinkValue,
  SIZE,
  POSITION,
  REPEAT,
}) => < div className="premium-repeater-item" >
      <div className={
          `premium-repeater-item__container ${newIndex}`
      } >
          < span className="premium-repeater-item__dragHandle" ></span>
          <div className="premium-repeater-item__content"onClick={() => edit(newIndex)} >{value.title} </div>
          {
              items.length != 1 ? < button className="premium-repeater-item__trashicon fa fa-trash"
                  onClick={
                      () => removeItem(newIndex, value)
                  } >
              </button> : ""}
      </div>
      <div className={
          `premium-repeater-item-controls ${value.edit ? "editable" : ""}`
      } >
          {value.ImgUrl && (
            <img src={value.ImgUrl.url} width="100%" height="auto" />
          )}
          {!value.ImgUrl && <DefaultImage />}
          <MediaUpload
            allowedTypes={["image"]}
            onSelect={value => changeImageValue(value, newIndex)}
            type="image"
            value={ImgId}
            render={({ open }) => (
              <IconButton
                  label={__("Change Image")}
                  icon="edit"
                  onClick={open}
              >
                  {__("Change Image")}
              </IconButton>
            )}
          />
          <SelectControl
            label={__("Size")}
            options={SIZE}
            value={value.size}
            onChange={(newValue) => changeSizeValue(newValue, newIndex)}
          />
          {/* {value.size === 'custom'&& <PremiumRangeResponsive
            setAttributes={setAttributes}
            rangeType={{ value: widthType, label: __("widthType") }}
            range={{ value: width }}
            onChangeSize={(newValue) => changeSizeValue(newValue, newIndex)}
            rangeMobile={{ value: widthMobile }}
            rangeTablet={{ value: widthTablet }}
            rangeLabel={__("Width")}
            min={1}
            max={100}
          />
          } */}
          <SelectControl
            label={__("Position")}
            options={POSITION}
            value={value.position}
            onChange={(newValue) => changePositionValue(newValue, newIndex)}
          />
          <SelectControl
            label={__("Repeat")}
            options={REPEAT}
            value={value.repeat}
            onChange={(newValue) => changeRepeatValue(newValue, newIndex)}
          />
          <ToggleControl
            label={__("Content")}
            checked={value.content}
            onChange={(newValue) => changeContentValue(newValue, newIndex)}
          />
          {value.content&& <Fragment>
              <ToggleControl
                label={__("Icon")}
                checked={value.iconValue}
                onChange={(newValue) => changeIconValue(newValue, newIndex)}
              />
              {value.iconValue&& <Fragment>
                  <p>{__("Icon")}</p>
                  <FontIconPicker
                    icons={iconsList}
                    value={value.icon}
                    onChange={(newValue) => changeIcon(newValue, newIndex)}
                    isMulti={false}
                    appendTo="body"
                    noSelectedPlaceholder={__("Select Icon")}
                  />
                </Fragment>
              }
              <TextControl
                label={__("Title")}
                value={value.title}
                onChange={(newText) => changeTitleValue(newText, newIndex)}
              />
              <TextareaControl
                label={__("Description")}
                value={value.desc}
                onChange={(newText) => changeDescValue(newText, newIndex)}
              />
              <ToggleControl
                label={__("Custom Position")}
                checked={value.customPos}
                onChange={(newValue) => changeCustomPosValue(newValue, newIndex)}
              />
              {value.customPos&& <Fragment>
                <RangeControl
                  label={__("Horizontal Offset")}
                  value={value.horizontal}
                  min="1"
                  onChange={(newValue) => changeHorizontalValue(newValue, newIndex)}
                />
                <RangeControl
                  label={__("Vertical Offset")}
                  value={value.vertical}
                  min="1"
                  onChange={(newValue) => changeVerticalValue(newValue, newIndex)}
                />
              </Fragment>
              }
              <ToggleControl
                label={__("Link")}
                checked={value.link}
                onChange={(newValue) => changeLinkValue(newValue, newIndex)}
              />
              {value.link &&
                <Fragment>
                  <p>{__("URL")}</p>
                  <TextControl
                    value={value.url}
                    onChange={(newValue) => changeUrlValue(newValue, newIndex)}
                    placeholder={__("Enter URL")}
                  />
                  <ToggleControl
                    label={__("Open links in new tab")}
                    checked={value.linkTarget}
                    onChange={(newValue) => changeLinkTargetValue(newValue, newIndex)}
                  />
                </Fragment>
              }
            </Fragment>
          }
      </div>
  </div>
)

const SortableList = SortableContainer(({
  items,
  removeItem,
  edit,
  changeImageValue,
  ImgId,
  changeSizeValue,
  changeContentValue,
  changePositionValue,
  changeRepeatValue,
  changeIconValue,
  changeIcon,
  changeTitleValue,
  changeDescValue,
  changeCustomPosValue,
  changeHorizontalValue,
  changeVerticalValue,
  changeUrlValue,
  changeLinkTargetValue,
  changeLinkValue,
  SIZE,
  POSITION,
  REPEAT
}) => {
  return (<div > {
      (items).map((value, index) => (
          <SortableItem key={`item-${value}`}
              index={index}
              newIndex={index}
              value={value}
              removeItem={removeItem}
              edit={edit}
              items={items}
              ImgId={ImgId}
              changeImageValue={changeImageValue}
              changeRepeatValue={changeRepeatValue}
              changePositionValue={changePositionValue}
              changeContentValue={changeContentValue}
              changeSizeValue={changeSizeValue}
              changeIconValue={changeIconValue}
              changeIcon={changeIcon}
              changeTitleValue={changeTitleValue}
              changeDescValue={changeDescValue}
              changeCustomPosValue={changeCustomPosValue}
              changeHorizontalValue={changeHorizontalValue}
              changeVerticalValue={changeVerticalValue}
              changeUrlValue={changeUrlValue}
              changeLinkTargetValue={changeLinkTargetValue}
              changeLinkValue={changeLinkValue}
              SIZE={SIZE}
              POSITION={POSITION}
              REPEAT={REPEAT}
          />
      ))
  } </div>
  );
});

class edit extends Component {

    constructor() {
        super(...arguments);
    }
    componentDidMount() {
        // Assigning id in the attribute.
        this.props.setAttributes({ block_id: this.props.clientId })
        this.props.setAttributes({ classMigrate: true })
        // Pushing Style tag for this block css.
        const $style = document.createElement("style")
        $style.setAttribute("id", "premium-style-image-accordion-" + this.props.clientId)
        document.head.appendChild($style)
    }

    render() {
        const { attributes, setAttributes, isSelected } = this.props

        const {
            align,
            className,
            repeaterAccordion,
            index,
            ImgId
        } = attributes

        const SIZE = [{
          label: __("Auto"),
          value: "auto"
          },
          {
            label: __("Contain"),
            value: "contain"
          },
          {
            label: __("Cover"),
            value: "cover"
          },
          {
            label: __("Custom"),
            value: "custom"
          }
        ];
        const POSITION = [{
          label: __("Center Center"),
          value: "center center"
          },
          {
            label: __("Center Left"),
            value: "center left"
          },
          {
            label: __("Center Right"),
            value: "center right"
          },
          {
            label: __("Top Center"),
            value: "top center"
          },
          {
            label: __("Top Left"),
            value: "top left"
          },
          {
            label: __("Top Right"),
            value: "top right"
          },
          {
            label: __("Bottom Center"),
            value: "bottom center"
          },
          {
            label: __("Bottom Left"),
            value: "bottom left"
          },
          {
            label: __("Bottom Right"),
            value: "bottom right"
          },
        ];
        const REPEAT = [{
          label: __("Repeat"),
          value: "repeat"
          },
          {
            label: __("No-repeat"),
            value: "no-repeat"
          },
          {
            label: __("Repeat-x"),
            value: "repeat-x"
          },
          {
            label: __("Repeat-y"),
            value: "repeat-y"
          }
        ];

        var element = document.getElementById("premium-style-image-accordion-" + this.props.clientId)

        if (null != element && "undefined" != typeof element) {
            element.innerHTML = styling(this.props)
        }

        const onSortEndSingle = ({
          oldIndex,
          newIndex
      }) => {
          let arrayItem = repeaterAccordion.map((cont) => (
              cont
          ))

          const array = arrayMove(arrayItem, oldIndex, newIndex)
          setAttributes({
            repeaterAccordion:
                  array
          });
      };

      const shouldCancelStart = (e) => {
          // Prevent sorting from being triggered if target is input or button
          if (['button', 'div', 'input', 'textarea', 'i', 'select', 'svg'].indexOf(e.target.tagName.toLowerCase()) !== -1) {
              return true; // Return true to cancel sorting
          }
      }

      const onRepeaterChange = (attr, value, index) => {
          const items = repeaterAccordion;
          return items.map(function (item, currIndex) {
              if (index == currIndex) {
                  item[attr] = value;
              }
              return item;
          });
      };

      const edit = (index) => {
          return repeaterAccordion.map((item, i) => {
              if (index == i) {
                  setAttributes({
                    repeaterAccordion: onRepeaterChange(
                          "edit",
                          item.edit ? false : true,
                          index
                      )
                  })
              }
              else {
                  setAttributes({
                    repeaterAccordion: onRepeaterChange(
                          "edit",
                          false,
                          i
                      )
                  })
              }
          })
      }

      const removeItem = (index, item) => {
          let array = repeaterAccordion.map((cont, currIndex) => {
              return cont
          }).filter((f, i) => i != index)
          setAttributes({
            repeaterAccordion: array
          });
      }

        const addNewAccordion = () => {
          setAttributes({
            repeaterAccordion: repeaterAccordion.concat([{
                  title: __("Image #" + index),
                  edit: true
              }])
          });
          let i = index+1
          setAttributes({
            index: i
          });
        }

        const changeImageValue = (newText, newIndex) => {
          setAttributes({
            repeaterAccordion: onRepeaterChange(
                "ImgUrl",
                newText,
                newIndex
            )
          })
        }
        const changeSizeValue = (newText, newIndex) => {
          setAttributes({
            repeaterAccordion: onRepeaterChange(
                "size",
                newText,
                newIndex
            )
          })
        }
        const changePositionValue = (newText, newIndex) => {
          setAttributes({
            repeaterAccordion: onRepeaterChange(
                "position",
                newText,
                newIndex
            )
          })
        }
        const changeRepeatValue = (newText, newIndex) => {
          setAttributes({
            repeaterAccordion: onRepeaterChange(
                "repeat",
                newText,
                newIndex
            )
          })
        }
        const changeContentValue = (newText, newIndex) => {
          setAttributes({
            repeaterAccordion: onRepeaterChange(
                "content",
                newText,
                newIndex
            )
          })
        }
        const changeIconValue = (newText, newIndex) => {
          setAttributes({
            repeaterAccordion: onRepeaterChange(
                "iconValue",
                newText,
                newIndex
            )
          })
        }
        const changeIcon = (newText, newIndex) => {
          setAttributes({
            repeaterAccordion: onRepeaterChange(
                "icon",
                newText,
                newIndex
            )
          })
        }
        const changeTitleValue = (newText, newIndex) => {
          setAttributes({
            repeaterAccordion: onRepeaterChange(
                "title",
                newText,
                newIndex
            )
          })
        }
        const changeDescValue = (newText, newIndex) => {
          setAttributes({
            repeaterAccordion: onRepeaterChange(
                "desc",
                newText,
                newIndex
            )
          })
        }
        const changeCustomPosValue = (newText, newIndex) => {
          setAttributes({
            repeaterAccordion: onRepeaterChange(
                "customPos",
                newText,
                newIndex
            )
          })
        }
        const changeHorizontalValue = (newText, newIndex) => {
          setAttributes({
            repeaterAccordion: onRepeaterChange(
                "horizontal",
                newText,
                newIndex
            )
          })
        }
        const changeVerticalValue = (newText, newIndex) => {
          setAttributes({
            repeaterAccordion: onRepeaterChange(
                "vertical",
                newText,
                newIndex
            )
          })
        }
        const changeLinkValue = (newText, newIndex) => {
          setAttributes({
            repeaterAccordion: onRepeaterChange(
                "link",
                newText,
                newIndex
            )
          })
        }
        const changeUrlValue = (newText, newIndex) => {
          setAttributes({
            repeaterAccordion: onRepeaterChange(
                "url",
                newText,
                newIndex
            )
          })
        }
        const changeLinkTargetValue = (newText, newIndex) => {
          setAttributes({
            repeaterAccordion: onRepeaterChange(
                "linkTarget",
                newText,
                newIndex
            )
          })
        }
        const renderList = repeaterAccordion.map((item, index) => {
          return <li className={`premium-accordion-li premium-accordion-li${index}`}>
            <div className="premium-accordion-background"></div>
            <div className="premium-accordion-overlay-wrap">
              {item.content&&<div className={`premium-accordion-content premium-accordion-center`}>
                {item.iconValue&& <i className={`premium-accordion-icon ${item.icon}`}/>}
                {item.title&& <h3 className="premium-accordion-title">{item.title}</h3>}
                {item.desc&& <div className="premium-accordion-description">{item.desc}</div>}
              </div>
              }
            </div>
          </li>
      })

        return [
            isSelected && (
                <BlockControls>
                    <AlignmentToolbar
                        value={align}
                        onChange={(value) => {
                            setAttributes({ align: value })
                        }}
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
                        <SortableList
                          items={repeaterAccordion}
                          onSortEnd={(o, n) => onSortEndSingle(o, n)}
                          removeItem={(value) => removeItem(value)}
                          edit={(value) => edit(value)}
                          changeImageValue={changeImageValue}
                          ImgId={ImgId}
                          changeSizeValue={changeSizeValue}
                          changePositionValue={changePositionValue}
                          changeRepeatValue={changeRepeatValue}
                          changeContentValue={changeContentValue}
                          changeIconValue={changeIconValue}
                          changeIcon={changeIcon}
                          changeTitleValue={changeTitleValue}
                          changeDescValue={changeDescValue}
                          changeCustomPosValue={changeCustomPosValue}
                          changeHorizontalValue={changeHorizontalValue}
                          changeVerticalValue={changeVerticalValue}
                          changeUrlValue={changeUrlValue}
                          changeLinkTargetValue={changeLinkTargetValue}
                          changeLinkValue={changeLinkValue}
                          SIZE={SIZE}
                          POSITION={POSITION}
                          REPEAT={REPEAT}
                          shouldCancelStart={shouldCancelStart}
                          helperClass='premium-fancy-text__sortableHelper' />
                        <div className="premium-fancy-text-btn__wrap" >
                          <button
                              className={"premium-fancy-text-btn"}
                              onClick={() => addNewAccordion()}
                          >
                            <i className="dashicons dashicons-plus premium-fancy-text-icon" />
                            {__("Add New Item")}
                          </button>
                        </div>
                        <br/>
                      </Fragment>
                    </PanelBody>
                </InspectorControls>
            ),
            <div className={classnames(
                className,
                `premium-block-${this.props.clientId}`
            )} style={{textAlign: align}}
            >
              <div className="premium-accordion-container">
                <div className="premium-accordion-section">
                  <div className={`premium-accordion-horizontal`}>
                    <ul className={`premium-accordion-ul premium-accordion-center`}>
                      {renderList}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        ]
    }
}

export default edit