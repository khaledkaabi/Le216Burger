import './App.css'
import Navbar from './components/Navbar'
import Home from './page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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
