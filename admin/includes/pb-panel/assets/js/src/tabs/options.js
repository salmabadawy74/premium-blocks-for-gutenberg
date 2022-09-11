import { Fragment, useEffect, useState } from "@wordpress/element";
import { CheckboxControl, Dashicon } from "@wordpress/components";
import Container from "../common/Container";
import OptionsComponent from "../options-component";
import { send as ajaxSend } from '@wordpress/ajax'

import apiFetch from "@wordpress/api-fetch";
const OptionsTab = (props) => {
    const [values, setValues] = useState(props.values);
    const [isChecked, setChecked] = useState(false);
    const [loading, setIsLoading] = useState(false)
    const [enabledBlock, setEnabled] = useState({})
    let ajaxTimeout = null;

    useEffect(() => {
        clearTimeout(ajaxTimeout)
        ajaxTimeout = setTimeout(() => {
            ajaxSend('pb-panel-update-option', {
                success: () => {
                    setIsLoading(true)
                },
                error: () => {
                    setIsLoading(false)
                },
                data: {

                    values: this.state.disabledBlocks,
                },
            })
            setIsLoading(true)
        }, 600)
    }, [enabledBlock])
    const handleChange = (newValues) => {

        setValues(newValues);

    };

    const handleDeactivated = () => {
        setIsLoading(true)

        const formData = new window.FormData();

        formData.append("action", "pb-panel-update-option");
        formData.append("nonce", PremiumBlocksPanelData.nonce);
        formData.append("value", true);

        apiFetch({
            url: PremiumBlocksPanelData.ajaxurl,
            method: "POST",
            body: formData,
        }).then((response) => {
            handleChange(response.data.values)
            setEnabled(response.data.values)
            setIsLoading(false)

        });

        setChecked(true)
    };

    const tabs = [
        { name: "All", slug: "all" },
        { name: "Core", slug: "core" },
        { name: "Creative", slug: "creative" },
        { name: "Content", slug: "content" },
        { name: "Post", slug: "post" },
        { name: "Social", slug: "social" },
        { name: "Form", slug: "form" },
        { name: "SEO", slug: "seo" },
    ];

    const [activeFilter, setFilter] = useState("all");
    let options = Object.keys(props.options)
        .filter((key) => props.options[key].category.includes(activeFilter))
        .reduce((obj, key) => {
            return Object.assign(obj, {
                [key]: props.options[key],
            });
        }, {});
    console.log(enabledBlock)
    return (
        <Fragment>
            <Container>
                <div className=" justify-between items-center space-y-4 sm:flex sm:flex-col lg:space-y-0 lg:flex-row">
                    <nav
                        className="flex -ml-4 flex-wrap justify-center lg:justify-start"
                        aria-label="Tabs"
                    >
                        {tabs.map((tab) => (
                            <button
                                key={tab.name}
                                className={``}
                                onClick={() => setFilter(tab.slug)}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </nav>
                </div>
                <button onClick={(e) => {
                    e.preventDefault();
                    handleDeactivated()
                }}>Activate All blocks</button
                >
                {loading && <Dashicon className="pb-loading" icon="update" />}

                <div className="advanced-options options-section">
                    {!loading ? <OptionsComponent
                        options={options}
                        values={enabledBlock}
                        onChange={(newitems) => {
                            handleChange(newitems);
                        }}
                        isChecked={isChecked}
                    /> : <OptionsComponent
                        options={options}
                        values={values}
                        onChange={(newitems) => {
                            handleChange(newitems);
                        }}
                        isChecked={isChecked}
                    />
                    }
                </div>
            </Container>
        </Fragment>
    );
};

export default OptionsTab;
