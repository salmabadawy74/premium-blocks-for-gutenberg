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
                    aria-label={__('Colors')}
                    icon={color}
                >
                    {__('Colors')}
                </NavigationButtonAsItem>
                <NavigationButtonAsItem
                    icon={typography}
                    path={'/typography'}
                    aria-label={__('Typography styles')}
                >
                    {__('Typography')}
                </NavigationButtonAsItem>
                <NavigationButtonAsItem
                    icon={layout}
                    path={'/container-settings'}
                    aria-label={__('Layout')}
                >
                    {__('Layout')}
                </NavigationButtonAsItem>
            </ItemGroup>
        </CardBody>
    </Card>
}

export default RootScreen