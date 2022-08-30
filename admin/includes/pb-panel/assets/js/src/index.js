import WelcomeTab from './tabs/welcome'
import System from './tabs/system'
import Setting from './tabs/setting';
import { render, Fragment, useContext } from '@wordpress/element'
import Header from './layout/Header';
import Card from './common/Card';
import Container from './common/Container';
import PanelContext, { PanelProvider } from './store/panel-store'
import pushHistory from './common/push-history'
import './scss/pb-panel.scss'
import OptionsComponent from './tabs/options'

const { __ } = wp.i18n;
const { TabPanel, Panel, PanelBody } = wp.components;

const RendeTabs = () => {
    let { tabs } = useContext(PanelContext);
    const compare = (a, b) => {
        if (a.priority < b.priority) {
            return -1;
        }
        if (a.priority > b.priority) {
            return 1;
        }
        return 0;
    }
    let defaultTabs = [
        {
            name: 'welcome',
            title: __('Welcome', "premium-blocks-for-gutenberg"),
            className: 'welcome',
            priority: 5,
            data: {
                Component: WelcomeTab,
                props: {}
            }
        },
        {
            name: 'blocks',
            title: __('Premium Blocks', "premium-blocks-for-gutenberg"),
            className: 'pblocks',
            priority: 5,
            data: {
                Component: OptionsComponent,
                props: { options: PremiumBlocksPanelData.options, values: PremiumBlocksPanelData.values }
            }
        },
        {
            name: 'system',
            title: __('System Info', "premium-blocks-for-gutenberg"),
            className: 'system',
            priority: 30,
            data: {
                Component: System,
                props: {}
            }
        },
        {
            name: 'settings',
            title: __('Settings', "premium-blocks-for-gutenberg"),
            className: 'system',
            priority: 30,
            data: {
                Component: Setting,
                props: {}
            }
        }
    ];
    let names = new Set(tabs.map(d => d.name));
    let mergedTabs = [...tabs, ...defaultTabs.filter(d => !names.has(d.name))];
    tabs = mergedTabs;
    const onSelectHandler = (tabName) => {
        pushHistory(tabName);
    }
    return <Fragment>
        <Header />
        <TabPanel className="pb-dashboard-tab-panel"
            activeClass="active-tab"
            initialTabName={PremiumBlocksPanelData.kemet_redirect}
            onSelect={onSelectHandler}
            tabs={tabs.sort(compare)}>
            {
                (tab) => {
                    const { Component, props } = tab.data;
                    return <Panel className={`tab-section ${tab.name}`}>
                        <PanelBody
                            opened={true}
                        >
                            <Component {...props} />
                        </PanelBody>
                    </Panel>
                }
            }
        </TabPanel>
    </Fragment>
};

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('pb-dashboard')) {
        let sidebar = document.getElementById("adminmenuwrap"),
            sidebarHeight = sidebar.offsetHeight + 'px';
        document.getElementById("wpbody").style.minHeight = sidebarHeight
        render(<PanelProvider><RendeTabs options={PremiumBlocksPanelData.options} /></PanelProvider>, document.getElementById('pb-dashboard'))
    }
})


window.PbgAdminComponents = {
    Card,
    Container
}