
import { Link } from 'react-router-dom';
import { FileText, MapPin, Smartphone, MessageSquare } from 'lucide-react';

const Toolbox = () => {
  return (
    <section className="section-container bg-phoenix-light" id="toolbox">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-2">🧰 The Tool Shed</h2>
        <p className="text-center mb-8">
          Not everyone heals in silence. Not everyone journals in cursive.<br />
          Here you'll find tools that are blunt, useful, and built for real people going through real shit.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md flex">
            <div className="mr-4 text-phoenix-fire">
              <FileText size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">📝 Prompts</h3>
              <p className="text-sm text-phoenix-ash mb-2">
                Writing prompts that cut through the noise and get to what matters.
              </p>
              <Link to="/tools/prompts" className="text-phoenix-fire text-sm hover:underline">
                Explore prompts
              </Link>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md flex">
            <div className="mr-4 text-phoenix-fire">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">📍 Roadmaps</h3>
              <p className="text-sm text-phoenix-ash mb-2">
                Step-by-step guides for the moments when you can't see the path forward.
              </p>
              <Link to="/tools/roadmaps" className="text-phoenix-fire text-sm hover:underline">
                Find your way
              </Link>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md flex">
            <div className="mr-4 text-phoenix-fire">
              <Smartphone size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">📲 App Add-Ons</h3>
              <p className="text-sm text-phoenix-ash mb-2">
                Digital tools to supplement your journey when pen and paper aren't enough.
              </p>
              <Link to="/tools/apps" className="text-phoenix-fire text-sm hover:underline">
                Download tools
              </Link>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md flex">
            <div className="mr-4 text-phoenix-fire">
              <MessageSquare size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">💬 Frikkie's Voice Notes</h3>
              <p className="text-sm text-phoenix-ash mb-2">
                Audio companions for when you need a voice in your ear.
              </p>
              <span className="text-phoenix-ash text-sm italic">Coming soon</span>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/tools" className="btn-phoenix">
            Explore Tools
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Toolbox;
