import React from 'react';
import Image from "next/image";
import Button from "@/app/components/atoms/Inputs/Button";
import {Fira_Code} from "next/font/google";
import {useTranslations} from "next-intl";
export const firaCode = Fira_Code({ subsets: ['latin'] })

const ProjectCard = ({smallProject=false}) => {
    const t = useTranslations('common');

    return (
        <div className="border border-gray">
            {!smallProject &&(
                <Image className="w-full border-b border-gray" src={"/agilemaster.jpg"} alt={"agilemaster"} width={"323"} height={"808"}/>)}
            <ul className="flex gap-x-3 flex-wrap px-3 py-2 text-gray">
                <li>NextJS</li>
                <li>NodeJS</li>
                <li>Typescript</li>
                <li>Express</li>
                <li>TailwindCSS</li>
                <li>MaterialUI</li>
                <li>PostgreSQL</li>
            </ul>
            <div>
                <h3 className="text-xl font-semibold p-3 border-t border-gray">AgileMaster</h3>
                <p className="px-3">
                    Project Management System Powered With AI
                </p>

                <Button className={"!px-3 !py-1.5 my-3 ml-3 opacity-50 hover:!bg-transparent " + firaCode.className }>
                    {t("live")} &lt;&#126;&gt; (Not Deployed Yet)
                </Button>

            </div>
        </div>
    );
};

export default ProjectCard;