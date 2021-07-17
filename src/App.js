import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components';
import Home from './pages';
import Shop from './pages/shop';
import Contact from './pages/contact';
import Peat from './pages/peat';

function App() {
  return (
    <Router>
     <Navbar/>
     <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/shop" exact component={Shop}/>
       <Route path="/peat" exact component={Peat}/>
       <Route path="/contact" exact component={Contact}/>
     </Switch>
    </Router>
  );
}

export default App;
