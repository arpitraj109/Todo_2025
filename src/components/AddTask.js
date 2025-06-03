import React from "react";

function AddTask({ task, setTask, onAdd }) {
  return (
    <div className="input-group mb-4 shadow-sm">
      <span className="input-group-text"><i className="bi bi-list"></i></span>
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onAdd()}
      />
      <button className="btn btn-primary btn-lg" onClick={onAdd}>
        <i className="bi bi-plus-lg me-1"></i>
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
