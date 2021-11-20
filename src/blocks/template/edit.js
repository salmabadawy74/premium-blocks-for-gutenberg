import classnames from "classnames";
import ModalTemplate from './modal'
// import { dispatch } from '@wordpress/data'
// import {
//     createBlock, parse, createBlocksFromInnerBlocksTemplate,
// } from '@wordpress/blocks'
// import { useState, useCallback } from '@wordpress/element'
// import { applyFilters } from '@wordpress/hooks'

const { __ } = wp.i18n;

const { Component, useCallback, useState } = wp.element;
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

        // setTimeout(() => {
        //     this.renderText("premium/button", this.props.attributes, []);
        // }, 2000);


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
            isLibraryOpen,
            isOpenModal
        } = attributes;

        // const [isLibraryOpen, setIsLibraryOpen] = useState(false) 

        const setIsLibraryOpen = (value) => {
            setAttributes({
                isLibraryOpen: value
            });
            fetch('https://websitedemos.net/wp-json/astra-sites/v1/sites-and-pages', {
                method: 'GET', // or 'PUT'
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', Object.values(data));
                    const designList = Object.values(data).map((design, name) => {
                        setAttributes({
                            template: Object.values(data)
                        });
                        console.log(design)
                    })
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

        }


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
                <button
                    className="premium-template"
                    onClick={() => {
                        setIsLibraryOpen(true)
                    }}>{__("Add New Template")}
                </button>

                {isLibraryOpen &&
                    <ModalTemplate
                        onClose={() => {
                            setIsLibraryOpen(false)
                        }}
                        attributes={attributes}
                        setAttributes={this.props.setAttributes}
                    // onSelect={ designData => {
                    // 	const {
                    // 		name, attributes, innerBlocks, serialized,
                    // 	} = designData

                    // 	if ( name && attributes ) {
                    // 		replaceBlockWithAttributes( name, applyFilters( 'stackable.design-library.attributes', attributes ), innerBlocks || [] )
                    // 	} else if ( serialized ) {
                    // 		replaceBlocWithContent( serialized )
                    // 	} else {
                    // 		console.error( 'Design library selection failed: No block data found' ) // eslint-disable-line no-console
                    // 	}
                    // } }
                    />
                }
            </div>,
        ];
    }
}

export default edit;
