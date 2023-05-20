import './cssreset.css';
import './App.css';
import Home from "./pages/Home.jsx";
import Meals from "./components/Meals.jsx";
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <>
    <div className="App">
        <header className="header">
        <Link to="/">The Meal</Link>   
        </header>
        <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/meals' element={<Meals />} /> */}
       </Routes>    
    </div>
    </>
  );
}

export default App;
