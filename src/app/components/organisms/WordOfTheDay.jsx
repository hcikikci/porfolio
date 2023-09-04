'use client';
import React from 'react';
import IconQuotes from "../atoms/Icons/IconQuotes";
import {useTranslations} from "next-intl";

const WordOfTheDay = () => {
    const t = useTranslations('wordoftheday');

    return (
        <div className="md:text-2xl mx-auto md:w-2/3 md:mt-32 mt-12 ">
            <div className="border border-gray p-8 font-medium relative bg-white/30">
                <p>
                    {t("quote")}
                </p>
                <div className="absolute top-0 bg-[#EBECFF] -translate-y-1/2 px-2">
                    <IconQuotes/>
                </div>
                <div className="absolute bottom-0 bg-[#EBECFF] right-0 -translate-x-1/2 translate-y-1/2 px-2">
                    <IconQuotes/>
                </div>
            </div>
            <div className="p-4 border border-gray w-fit border-t-0 ml-auto bg-white/30">
                - {t("author")}
            </div>
        </div>

    );
};

export default WordOfTheDay;