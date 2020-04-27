import classnames from "classnames"

export default function save(props) {

    const { attributes, className } = props

    const {
        block_id,
        align,
        prefix,
        suffix,
        repeaterFancyText,
        effect,
        loop,
        cursorShow,
        cursorMark,
        typeSpeed,
        backSpeed,
        startdelay,
        backdelay
    } = attributes

    return (
        <div className={classnames(
            className,
            `premium-block-${block_id}`
        )}
            style={{
                textAlign: align,
            }}>
            <div className={`premium-fancy-text ${effect == 'slide' ? 'premium-fancy-slide' : ""}`} 
                style={{
                    textAlign: align,
                }}
                data-effect={`${effect}`}
                data-strings={`${repeaterFancyText}`}
                data-typeSpeed={`${typeSpeed}`}
                data-backSpeed={`${backSpeed}`}
                data-startDelay={`${startdelay}`}
                data-backDelay={`${backdelay}`}
                data-loop={`${loop}`}
                data-cursorShow={`${cursorShow}`}
                data-cursorMark={`${cursorMark}`}
            >
                <span className={`premium-fancy-text-prefix-text`}>{prefix} </span>
                {effect == 'slide' ?
                    <div className={`premium-fancy-text-title-slide`}>
                        <ul className={`premium-fancy-text-title-slide-list`}>
                            {repeaterFancyText.map((item, index) => { return <li>{item.title}</li> })}
                        </ul>
                    </div>
                    : <span className={`premium-fancy-text-title`}> </span>}
                <span className={`premium-fancy-text-suffix-text`}> {suffix}</span>
            </div>
        </div>
    )
}