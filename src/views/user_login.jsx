import React from 'react';
import Header_User_Display from '../components/Header_User_Display/Header_User_Display';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function User_Login() {
  return (
    <div className="user_login">
        <Router>
            <Header_User_Display/>
        </Router>
    </div>
  );
}

export default User_Login;