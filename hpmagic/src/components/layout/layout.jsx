import Header from '../header/header';
import { Outlet } from 'react-router-dom';
import Breadcrumbs from '../breadcrum/breadcrumbs';

// Layout-komponent som inkluderer Header, Breadcrumbs og en Outlet for å rendre underordnede ruter.

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
