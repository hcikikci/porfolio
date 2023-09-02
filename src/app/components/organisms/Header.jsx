"use client";
import React, {useState} from 'react';
import Logo from "@/app/components/atoms/Media/Logo";
import HeaderLink from "@/app/components/atoms/ViewBlocks/HeaderLink";
import Select from "@/app/components/atoms/Inputs/Select";
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next-intl/client';
import IconGithub from "@/app/components/atoms/Icons/IconGithub";
import IconEmail from "@/app/components/atoms/Icons/IconEmail";
import IconLinkedIn from "@/app/components/atoms/Icons/IconLinkedIn";
import IconTwitter from "@/app/components/atoms/Icons/IconTwitter";

// The Header component is responsible for rendering the header section of the website.
// It includes the Logo, Header Links, and Language Selector.
const Header = () => {
    // Initialize translation, routing, and locale hooks
    const t = useTranslations('breadcrumbs');
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    const [menuOpen, setMenuOpen] = useState(false);

    // Available languages
    const languages = [{ value: "tr", label: "TR" }, { value: "en", label: "EN" }];

    // Function to switch the language
    const switchLanguage = (e) => {
        router.replace(`/${pathname}`, { locale: e.value });
    };

    // TailwindCSS classes for responsiveness
    const responsiveClasses = 'flex flex-col md:flex-row md:space-x-8 md:place-items-center text-left';

    return (
        <div className={"flex md:justify-between md:items-center py-8 flex-col md:flex-row " + (menuOpen ? "absolute px-5 md:px-0 md:static bg-white z-10 md:h-fit md:bg-transparent w-full h-full inset-0" : "")}>
            <div className="flex w-full md:w-fit justify-between">
                <Logo />
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
                    {
                        menuOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="1" height="1" transform="matrix(1 0 0 -1 11 12)" fill="#D9D9D9"/>
                                <rect x="3" y="19.9706" width="24" height="2" transform="rotate(-45 3 19.9706)" fill="#D9D9D9"/>
                                <rect x="4" y="3" width="24" height="2" transform="rotate(45 4 3)" fill="#D9D9D9"/>
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="5" width="24" height="2" fill="#D9D9D9"/>
                        <rect x="9" y="12" width="15" height="2" fill="#D9D9D9"/>
                        </svg>
                        )
                    }
                </button>
            </div>

            <ul className={`${responsiveClasses} md:space-y-0 space-y-5 my-auto  ${menuOpen ? 'block' : 'hidden md:flex'}`}>
                <HeaderLink page={t("home.title")} link={"/"}/>
                <HeaderLink page={t("projects.title")} link={"/projects"}/>
                <HeaderLink page={t("about-me.title")} link={"/about-me"} />
                <HeaderLink page={t("contact.title")} link={"/contact"} />
                <div className="w-fit">
                    <Select className={"text-2xl md:text-base"} options={languages} defaultValue={languages.find(element => element.value === locale)} onChange={switchLanguage} />
                </div>
                <div className="flex w-full md:hidden place-items-baseline justify-around !mt-8">
                    <IconLinkedIn size="medium"/>
                    <IconGithub size="medium"/>
                    <IconTwitter size="medium"/>
                    <IconEmail size="medium"/>
                </div>
            </ul>
        </div>
    );
};

export default Header;
