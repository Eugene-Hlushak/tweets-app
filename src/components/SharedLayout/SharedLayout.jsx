import { Outlet } from 'react-router-dom/dist';
import {
  Link,
  HeaderContainer,
  Nav,
  HeaderWrapper,
} from '../SharedLayout/SharedLayout.styled';

const SharedLayout = () => {
  return (
    <div>
      <HeaderWrapper>
        <HeaderContainer>
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/tweets">Tweets</Link>
          </Nav>
        </HeaderContainer>
      </HeaderWrapper>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
