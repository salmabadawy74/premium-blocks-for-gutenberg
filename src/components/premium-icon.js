const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { SelectControl, TextControl } = wp.components;
export default function PremiumIcon(props) {
  const {
    iconType,
    selectedIcon,
    onChangeType = () => {},
    onChangeIcon = () => {}
  } = props;
  let iconClass =
    "fa" === iconType ? `fa fa-${selectedIcon}` : `dashicons ${selectedIcon}`;
  const TYPE = [
    {
      value: "fa",
      label: "Font Awesome Icon"
    },
    {
      value: "dash",
      label: "Dashicon"
    }
  ];
  return (
    <Fragment>
      <SelectControl
        label={__("Icon Type")}
        value={iconType}
        options={TYPE}
        onChange={onChangeType}
      />
      {selectedIcon && (
        <div className="premium-icon__sidebar_icon">
          <i className={iconClass} />
        </div>
      )}
      <TextControl
        label={__("Icon Class")}
        value={selectedIcon}
        help={[
          __("Get icon class from"),
          <a
            href={
              "fa" === iconType
                ? "https://fontawesome.com/v4.7.0/icons/"
                : "https://developer.wordpress.org/resource/dashicons/"
            }
            target="_blank"
          >
            &nbsp;
            {__("here")}
          </a>,
          __(" , for example: "),
          "fa" === iconType ? "address-book" : "dashicons-admin-site"
        ]}
        onChange={onChangeIcon}
      />
    </Fragment>
  );
}
