import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") return;
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
      {/* Task Input Field */}
      <input
        type="text"
        className="w-full sm:w-72 px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none 
        focus:ring-2 focus:ring-blue-400 shadow-sm text-gray-700"
        value={enteredTask}
        onChange={handleChange}
        placeholder="Enter a new task..."
      />

      {/* Add Task Button */}
      <button
        className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 
        transition-all duration-300 transform hover:scale-105 active:scale-95"
        onClick={handleClick}
      >
        + Add Task
      </button>
    </div>
  );
}
