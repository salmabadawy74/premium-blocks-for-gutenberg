import classnames from 'classnames';
const { __ } = wp.i18n;
const { Fragment, cloneElement, Children } = wp.element;
const { Tooltip } = wp.components;

const { useState, useRef, useEffect } = wp.element,
    LAYOUT = 'layout',
    STYLE = 'style',
    ADVANCE = 'advance';


const InspectorTabs = props => {
    const { defaultTab, children, tabs } = props,
        [currentTab, setCurrentTab] = useState(defaultTab ? defaultTab : tabs[0]),
        tabContainer = useRef(),
        offset = useRef(undefined);

    let sidebarPanel;

    useEffect(() => {
        sidebarPanel = tabContainer.current.closest('.components-panel');
    });

    const observer = new IntersectionObserver(([e]) => e.target.classList.toggle('premium-is-sticky', e.intersectionRatio < 1), { threshold: [1] });

    // component did mount
    useEffect(() => {
        // sticky tabs menu
        const container = document.querySelector('.premium-inspector-tabs-container');
        if (container) {
            observer.observe(container);
        }

        // component will unmount
        return () => {
            sidebarPanel && sidebarPanel.removeAttribute('data-premium-tab');
        }
    }, []);

    useEffect(() => {

        sidebarPanel && sidebarPanel.setAttribute('data-premium-tab', defaultTab)
    }, [defaultTab]);

    const _onTabChange = tab => {
        setCurrentTab(tab);
        sidebarPanel && sidebarPanel.setAttribute('data-premium-tab', tab);
    };

    return (
        <Fragment>
            <div className={'premium-inspector-tabs-container'}>

                <div ref={tabContainer} className={classnames(
                    'premium-inspector-tabs',
                    'premium-inspector-tabs-count-' + tabs.length,
                    currentTab
                )}>
                    {
                        tabs.indexOf(LAYOUT) > -1 && (
                            <Tooltip text={__('Layout', 'premium-blocks-for-gutenberg')}>
                                <button className={classnames({ 'premium-active': currentTab === LAYOUT })} onClick={() => _onTabChange(LAYOUT)}>
                                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="23.98" height="23.99" viewBox="0 0 23.98 23.99"><defs></defs><title>layout-tab</title><g id="Layout"><path class="cls-1" d="M23.84,2.9a4,4,0,0,0-1-1.74,4,4,0,0,0-1.75-1,3.85,3.85,0,0,0-2,0,31.93,31.93,0,0,0-9,4v8.48l6.29-6.3a1.19,1.19,0,0,1,.33-.22,1,1,0,0,1,.77,0,1,1,0,0,1,.55.55,1,1,0,0,1,0,.77,1.19,1.19,0,0,1-.22.33L14.41,11H21.6a30.63,30.63,0,0,0,2.28-6.07A4,4,0,0,0,23.84,2.9Z" transform="translate(-0.01 0)" /><path class="cls-1" d="M20.53,13a28.68,28.68,0,0,1-4,5.46,8.24,8.24,0,0,1-2.69,1.87,8.07,8.07,0,0,1-3.21.67A7.43,7.43,0,0,1,6,19.42L12.43,13h8.1Z" transform="translate(-0.01 0)" /><path class="cls-1" d="M5.82,19.31l.17.11L1.71,23.71A1,1,0,0,1,1,24a1,1,0,0,1-.69-.3A1,1,0,0,1,0,23a1,1,0,0,1,.28-.71L4.58,18A8,8,0,0,0,5.82,19.31Z" transform="translate(-0.01 0)" /><path class="cls-1" d="M4.58,18A7.72,7.72,0,0,1,5.26,7.87,25.63,25.63,0,0,1,8,5.51v9a.35.35,0,0,0,0,.06Z" transform="translate(-0.01 0)" /></g></svg>                                    <h5>{__('Layout', 'premium-blocks-for-gutenberg')}</h5>
                                </button>
                            </Tooltip>
                        )
                    }

                    {
                        tabs.indexOf(STYLE) > -1 && (
                            <Tooltip text={__('Style', 'premium-blocks-for-gutenberg')}>
                                <button className={classnames({ 'premium-active': currentTab === STYLE })} onClick={() => _onTabChange(STYLE)}>
                                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs></defs><title>style-tab</title><g id="Style"><path class="cls-1" d="M2.89,6.84a.93.93,0,0,0,.46-.12,1,1,0,0,0,.37-.32,10,10,0,0,1,2.8-2.77,1,1,0,0,0,.28-.27A.82.82,0,0,0,7,3a1,1,0,0,0,0-.39,1.2,1.2,0,0,0-.15-.37A1,1,0,0,0,6.54,2a1,1,0,0,0-.36-.16,1.27,1.27,0,0,0-.39,0A1.2,1.2,0,0,0,5.42,2,11.94,11.94,0,0,0,2.06,5.28a1,1,0,0,0-.17.5A1,1,0,0,0,2,6.3a1.07,1.07,0,0,0,.37.39A1,1,0,0,0,2.89,6.84Z" transform="translate(0)" /><path class="cls-1" d="M2,12a10,10,0,0,1,.19-2,1,1,0,0,0,0-.39,1.2,1.2,0,0,0-.15-.37A1.07,1.07,0,0,0,1.77,9a1.14,1.14,0,0,0-.36-.15.86.86,0,0,0-.39,0A1.2,1.2,0,0,0,.65,9a1,1,0,0,0-.27.28,1.2,1.2,0,0,0-.15.37,12.14,12.14,0,0,0,0,4.73,1,1,0,0,0,.35.57,1,1,0,0,0,.63.23l.2,0a1,1,0,0,0,.64-.43A1,1,0,0,0,2.2,14,10.05,10.05,0,0,1,2,12Z" transform="translate(0)" /><path class="cls-1" d="M6.53,20.37a9.85,9.85,0,0,1-2.81-2.76,1.07,1.07,0,0,0-.28-.28.93.93,0,0,0-.36-.14,1,1,0,0,0-1,1.54A11.94,11.94,0,0,0,5.43,22a1,1,0,0,0,.75.15,1.06,1.06,0,0,0,.64-.43A1,1,0,0,0,7,21a1,1,0,0,0-.43-.64Z" transform="translate(0)" /><path class="cls-1" d="M12,0A12.17,12.17,0,0,0,9.83.2a1,1,0,0,0-.62.38,1,1,0,0,0-.2.69,1,1,0,0,0,.32.65,1,1,0,0,0,.68.26h.18A10,10,0,0,1,12,2V22a10,10,0,0,1-1.81-.16,1,1,0,0,0-1.17.8,1.05,1.05,0,0,0,.17.75,1,1,0,0,0,.64.41A12.05,12.05,0,0,0,15,23.61a12.23,12.23,0,0,0,4.64-2.39A12,12,0,0,0,12,0Z" transform="translate(0)" /></g></svg>
                                    <h5>{__('Style', 'premium-blocks-for-gutenberg')}</h5>
                                </button>
                            </Tooltip>
                        )
                    }

                    {
                        tabs.indexOf(ADVANCE) > -1 && (
                            <Tooltip text={__('Advanced', 'premium-blocks-for-gutenberg')}>
                                <button className={classnames({ 'premium-active': currentTab === ADVANCE })} onClick={() => _onTabChange(ADVANCE)}>
                                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="21.59" height="24" viewBox="0 0 21.59 24"><defs></defs><title>advanced-tab</title><path id="Advanced" class="cls-1" d="M1.61,18A3,3,0,0,0,5.7,19.1h0l.44-.26A9,9,0,0,0,9,20.49V21a3,3,0,0,0,6,0v-.51a9,9,0,0,0,2.85-1.65l.45.26a3,3,0,0,0,3-5.2l-.45-.26a9.1,9.1,0,0,0,0-3.29l.45-.25a3,3,0,0,0-3-5.2l-.45.25A9.21,9.21,0,0,0,15,3.51V3A3,3,0,0,0,9,3v.51A9,9,0,0,0,6.15,5.16L5.71,4.9a3,3,0,1,0-3,5.2l.44.26a9.1,9.1,0,0,0,0,3.29l-.44.25A3,3,0,0,0,1.61,18ZM12,8a4,4,0,1,1-4,4A4,4,0,0,1,12,8Z" transform="translate(-1.2)" /></svg>
                                    <h5>{__('Advanced', 'premium-blocks-for-gutenberg')}</h5>

                                </button>
                            </Tooltip>
                        )
                    }
                </div>
            </div>
            {
                Array.isArray(children) && Children.map(children, (child, index) => {
                    if (!child.key) {
                        throw new Error('props.key not found in <InspectorTab />, you must use `key` prop');
                        return;
                    }
                    return cloneElement(child, {
                        index,
                        isActive: child.key === currentTab,
                        tabKey: child.key
                    })

                })
            }
        </Fragment>
    )
};

InspectorTabs.defaultProps = {
    defaultTab: null,
    tabs: ['layout', 'style', 'advance']
}

export default InspectorTabs;