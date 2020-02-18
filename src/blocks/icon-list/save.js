import classnames from 'classnames'

const save = props => {

    const { className } = props;

    const {
        id,
        align,
        icons,
        layoutPos
    } = props.attributes;

    const mainClasses = classnames(className, 'premium-icon-list');

    const content = () => {
        return icons.map((icon, index) => (
            <div className="premium-icon-list__content"
                style={{
                    flexDirection: align == "right" ? 'row-reverse' : "",
                    justifyContent: align == "right" ? align : align
                }}
            >
                <span className="premium-icon-list__content-icon">
                    {icon.image_icon == "icon" ?
                        <i className={`${icon.icon}`}
                            style={{
                                fill: icon.icon_color,
                                color: icon.icon_color,
                                background: icon.icon_bg_color,
                                borderColor: icon.icon_border_color
                            }} />
                        :
                        icon.image == "" ? "" : <img src={`${icon.image.url}`} />
                    }
                </span>
                <div style={{
                    color: icon.label_color
                }}>{icon.label}</div>
            </div>
        ))
    }

    return (
        <div
            id={`premium-icon-list-${id}`}
            style={{
                textAlign: align,
            }}
        >
            <div
                className={`${mainClasses} premium-icon-list-${layoutPos}`}
                style={{
                    textAlign: align,
                    justifyContent: align == "right" ? "flex-end" : align
                }}
            >
                {content()}
            </div>
        </div>
    );
};

export default save;
