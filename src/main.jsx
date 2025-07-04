import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);