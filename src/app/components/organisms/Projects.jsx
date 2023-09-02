import React from 'react';
import SectionHeader from "@/app/components/atoms/ViewBlocks/SectionHeader";
import ProjectCard from "@/app/components/atoms/ViewBlocks/ProjectCard";

const Projects = () => {
    return (
        <div className="py-20">
            <SectionHeader title={"Projects"} viewAllLink="/projects"/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 px-12 md:px-0 gap-y-8 my-8">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </div>
    );
};

export default Projects;