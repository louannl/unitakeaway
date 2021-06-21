import NavBar from './components/Navigation/NavBar';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';

function App() {
  return (
    <div className="pt-24">
      <NavBar />
      <Home />
      <Menu />
    </div>
  );
}

export default App;
