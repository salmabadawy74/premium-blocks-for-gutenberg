import { useState } from "@wordpress/element";
import PBG_Block_Icons from "./block-icons";
import AdvancedSwitcher from "./AdvancedSwitcher";
import { store as noticesStore } from "@wordpress/notices";
import { useDispatch, useSelector } from "react-redux";
import { updateblockStatus } from "../features/blocks/index";
import { actions } from "../features/Alert/AlertSlice";

const { Dashicon } = wp.components;
const { __ } = wp.i18n;

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const SingleOption = (props) => {
    const blocks = useSelector((state) => state.blockStates.blocks);

    const [isLoading, setIsLoading] = useState(false);

    let checked = blocks[props.blockInfo] === true ? true : false;
    const dispatch = useDispatch();



    const handleChange = async () => {
        let status = false;

        if (!checked) {
            status = true;
        }

        const optionsClone = { ...blocks };
        optionsClone[props.blockInfo] = status;
        dispatch(updateblockStatus(optionsClone));

        const body = new FormData();

        body.append("action", "pb-panel-update-option");
        body.append("nonce", PremiumBlocksPanelData.nonce);
        body.append("value", JSON.stringify(optionsClone));

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
                          type: "success"
                        })
                      );

                    }
            }
        } catch (e) {
            console.log(e);
            dispatch(
                actions.createAlert({
                  message: __("An unknown error occurred.", ""),
                  type: "error"
                })
              );

        }
    };

    return (
        <div id={props.id} className="pb-option-element">
            <div className="pb-option-element-body">
                <div className="icon">
                    <span className="customize-control-icon pb-control-icon">
                        {PBG_Block_Icons[props.params.icon]}
                    </span>
                </div>

                <div className="pb-block-details">
                    <h2 className="customize-control-title pb-control-title">
                        {props.params.label}
                        {__(" Block", "premium-blocks-for-gutenberg")}
                    </h2>
                    <div className="pb-block-links">
                        <div className="live-preview customize-control-live-preview">
                            <a
                                href={`https://premiumblocks.io/gutenberg-blocks/${props.id}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {__(
                                    "Preview",
                                    "premium-blocks-for-gutenberg"
                                )}
                            </a>
                        </div>
                        <div className="guidelines customize-control-guidelines">
                            <a
                                href={`https://premiumblocks.io/docs/${props.id}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {__(
                                    "Guidelines",
                                    "premium-blocks-for-gutenberg"
                                )}{" "}
                            </a>
                        </div>
                    </div>
                </div>
                {isLoading && <Dashicon className="pb-loading" icon="update" />}
                <div className="option-actions">
                    <AdvancedSwitcher
                        onChange={() => handleChange()}
                        checked={checked}
                    />
                </div>
            </div>
        </div>
    );
};

export default SingleOption;
