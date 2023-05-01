import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Main } from './Layout.styled';
import { FooterDaco, Footer, FooterText } from './Layout.styled';
import { BsArrow90DegUp } from 'react-icons/bs';
import NavBar from 'components/NavBar/NavBar';
import Loader from 'components/Loader/Loader';
import Cinema from '../../img/Cinema.png';

const Layout = () => {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer>
        <FooterText>
          <BsArrow90DegUp />
          look at casts or reviews
        </FooterText>
        <FooterDaco src={Cinema} alt="" />
        <FooterText>find any film you want</FooterText>
      </Footer>
    </>
  );
};

export default Layout;
