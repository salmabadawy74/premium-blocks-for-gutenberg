import classnames from "classnames"
const { __ } = wp.i18n
const { compose } = wp.compose;
const { select, withDispatch, withSelect } = wp.data
const { PanelBody, SelectControl, Tooltip, Button, ToggleControl } = wp.components
const { Component, Fragment, createRef } = wp.element
const { InspectorControls, InnerBlocks } = wp.blockEditor
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';
import ResponsiveRangeControl from "../../components/RangeControl/responsive-range-control";
import SpacingControl from '../../components/premium-responsive-spacing'
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import PremiumBackgroundControl from '../../components/Premium-Background-Control'
import PremiumBorder from "../../components/premium-border";
import PremiumShadow from "../../components/PremiumShadow";
import InsideTabs from '../../components/InsideTabs';
import InsideTab from '../../components/InsideTab';
import Shape from '../../components/premium-shape';
import Animation from '../../components/Animation'
import ResponsiveRadio from '../../components/responsive-radio';
import renderCustomIcon from '../../../blocks-config/renderIcon';
import { gradientBackground, videoBackground, borderCss, padddingCss, marginCss } from '../../components/HelperFunction'
const colOption = [
    { label: '100', columns: 1, layout: { Desktop: [100], Tablet: [100], Mobile: [100] } },
    { label: '50/50', columns: 2, layout: { Desktop: [50, 50], Tablet: [100, 100], Mobile: [100, 100] } },
    { label: '33/33/33', columns: 3, layout: { Desktop: [33.33, 33.33, 33.34], Tablet: [100, 100, 100], Mobile: [100, 100, 100] } },
    { label: '25/25/25/25', columns: 4, layout: { Desktop: [25, 25, 25, 25], Tablet: [50, 50, 50, 50], Mobile: [100, 100, 100, 100] } },
    { label: '34/66', columns: 2, layout: { Desktop: [34, 66], Tablet: [50, 50], Mobile: [100, 100] } },
    { label: '66/34', columns: 2, layout: { Desktop: [66, 34], Tablet: [100, 100], Mobile: [100, 100] } },
    { label: '25/25/50', columns: 3, layout: { Desktop: [25, 25, 50], Tablet: [50, 50, 100], Mobile: [100, 100, 100] } },
    { label: '50/25/25', columns: 3, layout: { Desktop: [50, 25, 25], Tablet: [100, 50, 50], Mobile: [100, 100, 100] } },
    { label: '25/50/25', columns: 3, layout: { Desktop: [25, 50, 25], Tablet: [100, 100, 100], Mobile: [100, 100, 100] } },
    { label: '20/20/20/20/20', columns: 5, layout: { Desktop: [20, 20, 20, 20, 20], Tablet: [20, 20, 20, 20, 20], Mobile: [20, 20, 20, 20, 20] } },
    { label: '16/16/16/16/16/16', columns: 6, layout: { Desktop: [16.66, 16.67, 16.66, 16.67, 16.67, 16.67], Tablet: [33.33, 33.33, 33.34, 33.33, 33.33, 33.34], Mobile: [50, 50, 50, 50, 50, 50] } },
    { label: '16/66/16', columns: 3, layout: { Desktop: [16.66, 66.68, 16.66], Tablet: [100, 100, 100], Mobile: [100, 100, 100] } },
];

let defaultLayout = { Desktop: [100], Tablet: [100], Mobile: [100] }

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            device: this.props.deviceType,
            hideRowSettings: false
        };
        this.qubelyContextMenu = createRef();
    }
    componentDidMount() {
        const { setAttributes, clientId, attributes: { uniqueId } } = this.props
        const { getBlockRootClientId } = select('core/block-editor');

        let parentClientId = getBlockRootClientId(clientId)

        if (parentClientId) {
            this.setState({ hideRowSettings: true })
        }

        const _client = clientId.substr(0, 9)
        if (!uniqueId) {
            setAttributes({ uniqueId: _client, childRow: parentClientId ? true : false });
        } else if (uniqueId && uniqueId != _client) {
            setAttributes({ uniqueId: _client, childRow: parentClientId ? true : false });
        }
    }

    getTemplate(columns) {
        return [...Array(parseInt(columns))].map((data, index) => {
            const columnWidth = { Desktop: defaultLayout.Desktop[index], Tablet: defaultLayout.Tablet[index], Mobile: defaultLayout.Mobile[index], unit: '%', device: 'Desktop' }
            return ['premium/column', { colWidth: columnWidth }]
        })
    }

    removeRowBlock() {
        const { clientId, removeBlock } = this.props;
        removeBlock(clientId);
    }

    getClassName = () => {
        const {
            attributes: {
                align,
                childRow,
                rowContainerWidth
            }
        } = this.props;
        let wrapperClassName = '';

        if (typeof align !== 'undefined') {
            if (align === 'full' && rowContainerWidth === 'boxed') {
                wrapperClassName = 'qubely-container';
            } else {
                wrapperClassName = 'qubely-container-fluid';
            }
        } else {
            if (childRow) {
                wrapperClassName = 'qubely-container-fluid';
            } else {
                wrapperClassName = 'qubely-container';
            }
        }
        return wrapperClassName;
    }

    render() {
        const {
            attributes: {
                uniqueId,
                className,
                rowId,
                columns,
                padding,
                margin,
                direction,
                alignItems,
                justifyItems,
                wrapItems,
                shapeTop,
                shapeBottom,
                minHeight,
                heightOptions,
                border,
                //animation
                animation,
                //global
                innerWidthType,
                innerWidth,
                columnGutter,
                height,
                vPos,
                overflow,
                stretchSection,
                backgroundOptions,
                boxShadow
            },
            setAttributes } = this.props;

        const topShapeClasses = classnames(
            'premium-shape-divider',
            'premium-top-shape',
            { 'premium-top-shape-flip': shapeTop['flipShapeDivider'] === true },
            { 'premium-top-shape-above-content': shapeTop['front'] === true },
            { 'premium-top-shape__invert': shapeTop['invertShapeDivider'] === true }
        )
        const bottomShapeClasses = classnames(
            'premium-shape-divider',
            'premium-bottom-shape',
            { 'premium-bottom-shape-flip': shapeBottom['flipShapeDivider'] === true },
            { 'premium-bottom-shape-above-content': shapeBottom['front'] === true },
            { 'premium-bottom-shape__invert': shapeBottom['invertShapeDivider'] === true }
        )
        const currentOffset = 'row' === direction[this.props.deviceType] ? 'column' : 'row'
        console.log(direction)
        if (!columns) {
            return (
                <Fragment>
                    <div className="premium-blocks__row_container" style={{
                        background: ' #f7f8fc',
                        padding: '25px 15px'
                    }}>
                        <Button onClick={() => this.removeRowBlock()} className="premium-blocks-remove-button" >
                            <span class="dashicons dashicons-no"></span>                        </Button>
                        <div className="premium-blocks__placeholder_title" style={{
                            fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                            textAlign: 'center',
                            fontSize: '16px',
                            marginBottom: '18px',
                            color: '#191e23'
                        }}>{__('Select Column Layout', 'premium-blocks-for-gutenberg')}</div>
                        <div className="premium-blocks__placeholder-group" style={{
                            maxWidth: '700px',
                            margin: '0 auto'
                        }}>
                            {colOption.map((data) => (
                                <Tooltip text={data.label}>
                                    <button style={{
                                        cursor: 'pointer',
                                        width: '16.66% ',
                                        background: 'transparent',
                                        border: 'none',
                                        height: '50px',
                                        margin: '7px',
                                        display: 'inline-flex',
                                        padding: 0,
                                        outline: '1px solid transparent',
                                        transition: '300ms',
                                    }} onClick={() => {
                                        setAttributes({ columns: data.columns });
                                        defaultLayout = data.layout
                                    }}>
                                        {data.layout.Desktop.map(d => <i style={{
                                            width: d + '%',
                                            height: '50px',
                                            background: '#e2e6ec',
                                            border: '1px solid #e2e6ec',
                                            borderRadius: '3px',
                                            display: 'inline-block',
                                            position: 'relative',
                                            transition: '300ms',
                                            marginRight: '2px'
                                        }} />)}
                                    </button>
                                </Tooltip>
                            ))}
                        </div>
                    </div>
                </Fragment >
            )
        }
        return (
            <Fragment>
                <InspectorControls>
                    <InspectorTabs tabs={['layout', 'style', 'advance']}>
                        <InspectorTab key={'layout'}>
                            <PanelBody
                                initialOpen={true}
                                title={__('General', "premium-blocks-for-gutenberg")}
                            >
                                <SelectControl
                                    label={__("Content Width", 'premium-blocks-for-gutenberg')}
                                    options={
                                        [{ value: "boxed", label: __("Boxed", 'premium-blocks-for-gutenberg') },
                                        { value: "full", label: __("Full Width", 'premium-blocks-for-gutenberg') }]
                                    }
                                    value={innerWidthType}
                                    onChange={newValue => setAttributes({ innerWidthType: newValue })}
                                />
                                {"boxed" === innerWidthType && (
                                    <ResponsiveSingleRangeControl
                                        label={__("Max Width", 'premium-blocks-for-gutenberg')}
                                        value={innerWidth}
                                        min="1"
                                        max="1600"
                                        onChange={newValue => setAttributes({ innerWidth: newValue })}
                                        defaultValue={0}
                                        showUnit={false}
                                    />
                                )}
                                <ResponsiveRangeControl
                                    label={__("Column Gutter", 'premium-blocks-for-gutenberg')}
                                    value={columnGutter}
                                    min="0"
                                    max="100"
                                    onChange={newValue => setAttributes({ columnGutter: newValue })}
                                    defaultValue={0}
                                    showUnit={true}
                                />
                                <SelectControl
                                    label={__("Height", 'premium-blocks-for-gutenberg')}
                                    options={[{
                                        value: "auto",
                                        label: __("Default ", 'premium-blocks-for-gutenberg')
                                    },
                                    {
                                        value: "min",
                                        label: __("Min Height", 'premium-blocks-for-gutenberg')
                                    },
                                    {
                                        value: "100%",
                                        label: __("100% Full Screen ", 'premium-blocks-for-gutenberg')
                                    }]}
                                    value={height}
                                    onChange={newValue => setAttributes({ height: newValue })}
                                />
                                {"min" === height && (
                                    <ResponsiveRangeControl
                                        label={__("Column Gutter", 'premium-blocks-for-gutenberg')}
                                        value={minHeight}
                                        min="40"
                                        max="1200"
                                        onChange={newValue => setAttributes({ minHeight: newValue })}
                                        defaultValue={0}
                                        showUnit={true}
                                    />

                                )}
                                <SelectControl
                                    label={__("Content Position", 'premium-blocks-for-gutenberg')}
                                    help={__("If you have two or more inner columns then this option will work only on the preview page", 'premium-blocks-for-gutenberg')}
                                    options={[
                                        {
                                            value: "top",
                                            label: __("Top", 'premium-blocks-for-gutenberg')
                                        },
                                        {
                                            value: "middle",
                                            label: __("Middle", 'premium-blocks-for-gutenberg')
                                        },
                                        {
                                            value: "bottom",
                                            label: __("Bottom", 'premium-blocks-for-gutenberg')
                                        }
                                    ]}
                                    value={vPos}
                                    onChange={newValue => setAttributes({ vPos: newValue })}
                                />
                                <SelectControl
                                    label={__("Overflow", 'premium-blocks-for-gutenberg')}
                                    options={[
                                        {
                                            value: 'default',
                                            label: __("Default", 'premium-blocks-for-gutenberg')
                                        },
                                        {
                                            value: 'hidden',
                                            label: __('Hidden', 'premium-blocks-for-gutenberg')
                                        }
                                    ]}
                                    value={overflow}
                                    onChange={newValue => setAttributes({ overflow: newValue })}
                                />
                            </PanelBody>
                            <PanelBody
                                initialOpen={false}
                                title={__('Flex Properties', "premium-blocks-for-gutenberg")}
                            >
                                <ResponsiveRadio
                                    choices={[
                                        {
                                            value: 'row',
                                            label: __('Row', 'premium-blocks-for-gutenberg'),
                                            icon: (renderCustomIcon('flex-direction-row')),
                                        },
                                        {
                                            value: 'column',
                                            label: __('Column', 'premium-blocks-for-gutenberg'),
                                            icon: (renderCustomIcon('flex-direction-column')),
                                        },
                                        {
                                            value: 'row-reverse',
                                            label: __('Row Reverse', 'premium-blocks-for-gutenberg'),
                                            icon: (renderCustomIcon('flex-direction-row-reverse')),
                                        },
                                        {
                                            value: 'column-reverse',
                                            label: __('Column Reverse', 'premium-blocks-for-gutenberg'),
                                            icon: (renderCustomIcon('flex-direction-column-reverse')),
                                        },
                                    ]}
                                    value={direction}
                                    onChange={(newValue) => setAttributes({ direction: newValue })}
                                    label={__("Direction", 'premium-blocks-for-gutenberg')}
                                    showIcons={true}
                                />
                                <ResponsiveRadio
                                    choices={[
                                        {
                                            value: 'flex-start',
                                            label: __('Flex Start', 'premium-blocks-for-gutenberg'),
                                            icon: (renderCustomIcon(`flex-${currentOffset}-start`)),
                                        },
                                        {
                                            value: 'center',
                                            label: __('Center', 'premium-blocks-for-gutenberg'),
                                            icon: (renderCustomIcon(`flex-${currentOffset}-center`)),
                                        },
                                        {
                                            value: 'flex-end',
                                            label: __('Flex End', 'premium-blocks-for-gutenberg'),
                                            icon: (renderCustomIcon(`flex-${currentOffset}-end`)),
                                        },
                                        {
                                            value: 'stretch',
                                            label: __('Stretch', 'premium-blocks-for-gutenberg'),
                                            icon: (renderCustomIcon(`flex-${currentOffset}-strech`)),
                                        },
                                    ]}
                                    value={alignItems}
                                    onChange={(newValue) => setAttributes({ alignItems: newValue })}
                                    label={__("Align Items", 'premium-blocks-for-gutenberg')}
                                    showIcons={true}
                                />
                                <ResponsiveRadio
                                    choices={[
                                        {
                                            value: 'flex-start',
                                            tooltip: __('Flex Start', 'premium-blocks-for-gutenberg'),
                                            icon: (<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 0C1.55228 0 2 0.447715 2 1V30.5C2 31.0523 1.55228 31.5 1 31.5C0.447715 31.5 0 31.0523 0 30.5V1C0 0.447715 0.447715 0 1 0Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M31 0C31.5523 0 32 0.447715 32 1V30.5C32 31.0523 31.5523 31.5 31 31.5C30.4477 31.5 30 31.0523 30 30.5V1C30 0.447715 30.4477 0 31 0Z"></path><path d="M5 6L9 6C9.53027 6.00053 10.0387 6.21141 10.4136 6.58637C10.7886 6.96133 10.9995 7.46973 11 8L11 23C10.9995 23.5303 10.7886 24.0387 10.4136 24.4136C10.0387 24.7886 9.53027 24.9995 9 25H5C4.46973 24.9995 3.96133 24.7886 3.58637 24.4136C3.21141 24.0387 3.00053 23.5303 3 23L3 8C3.00053 7.46973 3.21141 6.96133 3.58637 6.58637C3.96133 6.21141 4.46973 6.00053 5 6Z"></path><path d="M14 6L18 6C18.5303 6.00053 19.0387 6.21141 19.4136 6.58637C19.7886 6.96133 19.9995 7.46973 20 8L20 23C19.9995 23.5303 19.7886 24.0387 19.4136 24.4136C19.0387 24.7886 18.5303 24.9995 18 25H14C13.4697 24.9995 12.9613 24.7886 12.5864 24.4136C12.2114 24.0387 12.0005 23.5303 12 23L12 8C12.0005 7.46973 12.2114 6.96133 12.5864 6.58637C12.9613 6.21141 13.4697 6.00053 14 6Z"></path></svg>),
                                        },
                                        {
                                            value: 'center',
                                            tooltip: __('Center', 'premium-blocks-for-gutenberg'),
                                            icon: (<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 0C1.55228 0 2 0.447715 2 1V30.5C2 31.0523 1.55228 31.5 1 31.5C0.447715 31.5 0 31.0523 0 30.5V1C0 0.447715 0.447715 0 1 0Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M31 0C31.5523 0 32 0.447715 32 1V30.5C32 31.0523 31.5523 31.5 31 31.5C30.4477 31.5 30 31.0523 30 30.5V1C30 0.447715 30.4477 0 31 0Z"></path><path d="M9 6L13 6C13.5303 6.00053 14.0387 6.21141 14.4136 6.58637C14.7886 6.96133 14.9995 7.46973 15 8L15 23C14.9995 23.5303 14.7886 24.0387 14.4136 24.4136C14.0387 24.7886 13.5303 24.9995 13 25H9C8.46973 24.9995 7.96133 24.7886 7.58637 24.4136C7.21141 24.0387 7.00053 23.5303 7 23L7 8C7.00053 7.46973 7.21141 6.96133 7.58637 6.58637C7.96133 6.21141 8.46973 6.00053 9 6Z"></path><path d="M19 6L23 6C23.5303 6.00053 24.0387 6.21141 24.4136 6.58637C24.7886 6.96133 24.9995 7.46973 25 8L25 23C24.9995 23.5303 24.7886 24.0387 24.4136 24.4136C24.0387 24.7886 23.5303 24.9995 23 25H19C18.4697 24.9995 17.9613 24.7886 17.5864 24.4136C17.2114 24.0387 17.0005 23.5303 17 23L17 8C17.0005 7.46973 17.2114 6.96133 17.5864 6.58637C17.9613 6.21141 18.4697 6.00053 19 6Z"></path></svg>),
                                        },
                                        {
                                            value: 'flex-end',
                                            tooltip: __('Flex End', 'premium-blocks-for-gutenberg'),
                                            icon: (<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 0C1.55228 0 2 0.447715 2 1V30.5C2 31.0523 1.55228 31.5 1 31.5C0.447715 31.5 0 31.0523 0 30.5V1C0 0.447715 0.447715 0 1 0Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M31 0C31.5523 0 32 0.447715 32 1V30.5C32 31.0523 31.5523 31.5 31 31.5C30.4477 31.5 30 31.0523 30 30.5V1C30 0.447715 30.4477 0 31 0Z"></path><path d="M7 6L11 6C11.5303 6.00053 12.0387 6.21141 12.4136 6.58637C12.7886 6.96133 12.9995 7.46973 13 8L13 23C12.9995 23.5303 12.7886 24.0387 12.4136 24.4136C12.0387 24.7886 11.5303 24.9995 11 25L7 25C6.46973 24.9995 5.96133 24.7886 5.58637 24.4136C5.21141 24.0387 5.00053 23.5303 5 23L5 8C5.00053 7.46973 5.21141 6.96133 5.58637 6.58637C5.96133 6.21141 6.46973 6.00053 7 6Z"></path><path d="M21 6L25 6C25.5303 6.00053 26.0387 6.21141 26.4136 6.58637C26.7886 6.96133 26.9995 7.46973 27 8L27 23C26.9995 23.5303 26.7886 24.0387 26.4136 24.4136C26.0387 24.7886 25.5303 24.9995 25 25L21 25C20.4697 24.9995 19.9613 24.7886 19.5864 24.4136C19.2114 24.0387 19.0005 23.5303 19 23L19 8C19.0005 7.46973 19.2114 6.96133 19.5864 6.58637C19.9613 6.21141 20.4697 6.00053 21 6Z"></path></svg>),
                                        },
                                        {
                                            value: 'stretch',
                                            tooltip: __('Stretch', 'premium-blocks-for-gutenberg'),
                                            icon: (<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M31 31.5C30.4477 31.5 30 31.0523 30 30.5L30 1C30 0.447716 30.4477 -1.35705e-07 31 -8.74228e-08C31.5523 -3.91405e-08 32 0.447716 32 1L32 30.5C32 31.0523 31.5523 31.5 31 31.5Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1 31.5C0.447715 31.5 3.91405e-08 31.0523 8.74228e-08 30.5L2.66639e-06 1C2.71468e-06 0.447716 0.447718 -1.35705e-07 1 -8.74228e-08C1.55229 -3.91405e-08 2 0.447716 2 1L2 30.5C2 31.0523 1.55228 31.5 1 31.5Z"></path><path d="M12 25.5L8 25.5C7.46973 25.4995 6.96133 25.2886 6.58637 24.9136C6.21141 24.5387 6.00053 24.0303 6 23.5L6 8.5C6.00053 7.96973 6.21141 7.46133 6.58637 7.08637C6.96133 6.71141 7.46973 6.50053 8 6.5L12 6.5C12.5303 6.50053 13.0387 6.71141 13.4136 7.08637C13.7886 7.46133 13.9995 7.96973 14 8.5L14 23.5C13.9995 24.0303 13.7886 24.5387 13.4136 24.9136C13.0387 25.2886 12.5303 25.4995 12 25.5Z"></path><path d="M24 25.5L20 25.5C19.4697 25.4995 18.9613 25.2886 18.5864 24.9136C18.2114 24.5387 18.0005 24.0303 18 23.5L18 8.5C18.0005 7.96973 18.2114 7.46133 18.5864 7.08637C18.9613 6.71141 19.4697 6.50053 20 6.5L24 6.5C24.5303 6.50053 25.0387 6.71141 25.4136 7.08637C25.7886 7.46133 25.9995 7.96973 26 8.5L26 23.5C25.9995 24.0303 25.7886 24.5387 25.4136 24.9136C25.0387 25.2886 24.5303 25.4995 24 25.5Z"></path></svg>),
                                        },
                                    ]}
                                    value={justifyItems}
                                    onChange={(newValue) => setAttributes({ justifyItems: newValue })}
                                    label={__("Justify Items", 'premium-blocks-for-gutenberg')}
                                    showIcons={true}
                                />
                                <ResponsiveRadio
                                    choices={[
                                        {
                                            value: 'flex-start',
                                            tooltip: __('Flex Start', 'premium-blocks-for-gutenberg'),
                                            icon: (<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                                <title>order-start</title>
                                                <path d="M1.344 0c0.736 0 1.344 0.608 1.344 1.344v29.312c0 0.704-0.512 1.28-1.184 1.344h-0.16c-0.736 0-1.344-0.608-1.344-1.344v-29.312c0-0.704 0.512-1.28 1.184-1.344h0.16zM13.344 8c0.32 0.032 0.576 0.16 0.864 0.416 0.224 0.224 0.32 0.512 0.32 0.864v4.064h15.552c0.992 0 1.792 0.736 1.888 1.696v1.76c0 0.96-0.736 1.76-1.696 1.856h-15.744v4.192c-0.064 0.352-0.224 0.64-0.48 0.864-0.288 0.192-0.576 0.288-0.896 0.288s-0.608-0.16-0.864-0.416l-6.72-6.784c-0.192-0.256-0.256-0.576-0.224-0.896s0.16-0.64 0.384-0.864l6.688-6.72c0.256-0.256 0.576-0.352 0.928-0.32z"></path>
                                            </svg>),
                                        },
                                        {
                                            value: 'center',
                                            tooltip: __('Center', 'premium-blocks-for-gutenberg'),
                                            icon: (<svg width="24" height="24" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M1.33984 0C1.89213 0 2.33984 0.447715 2.33984 1V30.5C2.33984 31.0523 1.89213 31.5 1.33984 31.5C0.787559 31.5 0.339844 31.0523 0.339844 30.5V1C0.339844 0.447715 0.787559 0 1.33984 0Z"></path><path d="M31.3398 0C31.8921 0 32.3398 0.447715 32.3398 1V30.5C32.3398 31.0523 31.8921 31.5 31.3398 31.5C30.7876 31.5 30.3398 31.0523 30.3398 30.5V1C30.3398 0.447715 30.7876 0 31.3398 0Z"></path><path d="M24.3754 11.2929L27.9612 14.8786C28.3517 15.2692 28.3517 15.9023 27.9612 16.2929L24.3754 19.8786C23.9848 20.2691 23.3517 20.2691 22.9611 19.8786C22.5706 19.4881 22.5706 18.8549 22.9611 18.4644L24.8398 16.5857L5.33984 16.5857C4.78756 16.5857 4.33984 16.138 4.33984 15.5857C4.33984 15.0334 4.78756 14.5857 5.33984 14.5857L24.8398 14.5857L22.9611 12.7071C22.5706 12.3166 22.5706 11.6834 22.9611 11.2929C23.3517 10.9024 23.9848 10.9024 24.3754 11.2929Z"></path></svg>),
                                        },
                                        {
                                            value: 'flex-end',
                                            tooltip: __('Flex End', 'premium-blocks-for-gutenberg'),
                                            icon: (<svg width="24" height="24" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M1.33984 32C1.89213 32 2.33984 31.5452 2.33984 30.9841V1.01587C2.33984 0.454821 1.89213 0 1.33984 0C0.787559 0 0.339844 0.454821 0.339844 1.01587V30.9841C0.339844 31.5452 0.787559 32 1.33984 32Z"></path><path d="M31.3398 32C31.8921 32 32.3398 31.5452 32.3398 30.9841V1.01587C32.3398 0.454821 31.8921 0 31.3398 0C30.7876 0 30.3398 0.454821 30.3398 1.01587V30.9841C30.3398 31.5452 30.7876 32 31.3398 32Z"></path><path d="M27.3398 26.5C27.8921 26.5 28.3398 26.0523 28.3398 25.5V9.5C28.3398 9.49784 28.3398 9.49569 28.3398 9.49353C28.3363 8.94422 27.89 8.5 27.3398 8.5L10.8398 8.5L12.7185 6.62136C13.1091 6.23084 13.1091 5.59767 12.7185 5.20715C12.328 4.81663 11.6949 4.81663 11.3043 5.20715L7.71852 8.79289C7.328 9.18342 7.328 9.81658 7.71852 10.2071L11.3043 13.7929C11.6949 14.1834 12.328 14.1834 12.7185 13.7929C13.1091 13.4023 13.1091 12.7692 12.7185 12.3787L10.8398 10.5L26.3398 10.5V24.5H5.33984C4.78756 24.5 4.33984 24.9477 4.33984 25.5C4.33984 26.0523 4.78756 26.5 5.33984 26.5H27.3398Z"></path></svg>),
                                        },

                                    ]}
                                    value={wrapItems}
                                    onChange={(newValue) => setAttributes({ wrapItems: newValue })}
                                    label={__("Wrap Items", 'premium-blocks-for-gutenberg')}
                                    showIcons={true}
                                />
                            </PanelBody>
                        </InspectorTab>
                        <InspectorTab key={"style"}>
                            <PanelBody
                                initialOpen={false}
                                title={__('Background', 'premium-blocks-for-gutenberg')}
                            >
                                <PremiumBackgroundControl
                                    value={backgroundOptions}
                                    onChange={(value) => setAttributes({ backgroundOptions: value })}
                                    backgroundVedio={true}
                                />
                            </PanelBody>
                            <PanelBody
                                initialOpen={false}
                                title={__('Border')}
                            >
                                <PremiumBorder
                                    value={border}
                                    onChange={(value) => setAttributes({ border: value })}
                                />
                                <PremiumShadow
                                    boxShadow={true}
                                    value={boxShadow}
                                    onChange={(value) => setAttributes({ boxShadow: value })}
                                />
                            </PanelBody>
                            <PanelBody
                                initialOpen={false}
                                title={__('Shape Divider', 'premium-blocks-for-gutenberg')}
                            >
                                <InsideTabs>
                                    <InsideTab tabTitle={__('Top Shape', 'premium-blocks-for-gutenberg')}>
                                        <Shape
                                            shapeType="top"
                                            value={shapeTop}
                                            responsive
                                            onChange={val => setAttributes({ shapeTop: val })}
                                        />
                                    </InsideTab>
                                    <InsideTab tabTitle={__('Bottom Shape', 'premium-blocks-for-gutenberg')}>
                                        <Shape
                                            shapeType="bottom"
                                            value={shapeBottom}
                                            responsive
                                            onChange={val => setAttributes({ shapeBottom: val })}
                                        />
                                    </InsideTab>
                                </InsideTabs>
                            </PanelBody>
                        </InspectorTab>
                        <InspectorTab key={'advance'}>
                            <PanelBody
                                title={__('Spacing', 'premium-blocks-for-gutenberg')}
                                initialOpen={false}
                            >
                                <SpacingControl
                                    label={__('Margin', 'premium-blocks-for-gutenberg')}
                                    value={margin}
                                    onChange={(value) => setAttributes({ margin: value })}
                                    showUnits={true}
                                    responsive={true}
                                />
                                <SpacingControl
                                    label={__('Padding', 'premium-blocks-for-gutenberg')}
                                    value={padding}
                                    onChange={(value) => setAttributes({ padding: value })}
                                    showUnits={true}
                                    responsive={true}
                                />
                            </PanelBody>
                            <PanelBody
                                title={__('Animation', 'premium-blocks-for-gutenberg')}
                                initialOpen={false}
                            >
                                <Animation
                                    uniqueId={uniqueId}
                                    label={__('Animation', 'premium-blocks-for-gutenberg')}
                                    value={animation}
                                    onChange={(value) => setAttributes({ animation: value })}
                                />
                            </PanelBody>
                        </InspectorTab>
                    </InspectorTabs>
                </InspectorControls>
                <div className={`qubely-section qubely-block-${uniqueId} premium-container__${innerWidthType} ${className ? ` ${className}` : ''}`} {...rowId ? { id: rowId } : ''}
                    style={{
                        ...borderCss(border, this.props.deviceType),
                        ...padddingCss(padding, this.props.deviceType),
                        ...marginCss(margin, this.props.deviceType),
                        ...gradientBackground(backgroundOptions),
                        boxShadow: `${boxShadow.horizontal || 0}px ${boxShadow.vertical ||
                            0}px ${boxShadow.blur || 0}px ${boxShadow.color} ${boxShadow.position}`,

                    }}
                >
                    <div className="qubley-padding-indicator">
                        <span className="qubely-indicator-top" style={{ height: padding.Desktop.top ? padding.Desktop.top + padding.unit : 0 }} >
                            {(padding.Desktop.top && padding.Desktop.top > 20) ? padding.Desktop.top + ' ' + padding.unit : ''}
                        </span>
                        <span className="qubely-indicator-right" style={{ width: padding.Desktop.right ? padding.Desktop.right + padding.unit : 0 }} >
                            {(padding.Desktop.right && padding.Desktop.right > 40) ? padding.Desktop.right + ' ' + padding.unit : ''}
                        </span>
                        <span className="qubely-indicator-bottom" style={{ height: padding.Desktop.bottom ? padding.Desktop.bottom + padding.unit : 0 }} >
                            {(padding.Desktop.bottom && padding.Desktop.bottom > 20) ? padding.Desktop.bottom + ' ' + padding.unit : ''}
                        </span>
                        <span className="qubely-indicator-left" style={{ width: padding.Desktop.left ? padding.Desktop.left + padding.unit : 0 }} >
                            {(padding.Desktop.left && padding.Desktop.left > 40) ? padding.Desktop.left + ' ' + padding.unit : ''}
                        </span>
                    </div>

                    {(Object.entries(shapeTop).length > 1 && shapeTop.openShape == 1 && shapeTop.style) &&
                        <div className={topShapeClasses} style={{
                            overflow: 'hidden',
                            position: 'absolute',
                            left: 0,
                            width: '100%',
                            lineHeight: '0',
                            direction: 'ltr',
                            zIndex: '1',
                            top: 0,
                        }} dangerouslySetInnerHTML={{ __html: PremiumBlocksSettings.shapes[shapeTop.style] }} />
                    }
                    {videoBackground(backgroundOptions['backgroundType'], backgroundOptions.videoSource, backgroundOptions.videoURL, backgroundOptions.bgExternalVideo)}
                    {(Object.entries(shapeBottom).length > 1 && shapeBottom.openShape == 1 && shapeBottom.style) &&
                        <div className={bottomShapeClasses} style={{
                            overflow: 'hidden',
                            position: 'absolute',
                            left: 0,
                            width: '100%',
                            lineHeight: '0',
                            direction: 'ltr',
                            zIndex: '1',
                            bottom: 0,
                        }} dangerouslySetInnerHTML={{ __html: PremiumBlocksSettings.shapes[shapeBottom.style] }} />
                    }
                    <div className="qubely-row-overlay"></div>
                    <div className={this.getClassName()} style={{
                        maxWidth: "boxed" == innerWidthType && stretchSection
                            ? innerWidth
                                ? innerWidth + "px"
                                : "1140px"
                            : "100%",
                        minHeight: "fit" === height ? "100vh" : minHeight + minHeight['unit'],
                    }}>
                        <div className={`qubely-row qubely-backend-row ${(heightOptions == 'window') ? 'qubely-row-height-window' : ''}`}>
                            <InnerBlocks
                                template={this.getTemplate(columns)}
                                templateLock="all"
                                allowedBlocks={['premium/column']}
                            />
                        </div>
                    </div>
                </div>
            </Fragment >
        )
    }
}

export default compose([
    withDispatch((dispatch) => {
        const { removeBlock } = dispatch('core/block-editor');

        return { removeBlock };
    }),
    withSelect((select, props) => {
        const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
        let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

        return { deviceType: deviceType }
    })
])(Edit);