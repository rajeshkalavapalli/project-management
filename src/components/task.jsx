import NewTask from "./NewTask";

function Task({ tasks, onAdd, onDelete }) {
    return (
        <section className="mt-8 px-4">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Tasks</h2>
            <NewTask onAdd={onAdd} />

            {tasks.length === 0 && (
                <p className="text-gray-500 my-4 text-center italic">No tasks added yet.</p>
            )}

            {tasks.length > 0 && (
                <ul className="p-4 mt-6 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 shadow-md">
                    {tasks.map((task) => (
                        <li key={task.id} className="flex justify-between items-center p-3 my-2 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                            <span className="text-gray-800">{task.text}</span>
                            <button 
                                className="text-red-600 hover:text-red-800 font-medium transition-all duration-300"
                                onClick={() => onDelete(task.id)}
                            >
                                Clear
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default Task;
