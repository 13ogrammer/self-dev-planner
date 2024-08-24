'use client'

import { useRef } from "react"
import Submit from "./submit"

type AddTaskFormProps = {
  onSubmit: (formData: FormData) => Promise<void>
}

export default function AddTaskForm({ onSubmit }: AddTaskFormProps) {
  const ref = useRef<HTMLFormElement>(null)

  const handleSubmit = async (formData: FormData) => {
    await onSubmit(formData)
    ref.current?.reset()
  }

  return (
    <form
      ref={ref}
      action={handleSubmit}
      className="flex gap-4 items-center justify-between p-2 mt-4 rounded bg-slate-200">
      <input
        name="title"
        type="text"
        placeholder="New task"
        className="p-2 border rounded w-full"
      />
      <Submit content="Add" />
    </form>
  )
}