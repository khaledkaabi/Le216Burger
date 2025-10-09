// src/components/Navbar.jsx
import { useState } from 'react';
import { Phone, User, FileText, Menu, X, CircleUser, MessageCircleQuestionMark, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("home");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigateHome = () => {
    navigate('/')
  }


  return (
    <nav>
      {/* Top bar avec informations de contact */}
      <div className="bg-orange-primary px-4 md:px-10 py-2 text-white shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-y-2">
            <div className="flex flex-col items-start">
              <h1 className="md:text-2xl text-lg font-bold tracking-wider text-left">Le 216 Burger</h1>
              <span className="text-white/90 text-sm text-left font-medium">Le goût de l’excellence, servi avec passion.</span>
            </div>
          </div>
          <div className="flex flex-col items-end space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 animate-pulse" />
              <span className="font-bold text-right">+33 61 877 43 70</span>
            </div>
            <span className="text-sm font-medium text-white/90 text-right">111 route de Clisson 44230 saint Sébastien</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="px-4 md:px-10 pt-1 bg-white">
        <div className="flex justify-between items-center">
          <div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <div
              className={`text-sm font-medium ${selectedSection === 'home' ? 'border-b-4 border-orange-primary' : 'border-b-4 border-transparent'}`}
            >
              <div className='px-2 py-2'>
                <a onClick={() => {
                  setSelectedSection('home')
                  handleNavigateHome()
                }} href='#'>Le 216 Burger</a>
              </div>
            </div>
             <div
              className={`text-sm font-medium ${selectedSection === 'menu' ? 'border-b-4 border-orange-primary' : 'border-b-4 border-transparent'}`}
            >
              <div className='px-2 py-2'>
                <a onClick={() => {
                  setSelectedSection('menu')
                  handleNavigateHome()
                }} href='#'>Nos spécialités</a>
              </div>
            </div>
          </div>
          <div className='flex justify-start'>
        <button
          className="lg:hidden p-2 hover:bg-orange-600 rounded transition-colors duration-200"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      
          </div>
          <Heart className='animate-bounce text-orange-primary' />
        </div>
        {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 pb-4">
          <div className="flex flex-col items-center space-y-2 mt-4">
            <div
              className={`text-sm font-medium ${selectedSection === 'home' ? 'border-b-4 border-orange-primary' : 'border-b-4 border-transparent'}`}
            >
              <div className='px-2 py-2'>
                <a onClick={() => {
                  handleNavigateHome()
                  setSelectedSection('home')
                }} href='#'>Le 216 Burger</a>
              </div>
            </div>
            <div
              className={`text-sm font-medium ${selectedSection === 'menu' ? 'border-b-4 border-orange-primary' : 'border-b-4 border-transparent'}`}
            >
              <div className='px-2 py-2'>
                <a onClick={() => {
                  handleNavigateHome()
                  setSelectedSection('menu')
                }} href='#'>Nos spécialités</a>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </nav>
  );
};

export default Navbar;