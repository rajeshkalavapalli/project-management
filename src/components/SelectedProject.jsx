import Task from "./task";

function SelectedProject({ 
    project, 
    onDelete, 
    onAddTask,
    tasks,
    onDeleteTask 
}) {
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (
        <div className="w-full max-w-[35rem] mt-16 px-6 py-6 bg-white shadow-lg rounded-xl">
            <header className="pb-4 mb-4 border-b border-gray-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-blue-700">{project.title}</h1>
                    <button 
                        className="text-red-500 hover:text-red-700 transition duration-300 font-medium"
                        onClick={onDelete}
                    >
                        Delete
                    </button>
                </div>
            </header>

            <p className="mb-4 text-gray-500 text-sm font-medium">{formattedDate}</p>
            <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{project.description}</p>
            
            {/* Task Component */}
            <Task onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks}/>
        </div>
    );
}

export default SelectedProject;
