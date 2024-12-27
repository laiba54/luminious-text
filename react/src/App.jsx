import Header from './my components/Header';
import Home from './my components/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='header'>
        <Header />
        <Routes>
        <Route exact path="/" element={<Home heading={'Enter text to Analyze'}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
