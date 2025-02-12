import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './routes/home/Home';
import Login from './view/login/Login';
import Profile from './view/profile/profile';
import Feed from './view/feed/Feed';

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
