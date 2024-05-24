import { useSelector } from 'react-redux';
import { useState } from 'react';
import Task from './Task';

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 3;

  // Calculate the indexes of the tasks to display
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(tasks.length / tasksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {currentTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
      <nav>
        <ul className="flex justify-center mt-4">
          {pageNumbers.map(number => (
            <li key={number} className="mx-1">
              <button
                onClick={() => paginate(number)}
                className={`p-2 ${number === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} rounded`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default TaskList;

