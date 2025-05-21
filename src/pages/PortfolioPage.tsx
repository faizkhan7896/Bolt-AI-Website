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
      title: "3T Taxi - Website",
      category: "Web Development",
      imageUrl: "/3T-2/3T_Taxi_website.png",
      description: "The project was 3T Taxi App Landing Page creation. I did it within a very short time and the Client was very helpful. I used React js with Javascript. That was an excellent experience for me.",
      technologies: ["React", "Node.js", "MySQL", "AWS"],
      link: "#",
      categorySlug: "web"
    },
    {
      id: 2,
      title: "Digital Agency",
      category: "Web Development",
      imageUrl: "/Digital-3/Digital_Agency.png",
      description: "The project was Digital Agency website creation. I did it within a very short time and the Client was very helpful. I used WordPress with Elementor Platform. That was an excellent experience for me",
      technologies: ["React", "Node.js", "MySQL", "AWS"],
      link: "#",
      categorySlug: "web"
    },
    {
      id: 3,
      title: "Bertóoz Ecommerce",
      category: "Web Development",
      imageUrl: "/Ecommerce.png",
      description: "E-commerce is constantly evolving, as is the design of e-commerce websites and apps. In this design exploration, we're exploring new ways to make e-commerce more user-friendly, engaging, and visually appealing",
      technologies: ["React", "Node.js", "MySQL", "AWS"],
      link: "#",
      categorySlug: "web"
    },
    {
      id: 4,
      title: "Event Management",
      category: "Mobile Development",
      imageUrl: "/Event.png",
      description: "Continue to work one by one, here is the new minimal Event Management-Mobile App Exploration.The goal of this project is to build a platform with an enhanced Event experience.",
      technologies: ["React-native", "PHP", "MySQL", "AWS"],
      link: "#",
      categorySlug: "mobile"
    },
    {
      id: 5,
      title: "E-Commerce Mobile App",
      category: "Mobile Development",
      imageUrl: "/2.png",
      description: "An E-Commerce app with online shopping, tracking, notifications, and payment gateway integration (Android & iOS) ",
      technologies: ["Flutter", "Node.js", "MySQL", "AWS"],
      link: "#",
      categorySlug: "mobile"
    },
    {
      id: 6,
      title: "Gym Workout & Fitness Tracker",
      category: "Mobile Development",
      imageUrl: "/fitness-2.png",
      description: "Introducing our Gym Fitness App, the ideal tool for crafting gym apps and fitness trackers. It's user-friendly and professional, designed to enhance your fitness app's functionality and appeal",
      technologies: ["Flutter", "Node.js", "MySQL", "AWS", "Google APIs"],
      link: "#",
      categorySlug: "mobile"
    },
    {
      id: 7,
      title: "News Mobile App",
      category: "Mobile Development",
      imageUrl: "/news.png",
      description: "Modern iOS User Interface design template for a Blog / News app. This App is ideal for a blog app, media online, news app, and any media app. Make your wallet app design look stunning and eye-catching using this App. This App includes 12 unique and modern User Interface screens.",
      technologies: ["React Native", "Node.js", "MySQL", "AWS", "Google APIs", "Geolocation"],
      link: "#",
      categorySlug: "mobile"
    },
    {
      id: 8,
      title: "Easy Ride- Taxi Booking App",
      category: "Mobile Development",
      imageUrl: "/Ride.png",
      description: "Easy Ride is a Free & High-Quality Mobile App. with All Full Features of Taxi Booking App. Easy Ride comes with unique style.",
      technologies: ["React Native", "Node.js", "MySQL", "AWS", "ChatGPT API"],
      link: "#",
      categorySlug: "mobile"
    },
    {
      id: 9,
      title: "Dating App - Fun of & Dating",
      category: "Mobile Development",
      imageUrl: "/dating_App.png",
      description: "Fun of & Dating is a free dating app and social network for singles; the perfect place to meet new people, in an instant.Whether you want to make genuine matches, find meaningful connections or a new relationship, chat with strangers, make friends, casually date, or even expand your professional and social network, we’ve got you covered",
      technologies: ["React Native", "Node.js", "MySQL", "AWS", "ChatGPT API"],
      link: "#",
      categorySlug: "mobile"
    }
  ];

  const categories = [
    { name: "All", slug: "all" },
    { name: "Web Development", slug: "web" },
    { name: "Mobile Development", slug: "mobile" },
    // { name: "UI/UX Design", slug: "design" }
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