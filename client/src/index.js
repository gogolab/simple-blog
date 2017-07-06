import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render((
  <MuiThemeProvider>
    <Router>
      <App />
    </Router>
  </MuiThemeProvider>
), document.getElementById('root'));
  
registerServiceWorker();

// Needed for onTouchTap in Material UI
injectTapEventPlugin();



