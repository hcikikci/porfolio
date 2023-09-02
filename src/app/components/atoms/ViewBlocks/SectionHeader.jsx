import React from 'react';
import {Link} from "@/navigation";
import {firaCode} from "@/app/components/atoms/ViewBlocks/ProjectCard";

const SectionHeader = ({title, viewAllLink}) => {
    return (
        <div className="text-3xl font-medium grid grid-cols-3 ">
            <div className="flex items-center space-x-10 col-span-2">
                <div className="flex-shrink">
                    <span className="text-primary">#</span>{title}
                </div>
                <div className="flex-grow border-t border-primary"></div>
            </div>
            <p className="text-base ml-auto my-auto">
                {viewAllLink && (
                    <Link href={viewAllLink} className={firaCode.className}>
                        View All --&gt;
                    </Link>
                )}
            </p>
        </div>
    );
};

export default SectionHeader;