import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { updateblockStatus, ActivateBlocks } from "../../features/blocks/index";
import { isArray } from "lodash";
import { __ } from "@wordpress/i18n";
import { actions } from "../../features/Alert/AlertSlice";

const FilterTabs = () => {
    const query = new URLSearchParams(useLocation()?.search);
    const dispatch = useDispatch();

    const blocksStatuses = useSelector((state) => state.blockStates.blocks);
    const activeBlocksFilterTab = useSelector(
        (state) => state.blockStates.blockFilter
    );
    const [categoriesBlocks, setcategoriesBlocks] = useState([]);
    const blocksInfo = PremiumBlocksPanelData.options;
    const tabs = [
        { name: "All", slug: "all" },
        { name: "Content", slug: "content" },
        { name: "Creative", slug: "creative" },
        { name: "Section", slug: "section" },
        { name: "Marketing", slug: "marketing" },
        { name: "Theme", slug: "theme" },
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
        const categoriesBlocksTemp = {
            ...categoriesBlocks,
        };
        Object.entries(blocksInfo).map(([key, block]) => {
            const blockCategories = block.category;
            blockCategories?.map((category) => {
                if (!categoriesBlocksTemp[category]) {
                    categoriesBlocksTemp[category] = [];
                }

                categoriesBlocksTemp[category].push(key);

                return category;
            });

            return block;
        });

        setcategoriesBlocks(categoriesBlocksTemp);
    }, []);

    const EnableBlocks = async () => {
        const activeBlocks = { ...blocksStatuses };
        for (const block in blocksStatuses) {
            if (
                "all" !== activeBlocksFilterTab &&
                (!categoriesBlocks[activeBlocksFilterTab] ||
                    !categoriesBlocks[activeBlocksFilterTab].includes(block))
            ) {
                continue;
            }
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
                    dispatch(
                        actions.createAlert({
                            message: __("Settings saved.", "premium-blocks-for-gutenberg"),
                            type: "success",
                        })
                    );
                }
            }
        } catch (e) {
            console.log(e);
            dispatch(
                actions.createAlert({
                    message: "An unknown error occurred.",
                    type: "error",
                })
            );
        }
        console.log(categoriesBlocks);
    };

    const DisableBlocks = async () => {
        const unactiveBlocks = { ...blocksStatuses };
        for (const key in blocksStatuses) {
            if (
                "all" !== activeBlocksFilterTab &&
                (!categoriesBlocks[activeBlocksFilterTab] ||
                    !categoriesBlocks[activeBlocksFilterTab].includes(key))
            ) {
                continue;
            }

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
                    dispatch(
                        actions.createAlert({
                            message: __("Settings saved.", "premium-blocks-for-gutenberg"),
                            type: "success",
                        })
                    );
                }
            }
        } catch (e) {
            console.log(e);
            dispatch(
                actions.createAlert({
                    message: "An unknown error occurred.",
                    type: "error",
                })
            );
        }
    };
    return (
        <>
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
            </nav>
            <div class="pb-activate-deactivate-buttons">
                <button className="activate-blocks" onClick={EnableBlocks}>
                    {__("Activate All", "premium-blocks-for-gutenberg")}
                </button>
                <button className="deactivate-blocks" onClick={DisableBlocks}>
                    {__("Deactivate All", "premium-blocks-for-gutenberg")}
                </button>
            </div>
        </>
    );
};

export default FilterTabs;
