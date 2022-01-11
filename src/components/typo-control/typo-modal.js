const { useMemo, Fragment, useState, useEffect } = wp.element;
// const { ColorPicker } = wp.components;
import classnames from "classnames";
import { Transition } from 'react-spring/web'
import bezierEasing from 'bezier-easing'
const { __ } = wp.i18n;

function fuzzysearch(needle, haystack) {
    var hlen = haystack.length
    var nlen = needle.length
    if (nlen > hlen) {
        return false
    }
    if (nlen === hlen) {
        return needle === haystack
    }
    outer: for (var i = 0, j = 0; i < nlen; i++) {
        var nch = needle.charCodeAt(i)
        while (j < hlen) {
            if (haystack.charCodeAt(j++) === nch) {
                continue outer
            }
        }
        return false
    }

    return true
}

const TypoModal = ({
    option,
    value,
    initialView,
    currentView,
    previousView,
    setCurrentView,
    setInititialView,
    onChange,
    defaults,
    wrapperProps = {},
}) => {
    const [typographyList, setTypographyList] = useState(getDefaultFonts())
    const [searchTerm, setSearchTerm] = useState('')
    const direction = useMemo(() => {
        if (previousView === '_') {
            return 'static'
        }

        if (
            (currentView === 'search' && previousView === 'fonts') ||
            (previousView === 'search' && currentView === 'fonts')
        ) {
            return 'static'
        }

        if (previousView === 'options') {
            return 'right'
        }

        if (previousView === 'fonts' && currentView === 'variations') {
            return 'right'
        }

        return 'left'
    }, [currentView, previousView])

    const inputEl = useRef(null)
    const sizeEl = useRef(null)

    const linearFontsList = Object.keys(typographyList).reduce(
        (currentList, currentSource) => [
            ...currentList,
            ...(
                typographyList[currentSource] || []
            ).filter(({ family }) =>
                fuzzysearch(searchTerm.toLowerCase(), family.toLowerCase())
            ),
        ],
        []
    )


    useEffect(() => {
        if (initialView && initialView !== 'done') {
            setSearchTerm('')

        }

        if (initialView === 'font_size') {
            setTimeout(() => sizeEl.current && sizeEl.current.focus(), 100)
        }
    }, [initialView])



    useEffect(() => {
        if (currentView === 'search') {
            inputEl.current.focus()
        }
    }, [currentView])


    const pickFontFamily = (family) => {

        onChange({
            ...value,
            family: family.family,
            variation: decideVariation(family, value),
        })
    }

    return (
        <Fragment>
            <div
                tabIndex="0"
                className={classnames(
                    `kmt-option-modal kmt-typography-modal`
                )}
                {...wrapperProps}
            >
                <div className="kmt-typography-container">

                    <Transition
                        items={currentView}
                        immediate={direction === 'static'}
                        config={(item, type) => ({
                            duration: 210,
                            easing: bezierEasing(0.455, 0.03, 0.515, 0.955),
                        })}
                        from={{
                            transform:
                                direction === 'left'
                                    ? 'translateX(100%)'
                                    : 'translateX(-100%)',

                            position: 'absolute',
                        }}
                        enter={{
                            transform: 'translateX(0%)',
                            position: 'absolute',
                        }}
                        leave={{
                            position: 'absolute',
                            transform:
                                direction === 'left'
                                    ? 'translateX(-100%)'
                                    : 'translateX(100%)',
                        }}>
                        {(props, currentView, transition, key) => {
                            if (currentView === 'options') {
                                return (
                                    // <FontOptions
                                    //     sizeRef={sizeEl}
                                    //     value={value}
                                    //     option={option}
                                    //     onChange={onChange}
                                    //     props={props}
                                    //     currentView={currentView}
                                    //     defaults={defaults}
                                    // />
                                    <h1>hh</h1>
                                )
                            }

                            if (
                                currentView === 'fonts' ||
                                currentView === 'search'
                            ) {
                                return (
                                    <div style={{ ...props, top: '0px', right: '0px', left: `0px` }} key={currentView}>

                                        {(currentView === "fonts" || currentView === "search") && <ul
                                            className={classnames('kmt-typography-top', {
                                                'kmt-switch-panel': currentView !== 'options',
                                                'kmt-static': previousView === '_',
                                            })}>
                                            <li
                                                className={classnames('kmt-font', {
                                                    active:
                                                        currentView === 'search'
                                                })}
                                                onClick={() => {
                                                    setCurrentView(
                                                        currentView === 'fonts' ? 'search' : 'fonts'
                                                    )
                                                    setSearchTerm('')
                                                }}>
                                                {currentView !== 'search' && (
                                                    <span>{familyToDisplay(value.family)}</span>
                                                )}
                                                {currentView === 'search' && (
                                                    <input
                                                        ref={inputEl}
                                                        value={searchTerm}
                                                        autoFocus
                                                        onKeyUp={(e) => {
                                                            if (e.keyCode == 13) {
                                                                if (linearFontsList.length > 0) {
                                                                    pickFontFamily(linearFontsList[0])
                                                                    setSearchTerm('')
                                                                }
                                                            }
                                                        }}
                                                        onClick={(e) => e.stopPropagation()}
                                                        onChange={({ target: { value } }) =>
                                                            setSearchTerm(value)
                                                        }
                                                    />
                                                )}

                                                <svg width="8" height="8" viewBox="0 0 15 15">
                                                    {currentView === 'search' && (
                                                        <path d="M8.9,7.5l4.6-4.6c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L7.5,6.1L2.9,1.5c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l4.6,4.6l-4.6,4.6c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0l4.6-4.6l4.6,4.6c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4L8.9,7.5z" />
                                                    )}
                                                    {currentView !== 'search' && (
                                                        <path d="M14.6,14.6c-0.6,0.6-1.4,0.6-2,0l-2.5-2.5c-1,0.7-2.2,1-3.5,1C2.9,13.1,0,10.2,0,6.6S2.9,0,6.6,0c3.6,0,6.6,2.9,6.6,6.6c0,1.3-0.4,2.5-1,3.5l2.5,2.5C15.1,13.1,15.1,14,14.6,14.6z M6.6,1.9C4,1.9,1.9,4,1.9,6.6s2.1,4.7,4.7,4.7c2.6,0,4.7-2.1,4.7-4.7C11.3,4,9.2,1.9,6.6,1.9z" />
                                                    )}
                                                </svg>
                                            </li>
                                        </ul>
                                        }
                                        {/* <FontsList
                                            typographyList={typographyList}
                                            searchTerm={searchTerm}
                                            linearFontsList={linearFontsList}
                                            currentView={`${currentView}:${previousView}`}
                                            onPickFamily={(family) => {
                                                pickFontFamily(family)
                                                setSearchTerm('')
                                            }}
                                            value={value}
                                        /> */}
                                        <span>font</span>

                                    </div>
                                )
                            }

                            if (currentView === 'variations') {
                                return (
                                    // <VariationsList
                                    //     currentView={currentView}
                                    //     props={props}
                                    //     typographyList={linearFontsList}
                                    //     onChange={(value) => {
                                    //         onChange(value)
                                    //     }}
                                    //     value={value}
                                    // />
                                    <span>variation</span>
                                )
                            }
                        }}
                    </Transition>
                </div>
            </div>
        </Fragment >
    );
};

export default TypoModal;