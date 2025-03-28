import './FormTask.scss';
import { useParams, useNavigate } from 'react-router-dom';

export default function FormTask({editMode}) {
    const { id } = useParams(); 
    const navigate = useNavigate();

    const handleBack = () => {
      navigate(-1); // ← Va una página atrás en el historial
    };
  

    return (
        <>
            <button type="button" onClick={handleBack}>
                Volver
            </button>
            <span>{editMode ? `Edit task with id ${id}`: 'Create Task'}</span>
        </>
    );
}