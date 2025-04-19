import React from 'react';
import { Shield, Target, Lightbulb, Users, Award, Briefcase } from 'lucide-react';

// Components
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 to-indigo-950/30 z-0"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Melexis</h1>
            <p className="text-gray-300 text-lg mb-8">
              We're a team of passionate developers, designers, and strategists dedicated to crafting exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Melexis Team"
                className="rounded-lg w-full h-auto shadow-lg"
              />
            </div>
            
            <div>
              <SectionTitle
                subtitle="Our Story"
                title="Building Digital Excellence Since 2018"
                description="Melexis was founded with a vision to bridge the gap between technology and business needs, creating digital solutions that truly empower organizations."
              />
              
              <p className="text-gray-400 mt-6">
                What started as a small team of three passionate developers has grown into a full-service digital agency with expertise across web development, mobile applications, UI/UX design, and digital strategy.
              </p>
              
              <p className="text-gray-400 mt-4">
                Today, we work with clients ranging from ambitious startups to established enterprises, helping them transform their digital presence and create meaningful connections with their users.
              </p>
              
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Work With Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-gray-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card flex flex-col h-full">
              <Target size={32} className="text-indigo-500 mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-400 flex-grow">
                To empower businesses through innovative digital solutions that drive growth, enhance user experiences, and create lasting value. We're committed to delivering excellence in every project, big or small.
              </p>
            </div>
            
            <div className="card flex flex-col h-full">
              <Lightbulb size={32} className="text-indigo-500 mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-400 flex-grow">
                To be a leading force in digital transformation, recognized for our innovative approach, technical excellence, and the tangible results we achieve for our clients. We aim to set new standards in the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            subtitle="Our Values"
            title="Principles That Guide Us"
            description="These core values shape our culture, influence our decisions, and define how we work with our clients and each other."
            center
            className="max-w-3xl mx-auto"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="card">
              <div className="bg-indigo-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-indigo-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Integrity</h3>
              <p className="text-gray-400">
                We operate with transparency and honesty in all our interactions, building trust with our clients and within our team.
              </p>
            </div>
            
            <div className="card">
              <div className="bg-indigo-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-indigo-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
              <p className="text-gray-400">
                We strive for excellence in everything we do, from the code we write to the designs we create and the service we provide.
              </p>
            </div>
            
            <div className="card">
              <div className="bg-indigo-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-indigo-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Collaboration</h3>
              <p className="text-gray-400">
                We believe in the power of teamwork and partnership, working closely with our clients and each other to achieve shared goals.
              </p>
            </div>
            
            <div className="card">
              <div className="bg-indigo-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="text-indigo-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
              <p className="text-gray-400">
                We embrace creativity and continuous learning, constantly exploring new technologies and approaches to solve complex problems.
              </p>
            </div>
            
            <div className="card">
              <div className="bg-indigo-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="text-indigo-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Professionalism</h3>
              <p className="text-gray-400">
                We approach every project with dedication, responsibility, and a commitment to delivering on our promises.
              </p>
            </div>
            
            <div className="card">
              <div className="bg-indigo-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-indigo-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Client Focus</h3>
              <p className="text-gray-400">
                We put our clients at the center of everything we do, tailoring our solutions to their unique needs and challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section bg-gray-950">
        <div className="container-custom">
          <SectionTitle
            subtitle="Our Team"
            title="Meet the Experts"
            description="Our diverse team of specialists brings together a wealth of experience and expertise to deliver exceptional results."
            center
            className="max-w-3xl mx-auto"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Team Member 1 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Alex Morgan"
                  className="w-full aspect-square object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="text-center">
                    <p className="text-gray-300 text-sm mb-3">
                      Over 10 years of experience in leading development teams and delivering complex web applications.
                    </p>
                    <div className="flex justify-center space-x-3">
                      <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM8 19H5V8h3v11zM6.5 6.73c-.99 0-1.8-.81-1.8-1.8s.81-1.8 1.8-1.8 1.8.81 1.8 1.8-.81 1.8-1.8 1.8zM20 19h-3v-5.6c0-3.37-4-3.12-4 0V19h-3V8h3v1.77c1.75-2.63 7-2.63 7 2.52V19z"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white">Alex Morgan</h3>
              <p className="text-indigo-400">Chief Technology Officer</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Sarah Chen"
                  className="w-full aspect-square object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="text-center">
                    <p className="text-gray-300 text-sm mb-3">
                      Award-winning designer specializing in user experience and interface design for web and mobile applications.
                    </p>
                    <div className="flex justify-center space-x-3">
                      <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM8 19H5V8h3v11zM6.5 6.73c-.99 0-1.8-.81-1.8-1.8s.81-1.8 1.8-1.8 1.8.81 1.8 1.8-.81 1.8-1.8 1.8zM20 19h-3v-5.6c0-3.37-4-3.12-4 0V19h-3V8h3v1.77c1.75-2.63 7-2.63 7 2.52V19z"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white">Sarah Chen</h3>
              <p className="text-indigo-400">Lead UI/UX Designer</p>
            </div>
            
            {/* Team Member 3 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="https://images.pexels.com/photos/2118429/pexels-photo-2118429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Marcus Johnson"
                  className="w-full aspect-square object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="text-center">
                    <p className="text-gray-300 text-sm mb-3">
                      Full-stack developer specializing in React, Node.js, and cloud architecture with 8 years of experience.
                    </p>
                    <div className="flex justify-center space-x-3">
                      <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM8 19H5V8h3v11zM6.5 6.73c-.99 0-1.8-.81-1.8-1.8s.81-1.8 1.8-1.8 1.8.81 1.8 1.8-.81 1.8-1.8 1.8zM20 19h-3v-5.6c0-3.37-4-3.12-4 0V19h-3V8h3v1.77c1.75-2.63 7-2.63 7 2.52V19z"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white">Marcus Johnson</h3>
              <p className="text-indigo-400">Lead Web Developer</p>
            </div>
            
            {/* Team Member 4 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Jessica Lee"
                  className="w-full aspect-square object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="text-center">
                    <p className="text-gray-300 text-sm mb-3">
                      Specialist in native and cross-platform mobile development with expertise in iOS, Android, and React Native.
                    </p>
                    <div className="flex justify-center space-x-3">
                      <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM8 19H5V8h3v11zM6.5 6.73c-.99 0-1.8-.81-1.8-1.8s.81-1.8 1.8-1.8 1.8.81 1.8 1.8-.81 1.8-1.8 1.8zM20 19h-3v-5.6c0-3.37-4-3.12-4 0V19h-3V8h3v1.77c1.75-2.63 7-2.63 7 2.52V19z"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white">Jessica Lee</h3>
              <p className="text-indigo-400">Mobile Development Lead</p>
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
                Ready to Work Together?
              </h2>
              <p className="text-gray-300 mb-8">
                Let's talk about how we can help transform your digital presence and achieve your business goals.
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;