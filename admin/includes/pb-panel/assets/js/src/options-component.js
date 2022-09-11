import { values } from "lodash";
import SingleOption from "./common/SingleOption";

const SingleOptionComponent = ({ value, optionId, option, onChange, isChecked, values }) => {

    return <SingleOption id={optionId} value={value} params={option} isChecked={isChecked} onChange={onChange} values={values} />
        ;
}

const RenderOptions = ({ options, values, onChange, isChecked }) => {
    return Object.keys(options).map((optionId) => {
        let value = values[optionId];
        let option = options[optionId];

        return <SingleOptionComponent values={values} value={value} optionId={optionId} option={option} isChecked={isChecked} onChange={(newVal) => {
            onChange(newVal, optionId)
        }} key={optionId} />;
    })
}

const OptionsComponent = ({ options, onChange, values, isChecked }) => {
    return <div className="pb-options">
        <RenderOptions options={options} onChange={onChange} values={values} isChecked={isChecked} />
    </div>
}

export default OptionsComponent