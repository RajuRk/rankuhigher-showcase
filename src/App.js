import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Website from './components/Websites/Websites';
import Footer from './components/Footer/Footer';
import Design from './components/Design/Design';
import SocialMedia from './components/SocialMedia/SocialMedia';
import Video from './components/Videos/Videos';
 
function App() {
  return (
      <Router>
        <Header/>
        <Banner/>
        <Routes>
          <Route path="/" exact element={<Website/>}/>
          <Route path="/designs" exact element={<Design/>}/>
          <Route path='/socialmedia' exact element={<SocialMedia/>}/>
          <Route path='/videos' exact element={<Video/>}/>
        </Routes>
        <Footer/>
      </Router>
    
  );
}

export default App;
