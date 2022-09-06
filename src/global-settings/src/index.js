import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
import { Fragment } from '@wordpress/element';
import GlobalStylesUI from './ui';
const { __ } = wp.i18n;
import './style.scss';

const PluginSidebarTest = () => (
    <Fragment>
        <PluginSidebarMoreMenuItem target="premium-sidebar">
            {__('Premium Blocks For Gutenberg')}
        </PluginSidebarMoreMenuItem>
        <PluginSidebar name="premium-sidebar" title={__('Premium Blocks For Gutenberg')}>
            <GlobalStylesUI />
        </PluginSidebar>
    </Fragment>
);

registerPlugin('plugin-premium-blocks', { render: PluginSidebarTest });
console.log('Premium Block Settings');