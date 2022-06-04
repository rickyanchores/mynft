
import './App.css';
//MAIN IMPORTS
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

// IMPORTS PAGES 
import Gallery from './pages/Gallery/Gallery';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import Footer from './pages/Footer/Footer';
import About from './pages/About/About';
import Banner from './components/Bannner/Banner';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact component={Home} />
        </Routes>
        <Home />
        <Gallery />
        <About />
        <Banner />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
