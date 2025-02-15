import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './routes/home/Home';
import Login from './view/login/Login';
import Profile from './view/profile/Profile';
import Feed from './view/feed/Feed';
import Connections from './view/connections/Connections';
import Requests from './view/requests/Requests';

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/chat/:targetUserId" element={<Chat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
