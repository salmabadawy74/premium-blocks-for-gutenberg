import { useRef, useState, } from '@wordpress/element'
import SinglePicker from './color-picker/single-picker'
import OutsideClickHandler from './common/outside-component'
import { Icon, closeSmall } from '@wordpress/icons';

const ColorComponent = ({ picker, onChangeComplete, className, skipModal, resetPalette, onColorReset, isDefault, onRemove, onChangeName }) => {
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
            className={`premium-global-color-Wrapper`}
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
                key={picker.slug}
                isPicking={isPicking}
                modalRef={modalRef}
                isTransitioning={isTransitioning}
                onPickingChange={(isPicking) =>
                    setState({
                        isTransitioning: picker.slug,
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
                className={className}
                skipModal={skipModal}
                resetPalette={resetPalette}
                onColorReset={(color) => onColorReset(color)}
                onChangeName={onChangeName}
            />
            {!isDefault && <span className="premium-remove-color" onClick={() => onRemove(picker.slug)}>
                <Icon icon={closeSmall} />
            </span>}
        </OutsideClickHandler>

    )
}

export default ColorComponent