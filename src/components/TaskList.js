import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onUpdate }) {
  return (
    <div className="list-group">
      {tasks.length === 0 ? (
        <div className="list-group-item text-center text-secondary py-5 fs-5">
          <i className="bi bi-inbox fs-1 d-block mb-3"></i>
          No tasks added yet.
        </div>
      ) : (
        tasks.map((task, i) => (
          <TaskItem
            key={i}
            task={task}
            index={i}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
