import React, { useEffect, useState } from "react";
import "./style.css";
export default function Task() {
  const [TaskArr, setTaskArr] = useState([]);
  const [idno, setIdNo] = useState(1);
  const [Task, setTask] = useState({
    text: "",
    id: idno,
  });

  useEffect(() => {
    console.log(TaskArr);
  }, [TaskArr]);
  console.log(idno);
  function HandleTask(e) {
    const { name, value, id } = e.target; //if we do not want to use id in this way then we can also use newObject in submission funciton
    setTask((prev) => ({ ...prev, [name]: value, [id]: idno }));
  }
  function submission(e) {
    e.preventDefault();
    setTaskArr((prev) => [...prev, Task]);
    setIdNo((prev) => prev + 1);
  }

  function DeleteTask(id) {
    const newArr = TaskArr.filter((object) => object.id !== id);
    setTaskArr(newArr);
  }

  return (
    <main className="todo-page">
      <div className="todo-container">
        <div className="todo-card">

          <div className="todo-header">
            <span className="todo-badge">MY TASKS</span>
            <h1>Todo App</h1>
            <p>Organize your day, one task at a time.</p>
          </div>

          <form className="todo-form" onSubmit={submission}>
            <input
              type="text"
              id="id"
              name="text"
              value={Task.text}
              onChange={HandleTask}
              placeholder="What needs to be done?"
              className="todo-input"
            />

            <button type="submit" className="add-btn">
              <span>+</span>
              Add Task
            </button>
          </form>

          <div className="task-section">
            <div className="task-section-header">
              <h2>Your Tasks</h2>
              <span className="task-count">{TaskArr.length}</span>
            </div>

            <div className="task-list">
              {TaskArr.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-icon">✓</div>
                  <h3>No tasks yet</h3>
                  <p>Add your first task above to get started.</p>
                </div>
              ) : (
                TaskArr.map((task) => {
                  return (
                    <div
                      id={task.id}
                      key={task.id}
                      className="task"
                    >
                      <div className="task-left">
                        <div className="task-check">✓</div>
                        <h3 className="task-text">{task.text}</h3>
                      </div>

                      <button
                        className="delete-btn"
                        onClick={() => DeleteTask(task.id)}
                      >
                        Delete
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
