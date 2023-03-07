import classnames from 'classnames'
import {
    filterJsCss,
} from '@pbg/helpers';
const { RichText, useBlockProps } = wp.blockEditor;

const save = props => {

    const {
        blockId,
        increment,
        time,
        delay,
        prefix,
        suffix,
        hideDesktop,
        hideTablet,
        hideMobile,
        numberStyles,
        suffixStyles,
        prefixStyles,
        numberTypography,
        prefixTypography,
        suffixTypography
    } = props.attributes;

    const blockProps = useBlockProps.save({
        className: classnames('premium-counter', blockId, {
            ['premium-desktop-hidden']: hideDesktop,
            ['premium-tablet-hidden']: hideTablet,
            ['premium-mobile-hidden']: hideMobile,
        })
    })

    return (
        <div {...blockProps}>
            <div className={`premium-countup__desc`}>
                {prefix && (
                    <RichText.Content
                        className={`premium-countup__prefix`}
                        tagName="p"
                        value={prefixStyles[0].prefixTxt}
                        style={filterJsCss({
                            color: prefixStyles[0].prefixColor,
                            fontStyle: prefixTypography?.fontStyle,
                            textDecoration: prefixTypography?.textDecoration,
                            textTransform: prefixTypography?.textTransform,
                        })}
                    />
                )}
                <RichText.Content
                    className={`premium-countup__increment`}
                    value={`${increment}`}
                    tagName="p"
                    data-interval={time}
                    data-delay={delay}
                    style={filterJsCss({
                        color: numberStyles[0].numberColor,
                        fontStyle: numberTypography?.fontStyle,
                        textDecoration: numberTypography?.textDecoration,
                        textTransform: numberTypography?.textTransform,
                    })}
                />
                {suffix && (
                    <RichText.Content
                        className={`premium-countup__suffix`}
                        value={suffixStyles[0].suffixTxt}
                        tagName="p"
                        style={filterJsCss({
                            color: suffixStyles[0].suffixColor,
                            fontStyle: suffixTypography?.fontStyle,
                            textDecoration: suffixTypography?.textDecoration,
                            textTransform: suffixTypography?.textTransform,
                        })}
                    />
                )}
            </div>
        </div>
    );
};

export default save;