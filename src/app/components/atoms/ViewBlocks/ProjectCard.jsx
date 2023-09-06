'use client';
import Image from "next/image";
import Button from "../Inputs/Button";
import {Fira_Code} from "next/font/google";
import {useTranslations} from "next-intl";
import Link from "next/link";
import IconGithub from "../Icons/IconGithub";
export const firaCode = Fira_Code({ subsets: ['latin'] })

const ProjectCard = ({smallProject=false, project}) => {
    const t = useTranslations('common');
    const t2 = useTranslations(smallProject ? 'small-projects' : 'complete-apps');
    const projectType = smallProject ? "small-projects" : "complete-apps";

    return (
        <article className="border border-gray" role="article" aria-labelledby={`${project}-title`} aria-describedby={`${project}-desc`}>
            {!smallProject &&(
                <Image className="w-full border-b border-gray" priority={true} src={"/agilemaster.webp"} alt={t2(`${project}.title`)}  width={"323"} height={"808"}/>)}
            <ul className="flex gap-x-3 flex-wrap px-3 py-2 text-gray">
                { t2.rich(project+".tools", { item : (chunks) => <li>{chunks}</li>}) }
            </ul>
            <div>
                <h3 id={`${project}-title`} className="text-xl font-semibold p-3 border-t border-gray">{t2(project+".title")}</h3>
                <p className="px-3" id={`${project}-desc`}>
                    {t2(project+".description")}
                </p>
                {
                    (t2(project+".github")=== projectType + ".undefined.github" || (t2(project+".github")=== projectType + "." + project +".github" )) ? (
                        <Button className={"!px-3 !py-1.5 my-3 ml-3 flex place-items-center gap-x-3 opacity-50 hover:!bg-transparent " + firaCode.className }>
                            <IconGithub/> {t("not-deployed")} &#126;&gt;
                        </Button>
                    ) : <Link target={"_blank"} href={t2(project+".github")} aria-label="Github link">
                        <Button className={"!px-3 !py-1.5 my-3 ml-3 flex place-items-center gap-x-3 " + firaCode.className }>
                            <IconGithub/> Github link &#126;&gt;
                        </Button>
                    </Link>
                }
            </div>
        </article>
    );
};

export default ProjectCard;