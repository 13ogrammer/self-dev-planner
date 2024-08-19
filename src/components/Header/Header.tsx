import Link from "next/link";

export default function Header() {
  return <header className="flex justify-between items-center py-4 px-7 border-b">
    <h1 className="font-bold text-lg">Self Dev Planner</h1>
    <nav className="flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/tasks">Tasks</Link>
      <Link href="/notes">Notes</Link>
    </nav>
  </header>
}