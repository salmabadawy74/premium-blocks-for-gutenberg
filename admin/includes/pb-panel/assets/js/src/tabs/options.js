import SingleOption from "../common/SingleOption";
import Container from "../common/Container";
const SingleOptionComponent = ({ value, optionId, option, onChange }) => {
    return <SingleOption id={optionId} value={value} params={option} onChange={onChange} />
        ;
}

const RenderOptions = ({ options, values, onChange }) => {
    return Object.keys(options).map((optionId) => {
        let value = values[optionId];
        let option = options[optionId];

        return <SingleOptionComponent value={value} optionId={optionId} option={option} onChange={(newVal) => {
            onChange(newVal, optionId)
        }} key={optionId} />;
    })
}

const OptionsComponent = ({ options, onChange, values }) => {
    return <Container className="pb-options">
        <RenderOptions options={options} onChange={onChange} values={values} />
    </Container>
}
export default OptionsComponent