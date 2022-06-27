import ResponsiveRangeControl from "./RangeControl/responsive-range-control";

import AdvancedColorControl from './Color Control/ColorComponent';

const { __ } = wp.i18n;

const { Component, Fragment } = wp.element;

const { Tooltip, Dropdown, CheckboxControl, ToggleControl } = wp.components;

class Shape extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showShapeOptions: false
        }
    }

    setSettings(type, val) {
        const { value, onChange, shapeType } = this.props
        const styleVal = type == 'style' && val == '' ? { openShape: 0 } : { openShape: 1 }
        onChange(Object.assign({}, value, styleVal, { shapeType }, { [type]: val }))
    }

    renderShapeOptions = () => {
        const { value } = this.props
        let shapes = ['clouds-flat', 'clouds-opacity', 'paper-torn', 'pointy-wave', 'rocky-mountain', 'single-wave', 'slope-opacity', 'slope', 'waves3-opacity', 'drip', 'turning-slope', 'hill-wave', 'hill', 'line-wave', 'swirl', 'wavy-opacity', 'zigzag-shark']

        if (value.style) {
            shapes = shapes.filter(item => item.toLowerCase().search(value.style.toLowerCase()) == -1)
            shapes = [value.style, ...shapes]
        }

        return (
            <ul className="premium-shape-picker-options">
                {shapes.map(item => <li className={`premium-shape-picker-option`} onClick={() => this.setSettings('style', item)} dangerouslySetInnerHTML={{ __html: PremiumBlocksSettings.shapes[item] }} style={value.style == item ? { fill: value.color } : {}} />)}
            </ul>
        )
    }

    render() {
        const { value } = this.props;

        const { showShapeOptions } = this.state;

        return (
            <div className="premium-field-shape premium-field">
                <div className="premium-field-child">
                    <div className="premium-field premium-shape-picker-wrapper">
                        <Dropdown
                            className={`premium-field-child premium-shape-picker ${value.style ? 'has-value' : ''}`}
                            contentClassName="premium-shape-picker-content"
                            position="bottom center"
                            renderToggle={({ isOpen, onToggle }) =>
                                <div className="shape-divider-options">
                                    <button isPrimary onClick={onToggle} aria-expanded={isOpen} >
                                        {
                                            value.style ?
                                                <div className="premium-field-shape-value" dangerouslySetInnerHTML={{ __html: PremiumBlocksSettings.shapes[value.style] }} />
                                                :
                                                <div className="premium-field-shape-placeholder">
                                                    <span>Select Shape</span>
                                                </div>
                                        }
                                    </button>
                                    {
                                        value.style &&

                                        <div className="premium-btn-reset-wrap">
                                            <button
                                                className="premium-reset-btn "


                                                onClick={() => this.setSettings('style', '')}

                                            ></button>
                                        </div>


                                    }
                                </div>
                            }
                            renderContent={() => this.renderShapeOptions()}
                        />
                    </div>
                    {value.openShape == 1 &&
                        <Fragment>
                            <AdvancedColorControl
                                label={__('Color', 'premium-blocks-for-gutenberg')}
                                colorValue={value && value.color}
                                onColorChange={val => this.setSettings('color', val)}
                            />
                            <ResponsiveRangeControl
                                min={100}
                                max={1000}
                                step={1}
                                showUnit={true}
                                value={value.width}
                                tabletValue={value.widthTablet}
                                onChangeTablet={val => this.setSettings('widthTablet', val)}
                                mobileValue={value.widthMobile}
                                onChangeMobile={value => this.setSettings('widthMobile', val)}
                                showUnit={true}
                                label={__('Shape Width', 'premium-blocks-for-gutenberg')}
                                units={['px', 'em', '%']}
                                onChange={val => this.setSettings('width', val)}
                            />
                            <ResponsiveRangeControl
                                min={0}
                                max={500}
                                step={1}
                                showUnit={true}
                                value={value.height}
                                tabletValue={value.heightTablet}
                                onChangeTablet={val => this.setSettings('heightTablet', val)}
                                mobileValue={value.heightMobile}
                                onChangeMobile={value => this.setSettings('heightMobile', val)}
                                units={['px', 'em', '%']}
                                label={__('Shape Height', 'premium-blocks-for-gutenberg')}
                                onChange={val => this.setSettings('height', val)}
                            />
                            <ToggleControl
                                label={__('Flip Divider', 'premium-blocks-for-gutenberg')}
                                checked={value.flipShapeDivider}
                                onChange={newValue => this.setSettings('flipShapeDivider', newValue)}
                            />
                            <ToggleControl
                                label={__('Invert', 'premium-blocks-for-gutenberg')}
                                checked={value.invertShapeDivider}
                                onChange={newValue => this.setSettings('invertShapeDivider', newValue)}
                            />
                            <ToggleControl
                                label={__('Bring to front', 'premium-blocks-for-gutenberg')}
                                checked={value.front}
                                onChange={val => this.setSettings('front', val)}
                            />
                        </Fragment>
                    }
                </div>
            </div >
        )
    }

}
export default Shape