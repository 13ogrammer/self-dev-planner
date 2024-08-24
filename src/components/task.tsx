'use client'

import { toggleTask } from "@/app/(plan)/_api/tasks"
import { Task as TaskType } from "@prisma/client"

type TaskProps = {
  task: TaskType
}

export default function Task({
  task,
}: TaskProps) {
  return (
    <div className="flex gap-2 items-center justify-between border-b py-4">
      <div className='flex gap-2 items-center'>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask({ id: task.id })}
          className="w-4 h-4"
        />
        <span className={task.completed ? `line-through` : ``}>{task.title}</span>
      </div>
      <div className='flex gap-2 items-center'>
        <button className="text-sm text-blue-500">Edit</button>
        <button className="text-sm text-red-500">Delete</button>
      </div>
    </div>
  )
}