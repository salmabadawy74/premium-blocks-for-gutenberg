const { createPortal, useRef } = wp.element
import PickerModal from './picker-modal'
import { Transition } from 'react-spring/renderprops'
import bezierEasing from 'bezier-easing'
import classnames from 'classnames'
import usePopoverMaker from '../../common/popover-component';
const { __ } = wp.i18n;

const SinglePicker = ({
    value,
    onChange,
    picker,
    onPickingChange,
    stopTransitioning,
    innerRef,
    containerRef,
    modalRef,
    isTransitioning,
    isPicking,
    predefined,
    className,
    skipModal, resetPalette,
    onColorReset
}) => {
    const el = useRef()

    const appendToBody = true

    const { refreshPopover, styles, popoverProps } = usePopoverMaker({
        contentRef: modalRef,
        ref: containerRef || {},
        defaultHeight: 379,
        shouldCalculate: appendToBody,
    })
    let modal = null
    if (!skipModal &&
        (isTransitioning === picker.id ||
            (isPicking || '').split(':')[0] === picker.id)
    ) {
        modal = createPortal(
            <Transition
                items={isPicking}
                onRest={() => stopTransitioning()}
                config={{
                    duration: 100,
                    easing: bezierEasing(0.25, 0.1, 0.25, 1.0),
                }}
                from={
                    (isPicking || '').indexOf(':') === -1
                        ? {
                            transform: 'scale3d(0.95, 0.95, 1)',
                            opacity: 0,
                        }
                        : { opacity: 1 }
                }
                enter={
                    (isPicking || '').indexOf(':') === -1
                        ? {
                            transform: 'scale3d(1, 1, 1)',
                            opacity: 1,
                        }
                        : {
                            opacity: 1,
                        }
                }
                leave={
                    (isPicking || '').indexOf(':') === -1
                        ? {
                            transform: 'scale3d(0.95, 0.95, 1)',
                            opacity: 0,
                        }
                        : {
                            opacity: 1,
                        }
                }>
                {(isPicking) =>
                    (isPicking || '').split(':')[0] === picker.id &&
                    ((props) => (
                        <PickerModal
                            style={{
                                ...props,
                                ...(appendToBody ? styles : {}),
                            }}
                            onChange={(color) => onChange(color)}
                            picker={picker}
                            value={value}
                            el={el}
                            wrapperProps={
                                appendToBody
                                    ? popoverProps
                                    : {
                                        ref: modalRef,
                                    }
                            }
                            appendToBody={appendToBody}
                            predefined={predefined}
                            className={className}
                            resetPalette={resetPalette}
                            onColorReset={(color) => onColorReset(color)}
                        />
                    ))
                }
            </Transition>,
            appendToBody
                ? document.body
                : el.current.closest('section').parentNode
        )
    }

    return (
        <div
            ref={(instance) => {
                el.current = instance

                if (innerRef) {
                    innerRef.current = instance
                }
            }}
            className={classnames('kmt-color-picker-single', {})}>
            <span tabIndex="0">
                <span
                    tabIndex="0"

                    onClick={(e) => {

                        e.stopPropagation()

                        refreshPopover()

                        let futureIsPicking = isPicking
                            ? isPicking.split(':')[0] === picker.id
                                ? null
                                : `${picker.id}:${isPicking.split(':')[0]}`
                            : picker.id

                        onPickingChange(futureIsPicking)
                    }}

                    style={{ background: `${value} none repeat scroll 0% 0%` }}
                >
                    <i className="kmt-tooltip-top">
                        {picker.title}
                    </i>


                </span>
            </span>

            {modal}
        </div>
    )
}

export default SinglePicker