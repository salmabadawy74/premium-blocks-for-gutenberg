import { __ } from '@wordpress/i18n';
import ScreenHeader from "../components/header"

const ColorsScreen = props => {
    return <>
        <ScreenHeader
            title={__('Colors')}
            description={__(
                'Manage palettes and the default color of different global elements on the site.'
            )}
        />
    </>
}

export default ColorsScreen