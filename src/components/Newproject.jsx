import Input from "./Input";

function NewProject() {
    return (
        <div>
            {/* Full-width container for proper alignment */}
            <div className="flex justify-end w-full pr-8">
    <div className="flex gap-4">
        <button className="bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700">
            Cancel
        </button>
        <button className="bg-green-600 px-4 py-2 rounded text-white hover:bg-green-700">
            Save
        </button>
    </div>
</div>

            <div>
                <div>
                    <Input label="Title" />
                    <Input label="Description" textarea={true} />
                    <Input label="Due Date" />
                </div>
            </div>
        </div>
    );
}

export default NewProject
