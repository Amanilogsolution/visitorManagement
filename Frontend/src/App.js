
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/Login/Login'
import DieselLog from './components/diesellog/DieselLog';
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
     </Routes>
     </Router>

    </div>
  );
}

export default App;
