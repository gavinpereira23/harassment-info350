import {NavBar} from './NavBar.js';
import {Welcome} from './Welcome.js';
import {Stats} from './Stats.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div class="body" />
      <Routes>
            <Route path="/Welcome" element = {<Welcome />}></Route>
            <Route path="/Stats" element={<Stats />}></Route>
      </Routes>
    </div>
  );
}

export default App;
