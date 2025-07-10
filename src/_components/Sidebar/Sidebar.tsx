import { HandCoins, LayoutDashboard, LogOut, UsersRound } from 'lucide-react';
import { SidebarLink } from './SidebarLink';

export const Sidebar = () => {
  return (
    <aside className="flex flex-col justify-between max-w-64 shadow-lg p-6 bg-[rgba(2,48,71,0.9)]">
      {/* LOGO */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">EloChurch</h2>

        <div className="w-full rounded-2xl bg-[#FEF4F4] p-3 font-medium">
          <p className="text-sm truncate">Assembleia de Deus Cabrália aa</p>
          <p className="text-xs text-[#EA7005]">Sede</p>
        </div>

        <nav className="flex flex-col gap-3">
          <SidebarLink to="/dashboard">
            <LayoutDashboard size={20} />
            Dashboard
          </SidebarLink>
          <SidebarLink to="/members">
            <UsersRound size={20} />
            Membros
          </SidebarLink>
          <SidebarLink to="/financial">
            <HandCoins size={20} />
            Financeiro
          </SidebarLink>
        </nav>
      </div>

      {/* Button log-out */}
      <button
        type="button"
        className="w-full h-9 !px-3 text-base flex items-center gap-2
            !bg-[#CDCCCB] hover:!bg-[#b3b3b3] transition-colors
             !focus:outline-none focus-visible:ring-2 !focus-visible:ring-[#060606]
             cursor-pointer appearance-none border-0"
      >
        <LogOut size={20} />
        Sair
      </button>
    </aside>
  );
};
