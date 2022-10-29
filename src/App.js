import { Route, BrowserRouter as Router,Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Builder from "./Pages/builder";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/builder" element={<Builder/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
