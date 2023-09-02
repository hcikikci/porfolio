// Import required dependencies and hooks
import React, {useId} from 'react';
import PropTypes from 'prop-types';
import BaseSelect from 'react-select';
import { firaCode } from "@/app/[locale]/layout";

// Define the Select component
const Select = ({ options, defaultValue, onChange, ...props }) => {
    // Custom styling for BaseSelect
    const customStyles = {
        control: (provided) => ({
            ...provided,
            border: 0,
            color: "#787878",
            boxShadow: "none",
            fontFamily: firaCode,
        }),
        menu: (provided) => ({
            ...provided,
            fontFamily: firaCode,
        }),
        option: (provided, state) => ({
            ...provided,
            color: "#787878",
            backgroundColor: state.isSelected ? "#F2F2F2" : "#FFFFFF",
        }),
        singleValue: (provided) => ({
            ...provided,
            color: "#787878",
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: "#787878",
            marginLeft: "-0.5rem",
        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            display: "none",
        }),
    };

    // Generate a unique instance ID using useId
    const instanceId = useId();

    // Render the BaseSelect component with custom styles and props
    return (
        <BaseSelect {...props}
            instanceId={instanceId}
            options={options}
            defaultValue={defaultValue}
            onChange={onChange}
            styles={customStyles}
        />
    );
};

// Define PropTypes for better code quality
Select.propTypes = {
    options: PropTypes.array.isRequired,
    defaultValue: PropTypes.object,
    onChange: PropTypes.func.isRequired,
};

// Export the Select component
export default Select;
