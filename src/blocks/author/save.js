import classnames from 'classnames'
import { filterJsCss } from '@pbg/helpers';
const { RichText, useBlockProps } = wp.blockEditor;

const save = props => {

    const { className } = props;

    const {
        blockId,
        author,
        authorStyles,
        authorCom,
        hideDesktop,
        hideTablet,
        hideMobile,
        companyStyles,
    } = props.attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    className,
                    `premium-testimonial__info ${blockId}`,
                    {
                        " premium-desktop-hidden": hideDesktop,
                        " premium-tablet-hidden": hideTablet,
                        " premium-mobile-hidden": hideMobile,
                    }
                ),
            })}
        >
            <RichText.Content
                tagName={authorStyles[0].authorTag.toLowerCase()}
                className={`premium-testimonial__author`}
                value={author}
                style={filterJsCss({
                    color: authorStyles[0].authorColor
                })}
            />
            <span
                className={`premium-testimonial__sep`}
                style={filterJsCss({
                    color: companyStyles[0].dashColor
                })}
            >
                &nbsp;-&nbsp;
            </span>
            <div className={`premium-testimonial__link_wrap`}>
                <RichText.Content
                    tagName={authorStyles[0].authorComTag.toLowerCase()}
                    className={`premium-testimonial__author_comp`}
                    value={authorCom}
                    style={filterJsCss({
                        color: companyStyles[0].authorComColor
                    })}
                />
                {companyStyles[0].urlCheck && (
                    <a
                        rel="noopener noreferrer"
                        href={companyStyles[0].urlText}
                        target={companyStyles[0].urlTarget ? "_blank" : ""}
                    />
                )}
            </div>
        </div>
    );
};

export default save;