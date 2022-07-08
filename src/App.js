import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Website from './components/Websites/Websites';
import Footer from './components/Footer/Footer';
import Design from './components/Design/Design';
 
function App() {
  return (
      <Router>
        <Header/>
        <Banner/>
        <Routes>
          <Route path="/" exact element={<Website/>}/>
          <Route path="/designs" exact element={<Design/>}/>
        </Routes>
        <Footer/>
      </Router>
    
  );
}

export default App;
