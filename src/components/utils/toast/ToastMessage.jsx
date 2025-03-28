import './ToastMessage.scss';
import { Check, X } from 'lucide-react';

export default function ToastMessage({active, title, description, onClose}) {
    return active && (
        <div className='toast'>
            <Check className='toast__check-icon' strokeWidth={3}/>
            <section className='text-section'>
                <h4 className='text-section__title'>{title}</h4>
                <p className='text-section__text'>{description}</p>
            </section>
            <X className='toast__close-icon' onClick={onClose}/>
        </div>
    );
}