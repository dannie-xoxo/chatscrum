import React from 'react';
import './App.css';
import SignIn from './components/SignIn/signIn';
import SignUp from './components/signUp/signUp';

function App() {
  return (
    <div className="App">
      <SignUp />
      <SignIn />
    </div>
  );
}

export default App;
