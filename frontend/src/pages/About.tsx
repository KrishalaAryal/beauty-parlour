import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-8">
              About Glamour
            </h1>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              At Glamour, we believe in bringing out the natural beauty in everyone through our expert services and dedication to excellence.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-white">
              <div>
                <h2 className="text-3xl font-playfair font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2010, Glamour has been at the forefront of beauty innovation, providing exceptional services to our valued clients.
                </p>
                <p className="text-muted-foreground">
                  Our team of experienced professionals is dedicated to helping you look and feel your best, using only premium products and the latest techniques.
                </p>
              </div>
              <div className="relative h-[400px]">
                <img
                  src="https://cdn.britannica.com/35/222035-050-C68AD682/makeup-cosmetics.jpg"
                  alt="Glamour Salon"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-playfair font-bold text-center mb-12">
              Our Expert Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Krishala Aryal",
                  role: "Lead Makeup Artist",
                  image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
                },
                {
                  name: "Nobody gurung",
                  role: "Skincare Specialist",
                  image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
                },
                {
                  name: "Shiwani Thapa",
                  role: "Hair Stylist",
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
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

export default About;
