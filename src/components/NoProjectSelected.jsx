import projectImage from "../assets/project-1.png";
import Button from "./Button";

function NoProjectSelected({ onStartAddProject }) {
    return (
        <div className="flex flex-col justify-center items-center min-h-[60vh] w-full max-w-md mx-auto px-6 gap-6 bg-white shadow-md rounded-lg p-6">
            {/* Project Image */}
            <img 
                src={projectImage} 
                alt="Empty task list" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-lg"
            />

            {/* Heading */}
            <h2 className="text-2xl font-bold text-blue-700">
                No Project Selected
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-center text-lg">
                Select a project or start a new one to begin managing tasks.
            </p>

            {/* Button */}
            <Button 
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold px-4 py-2 rounded-lg shadow-md"
                onClick={onStartAddProject}
            >
                + Create New Project
            </Button>
        </div>
    );
}

export default NoProjectSelected;
