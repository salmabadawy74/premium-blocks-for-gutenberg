const { __ } = wp.i18n
const { Component, Fragment } = wp.element
const { SelectControl } = wp.components;
import ResponsiveSingleRangeControl from "./RangeControl/single-range-control";


const defaultData = { animation: '', name: 'fadeCenter', repeat: 'once', direction: 'center', duration: 1000, delay: 0, curve: 'ease-in-out' }

class Animation extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            isAnimate: false
        }
    }
    componentWillMount() {
        this.props.onChange(Object.assign({}, defaultData, (this.props.value || {})));
    }

    setSettings(type, val) {
        const openAnimation = val == '' ? { openAnimation: 0 } : { openAnimation: 1 }
        let data = Object.assign({}, this.props.value, openAnimation, (type == 'animation' ? { [type]: val, direction: this._valueChange(val, 'change') } : { [type]: val }))
        data.name = data.animation + data.direction
        this.props.onChange(data)
    }

    _valueChange(value, type) {
        let returnData = value == 'rotate' ? [
            { label: __('DownLeft'), value: 'DownLeft' },
            { label: __('DownRight'), value: 'DownRight' },
            { label: __('UpLeft'), value: 'UpLeft' },
            { label: __('UpRight'), value: 'UpRight' }
        ] : (value == 'slide' || value == 'flip' || value == 'fold') ? [
            { label: __('Right'), value: 'Right' },
            { label: __('Left'), value: 'Left' },
            { label: __('Up'), value: 'Up' },
            { label: __('Down'), value: 'Down' }] : [
            { label: __('Center'), value: 'center' },
            { label: __('Right'), value: 'Right' },
            { label: __('Left'), value: 'Left' },
            { label: __('Up'), value: 'Up' },
            { label: __('Down'), value: 'Down' }]
        if (type == 'data') {
            return returnData
        } else {
            return returnData[0].value
        }
    }

    doAnimate() {
        const { value, uniqueId } = this.props
        if (typeof uniqueId !== 'undefined') {
            const { isAnimate } = this.state
            const blockId = $(`.premium-blocks-${uniqueId}`)
            if (isAnimate && value.repeat !== 'once') {
                blockId.css({ 'animation-name': '' })
            } else {
                blockId.css({ 'animation-name': '' })
                const cssObject = {
                    'animation-name': value.name,
                    'animation-timing-function': value.curve,
                    'animation-duration': value.duration + 'ms',
                    'animation-delay': value.delay + 'ms',
                    'animation-iteration-count': value.repeat === 'once' ? 1 : 'infinite'
                }
                if (typeof this.timer !== 'undefined' && this.timer > 0) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    blockId.css(cssObject)
                }, 300)
            }
            this.setState({ isAnimate: !isAnimate })
        }
    }

    render() {
        const { value, label, uniqueId } = this.props
        const isActive = value && value.openAnimation === 1 ? true : false

        return (
            <div className="premium-fields premium-animation premium-field-alt">

                <SelectControl
                    label={label ? label : ''}
                    value={value.animation || ''}
                    options={[
                        { value: ' ', label: __('None', 'premium-blocks-for-gutenberg') },
                        { value: 'fade', label: __('Fade', 'premium-blocks-for-gutenberg') },
                        { value: 'slide', label: __('Slide', 'premium-blocks-for-gutenberg') },
                        { value: 'bounce', label: __('Bounce', 'premium-blocks-for-gutenberg') },
                        { value: 'zoom', label: __('Zoom', 'premium-blocks-for-gutenberg') },
                        { value: 'flip', label: __('Flip', 'premium-blocks-for-gutenberg') },
                        { value: 'fold', label: __('Fold', 'premium-blocks-for-gutenberg') },
                        { value: 'rotate', label: __('Rotate', 'premium-blocks-for-gutenberg') }]
                    }
                    onChange={val => this.setSettings('animation', val)}
                />

                { isActive &&
                    <Fragment>
                        <SelectControl
                            label={__('Direction', 'premium-blocks-for-gutenberg')}
                            value={value.direction || 'center'}
                            options={this._valueChange(value.animation, 'data')}
                            onChange={val => this.setSettings('direction', val)}
                        />
                        <SelectControl
                            label={__('Repeat', 'premium-blocks-for-gutenberg')}
                            value={value.repeat || 'once'}
                            options={[{ value: 'once', label: __('Once') }, { value: 'loop', label: __('Loop') }]}
                            onChange={val => this.setSettings('repeat', val)}
                        />
                        < ResponsiveSingleRangeControl
                            label={__("Duration", 'premium-blocks-for-gutenberg')}
                            min={0}
                            max={2000}
                            value={value.duration || 1000}
                            defaultValue={1000}
                            onChange={val => this.setSettings('duration', val)}
                            showUnit={false}
                        />
                        < ResponsiveSingleRangeControl
                            label={__('Delay', 'premium-blocks-for-gutenberg')}
                            min={0}
                            max={3000}
                            value={value.delay || 0}
                            defaultValue={0}
                            onChange={val => this.setSettings('delay', val)}
                            showUnit={false}
                        />
                        {
                            (value && value.animation != 'bounce' && value.animation != 'zoom') &&
                            <SelectControl
                                label={__('Curve', 'premium-blocks-for-gutenberg')}
                                value={value.curve || 'ease-in-out'}
                                options={[
                                    { value: 'ease-in-out', label: __('Ease-in-out', 'premium-blocks-for-gutenberg') },
                                    { value: 'ease', label: __('Ease', 'premium-blocks-for-gutenberg') },
                                    { value: 'ease-in', label: __('Ease-in', 'premium-blocks-for-gutenberg') },
                                    { value: 'ease-out', label: __('Ease-out', 'premium-blocks-for-gutenberg') },
                                    { value: 'linear', label: __('Linear', 'premium-blocks-for-gutenberg') }
                                ]}
                                onChange={val => this.setSettings('curve', val)}
                            />
                        }

                        {typeof uniqueId !== 'undefined' && <button onClick={() => this.doAnimate()} className="components-button is-button is-default is-primary is-large"> {this.state.isAnimate && value.repeat === 'loop' ? "Stop" : "Animate"} </button>}
                    </Fragment>
                }
            </div>
        )
    }
}
export default Animation