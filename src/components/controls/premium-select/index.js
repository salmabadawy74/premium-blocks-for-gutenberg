const { BaseControl } = wp.components;
import { withInstanceId } from "@wordpress/compose";

function PremiumSelectControl({
  help,
  label,
  instanceId,
  onChange,
  options = [],
  className
}) {
  const id = `inspector-select-control-${instanceId}`;
  const onChangeValue = event => {
    onChange(event.target.value);
  };

  return (
    <BaseControl label={label} id={id} help={help} className={className}>
      <select
        id={id}
        className="premium-components-select-control__input"
        onChange={onChangeValue}
        aria-describedby={!!help ? `${id}__help` : undefined}
      >
        {options.map((option, index) => (
          <option
            key={`${option.label}-${option.value}-${index}`}
            value={option.value}
          >
            {option.label.props.children}
          </option>
        ))}
      </select>
    </BaseControl>
  );
}

export default withInstanceId(PremiumSelectControl);
