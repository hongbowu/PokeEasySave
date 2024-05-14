import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

