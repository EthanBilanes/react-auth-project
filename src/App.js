import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Layout from './components/Layout';
import LinkPage from './components/LinkPage';
import RequireAuth from './components/RequireAuth';

import { Routes, Route } from 'react-router-dom';


const ROLES = {
  'User': 2001,
  //'Editor': 1984,
  //'Admin': 5150
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="linkpage" element={<LinkPage />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
        {/*Public routes for pages */}

        {/*User Authorization required */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/" element={<Home />} />
        </Route>

      </Route>
    </Routes>
  );
}

export default App;
