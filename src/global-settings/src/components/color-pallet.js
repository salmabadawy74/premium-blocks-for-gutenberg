import { createPortal, useContext, useRef, useState, useEffect } from "@wordpress/element";
import PalettePreview from "./color-palettes/PalettePreview";
import AddPaletteContainer from "./color-palettes/AddPaletteContainer";
import ColorPalettesModal from "./color-palettes/ColorPalettesModal";
import usePopoverMaker from "./common/popover-component";
import OutsideClickHandler from "./common/outside-component";
import { Transition } from "@react-spring/web";
import bezierEasing from "bezier-easing";
const { __, sprintf } = wp.i18n;
import { Modal } from '@wordpress/components';
import classnames from "classnames";
import defaultPallets from "../helpers/defaultPallets";
import SettingsContext from "../store/settings-store";

const ColorPalettes = ({
    value,
    onChange,
    label,
}) => {
    const [state, setState] = useState(value);
    const colorPalettesWrapper = useRef();
    const buttonRef = useRef();
    const defaultValues = [...defaultPallets, ...pbgGlobalSettings.pallets];
    const [{ isOpen, isTransitioning }, setModalState] = useState({
        isOpen: false,
        isTransitioning: false,
    });

    const { globalColors, setGlobalColors, customColors, setCustomColors } = useContext(SettingsContext);
    const [currentView, setCurrentView] = useState("");
    const [openModal, setOpenModal] = useState(false)
    const [delPalette, setDelPalette] = useState({});
    const { styles, popoverProps } = usePopoverMaker({
        ref: currentView === "add" ? buttonRef : colorPalettesWrapper,
        defaultHeight: 430,
        shouldCalculate: isTransitioning || isOpen,
    });

    const titles = [
        __(`Buttons background color \n& Links hover color`, "premium-blocks-for-gutenberg"),
        __("Headings & Links color", "premium-blocks-for-gutenberg"),
        __("Body text", "premium-blocks-for-gutenberg"),
        __("Borders color", "premium-blocks-for-gutenberg"),
        __(
            "Body background, a tint for Input fields",
            "premium-blocks-for-gutenberg"
        ),
        __("Footer text color", "premium-blocks-for-gutenberg"),
        __("Footer background color", "premium-blocks-for-gutenberg"),
    ];
    const newColorsObj = globalColors?.colors.map((color, index) => {
        return {
            name: titles[index],
            slug: color.slug,
            color: color.color,
            default: true
        }
    });
    const globalPallet = { ...globalColors, colors: newColorsObj };

    const handleChangePalette = (active) => {
        const newGlobalColors = { ...globalColors, colors: active.colors, current_palett: active.id };

        setGlobalColors(newGlobalColors);
    };

    const handleChangeCustomColor = (value, id) => {
        let newColors = [...customColors].map(color => color.slug === id ? { ...color, color: value } : color);

        setCustomColors(newColors);
    }

    const handleChangeComplete = (color, index) => {
        if (index.includes('custom')) {
            handleChangeCustomColor(color, index);
            return;
        }
        let newColors = [...globalColors.colors];
        newColors = newColors.map(colorObj => colorObj.slug === index ? { ...colorObj, color: color } : colorObj);
        const newGlobalColors = { ...globalColors, colors: newColors };

        setGlobalColors(newGlobalColors);
    };

    const handleAddPalette = (data) => {
        let newPallets = [...state];

        let newPalett = {
            id: `custom-pallet-${newPallets.length + 1}`,
            colors: [...globalColors.colors],
            type: "custom",
            skin: data.type,
            name: data.name,
        };
        newPallets.unshift(newPalett);
        setState(newPallets);
        onChange(newPallets);
        setGlobalColors({ ...globalColors, current_palett: `custom-pallet-${newPallets.length}` });
        setModalState(() => ({
            isOpen: null,
            isTransitioning: false,
        }))
    };

    const handleDeletePalette = (id) => {
        setOpenModal(true)
        const deletePalette = value.find((palette) => {
            return palette.id === id;
        });
        setDelPalette({ ...deletePalette })
    };

    const ConfirmDelete = () => {
        let newPalettes = value.filter((palette) => {
            return palette.id !== delPalette.id;
        });

        setState(newPalettes);
        onChange(newPalettes);
        setOpenModal(false)
    }

    const handleResetColor = (id) => {
        let currentPalette = defaultValues.find(
            (pallet) => pallet.id === globalColors.current_palett
        );
        const resetColor = currentPalette['colors'].find(color => color.slug === id) || {};
        handleChangeComplete(resetColor?.color || '', id);
    };

    return (
        <div>
            {label && <header>
                <span className="customize-control-title premium-control-title">
                    {label}
                </span>
                {label && <a href={'https://kemet.io/docs/global-colors/'} target='_blank'> </a>}
            </header>}
            <OutsideClickHandler
                disabled={!isOpen}
                useCapture={false}
                className="premium-palettes-outside"
                additionalRefs={[popoverProps.ref]}
                onOutsideClick={(e) => {

                    if (
                        e.target.closest(".premium-global-color-picker-modal") ||
                        e.target.classList.contains("premium-global-color-picker-modal") ||
                        e.target.closest(".premium-option-modal")
                    ) {
                        return;
                    }
                    setModalState(() => ({
                        isOpen: null,
                        isTransitioning: null,
                    }))
                    setCurrentView(" ");
                }}
                wrapperProps={{
                    ref: colorPalettesWrapper,

                }}
            >
                <div className={`premium-palettes-preview`}>
                    <PalettePreview
                        onClick={() => {
                            setModalState(() => ({
                                isOpen: null,
                                isTransitioning: null,
                            }))
                        }}
                        colors={globalPallet.colors}
                        customColors={customColors}
                        onChange={(v, id) => handleChangeComplete(v, id)}
                        handleClickReset={(val) => {
                            handleResetColor(val);
                        }}
                    />
                    <div className={`premium-palette-toggle-modal`}
                        onClick={(e) => {
                            e.preventDefault();
                            setModalState(() => ({
                                isOpen: !isOpen,
                                isTransitioning: null,
                            }))
                            setCurrentView("modal");
                        }}
                    >
                        <header>
                            {__(`Select Another Palette`, "premium-blocks-for-gutenberg")}
                        </header>
                        <span
                            className={classnames(`premium-button-open-palette`, { active: currentView === "modal" })}
                        ></span>
                    </div>
                </div>
                {isOpen && currentView === "modal" &&
                    <ColorPalettesModal
                        wrapperProps={{
                            style: {

                                ...styles
                            },

                        }}
                        onChange={(val) => {
                            setModalState(() => ({
                                isOpen: false,
                                isTransitioning: null,
                            }))
                            handleChangePalette(val);
                            setCurrentView("")
                        }}
                        value={[...defaultPallets, ...state]}
                        option={[...defaultPallets, ...state]}
                        handleDeletePalette={(id) => handleDeletePalette(id)}
                        titles={titles}
                    />}
            </OutsideClickHandler>
            <OutsideClickHandler
                disabled={!isTransitioning}
                useCapture={false}
                className="premium-button-palettes-outside"
                additionalRefs={[popoverProps.ref]}
                onOutsideClick={(e) => {
                    if (
                        e.target.closest(".premium-global-color-picker-modal") ||
                        e.target.classList.contains("premium-global-color-picker-modal") ||
                        e.target.closest(".premium-option-modal")
                    ) {
                        return;
                    }
                    setModalState(() => ({
                        isOpen: null,
                        isTransitioning: null,
                    }))
                    setCurrentView(" ");
                }}
                wrapperProps={{
                    ref: buttonRef,
                    onClick: (e) => {
                        e.preventDefault();
                        if (
                            e.target.closest(".premium-global-color-picker-modal") ||
                            e.target.classList.contains("premium-global-color-picker-modal")
                        ) {
                            return;
                        }
                        if (!state.palettes) {
                            return;
                        }
                        setModalState(() => ({
                            isOpen: null,
                            isTransitioning: true,
                        }))
                    },
                }}
            >
                <button
                    className={`premium-button-palette`}
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setCurrentView("add");
                        setModalState(() => ({
                            isOpen: null,
                            isTransitioning: true,
                        }))

                    }}
                >

                    {__('Save New Palette', "premium-blocks-for-gutenberg")}
                </button>
            </OutsideClickHandler>
            {
                isTransitioning && currentView === "add" &&
                createPortal(
                    <Transition
                        items={isTransitioning}
                        config={{
                            duration: 100,
                            easing: bezierEasing(0.25, 0.1, 0.25, 1.0),
                        }}
                        from={
                            isTransitioning
                                ? {
                                    transform: "scale3d(0.95, 0.95, 1)",
                                    opacity: 0,
                                }
                                : { opacity: 1 }
                        }
                        enter={
                            isTransitioning
                                ? {
                                    transform: "scale3d(1, 1, 1)",
                                    opacity: 1,
                                }
                                : {
                                    opacity: 1,
                                }
                        }
                        leave={
                            !isTransitioning
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

                            if (!item) {
                                return null;
                            } else
                                return (
                                    <AddPaletteContainer
                                        wrapperProps={{
                                            style: {
                                                ...style,
                                                ...styles,
                                            },
                                            ...popoverProps,
                                        }}
                                        onChange={(val, id) => {
                                            handleChangeComplete(val, id);
                                        }}
                                        value={state}
                                        option={state}
                                        handleAddPalette={handleAddPalette}
                                        handleCloseModal={() => { setCurrentView("") }}

                                    />
                                );
                        }}
                    </Transition>,
                    document.body
                )
            }

            {
                openModal && <Modal title={(<div className={`premium-popup-modal__header`}><i className="dashicons dashicons-bell"></i> {__("Warning", "premium-blocks-for-gutenberg")}</div>)}
                    className={`premium-color-palette-confrim__delete`}
                    isDismissible={true}
                    onRequestClose={() => { setOpenModal(false) }}
                >
                    < p className={__(`premium-palette-popup-content`)}>
                        {__(`You are about to delete `, "premium-blocks-for-gutenberg")}<q className={`premium-deleted-palette__name`}>"{delPalette.name}"</q>{__(`. This palette cannot be restored, are you sure you want to delete it?`, "premium-blocks-for-gutenberg")}
                    </p>
                    <div className={__(`premium-paltette-popup-action`)}>
                        <button type="button" class="button button-primary save has-next-sibling" onClick={() => {
                            setOpenModal(false)
                        }
                        }>{__("No", "premium-blocks-for-gutenberg")}</button>
                        <button type="button" class="components-button  premium-button__delete__palette" onClick={(e) => {
                            e.preventDefault();
                            ConfirmDelete()
                        }}>{__('Yes', "premium-blocks-for-gutenberg")}</button>
                    </div>
                </Modal>
            }

        </div>
    );
};

export default ColorPalettes;
