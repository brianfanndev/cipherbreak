import SplashPage from './pages/SplashPage';
import GamePage from './pages/GamePage';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/game">
            <GamePage />
          </Route>
          <Route path="/">
            <SplashPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
