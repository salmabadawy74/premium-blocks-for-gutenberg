import SpacingComponent from "../../components/premium-responsive-spacing";
import PremiumShadow from "../../components/PremiumShadow";
import PremiumBackgroundControl from '../../components/Premium-Background-Control'
import classnames from "classnames";
import PremiumBorder from "../../components/premium-border";
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';
import Animation from '../../components/Animation';
import ResponsiveRangeControl from "../../components/RangeControl/responsive-range-control";
import SpacingControl from '../../components/premium-responsive-spacing'
import { gradientBackground, borderCss, padddingCss, marginCss } from '../../components/HelperFunction'
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
const { __ } = wp.i18n;
const { PanelBody, Toolbar, ResizableBox, IconButton } = wp.components;
const { Component, Fragment } = wp.element
const { withSelect, select, dispatch } = wp.data
const { InnerBlocks, InspectorControls, BlockControls } = wp.blockEditor
const { createBlock } = wp.blocks
class PremiumColumn extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            colWidth: { Desktop: 0, Tablet: 0, Mobile: 0, device: 'Desktop' },
            nextColWidth: { Desktop: 0, Tablet: 0, Mobile: 0, device: 'Desktop' },
            prevColWidth: { Desktop: 0, Tablet: 0, Mobile: 0, device: 'Desktop' },
            rowWidth: 0,
            absWidth: 0,
            maxResizeWidth: 0,
            maxWidth: 999999999,
            isHover: false,
            resizing: false,
            blockIndex: null,
            responsiveDevice: 'Desktop',
            colWidthMax: 85
        };
    }
    componentDidMount() {
        const { setAttributes, clientId, attributes: { uniqueId } } = this.props
        const _client = clientId.substr(0, 6)
        setTimeout(() => {
            if (!uniqueId) {
                setAttributes({ uniqueId: _client });
            } else if (uniqueId && uniqueId != _client) {
                setAttributes({ uniqueId: _client });
            }
        }, 100)
        if (typeof $ === 'undefined') {
            $ = jQuery;
        }
        this.updateColumnWidthAttribute();
    }


    updateColumnWidthAttribute() {
        const { attributes: { colWidth }, clientId } = this.props
        const { getPreviousBlockClientId, getNextBlockClientId } = select('core/block-editor')
        const currentColumn = $(`#block-${clientId}`)
        const rowWidth = currentColumn.parents('.qubely-backend-row').width()
        const nextBlockId = getNextBlockClientId(clientId)
        const prevBlockId = getPreviousBlockClientId(clientId)
        currentColumn.css({ width: colWidth.Desktop + '%' })
        this.setState({ rowWidth, nextBlockId, prevBlockId, maxResizeWidth: rowWidth, colWidth: { ...colWidth, device: 'Desktop' } })
    }
    onResizeStartEvent(event, direction, elt) {
        let { toggleSelection, clientId, setAttributes } = this.props
        const { rowWidth, nextColWidth, prevColWidth } = this.state
        toggleSelection(false)
        const editorSelector = select('core/block-editor')
        const colWidth = editorSelector.getBlockAttributes(clientId).colWidth
        const nextBlockClientId = editorSelector.getNextBlockClientId(clientId)
        const prevBlockClientId = editorSelector.getPreviousBlockClientId(clientId)

        if (nextBlockClientId !== null) {
            nextColWidth.Desktop = parseFloat(editorSelector.getBlockAttributes(nextBlockClientId).colWidth.Desktop)
        }
        if (prevBlockClientId !== null) {
            prevColWidth.Desktop = parseFloat(editorSelector.getBlockAttributes(prevBlockClientId).colWidth.Desktop)
        }
        let maxResizeWidth = 0
        if (direction === 'right' && nextBlockClientId !== null) {
            let resizeNextColWidth = ((nextColWidth.Desktop / 100) * rowWidth) - 100
            let resizeCurrenColWidth = (colWidth.Desktop / 100) * rowWidth
            maxResizeWidth = resizeNextColWidth + resizeCurrenColWidth
        }
        if (direction === 'left' && prevBlockClientId !== null) {
            let resizePrevColWidth = ((prevColWidth.Desktop / 100) * rowWidth) - 100
            let resizeCurrenColWidth = (colWidth.Desktop / 100) * rowWidth
            maxResizeWidth = resizePrevColWidth + resizeCurrenColWidth
        }
        setAttributes({ colWidth })
        const clmRect = document.getElementById(`block-${clientId}`).getBoundingClientRect()
        this.setState({ colWidth: colWidth, prevColWidth, nextColWidth, maxResizeWidth, resizing: true, absWidth: clmRect.width })
    }


    onResize(event, direction, elt, delta) {
        const { colWidth, nextColWidth, rowWidth, absWidth } = this.state
        const { clientId, setAttributes } = this.props
        const currentcolumnId = $(`#block-${clientId}`)
        const NextColumn = currentcolumnId.next();
        let currentBlockWidth = absWidth + (delta.width);
        let calWidth = (currentBlockWidth / rowWidth) * 100;
        let diff = parseFloat(colWidth.Desktop) - calWidth;

        let nextBlockWidth = 0
        if (direction === 'right') {
            if (NextColumn.length > 0) {
                nextBlockWidth = parseFloat(nextColWidth.Desktop) + diff;
                if (nextBlockWidth > 10 && calWidth > 10) {
                    nextBlockWidth = Math.abs(nextBlockWidth)
                    NextColumn.css({ width: nextBlockWidth.toFixed(2) + '%' })
                    const editorSelector = select('core/block-editor')
                    const nextBlockClientId = editorSelector.getNextBlockClientId(clientId)
                    if (nextBlockClientId !== null) {
                        const nextBlock = editorSelector.getBlock(nextBlockClientId)
                        nextBlock.attributes.colWidth.Desktop = nextBlockWidth.toFixed(2)
                    }
                }
            }
        }
        currentcolumnId.find('.components-resizable-box__container').css({ width: 'auto' })
        if (nextBlockWidth > 10 && calWidth > 10) {
            currentcolumnId.css({ width: calWidth.toFixed(2) + '%' })
            setAttributes({ colWidth: { ...colWidth, Desktop: calWidth.toFixed(2) } })
        }
    }

    onResizeStop(event, direction, elt, delta) {
        const { toggleSelection } = this.props
        toggleSelection(true);
        this.setState({ resizing: false })
    }


    updateColumns(updateType) {
        const { clientId } = this.props
        const { getBlockRootClientId, getBlock, getBlocks, getBlockIndex } = select('core/block-editor')
        const { replaceInnerBlocks, updateBlockAttributes } = dispatch('core/block-editor')
        const rootClientId = getBlockRootClientId(clientId)
        const rootBlock = getBlock(rootClientId)
        const selectedBlockIndex = getBlockIndex(clientId, rootClientId)
        const columns = updateType === 'add' ? rootBlock.attributes.columns + 1 : rootBlock.attributes.columns - 1
        const columnFixedWidth = parseFloat((100 / columns).toFixed(3))
        const equalWidth = { ...this.state.colWidth, ...{ Desktop: columnFixedWidth, Tablet: 100, Mobile: 100 } }
        let innerBlocks = [...getBlocks(rootClientId)]
        if (updateType === 'delete') {
            innerBlocks.splice(selectedBlockIndex, 1)
        } else {
            innerBlocks.splice(selectedBlockIndex + 1, 0, createBlock('premium/column', { colWidth: equalWidth }))
        }
        replaceInnerBlocks(rootClientId, innerBlocks, false);
        updateBlockAttributes(rootClientId, Object.assign(rootBlock.attributes, { columns: columns }))
        getBlocks(rootClientId).forEach(block => {
            updateBlockAttributes(block.clientId, Object.assign(block.attributes, { colWidth: { ...equalWidth } }))
            $(`#block-${block.clientId}`).css({ width: equalWidth.Desktop + '%' }) //update next block width
        })
    }



    checkColumnStatus() {
        const { clientId } = this.props
        const { getBlockRootClientId, getPreviousBlockClientId, getNextBlockClientId, getBlockIndex, getBlock } = select('core/block-editor')
        const rootClientId = getBlockRootClientId(clientId)
        const nextBlockId = getNextBlockClientId(clientId)
        const prevBlockId = getPreviousBlockClientId(clientId)
        const blockIndex = getBlockIndex(clientId, rootClientId)
        return { nextBlockId, prevBlockId, blockIndex }
    }


    _isActiveRow() {
        const rootClientId = select('core/block-editor').getBlockRootClientId(this.props.clientId)
        const selected = select('core/block-editor').getSelectedBlock()
        if (selected && rootClientId && selected.clientId) {
            return rootClientId == selected.clientId ? true : false
        } else {
            return false
        }
    }


    updateColumnWidth(colWidth) {
        const { clientId, setAttributes, attributes } = this.props
        this.setState({ colWidthMax: colWidth.device === 'Desktop' ? 85 : 100, responsiveDevice: colWidth.device })
        if (colWidth.device && colWidth.device !== 'Desktop') {
            setAttributes({ colWidth: { ...colWidth } })
            return;
        }
        if (colWidth.Desktop < 10) {
            return;
        }
        const currentcolumnId = $(`#block-${clientId}`)
        const NextColumn = currentcolumnId.next();
        const PrevColumn = currentcolumnId.prev();
        let calWidth = parseFloat(colWidth.Desktop)
        let different = calWidth - parseFloat(attributes.colWidth.Desktop)
        const { getPreviousBlockClientId, getNextBlockClientId, getBlock } = select('core/block-editor')
        const { updateBlockAttributes } = dispatch('core/block-editor')
        let nextColumnNewWidth = 0
        if (NextColumn.length > 0) {
            const nextBlockClientId = getNextBlockClientId(clientId)
            if (nextBlockClientId !== null) {
                const nextBlock = getBlock(nextBlockClientId)
                nextColumnNewWidth = { ...nextBlock.attributes.colWidth }
                nextColumnNewWidth.Desktop = parseFloat(nextColumnNewWidth.Desktop) - different
                if (nextColumnNewWidth.Desktop > 10 && calWidth > 10) {
                    NextColumn.css({ width: nextColumnNewWidth.Desktop + '%' })
                    updateBlockAttributes(nextBlockClientId, Object.assign(nextBlock.attributes, { colWidth: { ...nextColumnNewWidth } }))
                }
            }


        } else if (PrevColumn.length > 0) {
            const prevBlockClientId = getPreviousBlockClientId(clientId)
            if (prevBlockClientId !== null) {
                const prevBlock = getBlock(prevBlockClientId)
                let prevColumnNewWidth = { ...prevBlock.attributes.colWidth }
                prevColumnNewWidth.Desktop = parseFloat(prevColumnNewWidth.Desktop) - different //calWidth > 0 ? calWidth-parseFloat(prevColWidth.Desktop) : parseFloat(prevColWidth.Desktop)-calWidth
                PrevColumn.css({ width: prevColumnNewWidth.Desktop + '%' })
                updateBlockAttributes(prevBlockClientId, Object.assign(prevBlock.attributes, { colWidth: { ...prevColumnNewWidth } }))
            }
        }
        if (nextColumnNewWidth.Desktop > 10 && calWidth > 10) {
            const newWidth = Math.abs(calWidth)
            currentcolumnId.css({ width: newWidth + '%' })
            setAttributes({ colWidth: { ...colWidth } })
        }

    }

    // componentWillReceiveProps(nextProps) {
    //     document.getElementById("block-" + this.props.clientId).style.alignSelf = nextProps.attributes.position
    // }
    render() {
        const {
            attributes: {
                uniqueId,
                className,
                colWidth,
                padding,
                margin,
                colBg,
                colBorder,
                colRadius,
                colShadow,
                corner,
                borderRadius,
                ColumnAnimation,
                enablePosition,
                selectPosition,
                positionXaxis,
                positionYaxis,
                globalZindex,
                hideTablet,
                hideMobile,
                globalCss,
                columnBackground,
                columnBorder,
                columnShadow,
                columnMargin,
                columnPadding
            },
            setAttributes,
            isSelected,
            clientId
        } = this.props

        const { rowWidth, resizing, responsiveDevice } = this.state
        const { getBlockRootClientId, getBlockAttributes } = select('core/block-editor')
        const rootClientId = getBlockRootClientId(clientId)
        const rootBlockAttributes = getBlockAttributes(rootClientId)
        let columns, nextBlockId, blockIndex;
        if (rootBlockAttributes) {
            let columnStatus = this.checkColumnStatus()
            columns = rootBlockAttributes.columns
            nextBlockId = columnStatus.nextBlockId
            blockIndex = columnStatus.blockIndex
        }
        let resigingClass = 'qubely-column-resizer'
        if (nextBlockId !== null && isSelected) {
            resigingClass += ' is-selected-column'
        }
        if (resizing) {
            resigingClass += ' is-resizing'
        }
        const { getBlockOrder } = select('core/block-editor');

        return (
            <Fragment>
                <InspectorControls>
                    <InspectorTabs tabs={['layout', 'style', 'advance']}>
                        <InspectorTab key={'layout'}>
                            <PanelBody initialOpen={true} title={__('Dimension')}>
                                <ResponsiveRangeControl
                                    label={__("Column Gutter", 'premium-blocks-for-gutenberg')}
                                    value={colWidth}
                                    min="0"
                                    max="100"
                                    onChange={newValue => setAttributes({ colWidth: newValue })}
                                    defaultValue={0}
                                    showUnit={true}
                                />
                            </PanelBody>

                        </InspectorTab>
                        <InspectorTab key={'style'}>
                            <PanelBody
                                title={__("Background", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumBackgroundControl
                                    value={columnBackground}
                                    onChange={(value) => setAttributes({ columnBackground: value })}
                                />
                            </PanelBody>
                            <PanelBody
                                title={__("Border", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumBorder
                                    value={columnBorder}
                                    onChange={(value) => setAttributes({ columnBorder: value })}
                                />
                                <PremiumShadow
                                    boxShadow={true}
                                    value={columnShadow}
                                    onChange={(value) => setAttributes({ columnShadow: value })}
                                />
                            </PanelBody>
                        </InspectorTab>
                        <InspectorTab key={'advance'}>
                            <PanelBody initialOpen={true} title={__('Spacing')}>
                                <SpacingControl
                                    label={__('Margin', 'premium-blocks-for-gutenberg')}
                                    value={columnMargin}
                                    onChange={(value) => setAttributes({ columnMargin: value })}
                                    showUnits={true}
                                    responsive={true}
                                />
                                <SpacingControl
                                    label={__('Padding', 'premium-blocks-for-gutenberg')}
                                    value={columnPadding}
                                    onChange={(value) => setAttributes({ columnPadding: value })}
                                    showUnits={true}
                                    responsive={true}
                                />
                            </PanelBody>
                            <PanelBody title={__('Animation')} initialOpen={false}>
                                <Animation
                                    uniqueId={this.props.clientId}
                                    label={__('Animation', 'premium-blocks-for-gutenberg')}
                                    value={ColumnAnimation}
                                    onChange={(value) => setAttributes({ ColumnAnimation: value })} />
                            </PanelBody>
                        </InspectorTab>
                    </InspectorTabs>
                </InspectorControls>

                <BlockControls>
                    <Toolbar>
                        {columns < 6 &&
                            <IconButton
                                className="components-icon-button components-toolbar__control"
                                label={__('Add Column')}
                                onClick={() => this.updateColumns('add')}
                                icon="plus"
                            />
                        }
                        {columns > 1 &&
                            <IconButton
                                className="components-icon-button components-toolbar__control"
                                label={__('Delete Column')}
                                onClick={() => this.updateColumns('delete')}
                                icon="trash"
                            />
                        }
                    </Toolbar>
                </BlockControls>


                {
                    rowWidth !== 0 &&
                    <ResizableBox
                        className={resigingClass}
                        style={{}}
                        size={{}}
                        maxWidth={this.state.maxWidth}
                        enable={{
                            top: false,
                            right: true,
                            bottom: false,
                            left: false,
                            topRight: false,
                            bottomRight: false,
                            bottomLeft: false,
                            topLeft: false,
                        }}
                        minHeight="10"
                        onResize={(event, direction, elt, delta) => this.onResize(event, direction, elt, delta)}
                        onResizeStop={(event, direction, elt, delta) => this.onResizeStop(event, direction, elt, delta)}
                        onResizeStart={(event, direction, elt) => this.onResizeStartEvent(event, direction, elt)} >
                        <div className={`qubely-column qubely-column-admin premium-blocks-${this.props.clientId} qubely-block-${uniqueId}${className ? ` ${className}` : ''}`} data-column-width={this.props.attributes.colWidth.Desktop}>
                            <div className={`qubely-column-inner`} style={{
                                ...gradientBackground(columnBackground),
                                ...borderCss(columnBorder, this.props.deviceType),
                                ...padddingCss(columnPadding, this.props.deviceType),
                                ...marginCss(columnMargin, this.props.deviceType)
                            }}>
                                <InnerBlocks
                                    templateLock={false}
                                    renderAppender={(
                                        getBlockOrder(clientId).length > 0 ?
                                            undefined :
                                            () => <InnerBlocks.ButtonBlockAppender />
                                    )}
                                />
                            </div>
                        </div>
                    </ResizableBox>
                }
            </Fragment >
        )
    }
}
export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return { deviceType: deviceType }
})(PremiumColumn)