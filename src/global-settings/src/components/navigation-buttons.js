/**
 * WordPress dependencies
 */
import {
    __experimentalNavigatorButton as NavigatorButton,
    __experimentalNavigatorBackButton as NavigatorBackButton,
    __experimentalItem as Item,
    FlexItem,
    __experimentalHStack as HStack,
    Icon
} from '@wordpress/components';

function GenericNavigationButton({ icon, children, ...props }) {
    return (
        <Item {...props}>
            {icon && (
                <HStack justify="flex-start">
                    <Icon icon={icon} size={24} className={'premium-group-item-icon'} />
                    <FlexItem>{children}</FlexItem>
                </HStack>
            )}
            {!icon && children}
        </Item>
    );
}

function NavigationButtonAsItem(props) {
    return <NavigatorButton as={GenericNavigationButton} {...props} />;
}

function NavigationBackButtonAsItem(props) {
    return <NavigatorBackButton as={GenericNavigationButton} {...props} />;
}

export { NavigationButtonAsItem, NavigationBackButtonAsItem };