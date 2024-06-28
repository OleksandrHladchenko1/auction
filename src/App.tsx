import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import { MainPage } from './pages/MainPage';
import { LogInPage } from './pages/LogInPage';
import { SignUpPage } from './pages/SignUpPage';
import { LotsPage } from './pages/LotsPage';

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LogInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/lots' element={<LotsPage />} />
        {/* <Route path='/lots' element={<LogInPage />} />
        <Route path='/lot/:lotId' element={<LogInPage />} />
        <Route path='/user' element={<LogInPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
