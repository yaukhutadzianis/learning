import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onChangeAddInput,
  onClickAddButton,
  deleteTodo,
  fCheckAll,
  checkTodo,
  fUnCheckAll,
  setPriority
} from "./todoSlice";
import { RiDeleteBin2Fill } from "react-icons/ri";

export default function Todo() {
  const [addInput, priorityVal] = useSelector((state) => [
    state.todo.addInput,
    state.todo.priorityVal
  ]);
  const todos = useSelector((state) => {
    return state.todo.todos;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(1);
  }, [priorityVal]);

  return (
    <div className="container-fluid py-5 bg-secondary">
      <div className="container py-3">
        <input
          type="text"
          className="form-control mb-4"
          placeholder="To-do title"
          value={addInput}
          onChange={(e) => dispatch(onChangeAddInput(e.target.value))}
        />
        <button
          className="btn btn-warning me-3 mb-2"
          onClick={() => dispatch(onClickAddButton())}
        >
          Add
        </button>
        <hr />
        <div className="border p-4 mt-4 rounded">
          <p>Current To-dos:</p>
          {todos.map((todo) => {
            return (
              <div
                key={Date.now() + Math.random()}
                className="bg-warning rounded px-3 py-2 my-2 d-flex align-items-center"
              >
                <div className="form-check form-switch me-2">
                  <input
                    className="form-check-input pt-3 pb-2 mb-1 px-4"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    style={{ outline: "none !important", boxShadow: "none" }}
                    defaultChecked={todo.isChecked}
                    onChange={() => dispatch(checkTodo(todo.id))}
                  />
                </div>
                <div>{todo.title}</div>
                <div className="ms-auto d-flex">
                  <select
                    value={todo.priorityVal}
                    defaultChecked={todo.priorityVal}
                    onChange={(e) =>
                      dispatch(setPriority([todo.id, e.target.value]))
                    }
                    className="form-select ms-2"
                  >
                    <option value="aa">Low Priority</option>
                    <option value="bb">Mid Priority</option>
                    <option value="cc">High Priority</option>
                  </select>
                  <button
                    className="btn btn-danger p-0 px-1 fs-3 ms-2"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                  >
                    <RiDeleteBin2Fill />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-3">
          <p>Filter To-dos:</p>
          <button
            className="btn btn-warning me-2 mb-2"
            onClick={() => dispatch(fCheckAll())}
          >
            Check All
          </button>
          <button
            className="btn btn-warning me-2 mb-2"
            onClick={() => dispatch(fUnCheckAll())}
          >
            Uncheck All
          </button>
        </div>
        <hr />
      </div>
    </div>
  );
}
