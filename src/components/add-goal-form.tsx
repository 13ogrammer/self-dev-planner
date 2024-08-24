'use client';

import type { Goal, Segment } from '@prisma/client';

import type { Action } from '@/app/types';
import Link from 'next/link';
import Submit from './submit';
import { useFormState } from 'react-dom';
import { useRef } from 'react';

type AddGoalFormProps = {
  segments: Segment[];
  action: Action<Goal>;
};

export default function AddGoalForm({ segments, action }: AddGoalFormProps) {
  const [state, formAction] = useFormState(action, {});
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = (formData: FormData) => {
    formAction(formData);
    ref.current?.reset();
  };

  return (
    <form ref={ref} action={handleSubmit} className="flex flex-col gap-6">
      {state.message && (
        <p
          aria-live="polite"
          role="status"
          className={`text-sm ${state.success ? `text-green-500` : `text-red-500`}`}
        >
          {state.message}{' '}
          {state.data && (
            <Link
              href={`/goals/${state.data.id}`}
              className="text-blue-500 underline"
            >
              View goal
            </Link>
          )}
        </p>
      )}
      <div>
        <label
          htmlFor="segmentId"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Select a segment
        </label>
        <select
          id="segmentId"
          name="segmentId"
          className="h-10 rounded border-r-8 border-transparent bg-slate-50 px-2 text-sm outline outline-neutral-200"
          required
        >
          {segments.map((segment) => (
            <option key={segment.id} value={segment.id}>
              {segment.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="h-10 w-full rounded border-2 p-2 text-sm"
          required
        />
      </div>
      <div>
        <label
          htmlFor="deadline"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Deadline
        </label>
        <input
          id="deadline"
          name="deadline"
          type="date"
          className="h-10 rounded border-2 p-2 text-sm"
          required
        />
      </div>
      <div className="flex justify-end gap-2 pt-4">
        <button className="rounded border px-4 py-2 text-sm" type="reset">
          Clear
        </button>
        <Submit content="Create" loadingText="Creating..." />
      </div>
    </form>
  );
}
