import './Board.scss';
import BoardActions from './board-actions/BoardActions';
import TaskPanel from './task-panel/TaskPanel';
import ToastMessage from '../utils/toast/ToastMessage';
import { STATUS, PRIORITY } from '../utils/constants';
import { useState } from 'react';

export let initialTasks = [
    {
        id: 1,
        title: 'Comprar verduras',
        description: 'Tomate, lechuga, albahaca, romero, tomillo, pimenton y zanahoria',
        dueDate: new Date(),
        priority: PRIORITY.LOW,
        status: STATUS.COMPLETED
    },
    {
        id: 2,
        title: 'Entregar reporte Q1',
        description: 'Reporte de ventas del primer quarter de la empresa ACME INC',
        dueDate: new Date(),
        priority: PRIORITY.HIGH,
        status: STATUS.TODO
    },
    {
        id: 3,
        title: 'Pagar Cuentas',
        description: 'Tengo que pagar varias cuentas de la casa como el arriendo, los servicios, el internet, tambien hay que mercar',
        dueDate: new Date(),
        priority: PRIORITY.MEDIUM,
        status: STATUS.COMPLETED
    },
    {
        id: 4,
        title: 'Leer',
        description: 'Quiero leer habitos atomicos de James Clear',
        dueDate: new Date(),
        priority: PRIORITY.LOW,
        status: STATUS.TODO
    },
    {
        id: 5,
        title: 'Fuga de gas',
        description: 'Hay una fuga de gas en la casa que necesita ser atendida de forma urgente',
        dueDate: new Date(),
        priority: PRIORITY.HIGH,
        status: STATUS.TODO
    },
    {
        id: 6,
        title: 'Proyecto personal',
        description: 'Tengo que seguir construyendo la aplicación de task board para aprender React de una mejor manera y poder presentarme a varias de las oportunidades que se están generando dentro de la compañia para esta tecnologia',
        dueDate: new Date(),
        priority: PRIORITY.MEDIUM,
        status: STATUS.TODO
    },
]

export default function Board(){
    const [tasks, setTasks] = useState(initialTasks);
    const [showToast, setShowToast] = useState(false);

    const panelConfig = [
        {
            id: 1,
            status: STATUS.TODO,
            shadowColor: '#EF4444'
        },
        {
            id: 2,
            status: STATUS.COMPLETED,
            shadowColor: '#14B8A6'
        }
    ];

    function getPanel(config) {
        return (
            <TaskPanel 
                configuration={config} 
                tasks={getTaksByStatus(config.status)} 
                onDelete={(task) => onDelete(task)}
                key={config.id}
            />
        );
    }

    function getTaksByStatus(status) {
        return tasks.filter(task => task.status === status) || [];
    }

    function onDelete(deletedTask) {
        setTasks(tasks.filter(task => task.id !== deletedTask.id));
        setShowToast(true);
        setTimeout(() => setShowToast(false), 6000);
    }

    function onCloseModal() {
        setShowToast(false);
    }

    return (
        <>
            <ToastMessage active={showToast} title='Success' description='Task was deleted successfully' onClose={onCloseModal}/>
            <BoardActions></BoardActions>
            <div className='panel-container'>
                {
                    panelConfig.map(getPanel)
                }
            </div>
        </>
    );
}
