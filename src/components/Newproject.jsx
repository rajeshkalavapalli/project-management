import { useRef } from "react";
import Input from "./Input";

function NewProject({onAdd}) {
    const title = useRef();
    const discription = useRef();
    const duedate = useRef();

    function handleSave (onAdd) {
        const enteredTitle = title.current.value;
        const enteredDiscription = discription.current.value;
        const enteredDueDate = duedate.current.value;

        onAdd({
            title:enteredTitle,
            discription:enteredDiscription,
            duedate:enteredDueDate,
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
                    <Input ref={title} label="Title" />
                    <Input ref= {discription} textarea={true} />
                    <Input ref={duedate} label="Due Date" />
                </div>
            </div>
        </div>
    );
}

export default NewProject
