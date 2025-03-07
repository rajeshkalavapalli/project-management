import { forwardRef, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";

const Model = forwardRef(({ children, buttonCaption }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        open() {
            setIsOpen(true);
        },
        close() {
            setIsOpen(false);
        },
    }));

    if (!isOpen) return null;

    // 🔥 Ensure modal-root exists before rendering the portal
    const modalRoot = document.getElementById("modal-root");
    if (!modalRoot) {
        console.error("Error: Modal root element (#modal-root) not found.");
        return null;
    }

    return createPortal(
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-md">
                {children}
                <button
                    onClick={() => setIsOpen(false)}
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                >
                    {buttonCaption}
                </button>
            </div>
        </div>,
        modalRoot
    );
});

export default Model;
