import Link from 'next/link';
import type { Task } from '@prisma/client';

type TaskListProps = {
  tasks: Task[];
};

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <table className="w-full text-left">
      <thead className="bg-slate-200 text-sm uppercase text-slate-500">
        <tr>
          <th className="p-3">Title</th>
          <th className="p-3">Deadline</th>
          <th className="p-3">Completed</th>
          <th className="p-3">&nbsp;</th>
          <th className="p-3">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id} className="border-b border-slate-300">
            <td className="p-3">{task.title}</td>
            <td className="p-3">
              {task.deadline &&
                new Date(task.deadline).toLocaleDateString('en-AU')}
            </td>
            <td className="p-3 text-center">
              <input
                type="checkbox"
                checked={task.completed}
                className="h-4 w-4"
              />
            </td>
            <td className="p-3">
              <Link
                href={`/goals/${task.goalId}`}
                className="text-sm text-blue-500 underline"
              >
                View goal
              </Link>
            </td>
            <td className="flex gap-2 p-3">
              <button className="text-sm text-blue-500">Edit</button>
              <button className="text-sm text-red-500">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
