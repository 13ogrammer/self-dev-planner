'use client';

import type { Action } from '@/app/types';
import Submit from './submit';
import type { Task } from '@prisma/client';
import { useFormState } from 'react-dom';
import { useRef } from 'react';

type AddTaskFormProps = {
  goalId: number;
  action: Action<Task>;
};

export default function AddTaskForm({ goalId, action }: AddTaskFormProps) {
  const [state, formAction] = useFormState(action, {});
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = (formData: FormData) => {
    formAction(formData);
    ref.current?.reset();
  };

  return (
    <form action={handleSubmit} className="max-w-screen-md">
      <div className="flex items-center justify-between gap-4 py-4">
        <input type="hidden" name="goalId" value={goalId} />
        <input
          name="title"
          type="text"
          placeholder="New task"
          className="w-full rounded border border-slate-400 p-2"
        />
        <input
          name="deadline"
          type="date"
          className="rounded border border-slate-400 p-2"
        />
        <Submit content="Add" loadingText="Adding..." />
      </div>
      {state.message && (
        <p
          aria-live="polite"
          role="status"
          className={`text-sm ${state.success ? `text-green-500` : `text-red-500`}`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
