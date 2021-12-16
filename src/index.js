import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import './index.css';

export default function App() {
  return (
    <App>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </App>
  ); 
}
// reportWebVitals();
ReactDOM.render(<App />, document.getElementById("root"));