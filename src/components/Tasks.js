const tasks = [
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
];
const Tasks = () => {
  return (
    <div>
      {/*Map through tasks, and output something based on each tasks element(create List) 
      map takes in a function,
      for each task,return text of the task. */}
      {tasks.map((task) => (
        <h3>{task.text}</h3>
      ))}
    </div>
  );
};

export default Tasks;
