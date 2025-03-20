import './Modal.scss';
import { createPortal } from "react-dom";
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return createPortal(
        <div className="modal-overlay">
            <div className="modal">
                <X className="modal__close" onClick={onClose}/>
                {children}
            </div>
        </div>,
        document.getElementById("modal-root")
    );
}
