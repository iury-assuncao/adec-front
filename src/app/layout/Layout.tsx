import { Link, Outlet, useLocation } from 'react-router';

export default function Layout() {
  const location = useLocation();
  const currentPath = location.pathname;

  const linkClasses = (path: string) =>
    `px-2 py-1 rounded transition ${
      currentPath === path
        ? 'text-blue-600 font-semibold bg-blue-100'
        : 'text-gray-700 hover:text-blue-600'
    }`;

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold">LOGO</h2>
        <nav className="flex flex-col gap-2">
          <Link to="/dashboard" className={linkClasses('/dashboard')}>
            Dashboard
          </Link>
          <Link to="/members" className={linkClasses('/members')}>
            Membros
          </Link>
          <Link to="/financial" className={linkClasses('/financial')}>
            Financeiro
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex w-full">
        {/* Page content */}
        <main className="flex-1 p-6 min-w-full bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
