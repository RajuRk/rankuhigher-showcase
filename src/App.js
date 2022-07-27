import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Website from './components/Websites/Websites';
import Footer from './components/Footer/Footer';
import Design from './components/Design/Design';
import SocialMedia from './components/SocialMedia/SocialMedia';
import Video from './components/Videos/Videos';
import MobileApps from './components/MobileApps/MobileApps';
 
function App() {
  return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/" exact element={<Website/>}/>
          <Route path="/branding" exact element={<Design/>}/>
          <Route path='/socialmedia' exact element={<SocialMedia/>}/>
          <Route path='/videos' exact element={<Video/>}/>
          <Route path='/mobileapps' exact element={<MobileApps/>}/>
        </Routes>
        <Footer/>
      </Router>
    
  );
}

export default App;
