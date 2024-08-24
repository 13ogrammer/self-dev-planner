import Link from "next/link";
import { getGoals } from "../_api/goals";

export default async function Goals() {
  const goals = await getGoals()

  return (
    <div>
      <div className="flex items-center justify-between pb-4">
        <h1 className="text-2xl">Goals</h1>
        <Link href="/goals/create" className="bg-blue-500 text-white text-sm border rounded px-4 py-2">Create Goal</Link>
      </div>

      <div>
        {goals.length ? goals.map((goal) => (
          <div key={goal.id} className="border rounded p-4 mb-4">
            <h2 className="text-xl">{goal.name}</h2>
            <p className="text-gray-500">{goal.deadline.toISOString()}</p>
          </div>
        )) : (
          <p className="text-slate-400 py-4">No goals found</p>
        )}
      </div>
    </div>
  )
}