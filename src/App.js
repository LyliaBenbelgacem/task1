import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import ForgetPassword from './pages/ForgetPassword';
import './App.css';
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
