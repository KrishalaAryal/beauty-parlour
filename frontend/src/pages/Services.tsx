import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    category: "Makeup Services",
    items: [
      { name: "Bridal Makeup", price: "Rs. 200", duration: "120 min" },
      { name: "Party Makeup", price: "Rs. 100", duration: "60 min" },
      { name: "Natural Makeup", price: "Rs. 80", duration: "45 min" },
    ]
  },
  {
    category: "Skincare Treatments",
    items: [
      { name: "Deep Cleansing Facial", price: "Rs. 120", duration: "90 min" },
      { name: "Anti-Aging Treatment", price: "Rs. 150", duration: "75 min" },
      { name: "Hydrating Facial", price: "Rs. 90", duration: "60 min" },
    ]
  },
  {
    category: "Hair Services",
    items: [
      { name: "Bridal Hairstyling", price: "Rs. 150", duration: "90 min" },
      { name: "Hair Treatment", price: "Rs. 100", duration: "60 min" },
      { name: "Hair Coloring", price: "Rs. 200", duration: "120 min" },
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-16">
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16">
              Our Services
            </h1>
            
            <div className="grid gap-12">
              {services.map((category, index) => (
                <div key={index} className="space-y-6">
                  <h2 className="text-2xl font-playfair font-semibold">{category.category}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {category.items.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                        <div className="text-muted-foreground mb-4">
                          <p>Price: {service.price}</p>
                          <p>Duration: {service.duration}</p>
                        </div>
                        <Button asChild>
                          <Link to="/services">
                            Book Now
                          </Link>
                        </Button>
                        
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
