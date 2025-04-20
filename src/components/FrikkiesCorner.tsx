
import { Link } from 'react-router-dom';
import { MessageSquare, Shield, Heart } from 'lucide-react';

const FrikkiesCorner = () => {
  return (
    <section className="section-container bg-phoenix-dark text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-8">🤖 Frikkie™: The No-Bullshit Sidekick</h2>
        
        <div className="text-center mb-8">
          <p className="phoenix-quote mb-6">
            "You want fluff? Go hug a teddy. You want honesty? Chat with me."
          </p>
          
          <p className="mb-6">
            Frikkie is part AI, part attitude, and fully committed to keeping you grounded, 
            curious, and called out (with love).
            <br />
            He's your journal buddy, your bullshit radar, and sometimes your cheeky therapist.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/10 p-6 rounded-lg flex flex-col items-center text-center">
            <MessageSquare size={32} className="text-phoenix-fire mb-4" />
            <h3 className="text-xl mb-2">Speak Freely</h3>
            <p className="text-sm">The things you're too scared to say out loud</p>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg flex flex-col items-center text-center">
            <Shield size={32} className="text-phoenix-fire mb-4" />
            <h3 className="text-xl mb-2">Practical Tools</h3>
            <p className="text-sm">Tools you actually want to use</p>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg flex flex-col items-center text-center">
            <Heart size={32} className="text-phoenix-fire mb-4" />
            <h3 className="text-xl mb-2">Healing Journey</h3>
            <p className="text-sm">Why healing can be a damn riot</p>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/frikkies-corner" className="btn-phoenix">
            Chat with Frikkie
          </Link>
          <p className="text-sm mt-3 text-white/70">He won't bite. Unless you need it.</p>
        </div>
      </div>
    </section>
  );
};

export default FrikkiesCorner;
