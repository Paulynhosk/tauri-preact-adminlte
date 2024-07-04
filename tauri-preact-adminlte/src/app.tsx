import { Router, Route } from 'preact-router';
import Dashboard from "./layouts/Dashboard";

function App () {
  return (
      <Router>
        <Route path="/" component={Dashboard}/>
      </Router  >
    )
}

export default App