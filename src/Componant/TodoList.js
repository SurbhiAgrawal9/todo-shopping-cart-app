import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

const TodoList = () => {
    const { tasks, completeTask, removeTask } = useContext(TodoContext);

    return (
        <div>
            <h2>To-Do List</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.text}
                        <button onClick={() => completeTask(task.id)}>Complete</button>
                        <button onClick={() => removeTask(task.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
