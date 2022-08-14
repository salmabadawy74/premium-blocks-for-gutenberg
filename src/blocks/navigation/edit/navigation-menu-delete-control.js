/**
 * WordPress dependencies
 */
import { Button, Flex, FlexItem, Modal } from '@wordpress/components';
import {
    store as coreStore,
    useEntityId,
    useEntityProp,
} from '@wordpress/core-data';
import { useDispatch } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';

export default function NavigationMenuDeleteControl({ onDelete }) {
    const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(
        false
    );
    const id = useEntityId('postType', 'wp_navigation');
    const [title] = useEntityProp('postType', 'wp_navigation', 'title');
    const { deleteEntityRecord } = useDispatch(coreStore);

    return (
        <>
            <Button
                className="premium-navigation-delete-menu-button"
                variant="secondary"
                isDestructive
                onClick={() => {
                    setIsConfirmModalVisible(true);
                }}
            >
                {__('Delete menu', "premium-blocks-for-gutenberg")}
            </Button>
            {isConfirmModalVisible && (
                <Modal
                    title={sprintf(
                        /* translators: %s: the name of a menu to delete */
                        __('Delete %s', "premium-blocks-for-gutenberg"),
                        title
                    )}
                    closeLabel={__('Cancel', "premium-blocks-for-gutenberg")}
                    onRequestClose={() => setIsConfirmModalVisible(false)}
                >
                    <p>
                        {__(
                            'Are you sure you want to delete this navigation menu?'
                            , "premium-blocks-for-gutenberg")}
                    </p>
                    <Flex justify="flex-end">
                        <FlexItem>
                            <Button
                                variant="secondary"
                                onClick={() => {
                                    setIsConfirmModalVisible(false);
                                }}
                            >
                                {__('Cancel', "premium-blocks-for-gutenberg")}
                            </Button>
                        </FlexItem>
                        <FlexItem>
                            <Button
                                variant="primary"
                                onClick={() => {
                                    deleteEntityRecord(
                                        'postType',
                                        'wp_navigation',
                                        id,
                                        { force: true }
                                    );
                                    onDelete();
                                }}
                            >
                                {__('Confirm', "premium-blocks-for-gutenberg")}
                            </Button>
                        </FlexItem>
                    </Flex>
                </Modal>
            )}
        </>
    );
}
