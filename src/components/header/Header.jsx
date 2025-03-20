import './Header.scss';
import Breadcrumb from "./breadcrumb/Breadcrumb";

export default function Header(){
    return (
        <section className='header-container'>
            <header className='header-container__bar'>
                <img src='src\assets\logo.svg' className='header-container__logo'></img>
            </header>
            <Breadcrumb></Breadcrumb>
        </section>
    );
}