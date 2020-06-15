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
    RangeControl,
    TabPanel
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
  changeHorizontalType,
  changeHorizontalTablet,
  changeHorizontalMobile,
  changeVerticalValue,
  changeVerticalTablet,
  changeVerticalType,
  changeVerticalMobile,
  changeUrlValue,
  changeLinkTargetValue,
  changeLinkValue,
  changeWidthValue,
  changeWidthMobile,
  changeWidthTablet,
  changeWidthType,
  SIZE,
  POSITION,
  REPEAT,
  setAttributes
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
          {value.size === 'custom'&& <PremiumRangeResponsive
            setAttributes={setAttributes}
            rangeType={{ value: value.widthType }}
            range={{ value: value.width }}
            onChangeSize={(newValue) => changeWidthValue(newValue, newIndex)}
            onChangeMobile={(newValue) => changeWidthMobile(newValue, newIndex)}
            onChangeTablet={(newValue) => changeWidthTablet(newValue, newIndex)}
            onChangeType= {(newValue) => changeWidthType(newValue, newIndex)}
            rangeMobile={{ value: value.widthMobile }}
            rangeTablet={{ value: value.widthTablet }}
            rangeLabel={__("Width")}
            min={1}
            max={100}
          />
          }
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
                <PremiumRangeResponsive
                  setAttributes={setAttributes}
                  rangeType={{ value: value.horizontalType }}
                  range={{ value: value.horizontal }}
                  onChangeSize={(newValue) => changeHorizontalValue(newValue, newIndex)}
                  onChangeMobile={(newValue) => changeHorizontalMobile(newValue, newIndex)}
                  onChangeTablet={(newValue) => changeHorizontalTablet(newValue, newIndex)}
                  onChangeType= {(newValue) => changeHorizontalType(newValue, newIndex)}
                  rangeMobile={{ value: value.horizontalMobile }}
                  rangeTablet={{ value: value.horizontalTablet }}
                  rangeLabel={__("Horizontal Offset")}
                  min={1}
                  max={100}
                />
                <PremiumRangeResponsive
                  setAttributes={setAttributes}
                  rangeType={{ value: value.verticalType }}
                  range={{ value: value.vertical }}
                  onChangeSize={(newValue) => changeVerticalValue(newValue, newIndex)}
                  onChangeMobile={(newValue) => changeVerticalMobile(newValue, newIndex)}
                  onChangeTablet={(newValue) => changeVerticalTablet(newValue, newIndex)}
                  onChangeType= {(newValue) => changeVerticalType(newValue, newIndex)}
                  rangeMobile={{ value: value.verticalMobile }}
                  rangeTablet={{ value: value.verticalTablet }}
                  rangeLabel={__("Vertical Offset")}
                  min={1}
                  max={100}
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
  changeHorizontalType,
  changeHorizontalTablet,
  changeHorizontalMobile,
  changeVerticalValue,
  changeVerticalTablet,
  changeVerticalType,
  changeVerticalMobile,
  changeUrlValue,
  changeLinkTargetValue,
  changeLinkValue,
  changeWidthValue,
  changeWidthMobile,
  changeWidthTablet,
  changeWidthType,
  SIZE,
  POSITION,
  REPEAT,
  setAttributes
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
              changeHorizontalType={changeHorizontalType}
              changeHorizontalTablet={changeHorizontalTablet}
              changeHorizontalMobile={changeHorizontalMobile}
              changeVerticalTablet={changeVerticalTablet}
              changeVerticalType={changeVerticalType}
              changeVerticalMobile={changeVerticalMobile}
              changeVerticalValue={changeVerticalValue}
              changeUrlValue={changeUrlValue}
              changeLinkTargetValue={changeLinkTargetValue}
              changeLinkValue={changeLinkValue}
              changeWidthValue={changeWidthValue}
              changeWidthMobile={changeWidthMobile}
              changeWidthTablet={changeWidthTablet}
              changeWidthType={changeWidthType}
              SIZE={SIZE}
              POSITION={POSITION}
              REPEAT={REPEAT}
              setAttributes={setAttributes}
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
            ImgId,
            defaultIndex,
            direction,
            skew,
            skewdirection,
            height,
            heightType,
            heightTablet,
            heightMobile,
            screenWidth,
            overlayColor,
            overlayColorHover,
            blur,
            bright,
            contrast,
            saturation,
            hue,
            blurHover,
            brightHover,
            contrastHover,
            saturationHover,
            hueHover,
            iconColor,
            iconHoverColor,
            iconBGColor,
            iconHoverBGColor,
            iconSize,
            iconSizeTablet,
            iconSizeType,
            iconSizeMobile,
            iconShadowBlur,
            iconShadowColor,
            iconShadowHorizontal,
            iconShadowPosition,
            iconShadowVertical,
            iconMargin,
            iconMarginType,
            iconMarginTablet,
            iconMarginMobile,
            iconPadding,
            iconPaddingType,
            iconPaddingTablet,
            iconPaddingMobile,
            iconborderColor,
            iconborderRadius,
            iconborderWidth,
            iconborderType,
            titleColor,
            titleWeight,
            titleLetter,
            titleUpper,
            titleStyle,
            titleLine,
            titlefontSize,
            titlefontSizeMobile,
            titlefontSizeTablet,
            titlefontSizeType,
            titleshadowBlur,
            titleshadowColor,
            titleshadowHorizontal,
            titleshadowVertical,
            titleMargin,
            titleMarginTablet,
            titleMarginType,
            titleMarginMobile,
            descColor,
            descWeight,
            descLetter,
            descUpper,
            descStyle,
            descLine,
            descfontSize,
            descfontSizeMobile,
            descfontSizeTablet,
            descfontSizeType,
            descshadowBlur,
            descshadowColor,
            descshadowHorizontal,
            descshadowVertical,
            descMargin,
            descMarginType,
            descMarginTablet,
            descMarginMobile,
            descPadding,
            descPaddingTablet,
            descPaddingType,
            descPaddingMobile
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
        const DIRECTION = [{
          label: __("Horizontal"),
          value: "horizontal"
          },
          {
            label: __("Vertical"),
            value: "vertical"
          }
        ];
        const SKEWDIR = [{
          label: __("Right"),
          value: "right"
          },
          {
            label: __("Left"),
            value: "left"
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
                  edit: true,
                  ImgUrl: "",
                  size: "auto",
                  position: "center center",
                  repeat: "repeat",
                  content: false,
                  iconValue: false,
                  icon:"dashicons dashicons-star-filled",
                  desc:"",
                  customPos: false,
                  horizontal: "0",
                  vertical: "0",
                  link: false,
                  url: "#",
                  linkTarget: false
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
        const changeHorizontalType = (newText, newIndex) => {
          setAttributes({
            repeaterAccordion: onRepeaterChange(
                "horizontalType",
                newText,
                newIndex
            )
          })
        }
        const changeHorizontalMobile = (newText, newIndex) => {
          setAttributes({
            repeaterAccordion: onRepeaterChange(
                "horizontalMobile",
                newText,
                newIndex
            )
          })
        }
        const changeHorizontalTablet = (newText, newIndex) => {
          setAttributes({
            repeaterAccordion: onRepeaterChange(
                "horizontalTablet",
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
        const changeVerticalType = (newText, newIndex) => {
          setAttributes({
            repeaterAccordion: onRepeaterChange(
                "verticalType",
                newText,
                newIndex
            )
          })
        }
        const changeVerticalTablet = (newText, newIndex) => {
          setAttributes({
            repeaterAccordion: onRepeaterChange(
                "verticalTablet",
                newText,
                newIndex
            )
          })
        }
        const changeVerticalMobile = (newText, newIndex) => {
          setAttributes({
            repeaterAccordion: onRepeaterChange(
                "verticalMobile",
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
        const changeWidthValue  = (newText, newIndex) => {
          setAttributes({
            repeaterAccordion: onRepeaterChange(
                "width",
                newText,
                newIndex
            )
          })
        }
        const changeWidthMobile = (newText, newIndex) => {
          setAttributes({
            repeaterAccordion: onRepeaterChange(
                "widthMobile",
                newText,
                newIndex
            )
          })
        }
        const changeWidthTablet = (newText, newIndex) => {
          setAttributes({
            repeaterAccordion: onRepeaterChange(
                "widthTablet",
                newText,
                newIndex
            )
          })
        }
        const changeWidthType = (newText, newIndex) => {
          setAttributes({
            repeaterAccordion: onRepeaterChange(
                "widthType",
                newText,
                newIndex
            )
          })
        }
        const onResetClickImageFilter= () => {
          setAttributes({ 
              blur: "0", 
              bright:"100", 
              contrast:"100", 
              saturation:"100",
              hue:"0"
          });
        }
        const onResetClickImageFilterHover= () => {
          setAttributes({ 
              blurHover: "0", 
              brightHover:"100", 
              contrastHover:"100", 
              saturationHover:"100",
              hueHover:"0"
          });
        }
        const onResetClickiconBorder = () => {
          setAttributes({
            iconborderType: "none",
            iconborderWidth: "1",
            iconborderColor: "",
            iconborderRadius: "0",
          });
        }
        const onResetClickicon = () => {
          setAttributes({
            iconShadowColor: "",
            iconShadowBlur: "0",
            iconShadowHorizontal: "0",
            iconShadowVertical: "0",
            iconShadowPosition: ""
          });
        }
        const onResetClickTitle = () => {
          setAttributes({
            titleWeight: 600,
            titlefontSizeType: "px",
            titlefontSize: "20",
            titlefontSizeMobile: "20",
            titlefontSizeTablet: "20",
            titleStyle: "normal",
            titleLetter: "0",
            titleUpper: false,
            titleLine: ""
          });
        }
        const onResetClickTitleTextShadow = () => {
          setAttributes({
            titleshadowColor: "",
            titleshadowBlur: "0",
            titleshadowHorizontal: "0",
            titleshadowVertical: "0",
          });
        }
        const onResetClickDesc = () => {
          setAttributes({
            descWeight: 600,
            descfontSizeType: "px",
            descfontSize: "20",
            descfontSizeMobile: "20",
            descfontSizeTablet: "20",
            descStyle: "normal",
            descLetter: "0",
            descUpper: false
          });
        }
        const onResetClickDescTextShadow = () => {
          setAttributes({
            descshadowColor: "",
            descshadowBlur: "0",
            descshadowHorizontal: "0",
            descshadowVertical: "0",
          });
        }
        const renderList = repeaterAccordion.map((item, index) => {
          return <li className={`premium-accordion-li premium-accordion-li${index} premium-accordion-li-${skew}`}>
            {!skew || direction==='vertical' ? <div className="premium-accordion-background"></div>:""}
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
                          changeHorizontalType={changeHorizontalType}
                          changeHorizontalTablet={changeHorizontalTablet}
                          changeHorizontalMobile={changeHorizontalMobile}
                          changeVerticalTablet={changeVerticalTablet}
                          changeVerticalType={changeVerticalType}
                          changeVerticalMobile={changeVerticalMobile}
                          changeVerticalValue={changeVerticalValue}
                          changeUrlValue={changeUrlValue}
                          changeLinkTargetValue={changeLinkTargetValue}
                          changeLinkValue={changeLinkValue}
                          changeWidthValue={changeWidthValue}
                          changeWidthMobile={changeWidthMobile}
                          changeWidthTablet={changeWidthTablet}
                          changeWidthType={changeWidthType}
                          SIZE={SIZE}
                          POSITION={POSITION}
                          REPEAT={REPEAT}
                          setAttributes={setAttributes}
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
                    <PanelBody
                      title={__("Display Options")}
                      className="premium-panel-body"
                      initialOpen={false}
                    >
                      <RangeControl
                        label={__("Hovered By Default Index")}
                        value={defaultIndex}
                        min="1"
                        max={repeaterAccordion.length}
                        onChange={value => setAttributes({ defaultIndex: value })}
                        help="Set the index for the image to be hovered by default on page load, index starts from 1"
                      />
                      <SelectControl
                        label={__("Direction")}
                        value={direction}
                        onChange={newSelect => setAttributes({ direction: newSelect })}
                        options={DIRECTION}
                      />
                      {direction==='horizontal'&& <Fragment><ToggleControl
                        label={__("Skew Images")}
                        checked={skew}
                        onChange={value  => setAttributes({ skew: value })}
                        />
                        {skew &&<SelectControl
                        label={__("Skew Direction")}
                        value={skewdirection}
                        onChange={newSelect => setAttributes({ skewdirection: newSelect })}
                        options={SKEWDIR}
                        />}
                        </Fragment>
                      }
                      <PremiumRangeResponsive
                        setAttributes={setAttributes}
                        rangeType={{ value: heightType, label: __("heightType") }}
                        range={{ value: height, label: __("height") }}
                        rangeMobile={{ value: heightMobile, label: __("heightMobile") }}
                        rangeTablet={{ value: heightTablet, label: __("heightTablet") }}
                        rangeLabel={__("Image Height")}
                        min={1}
                        max={1000}
                      />
                      <TextControl
                        label={__("Hide Description Below Width (PX)")}
                        type="Number"
                        value={screenWidth}
                        onChange={newValue => setAttributes({ screenWidth: parseInt(newValue) })}
                        help="Set screen width below which the description will be hidden"
                      />
                    </PanelBody>
                    <PanelBody
                      title={__("Images Style")}
                      className="premium-panel-body"
                      initialOpen={false}
                    >
                      <p>{__("Overlay Color")}</p>
                      <ColorPalette
                        value={overlayColor}
                        onChange={newValue =>
                            setAttributes({
                              overlayColor: newValue
                            })
                        }
                        allowReset={true}
                      />
                      <p>{__("Overlay Hover Color")}</p>
                      <ColorPalette
                        value={overlayColorHover}
                        onChange={newValue =>
                            setAttributes({
                              overlayColorHover: newValue
                            })
                        }
                        allowReset={true}
                      />
                      <PremiumFilters
                        blur={blur}
                        bright={bright}
                        contrast={contrast}
                        saturation={saturation}
                        hue={hue}
                        onChangeBlur={newSize => setAttributes({ blur: newSize, change: true })}
                        onChangeBright={newSize => setAttributes({ bright: newSize, change: true })}
                        onChangeContrast={newSize => setAttributes({ contrast: newSize, change: true })}
                        onChangeSat={newSize => setAttributes({ saturation: newSize, change: true })}
                        onChangeHue={newSize => setAttributes({ hue: newSize, change: true })}
                        onResetClick={onResetClickImageFilter}
                      />
                      <PremiumFilters
                        label={__("Hover CSS Filters")}
                        blur={blurHover}
                        bright={brightHover}
                        contrast={contrastHover}
                        saturation={saturationHover}
                        hue={hueHover}
                        onChangeBlur={newSize => setAttributes({ blurHover: newSize, change: true })}
                        onChangeBright={newSize => setAttributes({ brightHover: newSize, change: true })}
                        onChangeContrast={newSize => setAttributes({ contrastHover: newSize, change: true })}
                        onChangeSat={newSize => setAttributes({ saturationHover: newSize, change: true })}
                        onChangeHue={newSize => setAttributes({ hueHover: newSize, change: true })}
                        onResetClick={onResetClickImageFilterHover}
                      />
                    </PanelBody>
                    <PanelBody 
                      title={__("Content Style")}
                      className="premium-panel-body"
                      initialOpen={false}
                    >
                    <TabPanel
                        className="premium-flip-box-tab-panel-res"
                        activeClass="active-tab"
                        tabs={TABSTYLE}>
                        {
                          (tabName) => {
                            if ("icon" === tabName.name) {
                              return <Fragment>
                                <p>{__("Color")}</p>
                                <ColorPalette
                                  value={iconColor}
                                  onChange={newValue =>
                                      setAttributes({
                                          iconColor: newValue
                                      })
                                  }
                                  allowReset={true}
                                />
                                <p>{__("Hover Color")}</p>
                                <ColorPalette
                                  value={iconHoverColor}
                                  onChange={newValue =>
                                      setAttributes({
                                          iconHoverColor: newValue
                                      })
                                  }
                                  allowReset={true}
                                />
                                <p>{__("Background Color")}</p>
                                <ColorPalette
                                  value={iconBGColor}
                                  onChange={newValue =>
                                      setAttributes({
                                          iconBGColor: newValue
                                      })
                                  }
                                  allowReset={true}
                                />
                                <p>{__("Background Hover Color")}</p>
                                <ColorPalette
                                  value={iconHoverBGColor}
                                  onChange={newValue =>
                                      setAttributes({
                                          iconHoverBGColor: newValue
                                      })
                                  }
                                  allowReset={true}
                                />
                                <PremiumRangeResponsive
                                  setAttributes={setAttributes}
                                  rangeType={{ value: iconSizeType, label: __("iconSizeType") }}
                                  range={{ value: iconSize, label: __("iconSize") }}
                                  rangeMobile={{ value: iconSizeMobile, label: __("iconSizeMobile") }}
                                  rangeTablet={{ value: iconSizeTablet, label: __("iconSizeTablet") }}
                                  rangeLabel={__("Size")}
                                  min={1}
                                  max={100}
                                />
                                <PremiumBorder
                                  borderType={iconborderType}
                                  borderWidth={iconborderWidth}
                                  borderColor={iconborderColor}
                                  borderRadius={iconborderRadius}
                                  onChangeType={newType => setAttributes({ iconborderType: newType })}
                                  onChangeWidth={newWidth => setAttributes({ iconborderWidth: newWidth })}
                                  onChangeColor={colorValue =>
                                      setAttributes({ iconborderColor: colorValue.hex })
                                  }
                                  onChangeRadius={newrRadius =>
                                      setAttributes({ iconborderRadius: newrRadius })
                                  }
                                  onResetClick={onResetClickiconBorder}
                                />
                                <PremiumBoxShadow
                                  label="Box Shadow"
                                  inner={true}
                                  color={iconShadowColor}
                                  blur={iconShadowBlur}
                                  horizontal={iconShadowHorizontal}
                                  vertical={iconShadowVertical}
                                  position={iconShadowPosition}
                                  onChangeColor={newColor =>
                                      setAttributes({
                                          iconShadowColor:
                                              newColor === undefined ? "transparent" : newColor.hex
                                      })
                                  }
                                  onChangeBlur={newBlur =>
                                      setAttributes({
                                          iconShadowBlur: newBlur === undefined ? 0 : newBlur
                                      })
                                  }
                                  onChangehHorizontal={newValue =>
                                      setAttributes({
                                        iconShadowHorizontal: newValue === undefined ? 0 : newValue
                                      })
                                  }
                                  onChangeVertical={newValue =>
                                      setAttributes({
                                        iconShadowVertical: newValue === undefined ? 0 : newValue
                                      })
                                  }
                                  onChangePosition={newValue =>
                                      setAttributes({
                                        iconShadowPosition: newValue === undefined ? 0 : newValue
                                      })
                                  }
                                  onResetClick={onResetClickicon}
                                />
                                <PremiumRangeResponsive
                                  setAttributes={setAttributes}
                                  rangeType={{ value: iconMarginType, label: __("iconMarginType") }}
                                  range={{ value: iconMargin, label: __("iconMargin") }}
                                  rangeMobile={{ value: iconMarginMobile, label: __("iconMarginMobile") }}
                                  rangeTablet={{ value: iconMarginTablet, label: __("iconMarginTablet") }}
                                  rangeLabel={__("Margin")}
                                  min={1}
                                  max={100}
                                />
                                <PremiumRangeResponsive
                                  setAttributes={setAttributes}
                                  rangeType={{ value: iconPaddingType, label: __("iconPaddingType") }}
                                  range={{ value: iconPadding, label: __("iconPadding") }}
                                  rangeMobile={{ value: iconPaddingMobile, label: __("iconPaddingMobile") }}
                                  rangeTablet={{ value: iconPaddingTablet, label: __("iconPaddingTablet") }}
                                  rangeLabel={__("Padding")}
                                  min={1}
                                  max={100}
                                />
                              </Fragment>
                            } else if ("title" === tabName.name) {
                              return <Fragment>
                                <p>{__("Color")}</p>
                                <ColorPalette
                                  value={titleColor}
                                  onChange={newValue =>
                                      setAttributes({
                                          titleColor: newValue
                                      })
                                  }
                                  allowReset={true}
                                />
                                <PremiumTypo
                                  components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                                  setAttributes={setAttributes}
                                  fontSizeType={{ value: titlefontSizeType, label: __("titlefontSizeType") }}
                                  fontSize={{ value: titlefontSize, label: __("titlefontSize") }}
                                  fontSizeMobile={{ value: titlefontSizeMobile, label: __("titlefontSizeMobile") }}
                                  fontSizeTablet={{ value: titlefontSizeTablet, label: __("titlefontSizeTablet") }}
                                  weight={titleWeight}
                                  style={titleStyle}
                                  spacing={titleLetter}
                                  upper={titleUpper}
                                  line={titleLine}
                                  onChangeWeight={newWeight =>
                                      setAttributes({ titleWeight: newWeight || 600 })
                                  }
                                  onChangeStyle={newStyle =>
                                      setAttributes({ titleStyle: newStyle })
                                  }
                                  onChangeSpacing={newValue =>
                                      setAttributes({ titleLetter: newValue })
                                  }
                                  onChangeLine={newValue => setAttributes({ titleLine: newValue })}
                                  onChangeUpper={check => setAttributes({ titleUpper: check })}
                                  onResetClick={onResetClickTitle}
                                />
                                <PremiumTextShadow
                                  color={titleshadowColor}
                                  blur={titleshadowBlur}
                                  horizontal={titleshadowHorizontal}
                                  vertical={titleshadowVertical}
                                  onChangeColor={newColor =>
                                  setAttributes({ titleshadowColor: newColor.hex })
                                  }
                                  onChangeBlur={newBlur => setAttributes({ titleshadowBlur: newBlur })}
                                  onChangehHorizontal={newValue =>
                                  setAttributes({ titleshadowHorizontal: newValue })
                                  }
                                  onChangeVertical={newValue =>
                                  setAttributes({ titleshadowVertical: newValue })
                                  }
                                  onResetClick={onResetClickTitleTextShadow}
                                />
                                <PremiumRangeResponsive
                                  setAttributes={setAttributes}
                                  rangeType={{ value: titleMarginType, label: __("titleMarginType") }}
                                  range={{ value: titleMargin, label: __("titleMargin") }}
                                  rangeMobile={{ value: titleMarginMobile, label: __("titleMarginMobile") }}
                                  rangeTablet={{ value: titleMarginTablet, label: __("titleMarginTablet") }}
                                  rangeLabel={__("Margin")}
                                  min={1}
                                  max={100}
                                />
                              </Fragment>
                            }else {
                              return <Fragment>
                                <p>{__("Color")}</p>
                                <ColorPalette
                                  value={descColor}
                                  onChange={newValue =>
                                      setAttributes({
                                          descColor: newValue
                                      })
                                  }
                                  allowReset={true}
                                />
                                <PremiumTypo
                                  components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                                  setAttributes={setAttributes}
                                  fontSizeType={{ value: descfontSizeType, label: __("descfontSizeType") }}
                                  fontSize={{ value: descfontSize, label: __("descfontSize") }}
                                  fontSizeMobile={{ value: descfontSizeMobile, label: __("descfontSizeMobile") }}
                                  fontSizeTablet={{ value: descfontSizeTablet, label: __("descfontSizeTablet") }}
                                  weight={descWeight}
                                  style={descStyle}
                                  spacing={descLetter}
                                  upper={descUpper}
                                  line={descLine}
                                  onChangeWeight={newWeight =>
                                      setAttributes({ descWeight: newWeight || 600 })
                                  }
                                  onChangeStyle={newStyle =>
                                      setAttributes({ descStyle: newStyle })
                                  }
                                  onChangeSpacing={newValue =>
                                      setAttributes({ descLetter: newValue })
                                  }
                                  onChangeLine={newValue => setAttributes({ descLine: newValue })}
                                  onChangeUpper={check => setAttributes({ descUpper: check })}
                                  onResetClick={onResetClickDesc}
                                />
                                <PremiumTextShadow
                                  color={descshadowColor}
                                  blur={descshadowBlur}
                                  horizontal={descshadowHorizontal}
                                  vertical={descshadowVertical}
                                  onChangeColor={newColor =>
                                  setAttributes({ descshadowColor: newColor.hex })
                                  }
                                  onChangeBlur={newBlur => setAttributes({ descshadowBlur: newBlur })}
                                  onChangehHorizontal={newValue =>
                                  setAttributes({ descshadowHorizontal: newValue })
                                  }
                                  onChangeVertical={newValue =>
                                  setAttributes({ descshadowVertical: newValue })
                                  }
                                  onResetClick={onResetClickDescTextShadow}
                                />
                                <PremiumRangeResponsive
                                  setAttributes={setAttributes}
                                  rangeType={{ value: descMarginType, label: __("descMarginType") }}
                                  range={{ value: descMargin, label: __("descMargin") }}
                                  rangeMobile={{ value: descMarginMobile, label: __("descMarginMobile") }}
                                  rangeTablet={{ value: descMarginTablet, label: __("descMarginTablet") }}
                                  rangeLabel={__("Margin")}
                                  min={1}
                                  max={100}
                                />
                                <PremiumRangeResponsive
                                  setAttributes={setAttributes}
                                  rangeType={{ value: descPaddingType, label: __("descPaddingType") }}
                                  range={{ value: descPadding, label: __("descPadding") }}
                                  rangeMobile={{ value: descPaddingMobile, label: __("descPaddingMobile") }}
                                  rangeTablet={{ value: descPaddingTablet, label: __("descPaddingTablet") }}
                                  rangeLabel={__("Padding")}
                                  min={1}
                                  max={100}
                                />
                              </Fragment>
                            }
                          }
                        }
                    </TabPanel>
                    </PanelBody>
                </InspectorControls>
            ),
            <div className={classnames(
                className,
                `premium-block-${this.props.clientId}`
            )} style={{textAlign: align}}
            >
              <div className="premium-accordion-container">
                <div className="premium-accordion-section" data-skew={`${skew && direction==='horizontal'?skewdirection: ""}`} data-hideDesc={`${screenWidth}`}>
                  <div className={`premium-accordion-${direction}`}>
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