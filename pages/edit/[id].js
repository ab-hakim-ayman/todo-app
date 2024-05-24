import { useRouter } from 'next/router';
import EditTaskForm from '../../components/EditTaskForm';

function EditTaskPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Task</h1>
      {id && <EditTaskForm id={id} />}
    </div>
  );
}

export default EditTaskPage;
