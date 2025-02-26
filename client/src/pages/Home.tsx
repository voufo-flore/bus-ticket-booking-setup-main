import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaBus, FaCheckCircle, FaMoneyBillWave, FaUsers, 
  FaQuestionCircle, FaPhone, FaRegClock, FaMapMarkerAlt,
  FaTwitter, FaFacebook, FaInstagram, FaStar, FaTree
} from "react-icons/fa";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix leaflet marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Home = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const yaoundeCoords: [number, number] = [3.8480, 11.5021]; // Yaoundé coordinates

  // Major bus stations in Yaoundé
  const busStations = [
    { name: "Nsam Station", coords: [3.8785, 11.5182] },
    { name: "Mvan Station", coords: [3.8618, 11.5214] },
    { name: "Etoudi Station", coords: [3.8952, 11.5147] }
  ];

  const features = [
    { title: "Easy Booking", icon: <FaBus />, desc: "Book tickets in 3 easy steps" },
    { title: "Real-Time Tracking", icon: <FaRegClock />, desc: "Live updates every 2 minutes" },
    { title: "Mobile Wallet", icon: <FaMoneyBillWave />, desc: "MTN Mobile Money & Orange Money" },
    { title: "Eco-Friendly", icon: <FaTree />, desc: "Carbon-neutral buses" }
  ];

  const testimonials = [
    { 
      name: "Amina Bello", 
      text: "Best transportation service in Yaoundé! Always on time.", 
      rating: 5, 
      location: "Mokolo Market"
    },
    { 
      name: "Jean Dupont", 
      text: "Service exceptionnel! Les bus sont toujours propres et climatisés.", 
      rating: 4, 
      location: "Bastos"
    },
    { 
      name: "Chidi Nwosu", 
      text: "Mobile money payments made everything so easy. Highly recommend!", 
      rating: 5, 
      location: "Ngoa Ekélé"
    },
    { 
      name: "Fatou Diallo", 
      text: "First time using and impressed with the real-time tracking.", 
      rating: 4, 
      location: "Mvan"
    }
  ];

  const faqs = [
    { 
      question: "How early should I arrive before departure?", 
      answer: "We recommend arriving at least 30 minutes before scheduled departure"
    },
    { 
      question: "Can I change my booking?", 
      answer: "Yes, changes allowed up to 2 hours before departure via our app"
    }
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-300">
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 text-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
            BusConnect Cameroun
          </h1>
          <p className="mt-6 text-xl md:text-2xl max-w-2xl mx-auto">
            Your Smart Choice for Urban Transportation in Yaoundé
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link 
              to="/Buses" 
              className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl shadow-lg transform transition-all hover:scale-105"
            >
              Book Now
            </Link>
            <button className="px-8 py-3 border-2 border-violet-600 text-violet-600 rounded-xl hover:bg-violet-50 dark:hover:bg-gray-800 transition">
              Track Bus
            </button>
          </div>
        </motion.div>
      </section>

      {/* Live Tracking */}
      <section className="px-6 md:px-12 py-16 bg-white dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-8">Live Yaoundé Bus Network</h2>
        <div className="h-96 rounded-2xl overflow-hidden shadow-xl">
          <MapContainer 
            center={yaoundeCoords} 
            zoom={13} 
            className="h-full w-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; OpenStreetMap contributors'
            />
            {busStations.map((station, index) => (
              <Marker 
                key={index} 
                position={station.coords as [number, number]}
                title={station.name}
              />
            ))}
          </MapContainer>
        </div>
        <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Main stations: Nsam, Mvan, Etoudi
        </div>
      </section>

      {/* Local Routes */}
      <section className="px-6 md:px-12 py-16 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Routes</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["Mokolo - Bastos", "Ngoa Ekélé - Mvan", "Etoudi - Nsam"].map((route, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md flex items-center"
            >
              <FaMapMarkerAlt className="text-violet-600 mr-4 text-xl" />
              <div>
                <h3 className="font-bold">{route}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Every 15-30 minutes</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-12 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What Yaoundé Riders Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                  {testimonial.name[0]}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <div className="flex items-center text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-lg italic">"{testimonial.text}"</p>
              <div className="mt-4 flex items-center text-gray-500">
                <FaMapMarkerAlt className="mr-2" /> {testimonial.location}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Promotions */}
      <section className="px-6 md:px-12 py-16 bg-violet-600 text-white">
        <h2 className="text-3xl font-bold text-center mb-8">Special Offers</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg text-gray-800 dark:text-white">
            <h3 className="text-2xl font-bold mb-4">Student Discount</h3>
            <p className="mb-4">40% off for all university students with valid ID</p>
            <div className="flex items-center">
              <FaCheckCircle className="text-violet-600 mr-2 text-xl" />
              <span>Valid on all routes</span>
            </div>
          </div>
          <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg text-gray-800 dark:text-white">
            <h3 className="text-2xl font-bold mb-4">Monthly Pass</h3>
            <p className="mb-4">Unlimited rides for 30 days</p>
            <div className="text-3xl font-bold text-violet-600">25,000 XAF</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-12 py-16 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">FAQs</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            >
              <div 
                className="p-4 flex items-center justify-between cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center">
                  <FaQuestionCircle className="text-violet-600 text-xl mr-4" />
                  <span className="font-semibold">{faq.question}</span>
                </div>
                <span className={`transform transition-transform ${activeFAQ === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </div>
              {activeFAQ === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="px-4 pb-4 text-gray-600 dark:text-gray-400"
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default Home;