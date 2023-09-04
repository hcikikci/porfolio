import SectionHeader from "../atoms/ViewBlocks/SectionHeader";
import ProjectCard from "../atoms/ViewBlocks/ProjectCard";

const Projects = ({onPage=true}) => {
    const smallProjects = ['ConfigparserModules', 'WindowsModules', 'Virtual-Assistant', "TaskManager"] ;

    return (
        <div className="pt-20">
            {!onPage ? (<SectionHeader title={"complete-apps"} />) :  <SectionHeader title={"projects"} viewAllLink="/projects"/>}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 px-12 md:px-0 gap-y-8 my-8">
                <ProjectCard project={"AgileMaster"}/>

            </div>
            {!onPage && (
                <div className="mt-20">
                    <SectionHeader title={"small-projects"} />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 px-12 md:px-0 gap-y-8 my-8">
                        {smallProjects.map((project) => (
                            <ProjectCard key={project} project={project}
                                         smallProject={true}/>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;