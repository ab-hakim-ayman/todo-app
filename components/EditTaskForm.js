import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTask } from '../store/tasksSlice';
import { useRouter } from 'next/router';

function EditTaskForm({ id }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const task = useSelector((state) =>
    state.tasks.find((task) => task.id === id)
  );

  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTask({ id, title, description }));
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border p-2 rounded mb-2 w-full"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border p-2 rounded mb-2 w-full"
        required
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Edit Task
      </button>
    </form>
  );
}

export default EditTaskForm;
