
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-phoenix-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4 font-playfair">The Phoenix Journal</h3>
            <p className="text-sm text-white/70 mb-4">
              A space for raw truth and soft rebellion. Where the broken bits find their voice.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl mb-4 font-playfair">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-white/70 hover:text-phoenix-fire transition-colors">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-white/70 hover:text-phoenix-fire transition-colors">
                  Toolbox
                </Link>
              </li>
              <li>
                <Link to="/frikkies-corner" className="text-white/70 hover:text-phoenix-fire transition-colors">
                  Frikkie's Corner
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-phoenix-fire transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl mb-4 font-playfair">Join the Rebuild</h3>
            <p className="text-sm text-white/70 mb-4">
              No email spam. No shiny bullshit. Just a heads-up when something real is ready.
            </p>
            <Link to="/subscribe" className="btn-phoenix-outline text-sm">
              Subscribe
            </Link>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/70">
            &copy; {year} The Phoenix Journal. All rights reserved.
          </p>
          <p className="text-sm text-white/70 flex items-center mt-4 md:mt-0">
            Made with <Heart size={16} className="text-phoenix-fire mx-1" /> and a lot of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
