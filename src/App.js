import { Router } from '@reach/router';
import './App.css';
import MainPage from './view/MainPage';

function App() {
  return (
  <Router>
    <MainPage path="/"/>
    <MainPage path="/:id"/>
  </Router>
  
  );
}

export default App;
