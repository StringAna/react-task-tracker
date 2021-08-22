import { useState } from "react";

const AddTask = () => {
  const [text, settext] = useState("");
  const [day, setday] = useState("");
  const [reminder, setreminder] = useState(false);
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add task"
          value={text}
          onChange={(e) => settext(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day and Time</label>
        <input
          type="text"
          placeholder="Add Day and Time"
          value={day}
          onChange={(e) => setday(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(e) => setreminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
