import { Route, Routes, Link } from 'react-router-dom';

import Tweets from '../pages/Tweets';
import Home from '../pages/Home';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tweets">Tweets</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
