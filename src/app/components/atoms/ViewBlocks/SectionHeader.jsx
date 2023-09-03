import React from 'react';
import {Link} from "@/navigation";
import {firaCode} from "@/app/components/atoms/ViewBlocks/ProjectCard";
import {useTranslations} from "next-intl";

const SectionHeader = ({title, viewAllLink, dontShowHR=false}) => {
    const t = useTranslations('breadcrumbs');
    const t2 = useTranslations('common');
    return (
        <div className="text-3xl font-medium md:grid md:grid-cols-2 flex">
            <div className="flex items-center grow md:space-x-10 space-x-5 pr-5 md:col-span-1">
                <div className="flex-shrink">
                    <span className="text-primary">#</span>{t(title+".title")}
                </div>
                {!dontShowHR && <hr className="border-gray border-opacity-50 border-t-2 w-full"/>}
            </div>
            <p className="text-base ml-auto my-auto">
                {viewAllLink && (
                    <Link href={viewAllLink} className={firaCode.className}>
                        {t2("view-all")} --&gt;
                    </Link>
                )}
            </p>
        </div>
    );
};

export default SectionHeader;