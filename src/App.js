import './App.css';
import LoginPage from './components/auth/LoginPage';
import Nav from './components/Layout/Nav';
import HomePage from './components/pages/Home';
import { Routes, Route} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ThankYouPage from './components/pages/ThankYou';


function App() {

  return (
    <>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path = "home" element = {<HomePage />} />
        <Route path = "login" element = {<LoginPage />} />
        <Route path = "thank_you" element = {<ThankYouPage />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
