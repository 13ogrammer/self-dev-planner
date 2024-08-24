import { useFormStatus } from 'react-dom';

type SubmitProps = {
  content: string;
  loadingText: string;
};

export default function Submit({ content, loadingText }: SubmitProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="rounded bg-blue-500 p-2 text-white transition disabled:bg-blue-200"
    >
      {pending ? loadingText : content}
    </button>
  );
}
