"use client";
import React from 'react';
import Logo from "@/app/components/atoms/Media/Logo";
import HeaderLink from "@/app/components/atoms/ViewBlocks/HeaderLink";
import { useEffect, useRef } from 'react';
import Select from "@/app/components/atoms/Inputs/Select";

const Header = () => {

    const languages = [{value:"TR", label:"TR"}, {value:"EN", label:"EN"}]

    return (
        <div className="flex justify-between place-items-center py-8">
            <Logo />
            <ul className="flex space-x-8 place-items-center">
                <HeaderLink page="home" />
                <HeaderLink page="works" />
                <HeaderLink page="about me" />
                <HeaderLink page="contacts" />
                <Select options={languages} defaultValue={{value:"TR", label:"TR"}}/>

            </ul>
        </div>
    );
};

export default Header;