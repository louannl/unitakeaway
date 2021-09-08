import Footer from './components/Footer/Footer';
import NavBar from './components/Navigation/NavBar';
import ContactUs from './pages/ContactUs/ContactUs';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';

function App() {
  return (
    <div className="-mt-2 bg-gray-50">
      <NavBar />
      <Home />
      <Menu />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
