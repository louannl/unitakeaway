import NavBar from './components/Navigation/NavBar';
import ContactUs from './pages/ContactUs/ContactUs';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';

function App() {
  return (
    <div className="-mt-2">
      <NavBar />
      <Home />
      <Menu />
      <ContactUs />
    </div>
  );
}

export default App;
