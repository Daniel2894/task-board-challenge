import './TaskPanel.scss';
import TaskCard from "./task-card/TaskCard";

export default function TaskPanel({configuration, tasks, onDelete}) {
    return (
        <div className='task-panel' style={{borderTop: `6px solid ${configuration.shadowColor}`}}>
            <span className='task-panel__title'>{ configuration.status }</span>
            <section className='task-panel__container'>
                { tasks.map(task => <TaskCard task={task} onDelete={onDelete} key={task.id}></TaskCard>)}
            </section>
        </div>
    );
}
