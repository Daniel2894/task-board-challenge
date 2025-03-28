import { Link } from 'react-router';
import { TriangleAlert } from 'lucide-react';
import './NotFound.scss';

export default function NotFoundPage() {
    return (
        <section className='not-found'>
            <figure className='not-found__figure'>
                <TriangleAlert className='not-found__icon'/>
            </figure>
            <h1 className='not-found__title'>Oops! this page doesn't exist.</h1>
            <p className='not-found__paragraph'>The page you are looking for was not found. Please try another route or go back home.</p>
            <Link to={'/'} className='not-found__link'>
                <button className='not-found__button'>Go back home</button>
            </Link>
        </section>
    );
}