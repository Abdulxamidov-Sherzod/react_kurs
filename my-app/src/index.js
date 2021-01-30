import { StrictMode } from 'react';
import {render} from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from  'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


render(
  <Router>
  <StrictMode>
    <App />
  </StrictMode>
  </Router>
  ,
  document.getElementById('root')
);

