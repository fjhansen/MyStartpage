import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WelcomePage from './components/WelcomePage';
import MainSnip from './components/MainSnip';
import LambdaSnip from './components/LambdaSnip';
import ReactSnip from './components/ReactSnip';
import UtilsSnip from './components/UtilsSnip';
import OldWebSnip from './components/OldWebSnip';
import FunSnip from './components/FunSnip';
import theme from './config/theme'
import {Wrap, UL, LI, H1} from './config/theme'


import { ThemeProvider } from 'styled-components'
export { WelcomePage, MainSnip, LambdaSnip, ReactSnip, UtilsSnip, OldWebSnip, FunSnip, Wrap, UL, LI, H1}


ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
