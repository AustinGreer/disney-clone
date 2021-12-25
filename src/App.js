import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={(<Home />)} />
          <Route path="login" element={(<Login />)} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
