import { createGoal, getGoals } from '../_api/goals';

import AddGoalForm from '@/components/add-goal-form';
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
          goals.map((goal) => (
            <div key={goal.id} className="mb-4 rounded border p-4">
              <h2 className="text-xl">{goal.name}</h2>
              <p className="text-gray-500">{goal.deadline.toISOString()}</p>
            </div>
          ))
        ) : (
          <p className="py-4 text-slate-400">No goals found</p>
        )}
      </div>
    </div>
  );
}
