import { getSegments } from '../../_api/segments';

export default async function Segments() {
  const segments = await getSegments();

  return (
    <div>
      <h1 className="pb-4 text-2xl">Segments</h1>

      {segments.length ? (
        <ul>
          {segments.map((segment) => (
            <li
              key={segment.id}
              className="flex items-center justify-between gap-4 border-b py-4 last:border-b-0"
            >
              <div>
                <h3>{segment.name}</h3>
                <p className="text-sm text-slate-400">{segment.description}</p>
              </div>
              {segment.name === 'Default' || (
                <div className="flex gap-2">
                  <button className="text-blue-500">Edit</button>
                  <button className="text-red-500">Delete</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="py-4 text-slate-400">No segments found</p>
      )}
    </div>
  );
}
