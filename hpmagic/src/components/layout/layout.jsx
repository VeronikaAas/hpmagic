import Header from '../header/header';
import { Outlet } from 'react-router-dom';
import Breadcrumbs from '../breadcrum/breadcrumbs';

export default function Layout() {
  return (
    <div className="">
      <Header />
      <Breadcrumbs />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}
