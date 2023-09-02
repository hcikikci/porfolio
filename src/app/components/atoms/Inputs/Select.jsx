import BaseSelect from 'react-select'
import {firaCode} from "@/app/layout";

const Select = ({options, defaultValue}) => {
    return (
        <BaseSelect options={options} defaultValue={defaultValue}
                styles={{
                    control: (provided, state) => ({
                        ...provided,
                        border: 0,
                        color: "#787878",
                        boxShadow: "none",
                        fontFamily: firaCode,
                    }),
                    menu: (provided, state) => ({
                        ...provided,
                        fontFamily: firaCode,

                    }),
                    option: (provided, state) => ({
                        ...provided,
                        color: state.isSelected ? "#787878" : "#787878",
                        backgroundColor: state.isSelected ? "#F2F2F2" : "#FFFFFF",
                    }),
                    singleValue: (provided, state) => ({
                        ...provided,
                        color: "#787878",
                    }),
                    dropdownIndicator: (provided, state) => ({
                        ...provided,
                        color: "#787878",
                        marginLeft: "-0.5rem",
                    }),
                    indicatorSeparator: (provided, state) => ({
                        ...provided,
                        display: "none",
                    }),
                }}/>
    );
};

export default Select;
