import './TaskCard.scss';
import Badge from '../../../utils/badge/Badge';
import Modal from '../../../utils/modal/Modal';
import { Pencil, Trash2, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import DeleteTask from '../delete-task/DeleteTask';

export default function TaskCard({task, onDelete}){
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="card">
            <div className='card-header'>
                <span className='card-header__date'>{task.dueDate.toLocaleDateString()}</span>
                <section className='card-actions'>
                    <Trash2 className='card-actions__icon' onClick={() => setIsModalOpen(true)}/>
                    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}><DeleteTask /></Modal>
                    <Pencil className='card-actions__icon'/>
                </section>
            </div>
            <div className='card-title-section'>
                <h3 className='card-title-section__text'>{task.title}</h3>
                <Badge type={task.priority}/>
            </div>
            <section className='card-description'>
                <p className='card-description__paragraph'>{task.description}</p>
            </section>
            <div className='card-footer'>
                <a href='/' className='card-footer__link'>View more</a>
                <ChevronRight className='card-footer__icon'/>
            </div>
        </div>
    );
}
