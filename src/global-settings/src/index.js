import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
import { Fragment } from '@wordpress/element';
import GlobalStylesUI from './ui';
const { __ } = wp.i18n;
import './style.scss';
import { SettingsProvider } from './store/settings-store';

const PluginSidebarTest = () => (
    <Fragment>
        <PluginSidebarMoreMenuItem target="premium-sidebar">
            {__('Premium Blocks For Gutenberg')}
        </PluginSidebarMoreMenuItem>
        <PluginSidebar name="premium-sidebar" title={__('Premium Blocks For Gutenberg')}>
            <SettingsProvider>
                <GlobalStylesUI />
            </SettingsProvider>
        </PluginSidebar>
    </Fragment>
);

registerPlugin('plugin-premium-blocks', { render: PluginSidebarTest });
