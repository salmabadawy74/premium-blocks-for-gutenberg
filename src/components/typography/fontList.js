const { useEffect, useRef, useState } = wp.element;
import classnames from 'classnames'
import WebFontLoader from 'webfontloader'
const { __ } = wp.i18n;

let loadedFonts = []

const loadGoogleFonts = (font_families) => {
    if (font_families.length === 0) return

    loadedFonts = [...loadedFonts, ...font_families.map(({ family }) => family)]
    if (font_families.length > 0) {
        WebFontLoader.load({
            ...(font_families.length > 0
                ?
                {
                    google: { families: font_families },
                }
                : {}),
            classes: false,
            text: 'abcdefghijklmnopqrstuvwxyz',
        })
    }
}
const SingleFont = ({ family, onPickFamily, value }) => {
    return (
        <div
            onClick={() => onPickFamily(family.value)}
            className={classnames(
                'premium-typography-single-font',
                {
                    active: family.value === value,
                }
            )}
            key={family[0]}
        >
            <span className="premium-font-name">
                {family.label}
            </span>
            <span
                style={{ fontFamily: family.value }}
                className="premium-font-preview">
                Simply dummy text
            </span>
        </div>
    )
}

const FontsList = ({
    value,
    onPickFamily,
    linearFontsList
}) => {
    const listRef = useRef(null)
    const [scrollTimer, setScrollTimer] = useState(null)

    useEffect(() => {
        if (value.family && listRef.current) {
            listRef.current.querySelector('.active').scrollIntoView();
        }
    }, [])
    let systemFonts = linearFontsList.filter((family) => family.google === false)
    let googleFonts = linearFontsList.filter((family) => family.google === true)


    const onScroll = () => {
        scrollTimer && clearTimeout(scrollTimer)
        setScrollTimer(
            setTimeout(() => {
                if (!listRef.current) {
                    return
                }
                let overscanStartIndex = Math.ceil(listRef.current.scrollTop / 85);
                const perPage = 25
                const startingPage = Math.ceil(
                    (overscanStartIndex + 1) / perPage
                )
                const pageItems = [...Array(perPage)]
                    .map((_, i) => (startingPage - 1) * perPage + i)
                    .map((index) => googleFonts[index].value)
                    .filter((s) => !!s)
                loadGoogleFonts(pageItems)
            }, 10)
        )
    }

    useEffect(() => {
        onScroll()
    }, [linearFontsList])

    return (
        <ul ref={listRef} className="premium-typography-fonts" onScroll={onScroll} style={{
            width: `100%`
        }}>
            <div>
                <ul>
                    {systemFonts.map((family) => SingleFont({ family, onPickFamily, value }))}
                </ul>
                <div className={`premium-fonts-source`}>{__('Google  Fonts', "premium-blocks-for-gutenberg")}</div>
                <ul>
                    {googleFonts.map((family) => SingleFont({ family, onPickFamily, value }))}
                </ul>
            </div>
        </ul >

    )
}

export default FontsList
