import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Redirect
} from "react-router-dom";

// Pages
import WorkPage from './pages/WorkPage';
import NotFoundPage from './pages/404';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
// Components
import Navbar from './components/Navbar'
import ConnectTutors from './pages/Projects/ConnectTutors';
import VocabMi from './pages/Projects/VocabMi';
import KP2021 from './pages/Projects/KP2021';
import DTC from './pages/Projects/DTC'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<WorkPage/>}/>
        <Route path="/About" component={<AboutPage/>}/>
        <Route path="/Resume" component={<ResumePage/>}/>
        <Route path="/404" component={<NotFoundPage/>}/>
        {/* <Redirect to="/404"/> */}

        {/* // Pages */}
        <Route path="/ConnectTutor" element={<ConnectTutors/>}/>
        <Route path="/VocabMi" element={<VocabMi/>}/>
        <Route path="/KP2021" element={<KP2021/>}/>
        <Route path="/DTC" element={<DTC/>}/>
        

      </Routes>
    </Router>
    
  );
}

export default App;
