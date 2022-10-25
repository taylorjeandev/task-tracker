import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div 
    className={`task ${task.reminder ? 'reminder' : ''}`}
    onDoubleClick={() => onToggle(task.id)}>
        <h3>
            {task.text} 
            <FaTimes style={{ color: 'red', cursor: 'pointer' }} 
            onClick={() => onDelete(task.id)}
            /> 
        </h3>
        <h3>{task.day}</h3>
        <p><Link to={`/task/${task.id}`}>View Details</Link></p>
    </div>
  )
}

export default Task