const { __ } = wp.i18n

const {
    SelectControl,
} = wp.components

// Extend component
const { Component, Fragment } = wp.element

/**
 * Internal dependencies
 */
import map from "lodash/map"


function PremiumSelectReset(props) {
    const STYLE = [
        {
          value: "normal",
          label: "Normal"
        },
        {
          value: "italic",
          label: "Italic"
        }
      ];

    return (
        <SelectControl
            label={__(props.Text)}
            value={props.size.value}
            options={STYLE}
            onChange={(value) => props.setAttributes({ [props.Label]: value })}
            min={props.min || 0}
            max={props.max || 200}
            step={props.steps}
            beforeIcon="editor-textcolor"
        />
    )
}

export default PremiumSelectReset