import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { updateblockStatus, ActivateBlocks } from "../../features/blocks/index";

const FilterTabs = () => {
    const query = new URLSearchParams(useLocation()?.search);
    const dispatch = useDispatch();

    const blocksStatuses = useSelector((state) => state.blockStates.blocks);
    const activeBlocksFilterTab = useSelector(
        (state) => state.blockStates.blockFilter
    );
    const tabs = [
        { name: "All", slug: "all" },
        { name: "Core", slug: "core" },
        { name: "Creative", slug: "creative" },
        { name: "Content", slug: "content" },
        { name: "Post", slug: "post" },
        { name: "Social", slug: "social" },
        { name: "Form", slug: "form" },
        { name: "SEO", slug: "seo" },
        { name: "Extensions", slug: "extensions" },
    ];

    useEffect(() => {
        // Activate Block Filter Tab from "filterTab" Hash in the URl is present.
        const activePath = query.get("path");
        const activeHash = query.get("filterTab");
        const activeFilterTabFromHash =
            activeHash && "blocks" === activePath ? activeHash : "all";

        dispatch({
            type: "blockStatues/updateBlocksFilter",
            payload: activeFilterTabFromHash,
        });
    }, []);

    const EnableBlocks = async () => {
        const activeBlocks = { ...blocksStatuses };
        for (const block in blocksStatuses) {
            activeBlocks[block] = true;
        }

        dispatch(updateblockStatus(activeBlocks));

        const body = new FormData();
        body.append("action", "pb-panel-update-option");
        body.append("nonce", PremiumBlocksPanelData.nonce);
        body.append("value", JSON.stringify(activeBlocks));

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

    const DisableBlocks = async () => {
        const unactiveBlocks = { ...blocksStatuses };
        for (const key in blocksStatuses) {
            unactiveBlocks[key] = false;
        }
        dispatch(updateblockStatus(unactiveBlocks));
        const body = new FormData();

        body.append("action", "pb-panel-update-option");
        body.append("nonce", PremiumBlocksPanelData.nonce);
        body.append("value", JSON.stringify(unactiveBlocks));

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
    return (
        <nav className="pb-filter-tabs" aria-label="Tabs">
            {tabs.map((tab) => (
                <Link
                    to={{
                        search: `?page=pb_panel&path=blocks&filterTab=${tab.slug}`,
                    }}
                    key={tab.name}
                    className={classNames("pb-filter-tab", {
                        active: activeBlocksFilterTab === tab.slug,
                    })}
                    onClick={() => {
                        dispatch({
                            type: "blockStatues/updateBlocksFilter",
                            payload: tab.slug,
                        });
                    }}
                >
                    {tab.name}
                </Link>
            ))}
            <button onClick={EnableBlocks}>Activate Blocks</button>
            <button onClick={DisableBlocks}>Deactivate Blocks</button>
        </nav>
    );
};

export default FilterTabs;
