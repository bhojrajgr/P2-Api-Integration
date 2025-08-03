import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

function Home() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <div className="container">
        <h1>Welcome to My React SPA 🚀</h1>
        <p>This is the home page of a simple Single Page Application built with React.</p>
      </div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </>
  );
}


export default Home;