import {
    __experimentalItemGroup as ItemGroup,
    CardBody,
    Card,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { color, typography, layout } from '@wordpress/icons';
import { NavigationButtonAsItem } from '../components/navigation-buttons';

const RootScreen = () => {
    return <Card size="small">
        <CardBody>
            <ItemGroup>
                <NavigationButtonAsItem
                    path="/colors"
                    aria-label={__('Colors', "premium-blocks-for-gutenberg")}
                    icon={color}
                >
                    {__('Colors', "premium-blocks-for-gutenberg")}
                </NavigationButtonAsItem>
                <NavigationButtonAsItem
                    icon={typography}
                    path={'/typography'}
                    aria-label={__('Typography styles', "premium-blocks-for-gutenberg")}
                >
                    {__('Typography', "premium-blocks-for-gutenberg")}
                </NavigationButtonAsItem>
                <NavigationButtonAsItem
                    icon={layout}
                    path={'/container-settings'}
                    aria-label={__('Layout', "premium-blocks-for-gutenberg")}
                >
                    {__('Layout', "premium-blocks-for-gutenberg")}
                </NavigationButtonAsItem>
            </ItemGroup>
        </CardBody>
    </Card>
}

export default RootScreen