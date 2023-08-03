import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { WorkDesk } from './pages/WorkDesk';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/work-desk" element={<WorkDesk/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
