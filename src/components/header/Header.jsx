import { Link } from 'react-router';
import './Header.scss';
import Breadcrumb from "./breadcrumb/Breadcrumb";

export default function Header(){
    return (
        <section className='header-container'>
            <header className='header-container__bar'>
                <Link to={'/'}>
                    <img src='src\assets\logo.svg' className='header-container__logo'></img>
                </Link>
            </header>
            <Breadcrumb></Breadcrumb>
        </section>
    );
}