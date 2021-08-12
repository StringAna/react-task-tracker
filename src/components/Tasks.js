import { useState } from "react";

const Tasks = () => {
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
  return (
    <div>
      {/*Map through tasks, and output something based on each tasks element(create List) 
      map takes in a function,
      for each task,return text of the task. */}
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </div>
  );
};

export default Tasks;
