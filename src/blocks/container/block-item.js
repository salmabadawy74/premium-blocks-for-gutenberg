import { useState } from "react";

const BlockItemComponent = ({ block, container, customSelectors, onChange, onRemove }) => {
    const [show, setShow] = useState(false);
    const invalidTags = ['input', 'style', 'script', 'br', 'hr'];
    const { name, clientId } = block;
    const blockName = name.includes('core') ? name.replace('core/', '') : name.replaceAll('/', '-');
    const blockClass = `wp-block-${blockName}`;
    const blockElement = container ? container.querySelectorAll(`.${blockClass}`) : '';
    const blockChild = blockElement?.[0];
    const allChild = blockChild.querySelectorAll('*');
    const invalidClasses = ['rich', 'components-base-control', 'editor', 'pbg-equal-height-selected'];
    const filteredElements = Array.from(allChild).filter(element => {
        const { classList, nodeName } = element;
        const parent = element.parentNode;
        return !invalidTags.includes(nodeName.toLowerCase()) && !parent.classList.contains('components-base-control') && !classList.contains('components-base-control') && classList[0] !== 'block-editor-block-list__block' && !classList.contains('pbg-element-overlay');
    });

    const getFilteredClasses = (classes) => {
        const newClasses = Array.from(classes).filter(className => !invalidClasses.some(v => className.includes(v)) && !clientId.split('-').some(v => className.includes(v)) && !/\d/.test(className));

        return newClasses;
    }

    const getWidth = (element) => {
        try {
            return window.getComputedStyle(element, null)
                .getPropertyValue('width');
        } catch (e) {
            return element.currentStyle.width;
        }
    }

    const getHeight = (element) => {
        try {
            return window.getComputedStyle(element, null)
                .getPropertyValue('height');
        } catch (e) {
            return element.currentStyle.height;
        }
    }

    const overlay = document.createElement('div');
    overlay.setAttribute('class', 'pbg-element-overlay');

    const mouseLeaveHandler = (element) => {
        element.classList.add('pbg-equal-height-selected');
        overlay.style.width = getWidth(element) !== 'auto' ? getWidth(element) : '100%';
        overlay.style.height = getHeight(element) !== 'auto' ? getHeight(element) : '100%';
        element.appendChild(overlay);
    }

    const mouseEnterHandler = (element) => {
        const overlay = element.querySelector('.pbg-element-overlay');
        element.classList.remove('pbg-equal-height-selected');
        if (overlay) {
            element.removeChild(overlay);
        }
    }

    const clickHandler = (element) => {
        let newCustomSelectors = [...customSelectors];
        let selector = `.${blockClass} ${element.nodeName.toLowerCase()}`;
        if (getFilteredClasses(element.classList).length > 0) {
            selector += `.${getFilteredClasses(element.classList)}`;
        }
        if (customSelectors.includes(selector)) {
            onRemove(container.querySelectorAll(selector));
            newCustomSelectors = newCustomSelectors.filter(seletorE => seletorE !== selector);
        } else {
            newCustomSelectors.push(selector);
        }

        onChange({ customSelectors: newCustomSelectors });
    }

    return <div className="pbg-block-item">
        <div className="pbg-block-item-name" onClick={() => setShow(!show)}>
            {name}
            {!show && (
                <span class="dashicons dashicons-arrow-down-alt2"></span>
            )}
            {show && (
                <span class="dashicons dashicons-arrow-up-alt2"></span>
            )}
        </div>
        {show && (
            <div className="pbg-block-elements">
                {filteredElements.map(element => {
                    let selector = `.${blockClass} ${element.nodeName.toLowerCase()}`;
                    if (getFilteredClasses(element.classList).length > 0) {
                        selector += `.${getFilteredClasses(element.classList)}`;
                    }

                    return <div className={`pbg-block-element${customSelectors.includes(selector) ? ' pbg-equal-height-active' : ''}`} onClick={() => clickHandler(element)} onMouseOver={() => mouseLeaveHandler(element)} onMouseOut={() => mouseEnterHandler(element)}>
                        <span className="pbg-block-element-name">{element.nodeName.toLowerCase()}</span>
                        {getFilteredClasses(element.classList).length > 0 && (
                            <span className="pbg-block-element-classes">{`.${getFilteredClasses(element.classList).join('.')}`}</span>
                        )}
                    </div>
                })}
            </div>
        )}
    </div>
}

export default BlockItemComponent;