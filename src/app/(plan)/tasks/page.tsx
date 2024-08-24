import Task from '@/components/task';
import { createTask, getTasks } from '../_api/tasks';
import AddTaskForm from '@/components/add-task-form';

export default async function Tasks() {
  const tasks = await getTasks()

  return (
    <div>
      <h1 className="text-2xl pb-2">Tasks</h1>

      <AddTaskForm onSubmit={createTask} />

      {tasks.length ? (
        <ul className='p-4'>
          {tasks.map((task) => (
            <li key={task.id} className="border-b">
              <Task task={task} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-slate-400 py-4">No tasks found</p>
      )}
    </div>
  );
}