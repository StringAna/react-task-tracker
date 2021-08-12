import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <div>
      {/*Map through tasks, and output something based on each tasks element(create List) 
      map takes in a function,
      for each task,return text of the task. */}
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Tasks;
