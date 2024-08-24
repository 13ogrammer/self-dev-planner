import { useFormStatus } from 'react-dom';

export default function Submit({ content }: { content: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded bg-blue-500 p-2 text-white transition disabled:bg-blue-200"
    >
      {content}
    </button>
  );
}
