import React, { useState } from 'react';
import { ExternalLink, Monitor, Smartphone, Layers, ShoppingCart, Database } from 'lucide-react';

// Components
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  technologies: string[];
  link: string;
  categorySlug: string;
}

const PortfolioPage: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "HealthTrack Mobile App",
      category: "Mobile Development",
      imageUrl: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A comprehensive health tracking mobile application that helps users monitor their health metrics, schedule appointments, and receive personalized insights.",
      technologies: ["React Native", "Firebase", "Node.js", "Express"],
      link: "#",
      categorySlug: "mobile"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "Web Development",
      imageUrl: "https://images.pexels.com/photos/6636438/pexels-photo-6636438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A full-featured e-commerce platform with secure payment processing, inventory management, and an intuitive admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      link: "#",
      categorySlug: "web"
    },
    {
      id: 3,
      title: "Financial Dashboard",
      category: "UI/UX Design",
      imageUrl: "https://images.pexels.com/photos/7681926/pexels-photo-7681926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "An intuitive financial management dashboard with real-time data visualization, customizable reports, and predictive analytics.",
      technologies: ["Figma", "React", "Chart.js", "D3.js"],
      link: "#",
      categorySlug: "design"
    },
    {
      id: 4,
      title: "Real Estate Listing App",
      category: "Mobile Development",
      imageUrl: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A mobile application for real estate listings with map integration, virtual tours, and messaging between buyers and agents.",
      technologies: ["React Native", "Google Maps API", "Firebase", "Node.js"],
      link: "#",
      categorySlug: "mobile"
    },
    {
      id: 5,
      title: "Corporate Intranet Portal",
      category: "Web Development",
      imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A secure intranet portal for enterprise clients, featuring document management, employee directories, and team collaboration tools.",
      technologies: ["React", "TypeScript", "GraphQL", "PostgreSQL"],
      link: "#",
      categorySlug: "web"
    },
    {
      id: 6,
      title: "Fitness Tracker Redesign",
      category: "UI/UX Design",
      imageUrl: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A complete redesign of a fitness tracking application, focusing on improving user engagement and simplifying the tracking process.",
      technologies: ["Figma", "Adobe XD", "Prototyping", "User Testing"],
      link: "#",
      categorySlug: "design"
    },
    {
      id: 7,
      title: "Restaurant Ordering System",
      category: "Web Development",
      imageUrl: "https://images.pexels.com/photos/4344544/pexels-photo-4344544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "An online ordering system for restaurants, with table reservations, menu management, and integration with delivery services.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Payment Gateway"],
      link: "#",
      categorySlug: "web"
    },
    {
      id: 8,
      title: "Travel Companion App",
      category: "Mobile Development",
      imageUrl: "https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A travel companion mobile app that helps users plan trips, discover local attractions, and keep track of their itineraries.",
      technologies: ["Flutter", "Firebase", "Google Places API", "Maps Integration"],
      link: "#",
      categorySlug: "mobile"
    },
    {
      id: 9,
      title: "HR Management System",
      category: "Web Development",
      imageUrl: "https://images.pexels.com/photos/3182827/pexels-photo-3182827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A comprehensive HR management system for tracking employee data, leave management, performance reviews, and payroll processing.",
      technologies: ["React", "Node.js", "MySQL", "AWS"],
      link: "#",
      categorySlug: "web"
    }
  ];

  const categories = [
    { name: "All", slug: "all" },
    { name: "Web Development", slug: "web" },
    { name: "Mobile Development", slug: "mobile" },
    { name: "UI/UX Design", slug: "design" }
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.categorySlug === activeCategory);

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 to-indigo-950/30 z-0"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Portfolio</h1>
            <p className="text-gray-300 text-lg mb-8">
              Explore our recent projects showcasing our expertise in web and mobile development.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="section bg-gray-900">
        <div className="container-custom">
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.slug}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeCategory === category.slug
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                onClick={() => setActiveCategory(category.slug)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group cursor-pointer"
                onClick={() => openProjectDetails(project)}
              >
                <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-indigo-900/70 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                    <button className="btn btn-primary transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      View Project
                      <ExternalLink size={16} className="ml-2" />
                    </button>
                  </div>
                </div>
                <div>
                  <span className="text-indigo-500 text-sm font-medium">{project.category}</span>
                  <h3 className="text-lg font-semibold text-white mt-1 mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-gray-950/90 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              onClick={closeProjectDetails}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            
            <div className="p-6 md:p-8">
              <div className="relative rounded-lg overflow-hidden mb-6 aspect-video">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <span className="text-indigo-500 text-sm font-medium">{selectedProject.category}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-4">{selectedProject.title}</h2>
              
              <p className="text-gray-300 mb-6">{selectedProject.description}</p>
              
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-3">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 text-indigo-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button
                  href={selectedProject.link}
                  variant="primary"
                  icon={<ExternalLink size={16} />}
                  iconPosition="right"
                >
                  Visit Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="section bg-gray-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
              <p className="text-4xl font-bold text-indigo-500 mb-2">100+</p>
              <p className="text-white font-medium">Completed Projects</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
              <p className="text-4xl font-bold text-indigo-500 mb-2">50+</p>
              <p className="text-white font-medium">Happy Clients</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
              <p className="text-4xl font-bold text-indigo-500 mb-2">7+</p>
              <p className="text-white font-medium">Years Experience</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
              <p className="text-4xl font-bold text-indigo-500 mb-2">15+</p>
              <p className="text-white font-medium">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            subtitle="Our Expertise"
            title="Project Categories"
            description="We specialize in a wide range of digital solutions across various domains and technologies."
            center
            className="max-w-3xl mx-auto"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="card hover:border-indigo-500 transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-600/20 p-3 rounded-lg mr-4">
                  <Monitor className="text-indigo-500" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Web Applications</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Custom web applications tailored to your specific business needs, from simple websites to complex enterprise platforms.
              </p>
              <button 
                className="text-indigo-500 font-medium hover:text-indigo-400 transition-colors"
                onClick={() => setActiveCategory("web")}
              >
                View web projects →
              </button>
            </div>
            
            <div className="card hover:border-indigo-500 transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-600/20 p-3 rounded-lg mr-4">
                  <Smartphone className="text-indigo-500" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Mobile Applications</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Native and cross-platform mobile applications for iOS and Android, designed to provide exceptional user experiences.
              </p>
              <button 
                className="text-indigo-500 font-medium hover:text-indigo-400 transition-colors"
                onClick={() => setActiveCategory("mobile")}
              >
                View mobile projects →
              </button>
            </div>
            
            <div className="card hover:border-indigo-500 transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-600/20 p-3 rounded-lg mr-4">
                  <Layers className="text-indigo-500" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">UI/UX Design</h3>
              </div>
              <p className="text-gray-400 mb-4">
                User-centered design solutions that enhance usability, accessibility, and overall user satisfaction.
              </p>
              <button 
                className="text-indigo-500 font-medium hover:text-indigo-400 transition-colors"
                onClick={() => setActiveCategory("design")}
              >
                View design projects →
              </button>
            </div>
            
            <div className="card hover:border-indigo-500 transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-600/20 p-3 rounded-lg mr-4">
                  <ShoppingCart className="text-indigo-500" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">E-commerce</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Robust e-commerce solutions with secure payment processing, inventory management, and optimization for conversions.
              </p>
              <button 
                className="text-indigo-500 font-medium hover:text-indigo-400 transition-colors"
                onClick={() => setActiveCategory("web")}
              >
                View e-commerce projects →
              </button>
            </div>
            
            <div className="card hover:border-indigo-500 transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-600/20 p-3 rounded-lg mr-4">
                  <Database className="text-indigo-500" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Enterprise Solutions</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Comprehensive enterprise solutions including CRM systems, ERP platforms, and custom business applications.
              </p>
              <button 
                className="text-indigo-500 font-medium hover:text-indigo-400 transition-colors"
                onClick={() => setActiveCategory("web")}
              >
                View enterprise projects →
              </button>
            </div>
            
            <div className="card hover:border-indigo-500 transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-600/20 p-3 rounded-lg mr-4">
                  <Monitor className="text-indigo-500" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Web Portals</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Custom web portals that streamline processes, improve collaboration, and provide centralized access to information.
              </p>
              <button 
                className="text-indigo-500 font-medium hover:text-indigo-400 transition-colors"
                onClick={() => setActiveCategory("web")}
              >
                View portal projects →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gray-950">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-indigo-900/50 to-gray-900 p-8 md:p-12 rounded-2xl border border-indigo-800/30">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let's Create Something Amazing Together
              </h2>
              <p className="text-gray-300 mb-8">
                Ready to start your next project? Contact us today for a free consultation and let's bring your ideas to life.
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;