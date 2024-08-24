import Task from '@/components/task';
import { createTask, getTasks } from '../_api/tasks';
import AddTaskForm from '@/components/add-task-form';

export default async function Tasks() {
  const tasks = await getTasks();

  return (
    <div>
      <h1 className="pb-2 text-2xl">Tasks</h1>

      <AddTaskForm onSubmit={createTask} />

      {tasks.length ? (
        <ul className="p-4">
          {tasks.map((task) => (
            <li key={task.id} className="border-b">
              <Task task={task} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="py-4 text-slate-400">No tasks found</p>
      )}
    </div>
  );
}
