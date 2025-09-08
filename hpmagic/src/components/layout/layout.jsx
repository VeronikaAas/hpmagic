import Header from '../header/header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="">
      <Header />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}
