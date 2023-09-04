'use client';
import React from 'react';
import SectionHeader from "../atoms/ViewBlocks/SectionHeader";
import Link from 'next-intl/link';
import Button from "../atoms/Inputs/Button";
import {firaCode} from "../atoms/ViewBlocks/ProjectCard";
import YouTubePlayer from "../atoms/Media/YoutubePlayer";
import {useTranslations} from "next-intl";

const AboutMe = ({onPage=false}) => {
    const t = useTranslations('about-me');

    return (
        <div className="py-20 space-y-4">
            {!onPage && <SectionHeader title={"about-me"}/>}
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
                <div className="space-y-5">
                    <p className="text-gray">{t("article")}
                    </p>
                    {!onPage && (
                        <Link href="/about-me">
                            <Button className={"!px-3 !py-1.5 my-3 " + firaCode.className }>
                                {t("button")}
                            </Button>
                        </Link>)}
                </div>
                <div className="h-full flex flex-col my-auto space-y-5">
                    <h3 className="text-black text-lg font-semibold">{t("follow-me")}</h3>
                    <YouTubePlayer videoId={"QnVQFOIkfl4"}/>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;