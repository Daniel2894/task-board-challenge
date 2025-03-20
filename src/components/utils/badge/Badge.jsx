import './Badge.scss';
import { PRIORITY } from './../constants';

import { ArrowUp, ArrowRight, ArrowDown} from 'lucide-react';

export default function Badge({type}) {
    let currentBadge;

    if (type === PRIORITY.HIGH) {
        currentBadge = <ArrowUp className='badge__icon' />;
    } else if (type === PRIORITY.MEDIUM) {
        currentBadge = <ArrowRight className='badge__icon'/>;
    } else if (type === PRIORITY.LOW) {
        currentBadge = <ArrowDown className='badge__icon'/>;
    } else {
        return;
    };

    return (
        <span className={`badge badge--${type.toLowerCase()}`}>
            {type}{currentBadge}
        </span>
    );
}