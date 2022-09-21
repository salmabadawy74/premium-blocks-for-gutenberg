import SingleOption from "./common/SingleOption";

const OptionsComponent = ({ options, onChange, values, updateValues }) => {
    return Object.keys(options).map((optionId) => {
        let value = values[optionId];
        let option = options[optionId];
        console.log("update: ", updateValues);
        console.log("valuesss: ", values);
        return (
            <SingleOption
                value={value}
                // values={values}
                optionId={optionId}
                params={option}
                onChange={(newVal) => {
                    onChange(newVal, optionId);
                }}
                // updateValues={updateValues}
                key={optionId}
            />
        );
    });
};

export default OptionsComponent;
