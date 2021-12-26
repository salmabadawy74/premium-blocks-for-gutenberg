const { useRef, useState, } = wp.element;
import SinglePicker from './color-picker/single-picker'
import OutsideClickHandler from '../common/outside-component'

const ColorComponent = ({ picker, onChangeComplete, value, predefined, className, skipModal, resetPalette, onColorReset }) => {
    const [{ isPicking, isTransitioning }, setState] = useState({
        isPicking: null,
        isTransitioning: null,
    })
    const containerRef = useRef()
    const modalRef = useRef()

    return (
        <OutsideClickHandler
            useCapture={false}
            display="inline-block"
            disabled={!isPicking}
            wrapperProps={{
                ref: containerRef,
            }}
            className={`kmt-color-Wrapper`}
            additionalRefs={[modalRef]}
            onOutsideClick={() => {
                setState(({ isPicking }) => ({
                    isPicking: null,
                    isTransitioning: isPicking,
                }))
            }}>
            <SinglePicker
                containerRef={containerRef}
                picker={picker}
                key={picker.id}
                isPicking={isPicking}
                modalRef={modalRef}
                isTransitioning={isTransitioning}
                onPickingChange={(isPicking) =>
                    setState({
                        isTransitioning: picker.id,
                        isPicking,
                    })
                }
                stopTransitioning={() =>
                    setState((state) => ({
                        ...state,
                        isTransitioning: false,
                    }))
                }
                onChange={(color) => onChangeComplete(color)}
                value={value[picker.id]}
                predefined={predefined}
                className={className}
                skipModal={skipModal}
                resetPalette={resetPalette}
                onColorReset={(color) => onColorReset(color)}
            />
        </OutsideClickHandler>
    )
}

export default ColorComponent