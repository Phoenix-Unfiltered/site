
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1280&h=720')",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10 text-white text-center">
        <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-bold">The Phoenix Journal</h1>
        <p className="text-xl md:text-2xl mb-6 italic">– Unfiltered</p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 phoenix-quote">
          "You don't need to be okay. You just need to be real. That's enough."
        </p>
        <p className="mb-8 max-w-2xl mx-auto">
          This is your space to shed the bullshit, break the rules, and stitch yourself back together 
          in raw, unfiltered honesty.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link to="/blog" className="btn-phoenix">
            Start Reading
          </Link>
          <Link to="/frikkies-corner" className="btn-phoenix-outline">
            Meet Frikkie™
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
