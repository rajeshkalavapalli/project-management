import NewTask from "./NewTask";

function Task({tasks, onAdd, onDelete}) {
    return (
        <section className="mt-8">
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask onAdd={onAdd} />

            {tasks.length === 0 && (
                <p className="text-stone-800  my-4 ">this project doesnot have any tasks yet
                </p>
            )}
            {tasks.length > 0 && <ul className="p-4 mt-8 rounded-md bg-stone-200">
                {tasks.map((task)=> <li key={task.id} className="flex  justify-between my-4"> <span>{task.text}</span>
                <button className="text-stone-800 hover:text-red-800" onClick={()=>onDelete(task.id)}>clear</button>
                </li> )}
            </ul>}
        </section>
    )
}


export default Task;