import classnames from 'classnames'

const { InnerBlocks } = wp.blockEditor;

const save = props => {

    const { className } = props;

    const {
        block_id,
        isUpdated,
        stretchSection,
        horAlign,
        innerWidthType,
        innerWidth,
        height,
        vPos,
        minHeight,
        minHeightUnit,
        color,
        opacity,
        imageURL,
        fixed,
        backgroundRepeat,
        backgroundPosition,
        backgroundSize,
        borderType,
        borderWidth,
        borderTop,
        borderRight,
        borderBottom,
        borderLeft,
        borderColor,
        borderRadius,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        marginUnit,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        paddingUnit,
        shadowBlur,
        shadowColor,
        shadowHorizontal,
        shadowVertical,
        shadowPosition,
        hideDesktop,
        hideTablet,
        hideMobile
    } = props.attributes;


    const mainClasses = classnames(className, 'premium-test');

    return (
        <div
        >
            <p className="premium-test">Test1</p>
        </div>
    );
};

export default save;
