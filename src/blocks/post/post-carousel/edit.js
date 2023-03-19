import classNames from "classnames";
import Meta from "../post-meta/index";
import Slider from "react-slick";
import Excerpt from "../post-excerpt/index";
import Button from "../post-button/index";
import Image from "../post-image/index"
const { withSelect, useSelect, select } = wp.data;
const { useEffect, Fragment, useMemo } = wp.element;
import { __ } from "@wordpress/i18n";
import { __experimentalUseBlockPreview as useBlockPreview, store as blockEditorStore,useBlockProps } from "@wordpress/block-editor";
import { store as coreStore } from "@wordpress/core-data";
import Inspector from "./inspector";
import PostTitle from "../post-title";
const { Spinner } = wp.components;
const { decodeEntities } = wp.htmlEntities;
import {
    borderCss,
    gradientBackground,
    marginCss,
    paddingCss,
    generateBlockId,
} from "@pbg/helpers";

function edit({ clientId, setAttributes, attributes, deviceType }) {
    useEffect(() => {
        // Set block id.
        setAttributes({
            blockId: "premium-post-carousel-" + generateBlockId(clientId),
        });

    }, []);
    const { query,
        navigationArrow,
        navigationDots,
        centerMode,
        slideToScroll,
        Autoplay,
        autoplaySpeed,
        columns,
        slideSpacing,
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        dotsColor,
        dotsActiveColor,
        arrowColor,
        arrowSize,
        arrowBack,
        arrowBorderRadius,
        arrowPadding,
        pauseOnHover
    } = attributes;
    const { perPage,
        offset = 0,
        postType,
        order,
        orderBy,
        author,
        search,
        exclude,
        sticky,
        inherit,
        taxQuery,
        parents,
        page = 1,
        pages } = query

    const { posts, taxonomies, categoriesList, blocks } = useSelect(
        (select) => {
            const { getEntityRecords, getTaxonomies } = select(coreStore);
            const { getBlocks } = select(blockEditorStore);
            const taxonomies = getTaxonomies({
                type: postType,
                per_page: -1,
                context: "view",
                slug: "category"
            });
            let categoriesList = [];

            categoriesList = getEntityRecords("taxonomy", "category");
            const query = {
                offset: perPage ? perPage * (page - 1) + offset : 0,
                order,
                orderby: orderBy,
            };
            if ( taxQuery && ! inherit) {
				const builtTaxQuery = Object.entries( taxQuery ).reduce(
					( accumulator, [ taxonomySlug, terms ] ) => {
						const taxonomy = taxonomies?.find(
							( { slug } ) => slug === taxonomySlug
						);
						if ( taxonomy?.rest_base ) {
							accumulator[ taxonomy?.rest_base ] = terms;
						}
						return accumulator;
					},
					{}
				);
				if ( !! Object.keys( builtTaxQuery ).length ) {
					Object.assign( query, builtTaxQuery );
				}
			}
            if (perPage) {
                query.per_page = perPage;
            }
            if (author) {
                query.author = author;
            }
            if (search) {
                query.search = search;
            }
            if (sticky) {
                query.sticky = sticky === "exclude";
            }
            if (exclude) {
                query.exclude = exclude;
            }
            const usedPostType = postType;
            return {
                posts: getEntityRecords("postType", usedPostType, {
                    ...query,
                }),
                taxonomies,
                categoriesList,
                blocks: getBlocks(clientId),
            };
        },
        [
            perPage,
            page,
            offset,
            order,
            orderBy,
            clientId,
            author,
            search,
            postType,
            exclude,
            sticky,
            taxQuery,

        ]
    );

    console.log(posts)
    if (!posts) {
        return (
            <p >
                <Spinner />
            </p>
        );
    }

    if (!posts.length) {
        return <p > {__("No Posts To Display")}</p>;
    }
    const updateQuery = (newQuery) =>
        setAttributes({ query: { ...query, ...newQuery } });

    function NextArrow() {
        return (
            <button
                type="button"
                data-role="none"
                className="slick-next slick-arrow"
                aria-label="Next"
                tabIndex="0"
                style={{
                    borderColor: arrowColor,
                    borderRadius: arrowBorderRadius,
                    backgroundColor:arrowBack,
                    padding:arrowPadding
                }}
            >
<svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" ><path d="M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z"/></svg>
            </button>
        );
    }

    function PrevArrow() {
        return (
            <button
                type="button"
                data-role="none"
                className="slick-prev slick-arrow"
                aria-label="Previous"
                tabIndex="0"
                style={{
                    borderColor: arrowColor,
                    borderRadius: arrowBorderRadius,
                    backgroundColor:arrowBack,
                    padding:arrowPadding
                                }}
            >
<svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" ><path d="M17.921,1.505a1.5,1.5,0,0,1-.44,1.06L9.809,10.237a2.5,2.5,0,0,0,0,3.536l7.662,7.662a1.5,1.5,0,0,1-2.121,2.121L7.688,15.9a5.506,5.506,0,0,1,0-7.779L15.36.444a1.5,1.5,0,0,1,2.561,1.061Z"/></svg>
            </button>
        );
    }
    const settings = {
        arrows: navigationArrow,
        dots: navigationDots,
        centerMode: centerMode,
        centerPadding: slideSpacing,
        slideToScroll: slideToScroll,
        infinite: true,
        autoplay: Autoplay,
        speed: autoplaySpeed,
        slidesToShow: columns[deviceType],
        centerPadding: slideSpacing + "px",
        draggable: true,
		pauseOnHover,

        nextArrow: <NextArrow  arrowSize={arrowSize} />,
        prevArrow: <PrevArrow  arrowSize={arrowSize} />,
    };
    console.log(query);
    return (<Fragment>
        <Inspector
            attributes={attributes}
            setQuery={updateQuery}
            setAttributes={setAttributes}
        />
        <div
    className={    classNames(blockId,'premium-blog premium-blog-carousel',{
        
            " premium-desktop-hidden": hideDesktop,
            " premium-tablet-hidden": hideTablet,
            " premium-mobile-hidden": hideMobile,


})
}>
            <Slider className={'premium-blog-wrap premium-blog-even'}{...settings}>
                {posts.map((post, i) => (
                    <div className={`premium-blog-post-outer-container`} key={i}>
                        <div
                            className={`premium-blog-post-container`}
                            style={{
                                marginRight: `${slideSpacing}px`,
                                marginLeft: `${slideSpacing}px`,
                            }}
                        >
                            <Image post={post} attributes={attributes} />
                            <div className={`premium-blog-content-wrapper empty-thumb`}>
                                <div className={`premium-blog-content-wrapper-inner`}>
                                    <div className={`premium-blog-inner-container`}>
                                        <div className="premium-blog-entry-container">
                                            <PostTitle
                                                post={post}
                                                attributes={attributes}
                                            />
                                            <Meta
                                                post={post}
                                                categoriesList={categoriesList}
                                                attributes={attributes}
                                            />
                                        </div>
                                    </div>
                                    <Excerpt attributes={attributes} post={post} />
                                    <Button attributes={attributes} post={post} />

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </Fragment>
    )
}

export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        // Editor preview device.
        deviceType: deviceType
    }
})(edit)