import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-16">
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16">
              Contact Us
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-playfair font-semibold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input placeholder="Your Name" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <div>
                    <Input placeholder="Subject" />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" className="min-h-[150px]" />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-playfair font-semibold mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Phone className="text-primary" />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-muted-foreground">+977 9812345670</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="text-primary" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">contact@glamour.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin className="text-primary" />
                      <div>
                        <h3 className="font-semibold">Address</h3>
                        <p className="text-muted-foreground">Tilottama-04, Rupandehi</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Clock className="text-primary" />
                      <div>
                        <h3 className="font-semibold">Working Hours</h3>
                        <p className="text-muted-foreground">Mon - Sat: 9AM - 7PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-gray-200 rounded-lg h-[300px] flex items-center justify-center">
                  <p className="text-muted-foreground">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7068.047992895107!2d83.46589923271695!3d27.654729270919987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1741162497893!5m2!1sen!2snp" width="600" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
