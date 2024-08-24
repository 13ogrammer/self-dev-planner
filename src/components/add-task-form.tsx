'use client';

import { useRef } from 'react';
import Submit from './submit';

type AddTaskFormProps = {
  onSubmit: (formData: FormData) => Promise<void>;
};

export default function AddTaskForm({ onSubmit }: AddTaskFormProps) {
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    await onSubmit(formData);
    ref.current?.reset();
  };

  return (
    <form
      ref={ref}
      action={handleSubmit}
      className="mt-4 flex items-center justify-between gap-4 rounded bg-slate-200 p-2"
    >
      <input
        name="title"
        type="text"
        placeholder="New task"
        className="w-full rounded border p-2"
      />
      <Submit content="Add" />
    </form>
  );
}
