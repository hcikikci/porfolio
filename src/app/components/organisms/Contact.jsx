'use client';
import SectionHeader from "../atoms/ViewBlocks/SectionHeader";
import IconDiscord from "../atoms/Icons/IconDiscord";
import IconEmail from "../atoms/Icons/IconEmail";
import Link from "next/link";
import {useTranslations} from "next-intl";

const Contact = ({onPage=false}) => {
    const t = useTranslations('contact');

    return (
        <section className="py-20 space-y-4" aria-labelledby="contact-header">
            {!onPage && <SectionHeader title={"contact"}/>}
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-10" aria-label="Contact section">
                <article className="space-y-5">
                    <p className="text-gray">{t("article")}</p>
                </article>
                <aside className="md:mr-0 mx-auto h-fit w-fit flex flex-col my-auto space-y-2 border-gray border p-4" aria-label="Contact methods">
                    <h3 className="text-black font-semibold">{t("message-me")}</h3>
                    <Link target={"_blank"} href="https://discordapp.com/users/hcikikci" className="flex place-items-center space-x-2">
                        <IconDiscord aria-label="Discord"/>
                        <span className="text-gray">hcikikci</span>
                    </Link>
                    <Link target={"_blank"} href="mailto:hello@halitcancikikci.com" className="flex place-items-center space-x-2">
                        <IconEmail aria-label="Email"/>
                        <span className="text-gray">hello@halitcancikikci.com</span>
                    </Link>
                </aside>
            </div>
        </section>
    );
};

export default Contact;
