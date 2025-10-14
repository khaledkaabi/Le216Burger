import './App.css'
import Navbar from './components/Navbar'
import { useSEO } from './hooks/useSeo';
import Home from './page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './page/Menu';

const AppRoutes = () => {

    useSEO({
    title: "Le 216 Burger",
    description: "Bienvenue chez Le 216 Burger, plaisir et saveurs garantis.",
    url: "https://le216-burger.vercel.app/",
  });

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  )
}

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </>
  )
}

export default App
