import './cssreset.css';
import './App.css';
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <>
    <div className="App">
        <Header />
        <Home />
    </div>
    {/* <Routes>
      <Route path="/home" element={<Home />}/>
    </Routes> */}
    </>
  );
}

export default App;
