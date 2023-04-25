import { Outlet } from 'react-router-dom/dist';
import Header from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <div>Footer</div>
    </div>
  );
};

export default SharedLayout;
