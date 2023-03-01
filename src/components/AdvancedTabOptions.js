// /**
//  * WordPress dependencies
//  */
// import { withFilters } from '@wordpress/components';
// import { forwardRef } from 'react';

// const AdvancedTabOptions = forwardRef((props, ref) => {
//     const { extraOptions = [], children, blockProps } = props;
//     const Extra = withFilters('pbg.AdvancedTabOptionsExtra')(props => props.children);

//     const extraChildren = extraOptions.map((option, index) => {
//         return (
//             <Extra key={`extra-${index}`} blockProps={blockProps}>
//                 {option}
//             </Extra>
//         );
//     });

//     return (
//         <>
//             {children}
//             {extraChildren}
//         </>
//     );
// });

// export default AdvancedTabOptions;

/**
 * WordPress dependencies
 */
import { createSlotFill } from '@wordpress/components';

const { Fill, Slot } = createSlotFill('MyControls');

export const TestFill = props => {
    return <Fill>
        {props.children}
    </Fill>
}

const MyComponent = () => {
    return <Slot />;
};


export default MyComponent



