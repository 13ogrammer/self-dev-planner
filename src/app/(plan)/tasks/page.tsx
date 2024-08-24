import TaskItem from '@/components/task-item';
import TaskList from '@/components/task-list';
import { getTasks } from '../_api/tasks';

export default async function Tasks() {
  const tasks = await getTasks();

  return (
    <div>
      <h1 className="pb-2 text-2xl">Tasks</h1>

      {tasks.length ? (
        <TaskList tasks={tasks} />
      ) : (
        <p className="py-4 text-slate-400">No tasks found</p>
      )}
    </div>
  );
}
