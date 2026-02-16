import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  sectionHeader,
  underlineGrow,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  cardItem,
  magneticHover,
  scrollViewport,
} from '../utils/motionVariants';

const Contact = ({ theme }) => {
  const isDark = theme === 'dark';

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'e57a7cf9-5909-4768-b34c-d9739ca83746',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_email: 'aakarshroy03@gmail.com',
          subject: `Contact from ${formData.name}`,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'aakarshroy03@gmail.com',
      href: 'mailto:aakarshroy03@gmail.com',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: 'GitHub',
      value: 'github.com/aakarsh-roy',
      href: 'https://github.com/aakarsh-roy',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: 'LinkedIn',
      value: 'linkedin.com/in/aakarshroy',
      href: 'https://www.linkedin.com/in/aakarsh-roy',
    },
  ];

  /* Input field styling */
  const inputBase = `w-full px-4 py-3.5 rounded-xl border transition-all duration-300 focus:outline-none ${
    isDark
      ? 'bg-[#0d0d20] border-white/10 text-white placeholder-transparent focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)]'
      : 'bg-white border-gray-200 text-gray-900 placeholder-transparent focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.08)]'
  }`;

  const labelStyle = `floating-label ${isDark ? 'text-gray-500' : 'text-gray-400'}`;

  return (
    <section id="contact" className={`py-16 md:py-24 lg:py-32 ${isDark ? 'bg-[var(--bg-primary)]' : 'bg-[var(--bg-primary)]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <motion.h2
            variants={sectionHeader}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.div
            variants={underlineGrow}
            className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full origin-center"
          />
          <motion.p
            variants={fadeInUp}
            className={`mt-6 max-w-2xl mx-auto text-base sm:text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info Side */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            className="space-y-8"
          >
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Let's work together
              </h3>
              <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question, want to discuss a potential collaboration,
                or just want to say hi, I'd love to hear from you!
              </p>
            </div>

            {/* Contact Cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={scrollViewport}
              className="space-y-4"
            >
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={cardItem}
                  whileHover={{ x: 8, transition: { duration: 0.3 } }}
                  className={`flex items-center gap-4 p-4 rounded-xl glass-card group transition-all duration-300 ${isDark ? 'hover:shadow-lg hover:shadow-indigo-500/5' : 'hover:shadow-lg hover:shadow-indigo-200/20'}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${isDark ? 'bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20' : 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100'}`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{info.label}</p>
                    <p className={`font-medium transition-colors ${isDark ? 'text-white group-hover:text-indigo-400' : 'text-gray-900 group-hover:text-indigo-600'}`}>
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Follow Me</h4>
              <div className="flex gap-3">
                {[
                  { href: 'https://github.com/aakarsh-roy', label: 'GitHub', path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
                  { href: 'https://www.linkedin.com/in/aakarsh-roy', label: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center glass-card transition-all duration-300 ${
                      isDark
                        ? 'text-gray-400 hover:text-white hover:shadow-lg hover:shadow-indigo-500/10'
                        : 'text-gray-500 hover:text-indigo-600 hover:shadow-lg hover:shadow-indigo-200/20'
                    }`}
                    aria-label={social.label}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            className="glass-card p-5 sm:p-8"
          >
            <h3 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field with floating label */}
              <div className="floating-label-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className={inputBase}
                />
                <label htmlFor="name" className={labelStyle}>Your Name</label>
              </div>

              {/* Email Field with floating label */}
              <div className="floating-label-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className={inputBase}
                />
                <label htmlFor="email" className={labelStyle}>Your Email</label>
              </div>

              {/* Message Field with floating label */}
              <div className="floating-label-group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder=" "
                  className={`${inputBase} resize-none`}
                />
                <label htmlFor="message" className={labelStyle}>Message</label>
              </div>

              {/* Submit Button with states */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                {...magneticHover}
                className={`w-full py-4 font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                  submitStatus === 'success'
                    ? 'bg-green-600 text-white'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/25 disabled:opacity-50 disabled:cursor-not-allowed'
                }`}
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </motion.div>
                  ) : submitStatus === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Sent Successfully!
                    </motion.div>
                  ) : (
                    <motion.div
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Status Messages */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-center text-sm"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-center text-sm"
                  >
                    Failed to send message. Please try again or email me directly.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
