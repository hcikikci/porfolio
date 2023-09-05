import PropTypes from "prop-types";

const Button = ({ children, className='', ariaLabel='', ...props }) => {
    // TailwindCSS classes for styling and responsiveness
    const baseClasses = 'px-4 py-2 border hover:bg-secondary';
    const responsiveClasses = 'md:px-6 md:py-3';

    // Combine additional classes passed as props
    const combinedClasses = `${baseClasses} ${responsiveClasses} ${className || ''}`;

    return (
        <button aria-label={ariaLabel || children} className={combinedClasses} {...props}>
            {children}
        </button>
    );
};

// Define PropTypes for better code quality
Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    ariaLabel: PropTypes.string,
};


export default Button;
