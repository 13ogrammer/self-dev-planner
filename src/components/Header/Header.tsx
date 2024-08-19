'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const siteRoutes = [
  { href: "/", label: "Home" },
  { href: "/tasks", label: "Tasks" },
  { href: "/notes", label: "Notes" }
]

export default function Header() {
  const pathname = usePathname();

  return <header className="flex justify-between items-center py-4 px-7 border-b">
    <h1 className="font-bold text-lg">Self Dev Planner</h1>
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