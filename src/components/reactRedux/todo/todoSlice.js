import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    addInput: "",
    isChecked: false,
    priorityVal: "aa",
    todos: []
  },
  reducers: {
    onChangeAddInput: (state, action) => {
      state.addInput = action.payload;
    },
    onClickAddButton: (state, action) => {
      if (state.addInput === "") {
        return;
      }
      const todo = {
        id: Date.now() + Math.random(),
        title: state.addInput,
        isChecked: false,
        priorityVal: "aa"
      };
      state.todos.push(todo);
      state.addInput = "";
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        return todo.id != action.payload;
      });
    },
    checkTodo: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id == action.payload) {
          todo.isChecked = !todo.isChecked;
        }
      });
    },
    setPriority: (state, action) => {
      const [aid, atarget] = action.payload;
      state.todos.map((todo) => {
        if (todo.id == aid) {
          todo.priorityVal = atarget;
        }
      });
    },
    fCheckAll: (state, action) => {
      state.todos.map((todo) => {
        return (todo.isChecked = true);
      });
    },
    fUnCheckAll: (state, action) => {
      state.todos.map((todo) => {
        return (todo.isChecked = false);
      });
    }
  }
});

export const {
  onChangeAddInput,
  onClickAddButton,
  deleteTodo,
  fCheckAll,
  fUnCheckAll,
  setPriority,
  checkTodo
} = todoSlice.actions;
export default todoSlice.reducer;
