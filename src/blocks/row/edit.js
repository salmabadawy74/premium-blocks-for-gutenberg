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

        const { device, hideRowSettings } = this.state;
        if (!columns) {
            return (
                <Fragment>
                    <div className="qubely-row-preset" >
                        <Button onClick={() => this.removeRowBlock()} className="qubely-component-remove-button" >
                            <i className="fa fa-times" />
                        </Button>
                        <div className="qubely-row-preset-title">{__('Select Column Layout', 'premium-blocks-for-gutenberg')}</div>
                        <div className="qubely-row-preset-group">
                            {colOption.map((data) => (
                                <Tooltip text={data.label}>
                                    <button onClick={() => {
                                        setAttributes({ columns: data.columns });
                                        defaultLayout = data.layout
                                    }}>
                                        {data.layout.Desktop.map(d => <i style={{ width: d + '%' }} />)}
                                    </button>
                                </Tooltip>
                            ))}
                        </div>
                    </div>
                </Fragment>
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
                                        [
                                            { value: "boxed", label: __("Boxed", 'premium-blocks-for-gutenberg') },
                                            { value: "full", label: __("Full Width", 'premium-blocks-for-gutenberg') }
                                        ]
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
                                title={__('Items', "premium-blocks-for-gutenberg")}
                            >
                                <ResponsiveRadio
                                    choices={[
                                        {
                                            value: 'row',
                                            tooltip: __('Row', ''),
                                            icon: (<svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 1.01587C2 0.454822 1.55228 0 1 0C0.447715 0 0 0.454822 0 1.01587V30.9841C0 31.5452 0.447715 32 1 32C1.55228 32 2 31.5452 2 30.9841V1.01587ZM32 1.01587C32 0.454822 31.5523 0 31 0C30.4477 0 30 0.454822 30 1.01587V30.9841C30 31.5452 30.4477 32 31 32C31.5523 32 32 31.5452 32 30.9841V1.01587ZM23.0355 5.29289L26.6213 8.87864C27.0118 9.26916 27.0118 9.90233 26.6213 10.2929L23.0355 13.8786C22.645 14.2691 22.0118 14.2691 21.6213 13.8786C21.2308 13.4881 21.2308 12.8549 21.6213 12.4644L23.5 10.5857H6C5.44772 10.5857 5 10.138 5 9.58574C5 9.03346 5.44772 8.58574 6 8.58574H23.5L21.6213 6.70711C21.2308 6.31658 21.2308 5.68342 21.6213 5.29289C22.0118 4.90237 22.645 4.90237 23.0355 5.29289ZM26.6213 21.5L23.0355 17.9143C22.645 17.5238 22.0118 17.5238 21.6213 17.9143C21.2308 18.3048 21.2308 18.938 21.6213 19.3285L23.5 21.2071H6C5.44771 21.2071 5 21.6548 5 22.2071C5 22.7594 5.44771 23.2071 6 23.2071H23.5L21.6213 25.0858C21.2308 25.4763 21.2308 26.1095 21.6213 26.5C22.0118 26.8905 22.645 26.8905 23.0355 26.5L26.6213 22.9142C27.0118 22.5237 27.0118 21.8905 26.6213 21.5Z"></path></svg>),
                                        },
                                        {
                                            value: 'column',
                                            tooltip: __('Column', ''),
                                            icon: (<svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M30.9841 2C31.5452 2 32 1.55228 32 1C32 0.447715 31.5452 -1.98809e-08 30.9841 -4.44052e-08L1.01587 -1.35436e-06C0.454821 -1.37888e-06 -1.95703e-08 0.447714 -4.37114e-08 0.999999C-6.78525e-08 1.55228 0.454821 2 1.01587 2L30.9841 2ZM30.9841 32C31.5452 32 32 31.5523 32 31C32 30.4477 31.5452 30 30.9841 30L1.01587 30C0.454819 30 -1.33091e-06 30.4477 -1.35505e-06 31C-1.37919e-06 31.5523 0.454819 32 1.01587 32L30.9841 32ZM26.7071 23.0355L23.1214 26.6213C22.7308 27.0118 22.0977 27.0118 21.7071 26.6213L18.1214 23.0355C17.7309 22.645 17.7309 22.0118 18.1214 21.6213C18.5119 21.2308 19.1451 21.2308 19.5356 21.6213L21.4143 23.5L21.4143 6C21.4143 5.44771 21.862 5 22.4143 5C22.9665 5 23.4143 5.44771 23.4143 6L23.4143 23.5L25.2929 21.6213C25.6834 21.2308 26.3166 21.2308 26.7071 21.6213C27.0976 22.0118 27.0976 22.645 26.7071 23.0355ZM10.5 26.6213L14.0857 23.0355C14.4762 22.645 14.4762 22.0118 14.0857 21.6213C13.6952 21.2308 13.062 21.2308 12.6715 21.6213L10.7929 23.5L10.7929 6C10.7929 5.44771 10.3452 5 9.79287 5C9.24059 5 8.79287 5.44771 8.79287 6L8.79287 23.5L6.91422 21.6213C6.52369 21.2308 5.89053 21.2308 5.5 21.6213C5.10948 22.0118 5.10948 22.645 5.5 23.0355L9.08576 26.6213C9.47629 27.0118 10.1095 27.0118 10.5 26.6213Z"></path></svg>),
                                        },
                                        {
                                            value: 'row-reverse',
                                            tooltip: __('Row Reverse', ''),
                                            icon: (
                                                <svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M30 30.9841C30 31.5452 30.4477 32 31 32C31.5523 32 32 31.5452 32 30.9841L32 1.01587C32 0.454821 31.5523 -3.91405e-08 31 -8.74228e-08C30.4477 -1.35705e-07 30 0.45482 30 1.01587L30 30.9841ZM8.88104e-08 30.9841C3.97618e-08 31.5452 0.447716 32 1 32C1.55228 32 2 31.5452 2 30.9841L2 1.01587C2 0.454818 1.55229 -2.66182e-06 1 -2.71011e-06C0.447719 -2.75839e-06 2.75777e-06 0.454818 2.70872e-06 1.01587L8.88104e-08 30.9841ZM8.96449 26.7071L5.37868 23.1214C4.98816 22.7308 4.98816 22.0977 5.37868 21.7071L8.96449 18.1214C9.35501 17.7309 9.98818 17.7309 10.3787 18.1214C10.7692 18.5119 10.7692 19.1451 10.3787 19.5356L8.5 21.4143L26 21.4143C26.5523 21.4143 27 21.862 27 22.4143C27 22.9665 26.5523 23.4143 26 23.4143L8.5 23.4143L10.3787 25.2929C10.7692 25.6834 10.7692 26.3166 10.3787 26.7071C9.98818 27.0976 9.35501 27.0976 8.96449 26.7071ZM5.37868 10.5L8.96449 14.0857C9.35502 14.4762 9.98818 14.4762 10.3787 14.0857C10.7692 13.6952 10.7692 13.062 10.3787 12.6715L8.5 10.7929L26 10.7929C26.5523 10.7929 27 10.3452 27 9.79287C27 9.24059 26.5523 8.79287 26 8.79287L8.5 8.79287L10.3787 6.91422C10.7692 6.52369 10.7692 5.89053 10.3787 5.5C9.98818 5.10948 9.35502 5.10948 8.96449 5.5L5.37868 9.08576C4.98816 9.47629 4.98816 10.1095 5.37868 10.5Z"></path></svg>
                                            ),
                                        },
                                        {
                                            value: 'column-reverse',
                                            tooltip: __('Column Reverse', ''),
                                            icon: (
                                                <svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.01587 30C0.454822 30 -6.78525e-08 30.4477 -4.37113e-08 31C-1.95702e-08 31.5523 0.454822 32 1.01587 32L30.9841 32C31.5452 32 32 31.5523 32 31C32 30.4477 31.5452 30 30.9841 30L1.01587 30ZM1.01587 -4.44052e-08C0.45482 -1.98809e-08 -1.37919e-06 0.447716 -1.35505e-06 1C-1.33091e-06 1.55228 0.454821 2 1.01587 2L30.9841 2C31.5452 2 32 1.55228 32 0.999999C32 0.447714 31.5452 -1.37888e-06 30.9841 -1.35436e-06L1.01587 -4.44052e-08ZM5.29289 8.96449L8.87863 5.37868C9.26916 4.98815 9.90233 4.98815 10.2928 5.37868L13.8786 8.96449C14.2691 9.35501 14.2691 9.98818 13.8786 10.3787C13.4881 10.7692 12.8549 10.7692 12.4644 10.3787L10.5857 8.5L10.5857 26C10.5857 26.5523 10.138 27 9.58574 27C9.03346 27 8.58574 26.5523 8.58574 26L8.58574 8.5L6.70711 10.3787C6.31658 10.7692 5.68342 10.7692 5.29289 10.3787C4.90237 9.98818 4.90237 9.35501 5.29289 8.96449ZM21.5 5.37868L17.9143 8.96449C17.5238 9.35501 17.5238 9.98818 17.9143 10.3787C18.3048 10.7692 18.938 10.7692 19.3285 10.3787L21.2071 8.5L21.2071 26C21.2071 26.5523 21.6548 27 22.2071 27C22.7594 27 23.2071 26.5523 23.2071 26L23.2071 8.5L25.0858 10.3787C25.4763 10.7692 26.1095 10.7692 26.5 10.3787C26.8905 9.98818 26.8905 9.35501 26.5 8.96449L22.9142 5.37868C22.5237 4.98815 21.8905 4.98815 21.5 5.37868Z"></path></svg>
                                            ),
                                        },
                                    ]}
                                    value={direction}
                                    onChange={(newValue) => setAttributes({ direction: newValue })}
                                    label={__("Direction", 'premium-blocks-for-gutenberg')}
                                    showIcons={true}
                                />
                            </PanelBody>
                        </InspectorTab>
                        <InspectorTab key={"style"}>
                            <PanelBody initialOpen={false} title={__('Background', 'premium-blocks-for-gutenberg')}>
                                <PremiumBackgroundControl
                                    value={backgroundOptions}
                                    onChange={(value) => setAttributes({ backgroundOptions: value })}
                                />
                            </PanelBody>
                            <PanelBody initialOpen={false} title={__('Border')}>
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
                            <PanelBody initialOpen={false} title={__('Shape Divider')}>
                                <InsideTabs>
                                    <InsideTab tabTitle={__('Top Shape')}>
                                        <Shape
                                            shapeType="top"
                                            value={shapeTop}
                                            responsive
                                            onChange={val => setAttributes({ shapeTop: val })}
                                        />
                                    </InsideTab>
                                    <InsideTab tabTitle={__('Bottom Shape')}>
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
                    <div className="qubley-margin-indicator">


                    </div>
                    {(Object.entries(shapeTop).length > 1 && shapeTop.openShape == 1 && shapeTop.style) &&
                        <div className="qubely-shape-divider qubely-top-shape" dangerouslySetInnerHTML={{ __html: qubely_admin.shapes[shapeTop.style] }} />
                    }

                    {(Object.entries(shapeBottom).length > 1 && shapeBottom.openShape == 1 && shapeBottom.style) &&
                        <div className="qubely-shape-divider qubely-bottom-shape" dangerouslySetInnerHTML={{ __html: qubely_admin.shapes[shapeBottom.style] }} />
                    }
                    <div className="qubely-row-overlay"></div>
                    {/* <div className={`${align == 'full' ? ((rowContainerWidth == 'boxed') ? 'qubely-container' : 'qubely-container-fluid') : 'qubely-container-fluid'}`}> */}
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
            </Fragment>
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