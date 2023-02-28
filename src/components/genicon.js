import PropTypes from 'prop-types';
import { FontAwesomeEnabled } from "../../assets/js/settings";
const { __ } = wp.i18n;
const { createElement } = wp.element;

const walkChildren = (children) => {
    return children.map((child, idx) => {
        const { nE, aBs: attribsMap, children: gchildren = null } = child;

        //fill, stroke
        const attribs = Object.keys(attribsMap)
            .filter(key => key !== 'fill' && key !== 'stroke' && attribsMap[key] !== 'none')
            .reduce((partial, key) => {

                //partial[camelcase(key)] = attribsMap[key];
                partial[key] = attribsMap[key];
                return partial;
            }, {});
        //special case, it has fill and stroke at the same time
        let merge = {};
        if (attribsMap.fill === 'none' && attribsMap.stroke) {
            merge = { fill: 'none', stroke: 'currentColor' };
        }
        return createElement(nE, { key: idx, ...attribs, ...merge }, gchildren === null ? gchildren : walkChildren(gchildren));
    });
};

export const GenIcon = (props) => {
    const { style, className, icon, name, htmltag, ...others } = props;
    const type = name.substring(0, 2);
    const lineIcon = (type && 'fe' == type ? true : false);
    const fill = (lineIcon ? 'none' : 'currentColor');
    const strokeWidth = (lineIcon ? props.strokeWidth : undefined);
    const stroke = (lineIcon ? 'currentColor' : undefined);
    const strokeLinecap = (lineIcon ? 'round' : undefined);
    const strokeLinejoin = (lineIcon ? 'round' : undefined);
    const HtmlTagOut = (htmltag ? htmltag : 'div');
    const setting_url = PremiumBlocksSettings.admin_url + "admin.php?page=pb_panel&path=settings";

    return (
        <HtmlTagOut style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', ...style }} className={className}>
            {((type === "fe" || type === "ic") && 1 != FontAwesomeEnabled) ? (
                <p className={`premium-icon__alert`}>
                    {__(
                        "Please Enable Font Awesome Icons from ",
                        "premium-blocks-for-gutenberg"
                    )}
                    {" "}
                    <a target="_blank" href={setting_url}>
                        {__(
                            "Plugin settings",
                            "premium-blocks-for-gutenberg"
                        )}
                    </a>
                </p>
            )
                :
                <svg style={{ display: 'inline-block', verticalAlign: 'middle' }} viewBox={(!props.icon ? '0 0 24 24' : props.icon.vB)} height={props.size ? props.size : '30'} width={props.size ? props.size : '30'} fill={fill} stroke={stroke} xmlns={props.xmlns} stroke-width={strokeWidth} stroke-linecap={strokeLinecap} stroke-linejoin={strokeLinejoin} >
                    {props.title ? <title>{props.title}</title> : null}
                    {props.icon && (
                        walkChildren(props.icon.cD)
                    )}
                </svg>
            }
        </HtmlTagOut>
    );
};

GenIcon.defaultProps = {
    size: 24,
    xmlns: 'http://www.w3.org/2000/svg',
    strokeWidth: 2,
    htmltag: 'div',
};

GenIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    style: PropTypes.object,
    className: PropTypes.string,
};

export default GenIcon;