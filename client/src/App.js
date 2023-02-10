import './App.css';
import './styles/Global.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import Home from './views/Home';

function App() {
  return (
    <Router>  
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>      
    </Router>    
  );
}

export default App;
