'use client';
import React from 'react';
import Logo from "../atoms/Media/Logo";
import Link from "next/link";
import {useTranslations} from "next-intl";
import Social from "../atoms/ViewBlocks/Social";

const Footer = ({className}) => {
    const t = useTranslations('common');

    return (
        <div className={"border-t border-gray "  +  (className && className)}>
            <div className="grid md:grid-cols-2 grid-cols-1 containercustom pt-8">
                <div className="flex flex-col space-y-4">
                    <div className="flex space-x-5 place-items-center flex-wrap">
                        <Logo/>
                        <Link target={"_blank"} href="mailto:hello@halitcancikikci.com">
                            <span className="text-gray font-medium">hello@halitcancikikci.com</span>
                        </Link>
                    </div>
                    <p>{t("identity")}</p>
                </div>
                <div className="flex flex-col space-y-4 mr-auto md:ml-auto mt-10 md:mt-0">
                    <span className="text-2xl font-medium">{t("media")}</span>
                    <Social/>
                </div>
            </div>
            <p className="text-center text-gray pt-12 pb-8">© Copyright 2023. Made by Halitcan Çıkıkçı</p>

        </div>
    );
};

export default Footer;