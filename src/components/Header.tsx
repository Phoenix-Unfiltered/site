
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-phoenix-dark text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-playfair font-bold flex items-center">
          <span className="text-phoenix-fire">🔥</span> 
          <span className="ml-2">The Phoenix Journal</span>
        </Link>

        <button 
          onClick={toggleMenu} 
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-phoenix-fire transition-colors">Home</Link>
          <Link to="/blog" className="hover:text-phoenix-fire transition-colors">Journal</Link>
          <Link to="/tools" className="hover:text-phoenix-fire transition-colors">Toolbox</Link>
          <Link to="/studio" className="hover:text-phoenix-fire transition-colors">Studio</Link>
          <Link to="/about" className="hover:text-phoenix-fire transition-colors">About</Link>
          <Link to="/frikkies-corner" className="hover:text-phoenix-fire transition-colors">Frikkie's Corner</Link>
        </nav>

        {isOpen && (
          <div className="md:hidden absolute top-16 inset-x-0 bg-phoenix-dark p-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="p-2 hover:bg-phoenix-fire/20 rounded" 
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className="p-2 hover:bg-phoenix-fire/20 rounded" 
                onClick={toggleMenu}
              >
                Journal
              </Link>
              <Link 
                to="/tools" 
                className="p-2 hover:bg-phoenix-fire/20 rounded" 
                onClick={toggleMenu}
              >
                Toolbox
              </Link>
              <Link 
                to="/studio" 
                className="p-2 hover:bg-phoenix-fire/20 rounded" 
                onClick={toggleMenu}
              >
                Studio
              </Link>
              <Link 
                to="/about" 
                className="p-2 hover:bg-phoenix-fire/20 rounded" 
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link 
                to="/frikkies-corner" 
                className="p-2 hover:bg-phoenix-fire/20 rounded" 
                onClick={toggleMenu}
              >
                Frikkie's Corner
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
