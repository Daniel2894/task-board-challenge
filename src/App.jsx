import './App.scss'
import Header from './components/header/Header';
import { Outlet } from 'react-router';

export default function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
