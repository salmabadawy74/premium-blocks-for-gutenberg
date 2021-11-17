import classnames from "classnames";
// import { dispatch } from '@wordpress/data'
// import {
//     createBlock, parse, createBlocksFromInnerBlocksTemplate,
// } from '@wordpress/blocks'
// import { useState, useCallback } from '@wordpress/element'
// import { applyFilters } from '@wordpress/hooks'

const { __ } = wp.i18n;

const { Component, useCallback } = wp.element;
const { applyFilters } = wp.hooks;
const { dispatch } = wp.data;
const { createBlock, createBlocksFromInnerBlocksTemplate } = wp.blocks;


const {
    BlockControls,
    AlignmentToolbar,
    InspectorControls,
    ColorPalette,
} = wp.blockEditor;

const {
    PanelBody,
    SelectControl,
    TextControl,
    ToggleControl,
    Toolbar,
} = wp.components;

class edit extends Component {

    constructor() {
        super(...arguments);
        this.renderText = this.renderText.bind(this);
    }

    componentDidMount() {

        // Assigning id in the attribute.
        this.props.setAttributes({ block_id: this.props.clientId.substr(0, 6) });

        this.props.setAttributes({ classMigrate: true });

        setTimeout(() => {
            this.renderText("premium/button", this.props.attributes, []);
        }, 2000);


    }

    renderText(blockName, attributes, innerBlocks) {
        // useCallback((blockName, attributes, innerBlocks) => {
        const { replaceBlock } = dispatch('core/block-editor')

        //     const shortBlockName = blockName.replace(/^\w+\//g, '')
        // const blockAttributes = applyFilters(`premium.${shortBlockName}.design.filtered-block-attributes`, attributes)

        const block = createBlock(blockName, this.props.attributes, createBlocksFromInnerBlocksTemplate(innerBlocks))
        console.log(block)
        // return block;
        replaceBlock(this.props.clientId, block)
        // }, [this.props.clientId])
    }

    render() {
        const { attributes, setAttributes, isSelected } = this.props;

        const {
            block_id,
            align,
            className,
            prefix,
            suffix,
            repeaterFancyText,
            effect,
            fancyTextColor,
            fancyTextfontSize,
            fancyTextfontSizeMobile,
            fancyTextfontSizeTablet,
            fancyTextfontSizeUnit,
            fancyTextWeight,
            fancyTextUpper,
            fancyTextStyle,
            fancyTextLetter,
            fancyTextBGColor,
            shadowColor,
            shadowBlur,
            shadowHorizontal,
            shadowVertical,
            cursorColor,
            textColor,
            textfontSize,
            textfontSizeMobile,
            textfontSizeTablet,
            textfontSizeUnit,
            textWeight,
            textLetter,
            textUpper,
            textStyle,
            textBGColor,
            loop,
            cursorShow,
            cursorMark,
            typeSpeed,
            backSpeed,
            startdelay,
            backdelay,
            animationSpeed,
            pauseTime,
            hoverPause,
            fancyalign,
            fancyTextBGOpacity,
            textBGOpacity,
            hideDesktop,
            hideTablet,
            hideMobile
        } = attributes;

        const ALIGNS = ["left", "center", "right"];
        const EFFECT = [
            {
                label: __("Typing"),
                value: "typing",
            },
            {
                label: __("Slide"),
                value: "slide",
            },
        ];

        return [
            isSelected && (
                <BlockControls>
                    <AlignmentToolbar
                        value={align}
                        onChange={value =>
                            setAttributes({ align: value })
                        }
                    />
                </BlockControls>
            ),
            isSelected && (
                <InspectorControls>
                    <PanelBody
                        title={__("General Settings")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                    </PanelBody>
                </InspectorControls>
            ),
            <div
                className={classnames(className, `premium-block-${block_id}`)}
                style={{
                    textAlign: align,
                }}
            >
                <p className="premium-test">Test1</p>
            </div>,
        ];
    }
}

export default edit;
