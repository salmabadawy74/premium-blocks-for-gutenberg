const { __ } = wp.i18n

const {
    ToggleControl,
} = wp.components


function PremiumToggleReset(props) {
    return (
        <ToggleControl
            label={__(props.Text)}
            value={props.size.value}
            checked={props.size.value}
            onChange={(value) => props.setAttributes({ [props.Label]: value })}
            min={props.min || 0}
            max={props.max || 200}
            step={props.steps}
            beforeIcon="editor-textcolor"
        />
    )
}

export default PremiumToggleReset