import {
    __experimentalNavigatorProvider as NavigatorProvider,
    __experimentalNavigatorScreen as NavigatorScreen
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import ColorsScreen from './screens/ColorsScreen';
import ContainerSettingsScreen from './screens/ContainerSettingsScreen';
import RootScreen from './screens/RootScreen';
import TypographyScreen from './screens/TypographyScreen';

const GlobalStylesUI = props => {

    return <NavigatorProvider
        className="premium-global-styles-sidebar__navigator-provider"
        initialPath="/"
    >
        <NavigatorScreen path="/">
            <RootScreen />
        </NavigatorScreen>
        <NavigatorScreen path="/colors">
            <ColorsScreen />
        </NavigatorScreen>
        <NavigatorScreen path="/typography">
            <TypographyScreen />
        </NavigatorScreen>
        <NavigatorScreen path="/container-settings">
            <ContainerSettingsScreen />
        </NavigatorScreen>
    </NavigatorProvider>
};

export default GlobalStylesUI