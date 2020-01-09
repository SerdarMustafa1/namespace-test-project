import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/HomePage/HomePage';
import SignInSignUpPage from './pages/SignInSignUp/SignInSignUp';
// import Header from './components/HeaderComponent/HeaderComponent';
import './App.css';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={SignInSignUpPage} />
        <Route exact path="/home" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
