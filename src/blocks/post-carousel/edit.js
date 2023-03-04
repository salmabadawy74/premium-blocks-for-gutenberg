import { useSelect, useDispatch } from "@wordpress/data";
import {
    generateBlockId,
    gradientBackground,
    typographyCss,
    paddingCss,
    marginCss,
    borderCss,
} from "@pbg/helpers";
import Slider from "react-slick";
const { __ } = wp.i18n;
const { withSelect } = wp.data;
const { useEffect, Fragment } = wp.element;
import Inspector from "./inspector";
// import Inspector from "./inspector";
import {
    useBlockProps,
    store as blockEditorStore,
    useInnerBlocksProps,
} from "@wordpress/block-editor";
import { useInstanceId } from "@wordpress/compose";
/**
 * Internal dependencies
 */
const DEFAULTS_POSTS_PER_PAGE = 3;

const TEMPLATE = [["premium/post-template"]];
function PostCarousel({ attributes, setAttributes, deviceType }) {
    const {
        queryId,
        query,
        columns,
        align,
        blogContainerBackground,
        blogBorder,
        blogBoxShadow,
        blogPadding,
        blogMargin,
        equalHeight,
    } = attributes;
    const equalHeightClass = equalHeight ? "premium-post__equal-height" : "";

    const { __unstableMarkNextChangeAsNotPersistent } =
        useDispatch(blockEditorStore);
    const instanceId = useInstanceId(PostCarousel);
    const blockProps = useBlockProps({
        className: `${align} ${equalHeightClass}`,
    });
    const innerBlocksProps = useInnerBlocksProps(
        {
            style: {
                ...gradientBackground(blogContainerBackground),
                ...borderCss(blogBorder, deviceType),
                ...marginCss(blogMargin, deviceType),
                ...paddingCss(blogPadding, deviceType),
                boxShadow: `${blogBoxShadow.horizontal || 0}px ${blogBoxShadow.vertical || 0
                    }px ${blogBoxShadow.blur || 0}px ${blogBoxShadow.color}`,
            },
        },
        {
            template: TEMPLATE,
        }
    );
    const { postsPerPage } = useSelect((select) => {
        const { getSettings } = select(blockEditorStore);
        return {
            postsPerPage:
                +getSettings().postsPerPage || DEFAULTS_POSTS_PER_PAGE,
        };
    }, []);
    useEffect(() => {
        const newQuery = {};
        if (!query.perPage && postsPerPage) {
            newQuery.perPage = postsPerPage;
        }
        if (!!Object.keys(newQuery).length) {
            __unstableMarkNextChangeAsNotPersistent();
            updateQuery(newQuery);
        }
    }, [query.perPage]);
    useEffect(() => {
        if (!Number.isFinite(queryId)) {
            __unstableMarkNextChangeAsNotPersistent();
            setAttributes({ queryId: instanceId });
        }
    }, [queryId, instanceId]);
    const updateQuery = (newQuery) =>
        setAttributes({ query: { ...query, ...newQuery } });

    return (
        <Fragment>
            <Inspector
                attributes={attributes}
                setQuery={updateQuery}
                setAttributes={setAttributes}
            />

            <Slider >
                <div {...innerBlocksProps} />
            </Slider>
        </Fragment>
    );
}
export default withSelect((select) => {
    const { __experimentalGetPreviewDeviceType = null } =
        select("core/edit-post");
    let deviceType = __experimentalGetPreviewDeviceType
        ? __experimentalGetPreviewDeviceType()
        : null;

    return {
        deviceType: deviceType,
    };
})(PostCarousel);
