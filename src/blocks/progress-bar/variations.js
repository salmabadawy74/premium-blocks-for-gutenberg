

const { __ } = wp.i18n;
import { attributes } from "./block.json";
console.log(attributes.progress)
export const Variations =
    [
        {
            name: 'line',
            description: __('Line'),
            isDefault: true,
            pickerTitle: __('Line'),
            scope: ['block'],
        },
        {
            name: 'half-circle',
            description: __('Half Circle'),
            pickerTitle: __('Half Circle'),
            scope: ['block'],
        },
        {
            name: 'circle',
            description: __('Circle'),
            pickerTitle: __('Circle'),
            scope: ['block'],
        },
        {
            name: 'dots',
            description: __('Dots'),
            pickerTitle: __('Dots'),
            scope: ['block'],
        }
    ]

export default Variations