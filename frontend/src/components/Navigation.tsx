import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ParlourContext } from "../context/Context";

export function Navigation() {
  const { state: { user } } = useContext(ParlourContext)

  console.log(user)
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="font-playfair text-3xl font-extrabold text-foreground">
          Glamour
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-[#c4c4c4] hover:text-primary hover:scale-105 transition-transform font-medium">Home</Link>
          <Link to="/services" className="text-[#c4c4c4] hover:text-primary hover:scale-105 transition-transform font-medium">Services</Link>
          <Link to="/about" className="text-[#c4c4c4] hover:text-primary hover:scale-105 transition-transform font-medium">About</Link>
          <Link to="/contact" className="text-[#c4c4c4] hover:text-primary hover:scale-105 transition-transform font-medium">Contact</Link>
          {user?<div><p>{user.username}</p></div>:  <Link to="/login" className="px-5 py-2 bg-white text-rose-600 rounded-full shadow-lg hover:bg-rose-100 transition-all">
            Login
          </Link>}
         
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#5D1049] text-white absolute top-16 left-0 right-0 shadow-lg p-4 animate-slideUp">
          <div className="flex flex-col space-y-4 text-center">
            <Link to="/" className="text-white hover:text-primary transition-colors font-semibold" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/services" className="text-white hover:text-primary transition-colors font-semibold" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            <Link to="/about" className="text-white hover:text-primary transition-colors font-semibold" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link to="/contact" className="text-white hover:text-primary transition-colors font-semibold" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <Link to="/login"  className="block w-full py-2 bg-white text-rose-600 rounded-full shadow-md hover:bg-rose-100 transition-all" onClick={() => setIsMobileMenuOpen(false)}>
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
