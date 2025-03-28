import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import NotFoundPage from './components/not-found/NotFound.jsx';
import Board from './components/board/Board.jsx';
import FormTask from './components/form-task/FormTask.jsx';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />, 
    errorElement: <NotFoundPage />,
    children: [
      {index: true, element: <Board/>},
      {path: 'create', element: <FormTask editMode={false}/>},
      {path: 'edit/:id', element: <FormTask editMode={true}/>},
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
