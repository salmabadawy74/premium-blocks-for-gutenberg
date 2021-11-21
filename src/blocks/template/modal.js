import classnames from "classnames";
const { __ } = wp.i18n;

const { Component, useCallback, useState } = wp.element;

const {
    Button,
    Modal
} = wp.components;

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

        const templates = template.map((item, i) => {
            return <div className="premium-template-item">
                <Button className="premium-template-item__image" variant="secondary" onClick={this.props.onClose}>
                    <img src={item["featured-image-url"]} alt="alt" loading="lazy" />
                </Button>
                <span className="premium-template-item__title">{item.title}</span>
            </div>
        });

        const categories = category.map((item, i) => {
            return <li>
                {item.name}
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
