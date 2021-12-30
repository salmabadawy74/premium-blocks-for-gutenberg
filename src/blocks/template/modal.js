import React from 'react';
import Select from 'react-select';
import axios from 'axios'
import { sortBy } from 'lodash';

const { __ } = wp.i18n;

const { Component, Fragment } = wp.element;

const {
    Button,
    Modal,
    TabPanel,
    TextControl
} = wp.components;

const apiFetch = wp.apiFetch;

class modal extends Component {

    constructor() {
        super(...arguments);
        this.selectUikit = this.selectUikit.bind(this)
        this.selectCategory = this.selectCategory.bind(this)
        this.timeOut = null;
    }

    componentDidMount() {
        this.timeOut = setTimeout(() => {
            this.selectCategory('all')
        }, 1000)
    }

    componentWillUnmount() {
        if (this.timeOut !== null) {
            clearTimeout(this.timeOut)
        }
    }

    selectCategory(item) {
        this.props.attributes.category.map((cat, i) => {
            if (cat.category.id === item) {
                this.props.setAttributes({
                    activeCategory: item
                });
            }
        })

        let newTemp = this.props.attributes.newTemplate.map((temp, i) => {
            return temp
        }).filter(t => {
            return t.categories[0] === item
        })

        this.props.setAttributes({
            template: item === 'all' ? this.props.attributes.newTemplate : newTemp,
            selectcategory: item
        });

        this.props.setSearch(this.props.attributes.search, (item === 'all' ? this.props.attributes.newTemplate : newTemp), 'category', item)
    }


    selectUikit(item, library) {
        this.props.attributes.uikits.forEach((uikit, i) => {
            if (uikit.uiKit.id === item) {
                this.props.setAttributes({
                    activeCategory: item
                });
                return;
            }
        })

        let newTemp = (library != undefined ? library : this.props.attributes.newTemplate).map((temp, i) => {
            return temp
        }).filter(t => {
            return t.uikit === item
        })

        this.props.setAttributes({
            template: newTemp,
            selectuikit: item
        });

        this.props.setSearch(this.props.attributes.search, newTemp, 'uikit', item)
    }

    render() {
        const { attributes, setAttributes, isSelected } = this.props;

        const {
            template,
            category,
            activeCategory,
            uikits,
            column,
            search,
            selectcategory
        } = attributes;

        const TABSTYLE = [
            {
                name: "category",
                title: __("Categories")
            },
            {
                name: "uikit",
                title: __("UI Kits")
            }
        ];

        const selectTemplate = async (designId) => {

            const results = await apiFetch({
                path: `/stackable/v2/design//${designId}`,
                method: 'GET',
            })

            let designLibrary = await results

            this.props.onSelect(designLibrary);
        }

        const templates = template.map((item, i) => {
            return <div className="premium-template-item" onClick={() => selectTemplate(item.id)}>
                <Button className="premium-template-item__image" variant="secondary" onClick={this.props.onClose}>
                    <img src={item.image} alt="alt" loading="lazy" />
                </Button>
                <footer className="premium-template-item__title">
                    <span>{item.label}</span>
                </footer>
            </div>
        });

        const categories = category.map((item, i) => {
            return <li key={i}>
                <div className={`premium-template__sidebar-item ${activeCategory == item.category.id ? 'is-active' : ''}`} onClick={() => this.selectCategory(item.category.id)}>
                    {item.category.label}
                    <span className="premium-template-block-list__count">{item.count}</span>
                </div>
            </li>
        });

        const uikit = (uikits || []).map((item, i) => {
            return <li key={i}>
                <div className={`premium-template__sidebar-item ${activeCategory == item.uiKit.id ? 'is-active' : ''}`} onClick={() => this.selectUikit(item.uiKit.id)}>
                    {item.uiKit.label}
                    <span className="premium-template-block-list__count">{item.count}</span>
                </div>
            </li>
        });

        const options = category.map((item, i) => {
            return { value: item.category.id, label: item.category.label }
        });

        const tabSelect = (tabName) => {
            if (tabName === 'uikit') {
                this.selectUikit('Angled')
            }
            else {
                this.selectCategory('all')
            }
            this.props.setAttributes({
                tabName: tabName
            });
        };

        const setColumns = (item) => {
            this.props.setAttributes({
                column: item
            });
        }

        const handleChange = (value) => {
            this.props.setAttributes({
                activeCategory: value != null ? value.value : 'all',
                selectcategory: value != null ? value.value : 'all'
            });
            this.selectCategory(value != null ? value.value : 'all')
        }

        const setDoReset = (value) => {
            this.props.setAttributes({
                reset: value
            });
            axios.get('admin-ajax.php', {
                params: {
                    action: 'pbg-block-templates',
                    reset: value
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


        return (
            <Modal title="This is my modal" onRequestClose={this.props.onClose} className="premium-template-modal">
                <div className="premium-template-modal__wrapper">
                    <aside className="premium-template-modal__sidebar">
                        <div>
                            <TextControl
                                className="premium-template__search"
                                placeholder={__('E.g. light, dark, red, minimalist…')}
                                value={search}
                                onChange={(search) => this.props.setSearch(search, template)}
                                data-testid="input-search"
                                type="search"
                            />
                        </div>
                        <div className="premium-template-modal__filters">
                            <ul className="premium-template-block-list">
                                <TabPanel
                                    className="premium-tab-panel-res"
                                    activeClass="active-tab-category"
                                    onSelect={tabSelect}
                                    tabs={TABSTYLE}>
                                    {
                                        (tabName) => {
                                            if ("uikit" === tabName.name) {
                                                return <Fragment>
                                                    {uikit}
                                                </Fragment>
                                            } else {
                                                return <Fragment>
                                                    {categories}
                                                </Fragment>
                                            }
                                        }
                                    }
                                </TabPanel>
                            </ul>
                        </div>
                    </aside>
                    <aside className="premium-template-modal__topbar">
                        <Select
                            defaultValue={selectcategory}
                            onChange={value => handleChange(value)}
                            options={options}
                            isSearchable={true}
                            isClearable={true}
                        />
                        <Button
                            icon="image-rotate"
                            label={__('Refresh Library')}
                            onClick={() => setDoReset(true)}
                        />

                        <Button
                            className={columns === 2 ? 'is-active' : ''}
                            label={__('Large preview')}
                            onClick={() => setColumns(2)}
                        >
                            <span class="fa fa-square" />
                        </Button>
                        <Button
                            className={columns === 3 ? 'is-active' : ''}
                            label={__('Medium preview')}
                            onClick={() => setColumns(3)}
                        >
                            <span class="fa fa-th-large" />
                        </Button>
                        <Button
                            className={columns === 4 ? 'is-active' : ''}
                            label={__('Small preview')}
                            onClick={() => setColumns(4)}
                        >
                            <span class="fa fa-th" />
                        </Button>
                    </aside>
                    <div className="premium-template-modal__designs">
                        <div className={`premium-template-items premium-template-items--columns-${column}`}>
                            {templates}
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default modal;
