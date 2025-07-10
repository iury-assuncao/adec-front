import { Sidebar } from '@/_components/Sidebar/Sidebar';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <div className="min-h-screen w-full flex bg-[rgba(255,255,255,0.51)]">
      <Sidebar />

      {/* Main content */}
      <div className="flex w-full">
        {/* Page content */}
        <main className="flex-1 p-6 min-w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
