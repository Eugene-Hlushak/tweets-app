import { Route, Routes, Link } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import SharedLayout from './SharedLayout/SharedLayout';
import Tweets from '../pages/Tweets';
import Home from '../pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
