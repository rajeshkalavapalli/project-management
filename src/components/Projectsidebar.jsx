import Button from "./Button.jsx";

function Projectsidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
    return (
        <aside className="w-full md:w-72 px-6 py-10 bg-gradient-to-b from-blue-900 to-gray-900 text-white rounded-r-3xl shadow-2xl">
            <h2 className="mb-6 font-bold uppercase text-lg md:text-xl text-blue-300 tracking-wide">
                Your Projects
            </h2>
            
            {/* Add Project Button */}
            <div>
                <Button
                    className="w-full bg-blue-500 hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300 shadow-xl"
                    onClick={onStartAddProject}
                >
                    + Add Project
                </Button>
            </div>
            
            {/* Project List */}
            <ul className="mt-6">
                {projects.length === 0 ? (
                    <li className="text-gray-400">No projects available</li>
                ) : (
                    projects.map((project) => {
                        const isSelected = project.id === selectedProjectId;
                        return (
                            <li key={project.id} className="my-2">
                                <button
                                    className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all duration-300 
                                        ${isSelected 
                                            ? "bg-blue-600 text-white shadow-lg scale-105" 
                                            : "text-blue-200 hover:bg-blue-700 hover:text-white hover:shadow-md"}`}
                                    onClick={() => onSelectProject(project.id)}
                                >
                                    {project.title}
                                </button>
                            </li>
                        );
                    })
                )}
            </ul>
        </aside>
    );
}

export default Projectsidebar;
