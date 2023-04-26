import { Link, HeaderContainer, Nav, HeaderWrapper } from './Header.styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/tweets">Tweets</Link>
        </Nav>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
