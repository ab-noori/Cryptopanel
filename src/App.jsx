import { Routes, Route } from 'react-router';
import './App.scss';
import Show from './pages/Show';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/Cryptopanel/" element={<Home />} />
          <Route path="/Cryptopanel/:id" element={<Show />} />
        </Routes>
      </main>
      <footer>
        <p className="copyright">&copy; 2023 Crypto Panel | Developed by Abdulali Noori</p>
      </footer>
    </div>
  );
}

export default App;
