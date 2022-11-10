import classnames from "classnames";
import { filterJsCss } from '@pbg/helpers';

const { useBlockProps, InnerBlocks } = wp.blockEditor;

const save = props => {
    const { className } = props;

    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        tableStyles,
        tableBoxShadow,
        tableBorder,
    } = props.attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    className,
                    `${blockId}`,
                    `premium-pricing-table`,
                    {
                        " premium-desktop-hidden": hideDesktop,
                        " premium-tablet-hidden": hideTablet,
                        " premium-mobile-hidden": hideMobile,
                    }
                ),
                style: filterJsCss({
                    backgroundColor: tableStyles[0].tableBack,
                    borderStyle: tableBorder.borderType,
                    borderColor: tableBorder.borderColor,
                    boxShadow: `${tableBoxShadow.horizontal}px ${tableBoxShadow.vertical}px ${tableBoxShadow.blur}px ${tableBoxShadow.color} ${tableBoxShadow.position}`
                })
            })}
        >
            <InnerBlocks.Content />
        </div>
    );
};

export default save;