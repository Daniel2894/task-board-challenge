import { Link } from 'react-router';
import './BoardActions.scss';

import { Plus } from 'lucide-react';

export default function BoardActions() {
    return (
        <div className='actions'>
            <p className='actions__title'>My Tasks</p>
            <Link className='actions__link' to={'create'}>
                <button className='actions__button'>Add Task<Plus className='actions__icon'/></button>
            </Link>
        </div>
    )
}
