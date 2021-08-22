import React from "react";
import Header from "./components/Header";
import "./styles/index.css";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
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
    //console.log(task);

    const id = Math.floor(Math.random() * 1000) + 1;
    // console.log(id);
    const newTask = { id, ...task };
    settasks([...tasks, newTask]);
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
      <Header onAdd={() => setShowAddTask(!showAddTask)} />
      {/* if showaddtask is true, then show the component AddTask */}
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTasks} onToggle={toggleReminder} />
      ) : (
        "No tasks"
      )}
    </div>
  );
}

export default App;
