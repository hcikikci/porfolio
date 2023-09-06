"use client";
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next-intl/link';
import {useSelectedLayoutSegment} from "next/navigation";

const HeaderLink = ({ page, link }) => {
    // Get the current pathname using the 'usePathname' hook from Next.js
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';

    // Check if the current page matches the provided page name
    const isActive = pathname === link;

    // TailwindCSS classes for styling and responsiveness
    const activeTextClass = isActive ? 'text-black' : 'text-gray';
    const responsiveClasses = 'text-2xl md:text-base';

    // Generate class names based on the component's state
    const liClasses = `group ${isActive ? 'font-medium' : ''} ${responsiveClasses}`;
    const spanClasses = `group-hover:text-black ${activeTextClass}`;

    return (
        <li className={liClasses}>
            <Link href={link}>
                <span className="text-primary">#</span>
                <span className={spanClasses}>{page}</span>
            </Link>
        </li>
    );
};

export default HeaderLink;
