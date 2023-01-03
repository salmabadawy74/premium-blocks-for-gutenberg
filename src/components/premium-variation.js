/**
 * External dependencies
 */
import classnames from 'classnames'
const { __ } = wp.i18n;
const { Placeholder, Button } = wp.components;


// Create our own variation picker
const PremiumVariation = props => {
    const {
        icon,
        label = __('Choose variation'), // Dev note: no text domain here since this will use WP's translation.
        instructions = __('Select a variation to start with.'), // Dev note: no text domain here since this will use WP's translation.
        variations,
        onSelect,
        allowSkip,
    } = props

    const classes = classnames('block-editor-block-variation-picker', {
        'has-many-variations': variations.length > 4,
    })

    return (
        <div className="stk-variation-picker">
            <Placeholder
                icon={icon}
                label={label}
                instructions={instructions}
                className={classes}
            >
                {	/* eslint-disable jsx-a11y/no-redundant-roles */}
                <ul
                    className="block-editor-block-variation-picker__variations"
                    role="list"
                    aria-label={__('Block variations')} // Dev note: no text domain here since this will use WP's translation.
                >
                    {variations.map(variation => (
                        <li key={variation.name}>
                            <Button
                                variant="secondary"
                                icon={variation.pickerIcon || variation.icon}
                                iconSize={48}
                                isSecondary
                                onClick={() => onSelect(variation)}
                                className={classnames('block-editor-block-variation-picker__variation', {
                                    'is-premium': variation.isPremium,
                                })}
                                label={variation.description || variation.pickerTitle || variation.title}
                            />
                            <span
                                className="block-editor-block-variation-picker__variation-label"
                                role="presentation"
                            >
                                {variation.pickerTitle || variation.title}
                            </span>
                        </li>
                    ))}
                </ul>
                { /* eslint-enable jsx-a11y/no-redundant-roles */}
                {allowSkip && (
                    <div className="block-editor-block-variation-picker__skip">
                        <Button variant="link" onClick={() => onSelect()}>
                            {__('Skip') /* Dev note: no text domain here since this will use WP's translation. */}
                        </Button>
                    </div>
                )}
            </Placeholder>
        </div>
    )
}

export default PremiumVariation