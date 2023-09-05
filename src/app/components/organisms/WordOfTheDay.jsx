'use client';
import React from 'react';
import IconQuotes from "../atoms/Icons/IconQuotes";
import { useTranslations } from "next-intl";

const WordOfTheDay = () => {
    const t = useTranslations('wordoftheday');

    return (
        <article className="md:text-2xl mx-auto md:w-2/3 md:mt-32 mt-12" aria-label="Word of the Day">
            <blockquote className="border border-gray p-8 font-medium relative bg-white/30" aria-label="Quote of the Day">
                <p>
                    {t("quote")}
                </p>
                <div className="absolute top-0 bg-[#EBECFF] -translate-y-1/2 px-2" aria-hidden="true">
                    <IconQuotes />
                </div>
                <div className="absolute bottom-0 bg-[#EBECFF] right-0 -translate-x-1/2 translate-y-1/2 px-2" aria-hidden="true">
                    <IconQuotes />
                </div>
            </blockquote>
            <footer className="p-4 border border-gray w-fit border-t-0 ml-auto bg-white/30" aria-label="Author of the Quote">
                - {t("author")}
            </footer>
        </article>
    );
};

export default WordOfTheDay;
