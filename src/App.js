import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import GitHubSearch from './GitHubSearch'; // 

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>Github User Search</h1>
        <Link to="/search">Click Here</Link> {/* Link */}
      </nav>

      <Routes>
        
        <Route path="/search" element={<GitHubSearch />} /> {/* Route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
