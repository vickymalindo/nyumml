import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AboutUs from './components/about/AboutUs';
import Home from './components/home/Home';
import Main from './components/catalogue/Main';
import Review from './components/home/Review';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='aboutus' element={<AboutUs />}/>
        <Route path='catalogue' element={<Main />}/>
        <Route path='review' element={<Review />}/>
      </Routes>
    </Router>
  );
}

export default App;
