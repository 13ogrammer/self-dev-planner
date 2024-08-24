'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const siteRoutes = [
  { href: "/goals", label: "Goals" },
  { href: "/tasks", label: "Tasks" },
  { href: "/notes", label: "Notes" },
  { href: "/settings/segments", label: "Settings" },
]

export default function Header() {
  const pathname = usePathname();

  return <header className="flex justify-between items-center py-4 px-7 border-b">
    <h2 className="font-bold text-lg"><Link href="/">Self Dev Planner</Link></h2>
    <ul className="flex gap-4">
      {siteRoutes.map((route) => (
        <li key={route.href}>
          <Link href={route.href} className={`text-zinc-400 transition ${pathname === route.href ? "text-zinc-900" : ""}`}>
            {route.label}
          </Link>
        </li>
      ))}
    </ul>
  </header>
}