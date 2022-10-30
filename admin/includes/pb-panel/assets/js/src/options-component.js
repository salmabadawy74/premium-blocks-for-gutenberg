import SingleOption from "./common/SingleOption";

const OptionsComponent = ({ options }) => {
    return Object.keys(options).map((optionId) => {
        let option = options[optionId];
        return (
            <SingleOption blockInfo={optionId} params={option} key={optionId} />
        );
    });
};

export default OptionsComponent;
