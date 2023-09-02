// Import required dependencies and hooks
import React from 'react';
import PropTypes from 'prop-types';
import { usePathname } from "next/navigation";

// The HeaderLink component is responsible for rendering a link in the header.
// It takes the 'page' as a prop and checks if the current page matches the provided page name.
const HeaderLink = ({ page }) => {
    // Get the current pathname using the 'usePathname' hook from Next.js
    const pathname = usePathname();

    // Check if the current page matches the provided page name
    const isActive = pathname === page || (pathname === "/" && page === "home");

    // TailwindCSS classes for styling and responsiveness
    const activeTextClass = isActive ? 'text-black' : 'text-gray';
    const responsiveClasses = 'text-2xl md:text-base';

    // Generate class names based on the component's state
    const liClasses = `group ${isActive ? 'font-medium' : ''} ${responsiveClasses}`;
    const spanClasses = `group-hover:text-black ${activeTextClass}`;

    return (
        <li className={liClasses}>
            <span className="text-primary">#</span>
            <span className={spanClasses}>{page}</span>
        </li>
    );
};

// Define PropTypes for better code quality
HeaderLink.propTypes = {
    page: PropTypes.string.isRequired,
};

export default HeaderLink;
