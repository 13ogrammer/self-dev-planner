import { createGoal, getGoals } from '../_api/goals';

import AddGoalForm from '@/components/add-goal-form';
import Link from 'next/link';
import Modal from '@/components/modal';
import { getSegments } from '../_api/segments';

export default async function Goals() {
  const goals = await getGoals();
  const segments = await getSegments();

  return (
    <div>
      <div className="flex items-center justify-between pb-4">
        <h1 className="text-2xl">Goals</h1>
        <Modal trigger="Add goal">
          <AddGoalForm segments={segments} action={createGoal} />
        </Modal>
      </div>

      <div>
        {goals.length ? (
          <table className="w-full text-left">
            <thead className="bg-slate-200 text-sm uppercase text-slate-500">
              <tr>
                <th className="p-3">Segment</th>
                <th className="p-3">Name</th>
                <th className="p-3">Deadline</th>
                <th className="p-3">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {goals.map((goal) => (
                <tr key={goal.id} className="border-b border-slate-300">
                  <td className="p-3">{goal.segment.name}</td>
                  <td className="p-3">
                    <Link
                      href={`/goals/${goal.id}`}
                      className="text-blue-500 underline"
                    >
                      {goal.name}
                    </Link>
                  </td>
                  <td className="p-3">
                    {new Date(goal.deadline).toLocaleDateString('en-AU')}
                  </td>
                  <td className="flex gap-2 p-3">
                    <button type="button" className="text-sm text-blue-500">
                      Edit
                    </button>
                    <button type="button" className="text-sm text-red-500">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="py-4 text-slate-400">No goals found</p>
        )}
      </div>
    </div>
  );
}
