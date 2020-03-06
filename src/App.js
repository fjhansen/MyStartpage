import React from 'react';
import logo from './logo.svg';
import './App.css';
//import WelcomePage from './components/WelcomePage'
import * as All from './index';
import * as T from './config/theme'
export {T}

function App(props) {
  console.log("A P P  P R O P S", props)
  return (
    <main>
      <All.WelcomePage/>

      <All.Wrap>
      <All.MainSnip/>
      <All.LambdaSnip/>
      <All.ReactSnip/>
      <All.UtilsSnip/>
      <All.OldWebSnip/>
      <All.FunSnip/>
      </All.Wrap>

    </main>
  );
}

export default App;
