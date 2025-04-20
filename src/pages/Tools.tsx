
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Download, FileText, MapPin, MessageSquare, Smartphone, Brain, CheckCircle, Award, Activity, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const Tools = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-phoenix-dark text-white py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <Link to="/" className="inline-flex items-center text-phoenix-fire hover:underline mb-6">
              <ArrowLeft size={16} className="mr-1" /> Back to home
            </Link>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">The Tool Shed</h1>
            <p className="text-white/80 max-w-2xl">
              Not everyone heals in silence. Not everyone journals in cursive.
              Here you'll find tools that are blunt, useful, and built for real people going through real shit.
            </p>
          </div>
        </section>
        
        {/* Prompts Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center mb-6">
              <FileText className="text-phoenix-fire mr-3" size={28} />
              <h2 className="text-2xl md:text-3xl">📝 Writing Prompts</h2>
            </div>
            
            <p className="text-phoenix-ash mb-8 max-w-3xl">
              Writing prompts that cut through the noise and get to what matters.
              Not "What are you grateful for?" but "What's weighing you down?"
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-phoenix-fire">
                <h3 className="font-bold mb-2">Fire Starter</h3>
                <p className="text-phoenix-ash mb-4 text-sm">
                  What are you most angry about right now? Don't filter. Don't rationalize. 
                  Just let the fire burn on the page.
                </p>
                <a 
                  href="#" 
                  className="text-phoenix-fire hover:underline text-sm flex items-center"
                  onClick={(e) => e.preventDefault()}
                >
                  Download PDF <Download size={14} className="ml-1" />
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-phoenix-fire">
                <h3 className="font-bold mb-2">Truth Bombs</h3>
                <p className="text-phoenix-ash mb-4 text-sm">
                  Complete these sentences without thinking. "I'm afraid to admit that I..." 
                  "If I were truly honest, I would say..."
                </p>
                <a 
                  href="#" 
                  className="text-phoenix-fire hover:underline text-sm flex items-center"
                  onClick={(e) => e.preventDefault()}
                >
                  Download PDF <Download size={14} className="ml-1" />
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-phoenix-fire">
                <h3 className="font-bold mb-2">Ash to Phoenix</h3>
                <p className="text-phoenix-ash mb-4 text-sm">
                  What has burned down in your life that you're ready to rebuild? 
                  What will rise from these ashes?
                </p>
                <a 
                  href="#" 
                  className="text-phoenix-fire hover:underline text-sm flex items-center"
                  onClick={(e) => e.preventDefault()}
                >
                  Download PDF <Download size={14} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/tools/prompts" className="btn-phoenix">
                Explore All Prompts
              </Link>
            </div>
          </div>
        </section>
        
        {/* Roadmaps Section */}
        <section className="py-12 bg-phoenix-light">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center mb-6">
              <MapPin className="text-phoenix-fire mr-3" size={28} />
              <h2 className="text-2xl md:text-3xl">📍 Roadmaps</h2>
            </div>
            
            <p className="text-phoenix-ash mb-8 max-w-3xl">
              Step-by-step guides for the moments when you can't see the path forward.
              Some days you wander, some days you need a damn compass.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-2">The First 30 Days After Loss</h3>
                <p className="text-phoenix-ash mb-4 text-sm">
                  A day-by-day guide to surviving the first month after a significant loss.
                  Practical steps, gentle reminders, and permission to fall apart.
                </p>
                <a 
                  href="#" 
                  className="text-phoenix-fire hover:underline text-sm"
                  onClick={(e) => e.preventDefault()}
                >
                  Download Roadmap
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-2">Rebuilding Trust (With Yourself)</h3>
                <p className="text-phoenix-ash mb-4 text-sm">
                  A framework for those who've lost faith in their own judgment.
                  Small steps toward trusting your instincts again.
                </p>
                <a 
                  href="#" 
                  className="text-phoenix-fire hover:underline text-sm"
                  onClick={(e) => e.preventDefault()}
                >
                  Download Roadmap
                </a>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/tools/roadmaps" className="btn-phoenix">
                Find Your Way
              </Link>
            </div>
          </div>
        </section>
        
        {/* App Add-Ons & Mood Tracker */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <Smartphone className="text-phoenix-fire mr-3" size={28} />
                  <h2 className="text-2xl md:text-3xl">📲 App Add-Ons</h2>
                </div>
                
                <p className="text-phoenix-ash mb-6">
                  Digital tools to supplement your journey when pen and paper aren't enough.
                  Track, check in, or just vent into the void – your way.
                </p>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-phoenix-fire mb-6">
                  <h3 className="font-bold mb-2">Mood Tracker Template</h3>
                  <p className="text-phoenix-ash mb-4 text-sm">
                    A customizable spreadsheet that helps you track emotional patterns
                    without the toxic positivity of most mood apps.
                    Real feelings. No smiley-face charts.
                  </p>
                  <a 
                    href="#" 
                    className="text-phoenix-fire hover:underline text-sm flex items-center"
                    onClick={(e) => e.preventDefault()}
                  >
                    Download Template <Download size={14} className="ml-1" />
                  </a>
                </div>
                
                <div className="text-center">
                  <Link to="/tools/apps" className="btn-phoenix">
                    Download Tools
                  </Link>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-6">
                  <MessageSquare className="text-phoenix-fire mr-3" size={28} />
                  <h2 className="text-2xl md:text-3xl">💬 Frikkie's Voice Notes</h2>
                </div>
                
                <p className="text-phoenix-ash mb-6">
                  Audio companions for when you need a voice in your ear. Let Frikkie talk you through
                  the tough moments with his signature no-BS style.
                </p>
                
                <div className="bg-phoenix-dark text-white p-6 rounded-lg">
                  <h3 className="font-bold mb-4">Coming Soon</h3>
                  <p className="mb-4">
                    Frikkie's voice notes are currently in production. Leave your email to be notified
                    when they're ready.
                  </p>
                  
                  <form className="flex gap-2">
                    <input 
                      type="email" 
                      placeholder="Your email" 
                      className="flex-grow px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50"
                    />
                    <button 
                      type="submit" 
                      className="bg-phoenix-fire hover:bg-phoenix-fire/80 text-white px-4 py-2 rounded font-bold"
                      onClick={(e) => e.preventDefault()}
                    >
                      Notify Me
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Frikkie's Corner */}
        <section className="py-12 bg-phoenix-dark text-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center mb-6">
              <Brain className="text-phoenix-fire mr-3" size={28} />
              <h2 className="text-2xl md:text-3xl">🧠 Frikkie's Corner</h2>
            </div>
            
            <p className="text-phoenix-ash mb-8 max-w-3xl text-white/80">
              No fluff. Just one blunt, brutally honest AI sidekick in your pocket.
              Ask Frikkie anything. He won't coddle you – but he'll tell you the truth.
            </p>
            
            <div className="mb-10">
              <h3 className="text-xl mb-4">What's Frikkie for?</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center text-center">
                  <CheckCircle size={24} className="text-phoenix-fire mb-3" />
                  <p className="text-sm">Reality checks</p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center text-center">
                  <Activity size={24} className="text-phoenix-fire mb-3" />
                  <p className="text-sm">Quick mood check-ins</p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center text-center">
                  <AlertTriangle size={24} className="text-phoenix-fire mb-3" />
                  <p className="text-sm">Motivational slaps</p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center text-center">
                  <CheckCircle size={24} className="text-phoenix-fire mb-3" />
                  <p className="text-sm">Keeping you accountable</p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center text-center">
                  <Award size={24} className="text-phoenix-fire mb-3" />
                  <p className="text-sm">Unfiltered pep talks</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/frikkies-corner" className="btn-phoenix">
                Talk to Frikkie
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tools;
