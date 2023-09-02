import React from 'react';
import PropTypes from 'prop-types';

// The Input component is responsible for rendering an email input field.
// It takes in props that should be applied to the input element.
const Input = ({ className, id = 'floating_email', label = 'Email address', ...props }) => {
    // TailwindCSS classes for base styling
    const inputBaseClasses = 'block pl-2.5 py-2.5 text-sm text-gray-900 bg-transparent border border-black appearance-none focus:outline-none focus:ring-0 focus:border-primary peer';
    const labelBaseClasses = 'ml-2 px-1 bg-white z-10 absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-90 top-3 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6';

    // Combine additional classes passed as props
    const combinedInputClasses = `${inputBaseClasses} ${className || ''}`;

    return (
        <div className="relative z-0 w-full mb-6 group transition-all">
            <input
                type="email"
                id={id}
                className={combinedInputClasses}
                placeholder=" "
                required
                {...props}
            />
            <label
                htmlFor={id}
                className={labelBaseClasses}
            >
                {label}
            </label>
        </div>
    );
};

// Define PropTypes for better code quality
Input.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
};

// Default props
Input.defaultProps = {
    className: '',
    id: 'floating_email',
    label: 'Email address',
};

export default Input;
