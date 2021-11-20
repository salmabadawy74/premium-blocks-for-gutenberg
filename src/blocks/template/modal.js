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
            template
        } = attributes;
        console.log('template', template, isLibraryOpen)

        const templates = template.map((item, i) => {
            return <Button variant="secondary" onClick={this.props.onClose}>
                {item.title}
            </Button>
        });



        return (
            <Modal title="This is my modal" onRequestClose={this.props.onClose}>
                {templates}
            </Modal>
        )
    }
}

export default modal;
