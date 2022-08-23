import { Fragment, useState } from "@wordpress/element";
import Container from "../common/Container";
import OptionsComponent from '../options-component'
import FilterComponent from '../filter-component'
const { __ } = wp.i18n;
const { Dashicon } = wp.components;

const OptionsTab = (props) => {
    const options = props.options;
    const [values, setValues] = useState(props.values);

    const handleChange = (newValues) => {
        setValues(newValues)
    };
    return <Fragment>
        <Container>
            <div className='advanced-options options-section'>
                <FilterComponent/>
                <OptionsComponent options={options} values={values} onChange={(newVal, optionId) => {
                    handleChange(newVal, optionId)
                }} />
            </div>
        </Container>
    </Fragment>
}


export default OptionsTab;