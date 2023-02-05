import { useSelect, useDispatch } from "@wordpress/data";
import {
    generateBlockId,
    gradientBackground,
    typographyCss,
    paddingCss,
    marginCss,
    borderCss,
} from "@pbg/helpers";

const { __ } = wp.i18n;
const { withSelect } = wp.data;
const { useEffect, Fragment } = wp.element;
import Inspector from "./inspector";
import {
    BlockControls,
    InspectorControls,
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
function QueryContent({ attributes, setAttributes, deviceType }) {
    const {
        queryId,
        query,
        containerBackground,
        border,
        advancedBorder,
        advancedBorderValue,
        boxShadow,
        padding,
        margin,
    } = attributes;
    const { __unstableMarkNextChangeAsNotPersistent } =
        useDispatch(blockEditorStore);
    const instanceId = useInstanceId(QueryContent);
    const blockProps = useBlockProps();
    const innerBlocksProps = useInnerBlocksProps(blockProps, {
        template: TEMPLATE,
    });
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
    // We need this for multi-query block pagination.
    // Query parameters for each block are scoped to their ID.
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

            <div
                {...blockProps}
                style={{
                    ...gradientBackground(containerBackground),
                    ...borderCss(border, deviceType),
                    ...marginCss(margin, deviceType),
                    ...paddingCss(padding, deviceType),
                    boxShadow: `${boxShadow.horizontal || 0}px ${
                        boxShadow.vertical || 0
                    }px ${boxShadow.blur || 0}px ${boxShadow.color}`,
                }}
            >
                <div {...innerBlocksProps} />
            </div>
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
})(QueryContent);
