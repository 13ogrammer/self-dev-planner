'use client';

import { Task } from '@prisma/client';
import { toggleTask } from '@/app/(plan)/_api/tasks';

type TaskItemProps = Task & {};

export default function TaskItem({
  id,
  title,
  deadline,
  completed,
}: TaskItemProps) {
  return (
    <div className="flex items-center justify-between gap-2 border-b py-4">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTask({ id: id })}
          className="h-4 w-4"
        />
        <div>
          <h3 className={completed ? `line-through` : ``}>
            {title}{' '}
            {deadline && (
              <span className="text-sm text-slate-500">
                ({new Date(deadline).toLocaleDateString('en-AU')})
              </span>
            )}
          </h3>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="text-sm text-blue-500">Edit</button>
        <button className="text-sm text-red-500">Delete</button>
      </div>
    </div>
  );
}
