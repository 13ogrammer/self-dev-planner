import AddTaskForm from '@/components/add-task-form';
import Link from 'next/link';
import TaskItem from '@/components/task-item';
import { createTask } from '../../_api/tasks';
import { getGoal } from '../../_api/goals';

export default async function Goal({ params }: { params: { id: number } }) {
  const goal = await getGoal(Number(params.id));
  const { id, name, segment, deadline, tasks } = goal;

  return (
    <div>
      <h4 className="mb-6">
        <Link href="/goals" className="text-sm text-slate-400 underline">
          Back to goals
        </Link>
      </h4>

      <h1 className="py-2 text-3xl">{name}</h1>
      <p className="text-sm uppercase text-slate-500">
        <span>{segment.name}</span> |{' '}
        <span>Deadline: {new Date(deadline).toLocaleDateString('en-AU')}</span>
      </p>

      <div className="mt-4">
        <AddTaskForm goalId={id} action={createTask} />
      </div>

      {tasks.length ? (
        tasks.map((task) => <TaskItem key={task.id} {...task} />)
      ) : (
        <p className="py-2 text-slate-400">No tasks found</p>
      )}
    </div>
  );
}
