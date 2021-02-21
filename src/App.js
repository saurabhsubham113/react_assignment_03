import AllIssuePage from "./components/AllIssuePage";
import About from "./About";
import './App.css';
import { Switch, Link, Route } from 'react-router-dom'
function App() {

  const linkStyle = { margin: "10px", display: "inline-block" }
  const container = { margin: "auto", width: "80%" }
  return (
    <div className="App" style={container}>
      <Link style={linkStyle} to="/">About</Link>
      <Link style={linkStyle} to="/issues">Issues</Link>
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/issues" exact component={AllIssuePage} />
      </Switch>
    </div>
  );
}

export default App;
