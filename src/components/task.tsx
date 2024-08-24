'use client';

import { toggleTask } from '@/app/(plan)/_api/tasks';
import { Task as TaskType } from '@prisma/client';

type TaskProps = {
  task: TaskType;
};

export default function Task({ task }: TaskProps) {
  return (
    <div className="flex items-center justify-between gap-2 border-b py-4">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask({ id: task.id })}
          className="h-4 w-4"
        />
        <span className={task.completed ? `line-through` : ``}>
          {task.title}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <button className="text-sm text-blue-500">Edit</button>
        <button className="text-sm text-red-500">Delete</button>
      </div>
    </div>
  );
}
