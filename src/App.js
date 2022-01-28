import { Routes, Route } from 'react-router-dom'

// import rendering pages
import Home from './pages/Home';


function App() {
  return (
    <div className="App">    
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;

// App page is used to build the Route rules