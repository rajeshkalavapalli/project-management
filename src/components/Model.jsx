import { forwardRef, useImperativeHandle, useState, useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(({ children, buttonCaption = "Close" }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        open() {
            setIsOpen(true);
        },
        close() {
            setIsOpen(false);
        },
    }));

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"; 
        } else {
            document.body.style.overflow = ""; 
        }

        return () => {
            document.body.style.overflow = ""; 
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const modalRoot = document.getElementById("modal-root");
    if (!modalRoot) {
        console.error("Error: Modal root element (#modal-root) not found.");
        return null;
    }

    return createPortal(
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
            role="dialog"
            aria-modal="true"
            onClick={() => setIsOpen(false)} 
        >
            <div 
                className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full transform transition-all duration-300 scale-95 hover:scale-100 relative"
                onClick={(e) => e.stopPropagation()} 
            >
                {children}
                <button
                    onClick={() => setIsOpen(false)}
                    className="mt-4 bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition active:scale-95"
                >
                    {buttonCaption}
                </button>
            </div>
        </div>,
        modalRoot
    );
});

export default Modal;
