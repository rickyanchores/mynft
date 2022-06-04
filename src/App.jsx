
import './App.css';
//MAIN IMPORTS
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

// IMPORTS PAGES 
import Gallery from './pages/Gallery/Gallery';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" component={Home} />
        </Routes>
        <Home />
        <Gallery />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
