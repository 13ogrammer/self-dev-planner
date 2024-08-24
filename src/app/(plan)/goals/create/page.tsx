import AddGoalForm from '@/components/add-goal-form';
import { createGoal } from '../../_api/goals';
import { getSegments } from '../../_api/segments';

export default async function CreateGoal() {
  const segments = await getSegments();

  return (
    <div>
      <h1 className="pb-4 text-2xl">Create Goal</h1>
      <div className="pt-4">
        <AddGoalForm segments={segments} action={createGoal} />
      </div>
    </div>
  );
}
