/* eslint-disable react/react-in-jsx-scope */
const { Component } = wp.element
const { InnerBlocks } = wp.blockEditor
import { animationAttr } from '../../components/HelperFunction'
import classnames from "classnames"


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
            <div

            >
                <InnerBlocks.Content />

            </div>
        )
    }
}
export default Save