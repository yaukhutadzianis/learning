import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onChangeAddInput,
  onClickAddButton,
  deleteTodo,
  checkTodo,
  fCheckAll,
  fUnCheckAll,
  fSetCompleted,
  fSetPriority,
  setPriority
} from "./todoSlice";
import { RiDeleteBin2Fill } from "react-icons/ri";
import fCheckOnVisibleTodoItem from "./filtersController";

export default function Todo() {
  const [addInput, fCompletedVal, fPriorityVal] = useSelector((state) => [
    state.todo.addInput,
    state.todo.fCompletedVal,
    state.todo.fPriorityVal
  ]);
  const todos = useSelector((state) => {
    return state.todo.todos;
  });
  const dispatch = useDispatch();

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
                className={`bg-warning rounded px-3 py-2 my-2 d-flex align-items-center ${fCheckOnVisibleTodoItem(
                  todo,
                  fCompletedVal,
                  fPriorityVal
                )} `}
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
                    <option value="0">Low Priority</option>
                    <option value="1">Mid Priority</option>
                    <option value="2">High Priority</option>
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
          <p className="mt-4">Filter To-dos:</p>

          <div className="d-flex">
            <div className="border rounded mb-2 me-2">
              <input
                type="radio"
                className="btn-check"
                name="options"
                id="option0"
                autoComplete="off"
                value="0"
                checked={fCompletedVal === "0"}
                onChange={(e) => dispatch(fSetCompleted(e.target.value))}
              />
              <label className="btn btn-secondary" htmlFor="option0">
                All
              </label>
              <input
                type="radio"
                className="btn-check"
                name="options"
                id="option1"
                autoComplete="off"
                value="1"
                checked={fCompletedVal === "1"}
                onChange={(e) => dispatch(fSetCompleted(e.target.value))}
              />
              <label className="btn btn-secondary" htmlFor="option1">
                Completed
              </label>

              <input
                type="radio"
                className="btn-check"
                name="options"
                id="option2"
                autoComplete="off"
                value="2"
                checked={fCompletedVal === "2"}
                onChange={(e) => dispatch(fSetCompleted(e.target.value))}
              />
              <label className="btn btn-secondary" htmlFor="option2">
                Uncompleted
              </label>
            </div>
            <div className="border rounded mb-2 me-2">
              <input
                type="radio"
                className="btn-check"
                name="priority"
                id="priority0"
                autoComplete="off"
                value="0"
                checked={fPriorityVal === "0"}
                onChange={(e) => dispatch(fSetPriority(e.target.value))}
              />
              <label className="btn btn-secondary" htmlFor="priority0">
                All
              </label>
              <input
                type="radio"
                className="btn-check"
                name="priority"
                id="priority1"
                autoComplete="off"
                value="1"
                checked={fPriorityVal === "1"}
                onChange={(e) => dispatch(fSetPriority(e.target.value))}
              />
              <label className="btn btn-secondary" htmlFor="priority1">
                Low Priority
              </label>
              <input
                type="radio"
                className="btn-check"
                name="priority"
                id="priority2"
                autoComplete="off"
                value="2"
                checked={fPriorityVal === "2"}
                onChange={(e) => dispatch(fSetPriority(e.target.value))}
              />
              <label className="btn btn-secondary" htmlFor="priority2">
                Mid Priority
              </label>
              <input
                type="radio"
                className="btn-check"
                name="priority"
                id="priority3"
                autoComplete="off"
                value="3"
                checked={fPriorityVal === "3"}
                onChange={(e) => dispatch(fSetPriority(e.target.value))}
              />
              <label className="btn btn-secondary" htmlFor="priority3">
                High Priority
              </label>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
