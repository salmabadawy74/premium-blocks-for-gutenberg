import SingleOption from "./common/SingleOption";

const OptionsComponent = ({ options, onChange, values, setValues }) => {
    return Object.keys(options).map((optionId) => {
        let value = values[optionId];
        let option = options[optionId];

        return (
            <SingleOption
                value={value}
                optionId={optionId}
                params={option}
                onChange={(newVal) => {
                    onChange(newVal, optionId);
                }}
                // setValues={setValues}
                key={optionId}
            />
        );
    });
};

export default OptionsComponent;
