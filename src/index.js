import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ReactDOM } from 'react';
import "bootstrap/dist/css/bootstrap.css"
import {BrowserRouter as Router} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <App />
  </Router>
);