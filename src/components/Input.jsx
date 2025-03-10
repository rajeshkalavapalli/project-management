import { forwardRef } from "react";

const Input = forwardRef(function Input({ label = "", textarea = false, id, ...props }, ref) {
  const baseClass =
    "w-full p-2 border-b-2 rounded-sm border-stone-300 bg-stone-200 focus:outline-none focus:border-stone-600 transition-all";

  return (
    <p className="flex flex-col gap-1 my-4">
      {label && (
        <label htmlFor={id} className="text-sm font-bold uppercase text-stone-600">
          {label}
        </label>
      )}
      {textarea ? (
        <textarea
          ref={ref}
          id={id}
          className={`${baseClass} resize-none`}
          rows="4"
          {...props}
        ></textarea>
      ) : (
        <input ref={ref} id={id} className={baseClass} {...props} />
      )}
    </p>
  );
});

export default Input;
