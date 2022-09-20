import { FC, NamedExoticComponent } from 'react';
import { Routes, Route } from 'react-router-dom';

import Admin from 'src/ui/admin/Layout';
import Auth from 'src/ui/admin/auth/Layout';
import routers, { Router, LayoutKey } from '../config/configRoutes';

export type Layout = {
  [key in LayoutKey]: NamedExoticComponent;
};
const layout: Layout = {
  ADMIN: Admin,
  AUTH: Auth,
};
const Layouts: FC = () => {
  return (
    <>
      <Routes>
        {Object.keys(layout).map((key) => {
          const Layout = layout[key as LayoutKey];
          return (
            <Route path="/" element={<Layout />} key={key}>
              {mapRoutePath(routers[key as LayoutKey])}
            </Route>
          );
        })}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
};

const mapRoutePath = (routes: Array<Router>) => {
  return routes.map((route) => {
    if (route.children) {
      return (
        <Route
          index={route.index}
          path={route.path}
          element={route.component}
          key={route.id}
        >
          {mapRoutePath(route.children)}
        </Route>
      );
    }
    return (
      <Route
        index={route.index}
        key={route.id}
        path={route.path}
        element={route.component}
      />
    );
  });
};

export default Layouts;
