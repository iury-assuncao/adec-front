import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from '@react-router/dev/routes';

export default [
  layout('./layout/Layout.tsx', [
    route('/dashboard', './pages/Dashboard.tsx'),
    route('/financeiro', './pages/Financeiro.tsx'),

    ...prefix('/membros', [
      index('./pages/Membros/MembrosList.tsx'),
      route(':membroId', './pages/Membros/MembroDetalhe.tsx'),
    ]),
  ]),
  route('*?', './pages/NotFound.tsx'),
] satisfies RouteConfig;
