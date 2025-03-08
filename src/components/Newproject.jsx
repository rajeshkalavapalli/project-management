import { useRef } from "react";
import Input from "./Input";
import Model from "./Model";

function NewProject({ onAdd }) {
    const modelRef = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value.trim();
        const enteredDescription = description.current.value.trim();
        const enteredDueDate = dueDate.current.value.trim();

        if (!enteredTitle || !enteredDescription || !enteredDueDate) {
            modelRef.current?.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });

        // Clear inputs after saving
        title.current.value = "";
        description.current.value = "";
        dueDate.current.value = "";
    }

    return (
        <div className="p-8 bg-white rounded-lg shadow-xl w-full max-w-xl border border-gray-200">
            {/* Modal for Invalid Input */}
            <Model ref={modelRef} buttonCaption="Okay">
                <h2 className="font-bold text-red-600 text-lg">Invalid Input</h2>
                <p className="text-gray-600">Oops! Looks like you forgot something.</p>
                <p className="text-gray-500">Please ensure all fields are filled in before saving.</p>
            </Model>

            {/* Form Title */}
            <h2 className="text-2xl font-bold text-gray-700 mb-6">Create New Project</h2>

            {/* Input Fields */}
            <div className="flex flex-col gap-5">
                <Input type="text" ref={title} label="Project Title" />
                <Input ref={description} textarea={true} label="Project Description" />
                <Input type="date" ref={dueDate} label="Due Date" />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end mt-6 gap-4">
                <button className="bg-gray-400 px-5 py-2 rounded-lg text-white font-medium hover:bg-gray-500 transition">
                    Cancel
                </button>
                <button
                    className="bg-blue-600 px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
                    onClick={handleSave}
                >
                    Save 
                </button>
            </div>
        </div>
    );
}

export default NewProject;
