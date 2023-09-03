import React from 'react';
import SectionHeader from "@/app/components/atoms/ViewBlocks/SectionHeader";
import ProjectCard from "@/app/components/atoms/ViewBlocks/ProjectCard";

const Projects = ({onPage=true}) => {
    return (
        <div className="pt-20">
            {onPage ? (<SectionHeader title={"complete-apps"} />) :  <SectionHeader title={"projects"} viewAllLink="/projects"/>}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 px-12 md:px-0 gap-y-8 my-8">
                <ProjectCard/>

            </div>
            {!onPage && (
                <div className="mt-20">
                    <SectionHeader title={"small-projects"} />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 px-12 md:px-0 gap-y-8 my-8">
                        <ProjectCard smallProject={true}/>
                        <ProjectCard smallProject={true}/>
                        <ProjectCard smallProject={true}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;