import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { updateblockStatus, ActivateBlocks } from "../../features/blocks/index";
import { isArray } from "lodash";
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
                    // createNotice("success", "Settings saved ", {
                    //     isDismissible: true,
                    //     type: "snackbar",
                    // });
                    dispatch(
                        actions.createAlert({
                          message: "Settings saved.",
                          type: "success"
                        })
                      );
                }
            }
        } catch (e) {
            console.log(e);
            dispatch(
                actions.createAlert({
                  message: "An unknown error occurred.",
                  type: "error"
                })
              );
        }
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
                          message: "Settings saved.",
                          type: "success"
                        })
                      );
                }
            }
        } catch (e) {
            console.log(e);
            dispatch(
                actions.createAlert({
                  message: "An unknown error occurred.",
                  type: "error"
                })
              );
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
