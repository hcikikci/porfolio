import React from 'react';
import SectionHeader from "@/app/components/atoms/ViewBlocks/SectionHeader";
import {LogoIcon} from "@/app/components/atoms/Media/Logo";
import Dots from "@/app/components/atoms/Media/Dots";
import {useTranslations} from "next-intl";

const Skills = () => {
    const t = useTranslations('common');

    return (
        <div className="pt-20">
            <SectionHeader title={"skills"} />
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                <div className="opacity-50 md:block hidden">
                    <div className="grid grid-cols-2 gap-4 py-8">
                        <Dots  className="mt-5"/>
                        <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="85" height="85" stroke="#787878"/>
                        </svg>
                    </div>
                    <div className="grid grid-cols-3 gap-8 py-8">
                        <LogoIcon/>
                        <Dots className="place-self-start ml-12"/>
                        <svg className="place-self-center" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="51" height="51" stroke="#787878"/>
                        </svg>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-5 mt-10 md:mt-0 h-fit my-auto mx-auto">
                    <div className="border border-gray h-fit">
                        <div className="border-b border-gray p-3">
                            <h3 className="font-semibold">{t("languages")}</h3>
                        </div>
                        <ul className="flex gap-x-3 flex-wrap p-3 text-gray">
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Python</li>
                            <li>PHP</li>
                        </ul>
                    </div>
                    <div className="border border-gray h-fit">
                        <div className="border-b border-gray p-3">
                            <h3 className="font-semibold">{t("frameworks")}</h3>
                        </div>
                        <ul className="flex gap-x-3 flex-wrap p-3 text-gray">
                            <li>NextJS</li>
                            <li>ReactJS</li>
                            <li>Express</li>
                            <li>Django</li>
                            <li>CodeIngiter</li>
                            <li>TailwindCSS</li>
                        </ul>
                    </div>
                    <div className="border border-gray h-fit">
                        <div className="border-b border-gray p-3">
                            <h3 className="font-semibold">{t("databases")}</h3>
                        </div>
                        <ul className="flex gap-x-3 flex-wrap p-3 text-gray">
                            <li>PostgreSQL</li>
                            <li>MongoDB</li>
                            <li>Mysql</li>
                        </ul>
                    </div>
                    <div className="border border-gray h-fit">
                        <div className="border-b border-gray p-3">
                            <h3 className="font-semibold">{t("others")}</h3>
                        </div>
                        <ul className="flex gap-x-3 flex-wrap p-3 text-gray">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Rest</li>
                            <li>Wordpress</li>
                            <li>Git</li>
                            <li>Linux</li>
                            <li>Figma</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;