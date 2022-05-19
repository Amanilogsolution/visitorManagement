
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/Login/Login'
import DieselLog from './components/diesellog/DieselLog';
import GeneratorLogBook from './components/generatorlog/GeneratorLog';
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     {/* <Home /> */}
     <Router>
     <Routes>
         <Route exact path="/" element={<Login />}/>
         <Route exact path="/Dashboard" element={<Dashboard/>}/>
         <Route exact path="/DieselLog" element={<DieselLog/>}/>
         <Route exact path="/GeneratorLogBook" element={<GeneratorLogBook/>}/>
     </Routes>
     </Router>

    </div>
  );
}

export default App;
