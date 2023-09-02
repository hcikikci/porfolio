"use client";
import React from 'react';
import {usePathname} from "next/navigation";

const HeaderLink = ({page}) => {
    const pathname = usePathname();
    const isActive = pathname === page || (pathname === "/" && page === "home") ;
    return (
        <li className={"group " + (isActive && "font-medium")}>
            <span className="text-primary">#</span>
            <span className={"group-hover:text-black " + (isActive ? "text-black" : "text-gray")}>{page}</span>
        </li>
    );
};

export default HeaderLink;