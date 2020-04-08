const { __ } = wp.i18n

const {
    RangeControl,
} = wp.components


function PremiumReset(props) {
    return (
        <RangeControl
            label={__(props.Text)}
            value={props.size.value}
            onChange={(value) => props.setAttributes({ [props.Label]: value })}
            min={props.min || 0}
            max={props.max || 200}
            step={props.steps}
            beforeIcon="editor-textcolor"
        />
    )
}

export default PremiumReset