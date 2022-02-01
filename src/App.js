import { Routes, Route } from 'react-router-dom'

// import rendering pages
import Home from './pages/Home';
import MCMD from './pages/MCMD'

function App() {
  return (
    <div className="App">    
    <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route path="/MCMD" element={<MCMD></MCMD>}></Route>
      </Routes>
    </div>
  );
}

export default App;

// App page is used to build the Route rules