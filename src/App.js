import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import OfferedServices from "./components/OfferedServices";
import LatestProjects from "./components/LatestProjects";
import Achievements from "./components/Achievements";
import ExpertsSection from "./components/ExpertsSection";
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      
      <div className="App">
        <Navbar/>
        <Banner />
        <OfferedServices />
        <LatestProjects />
        <ExpertsSection />
        <Achievements />
      </div>
    </Router>
  );
}

export default App;
