
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="bg-phoenix-light section-container" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-8 text-phoenix-dark">🪶 About the Journal</h2>
        
        <div className="prose mx-auto text-center mb-8">
          <p className="text-xl font-bold mb-4">Born from fire. Built with truth.</p>
          <p className="mb-6">
            This journal is where the broken bits find their voice and the brave keep showing up.
            Think less "influencer blog," more "soul with teeth."
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center">
              <span className="text-2xl mr-2">📸</span>
              <span>Nature shots.</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">🧠</span>
              <span>Mental health.</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">🛠</span>
              <span>Tools that work.</span>
            </div>
          </div>
          
          <p className="italic">
            Tender meets tough. Beauty meets bruises. Real meets you.
          </p>
        </div>
        
        <div className="text-center">
          <Link to="/about" className="btn-phoenix">
            Read the Backstory
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
