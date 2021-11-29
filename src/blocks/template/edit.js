import classnames from "classnames";
import ModalTemplate from './modal'
import { sortBy } from 'lodash';

const { __ } = wp.i18n;

const { Component } = wp.element;
const { dispatch } = wp.data;
const { createBlock, createBlocksFromInnerBlocksTemplate } = wp.blocks;
const apiFetch = wp.apiFetch;
const { applyFilters } = wp.hooks;


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
    }

    componentDidMount() {

        this.props.setAttributes({
            classMigrate: true,
            isLibraryOpen: false
        });
        // Assigning id in the attribute.
        this.props.setAttributes({ block_id: this.props.clientId.substr(0, 6) });
    }

    render() {
        const { attributes, setAttributes, isSelected } = this.props;

        const {
            block_id,
            align,
            className,
            isLibraryOpen,
            isOpenModal,
            template,
            uikits,
            category
        } = attributes;


        const setIsLibraryOpen = async (value) => {
            setAttributes({
                isLibraryOpen: value
            });
            const results = await apiFetch({
                path: `/stackable/v2/design_library`,
                method: 'GET',
            })
            let designLibrary = await results

            this.props.setAttributes({
                template: Object.values(designLibrary.v3),
                newTemplate: Object.values(designLibrary.v3)
            });
            const designList = Object.keys(designLibrary.v3).reduce((output, name) => {
                const design = designLibrary.v3[name]
                const { categories, uikit } = design

                if (typeof output.uikits[uikit] === 'undefined') {
                    output.uikits[uikit] = {
                        id: uikit,
                        label: design.uikit,
                        plan: design.plan,
                        count: 0,
                    }
                }

                categories.forEach(category => {
                    if (typeof output.categories[category] === 'undefined') {
                        output.categories[category] = {
                            id: category,
                            label: category,
                            count: 0,
                        }
                    }
                })
                return output
            }, { uikits: {}, categories: {} })

            let uikitSort = ['label']

            const uikits = sortBy(Object.values(designList.uikits), uikitSort)
            const categories = sortBy(Object.values(designList.categories), 'label')
            categories.unshift({
                id: 'all',
                label: __('All'),
                count: 0,
            })


            this.props.setAttributes({
                uikits: uikits,
                category: categories
            });
            console.log(uikits,
                category, template)

        }

        const replaceBlockWithAttributes = (blockName, attributes, innerBlocks) => {
            const { replaceBlock } = dispatch('core/block-editor')

            const shortBlockName = blockName.replace(/^\w+\//g, '')
            const blockAttributes = applyFilters(`stackable.${shortBlockName}.design.filtered-block-attributes`, attributes)

            const block = createBlock(blockName, blockAttributes, createBlocksFromInnerBlocksTemplate(innerBlocks))
            replaceBlock(this.props.clientId, block)
            console.log(block)
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
                {!isLibraryOpen && <button
                    className="premium-template"
                    onClick={() => {
                        setIsLibraryOpen(true)
                    }}>{__("Add New Template")}
                </button>}

                {isLibraryOpen &&
                    <ModalTemplate
                        onClose={() => {
                            setIsLibraryOpen(false)
                        }}
                        attributes={attributes}
                        setAttributes={this.props.setAttributes}
                        onSelect={designData => {
                            const {
                                name, attributes, innerBlocks, serialized,
                            } = designData
                            console.log(designData, name, attributes)
                            if (name && attributes) {
                                replaceBlockWithAttributes(name, applyFilters('stackable.design-library.attributes', attributes), innerBlocks || [])
                            } else if (serialized) {
                                replaceBlocWithContent(serialized)
                            } else {
                                console.error('Design library selection failed: No block data found') // eslint-disable-line no-console
                            }
                        }}
                    />
                }
            </div>,
        ];
    }
}

export default edit;
