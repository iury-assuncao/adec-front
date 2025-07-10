import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from '@react-router/dev/routes';

export default [
  layout('./layout/Layout.tsx', [
    route('/dashboard', './pages/Dashboard/Dashboard.tsx'),
    route('/financial', './pages/Financial.tsx'),

    ...prefix('/members', [
      index('./pages/Members/MembersList.tsx'),
      route(':memberId', './pages/Members/MemberDetail.tsx'),
    ]),
  ]),
  route('*?', './pages/NotFound.tsx'),
] satisfies RouteConfig;
