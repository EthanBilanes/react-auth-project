import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Layout from './components/Layout';

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*Routes for pages */}

        {/*Change the path name of the landing page to "/" to default to that view */}
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />

      </Route>
    </Routes>
  );
}

export default App;
