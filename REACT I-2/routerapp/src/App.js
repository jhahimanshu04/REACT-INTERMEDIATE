import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Labs from "./Components/Labs";
import Support from "./Components/Support";
import About from "./Components/About";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import MainHeader from './Components/MainHeader';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/support">Support</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/labs">Labs</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<MainHeader />} >
            {/*  for Handling Default section */} 
          <Route index element={<Home/>}/>
          <Route path="/labs" element={<Labs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
             </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
