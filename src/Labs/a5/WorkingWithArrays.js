import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });
  const [todos, setTodos] = useState([]);
  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };
  const deleteTodo = async (todo) => {
    try {
      const response = await axios.delete(`${API}/${todo.id}`);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };
  const updateTodo = async () => {
    try {
      const response = await axios.put(`${API}/${todo.id}`, todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      setTodo({});
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };
  const removeTodo = async (todo) => {
    const response = await axios.get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };
  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };
  const fetchTodoById = async (id) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const API = "http://localhost:4000/a5/todos";
  return (
    <div>
      <div>
        <h2>Working with Arrays</h2>
        <div class="container mt-3">
          <div class="form-group">
            <label for="todoId">Todo ID</label>
            <input
              type="text"
              class="form-control"
              id="todoId"
              value={todo.id}
              readOnly
            />
          </div>
          <div class="form-group  mb-2 mt-2">
            <label for="todoTitle">Title</label>
            <input
              type="text"
              class="form-control"
              id="todoTitle"
              onChange={(e) => setTodo({ ...todo, title: e.target.value })}
              value={todo.title}
            />
          </div>
          <div class="form-group  mb-2 mt-2">
            <label for="todoDescription">Description</label>
            <textarea
              class="form-control"
              id="todoDescription"
              onChange={(e) =>
                setTodo({ ...todo, description: e.target.value })
              }
              value={todo.description}
            ></textarea>
          </div>
          <div class="form-group  mb-2 mt-2">
            <label for="todoDueDate">Due Date</label>
            <input
              type="date"
              class="form-control"
              id="todoDueDate"
              onChange={(e) => setTodo({ ...todo, due: e.target.value })}
              value={todo.due}
            />
          </div>
          <div class="form-group form-check  mb-2 mt-2">
            <input
              type="checkbox"
              class="form-check-input"
              id="todoCompleted"
              onChange={(e) =>
                setTodo({ ...todo, completed: e.target.checked })
              }
              value={todo.completed}
            />
            <label class="form-check-label" for="todoCompleted">
              Completed
            </label>
          </div>
        </div>

        <button onClick={postTodo} className="btn btn-warning mb-2 w-100">
          Post Todo
        </button>
        <button onClick={createTodo} className="btn btn-primary mb-2 w-100">
          Create Todo
        </button>
        <button onClick={updateTodo} className="btn btn-success mb-2 w-100">
          Update Title
        </button>
        {errorMessage && (
          <div className="alert alert-danger mb-2 mt-2">{errorMessage}</div>
        )}
        <ul className="list-group">
          {todos.map((todo) => (
            <li key={todo.id} className="list-group-item">
              <button
                onClick={() => fetchTodoById(todo.id)}
                className="btn btn-warning me-2 float-end"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(todo)}
                className="btn btn-danger float-end ms-2"
              >
                Delete
              </button>
              <input checked={todo.completed} type="checkbox" readOnly />
              {todo.title}
              <p>{todo.description}</p>
              <p>{todo.due}</p>
            </li>
          ))}
        </ul>
      </div>

      <h3>Working with Arrays</h3>

      <input
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: e.target.value,
          })
        }
        className="form-control mb-2"
        type="number"
      />
      <input
        value={todo.title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
        className="form-control mb-2"
        type="text"
      />
      <button onClick={createTodo} className="btn btn-primary mb-2 w-100">
        Create Todo
      </button>
      <button onClick={updateTitle} className="btn btn-success mb-2 w-100">
        Update Title
      </button>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <button
              onClick={() => fetchTodoById(todo.id)}
              className="btn btn-warning me-2 float-end"
            >
              Edit
            </button>
            <button
              onClick={() => removeTodo(todo)}
              className="btn btn-danger float-end"
            >
              Remove
            </button>
            {todo.title}
          </li>
        ))}
      </ul>

      <h3>Updating an Item in an Array</h3>
      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary me-2"
      >
        Update Title to {todo.title}
      </a>
      <h3>Deleting from an Array</h3>
      <a href={`${API}/${todo.id}/delete`} className="btn btn-primary me-2">
        Delete Todo with ID = {todo.id}
      </a>

      <h4>Retrieving Arrays</h4>
      <a href={API} className="btn btn-primary me-2">
        Get Todos
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        className="form-control"
        // value={id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <a href={`${API}/${todo.id}`} className="btn btn-primary me-2">
        Get Todo by ID
      </a>
      <h3>Filtering Array Items</h3>
      <a href={`${API}?completed=true`} className="btn btn-primary me-2">
        Get Completed Todos
      </a>
      <h4>Creating new Items in an Array</h4>
      <a href={`${API}/create`} className="btn btn-primary me-2">
        Create Todo
      </a>
    </div>
  );
}
export default WorkingWithArrays;
