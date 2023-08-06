import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { SignUp } from './pages/SignUp/SignUp';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WorkDeskLayout } from './pages/WorkDesk/WorkDestLayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/work-desk/*" element={<WorkDeskLayout />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
