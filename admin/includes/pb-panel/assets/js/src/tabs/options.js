import { Fragment, useState, useEffect } from "@wordpress/element";
import Container from "../common/Container";
import OptionsComponent from "../options-component";
import classNames from "classnames";
const { __ } = wp.i18n;
// import { useDispatchd as dispatchWordpress } from "@wordpress/data";
import { updateblockStatus, ActivateBlocks } from "../features/blocks/index";

import { store as noticesStore } from "@wordpress/notices";
import { useDispatch, useSelector } from "react-redux";
import FilterTabs from "./Blocks/filterTabs";

const OptionsTab = (props) => {
    const blocks = useSelector((state) => state.blockStates.blocks);
    const dispatch = useDispatch();
    const activeBlocksFilterTab = useSelector(
        (state) => state.blockStates.blockFilter
    );
    useEffect(() => {}, [blocks]);

    // const { createNotice } = useDispatch(noticesStore);
    const handleChange = async (newValues, id) => {
        const newItems = { ...blocks };
        newItems[id] = newValues;
        dispatch(updateblockStatus(newItems));

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

    let options = Object.keys(props.options)
        .filter((key) =>
            props.options[key].category.includes(activeBlocksFilterTab)
        )
        .reduce((obj, key) => {
            return Object.assign(obj, {
                [key]: props.options[key],
            });
        }, {});

    return (
        <Fragment>
            <Container>
                <div className="pb-options-header">
                    <FilterTabs />
                </div>
                <div className="pb-options options-section">
                    <OptionsComponent options={options} />
                </div>
            </Container>
        </Fragment>
    );
};

export default OptionsTab;
