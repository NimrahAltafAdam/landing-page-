
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';

function App() {
  return (
    <Router>
    <Home />
    </Router>
  );
}

export default App;

/*function App() {
  return (
    <Router>
    <Home />
    <div className="check">
    <div className="bg">Gradient</div>
    <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L40,122.7C80,117,160,107,240,122.7C320,139,400,181,480,213.3C560,245,640,267,720,261.3C800,256,880,224,960,197.3C1040,171,1120,149,1200,138.7C1280,128,1360,128,1400,128L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    </div>
    </Router>
  );
}

export default App;*/
