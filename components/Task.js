import { useDispatch } from 'react-redux';
import { deleteTask } from '../store/tasksSlice';
import Link from 'next/link';

function Task({ task }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className="border p-4 rounded mb-2">
      <h3 className="text-xl font-bold">{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded mr-2">
        Delete
      </button>
      <Link legacyBehavior href={`/edit/${task.id}`}>
        <a className="bg-green-500 text-white p-2 rounded">Edit</a>
      </Link>
    </div>
  );
}

export default Task;
