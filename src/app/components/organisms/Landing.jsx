'use client';
import React from 'react';
import {useTranslations} from "next-intl";
import Link from 'next-intl/link';
import Image from "next/image";
import {LogoIcon} from "../atoms/Media/Logo";

const Landing = () => {
    const t = useTranslations('landing');

    return (
        <section className="grid grid-cols-1 gap-x-16 md:grid-cols-2">
            <div className="my-auto">
                <h1 className="font-semibold text-xl md:text-3xl">{t.rich("title", {
                    colored: (chunks) => <span className="text-primary">{chunks}</span>
                })}</h1>
                <p className="text-gray mt-5 mb-9">
                    {t("description")}
                </p>
                <Link href="/contact" className="px-4 py-2 border hover:bg-secondary bg-white/70 ">{t("button")}</Link>
            </div>
            <div className="relative w-fit mx-auto flex flex-col place-items-center md:scale-100 scale-75 mt-10 md:mt-0">
                <LogoIcon className="absolute left-0 opacity-40 -translate-x-full -ml-3 translate-y-1/2"/>
                {/*<Dots className="absolute right-0 translate-x-1/2 bottom-0 -translate-y-1/2"/>*/}
                <Image className="z-10 border border-b-0 border-primary" src={"/halitcancikikci.png"} alt={"halitcancikikci"} width={331} height={386} />
                <div className="bg-white/70 absolute flex space-x-4 place-items-center bottom-0 translate-y-full px-4 py-2 border border-gray hover:bg-secondary/10 ">
                    <div className="w-4 h-4 bg-green-500 rounded-full">

                    </div>
                    <span className="whitespace-nowrap">
                        {t.rich("currently-working", {
                            bold : (chunks) => <b>{chunks}</b>
                        })}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Landing;