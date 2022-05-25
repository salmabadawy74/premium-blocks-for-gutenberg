const { __ } = wp.i18n
const { compose } = wp.compose;
const { select, withDispatch } = wp.data
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
            device: 'Desktop',
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
                evenColumnHeight,
                align,
                rowGutter,
                rowBlend,
                rowOverlay,
                rowOpacity,
                rowContainer,
                rowContainerWidth,
                position,
                padding,
                margin,
                marginTop,
                marginBottom,
                rowBg,
                shapeTop,
                shapeBottom,
                rowReverse,
                rowShadow,
                heightOptions,
                rowHeight,
                border,
                borderRadius,
                enableRowOverlay,
                //animation
                animation,
                //global
                enablePosition,
                selectPosition,
                positionXaxis,
                positionYaxis,
                globalZindex,
                hideTablet,
                hideMobile,
                globalCss,
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
                        <div className="qubely-row-preset-title">{__('Select Column Layout')}</div>
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
                            <PanelBody initialOpen={true} title={__('General', "premium-blocks-for-gutenberg")}>
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
                                <ToggleControl
                                    label={__("Stretch Section", 'premium-blocks-for-gutenberg')}
                                    checked={stretchSection}
                                    onChange={check => setAttributes({ stretchSection: check })}
                                    help={__("This option stretches the section to the full width of the page using JS. You will need to reload the page after you enable this option for the first time.", 'premium-blocks-for-gutenberg')}
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



                <div className={`qubely-section qubely-block-${uniqueId} ${className ? ` ${className}` : ''}`} {...rowId ? { id: rowId } : ''}>
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
                        <span className="qubely-indicator-top" style={{ height: marginTop.Desktop ? marginTop.Desktop + marginTop.unit : 0 }} >
                            {marginTop.Desktop && marginTop.Desktop > 20 ? marginTop.Desktop + ' ' + marginTop.unit : ''}
                        </span>
                        <span className="qubely-indicator-bottom" style={{ height: marginBottom.Desktop ? marginBottom.Desktop + marginBottom.unit : 0 }} >
                            {marginBottom.Desktop && marginBottom.Desktop > 20 ? marginBottom.Desktop + ' ' + marginBottom.unit : ''}
                        </span>

                    </div>
                    {(Object.entries(shapeTop).length > 1 && shapeTop.openShape == 1 && shapeTop.style) &&
                        <div className="qubely-shape-divider qubely-top-shape" dangerouslySetInnerHTML={{ __html: qubely_admin.shapes[shapeTop.style] }} />
                    }
                    {(Object.entries(rowBg).length > 0 && rowBg.openBg == 1 && rowBg.bgType == 'video') &&
                        videoBackground(rowBg, 'row')
                    }
                    {(Object.entries(shapeBottom).length > 1 && shapeBottom.openShape == 1 && shapeBottom.style) &&
                        <div className="qubely-shape-divider qubely-bottom-shape" dangerouslySetInnerHTML={{ __html: qubely_admin.shapes[shapeBottom.style] }} />
                    }
                    <div className="qubely-row-overlay"></div>
                    {/* <div className={`${align == 'full' ? ((rowContainerWidth == 'boxed') ? 'qubely-container' : 'qubely-container-fluid') : 'qubely-container-fluid'}`}> */}
                    <div className={this.getClassName()}>
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
])(Edit);