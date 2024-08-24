import { useFormStatus } from "react-dom"

export default function Submit({ content }: { content: string }) {
  const { pending } = useFormStatus()

  return <button type="submit" disabled={pending} className="p-2 bg-blue-500 disabled:bg-blue-200 transition text-white rounded">{content}</button>
}