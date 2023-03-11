import AdvancedTabOptions from "./AdvancedTabOptions";
import { store as blockEditorStore } from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
const { Fragment } = wp.element;

const InspectorTab = props => {
    const { children, isActive, tabKey } = props;
    const { block, clientId } = useSelect((select) => {
        const block = select(blockEditorStore).getSelectedBlock();
        return {
            block,
            clientId: block.clientId
        }
    });
    const { updateBlockAttributes } = useDispatch(blockEditorStore);
    return (
        <div
            style={{
                display: isActive ? 'block' : 'none'
            }}
            className='premium-inspector-tab'
        >
            {Array.isArray(children) ? children.map(item => item) : children}
            {(tabKey === 'advance' && block) && (
                <AdvancedTabOptions {...block} setAttributes={(newAttributes) => updateBlockAttributes(clientId, newAttributes)} />
            )}
        </div>
    )
}

export default InspectorTab