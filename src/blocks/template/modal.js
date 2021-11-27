const { __ } = wp.i18n;

const { Component } = wp.element;

const {
    Button,
    Modal
} = wp.components;
const apiFetch = wp.apiFetch;

class modal extends Component {

    constructor() {
        super(...arguments);
    }

    render() {
        const { attributes, setAttributes, isSelected } = this.props;

        const {
            block_id,
            align,
            className,
            isLibraryOpen,
            template,
            category
        } = attributes;

        const selectTemplate = async (designId) => {
            const results = await apiFetch({
                path: `/stackable/v2/design//${designId}`,
                method: 'GET',
            })
            let designLibrary = await results
            console.log(designLibrary)
            this.props.onSelect(designLibrary)
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
                <div className="premium-template__sidebar-item" onClick={() => { console.log(item.id) }}>
                    {item.label}
                    <span className="premium-template-block-list__count">{item.count}</span>
                </div>
            </li>
        });


        return (
            <Modal title="This is my modal" onRequestClose={this.props.onClose} className="premium-template-modal">
                <div className="premium-template-modal__wrapper">
                    <aside className="premium-template-modal__sidebar">
                        <div></div>
                        <div className="premium-template-modal__filters">
                            <ul className="premium-template-block-list">
                                {categories}
                            </ul>
                        </div>
                    </aside>
                    <aside className="premium-template-modal__topbar"></aside>
                    <div className="premium-template-modal__designs">
                        <div className="premium-template-items premium-template-items--columns-3">
                            {templates}
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default modal;
