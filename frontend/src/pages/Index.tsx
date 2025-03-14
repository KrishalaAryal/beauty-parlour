import { Navigation } from '../components/Navigation';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-fixed"
          style={{
            backgroundImage: "url('https://www.avikalp.com/cdn/shop/products/MWZ3635_wallpaper4.jpg?v=1654843598')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)',
          }}
        />
        
        <div className="relative z-10 text-center px-4 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            Discover Your True Beauty
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience luxury beauty treatments and professional makeup services tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/services">Book Appointment</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm" asChild>
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured Services Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
            Our Featured Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Luxury Makeup",
                description: "Professional makeup services for any occasion",
                image: "https://m.media-amazon.com/images/I/71HIWANJM3L.jpg",
              },
              {
                title: "Skin Care",
                description: "Rejuvenating treatments for glowing skin",
                image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
              },
              {
                title: "Bridal Packages",
                description: "Complete beauty solutions for your special day",
                image: "https://img.freepik.com/free-vector/wedding-planner-price-list-template_742173-418.jpg",
              },
            ].map((service, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105"
              >
                <div className="aspect-[4/5] relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-xl font-playfair font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/90">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
