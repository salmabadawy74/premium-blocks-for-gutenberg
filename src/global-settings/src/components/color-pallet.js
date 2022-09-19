import { createPortal, useRef, useState } from "@wordpress/element";
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

const ColorPalettes = ({
    value,
    onChange,
    label,
}) => {
    const [state, setState] = useState(value);
    const colorPalettesWrapper = useRef();
    const buttonRef = useRef();

    const [{ isOpen, isTransitioning }, setModalState] = useState({
        isOpen: false,
        isTransitioning: false,
    });

    const [currentView, setCurrentView] = useState("");
    const [openModal, setOpenModal] = useState(false)
    const [delPalette, setDelPalette] = useState()
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
    let activePallet = state.find(pallet => pallet.active);
    const activePalleColors = activePallet?.colors.map((color, index) => {
        return {
            name: titles[index],
            slug: color.slug,
            color: color.color,
            default: true
        }
    });
    activePallet = { ...activePallet, colors: activePalleColors };
    const defaultPallet = state.find(pallet => pallet.slug === 'default');
    const customColors = activePallet?.custom_colors?.length && activePallet.type === 'custom' ? activePallet?.custom_colors : defaultPallet?.custom_colors || [];

    console.log(activePallet);

    const onChangePallet = (newPallet) => {
        newPallet = { ...newPallet, colors: clearColors(newPallet.colors) };
        const newPallets = [...state].map(pallet => pallet.id === newPallet.id ? newPallet : pallet);

        setState(newPallets);
        onChange(newPallets);
    };

    const handleChangePalette = (active) => {
        const newPallets = [...state].map(pallet => pallet.id === active.id ? { ...pallet, active: true } : { ...pallet, active: false });

        setState(newPallets);
        onChange(newPallets);
    };

    const handleAddNewColor = (colorData) => {
        let newCustomColors = [...customColors];
        newCustomColors.push(colorData);
        let newColorPallet = activePallet.type === 'custom' ? { ...activePallet } : { ...defaultPallet };

        onChangePallet({ ...newColorPallet, custom_colors: newCustomColors });
    };

    const handleChangeComplete = (color, index) => {
        let newPalletColors = index.includes('custom') ? [...activePalleCustomColors] : [...activePalleColors];
        newPalletColors = newPalletColors.map(colorObj => colorObj.slug === index ? { ...colorObj, color: color } : colorObj);
        const changedColors = index.includes('custom') ? 'custom_colors' : 'colors';
        const newColorPallet = { ...activePallet, [changedColors]: newPalletColors };

        onChangePallet(newColorPallet);
    };

    const clearColors = (colors) => {
        return colors.map((color, index) => {
            return {
                slug: color.slug,
                color: color.color,
            }
        })
    }

    const handleAddPalette = (data) => {
        // let { current_palette, palettes, ...colors } = { ...state };

        // let newPalette = {
        //     id: palettes.length + 1,
        //     ...colors,
        //     type: "custom",
        //     skin: data.type,
        //     name: data.name,
        // };
        // palettes.unshift(newPalette);
        // onChange({
        //     ...value,
        //     flag: !value.flag,
        // });
        // setModalState(() => ({
        //     isOpen: null,
        //     isTransitioning: false,
        // }))
    };

    const handleDeletePalette = (id) => {
        // setOpenModal(true)
        // const deletePalette = value.palettes.filter((palette) => {
        //     return palette.id === id;
        // });

        // setDelPalette({ ...deletePalette })

    };

    const ConfirmDelete = () => {

        // let newPalette = value.palettes.filter((palette) => {
        //     return palette.id !== delPalette[0].id;
        // });
        // setState({ ...value, palettes: newPalette });
        // onChange({ ...value, palettes: newPalette });
        // setOpenModal(false)
    }

    const handleResetColor = (id) => {
        // let updateState = {
        //     ...state,
        // };
        // let currentPalette = updateState.palettes.find(
        //     ({ id }) => id === updateState.current_palette
        // );
        // let resetColor = currentPalette[id];
        // handleChangeComplete(resetColor, id);
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
                        pallet={activePallet}
                        onChange={(v, id) => handleChangeComplete(v, id)}
                        handleClickReset={(val) => {
                            handleResetColor(val);
                        }}
                        addNewColor={handleAddNewColor}
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
            {/* <OutsideClickHandler
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
            } */}

            {/* {
                openModal && <Modal title={(<div className={`premium-popup-modal__header`}><i className="dashicons dashicons-bell"></i> {__("Warning", "kemet")}</div>)}
                    className={`premium-color-palette-confrim__delete`}
                    isDismissible={true}
                    onRequestClose={() => { setOpenModal(false) }}
                >
                    < p className={__(`premium-palette-popup-content`)}>
                        {__(`You are about to delete `, "kemet")}<q className={`premium-deleted-palette__name`}>"{delPalette[0].name}"</q>{__(`. This palette cannot be restored, are you sure you want to delete it?`, "kemet")}
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
            } */}

        </div>
    );
};

export default ColorPalettes;
