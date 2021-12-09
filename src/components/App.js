import {NavBar} from './NavBar.js';
import {Welcome} from './Welcome.js';
import {Stats} from './Stats.js';
import{Resources} from './Resources.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{backgroundColor:'#E5F7FF'}}>
      <NavBar />
      <div class="body">
          <Routes>
                <Route path="/" element = {<Welcome />}></Route>
                <Route path="/harassment-info350" element = {<Welcome />}></Route>
                <Route path="/Welcome" element = {<Welcome />}></Route>
                <Route path="/Stats" element={<Stats />}></Route>
                <Route path="/Resources" element={<Resources />}></Route>
          </Routes>
      </div>
    </div>
  );
}

export default App;
