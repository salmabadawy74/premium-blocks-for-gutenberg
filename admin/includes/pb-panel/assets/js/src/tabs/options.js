import { Fragment, useState } from "@wordpress/element";
import Container from "../common/Container";
import OptionsComponent from "../options-component";
import classNames from "classnames";
const { __ } = wp.i18n;
const { Dashicon } = wp.components;

const OptionsTab = (props) => {
    const [values, setValues] = useState(props.values);

    const handleChange = (newValues) => {
        setValues(newValues);
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
                <div className="pb-options-header">
                    <nav className="pb-filter-tabs" aria-label="Tabs">
                        {tabs.map((tab) => (
                            <button
                                key={tab.name}
                                className={classNames("pb-filter-tab", {
                                    active: activeFilter === tab.slug,
                                })}
                                onClick={() => setFilter(tab.slug)}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </nav>
                </div>
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
