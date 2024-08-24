'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const siteRoutes = [
  { href: '/goals', label: 'Goals' },
  { href: '/tasks', label: 'Tasks' },
  { href: '/notes', label: 'Notes' },
  { href: '/settings/segments', label: 'Settings' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between border-b px-7 py-4">
      <h2 className="text-lg font-bold">
        <Link href="/">Self Dev Planner</Link>
      </h2>
      <ul className="flex gap-4">
        {siteRoutes.map((route) => (
          <li key={route.href}>
            <Link
              href={route.href}
              className={`text-zinc-400 transition ${pathname === route.href ? 'text-zinc-900' : ''}`}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
