const { useRef, useState, useCallback, createPortal, useMemo } = wp.element;
import OutsideComponent from '../Common/OutsideComponent'
import PopoverComponent from '../Common/popover-component'
import { Transition, animated } from '@react-spring/web'
import bezierEasing from 'bezier-easing'
import TypographyModal from "./typo-modal";


const TypoComponent = ({ fontFamily, size, sizeUnit, weight }) => {
    const [{ isOpen, isTransitioning }, setModalState] = useState({
        isOpen: false,
        isTransitioning: false,
    });
    const [currentViewCache, setCurrentViewCache] = useState("_:_");

    const typographyWrapper = useRef()

    const { styles, popoverProps } = PopoverComponent({
        ref: typographyWrapper,
        defaultHeight: 430,
        shouldCalculate: isTransitioning || isOpen,
    });

    let [currentView, previousView] = useMemo(
        () => currentViewCache.split(":"),
        [currentViewCache]
    );

    const setCurrentView = useCallback(
        (newView) => setCurrentViewCache(`${newView}:${currentView}`),
        [currentView]
    );

    const setIsOpen = (isOpen) => {
        setModalState((state) => ({
            ...state,
            isOpen,
            isTransitioning: true,
        }));
    };

    const stopTransitioning = () =>
        setModalState((state) => ({
            ...state,
            isTransitioning: false,
        }));



    return (
        <div>
            <OutsideComponent
                useCapture={false}
                // display="inline-block"
                disabled={!isOpen}
                wrapperProps={{
                    ref: typographyWrapper,
                }}
                className="kmt-typohraphy-value"
                additionalRefs={[popoverProps.ref]}
                onOutsideClick={() => {
                    setState(({ isOpen }) => ({
                        isOpen: false,
                        isTransitioning: isOpen,
                    }))
                }}>
                <div className="kmt-typography-title-container">
                    <span
                        className="kmt-font"
                        onClick={(e) => {
                            e.stopPropagation();

                            if (isOpen) {
                                setCurrentView("fonts");
                                return;
                            }
                            setCurrentViewCache("fonts:_");
                            setIsOpen("fonts");
                        }}
                    >
                        <span>
                            {fontFamily}
                        </span>
                    </span>
                    <span
                        className="kmt-size"
                        onClick={(e) => {
                            e.stopPropagation();

                            if (isOpen) {
                                setCurrentView("options");
                                return;
                            }
                            setCurrentViewCache("options:_");
                            setIsOpen("font_size");
                        }}
                    >
                        {size}{sizeUnit}
                    </span>
                    <span
                        className="kmt-weight"
                        onClick={(e) => {
                            e.stopPropagation();

                            if (isOpen) {
                                setCurrentView("variations");
                                return;
                            }
                            setCurrentViewCache("variations:_");
                            setIsOpen("variations");
                        }}
                    >{weight}</span>
                </div>

            </OutsideComponent>

            {(isTransitioning || isOpen) &&
                createPortal(
                    <Transition
                        items={isOpen}
                        onRest={(isOpen) => {
                            stopTransitioning();
                        }}
                        config={{
                            duration: 100,
                            easing: bezierEasing(0.25, 0.1, 0.25, 1.0),
                        }}
                        from={
                            isOpen
                                ? {
                                    transform: "scale3d(0.95, 0.95, 1)",
                                    opacity: 0,
                                }
                                : { opacity: 1 }
                        }
                        enter={
                            isOpen
                                ? {
                                    transform: "scale3d(1, 1, 1)",
                                    opacity: 1,
                                }
                                : {
                                    opacity: 1,
                                }
                        }
                        leave={
                            !isOpen
                                ? {
                                    transform: "scale3d(0.95, 0.95, 1)",
                                    opacity: 0,
                                }
                                : {
                                    opacity: 1,
                                }
                        }
                    >
                        {(style, item) => {
                            // if (!item) {
                            //     return null;
                            // }

                            return (
                                <TypographyModal
                                    wrapperProps={{
                                        style: {
                                            ...style,
                                            ...styles,

                                        },
                                        ...popoverProps,
                                    }}
                                    // onChange={onChange}
                                    // value={value}
                                    initialView={item}
                                    setInititialView={(initialView) =>
                                        setIsOpen(initialView)
                                    }
                                    currentView={currentView}
                                    previousView={previousView}
                                    setCurrentView={setCurrentView}
                                // defaults={defaultValue}
                                />
                            );
                        }}
                    </Transition>,
                    document.body
                )}

        </div>
    )
}

export default TypoComponent