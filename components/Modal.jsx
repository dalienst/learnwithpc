import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa6'; // Close icon

const Modal = ({ children, onClose }) => {
    // Close modal when pressing the escape key
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity">
            <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md mx-auto p-6">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors"
                >
                    <FaTimes size={20} />
                </button>

                {/* Modal Content */}
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
