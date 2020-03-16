import classnames from "classnames"
import styling from "./styling"
import PremiumRange from "../../components/premium-range-responsive";
import PremiumTypo from "../../components/premium-typo";
import {
    SortableContainer,
    SortableElement,
    arrayMove
} from 'react-sortable-hoc';

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
} = wp.editor

const {
    PanelBody,
    SelectControl,
    RangeControl,
    TextControl,
    ToggleControl,
} = wp.components



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
        $style.setAttribute("id", "premium-style-progress-bar-" + this.props.clientId)
        document.head.appendChild($style)
    }

    render() {
        const { attributes, setAttributes, isSelected } = this.props

        const {
            align,
            className,
            multiStage,
            percentage,
            label,
            progressBarHeight,
            progressBarHeightTablet,
            progressBarHeightType,
            progressBarHeightMobile,
            progressBarRadius,
            progressBarRadiusTablet,
            progressBarRadiusType,
            progressBarRadiusMobile,
            progressBarbgColor,
            progressBarColor,
            labelColor,
            LabelfontSize,
            LabelfontSizeMobile,
            LabelfontSizeTablet,
            LabelfontSizeType,
            LabelWeight,
            LabelStyle,
            LabelUpper,
            LabelLetter,
            percentageColor,
            percentagefontSize,
            percentagefontSizeMobile,
            percentagefontSizeTablet,
            percentagefontSizeType,
            percentageWeight,
            percentageStyle,
            percentageLetter,
            progress,
            repeaterItems,
            editTitle,
            styleProgress,
            animate,
            speeds,
            arrowColor,
            arrow,
            arrowTablet,
            arrowMobile,
            arrowType,
            indicator,
            pinColor,
            pin,
            pinTablet,
            pinType,
            pinMobile,
            pinHeight,
            pinHeightTablet,
            pinHeightType,
            pinHeightMobile
        } = attributes

        const STYLE = [{
            value: "solid",
            label: __("Solid")
        },
        {
            value: "stripe",
            label: __("Stripe")
        }
        ];
        const INDICATOR = [{
            value: "arrow",
            label: __("Arrow")
        },
        {
            value: "pin",
            label: __("Pin")
        },
        {
            value: "none",
            label: __("None")
        }
        ];

        var element = document.getElementById("premium-style-progress-bar-" + this.props.clientId)

        if (null != element && "undefined" != typeof element) {
            element.innerHTML = styling(this.props)
        }

        const SortableItem = SortableElement(({
            edit,
            removeItem,
            newIndex,
            value,
        }) => < div className="premium-progress-bar-repeater" >

                <div className={
                    `premium-progress-bar-repeater-title ${newIndex}`
                } >
                    <div className="premium-progress-bar-repeater-title-item"
                        onClick={
                            () => edit(newIndex)
                        } >
                        Item# {
                            newIndex + 1
                        } </div>
                    < span className="premium-progress-bar-repeater-trashicon" >
                        < i className="dashicons dashicons-admin-page" />
                    </span>
                    {
                        repeaterItems.length != 1 ? < div className="premium-progress-bar-repeater-trashicon" >
                            <button className="dashicons dashicons-no"
                                onClick={
                                    () => removeItem(newIndex, value)
                                } >
                            </button>
                        </div> : ""}
                </div>
                <div className={
                    `premium-progress-bar-repeater-controls ${value.edit ? "editable" : ""}`
                } >
                    <TextControl
                        label={
                            __("Label")
                        }
                        value={
                            value.title
                        }
                        onChange={
                            newText =>
                                setAttributes({
                                    repeaterItems: onRepeaterChange(
                                        "title",
                                        newText,
                                        newIndex
                                    )
                                })
                        }
                    />
                    <TextControl
                        label={
                            __("Percentage")
                        }
                        value={
                            value.percentage
                        }
                        onChange={
                            newText =>
                                setAttributes({
                                    repeaterItems: onRepeaterChange(
                                        "percentage",
                                        newText,
                                        newIndex
                                    )
                                })
                        }
                    />
                </div >
            </div>
        )

        const SortableList = SortableContainer(({
            items,
            removeItem,
            edit,
        }) => {
            return (<div > {
                (items).map((value, index) => (
                    <SortableItem key={`item-${value}`}
                        index={index}
                        newIndex={index}
                        value={value}
                        removeItem={removeItem}
                        edit={edit}
                    />
                ))
            } </div>
            );
        });
        const onSortEndSingle = ({
            oldIndex,
            newIndex
        }) => {
            let arrayItem = repeaterItems.map((cont) => (
                cont
            ))

            const array = arrayMove(arrayItem, oldIndex, newIndex)

            setAttributes({
                repeaterItems:
                    array

            });
            console.log(repeaterItems);

        };
        const shouldCancelStart = (e) => {
            // Prevent sorting from being triggered if target is input or button
            if (['button', 'div', 'input'].indexOf(e.target.tagName.toLowerCase()) !== -1) {
                return true; // Return true to cancel sorting
            }
        }

        const onRepeaterChange = (attr, value, index) => {
            this.forceUpdate()
            const items = repeaterItems;
            this.forceUpdate();
            return items.map(function (item, currIndex) {
                if (index == currIndex) {
                    item[attr] = value;
                }

                return item;
            });
        };

        const edit = (index) => {
            setAttributes({ editTitle: !editTitle })
            return repeaterItems.map((item, i) => {
                if (index == i) {
                    setAttributes({
                        repeaterItems: onRepeaterChange(
                            "edit",
                            item.edit ? false : true,
                            index
                        )
                    })
                }
                else {
                    setAttributes({
                        repeaterItems: onRepeaterChange(
                            "edit",
                            false,
                            i
                        )
                    })
                }
            })
        }

        const removeItem = (index, item) => {
            this.forceUpdate()
            let array = repeaterItems.map((cont, currIndex) => {
                return cont
            }).filter((f, i) => i != index)
            setAttributes({ repeaterItems: array });
        }

        const renderItems = repeaterItems.map((item, index) => {
            return (< div className="premium-progress-bar-multiple-label"
                style={
                    {
                        left: item.percentage + "%"
                    }
                } >
                <p className="premium-progress-bar-center-label" > {
                    item.title
                }
                    {
                        item.percentage ? < span className="premium-progress-bar-percentage" > {
                            item.percentage
                        }% </span> : ""}
                </p>
                {
                    (item.title || item.percentage) ? indicator == 'arrow' ? < p className="premium-progress-bar-arrow" > </p> : indicator == 'pin' ? <p className="premium-progress-bar-pin"></p> : "" : ""}
            </div>
            )
        })

        const mainClasses = classnames(className, "premium-progress-bar");
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
                        title={__("Progress Bar")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__("Multiple Stage")}
                            checked={multiStage}
                            onChange={newCheck => setAttributes({ multiStage: newCheck })}
                        />
                        {!multiStage ? (
                            <Fragment>
                                <TextControl
                                    label={__("Label")}
                                    value={label}
                                    onChange={value => setAttributes({ label: value })}
                                />
                                <TextControl
                                    label={__("Percentage")}
                                    value={percentage}
                                    onChange={value => setAttributes({ percentage: value })}
                                />
                            </Fragment>
                        ) :
                            < Fragment >
                                <div className="premium-progress-bar-control-content" >
                                    <label >
                                        <span className="premium-progress-bar-control-title" > Label </span>
                                    </label>
                                    < SortableList items={
                                        repeaterItems
                                    }
                                        onSortEnd={
                                            (o, n) => onSortEndSingle(o, n)
                                        }
                                        removeItem={
                                            (value) => removeItem(value)
                                        }
                                        edit={
                                            (value) => edit(value)
                                        }

                                        shouldCancelStart={
                                            shouldCancelStart
                                        }
                                        helperClass='premium-person__sortableHelper' />
                                    <div >
                                        <button
                                            className={
                                                "premium-progress-bar-btn"
                                            }
                                            onClick={
                                                () => {
                                                    this.forceUpdate();
                                                    return setAttributes({
                                                        repeaterItems: repeaterItems.concat([{
                                                            title: __("Label"),
                                                            percentage: __("50"),
                                                            edit: false
                                                        }])
                                                    });
                                                }
                                            } >
                                            <i className="dashicons dashicons-plus premium-progress-bar-icon" />
                                            {__("Add New Item")}
                                        </button>
                                    </div>
                                </div>
                                <br />
                                < SelectControl
                                    label={__("Labels Indicator")}
                                    value={indicator}
                                    onChange={newEffect => setAttributes({ indicator: newEffect })}
                                    options={INDICATOR}
                                />
                            </Fragment>
                        }

                        <RangeControl
                            label={__("Progress")}
                            value={progress}
                            min="1"
                            max="100"
                            onChange={value => setAttributes({ progress: value })}
                        />
                        <RangeControl
                            label={__("Speed")}
                            value={speeds}
                            min="1"
                            max="100"
                            onChange={value => setAttributes({ speeds: value })}
                        />
                        < SelectControl
                            label={__("Style")}
                            value={styleProgress}
                            onChange={newEffect => setAttributes({ styleProgress: newEffect })}
                            options={STYLE}
                        />
                        {styleProgress == 'stripe' &&
                            < ToggleControl
                                label={__("Animated")}
                                checked={animate}
                                onChange={newCheck => setAttributes({ animate: newCheck })}
                            />
                        }
                    </PanelBody>
                    <PanelBody
                        title={__("Progress Bar Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <PremiumRange
                            setAttributes={setAttributes}
                            rangeType={{ value: progressBarHeightType, label: __("progressBarHeightType") }}
                            range={{ value: progressBarHeight, label: __("progressBarHeight") }}
                            rangeMobile={{ value: progressBarHeightMobile, label: __("progressBarHeightMobile") }}
                            rangeTablet={{ value: progressBarHeightTablet, label: __("progressBarHeightTablet") }}
                            rangeLabel={__("Height")}
                            min={1}
                            max={100}
                        />
                        <PremiumRange
                            setAttributes={setAttributes}
                            rangeType={{ value: progressBarRadiusType, label: __("progressBarRadiusType") }}
                            range={{ value: progressBarRadius, label: __("progressBarRadius") }}
                            rangeMobile={{ value: progressBarRadiusMobile, label: __("progressBarRadiusMobile") }}
                            rangeTablet={{ value: progressBarRadiusTablet, label: __("progressBarRadiusTablet") }}
                            rangeLabel={__("Border Radius")}
                        />
                        <p>{__("Background Color")}</p>
                        <ColorPalette
                            value={progressBarbgColor}
                            onChange={newValue =>
                                setAttributes({
                                    progressBarbgColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <p>{__("Progressbar Color")}</p>
                        <ColorPalette
                            value={progressBarColor}
                            onChange={newValue =>
                                setAttributes({
                                    progressBarColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Label Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <p>{__("Color")}</p>
                        <ColorPalette
                            value={labelColor}
                            onChange={newValue =>
                                setAttributes({
                                    labelColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <PremiumTypo
                            components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                            setAttributes={setAttributes}
                            fontSizeType={{ value: LabelfontSizeType, label: __("LabelfontSizeType") }}
                            fontSize={{ value: LabelfontSize, label: __("LabelfontSize") }}
                            fontSizeMobile={{ value: LabelfontSizeMobile, label: __("LabelfontSizeMobile") }}
                            fontSizeTablet={{ value: LabelfontSizeTablet, label: __("LabelfontSizeTablet") }}
                            weight={LabelWeight}
                            style={LabelStyle}
                            spacing={LabelLetter}
                            upper={LabelUpper}
                            onChangeWeight={newWeight =>
                                setAttributes({ LabelWeight: newWeight || 500 })
                            }
                            onChangeStyle={newStyle =>
                                setAttributes({ LabelStyle: newStyle })
                            }
                            onChangeSpacing={newValue =>
                                setAttributes({ LabelLetter: newValue })
                            }
                            onChangeUpper={check => setAttributes({ LabelUpper: check })}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Percentage Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <p>{__("Color")}</p>
                        <ColorPalette
                            value={percentageColor}
                            onChange={newValue =>
                                setAttributes({
                                    percentageColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <PremiumTypo
                            components={["responsiveSize", "weight", "style", "spacing"]}
                            setAttributes={setAttributes}
                            fontSizeType={{ value: percentagefontSizeType, label: __("percentagefontSizeType") }}
                            fontSize={{ value: percentagefontSize, label: __("percentagefontSize") }}
                            fontSizeMobile={{ value: percentagefontSizeMobile, label: __("percentagefontSizeMobile") }}
                            fontSizeTablet={{ value: percentagefontSizeTablet, label: __("percentagefontSizeTablet") }}
                            weight={percentageWeight}
                            style={percentageStyle}
                            spacing={percentageLetter}
                            onChangeWeight={newWeight =>
                                setAttributes({ percentageWeight: newWeight || 500 })
                            }
                            onChangeStyle={newStyle =>
                                setAttributes({ percentageStyle: newStyle })
                            }
                            onChangeSpacing={newValue =>
                                setAttributes({ percentageLetter: newValue })
                            }
                        />
                    </PanelBody>
                    {multiStage && indicator == 'arrow' ? < PanelBody
                        title={__("Arrow Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        < p > {__("Color")} </p>
                        < ColorPalette
                            value={arrowColor}
                            onChange={
                                newValue =>
                                    setAttributes({
                                        arrowColor: newValue
                                    })
                            }
                            allowReset={true}
                        />
                        <PremiumRange
                            setAttributes={setAttributes}
                            rangeType={{ value: arrowType, label: __("arrowType") }}
                            range={{ value: arrow, label: __("arrow") }}
                            rangeMobile={{ value: arrowMobile, label: __("arrowMobile") }}
                            rangeTablet={{ value: arrowTablet, label: __("arrowTablet") }}
                            rangeLabel={__("Size")}
                            min={1}
                            max={50}
                        />
                    </PanelBody> : ""}
                    {multiStage && indicator == 'pin' ? < PanelBody
                        title={__("Indicator")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        < p > {__("Color")} </p>
                        < ColorPalette
                            value={pinColor}
                            onChange={
                                newValue =>
                                    setAttributes({
                                        pinColor: newValue
                                    })
                            }
                            allowReset={true}
                        />
                        <PremiumRange
                            setAttributes={setAttributes}
                            rangeType={{ value: pinType, label: __("pinType") }}
                            range={{ value: pin, label: __("pin") }}
                            rangeMobile={{ value: pinMobile, label: __("pinMobile") }}
                            rangeTablet={{ value: pinTablet, label: __("pinTablet") }}
                            rangeLabel={__("Size")}
                            min={1}
                            max={100}
                        />
                        <PremiumRange
                            setAttributes={setAttributes}
                            rangeType={{ value: pinHeightType, label: __("pinHeightType") }}
                            range={{ value: pinHeight, label: __("pinHeight") }}
                            rangeMobile={{ value: pinHeightMobile, label: __("pinHeightMobile") }}
                            rangeTablet={{ value: pinHeightTablet, label: __("pinHeightTablet") }}
                            rangeLabel={__("Height")}
                            min={1}
                            max={100}
                        />
                    </PanelBody> : ""}
                </InspectorControls>
            ),
            <div className={classnames(
                className,
                `premium-block-${this.props.clientId}`
            )} style={{
                textAlign: align,
            }}>
                <div className={`premium-progress-bar`}
                    style={{
                        textAlign: align,
                    }}>
                    {
                        !multiStage ? (
                            < div className="premium-progress-bar-labels-wrap" >
                                {label ? <p className="premium-progress-bar-left-label">
                                    <span>{label}</span>
                                </p> : ""}
                                {percentage ? < p className="premium-progress-bar-right-label" >
                                    <span > {
                                        percentage
                                    } </span>
                                </p> : ""}
                            </div>
                        ) : ""}
                    {
                        multiStage && (<div>{renderItems}</div>)}
                    <div className="premium-progress-bar-clear"></div>
                    <div className="premium-progress-bar-progress">
                        < div className={
                            `premium-progress-bar-progress-bar ${this.props.clientId} ${styleProgress == 'stripe' ? "premium-progress-bar-progress-stripe" : ""} ${animate ? "premium-progress-bar-progress-active" : ""}`
                        }
                            style={{ transition: `width ${speeds}s ease-in-out` }}
                            data-score={`${progress}`}
                            role="progressbar" aria-valuemin="0" aria-valuemax="100"
                        > </div>
                    </div>
                </div>
            </div>
        ]
    }
}

export default edit