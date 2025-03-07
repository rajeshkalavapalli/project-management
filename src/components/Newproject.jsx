import { useRef } from "react";
import Input from "./Input";
import Model from "./Model";

function NewProject({ onAdd }) {
    const modelRef = useRef();  // ✅ Fix: Use lowercase for variable names
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            modelRef.current?.open();  // ✅ Fix: Use optional chaining to avoid crashes
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    }

    return (
        <div>
            {/* ✅ Fix: Use lowercase modelRef */}
            <Model ref={modelRef} buttonCaption="Okay">
                <h2 className="font-bold text-red-600">Invalid Input</h2>
                <p>Oops... Looks like you forgot to enter a value!</p>
                <p>Please make sure you provide a value for every input field.</p>
            </Model>

            <div className="flex justify-end w-full pr-8">
                <div className="flex gap-4">
                    <button className="bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700">
                        Cancel
                    </button>
                    <button
                        className="bg-green-600 px-4 py-2 rounded text-white hover:bg-green-700"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </div>
            </div>

            <div>
                <Input type="text" ref={title} label="Title" />
                <Input ref={description} textarea={true} />
                <Input type="date" ref={dueDate} label="Due Date" />
            </div>
        </div>
    );
}

export default NewProject;
