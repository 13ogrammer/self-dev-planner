import Task from '@/components/Task';
import { createTask, getTasks } from '../api/tasks';
import AddTaskForm from '@/components/AddTaskForm';

export default async function Tasks() {
  const tasks = await getTasks()

  return (
    <div>
      <h1 className="text-2xl">Tasks</h1>

      <AddTaskForm onSubmit={createTask} />

      <ul className='p-4'>
        {tasks.map((task) => (
          <li key={task.id} className="border-b">
            <Task task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
}