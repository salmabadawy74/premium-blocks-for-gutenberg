
const { __ } = wp.i18n;

const { BlockIcon, MediaPlaceholder } = wp.blockEditor;

const { Button, ExternalLink, Modal, Placeholder } = wp.components;

const { Fragment, useState } = wp.element;

const BlockPlaceholder = ({
    className,
    isJSONAllowed,
    onSelectURL,
    onSelect,
    value
}) => {
    const [url, setURL] = useState(value);
    const [isOpen, setOpen] = useState(false);

    const onChangeValue = e => {
        if (e) {
            e.preventDefault();
        }
        return onSelectURL(url);
    };

    if (isJSONAllowed) {
        return (
            <MediaPlaceholder
                labels={{
                    title: __('Lottie', 'premium-block-for-gutenberg'),
                    instructions: __('Add Lottie animations and files to your website.', 'premium-block-for-gutenberg')
                }}
                accept={['application/json']}
                allowedTypes={['application/json']}
                value={value}
                onSelectURL={onSelectURL}
                onSelect={onSelect}
            />
        );
    }

    return (
        <Fragment>
            <Placeholder
                label={__('Lottie', 'premium-block-for-gutenberg')}
                instructions={__('Add Lottie animations and files to your website.', 'premium-block-for-gutenberg')}
                className={className}
            >
                <form onSubmit={onChangeValue}>
                    <input
                        type="url"
                        value={url}
                        className="components-placeholder__input"
                        aria-label={__('Lottie', 'premium-block-for-gutenberg')}
                        placeholder={__('Enter URL to embed here…', 'premium-block-for-gutenberg')}
                        onChange={e => setURL(e.target.value)}
                    />

                    <Button
                        isPrimary
                        disabled={!url}
                        type="submit"
                    >
                        {__('Embed', 'premium-block-for-gutenberg')}
                    </Button>

                    {!isJSONAllowed && (
                        <Button
                            isSecondary
                            onClick={() => setOpen(true)}
                        >
                            { __('Upload', 'premium-block-for-gutenberg')}
                        </Button>
                    )}
                </form>
            </Placeholder>

            { isOpen && (
                <Modal
                    title={__('Allow JSON Uploads', 'premium-block-for-gutenberg')}
                    closeLabel={__('Close')}
                    onRequestClose={() => setOpen(false)}
                    overlayClassName="wp-block-themeisle-blocks-lottie-modal"
                >
                    { __('This file type is not permitted for security reasons. Would you still like to enable JSON uploads?', 'premium-block-for-gutenberg')}
                    <br /><br />
                    <ExternalLink href={window.PremiumBlocksSettings.settingPath}>{__('You can enable JSON uploads from Settings.', 'premium-block-for-gutenberg')}</ExternalLink>
                    <br /><br />
                    { __('You will have to refresh the page after changing JSON upload settings.', 'premium-block-for-gutenberg')}
                </Modal>
            )}
        </Fragment>
    );
};

export default BlockPlaceholder;
