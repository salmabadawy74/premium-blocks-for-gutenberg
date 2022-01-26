import classnames from "classnames";
import ModalTemplate from './modal'
import { sortBy } from 'lodash';
import axios from 'axios'
const { __ } = wp.i18n;

const { Component } = wp.element;
const { dispatch } = wp.data;
const { createBlock, createBlocksFromInnerBlocksTemplate } = wp.blocks;
const { applyFilters } = wp.hooks;


const {
    BlockControls,
    AlignmentToolbar,
    InspectorControls
} = wp.blockEditor;

const {
    PanelBody
} = wp.components;

class edit extends Component {

    constructor() {
        super(...arguments);
    }

    componentDidMount() {

        this.props.setAttributes({
            isModalOpen: false,
            search: ''
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
            isModalOpen,
            template
        } = attributes;


        const setIsModalOpen = async (value) => {
            setAttributes({
                isModalOpen: value
            });

            axios.get('admin-ajax.php', {
                params: {
                    action: 'pbg-block-templates'
                }
            })
                .then(function (response) {

                    setAttributes({
                        template: Object.values(JSON.parse(response.data.data)),
                        newTemplate: Object.values(JSON.parse(response.data.data))
                    });

                    const designList = Object.keys(JSON.parse(response.data.data)).reduce((output, name) => {
                        const design = JSON.parse(response.data.data)[name]
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

                    const newUiKits = uikits.reduce((uiKits, uiKit) => {
                        uiKits[uiKit.id] = {
                            uiKit,
                            count: 0,
                        }
                        return uiKits
                    }, {})

                    const newCategories = categories.reduce((categories, category) => {
                        categories[category.id] = {
                            category,
                            count: 0,
                        }
                        return categories
                    }, {})

                    if (newCategories['all']) {
                        newCategories['all'].count = Object.values(JSON.parse(response.data.data)).length
                    }

                    Object.values(JSON.parse(response.data.data)).forEach(design => {

                        if (design.uikit && newUiKits[design.uikit]) {
                            newUiKits[design.uikit].count++
                        }

                        design.categories.forEach(category => {
                            if (category && newCategories[category]) {
                                newCategories[category].count++
                            }
                        })
                    })

                    setAttributes({
                        uikits: Object.values(newUiKits),
                        category: Object.values(newCategories)
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        const replaceBlockWithAttributes = (blockName, attributes, innerBlocks) => {
            const { replaceBlock } = dispatch('core/block-editor')

            const shortBlockName = blockName.replace(/^\w+\//g, '')
            const blockAttributes = applyFilters(`stackable.${shortBlockName}.design.filtered-block-attributes`, attributes)

            const block = createBlock(blockName, blockAttributes, createBlocksFromInnerBlocksTemplate(innerBlocks))
            replaceBlock(this.props.clientId, block)
        }


        const setSearch = (search, temp, type, selectItem) => {
            let library = (temp != undefined ? temp : template);

            if (type === "category" && selectItem !== 'all') {
                library = library.filter(({ categories }) => categories.some(cat => selectItem.includes(cat)))
            }

            if (type === "uikit") {
                library = library.filter(({ uikit }) => uikit === selectItem)

            }

            const terms = search.toLowerCase().replace(/\s+/, ' ').trim().split(' ')
            // Every search term should match a property of a design.
            terms.forEach(searchTerm => {
                library = (library || []).filter(design => {
                    // Our search term needs to match at least one of these properties.
                    const propertiesToSearch = applyFilters('stackable.design-library.search-properties',
                        ['label', 'plan', 'tags', 'categories', 'colors'])

                    return propertiesToSearch.some(designProp => {
                        // Search whether the term matched.
                        return design[designProp].toString().toLowerCase().indexOf(searchTerm) !== -1
                    })
                })

                this.props.setAttributes({
                    template: library,
                    search: search
                });
            })
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
                {!isModalOpen && <button
                    className="premium-template"
                    onClick={() => {
                        setIsModalOpen(true)
                    }}>{__("Add New Template")}
                </button>}

                {isModalOpen &&
                    <ModalTemplate
                        onClose={() => {
                            setIsModalOpen(false)
                        }}
                        setSearch={setSearch}
                        attributes={attributes}
                        setAttributes={this.props.setAttributes}
                        onSelect={designData => {
                            const {
                                name, attributes, innerBlocks, serialized,
                            } = designData

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
