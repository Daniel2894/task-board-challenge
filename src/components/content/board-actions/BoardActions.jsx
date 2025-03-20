import './BoardActions.scss';

import { Plus } from 'lucide-react';

export default function BoardActions() {
    return (
        <div className='actions'>
            <p className='actions__title'>My Tasks</p>
            <button className='actions__button'>Add Task<Plus className='actions__icon'/></button>
        </div>
    )
}
