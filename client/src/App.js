import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Things from './pages/Things';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/things" component={Things}/>
      </Switch>
    </>
  );
}

export default App;