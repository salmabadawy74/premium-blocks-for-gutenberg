import { __ } from '@wordpress/i18n';
import ScreenHeader from "../components/header"

const TypographyScreen = props => {
    return <>
        <ScreenHeader
            title={__('Typography')}
            description={__('Manage the typography settings for different elements.')}
        />
    </>
}

export default TypographyScreen