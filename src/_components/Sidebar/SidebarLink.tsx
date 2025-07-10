import { Link, useLocation } from 'react-router';
import type { ReactNode } from 'react';

interface SidebarLinkProps {
  to: string;
  children: ReactNode;
}

export const SidebarLink = ({ to, children }: SidebarLinkProps) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <Link
      to={to}
      className={`flex flex-row gap-2 px-3 h-9 items-center rounded-xl transition !font-semibold text-base  !text-white ${
        isActive && 'bg-amber-500'
      }`}
    >
      {children}
    </Link>
  );
};
