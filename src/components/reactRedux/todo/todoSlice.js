import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    addInput: "",
    isChecked: false,
    fCompletedVal: "0",
    fPriorityVal: "0",
    todos: []
  },
  reducers: {
    onChangeAddInput: (state, action) => {
      state.addInput = action.payload;
    },
    onClickAddButton: (state) => {
      if (state.addInput === "") {
        return;
      }
      const todo = {
        id: Date.now() + Math.random(),
        title: state.addInput,
        isChecked: false,
        priorityVal: "0"
      };
      state.todos.push(todo);
      state.addInput = "";
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
    checkTodo: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isChecked = !todo.isChecked;
        }
        return todo;
      });
    },
    setPriority: (state, action) => {
      const [aid, atarget] = action.payload;
      state.todos.map((todo) => {
        if (todo.id === aid) {
          todo.priorityVal = atarget;
        }
        return todo;
      });
    },
    fCheckAll: (state) => {
      state.todos.map((todo) => {
        return (todo.isChecked = true);
      });
    },
    fUnCheckAll: (state) => {
      state.todos.map((todo) => {
        return (todo.isChecked = false);
      });
    },
    fSetCompleted: (state, action) => {
      state.fCompletedVal = action.payload;
    },
    fSetPriority: (state, action) => {
      state.fPriorityVal = action.payload;
    }
  }
});

export const {
  onChangeAddInput,
  onClickAddButton,
  deleteTodo,
  fCheckAll,
  fUnCheckAll,
  fSetCompleted,
  fSetPriority,
  setPriority,
  checkTodo
} = todoSlice.actions;
export default todoSlice.reducer;
