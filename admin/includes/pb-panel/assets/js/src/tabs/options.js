import { Fragment, useEffect, useState } from "@wordpress/element";
import { CheckboxControl } from "@wordpress/components";
import Container from "../common/Container";
import OptionsComponent from "../options-component";

const { __ } = wp.i18n;
const { Dashicon } = wp.components;
import apiFetch from "@wordpress/api-fetch";
const OptionsTab = (props) => {
    let [values, setValues] = useState(PremiumBlocksPanelData.values);
    const [isChecked, setChecked] = useState(false);

    const handleChange = (newValues) => {
        setValues(newValues);
    };
    useEffect(() => {
        let newValue = { ...values };
        if (isChecked) {
            for (let block in newValue) {
                newValue[block] = false;
            }
            const formData = new window.FormData();

            formData.append("action", "pb-panel-update-options");
            formData.append("nonce", PremiumBlocksPanelData.nonce);
            formData.append("values", JSON.stringify(newValue));

            apiFetch({
                url: PremiumBlocksPanelData.ajaxurl,
                method: "POST",
                body: formData,
            }).then(() => {
                setValues(newValue);
            });
        }
    }, [values]);

    const handleDeactivated = (val) => {
        setChecked(val);
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
                <CheckboxControl
                    label="Activate All Blocks"
                    checked={isChecked}
                    onChange={(val) => handleDeactivated(val)}
                />
                <div className="advanced-options options-section">
                    <OptionsComponent
                        options={options}
                        values={values}
                        onChange={(newVal, optionId) => {
                            handleChange(newVal, optionId);
                        }}
                    />
                </div>
            </Container>
        </Fragment>
    );
};

export default OptionsTab;
