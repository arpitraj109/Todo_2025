import React, { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import backgroundImage from "./images/background.jpg";
import "./App.css";

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return;

    const newTask = {
      text: task.trim(),
      date: new Date().toLocaleString(),
    };

    setTasks([...tasks, newTask]);
    setTask('');
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const updateTask = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = newText;
    setTasks(updatedTasks);
  };

  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div 
      className="min-vh-100 d-flex align-items-center justify-content-center py-5"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10 col-md-8 col-lg-6 p-5 shadow-sm" style={{ border: '2px solid white', borderRadius: '0.5rem', fontFamily: "'Roboto', sans-serif" }}>
            <h2 className="text-center text-dark mb-3">{today}</h2>
            <h1 className="text-center mb-5 text-dark">To-Do List</h1>
            <div className="mb-4">
              <AddTask task={task} setTask={setTask} onAdd={addTask} />
            </div>
            <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
