import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

// Components
import Button from '../components/ui/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  services: string[];
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    services: [],
  });

  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when field is being edited
    if (formErrors[name as keyof FormData]) {
      setFormErrors({
        ...formErrors,
        [name]: undefined,
      });
    }
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    
    if (checked) {
      setFormData({
        ...formData,
        services: [...formData.services, value],
      });
    } else {
      setFormData({
        ...formData,
        services: formData.services.filter(service => service !== value),
      });
    }
  };

  const validateForm = (): boolean => {
    const errors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          services: [],
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 to-indigo-950/30 z-0"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-gray-300 text-lg mb-8">
              Get in touch with our team to discuss your project or inquire about our services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-gray-400 mb-8">
                Have a question or want to discuss a potential project? Fill out the form or contact us directly using the information below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-indigo-600/20 p-3 rounded-lg mr-4">
                    <Mail className="text-indigo-500" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Email</h3>
                    <p className="text-gray-400">info@melexis.in</p>
                    <p className="text-gray-400">support@melexis.in</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-600/20 p-3 rounded-lg mr-4">
                    <Phone className="text-indigo-500" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Phone</h3>
                    <p className="text-gray-400">+91 6260786975</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-600/20 p-3 rounded-lg mr-4">
                    <MapPin className="text-indigo-500" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Office</h3>
                    <p className="text-gray-400">
                      3626 North hall street, <br />
                      suite 610 dallas,TX 75219
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/company/melexis-innovation/" className="bg-gray-800 hover:bg-indigo-600 text-white p-3 rounded-full transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM8 19H5V8h3v11zM6.5 6.73c-.99 0-1.8-.81-1.8-1.8s.81-1.8 1.8-1.8 1.8.81 1.8 1.8-.81 1.8-1.8 1.8zM20 19h-3v-5.6c0-3.37-4-3.12-4 0V19h-3V8h3v1.77c1.75-2.63 7-2.63 7 2.52V19z"></path>
                    </svg>
                  </a>
                  <a href="https://x.com/" className="bg-gray-800 hover:bg-indigo-600 text-white p-3 rounded-full transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="https://github.com/" className="bg-gray-800 hover:bg-indigo-600 text-white p-3 rounded-full transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/" className="bg-gray-800 hover:bg-indigo-600 text-white p-3 rounded-full transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                
                {submitSuccess && (
                  <div className="bg-green-900/50 border border-green-700 text-green-300 px-4 py-3 rounded mb-6">
                    Thank you for your message! We'll get back to you as soon as possible.
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name <span className="text-indigo-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`bg-gray-700 border ${
                          formErrors.name ? 'border-red-500' : 'border-gray-600'
                        } text-gray-200 rounded-lg block w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                        placeholder="John Doe"
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-sm text-red-400">{formErrors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address <span className="text-indigo-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`bg-gray-700 border ${
                          formErrors.email ? 'border-red-500' : 'border-gray-600'
                        } text-gray-200 rounded-lg block w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                        placeholder="john.doe@example.com"
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-red-400">{formErrors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-gray-700 border border-gray-600 text-gray-200 rounded-lg block w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="+91 982712-54567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-gray-700 border border-gray-600 text-gray-200 rounded-lg block w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Project Inquiry"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Services You're Interested In
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="service-web"
                          name="services"
                          value="Web Development"
                          checked={formData.services.includes('Web Development')}
                          onChange={handleServiceChange}
                          className="w-4 h-4 text-indigo-600 bg-gray-700 border-gray-600 rounded focus:ring-indigo-500 focus:ring-2"
                        />
                        <label htmlFor="service-web" className="ml-2 text-sm text-gray-300">
                          Web Development
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="service-mobile"
                          name="services"
                          value="Mobile App Development"
                          checked={formData.services.includes('Mobile App Development')}
                          onChange={handleServiceChange}
                          className="w-4 h-4 text-indigo-600 bg-gray-700 border-gray-600 rounded focus:ring-indigo-500 focus:ring-2"
                        />
                        <label htmlFor="service-mobile" className="ml-2 text-sm text-gray-300">
                          Mobile App Development
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="service-ui"
                          name="services"
                          value="UI/UX Design"
                          checked={formData.services.includes('UI/UX Design')}
                          onChange={handleServiceChange}
                          className="w-4 h-4 text-indigo-600 bg-gray-700 border-gray-600 rounded focus:ring-indigo-500 focus:ring-2"
                        />
                        <label htmlFor="service-ui" className="ml-2 text-sm text-gray-300">
                          UI/UX Design
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="service-ecommerce"
                          name="services"
                          value="E-commerce"
                          checked={formData.services.includes('E-commerce')}
                          onChange={handleServiceChange}
                          className="w-4 h-4 text-indigo-600 bg-gray-700 border-gray-600 rounded focus:ring-indigo-500 focus:ring-2"
                        />
                        <label htmlFor="service-ecommerce" className="ml-2 text-sm text-gray-300">
                          E-commerce Solutions
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="service-consulting"
                          name="services"
                          value="Consulting"
                          checked={formData.services.includes('Consulting')}
                          onChange={handleServiceChange}
                          className="w-4 h-4 text-indigo-600 bg-gray-700 border-gray-600 rounded focus:ring-indigo-500 focus:ring-2"
                        />
                        <label htmlFor="service-consulting" className="ml-2 text-sm text-gray-300">
                          Consulting & Strategy
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="service-other"
                          name="services"
                          value="Other"
                          checked={formData.services.includes('Other')}
                          onChange={handleServiceChange}
                          className="w-4 h-4 text-indigo-600 bg-gray-700 border-gray-600 rounded focus:ring-indigo-500 focus:ring-2"
                        />
                        <label htmlFor="service-other" className="ml-2 text-sm text-gray-300">
                          Other Services
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Message <span className="text-indigo-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`bg-gray-700 border ${
                        formErrors.message ? 'border-red-500' : 'border-gray-600'
                      } text-gray-200 rounded-lg block w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                      placeholder="Tell us about your project, requirements, or any questions you have..."
                    ></textarea>
                    {formErrors.message && (
                      <p className="mt-1 text-sm text-red-400">{formErrors.message}</p>
                    )}
                  </div>
                  
                  <div className="text-right">
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                      icon={isSubmitting ? undefined : <Send size={16} />}
                      iconPosition="right"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-gray-950">
        <div className="container-custom">
          <div className="bg-gray-900 rounded-xl overflow-hidden">
            <div className="aspect-video w-full">
                    <iframe
        title="Melexis Office Location"
        className="w-full h-full border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.303616354241!2d-96.80652728481726!3d32.812443180963065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e991e4b7f4f07%3A0xd650e1b5f5ff1a0b!2s3626%20N%20Hall%20St%20%23610%2C%20Dallas%2C%20TX%2075219%2C%20USA!5e0!3m2!1sen!2sus!4v1716033812345!5m2!1sen!2sus"
        allowFullScreen
      ></iframe>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">What is your typical project process?</h3>
                <p className="text-gray-400">
                  Our process typically involves discovery and planning, design and prototyping, development, testing and quality assurance, deployment and launch, followed by ongoing support and maintenance.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">How long does it take to complete a project?</h3>
                <p className="text-gray-400">
                  Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a complex web or mobile application could take 3-6 months. We'll provide a detailed timeline during our initial consultation.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">What is your pricing structure?</h3>
                <p className="text-gray-400">
                  We offer flexible pricing options including fixed-price quotes for defined projects and hourly rates for ongoing work. Our pricing is based on project complexity, timeline, and resources required. Contact us for a custom quote.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Do you provide ongoing support after launch?</h3>
                <p className="text-gray-400">
                  Yes, we offer various support and maintenance packages to ensure your application continues to run smoothly after launch. This includes bug fixes, security updates, performance optimization, and feature enhancements.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Can you work with our existing team?</h3>
                <p className="text-gray-400">
                  Absolutely! We're experienced in collaborating with in-house teams and can provide the specific expertise you need to complement your existing resources. We're flexible and can adapt to your preferred workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;