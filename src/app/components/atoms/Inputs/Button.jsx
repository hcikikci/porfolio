import React from 'react';
import PropTypes from 'prop-types';

// The Button component is responsible for rendering a button element.
// It takes in children (the content of the button) and any other props
// that should be applied to the button element.
const Button = ({ children, className, ...props }) => {
    // TailwindCSS classes for styling and responsiveness
    const baseClasses = 'px-4 py-2 border hover:bg-secondary';
    const responsiveClasses = 'md:px-6 md:py-3';

    // Combine additional classes passed as props
    const combinedClasses = `${baseClasses} ${responsiveClasses} ${className || ''}`;

    return (
        <button className={combinedClasses} {...props}>
            {children}
        </button>
    );
};

// Define PropTypes for better code quality
Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

// Default props
Button.defaultProps = {
    className: '',
};

export default Button;
