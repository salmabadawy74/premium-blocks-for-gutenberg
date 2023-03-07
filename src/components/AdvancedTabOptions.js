/**
 * WordPress dependencies
 */
import { createSlotFill, withFilters } from '@wordpress/components';

const { Fill, Slot } = createSlotFill('PBGAdvancedTabOptions');

export const PBGAdvancedInspectorControls = props => {
    return <Fill>
        {props.children}
    </Fill>
}

const AdvancedTabOptions = (props) => {
    return <Slot />;
};


export default withFilters('Pbg.AdvancedTab')(AdvancedTabOptions)



