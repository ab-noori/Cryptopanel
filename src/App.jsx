import { Routes, Route } from 'react-router';
import './App.scss';
import Show from './pages/Show';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Crypto Panel</div>
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
