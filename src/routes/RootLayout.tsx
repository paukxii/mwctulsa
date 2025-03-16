import { Outlet } from 'react-router-dom';
import Topbar from '../components/Topbar';

export default function RootLayout() {
    return (
      <>
      <Topbar />
        <Outlet />
      </>
    );
  }