import landmarks from '../images/landmarks.png'
import Home from './Home';
import Header from './Header';
import LandmarkPage from './LandmarkPage';
import { Route, Routes} from "react-router-dom"

function App() {
  return (
    <> 
    <Header />
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/landmarks" element={<LandmarkPage />}/>

        </Routes>
    </div>
    
    </>
  );
}

export default App;
