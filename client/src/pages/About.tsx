import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

// Dummy data for team members
const teamMembers = [
  {
    id: 1,
    name: 'Alice Johnson',
    role: 'CEO & Founder',
    image: 'https://via.placeholder.com/200x200?text=Alice',
    bio: 'Alice leads the company with passion and vision.',
  },
  {
    id: 2,
    name: 'Bob Smith',
    role: 'CTO',
    image: 'https://via.placeholder.com/200x200?text=Bob',
    bio: 'Bob heads our tech team and drives innovation.',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    role: 'COO',
    image: 'https://via.placeholder.com/200x200?text=Charlie',
    bio: 'Charlie ensures smooth operations across the company.',
  },
  {
    id: 4,
    name: 'Dana White',
    role: 'CMO',
    image: 'https://via.placeholder.com/200x200?text=Dana',
    bio: 'Dana spearheads our marketing and outreach strategies.',
  },
];

// Dummy data for milestones/timeline
const milestones = [
  {
    id: 1,
    year: '2010',
    title: 'Founded',
    description: 'Our company was founded in 2010 with a vision to revolutionize transportation.',
  },
  {
    id: 2,
    year: '2012',
    title: 'First Milestone',
    description: 'Reached 10,000 customers and expanded our service network.',
  },
  {
    id: 3,
    year: '2015',
    title: 'Regional Expansion',
    description: 'Expanded services to cover major cities in Cameroon.',
  },
  {
    id: 4,
    year: '2020',
    title: 'Industry Award',
    description: 'Won the prestigious industry excellence award for innovation and service.',
  },
];

// Dummy data for photos/media
const mediaImages = [
  'https://via.placeholder.com/400x300?text=Office+1',
  'https://via.placeholder.com/400x300?text=Office+2',
  'https://via.placeholder.com/400x300?text=Team+Building',
  'https://via.placeholder.com/400x300?text=Conference',
];

const AdvancedAboutUsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* 1. Introduction / Company Overview */}
      <motion.section
        className="py-20 px-4 lg:px-28 bg-cover bg-center"
        style={{ backgroundImage: "url('https://via.placeholder.com/1200x400?text=About+Us+Background')" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-md">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="mb-4">
            We are a leading provider of innovative bus management systems, dedicated to streamlining public transportation in Cameroon and beyond.
          </p>
          <p className="mb-2">
            <strong>Mission:</strong> To revolutionize public transportation through advanced technology and a customer-centric approach.
          </p>
          <p className="mb-2">
            <strong>Vision:</strong> To become the foremost transport management solution provider in Africa.
          </p>
          <p className="mb-2">
            <strong>Values:</strong> Innovation, Integrity, Customer Focus, and Excellence.
          </p>
        </div>
      </motion.section>

      {/* 2. History / Background */}
      <motion.section
        className="py-16 px-4 lg:px-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
        <div className="relative border-l-2 border-violet-600">
          {milestones.map((milestone) => (
            <div key={milestone.id} className="mb-8 ml-6">
              <motion.div
                className="absolute -left-3.5 top-0 bg-violet-600 rounded-full h-7 w-7"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <motion.h3
                className="text-xl font-semibold"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {milestone.year} - {milestone.title}
              </motion.h3>
              <motion.p
                className="mt-2 text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {milestone.description}
              </motion.p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 3. Team Members */}
      <motion.section
        className="py-16 px-4 lg:px-28 bg-gray-100 dark:bg-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * member.id }}
              viewport={{ once: true }}
            >
              <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mb-4 object-cover" />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-violet-600 mb-2">{member.role}</p>
              <p className="text-center text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 4. Company Culture & Values */}
      <motion.section
        className="py-16 px-4 lg:px-28"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Our Culture & Values</h2>
        <p className="max-w-3xl mx-auto text-center text-lg mb-4">
          We nurture a culture of innovation, collaboration, and continuous improvement. Every member of our team is committed to delivering exceptional service and transforming public transport for the better.
        </p>
        <p className="max-w-3xl mx-auto text-center text-lg">
          Our core values of integrity, customer focus, and excellence drive everything we do and guide us as we pursue our vision for a smarter, more connected future.
        </p>
      </motion.section>

      {/* 5. Milestones & Achievements */}
      <motion.section
        className="py-16 px-4 lg:px-28 bg-gray-100 dark:bg-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Milestones & Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Award Winning Service</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Recognized as the best transport management solution in the region in 2020.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">10,000+ Satisfied Customers</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our solutions have transformed the travel experience for thousands of customers.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Rapid Growth</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We have experienced a steady growth in both our services and customer base.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Industry Recognition</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Honored for excellence in innovation and outstanding customer service.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 6. Photos & Media */}
      <motion.section
        className="py-16 px-4 lg:px-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Photos & Media</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mediaImages.map((src, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <img src={src} alt={`Media ${index + 1}`} className="w-full h-64 object-cover" />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 7. Contact Information */}
      <motion.section
        className="py-16 px-4 lg:px-28 bg-gray-100 dark:bg-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-2">
              <strong>Address:</strong> 123 Main Street, Douala, Cameroon
            </p>
            <p className="mb-2">
              <strong>Email:</strong> info@busmanagement.cm
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +237 123 456 789
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-600"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-400"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-700"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-pink-600"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 8. Call to Action (CTA) */}
      <motion.section
        className="py-16 px-4 lg:px-28 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Experience Excellence?</h2>
        <p className="mb-8 text-lg">
          Contact us today to learn more about our services or to schedule a consultation.
        </p>
        <a
          href="/contact"
          className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-md transition"
        >
          Contact Us
        </a>
      </motion.section>
    </div>
  );
};

export default AdvancedAboutUsPage;
