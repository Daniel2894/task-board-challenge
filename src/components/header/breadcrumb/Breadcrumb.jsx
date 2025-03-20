import './Breadcrumb.scss';

import { House } from 'lucide-react';

export default function Breadcrumb(){
    return (  
        <nav className='breadcrumb'> 
            <House className='breadcrumb__icon'/>
            <p className='breadcrumb__text'>Home / <strong className='breadcrumb__text--selected'>My Tasks</strong></p>    
        </nav>
    );
}

