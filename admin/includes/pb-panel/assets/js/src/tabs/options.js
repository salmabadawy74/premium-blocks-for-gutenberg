import { Fragment, useState } from "@wordpress/element";
import { CheckboxControl } from '@wordpress/components';
import Container from "../common/Container";
import OptionsComponent from '../options-component'

const { __ } = wp.i18n;
const { Dashicon } = wp.components;

const OptionsTab = (props) => {
    const [values, setValues] = useState(props.values);
    const [isChecked, setChecked] = useState(false);

    const handleChange = (newValues) => {
        setValues(newValues)
    };

    const handleDeactivated = async (val) => {
        let newValue = { ...values };

        if (val) {
            for (let block in newValue) {
                newValue[block] = false;


            }
            const body = new FormData()
            body.append('action', 'pb-panel-update-option')
            body.append('nonce', PremiumBlocksPanelData.nonce)
            body.append('value', JSON.stringify(newValue));

            try {
                const response = await fetch(PremiumBlocksPanelData.ajaxurl, {
                    method: 'POST',
                    body,
                })
                if (response.status === 200) {
                    const { success, data } = await response.json()

                    if (success && data.values) {
                        setValues(newValue);
                    }

                }
            } catch (e) {
                console.log(e);

            }

        }
        setChecked(val)

    }

    const tabs = [
        { name: 'All', slug: 'all' },
        { name: 'Core', slug: 'core' },
        { name: 'Creative', slug: 'creative' },
        { name: 'Content', slug: 'content' },
        { name: 'Post', slug: 'post' },
        { name: 'Social', slug: 'social' },
        { name: 'Form', slug: 'form' },
        { name: 'SEO', slug: 'seo' },

    ];
    const [activeFilter, setFilter] = useState("all");
    let options = Object.keys(props.options)
        .filter((key) => props.options[key].category.includes(activeFilter))
        .reduce((obj, key) => {
            return Object.assign(obj, {
                [key]: props.options[key]
            });
        }, {});


    return <Fragment>
        <Container>
            <div className="pb-options-header">
                <nav className="pb-filter-tabs" aria-label="Tabs">
                    {tabs.map((tab) => (
                        <button

                            key={tab.name}
                            className={`pb-filter-tab`}
                            onClick={() => setFilter(tab.slug)}
                        >
                            {tab.name}
                        </button>
                    ))}
                </nav>
            <CheckboxControl
                label="Activate All Blocks"
                checked={isChecked}
                onChange={(val) => handleDeactivated(val)}
            />
            </div>
            <div className='advanced-options options-section'>
                <OptionsComponent options={options} values={values} onChange={(newVal, optionId) => {
                    handleChange(newVal, optionId)
                }} />
            </div>
        </Container>
    </Fragment>
}


export default OptionsTab;