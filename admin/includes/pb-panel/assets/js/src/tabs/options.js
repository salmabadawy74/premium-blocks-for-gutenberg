import { Fragment, useState, useEffect } from "@wordpress/element";
import Container from "../common/Container";
import OptionsComponent from "../options-component";
const { __ } = wp.i18n;

import { useDispatch, useSelector } from "react-redux";
import FilterTabs from "./Blocks/filterTabs";

const OptionsTab = (props) => {
    const blocks = useSelector((state) => state.blockStates.blocks);
    const dispatch = useDispatch();
    const activeBlocksFilterTab = useSelector(
        (state) => state.blockStates.blockFilter
    );
    useEffect(() => {}, [blocks]);

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
