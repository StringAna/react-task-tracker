import React from "react";
import Header from "./components/Header";
import "./styles/index.css";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, settasks] = useState([
    {
      id: "1",
      text: "Doc appointment",
      day: "Feb 5th at 2:30 pm",
      reminder: true,
    },
    {
      id: "2",
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: "3",
      text: "Food shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  const addTask = (task) => {
    console.log(task);
  };

  const deleteTasks = (id) => {
    settasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    settasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTasks} onToggle={toggleReminder} />
      ) : (
        "No tasks"
      )}
    </div>
  );
}

export default App;
