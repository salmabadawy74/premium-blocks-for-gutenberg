const { __ } = wp.i18n;
import { sortBy } from 'lodash'

const { Component, Fragment } = wp.element;

const {
    Button,
    Modal,
    TabPanel,
    TextControl
} = wp.components;
const apiFetch = wp.apiFetch;
const { applyFilters } = wp.hooks;

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

    componentDidUpdate(nextProps) {
        // console.log(this.props.attributes.template, nextProps.attributes.template)
        if (this.props.attributes.search !== nextProps.attributes.search) {
            //     this.props.setAttributes({
            //         template: nextProps.attributes.template
            //     }, () => {
            // this.selectCategory(this.props.attributes.selectcategory, nextProps.attributes.template)
            //     });
            // }
            // this.props.setSearch(this.props.attributes.search)
        }
    }

    selectCategory(item) {
        console.log(item, this.props.attributes.template, this.props.attributes.category)
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
        console.log('newTemp', newTemp)
        this.props.setAttributes({
            template: item === 'all' ? this.props.attributes.newTemplate : newTemp,
            selectcategory: item
        });
        this.props.setSearch(this.props.attributes.search, (item === 'all' ? this.props.attributes.newTemplate : newTemp), 'category', item)
    }


    selectUikit(item, library) {
        // console.log('uikits', item)

        this.props.attributes.uikits.forEach((uikit, i) => {
            // console.log(uikit)
            if (uikit.uiKit.id === item) {
                this.props.setAttributes({
                    activeCategory: item
                });
                return;
            }
        })
        // console.log('this.props.attributes.newTemplate', this.props.attributes.newTemplate)
        let newTemp = (library != undefined ? library : this.props.attributes.newTemplate).map((temp, i) => {
            return temp
        }).filter(t => {
            return t.uikit === item
        })
        console.log(newTemp)
        this.props.setAttributes({
            template: newTemp,
            selectuikit: item
        });
        this.props.setSearch(this.props.attributes.search, newTemp, 'uikit', item)
    }

    render() {
        const { attributes, setAttributes, isSelected } = this.props;

        const {
            block_id,
            align,
            className,
            newTemplate,
            template,
            category,
            activeCategory,
            uikits,
            column,
            search,
            selectcategory,
            selectuikit,
            tabName
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
            // console.log(designLibrary)
            this.props.onSelect(designLibrary);
        }

        // const selectCategory = (item) => {
        //     category.map((cat, i) => {
        //         if (cat.category.id === item) {
        //             this.props.setAttributes({
        //                 activeCategory: item
        //             });
        //         }
        //     })

        //     let newTemp = newTemplate.map((temp, i) => {
        //         return temp
        //     }).filter(t => {
        //         return t.categories[0] === item
        //     })

        //     this.props.setAttributes({
        //         template: item === 'all' ? newTemplate : newTemp
        //     });
        //     // setSearch(search, template)
        // }

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

        const tabSelect = (tabName) => {
            console.log('tabName', tabName)
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

        const setSearch = (search) => {
            console.log(search, template)
            const terms = search.toLowerCase().replace(/\s+/, ' ').trim().split(' ')
            console.log(terms)
            // Every search term should match a property of a design.
            terms.forEach(searchTerm => {
                let library = newTemplate.filter(design => {
                    // Our search term needs to match at least one of these properties.
                    const propertiesToSearch = applyFilters('stackable.design-library.search-properties',
                        ['label', 'plan', 'tags', 'categories', 'colors'])

                    return propertiesToSearch.some(designProp => {
                        // Search whether the term matched.
                        return design[designProp].toString().toLowerCase().indexOf(searchTerm) !== -1
                    })
                })
                console.log(library)

                this.props.setAttributes({
                    template: library,
                    search: search
                });
                console.log('selectuikit', tabName)
                tabName == 'category' ? this.selectCategory(selectcategory, library) :
                    this.selectUikit(selectuikit, library)
            })
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
                        <Button
                            icon="image-rotate"
                            label={__('Refresh Library')}
                            className="ugb-modal-design-library__refresh"
                        // onClick={ () => setDoReset( true ) }
                        />

                        <Button
                            icon="fa fa-dot-circle-o"
                            className={columns === 2 ? 'is-active' : ''}
                            label={__('Large preview')}
                            onClick={() => setColumns(2)}
                        />
                        <Button
                            icon="image-rotate"
                            className={columns === 3 ? 'is-active' : ''}
                            label={__('Medium preview')}
                            onClick={() => setColumns(3)}
                        />
                        <Button
                            icon="fa fa-dot-circle-o"
                            className={columns === 4 ? 'is-active' : ''}
                            label={__('Small preview')}
                            onClick={() => setColumns(4)}
                        />
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
