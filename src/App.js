import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/main';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfoilo from './pages/Portfoilo';
import Team from './pages/Team';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/portfoilo' element={<Portfoilo/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
