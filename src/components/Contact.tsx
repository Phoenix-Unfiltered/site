
import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to thephoenixjournal.unfiltered@gmail.com
    console.log({ email, message, to: 'thephoenixjournal.unfiltered@gmail.com' });
    toast({
      title: "Message sent",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setEmail('');
    setMessage('');
  };

  return (
    <section className="section-container" id="contact">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center mb-2">💌 Let's Connect</h2>
        <div className="text-center mb-8">
          <p className="mb-4">
            Connection is what makes us human. It's what helps us survive the unsurvivable.
          </p>
          <p className="italic text-phoenix-ash">
            You're not alone in this. I promise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl mb-4 flex items-center">
              <Mail className="mr-2 text-phoenix-fire" /> Drop a Message
            </h3>
            <p className="text-phoenix-ash mb-4">
              Questions, thoughts, or just need to reach out? I'm here for the real talk.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-phoenix-light border-phoenix-ash"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="bg-phoenix-light border-phoenix-ash resize-none"
                />
              </div>
              <Button type="submit" className="w-full bg-phoenix-fire hover:bg-phoenix-dark">
                Send Message <Send size={16} className="ml-2" />
              </Button>
            </form>
          </div>
          
          <div className="bg-phoenix-light p-6 rounded-lg">
            <h3 className="text-xl mb-4">A Raw Note</h3>
            <p className="mb-4">
              This space exists because I needed it to exist. Because sometimes the internet feels 
              too curated, too perfect, too fake. And in those moments, I just wanted someone to be real with me.
            </p>
            <p className="mb-4">
              So here we are. In all our messy glory. Broken bits, healing hearts, and the 
              occasional inappropriate joke from Frikkie.
            </p>
            <p className="italic">
              If you're here, it's because something resonated. And that means we're already connected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
