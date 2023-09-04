'use client';
import React from 'react';
import SectionHeader from "../atoms/ViewBlocks/SectionHeader";
import IconDiscord from "../atoms/Icons/IconDiscord";
import IconEmail from "../atoms/Icons/IconEmail";
import Link from "next/link";
import {useTranslations} from "next-intl";

const Contact = ({onPage=false}) => {
    const t = useTranslations('contact');

    return (
        <div className="py-20 space-y-4">
            {!onPage && <SectionHeader title={"contact"}/>}
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
                <div className="space-y-5">
                    <p className="text-gray"> {t("article")}
                    </p>
                </div>
                <div className="md:mr-0 mx-auto h-fit w-fit flex flex-col my-auto space-y-2 border-gray border p-4">
                    <h3 className="text-black font-semibold">{t("message-me")}</h3>
                    <Link target={"_blank"} href="https://discordapp.com/users/hcikikci" className="flex place-items-center space-x-2">
                        <IconDiscord/>
                        <span className="text-gray">hcikikci</span>
                    </Link>
                    <Link target={"_blank"} href="mailto:hello@halitcancikikci.com" className="flex place-items-center space-x-2">
                        <IconEmail/>
                        <span className="text-gray">hello@halitcancikikci.com</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;