import './DeleteTask.scss';
import { TriangleAlert } from 'lucide-react';

export default function DeleteTask() {
    return (
        <div className='delete-container'>
            <figure className='delete-figure'>
                <TriangleAlert className='delete-figure__icon'/>
            </figure>
            <section className='delete-text'>
                <h3 className='delete-text__title'>Delete Task</h3>
                <p className='delete-text__paragraph'>Are you sure you want to delete the task?</p>
            </section>
            <div className='delete-buttons'>
                <button className='delete-buttons__button delete-buttons--cancel'>Cancel</button>
                <button className='delete-buttons__button delete-buttons--delete'>Delete</button>
            </div>
        </div>
    );
}