import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import Header from './components/Header'
import './index.css';

function App() {
  return (
    <Router>
     <Switch>
       <Route path="/">
          <Header/>

           {/* Pages */}
          <LandingPage className=""/>

       </Route>
     </Switch>
     </Router>
     
  );
}

export default App;
