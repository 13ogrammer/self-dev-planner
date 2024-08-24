import { getSegments } from "../../_api/segments";

export default async function Segments() {
  const segments = await getSegments()

  return (
    <div>
      <h1 className="text-3xl">Segments</h1>

      <ul>
        {segments.map((segment) => (
          <li key={segment.id} className="flex gap-4 items-center justify-between border-b last:border-b-0 py-4 ">
            <div>
              <h3>{segment.name}</h3>
              <p className="text-sm text-slate-400">{segment.description}</p>
            </div>
            {segment.name === 'Default' || <div className="flex gap-2">
              <button className="text-blue-500">Edit</button>
              <button className="text-red-500">Delete</button>
            </div>}
          </li>
        ))}
      </ul>
    </div>
  );
}