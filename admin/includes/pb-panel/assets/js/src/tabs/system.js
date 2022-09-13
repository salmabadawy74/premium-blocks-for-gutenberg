import { Fragment } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import Container from "../common/Container";
const { Dashicon } = wp.components;

const System = () => {
    const { system_info } = PremiumBlocksPanelData;

    return <Container>
        <div id='system-info'>
            <table className="widefat" cellspacing="0">
                <thead>
                    <tr>
                        <th colspan="2">{__('WordPress Environment', "premium-blocks-for-gutenberg")}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{__('Home URL', "premium-blocks-for-gutenberg")}</td>
                        <td>{system_info.home_url}</td>
                    </tr>
                    <tr>
                        <td>{__('WP Version', "premium-blocks-for-gutenberg")}</td>
                        <td>{system_info.version}</td>
                    </tr>
                    <tr>
                        <td>{__('WP Multisite', "premium-blocks-for-gutenberg")}</td>
                        <td dangerouslySetInnerHTML={{ __html: system_info.multisite ? '&#10004;' : '&ndash;' }}></td>
                    </tr>
                    <tr>
                        <td>{__('WP Memory Limit', "premium-blocks-for-gutenberg")}</td>
                        <td><mark>{system_info.memory_limit_size} {system_info.memory_limit < 67108864 && __('We recommend setting wp memory at least 64MB.', "premium-blocks-for-gutenberg")}</mark></td>
                    </tr>
                    <tr>
                        <td>{__('Theme Version', "premium-blocks-for-gutenberg")}</td>
                        <td>{system_info.theme_version}</td>
                    </tr>
                    <tr>
                        <td>{__('WP Path', "premium-blocks-for-gutenberg")}</td>
                        <td>{system_info.wp_path}</td>
                    </tr>
                    <tr>
                        <td>{__('WP Debug Mode', "premium-blocks-for-gutenberg")}</td>
                        <td dangerouslySetInnerHTML={{ __html: system_info.debug ? '&#10004;' : '&ndash;' }}></td>
                    </tr>
                    <tr>
                        <td>{__('Language', "premium-blocks-for-gutenberg")}</td>
                        <td>{system_info.lang}</td>
                    </tr>
                </tbody>
            </table>
            <table className="widefat" cellspacing="0">
                <thead>
                    <tr>
                        <th colspan="2">{__('Server Environment', "premium-blocks-for-gutenberg")}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{__('Server Info', "premium-blocks-for-gutenberg")}</td>
                        <td>{system_info.server}</td>
                    </tr>
                    <tr>
                        <td>{__('PHP Version', "premium-blocks-for-gutenberg")}</td>
                        <td>{system_info.php_version ? system_info.php_version : __("Couldn't determine PHP version because phpversion() doesn't exist.", "premium-blocks-for-gutenberg")}</td>
                    </tr>
                    {system_info.ini_get && <Fragment>
                        <tr>
                            <td>{__('PHP Memory Limit', "premium-blocks-for-gutenberg")}</td>
                            <td>{system_info.memory_limit}</td>
                        </tr>
                        <tr>
                            <td>{__('PHP Post Max Size', "premium-blocks-for-gutenberg")}</td>
                            <td>{system_info.post_max_size}</td>
                        </tr>
                        <tr>
                            <td>{__('PHP Time Limit', "premium-blocks-for-gutenberg")}</td>
                            <td><mark>{system_info.max_execution_time} {system_info.memory_limit < 60 && 0 != system_info.memory_limit && __('We recommend setting max execution time at least 60.', "premium-blocks-for-gutenberg")}</mark></td>
                        </tr>
                        <tr>
                            <td>{__('PHP Max Input Vars', "premium-blocks-for-gutenberg")}</td>
                            <td>{system_info.max_input_vars}</td>
                        </tr>
                        <tr>
                            <td>{__('SUHOSIN Installed', "premium-blocks-for-gutenberg")}</td>
                            <td dangerouslySetInnerHTML={{ __html: system_info.suhosin ? '&#10004;' : '&ndash;' }}></td>
                        </tr>
                        <tr>
                            <td>{__('MySQL Version', "premium-blocks-for-gutenberg")}</td>
                            <td>{system_info.mysql_version}</td>
                        </tr>
                    </Fragment>}
                </tbody>
            </table>
            <table className="widefat" cellspacing="0">
                <thead>
                    <tr>
                        <th colspan="2">{__('Active Plugins', "premium-blocks-for-gutenberg")}</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(system_info.active_plugins).length > 0 && Object.keys(system_info.active_plugins).map((plugin) => {
                        const pluginData = system_info.active_plugins[plugin];
                        return <tr>
                            <td>{pluginData.PluginURI ? <a href={pluginData.PluginURI} target="_blank" title={__('Visit plugin homepage', "premium-blocks-for-gutenberg")}>{pluginData.name}</a> : pluginData.name}</td>
                            <td dangerouslySetInnerHTML={{ __html: __('by', "premium-blocks-for-gutenberg") + ' - ' + pluginData.author + ' - ' + pluginData.version }}></td>
                        </tr>;
                    })}
                </tbody>
            </table>
        </div>
    </Container>
}

export default System;