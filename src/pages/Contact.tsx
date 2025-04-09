
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 ministry-gradient-text text-center">
            Contact Us
          </h1>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md"
              >
                <div className="w-14 h-14 rounded-full ministry-gradient-bg flex items-center justify-center mb-4">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-600 dark:text-gray-400">info@lightofyeshua.org</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md"
              >
                <div className="w-14 h-14 rounded-full ministry-gradient-bg flex items-center justify-center mb-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Our Location</h3>
                <p className="text-gray-600 dark:text-gray-400">Global Ministry - Based in the USA</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md"
              >
                <div className="w-14 h-14 rounded-full ministry-gradient-bg flex items-center justify-center mb-4">
                  <Phone className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
              </motion.div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-ministry-purple"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-ministry-purple"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-ministry-purple"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-ministry-purple"
                  />
                </div>
                
                <div className="text-center">
                  <Button type="submit" className="ministry-gradient-bg px-8 py-3 rounded-lg flex items-center justify-center gap-2 text-white transition-all duration-500 hover:shadow-lg">
                    <Send size={18} />
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
