import { createPortal, useContext, useRef, useState } from "@wordpress/element";
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

    const { globalColors, setGlobalColors } = useContext(SettingsContext);
    const [currentView, setCurrentView] = useState("");
    const [openModal, setOpenModal] = useState(false)
    const [delPalette, setDelPalette] = useState({});
    const { styles, popoverProps } = usePopoverMaker({
        ref: currentView === "add" ? buttonRef : colorPalettesWrapper,
        defaultHeight: 430,
        shouldCalculate: isTransitioning || isOpen,
    });
    const titles = [
        __(`Buttons background color \n& Links hover color`, "kemet"),
        __("Headings & Links color", "kemet"),
        __("Body text & Meta color", "kemet"),
        __("Borders color", "kemet"),
        __(
            "Body background, a tint for Input fields,\nPage titles, Widgets background",
            "kemet"
        ),
        __("Footer text color", "kemet"),
        __("Footer background color", "kemet"),
    ];
    const activePallet = [...state, ...defaultPallets].find(pallet => pallet.id === globalColors.current_palett);
    const newColorsObj = globalColors?.colors.map((color, index) => {
        return {
            name: titles[index],
            slug: color.slug,
            color: color.color,
            default: true
        }
    });
    const customColors = activePallet?.id?.includes('custom') && activePallet?.custom_colors?.length ? activePallet.custom_colors : globalColors.custom_colors || [];
    const globalPallet = { ...globalColors, colors: newColorsObj, custom_colors: customColors };

    const addCustomColorToPallet = (colorData) => {
        const newCustomColors = [...activePallet.custom_colors];
        newCustomColors.push(colorData);
        const newPallets = [...state].map(pallet => pallet.id === activePallet.id ? { ...pallet, custom_colors: newCustomColors } : pallet);

        setState(newPallets);
        onChange(newPallets);
    };

    const changeCustomColorToPallet = (color, index) => {
        let newColors = index.includes('custom') ? [...activePallet.custom_colors] : [...activePallet.colors];
        newColors = newColors.map(colorObj => colorObj.slug === index ? { ...colorObj, color: color } : colorObj);
        const changedColors = index.includes('custom') ? 'custom_colors' : 'colors';
        const newPallets = [...state].map(pallet => pallet.id === activePallet.id ? { ...pallet, [changedColors]: newColors } : pallet);

        setState(newPallets);
        onChange(newPallets);
    };

    const handleChangePalette = (active) => {
        const newGlobalColors = { ...globalColors, colors: active.colors, current_palett: active.id };

        setGlobalColors(newGlobalColors);
    };

    const handleAddNewColor = (colorData) => {
        if (activePallet?.id?.includes('custom')) {
            addCustomColorToPallet(colorData);
            return;
        }
        let newCustomColors = globalPallet.type === 'system' ? [...globalColors.custom_colors] : [...globalPallet.custom_colors];
        newCustomColors.push(colorData);
        const newGlobalColors = { ...globalColors, custom_colors: newCustomColors };

        setGlobalColors(newGlobalColors);
    };

    const handleChangeComplete = (color, index) => {
        if (activePallet?.id?.includes('custom')) {
            changeCustomColorToPallet(color, index);
            return;
        }
        let newColors = index.includes('custom') ? [...globalColors.custom_colors] : [...globalColors.colors];
        newColors = newColors.map(colorObj => colorObj.slug === index ? { ...colorObj, color: color } : colorObj);
        const changedColors = index.includes('custom') ? 'custom_colors' : 'colors';
        const newGlobalColors = { ...globalColors, [changedColors]: newColors };

        setGlobalColors(newGlobalColors);
    };

    const handleRemoveColor = (id) => {
        let newColors = [...globalColors.custom_colors];
        newColors = newColors.filter(color => color.slug !== id);
        const newGlobalColors = { ...globalColors, custom_colors: newColors };

        setGlobalColors(newGlobalColors);
    }

    const handleChangeName = (name, index) => {
        let newColors = index.includes('custom') ? [...globalColors.custom_colors] : [...globalColors.colors];
        newColors = newColors.map(colorObj => colorObj.slug === index ? { ...colorObj, name: name } : colorObj);
        const changedColors = index.includes('custom') ? 'custom_colors' : 'colors';
        const newGlobalColors = { ...globalColors, [changedColors]: newColors };

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
            custom_colors: [...customColors],
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
        const changedColors = id.includes('custom') ? 'custom_colors' : 'colors';
        const resetColor = currentPalette[changedColors].find(color => color.slug === id) || {};
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
                        pallet={globalPallet}
                        onChange={(v, id) => handleChangeComplete(v, id)}
                        handleClickReset={(val) => {
                            handleResetColor(val);
                        }}
                        addNewColor={handleAddNewColor}
                        onChangeName={(v, id) => handleChangeName(v, id)}
                        onRemove={(v, id) => handleRemoveColor(v, id)}
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
                            {__(`Select Another Palette`, "kemet")}
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

                    {__('Save New Palette', "kemet")}
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
                openModal && <Modal title={(<div className={`premium-popup-modal__header`}><i className="dashicons dashicons-bell"></i> {__("Warning", "kemet")}</div>)}
                    className={`premium-color-palette-confrim__delete`}
                    isDismissible={true}
                    onRequestClose={() => { setOpenModal(false) }}
                >
                    < p className={__(`premium-palette-popup-content`)}>
                        {__(`You are about to delete `, "kemet")}<q className={`premium-deleted-palette__name`}>"{delPalette.name}"</q>{__(`. This palette cannot be restored, are you sure you want to delete it?`, "kemet")}
                    </p>
                    <div className={__(`premium-paltette-popup-action`)}>
                        <button type="button" class="button button-primary save has-next-sibling" onClick={() => {
                            setOpenModal(false)
                        }
                        }>{__("No", "kemet")}</button>
                        <button type="button" class="components-button  premium-button__delete__palette" onClick={(e) => {
                            e.preventDefault();
                            ConfirmDelete()
                        }}>{__('Yes', "kemet")}</button>
                    </div>
                </Modal>
            }

        </div>
    );
};

export default ColorPalettes;
