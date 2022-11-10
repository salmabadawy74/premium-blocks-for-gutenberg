import classnames from 'classnames'

const { useBlockProps, InnerBlocks } = wp.blockEditor;
import { filterJsCss } from '@pbg/helpers';

const save = props => {

    const { className } = props;

    const {
        blockId,
        hideDesktop,
        hideMobile,
        hideTablet,
        contentColor
    } = props.attributes;


    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    className,
                    `premium-person ${blockId}`,
                    {
                        " premium-desktop-hidden": hideDesktop,
                        " premium-tablet-hidden": hideTablet,
                        " premium-mobile-hidden": hideMobile,
                    }
                ),
            })}
            style={filterJsCss({
                backgroundColor: contentColor
            })}
        >
            <InnerBlocks.Content />
        </div>
    );
};

export default save;