import React from 'react'
const { dateI18n, format, __experimentalGetSettings } = wp.date;
function Meta(props) {
    const { post, attributes, categoriesList } = props;

    const dateFormat = __experimentalGetSettings().formats.date;
    const list = categoriesList;
    const cat = post.categories;
    const categoriesName = [];

    if (list && list !== undefined && cat !== undefined) {
        for (let j = 0; j < list.length; j++) {
            for (let i = 0; i < cat.length; i++) {
                if (list[j].id === cat[i]) {
                    categoriesName.push(list[j].name);
                }
            }
        }
    }

    return (
        <div className="premium-blog-entry-meta">
            {attributes.showAuthor && undefined !== post.uagb_author_info && (
                <div className="premium-blog-post-author premium-blog-meta-data">
                    <span>
                        {" "}
                        <svg
                            width="800px"
                            height="800px"
                            viewBox="0 0 25 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18 18.7023C18 15.6706 14.5 15 12 15C9.5 15 6 15.6706 6 18.7023M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z"
                                stroke="#000000"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        {post.uagb_author_info.display_name}
                    </span>
                    <span className={`premium-blog-meta-separtor`}>•</span>
                </div>
            )}
            {attributes.showDate && (
                <div
                    className={`premium-blog-post-time premium-blog-meta-data`}
                >
                    <svg
                        width="800px"
                        height="800px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20 11H4M20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V11ZM15 3V7M9 3V7"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    {dateI18n(dateFormat, post.date_gmt)}
                    <span className={`premium-blog-meta-separtor`}>•</span>
                </div>
            )}
            {attributes.showCategories && "" !== categoriesName && (
                <div
                    className={`premium-blog-post-categories premium-blog-meta-data`}
                >
                    <svg
                        fill="#000000"
                        width="800px"
                        height="800px"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M.5 9h9.75v1.25H.5zm0-3.25h15V7H.5zm0 6.5h15v1.25H.5zm0-9.75h9.75v1.25H.5z" />
                    </svg>{" "}
                    <div
                        dangerouslySetInnerHTML={{
                            __html: categoriesName.join(', '),
                        }}
                    ></div>
                    <span className={`premium-blog-meta-separtor`}>• </span>
                </div>
            )}
            {attributes.showComments && undefined !== post.uagb_comment_info && (
                <div
                    className={`premium-blog-post-comments premium-blog-meta-data`}
                >
                    <svg
                        width="800px"
                        height="800px"
                        viewBox="0 0 24 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_429_11233)">
                            <path
                                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.4876 3.36093 14.891 4 16.1272L3 21L7.8728 20C9.10904 20.6391 10.5124 21 12 21Z"
                                stroke="#292929"
                                stroke-width="2.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_429_11233">
                                <rect
                                    width="24"
                                    height="24"
                                    fill="white"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                    {post.uagb_comment_info}
                </div>
            )}
        </div>
    )
}

export default Meta