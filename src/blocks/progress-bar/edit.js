import classnames from "classnames"
import PremiumRangeControl from "../../components/premium-range-control";
import PremiumTypo from "../../components/premium-typo";
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'
const { __ } = wp.i18n
const { Component, Fragment } = wp.element
const { BlockControls, AlignmentToolbar, InspectorControls } = wp.editor
const { PanelBody, SelectControl, TextControl, ToggleControl } = wp.components
const { withSelect } = wp.data
import ResponsiveRangeControl from "../../components/RangeControl /responsive-range-control";

const SortableItem = SortableElement(({
    edit,
    removeItem,
    newIndex,
    value,
    changeLableValue,
    changePercentageValue,
    items
}) => < div className="premium-progress-bar-repeater" >

        <div className={
            `premium-progress-bar__container ${newIndex}`
        } >
            < span className="premium-progress-bar__dragHandle" ></span>
            <div className="premium-progress-bar__content"
                onClick={
                    () => edit(newIndex)
                } >
                Item# {
                    newIndex + 1
                } </div>

            {
                items.length != 1 ? < button className="premium-progress-bar__trashicon fa fa-trash"
                    onClick={
                        () => removeItem(newIndex, value)
                    } >
                </button> : ""}

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
                    (newText) => changeLableValue(newText, newIndex)
                }
            />
            <TextControl
                label={
                    __("Percentage", 'premium-block-for-gutenberg')
                }
                value={
                    value.percentage
                }
                onChange={
                    (newText) => changePercentageValue(newText, newIndex)
                }
            />
        </div >
    </div>
)

const SortableList = SortableContainer(({
    items,
    removeItem,
    edit,
    changeLableValue,
    changePercentageValue
}) => {
    return (<div > {
        (items).map((value, index) => (
            <SortableItem key={`item-${value}`}
                index={index}
                newIndex={index}
                value={value}
                removeItem={removeItem}
                edit={edit}
                changeLableValue={
                    changeLableValue
                }
                changePercentageValue={
                    changePercentageValue
                }
                items={
                    items
                }
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
        this.props.setAttributes({ block_id: this.props.clientId })
        this.props.setAttributes({ classMigrate: true })
        this.getPreviewSize = this.getPreviewSize.bind(this);
    }

    getPreviewSize(device, desktopSize, tabletSize, mobileSize) {
        if (device === 'Mobile') {
            if (undefined !== mobileSize && '' !== mobileSize) {
                return mobileSize;
            } else if (undefined !== tabletSize && '' !== tabletSize) {
                return tabletSize;
            }
        } else if (device === 'Tablet') {
            if (undefined !== tabletSize && '' !== tabletSize) {
                return tabletSize;
            }
        }
        return desktopSize;
    }

    render() {
        const { attributes, setAttributes, isSelected } = this.props

        const {
            block_id,
            className,
            align,
            multiStage,
            percentage,
            label,
            progress,
            speeds,
            repeaterItems,
            editTitle,
            styleProgress,
            animate,
            indicator,
            progressBarStyles,
            labelStyles,
            percentageStyles,
            indicatorStyles
        } = attributes

        const STYLE = [{
            value: "solid",
            label: __("Solid", 'premium-block-for-gutenberg')
        },
        {
            value: "stripe",
            label: __("Stripe", 'premium-block-for-gutenberg')
        }
        ];

        const INDICATOR = [{
            value: "arrow",
            label: __("Arrow", 'premium-block-for-gutenberg')
        },
        {
            value: "pin",
            label: __("Pin", 'premium-block-for-gutenberg')
        },
        {
            value: "none",
            label: __("None", 'premium-block-for-gutenberg')
        }
        ];
        const LabelSize = this.getPreviewSize(this.props.deviceType, labelStyles[0].LabelfontSize, labelStyles[0].LabelfontSizeTablet, labelStyles[0].LabelfontSizeMobile);
        const percentageSize = this.getPreviewSize(this.props.deviceType, percentageStyles[0].percentagefontSize, percentageStyles[0].percentagefontSizeTablet, percentageStyles[0].percentagefontSizeMobile);
        const progressBarHeightSize = this.getPreviewSize(this.props.deviceType, progressBarStyles[0].progressBarHeight, progressBarStyles[0].progressBarHeightTablet, progressBarStyles[0].progressBarHeightMobile);
        const progressBarRadiusSize = this.getPreviewSize(this.props.deviceType, progressBarStyles[0].progressBarRadius, progressBarStyles[0].progressBarRadiusTablet, progressBarStyles[0].progressBarRadiusMobile);
        const arrowSize = this.getPreviewSize(this.props.deviceType, indicatorStyles[0].arrow, indicatorStyles[0].arrowTablet, indicatorStyles[0].arrowMobile);
        const pinSize = this.getPreviewSize(this.props.deviceType, indicatorStyles[0].pin, indicatorStyles[0].pinTablet, indicatorStyles[0].pinMobile);
        const pinHeightSize = this.getPreviewSize(this.props.deviceType, indicatorStyles[0].pinHeight, indicatorStyles[0].pinHeightTablet, indicatorStyles[0].pinHeightMobile);


        const changeLableValue = (newText, newIndex) => {
            setAttributes({
                repeaterItems: onRepeaterChange(
                    "title",
                    newText,
                    newIndex
                )
            })
        }

        const changePercentageValue = (newText, newIndex) => {
            setAttributes({
                repeaterItems: onRepeaterChange(
                    "percentage",
                    newText,
                    newIndex
                )
            })
        }

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
                <p className="premium-progress-bar-center-label" style={{
                    color: labelStyles[0].labelColor,
                    fontWeight: labelStyles[0].LabelWeight,
                    letterSpacing: labelStyles[0].LabelLetter + "px",
                    textTransform: labelStyles[0].LabelUpper ? "uppercase" : "none",
                    fontStyle: labelStyles[0].LabelStyle,
                    fontSize: `${LabelSize}${labelStyles[0].LabelfontSizeType}`,
                    transform: align == 'right' ? "translateX(-10%)" : align == 'left' ? "translateX(-82%)" : "translateX(-45%)"
                }} > {
                        item.title
                    }
                    {
                        item.percentage ? < span className="premium-progress-bar-percentage" style={{
                            color: percentageStyles[0].percentageColor,
                            fontWeight: percentageStyles[0].percentageWeight,
                            letterSpacing: percentageStyles[0].percentageLetter + "px",
                            fontStyle: percentageStyles[0].percentageStyle,
                            fontSize: `${percentageSize}${percentageStyles[0].percentagefontSizeType}`
                        }} > {
                                item.percentage
                            }% </span> : ""}
                </p>
                {
                    (item.title || item.percentage) ? indicator == 'arrow' ? < div className="premium-progress-bar-arrow" style={{
                        color: indicatorStyles[0].arrowColor,
                        borderWidth: `${arrowSize}${indicatorStyles[0].arrowType}`
                    }}> </div> : indicator == 'pin' ? <div className="premium-progress-bar-pin" style={{
                        borderColor: indicatorStyles[0].pinColor,
                        borderLeftWidth: `${pinSize}${indicatorStyles[0].pinType}`,
                        height: `${pinHeightSize}${indicatorStyles[0].pinHeightType}`
                    }}></div> : "" : ""}
            </div>
            )
        })

        const saveProgressBarStyles = (value) => {
            const newUpdate = progressBarStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                progressBarStyles: newUpdate,
            });
        }

        const saveLabelStyles = (value) => {
            const newUpdate = labelStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                labelStyles: newUpdate,
            });
        }

        const saveParcentageStyles = (value) => {
            const newUpdate = percentageStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                percentageStyles: newUpdate,
            });
        }

        const saveIndicatorStyles = (value) => {
            const newUpdate = indicatorStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                indicatorStyles: newUpdate,
            });
        }


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
                            label={__("Multiple Stage", 'premium-block-for-gutenberg')}
                            checked={multiStage}
                            onChange={newCheck => setAttributes({ multiStage: newCheck })}
                        />
                        {!multiStage ? (
                            <Fragment>
                                <TextControl
                                    label={__("Label", 'premium-block-for-gutenberg')}
                                    value={label}
                                    onChange={value => setAttributes({ label: value })}
                                />
                                <TextControl
                                    label={__("Percentage", 'premium-block-for-gutenberg')}
                                    value={percentage}
                                    onChange={value => setAttributes({ percentage: value })}
                                />
                            </Fragment>
                        ) :
                            <Fragment>
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
                                        changeLableValue={
                                            changeLableValue
                                        }
                                        changePercentageValue={
                                            changePercentageValue
                                        }
                                        helperClass='premium-person__sortableHelper' />
                                    < div className="premium-progress-bar-btn__wrap" >
                                        <button
                                            className={
                                                "premium-progress-bar-btn"
                                            }
                                            onClick={
                                                () => {
                                                    this.forceUpdate();
                                                    return setAttributes({
                                                        repeaterItems: repeaterItems.concat([{
                                                            title: __("Label", 'premium-block-for-gutenberg'),
                                                            percentage: __("50"),
                                                            edit: false
                                                        }])
                                                    });
                                                }
                                            } >
                                            <i className="dashicons dashicons-plus premium-progress-bar-icon" />
                                            {__("Add New Item", 'premium-block-for-gutenberg')}
                                        </button>
                                    </div>
                                </div>
                                <br />
                                < SelectControl
                                    label={__("Labels Indicator", 'premium-block-for-gutenberg')}
                                    value={indicator}
                                    onChange={newEffect => setAttributes({ indicator: newEffect })}
                                    options={INDICATOR}
                                />
                            </Fragment>
                        }
                        <PremiumRangeControl
                            label={__("Progress", 'premium-block-for-gutenberg')}
                            value={progress}
                            onChange={value => setAttributes({ progress: value })}
                            showUnit={false}
                            defaultValue={50}
                        />
                        <PremiumRangeControl
                            label={__("Speed (milliseconds)", 'premium-block-for-gutenberg')}
                            value={speeds}
                            onChange={value => setAttributes({ speeds: value })}
                            min="0"
                            max="5"
                            showUnit={false}
                            defaultValue={1}
                        />
                        <SelectControl
                            label={__("Style", 'premium-block-for-gutenberg')}
                            value={styleProgress}
                            onChange={newEffect => setAttributes({ styleProgress: newEffect })}
                            options={STYLE}
                        />
                        {styleProgress == 'stripe' &&
                            < ToggleControl
                                label={__("Animated", 'premium-block-for-gutenberg')}
                                checked={animate}
                                onChange={newCheck => setAttributes({ animate: newCheck })}
                            />
                        }
                    </PanelBody>
                    <PanelBody
                        title={__("Progress Bar Style", 'premium-block-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ResponsiveRangeControl
                            label={__(`Height`, 'premium-block-for-gutenberg')}
                            value={progressBarStyles[0].progressBarHeight}
                            onChange={(value) => saveProgressBarStyles({ progressBarHeight: value })}
                            tabletValue={progressBarStyles[0].progressBarHeightTablet}
                            onChangeTablet={(value) => saveProgressBarStyles({ progressBarHeightTablet: value })}
                            mobileValue={progressBarStyles[0].progressBarHeightMobile}
                            onChangeMobile={(value) => saveProgressBarStyles({ progressBarHeightMobile: value })}

                            showUnit={false}
                            defaultValue={25}
                        />
                        <ResponsiveRangeControl
                            label={__(`Border Radius`, 'premium-block-for-gutenberg')}
                            value={progressBarStyles[0].progressBarRadius}
                            onChange={(value) => saveProgressBarStyles({ progressBarRadius: value })}
                            tabletValue={progressBarStyles[0].progressBarRadiusTablet}
                            onChangeTablet={(value) => saveProgressBarStyles({ progressBarRadiusTablet: value })}
                            mobileValue={progressBarStyles[0].progressBarRadiusMobile}
                            onChangeMobile={(value) => saveProgressBarStyles({ progressBarRadiusMobile: value })}
                            showUnit={false}
                            defaultValue={0}
                        />

                        <AdvancedPopColorControl
                            label={__("Background Color", 'premium-block-for-gutenberg')}
                            colorValue={progressBarStyles[0].progressBarbgColor}
                            colorDefault={''}
                            onColorChange={newValue =>
                                saveProgressBarStyles({
                                    progressBarbgColor: newValue
                                })
                            }
                        />
                        <AdvancedPopColorControl
                            label={__("Progressbar Color", 'premium-block-for-gutenberg')}
                            colorValue={progressBarStyles[0].progressBarColor}
                            colorDefault={''}
                            onColorChange={newValue =>
                                saveProgressBarStyles({
                                    progressBarColor: newValue
                                })
                            }
                        />
                    </PanelBody>
                    {
                        label && < PanelBody
                            title={__("Label Style", 'premium-block-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <AdvancedPopColorControl
                                label={__("Color", 'premium-block-for-gutenberg')}
                                colorValue={labelStyles[0].labelColor}
                                colorDefault={''}
                                onColorChange={newValue =>
                                    saveLabelStyles({
                                        labelColor: newValue
                                    })
                                }
                            />
                            <PremiumTypo
                                components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                                setAttributes={saveLabelStyles}
                                fontSizeType={{ value: labelStyles[0].LabelfontSizeType, label: __("LabelfontSizeType") }}
                                fontSize={{ value: labelStyles[0].LabelfontSize, label: __("LabelfontSize") }}
                                fontSizeMobile={{ value: labelStyles[0].LabelfontSizeMobile, label: __("LabelfontSizeMobile") }}
                                fontSizeTablet={{ value: labelStyles[0].LabelfontSizeTablet, label: __("LabelfontSizeTablet") }}
                                weight={labelStyles[0].LabelWeight}
                                style={labelStyles[0].LabelStyle}
                                spacing={labelStyles[0].LabelLetter}
                                upper={labelStyles[0].LabelUpper}
                                onChangeWeight={newWeight =>
                                    saveLabelStyles({ LabelWeight: newWeight || 500 })
                                }
                                onChangeStyle={newStyle =>
                                    saveLabelStyles({ LabelStyle: newStyle })
                                }
                                onChangeSpacing={newValue =>
                                    saveLabelStyles({ LabelLetter: newValue })
                                }
                                onChangeUpper={check => saveLabelStyles({ LabelUpper: check })}
                            />
                        </PanelBody>}
                    {
                        percentage && < PanelBody
                            title={__("Percentage Style", 'premium-block-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <AdvancedPopColorControl
                                label={__("Color", 'premium-block-for-gutenberg')}
                                colorValue={percentageStyles[0].percentageColor}
                                colorDefault={''}
                                onColorChange={newValue =>
                                    saveParcentageStyles({
                                        percentageColor: newValue
                                    })
                                }
                            />
                            <PremiumTypo
                                components={["responsiveSize", "weight", "style", "spacing"]}
                                setAttributes={saveParcentageStyles}
                                fontSizeType={{ value: percentageStyles[0].percentagefontSizeType, label: __("percentagefontSizeType") }}
                                fontSize={{ value: percentageStyles[0].percentagefontSize, label: __("percentagefontSize") }}
                                fontSizeMobile={{ value: percentageStyles[0].percentagefontSizeMobile, label: __("percentagefontSizeMobile") }}
                                fontSizeTablet={{ value: percentageStyles[0].percentagefontSizeTablet, label: __("percentagefontSizeTablet") }}
                                weight={percentageStyles[0].percentageWeight}
                                style={percentageStyles[0].percentageStyle}
                                spacing={percentageStyles[0].percentageLetter}
                                onChangeWeight={newWeight =>
                                    saveParcentageStyles({ percentageWeight: newWeight || 500 })
                                }
                                onChangeStyle={newStyle =>
                                    saveParcentageStyles({ percentageStyle: newStyle })
                                }
                                onChangeSpacing={newValue =>
                                    saveParcentageStyles({ percentageLetter: newValue })
                                }
                            />
                        </PanelBody>
                    }
                    {multiStage && indicator == 'arrow' ? <PanelBody
                        title={__("Arrow Style", 'premium-block-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >

                        <AdvancedPopColorControl
                            label={__("Color", 'premium-block-for-gutenberg')}
                            colorValue={indicatorStyles[0].arrowColor}
                            colorDefault={''}
                            onColorChange={newValue =>
                                saveIndicatorStyles({
                                    arrowColor: newValue
                                })
                            }
                        />
                        <ResponsiveRangeControl
                            label={__('Size', 'premium-blocks-for-gutenberg')}
                            value={indicatorStyles[0].arrow}
                            onChange={(value) => saveIndicatorStyles({ arrow: value })}
                            tabletValue={indicatorStyles[0].arrowTablet}
                            onChangeTablet={(value) => saveIndicatorStyles({ arrowTablet: value })}
                            mobileValue={indicatorStyles[0].arrowMobile}
                            onChangeMobile={(value) => saveIndicatorStyles({ arrowMobile: value })}
                            min={1}
                            max={50}
                            step={1}
                            showUnit={false}
                            defaultValue={10}
                        />
                    </PanelBody> : ""}
                    {multiStage && indicator == 'pin' ? < PanelBody
                        title={__("Indicator", 'premium-block-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <AdvancedPopColorControl
                            label={__("Color", 'premium-block-for-gutenberg')}
                            colorValue={indicatorStyles[0].pinColor}
                            colorDefault={''}
                            onColorChange={newValue =>
                                saveIndicatorStyles({
                                    pinColor: newValue
                                })
                            }
                        />

                        <ResponsiveRangeControl
                            label={__('Size', 'premium-blocks-for-gutenberg')}
                            value={indicatorStyles[0].pin}
                            onChange={(value) => saveIndicatorStyles({ pin: value })}
                            tabletValue={indicatorStyles[0].pinTablet}
                            onChangeTablet={(value) => saveIndicatorStyles({ pinTablet: value })}
                            mobileValue={indicatorStyles[0].pinMobile}
                            onChangeMobile={(value) => saveIndicatorStyles({ pinMobile: value })}
                            showUnit={false}
                            defaultValue={1}
                        />
                        <ResponsiveRangeControl
                            label={__("Height", 'premium-blocks-for-gutenberg')}
                            value={indicatorStyles[0].pinHeight}
                            onChange={(value) => saveIndicatorStyles({ pinHeight: value })}
                            tabletValue={indicatorStyles[0].pinHeightTablet}
                            onChangeTablet={(value) => saveIndicatorStyles({ pinHeightTablet: value })}
                            mobileValue={indicatorStyles[0].pinHeightMobile}
                            onChangeMobile={(value) => saveIndicatorStyles({ pinHeightMobile: value })}
                            showUnit={false}
                            defaultValue={12}
                        />

                    </PanelBody> : ""}
                </InspectorControls>
            ),
            <div className={classnames(
                className,
                `premium-block-${block_id}`
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
                                {label ? <p className="premium-progress-bar-left-label" style={{
                                    color: labelStyles[0].labelColor,
                                    fontWeight: labelStyles[0].LabelWeight,
                                    letterSpacing: labelStyles[0].LabelLetter + "px",
                                    textTransform: labelStyles[0].LabelUpper ? "uppercase" : "none",
                                    fontStyle: labelStyles[0].LabelStyle,
                                    fontSize: LabelSize + labelStyles[0].LabelfontSizeType,
                                }}>
                                    <span>{label}</span>
                                </p> : ""}
                                {percentage ? < p className="premium-progress-bar-right-label" style={{
                                    color: percentageStyles[0].percentageColor,
                                    fontWeight: percentageStyles[0].percentageWeight,
                                    letterSpacing: percentageStyles[0].percentageLetter + "px",
                                    fontStyle: percentageStyles[0].percentageStyle,
                                    fontSize: percentageSize + percentageStyles[0].percentagefontSizeType,
                                }}>
                                    <span > {
                                        percentage
                                    } </span>
                                </p> : ""}
                            </div>
                        ) : ""}
                    {
                        multiStage && (<div>{renderItems}</div>)}
                    <div className="premium-progress-bar-clear"></div>
                    <div className="premium-progress-bar-progress"
                        style={{
                            height: `${progressBarHeightSize}${progressBarStyles[0].progressBarHeightType}`,
                            borderRadius: `${progressBarRadiusSize}${progressBarStyles[0].progressBarRadiusType}`,
                            backgroundColor: progressBarStyles[0].progressBarbgColor
                        }}
                    >
                        < div
                            className={
                                `premium-progress-bar-progress-bar ${block_id} ${styleProgress == 'stripe' ? "premium-progress-bar-progress-stripe" : ""} ${animate ? "premium-progress-bar-progress-active" : ""}`
                            }
                            style={{
                                transition: `width ${speeds}s ease-in-out`,
                                height: `${progressBarHeightSize}${progressBarStyles[0].progressBarHeightType}`,
                                borderRadius: `${progressBarRadiusSize}${progressBarStyles[0].progressBarRadiusType}`,
                                backgroundColor: progressBarStyles[0].progressBarColor,
                                width: `${progress}%`,

                            }}
                            data-score={`${progress}`}
                            data-speed={`${speeds}`}
                        > </div>
                    </div>
                </div>
            </div >
        ]
    }
}

export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;
    return {
        deviceType: deviceType
    }
})(edit)