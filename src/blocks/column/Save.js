const { Component } = wp.element
const { InnerBlocks } = wp.blockEditor
import { animationAttr } from '../../components/HelperFunction'

export default function Save(props) {
    const { attributes: { uniqueId, ColumnAnimation } } = props

    return (
        <div className={`qubely-column qubely-column-front qubely-block-${uniqueId}`} {...animationAttr(ColumnAnimation)}>
            <div className={`qubely-column-inner`}>
                <InnerBlocks.Content />
            </div>
        </div>
    )

}

