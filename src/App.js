import './App.css';
import MoviesGrid from './components/MoviesGrid';
import style from './stylesheets/App.module.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className={style.title}>Movies</h1>
      </header>
      <main>
        <MoviesGrid />
      </main>
    </div>
  );
}

export default App;
