'use client';
import SectionHeader from "../atoms/ViewBlocks/SectionHeader";
import Link from 'next-intl/link';
import Button from "../atoms/Inputs/Button";
import {firaCode} from "../atoms/ViewBlocks/ProjectCard";
import YouTubePlayer from "../atoms/Media/YoutubePlayer";
import {useTranslations} from "next-intl";

const AboutMe = ({onPage=false}) => {
    const t = useTranslations('about-me');

    return (
        <section className="py-20 space-y-4" aria-labelledby="about-me-header">
            {!onPage && <SectionHeader title={"about-me"}/>}
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-10" aria-label="About me section">
                <article className="space-y-5">
                    <p className="text-gray">{onPage ? t("article-long") : t("article-short")}</p>
                    {!onPage && (
                        <Link href="/about-me">
                            <Button className={"!px-3 !py-1.5 my-3 " + firaCode.className }>
                                {t("button")}
                            </Button>
                        </Link>)}
                </article>
                <aside className="h-full flex flex-col my-auto space-y-5" aria-label="Follow me on YouTube">
                    <h3 className="text-black text-lg font-semibold">{t("follow-me")}</h3>
                    <YouTubePlayer videoId={"QnVQFOIkfl4"}/>
                </aside>
            </div>
        </section>
    );
};

export default AboutMe;