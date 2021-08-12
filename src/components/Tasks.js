const Tasks = ({ tasks }) => {
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
