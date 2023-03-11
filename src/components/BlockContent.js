/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { withFilters } from '@wordpress/components';
import { forwardRef } from 'react';

const BlockContent = forwardRef((props, ref) => {
    const { extraContent = [], className, children } = props;
    const classes = classnames('pbg-content-wrap', className);

    return <div className={classes} ref={ref}>
        {[children, ...extraContent]}
    </div>;
})

export default withFilters('pbg.BlockContent')(BlockContent);