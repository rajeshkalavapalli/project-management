import { useRef } from "react";
import Input from "./Input";

function NewProject({onAdd}) {
    const title = useRef();
    const description = useRef();
    const dueDate= useRef();

    function handleSave () {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate= dueDate.current.value;

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,

            
        })
    }
    return (
        <div>
            {/* Full-width container for proper alignment */}
            <div className="flex justify-end w-full pr-8">
    <div className="flex gap-4">
        <button className="bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700">
            Cancel
        </button>
        <button className="bg-green-600 px-4 py-2 rounded text-white hover:bg-green-700"
        onClick={handleSave}>
            Save
        </button>
    </div>
</div>

            <div>
                <div>
                    <Input type="text" ref={title} label="Title" />
                    <Input ref= {description} textarea={true} />
                    <Input type="date" ref={dueDate} label="Due Date" />
                </div>
            </div>
        </div>
    );
}

export default NewProject
