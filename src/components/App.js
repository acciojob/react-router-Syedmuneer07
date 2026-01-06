
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
  
    <Router>
      <nav>
        <ul>
          <li>
              <Link to="/">Home</Link>
          </li>
          <li>
              <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
    </Routes>
  
    </Router>
    
  )
}

export default App
