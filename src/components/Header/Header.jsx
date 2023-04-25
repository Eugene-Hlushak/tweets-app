import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tweets">Tweets</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
