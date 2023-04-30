import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Main } from './Layout.styled';
import NavBar from 'components/NavBar/NavBar';
const Layout = () => {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default Layout;
