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
        backdelay,
        animationSpeed,
        pauseTime,
        hoverPause,
		fancyalign,
		hideDesktop,
		hideTablet,
		hideMobile
	} = attributes

    return (
        <div
            className={classnames(
                className,
                `premium-block-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`
            )}
            style={{
                textAlign: align,
            }}>
            {effect == 'typing' ? <div
                id={`premium-fancy-text-${block_id}`}
                className={`premium-fancy-text`} style={{
                    textAlign: align,
                }}
                data-effect={`${effect}`}
                data-strings={`${repeaterFancyText.map((item, index) => { return item.title })}`}
                data-typespeed={`${typeSpeed}`}
                data-backspeed={`${backSpeed}`}
                data-startdelay={`${startdelay}`}
                data-backdelay={`${backdelay}`}
                data-loop={`${loop}`}
                data-cursorshow={`${cursorShow}`}
                data-cursormark={`${cursorMark}`}
            >
                <span className={`premium-fancy-text-prefix-text`}>{prefix} </span>
                <span className={`premium-fancy-text-title`}> </span>
                <span className={`premium-fancy-text-suffix-text`}> {suffix}</span>
            </div>
                : <div className={`premium-fancy-text premium-fancy-slide`} style={{
                    textAlign: align
                }}
                    data-effect={`${effect}`}
                    data-strings={`${repeaterFancyText.map((item, index) => { return item.title })}`}
                    data-animationspeed={`${animationSpeed}`}
                    data-pausetime={`${pauseTime}`}
                    data-hoverpause={`${hoverPause}`}
                >
                    <span className={`premium-fancy-text-prefix-text`}>{prefix} </span>
                    <div className={`premium-fancy-text-title-slide`} style={{
                        textAlign: fancyalign
                    }}>
                        <ul className={`premium-fancy-text-title-slide-list`}>
                            {repeaterFancyText.map((item, index) => { return <li>{item.title}</li> })}
                        </ul>
                    </div>
                    <span className={`premium-fancy-text-suffix-text`}> {suffix}</span>
                </div>
            }
        </div>
    )
}
