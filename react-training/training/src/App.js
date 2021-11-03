import './App.css';
import { Route } from "react-router-dom"
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
     <Route path={"/"} exact={true} component={Home}/>
    </div>
  );
}

export default App;
