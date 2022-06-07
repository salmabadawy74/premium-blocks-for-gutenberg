/* eslint-disable react/react-in-jsx-scope */
const { Component } = wp.element
const { InnerBlocks } = wp.blockEditor
import { animationAttr } from '../../components/HelperFunction'


class Save extends Component {

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
        const { attributes: { uniqueId,
            className,
            rowId,
            columns,
            padding,
            margin,
            shapeTop,
            shapeBottom,
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
            boxShadow } } = this.props

        return (
            <div className={`qubely-section qubely-block-${uniqueId} `} {...rowId ? { id: rowId } : ''} {...animationAttr(animation)}>
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
                    <div className="premium-shape-divider premium-top-shape" dangerouslySetInnerHTML={{ __html: PremiumBlocksSettings.shapes[shapeTop.style] }} />
                }
                {(Object.entries(shapeBottom).length > 1 && shapeBottom.openShape == 1 && shapeBottom.style) &&
                    <div className="premium-shape-divider premium-bottom-shape" dangerouslySetInnerHTML={{ __html: PremiumBlocksSettings.shapes[shapeBottom.style] }} />
                }
                <div className="qubely-row-overlay"></div>
                {/* <div className={`${align == 'full' ? ((rowContainerWidth == 'boxed') ? 'qubely-container' : 'qubely-container-fluid') : 'qubely-container-fluid'}`}> */}
                <div className={this.getClassName()}>
                    <div className={`qubely - row qubely - backend - row ${(heightOptions == 'window') ? 'qubely-row-height-window' : ''} `}>
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>
        )
    }
}
export default Save