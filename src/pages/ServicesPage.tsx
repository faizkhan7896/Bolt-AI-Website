import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Smartphone, Database, Server, Lightbulb, ShoppingCart, Image, PenTool, BarChart } from 'lucide-react';

// Components
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import mobileApp from "../../../public/app-devlopment.jpg"
const ServicesPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 to-indigo-950/30 z-0"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-gray-300 text-lg mb-8">
              We offer comprehensive solutions to elevate your digital presence and transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Web Development Section */}
      <section className="section bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                subtitle="Core Service"
                title="Web Development"
                description="We create modern, responsive, and high-performance websites that deliver exceptional user experiences and drive business growth."
              />
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <span className="flex-shrink-0 mr-4 bg-indigo-600/20 p-2 rounded-lg">
                    <Code2 className="text-indigo-500" size={20} />
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Front-end Development</h3>
                    <p className="text-gray-400">
                      Modern, responsive interfaces built with React, Vue.js, and other cutting-edge frameworks, ensuring optimal user experiences across all devices.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="flex-shrink-0 mr-4 bg-indigo-600/20 p-2 rounded-lg">
                    <Server className="text-indigo-500" size={20} />
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Back-end Development</h3>
                    <p className="text-gray-400">
                      Robust server-side solutions using Node.js, Python, and other technologies to handle complex business logic and data processing.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="flex-shrink-0 mr-4 bg-indigo-600/20 p-2 rounded-lg">
                    <Database className="text-indigo-500" size={20} />
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Database Design</h3>
                    <p className="text-gray-400">
                      Efficient and scalable database architectures that ensure data integrity, security, and performance for your applications.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="flex-shrink-0 mr-4 bg-indigo-600/20 p-2 rounded-lg">
                    <ShoppingCart className="text-indigo-500" size={20} />
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">E-commerce Solutions</h3>
                    <p className="text-gray-400">
                      Comprehensive online store development with secure payment processing, inventory management, and optimization for conversions.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium text-white mb-3">Technologies We Use:</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-800 text-indigo-400 px-3 py-1 rounded-full text-sm">Anguler</span>
                  <span className="bg-gray-800 text-indigo-400 px-3 py-1 rounded-full text-sm">Anguler</span>
                  <span className="bg-gray-800 text-indigo-400 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-gray-800 text-indigo-400 px-3 py-1 rounded-full text-sm">Next.js</span>
                  <span className="bg-gray-800 text-indigo-400 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-gray-800 text-indigo-400 px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-gray-800 text-indigo-400 px-3 py-1 rounded-full text-sm">Express</span>
                  <span className="bg-gray-800 text-indigo-400 px-3 py-1 rounded-full text-sm">MongoDB</span>
                  <span className="bg-gray-800 text-indigo-400 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                  <span className="bg-gray-800 text-indigo-400 px-3 py-1 rounded-full text-sm">MySQL</span>
                  <span className="bg-gray-800 text-indigo-400 px-3 py-1 rounded-full text-sm">GraphQL</span>
                  <span className="bg-gray-800 text-indigo-400 px-3 py-1 rounded-full text-sm">TypeScript</span>
                  <span className="bg-gray-800 text-indigo-400 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                </div>
              </div>
              
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Get Started
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg blur opacity-30"></div>
              <div className="relative bg-gray-900 p-1 rounded-lg overflow-hidden border border-gray-800">
                <img 
                  src="https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Web Development" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Development Section */}
      <section className="section bg-gray-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-`1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg blur opacity-30"></div>
              <div className="relative bg-gray-900 p-1 rounded-lg overflow-hidden border border-gray-800">
                <img 
                  src="../../../public/app-devlopment.jpg" 
                  alt="Mobile App Development" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <SectionTitle
                subtitle="Core Service"
                title="Mobile App Development"
                description="We develop native and cross-platform mobile applications that provide seamless experiences across iOS and Android devices."
              />
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <span className="flex-shrink-0 mr-4 bg-indigo-600/20 p-2 rounded-lg">
                    <Smartphone className="text-indigo-500" size={20} />
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Native App Development</h3>
                    <p className="text-gray-400">
                      Platform-specific applications for iOS and Android that leverage the full potential of each operating system, providing optimal performance and user experience.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="flex-shrink-0 mr-4 bg-indigo-600/20 p-2 rounded-lg">
                    <Code2 className="text-indigo-500" size={20} />
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Cross-Platform Development</h3>
                    <p className="text-gray-400">
                      Efficient multi-platform applications using React Native and Flutter, allowing you to reach both iOS and Android users with a single codebase.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="flex-shrink-0 mr-4 bg-indigo-600/20 p-2 rounded-lg">
                    <PenTool className="text-indigo-500" size={20} />
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">UI/UX for Mobile</h3>
                    <p className="text-gray-400">
                      Intuitive and engaging mobile interfaces designed specifically for touch interactions and smaller screens, ensuring excellent usability.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="flex-shrink-0 mr-4 bg-indigo-600/20 p-2 rounded-lg">
                    <BarChart className="text-indigo-500" size={20} />
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">App Store Optimization</h3>
                    <p className="text-gray-400">
                      Strategic approaches to improve your app's visibility and conversion rates on the App Store and Google Play Store.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium text-white mb-3">Technologies We Use:</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-800 text-indigo-400 px-3 py-1 rounded-full text-sm">Swift</span>
                  <span className="bg-gray-800 text-indigo-400 px-3 py-1 rounded-full text-sm">Kotlin</span>
                  <span className="bg-gray-800 text-indigo-400 px-3 py-1 rounded-full text-sm">React Native</span>
                  <span className="bg-gray-800 text-indigo-400 px-3 py-1 rounded-full text-sm">Flutter</span>
                  <span className="bg-gray-800 text-indigo-400 px-3 py-1 rounded-full text-sm">Firebase</span>
                  <span className="bg-gray-800 text-indigo-400 px-3 py-1 rounded-full text-sm">SwiftUI</span>
                  <span className="bg-gray-800 text-indigo-400 px-3 py-1 rounded-full text-sm">Jetpack Compose</span>
                </div>
              </div>
              
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            subtitle="More Services"
            title="Additional Expertise"
            description="Beyond our core services, we offer a range of complementary solutions to enhance your digital presence."
            center
            className="max-w-3xl mx-auto"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="card">
              <div className="bg-indigo-600/20 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <PenTool className="text-indigo-500" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">UI/UX Design</h3>
              <p className="text-gray-400 mb-4">
                User-centered design that enhances usability, accessibility, and delight, creating memorable digital experiences.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  User research and personas
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Wireframing and prototyping
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Visual design and branding
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Usability testing
                </li>
              </ul>
              <Link to="/contact" className="text-indigo-500 font-medium hover:text-indigo-400 transition-colors">
                Learn more →
              </Link>
            </div>
            
            <div className="card">
              <div className="bg-indigo-600/20 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <ShoppingCart className="text-indigo-500" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">E-commerce Solutions</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive online store development with powerful features to drive sales and provide seamless shopping experiences.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Custom shop development
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Payment gateway integration
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Inventory management
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Marketing automation
                </li>
              </ul>
              <Link to="/contact" className="text-indigo-500 font-medium hover:text-indigo-400 transition-colors">
                Learn more →
              </Link>
            </div>
            
            <div className="card">
              <div className="bg-indigo-600/20 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <BarChart className="text-indigo-500" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Digital Marketing</h3>
              <p className="text-gray-400 mb-4">
                Strategic marketing solutions to increase visibility, drive traffic, and convert visitors into customers.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Search engine optimization
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Social media marketing
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Content strategy
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Analytics and reporting
                </li>
              </ul>
              <Link to="/contact" className="text-indigo-500 font-medium hover:text-indigo-400 transition-colors">
                Learn more →
              </Link>
            </div>
            
            <div className="card">
              <div className="bg-indigo-600/20 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Image className="text-indigo-500" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Branding & Identity</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive branding solutions that communicate your values and connect with your target audience.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Logo design
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Brand guidelines
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Visual identity systems
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Brand messaging
                </li>
              </ul>
              <Link to="/contact" className="text-indigo-500 font-medium hover:text-indigo-400 transition-colors">
                Learn more →
              </Link>
            </div>
            
            <div className="card">
              <div className="bg-indigo-600/20 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Server className="text-indigo-500" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cloud Solutions</h3>
              <p className="text-gray-400 mb-4">
                Scalable and reliable cloud infrastructure to support your applications and store your data securely.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Cloud migration
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  DevOps implementation
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Serverless architecture
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Performance optimization
                </li>
              </ul>
              <Link to="/contact" className="text-indigo-500 font-medium hover:text-indigo-400 transition-colors">
                Learn more →
              </Link>
            </div>
            
            <div className="card">
              <div className="bg-indigo-600/20 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="text-indigo-500" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Consulting & Strategy</h3>
              <p className="text-gray-400 mb-4">
                Expert guidance to help you make informed decisions about your digital strategy and technology choices.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Digital transformation
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Technology assessment
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Roadmap development
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Process optimization
                </li>
              </ul>
              <Link to="/contact" className="text-indigo-500 font-medium hover:text-indigo-400 transition-colors">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-950">
        <div className="container-custom">
          <SectionTitle
            subtitle="Our Approach"
            title="How We Work"
            description="Our proven development process ensures efficient delivery of high-quality solutions that meet your objectives."
            center
            className="max-w-3xl mx-auto"
          />
          
          <div className="relative mt-16">
            {/* Connection line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 relative">
              {/* Step 1 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <div className="md:text-right md:pr-12">
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-lg">
                    <span className="bg-indigo-900/50 text-indigo-400 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                      Step 1
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-3">Discovery & Planning</h3>
                    <p className="text-gray-400">
                      We start by understanding your business objectives, target audience, and project requirements through in-depth consultations and research.
                    </p>
                  </div>
                </div>
                
                <div className="hidden md:block">
                  {/* Circle marker */}
                  <div className="absolute left-1/2 top-6 w-8 h-8 bg-indigo-600 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <div className="hidden md:block"></div>
                
                <div className="md:pl-12">
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-lg">
                    <span className="bg-indigo-900/50 text-indigo-400 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                      Step 2
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-3">Design & Prototyping</h3>
                    <p className="text-gray-400">
                      We create wireframes and interactive prototypes to visualize the solution, allowing you to provide feedback before development begins.
                    </p>
                  </div>
                </div>
                
                <div className="hidden md:block">
                  {/* Circle marker */}
                  <div className="absolute left-1/2 top-6 w-8 h-8 bg-indigo-600 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <div className="md:text-right md:pr-12">
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-lg">
                    <span className="bg-indigo-900/50 text-indigo-400 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                      Step 3
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-3">Development</h3>
                    <p className="text-gray-400">
                      Our experienced developers bring the designs to life, writing clean, efficient code that follows best practices and industry standards.
                    </p>
                  </div>
                </div>
                
                <div className="hidden md:block">
                  {/* Circle marker */}
                  <div className="absolute left-1/2 top-6 w-8 h-8 bg-indigo-600 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <div className="hidden md:block"></div>
                
                <div className="md:pl-12">
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-lg">
                    <span className="bg-indigo-900/50 text-indigo-400 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                      Step 4
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-3">Testing & Quality Assurance</h3>
                    <p className="text-gray-400">
                      We thoroughly test all aspects of your application, ensuring it functions flawlessly across different devices and scenarios.
                    </p>
                  </div>
                </div>
                
                <div className="hidden md:block">
                  {/* Circle marker */}
                  <div className="absolute left-1/2 top-6 w-8 h-8 bg-indigo-600 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <div className="md:text-right md:pr-12">
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-lg">
                    <span className="bg-indigo-900/50 text-indigo-400 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                      Step 5
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-3">Deployment & Launch</h3>
                    <p className="text-gray-400">
                      We handle the deployment process, ensuring a smooth transition to your production environment and a successful launch.
                    </p>
                  </div>
                </div>
                
                <div className="hidden md:block">
                  {/* Circle marker */}
                  <div className="absolute left-1/2 top-6 w-8 h-8 bg-indigo-600 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">5</span>
                  </div>
                </div>
              </div>
              
              {/* Step 6 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <div className="hidden md:block"></div>
                
                <div className="md:pl-12">
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-lg">
                    <span className="bg-indigo-900/50 text-indigo-400 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                      Step 6
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-3">Support & Maintenance</h3>
                    <p className="text-gray-400">
                      We provide ongoing support and maintenance to ensure your application continues to run smoothly and stays up-to-date with evolving technology.
                    </p>
                  </div>
                </div>
                
                <div className="hidden md:block">
                  {/* Circle marker */}
                  <div className="absolute left-1/2 top-6 w-8 h-8 bg-indigo-600 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gray-900">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-indigo-900/50 to-gray-900 p-8 md:p-12 rounded-2xl border border-indigo-800/30">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-gray-300 mb-8">
                Contact us today for a free consultation and let's discuss how we can bring your vision to life.
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;