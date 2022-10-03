import { Fragment, useState } from "@wordpress/element";
import Container from "../common/Container";
import OptionsComponent from "../options-component";
import classNames from "classnames";
const { __ } = wp.i18n;
// import { useDispatchd as dispatchWordpress } from "@wordpress/data";
import { updateblockStatus } from "../features/blocks/index";

import { store as noticesStore } from "@wordpress/notices";
import { useDispatch, useSelector } from "react-redux";

const OptionsTab = (props) => {
    const blocks = useSelector((state) => state.blockStates.blocks);
    const dispatch = useDispatch();
    // const { createNotice } = useDispatch(noticesStore);
    const handleChange = async (newValues, id) => {
        let newItems = { ...blocks };
        newItems[id] = newValues;
        dispatch(updateblockStatus.updateblockStatus(newItems));

        const body = new FormData();

        body.append("action", "pb-panel-update-option");
        body.append("nonce", PremiumBlocksPanelData.nonce);
        body.append("value", JSON.stringify(newItems));

        try {
            const response = await fetch(PremiumBlocksPanelData.ajaxurl, {
                method: "POST",
                body,
            });
            if (response.status === 200) {
                const { success, data } = await response.json();
                if (success && data.values) {
                    // createNotice("success", "Settings saved ", {
                    //     isDismissible: true,
                    //     type: "snackbar",
                    // });
                }
            }
        } catch (e) {
            console.log(e);
            // createNotice("error", __("An unknown error occurred.", ""), {
            //     isDismissible: true,
            //     type: "snackbar",
            // });
        }
    };

    const ActivateBlocks = () => {
        const blockStates = { ...blocks };
        for (const key in blocks) {
            blockStates[key] = true;
            console.log(key);
        }
        dispatch(updateblockStatus.updateblockStatus(blockStates));
        console.log(blockStates, blocks);
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
                        <button onClick={() => ActivateBlocks()}>
                            Activate Blocks
                        </button>
                    </nav>
                </div>
                <div className="pb-options options-section">
                    <OptionsComponent
                        options={options}
                        values={blocks}
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
