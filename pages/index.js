import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTasks } from '../store/tasksSlice';
import AddTaskForm from '../components/AddTaskForm';
import TaskList from '../components/TaskList';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    dispatch(setTasks(storedTasks));
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <AddTaskForm />
      <TaskList />
    </div>
  );
}
