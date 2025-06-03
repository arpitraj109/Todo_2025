import React, { useState } from "react";

function TaskItem({ task, index, onDelete, onUpdate }) {
  const [edit, setEdit] = useState(false);
  const [edited, setEdited] = useState(task.text);

  const handleSave = () => {
    if (edited.trim() === '') return;
    onUpdate(index, edited.trim());
    setEdit(false);
  };

  return (
    <div className="list-group-item list-group-item-action border-bottom" style={{ backgroundColor: 'transparent' }}>
      <div className="d-flex justify-content-between align-items-center flex-column flex-md-row gap-2 py-2">
        <div className="flex-grow-1">
          {edit ? (
            <div className="input-group shadow-sm">
              <input
                type="text"
                className="form-control"
                value={edited}
                onChange={(e) => setEdited(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                autoFocus
              />
              <button className="btn btn-success" onClick={handleSave}>
                <i className="bi bi-check-lg"></i>
              </button>
            </div>
          ) : (
            <>
              <h5 className="mb-1 text-dark">{task.text}</h5>
              <small className="text-secondary">
                <i className="bi bi-clock me-1"></i>
                Added on: {task.date}
              </small>
            </>
          )}
        </div>

        {!edit && (
          <div className="btn-group shadow-sm">
            <button 
              className="btn btn-outline-warning btn-sm" 
              onClick={() => setEdit(true)}
            >
              <i className="bi bi-pencil me-1"></i>
              Edit
            </button>
            <button 
              className="btn btn-outline-danger btn-sm" 
              onClick={() => onDelete(index)}
            >
              <i className="bi bi-trash me-1"></i>
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskItem;
