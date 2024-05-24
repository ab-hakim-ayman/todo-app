import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    deleteTask: (state, action) => {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const task = state.find(task => task.id === id);
      task.title = title;
      task.description = description;
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    setTasks: (state, action) => {
      return action.payload;
    }
  },
});

export const { addTask, deleteTask, editTask, setTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
