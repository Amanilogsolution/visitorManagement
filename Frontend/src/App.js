
import Home from './components/Home'
import Login from './components/Login/Login'
import {Route,BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     {/* <Home /> */}
     <Router>
         <Route exact path="/" component={Home}/>
         <Route exact path="/Dashboard" component={Home}/>
     </Router>

    </div>
  );
}

export default App;
