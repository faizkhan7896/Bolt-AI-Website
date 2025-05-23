import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Smartphone, Layers, BarChart, PenSquare, Zap, CheckCircle } from 'lucide-react';

// Components
import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';
import ServiceCard from '../components/ui/ServiceCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import ProjectCard from '../components/ui/ProjectCard';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 to-indigo-950/30 z-0"></div>
        <div className="absolute top-0 right-0 w-full h-full z-0">
          <div className="absolute top-20 right-0 w-68 h-68 bg-indigo-500/20 rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 left-0 w-68 h-68 bg-indigo-800/20 rounded-full filter blur-3xl opacity-30"></div>
        </div>
        
        <div className="container-custom px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="bg-indigo-500/10 text-indigo-400 py-1 px-3 rounded-full text-sm font-medium inline-block mb-5">
                Web & Mobile Development Experts
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Crafting Digital <span className="gradient-text">Experiences</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-lg">
                We build stunning web and mobile applications that drive your business forward. Modern, performant, and user-focused solutions for today's digital landscape.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  Get a Quote
                </Button>
                <Button href="/services" variant="outline" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                  Explore Services
                </Button>
              </div>

              <div className="flex items-center mt-10">
                <div className="flex -space-x-3">
                  <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Client" className="w-10 h-10 rounded-full border-2 border-gray-900" />
                  <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Client" className="w-10 h-10 rounded-full border-2 border-gray-900" />
                  <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Client" className="w-10 h-10 rounded-full border-2 border-gray-900" />
                </div>
                <div className="ml-4">
                  <div className="flex items-center mb-1">
                    <span className="text-yellow-500 flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                      ))}
                    </span>
                    <span className="ml-2 text-gray-300 text-sm font-medium">5.0</span>
                  </div>
                  <p className="text-gray-400 text-sm">Trusted by 100+ clients worldwide</p>
                </div>
              </div>
            </div>

            <div className="lg:flex justify-end hidden animate-fade-in animate-delay-200">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg blur opacity-30"></div>
                <div className="relative bg-gray-900 p-1 rounded-lg overflow-hidden border border-gray-800">
                  <img 
                    src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Digital Solutions" 
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-950 relative">
        <div className="container-custom">
          <SectionTitle
            subtitle="What We Do"
            title="Our Core Services"
            description="We offer comprehensive solutions to elevate your digital presence across web and mobile platforms."
            center
            className="max-w-3xl mx-auto"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <ServiceCard
              icon={<Code2 size={28} />}
              title="Web Development"
              description="We create modern, responsive, and high-performance websites that deliver exceptional user experiences."
              features={[
                "Custom front-end development with React",
                "Back-end development with Node.js",
                "E-commerce solutions",
                "Progressive Web Apps (PWAs)",
                "CMS integration"
              ]}
            />
            
            <ServiceCard
              icon={<Smartphone size={28} />}
              title="Mobile App Development"
              description="Native and cross-platform mobile applications that work flawlessly across iOS and Android devices."
              features={[
                "Native iOS and Android development",
                "Cross-platform with React Native",
                "UI/UX design for mobile",
                "App store optimization",
                "Maintenance and support"
              ]}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="card p-5">
              <Layers className="text-indigo-500 mb-4" size={24} />
              <h3 className="text-lg font-medium text-white mb-2">UI/UX Design</h3>
              <p className="text-gray-400 text-sm">User-centered designs that enhance usability and engagement.</p>
            </div>
            
            <div className="card p-5">
              <BarChart className="text-indigo-500 mb-4" size={24} />
              <h3 className="text-lg font-medium text-white mb-2">Digital Marketing</h3>
              <p className="text-gray-400 text-sm">Strategies to increase visibility and drive conversions.</p>
            </div>
            
            <div className="card p-5">
              <PenSquare className="text-indigo-500 mb-4" size={24} />
              <h3 className="text-lg font-medium text-white mb-2">Content Strategy</h3>
              <p className="text-gray-400 text-sm">Compelling content that resonates with your target audience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-gray-900 relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-500/10 rounded-full filter blur-3xl opacity-30"></div>
        
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg blur opacity-20"></div>
                <div className="relative bg-gray-900 p-1 rounded-lg overflow-hidden border border-gray-800">
                  <img 
                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Team working together" 
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <SectionTitle
                subtitle="Why Choose Us"
                title="Excellence in Every Pixel"
                description="We combine technical expertise with creative thinking to deliver solutions that exceed expectations."
              />
              
              <div className="space-y-6 mt-8">
                <div className="flex">
                  <div className="mr-4 text-indigo-500">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Expert Team</h3>
                    <p className="text-gray-400">
                      Our team consists of seasoned professionals with years of experience in web and mobile development.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 text-indigo-500">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Cutting-Edge Technology</h3>
                    <p className="text-gray-400">
                      We stay ahead of the curve by utilizing the latest technologies and frameworks.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 text-indigo-500">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Tailored Solutions</h3>
                    <p className="text-gray-400">
                      We create custom solutions that align perfectly with your business goals and user needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 text-indigo-500">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Ongoing Support</h3>
                    <p className="text-gray-400">
                      Our relationship doesn't end at launch; we provide continuous support and maintenance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="section bg-gray-950">
        <div className="container-custom">
          <SectionTitle
            subtitle="Portfolio Showcase"
            title="Our Recent Projects"
            description="Explore some of our best work that demonstrates our expertise and creativity."
            center
            className="max-w-3xl mx-auto"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ProjectCard
              imageUrl="Event.png"
              title="Event Management Mobile App"
              category="Mobile Development"
              description="Continue to work one by one, here is the new minimal Event Management-Mobile App Exploration."
            />
            
            <ProjectCard
              imageUrl="/Ecommerce.png"
              title="E-Commerce Platform"
              category="Web Development"
              description="A full-featured online store with secure payment processing and inventory management."
            />
            
            <ProjectCard
              imageUrl="/dating_App.png"
              title="Dating App"
              category="UI/UX Design"
              description="Fun of & Dating is a free dating app and social network for singles; the perfect place to meet new people, in an instant"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button href="/portfolio" variant="outline" icon={<ArrowRight size={18} />} iconPosition="right">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-gray-900 relative">
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-500/10 rounded-full filter blur-3xl opacity-30"></div>
        
        <div className="container-custom">
          <SectionTitle
            subtitle="Client Feedback"
            title="What Our Clients Say"
            description="We take pride in building lasting relationships with our clients and delivering solutions that exceed their expectations."
            center
            className="max-w-3xl mx-auto"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <TestimonialCard
              quote="Melexis transformed our business with a stunning website that's not only beautiful but also highly functional. Their attention to detail is unmatched."
              name="Sarah Johnson"
              // title="CEO"
              // companyName="Novus Dynamics"
              imageUrl="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            
            <TestimonialCard
              quote="The mobile app developed by Melexis exceeded our expectations. The team was professional, responsive, and delivered exactly what we needed."
              name="Michael Chen"
              // title="Product Manager"
              // companyName="TechSphere"
              imageUrl="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            
            <TestimonialCard
              quote="Working with Melexis was a game-changer for our startup. Their expertise and guidance helped us create a product that our users love."
              name="Emily Rodriguez"
              // title="Founder"
              // companyName="Elevate Solutions"
              imageUrl="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative bg-gray-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-500/10 rounded-full filter blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-indigo-800/10 rounded-full filter blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/4"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="bg-gradient-to-r from-gray-900 to-indigo-900/50 p-8 md:p-12 rounded-2xl border border-gray-800">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let's work together to create exceptional digital experiences that elevate your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="/contact" variant="primary" size="lg" icon={<Zap size={18} />}>
                  Start Your Project
                </Button>
                <Button href="/services" variant="outline" size="lg">
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;