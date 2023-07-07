import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Math.random().toString(),
      text: text,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const completeTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const removeTask= (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <TodoContext.Provider value={{ tasks, addTask, completeTask, removeTask }}>
      {children}
    </TodoContext.Provider>
  );
};
