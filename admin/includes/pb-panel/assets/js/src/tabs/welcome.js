import Card from "../common/Card";
import Container from "../common/Container";
import { __experimentalGrid as Grid } from "@wordpress/components";
import { useDispatch } from "react-redux";
import { actions } from "../features/Alert/AlertSlice";

const { __ } = wp.i18n;
const { Dashicon } = wp.components;
const iconArrow = (
    <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        width="19.5"
        height="19.5"
        viewBox="0 0 19.5 19.5"
    >
        <defs></defs>
        <path
            class="cls-1"
            d="M3.35,9A7.51,7.51,0,0,1,9,3.35a13.37,13.37,0,0,1,6.1,0A7.51,7.51,0,0,1,20.65,9a13.37,13.37,0,0,1,0,6.1,7.51,7.51,0,0,1-5.6,5.6,13.37,13.37,0,0,1-6.1,0,7.51,7.51,0,0,1-5.6-5.6A13.37,13.37,0,0,1,3.35,9Z"
            transform="translate(-2.25 -2.25)"
        />
        <path
            class="cls-2"
            d="M11,9.5,13.5,12,11,14.5"
            transform="translate(-2.25 -2.25)"
        />
    </svg>
);
import { useState } from "@wordpress/element";

const Support = () => {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const submitHandler = async () => {
        if (isLoading) {
            return;
        }
        setIsLoading(true);
        if (!checkEmail(email)) {
            actions.createAlert({
                message: __(
                    "Invalid Email Address...",
                    "premium-blocks-for-gutenberg"
                ),
                type: "error",
            });

            setIsLoading(false);
            return;
        }

        const body = new FormData();
        body.append("action", "pb-mail-subscribe");
        body.append("nonce", PremiumBlocksPanelData.nonce);
        body.append("email", email);

        try {
            const response = await fetch(PremiumBlocksPanelData.ajaxurl, {
                method: "POST",
                body,
            });

            if (response.status === 200) {
                const {
                    success,
                    data: { status },
                } = await response.json();
                if (success && status) {
                    dispatch(
                        actions.createAlert({
                            message: __(
                                "Thanks for your subscribe!",
                                "premium-blocks-for-gutenberg"
                            ),

                            type: "success",
                        })
                    );

                    setEmail("");
                } else {
                    dispatch(
                        actions.createAlert({
                            message: __(
                                "Invalid Email Address...",
                                "premium-blocks-for-gutenberg"
                            ),
                            type: "error",
                        })
                    );
                }
            }
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    };

    const checkEmail = (emailAddress) => {
        var pattern = new RegExp(
            /^((“[\w-+\s]+“)|([\w-+]+(?:\.[\w-+]+)*)|(“[\w-+\s]+“)([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i
        );
        return pattern.test(emailAddress);
    };

    const loadingClass = isLoading ? " loading" : "";
    return (
        <Container>
            <Grid columns={2} gap={8} className="pb-support">
                <div className="pb-support">
                    <Card>
                        <div className="pb-card-icon">
                            <span className="icon">
                                <svg
                                    width="35"
                                    height="35"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g id="Iconly/Curved/3 User">
                                        <g id="3 User">
                                            <path
                                                id="Stroke 1"
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M11.9724 20.3683C8.73343 20.3683 5.96643 19.8783 5.96643 17.9163C5.96643 15.9543 8.71543 14.2463 11.9724 14.2463C15.2114 14.2463 17.9784 15.9383 17.9784 17.8993C17.9784 19.8603 15.2294 20.3683 11.9724 20.3683Z"
                                                stroke="#638d20"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                id="Stroke 3"
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M11.9725 11.4488C14.0985 11.4488 15.8225 9.72576 15.8225 7.59976C15.8225 5.47376 14.0985 3.74976 11.9725 3.74976C9.84645 3.74976 8.12245 5.47376 8.12245 7.59976C8.11645 9.71776 9.82645 11.4418 11.9455 11.4488H11.9725Z"
                                                stroke="#638d20"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                id="Stroke 5"
                                                d="M18.3622 10.3915C19.5992 10.0605 20.5112 8.93254 20.5112 7.58954C20.5112 6.18854 19.5182 5.01854 18.1962 4.74854"
                                                stroke="#638d20"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                id="Stroke 7"
                                                d="M18.9431 13.5444C20.6971 13.5444 22.1951 14.7334 22.1951 15.7954C22.1951 16.4204 21.6781 17.1014 20.8941 17.2854"
                                                stroke="#638d20"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                id="Stroke 9"
                                                d="M5.58372 10.3915C4.34572 10.0605 3.43372 8.93254 3.43372 7.58954C3.43372 6.18854 4.42772 5.01854 5.74872 4.74854"
                                                stroke="#638d20"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                id="Stroke 11"
                                                d="M5.00176 13.5444C3.24776 13.5444 1.74976 14.7334 1.74976 15.7954C1.74976 16.4204 2.26676 17.1014 3.05176 17.2854"
                                                stroke="#638d20"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </span>
                        </div>
                        <div className="pb-card-body">
                            <h2>
                                {__(
                                    "Join The Community",
                                    "premium-blocks-for-gutenberg"
                                )}
                            </h2>
                            <p>
                                {__(
                                    "Join our Facebook group and be part of the community. Collaborate, interact, and suggest! You and your thoughts are more than welcome.",
                                    "premium-blocks-for-gutenberg"
                                )}
                            </p>
                        </div>
                        <div className="pb-card-action">
                            <a
                                target="_blank"
                                href="https://www.facebook.com/groups/2339461846127319"
                            >
                                {iconArrow}
                            </a>
                        </div>
                    </Card>
                    <Card>
                        <div className="pb-card-icon">
                            <span className="icon">
                                <svg
                                    width="35"
                                    height="35"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g id="Iconly/Curved/Paper">
                                        <g id="Paper">
                                            <path
                                                id="Stroke 3"
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M20.1598 8.3L14.4898 2.9C13.7598 2.8 12.9398 2.75 12.0398 2.75C5.74978 2.75 3.64978 5.07 3.64978 12C3.64978 18.94 5.74978 21.25 12.0398 21.25C18.3398 21.25 20.4398 18.94 20.4398 12C20.4398 10.58 20.3498 9.35 20.1598 8.3Z"
                                                stroke="#638d20"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                id="Stroke 5"
                                                d="M13.9342 2.83276V5.49376C13.9342 7.35176 15.4402 8.85676 17.2982 8.85676H20.2492"
                                                stroke="#638d20"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                id="Stroke 1"
                                                d="M14.3053 15.45H8.90527"
                                                stroke="#638d20"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                id="Stroke 2"
                                                d="M12.2604 11.4387H8.90442"
                                                stroke="#638d20"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </span>
                        </div>
                        <div className="pb-card-body">
                            <h2>
                                {__(
                                    "Learn How to Use Premium Blocks",
                                    "premium-blocks-for-gutenberg"
                                )}
                            </h2>
                            <p>
                                {__(
                                    "Take a step forward to Premium Blocks for Gutenberg. Get started now by visiting the plugin’s knowledge base. ",
                                    "premium-blocks-for-gutenberg"
                                )}
                            </p>
                        </div>
                        <div className="pb-card-action">
                            <a
                                target="_blank"
                                href="https://premiumblocks.io/docs/"
                            >
                                {iconArrow}
                            </a>
                        </div>
                    </Card>
                    <Card>
                        <div className="pb-card-icon">
                            <span className="icon">
                                <svg
                                    width="35"
                                    height="35"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g id="Iconly/Curved/Ticket Star">
                                        <g id="Ticket Star">
                                            <path
                                                id="Stroke 1"
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M21.4399 13.9939C18.7789 13.9939 18.7789 9.87952 21.4399 9.87952C21.4399 5.11236 21.4399 3.41089 12.0449 3.41089C2.6499 3.41089 2.6499 5.11236 2.6499 9.87952C5.3109 9.87952 5.3109 13.9939 2.6499 13.9939C2.6499 18.762 2.6499 20.4635 12.0449 20.4635C21.4399 20.4635 21.4399 18.762 21.4399 13.9939Z"
                                                stroke="#638d20"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                id="Stroke 3"
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12.0449 9.17114C11.3619 9.17114 11.2969 10.2606 10.8909 10.6462C10.4839 11.0308 9.22087 10.5912 9.04487 11.2743C8.86987 11.9583 10.0069 12.1904 10.1479 12.7768C10.2879 13.3632 9.59387 14.1875 10.1869 14.5986C10.7809 15.0079 11.4199 14.0804 12.0449 14.0804C12.6699 14.0804 13.3089 15.0079 13.9029 14.5986C14.4969 14.1875 13.8019 13.3632 13.9419 12.7768C14.0829 12.1904 15.2199 11.9583 15.0449 11.2743C14.8689 10.5912 13.6059 11.0308 13.1989 10.6462C12.7929 10.2606 12.7279 9.17114 12.0449 9.17114Z"
                                                stroke="#638d20"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </span>
                        </div>
                        <div className="pb-card-body">
                            <h2>
                                {__(
                                    "Need Help? Open a Support Ticket",
                                    "premium-blocks-for-gutenberg"
                                )}
                            </h2>
                            <p>
                                {__(
                                    "Premium Blocks support team is always here to help, open a support ticket with your inquiry and you will get an answer shortly!",
                                    "premium-blocks-for-gutenberg"
                                )}
                            </p>
                        </div>
                        <div className="pb-card-action">
                            <a
                                target="_blank"
                                href="https://my.leap13.com/contact-support"
                            >
                                {iconArrow}
                            </a>
                        </div>
                    </Card>
                </div>
                <div className="pb-Subscribe">
                    <Card className="right-card">
                        <div className="pb-card-icon">
                            <span className="icon">
                                <svg
                                    width="35"
                                    height="35"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g id="Iconly/Curved/Work">
                                        <g id="Work">
                                            <path
                                                id="Stroke 4"
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M2.75024 13.3507C2.75024 7.19871 5.05324 5.14771 11.9612 5.14771C18.8702 5.14771 21.1722 7.19871 21.1722 13.3507C21.1722 19.5027 18.8702 21.5537 11.9612 21.5537C5.05324 21.5537 2.75024 19.5027 2.75024 13.3507Z"
                                                stroke="#638d20"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                id="Stroke 6"
                                                d="M15.2239 5.3692V4.7392C15.2239 3.4752 14.3009 2.4502 13.1639 2.4502H10.7589C9.62185 2.4502 8.69885 3.4752 8.69885 4.7392V5.3692"
                                                stroke="#638d20"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                id="Stroke 1"
                                                d="M11.9612 16.5167V13.8887"
                                                stroke="#638d20"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                id="Stroke 2"
                                                d="M21.0895 11.4775L21.0605 11.4985C18.6385 12.9905 15.4405 13.8915 11.9565 13.8915C8.47252 13.8915 5.28352 12.9905 2.86252 11.4985L2.83252 11.4775"
                                                stroke="#638d20"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </span>
                        </div>
                        <div className="pb-card-body">
                            <h2>
                                {__(
                                    "Subscribe to Premium Blocks Newsletter",
                                    "premium-blocks-for-gutenberg"
                                )}
                            </h2>
                            <p>
                                {__(
                                    "Sign up to Premium Blocks newsletter and be the first to receive the latest updates, features, and news right under your footsteps!",
                                    "premium-blocks-for-gutenberg"
                                )}
                            </p>
                        </div>
                        <div className="pb-card-action pb-subscribe">
                            <div className="subscribe-form">
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    readOnly={isLoading}
                                    placeholder="your email address"
                                />
                                <br />
                                <button
                                    className={`pb-button secondary primary${loadingClass}`}
                                    onClick={submitHandler}
                                    disabled={isLoading}
                                >
                                    {__(
                                        "Submit",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                </button>
                            </div>
                        </div>
                    </Card>
                </div>
            </Grid>
        </Container>
    );
};

export default Support;
