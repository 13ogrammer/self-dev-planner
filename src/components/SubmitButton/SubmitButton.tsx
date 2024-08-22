import { useFormStatus } from "react-dom"

export default function SubmitButton({ content }: { content: string }) {
  const { pending } = useFormStatus()

  console.log('pending', pending)

  return <button type="submit" disabled={pending} className="p-2 bg-blue-500 disabled:bg-blue-200 transition text-white rounded">{content}</button>
}