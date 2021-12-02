const { __ } = wp.i18n;

const { Component, Fragment } = wp.element;

const {
    Button,
    Modal,
    TabPanel
} = wp.components;
const apiFetch = wp.apiFetch;

class modal extends Component {

    constructor() {
        super(...arguments);
        this.selectUikit = this.selectUikit.bind(this)
        this.timeOut = null;
    }

    componentDidMount() {
        this.timeOut = setTimeout(() => {
            this.selectUikit('Angled')
        }, 400)
    }

    componentWillUnmount() {
        if (this.timeOut !== null) {
            clearTimeout(this.timeOut)
        }
    }


    selectUikit(item) {
        this.props.attributes.uikits.forEach((uikit, i) => {
            if (uikit.id === item) {
                this.props.setAttributes({
                    activeCategory: item
                });
                return;
            }
        })

        let newTemp = this.props.attributes.newTemplate.map((temp, i) => {
            return temp
        }).filter(t => {
            return t.uikit === item
        })

        this.props.setAttributes({
            template: newTemp
        });
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
            column
        } = attributes;

        const TABSTYLE = [{
            name: "uikit",
            title: __("UI Kits")
        },
        {
            name: "category",
            title: __("Categories")
        }
        ];

        const selectTemplate = async (designId) => {
            const results = await apiFetch({
                path: `/stackable/v2/design//${designId}`,
                method: 'GET',
            })
            let designLibrary = await results
            console.log(designLibrary)
            this.props.onSelect(designLibrary);
        }

        const selectCategory = (item) => {
            category.map((cat, i) => {
                if (cat.id === item) {
                    this.props.setAttributes({
                        activeCategory: item
                    });
                }
            })

            let newTemp = newTemplate.map((temp, i) => {
                return temp
            }).filter(t => {
                return t.categories[0] === item
            })

            this.props.setAttributes({
                template: item === 'all' ? newTemplate : newTemp
            });
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
            return <li>
                <div className={`premium-template__sidebar-item ${activeCategory == item.id ? 'is-active' : ''}`} onClick={() => selectCategory(item.id)}>
                    {item.label}
                    <span className="premium-template-block-list__count">{item.count}</span>
                </div>
            </li>
        });

        const uikit = uikits.map((item, i) => {
            return <li>
                <div className={`premium-template__sidebar-item ${activeCategory == item.id ? 'is-active' : ''}`} onClick={() => this.selectUikit(item.id)}>
                    {item.label}
                    <span className="premium-template-block-list__count">{item.count}</span>
                </div>
            </li>
        });

        const tabSelect = (tabName) => {
            if (tabName === 'uikit') {
                this.selectUikit('Angled')
            }
            else {
                selectCategory('all')
            }
        };

        const setColumns = (item) => {
            this.props.setAttributes({
                column: item
            });
        }


        return (
            <Modal title="This is my modal" onRequestClose={this.props.onClose} className="premium-template-modal">
                <div className="premium-template-modal__wrapper">
                    <aside className="premium-template-modal__sidebar">
                        <div></div>
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
