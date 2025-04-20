
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const FrikkiesCorner = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<{ role: 'user' | 'frikkie', content: string }[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setChat(prev => [...prev, { role: 'user', content: message }]);
    // In a real implementation, this would call an AI service
    setChat(prev => [...prev, { 
      role: 'frikkie', 
      content: "Hey there! I'm Frikkie, and I'm still learning. Soon I'll be able to chat with you properly, but for now, I'm just hanging out. Stay tuned!" 
    }]);
    setMessage("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-phoenix-dark text-white py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 flex items-center gap-2">
              <Bot className="text-phoenix-fire" />
              Frikkie's Corner
            </h1>
            <p className="text-white/80">
              Your no-bullshit AI sidekick. Ready for some real talk?
            </p>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="min-h-[400px] mb-4 space-y-4">
                {chat.length === 0 ? (
                  <div className="text-center text-phoenix-ash py-8">
                    <Bot size={48} className="mx-auto mb-4 text-phoenix-fire" />
                    <p className="text-lg mb-2">Hey there! I'm Frikkie™</p>
                    <p>Drop your thoughts below and let's have a real conversation.</p>
                  </div>
                ) : (
                  chat.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        msg.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-[80%] p-4 rounded-lg ${
                          msg.role === 'user'
                            ? 'bg-phoenix-fire text-white'
                            : 'bg-gray-100'
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Textarea
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[100px]"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-phoenix-fire hover:bg-phoenix-fire/90"
                >
                  Send Message <Send size={16} className="ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FrikkiesCorner;
