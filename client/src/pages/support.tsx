import React, { useState } from 'react';

const faqs = [
  {
    question: "How do I book a bus ticket?",
    answer:
      "You can book a bus ticket by selecting your desired route on our bus listing page and clicking the 'Book Now' button. Then, follow the instructions on the booking page to complete your payment.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept various payment methods including credit/debit cards, mobile money transfers, and online banking. Please check the booking page for the most up-to-date list of payment options.",
  },
  {
    question: "Can I cancel or reschedule my booking?",
    answer:
      "Yes, you can cancel or reschedule your booking according to our cancellation policy. Please refer to our Terms and Conditions or contact our support team for assistance.",
  },
  {
    question: "How do I track my bus in real-time?",
    answer:
      "After booking, you can track your bus in real-time on our 'Live Tracking' page using the tracking number provided in your confirmation email.",
  },
  {
    question: "Is my personal data secure with you?",
    answer:
      "Absolutely. We use advanced encryption and security measures to ensure that your personal data is always safe and secure.",
  },
];

const AdvancedSupportPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a production environment, submit the form data to your backend service.
    alert("Support ticket submitted successfully!");
  };

  return (
    <div className="pt-24 pb-12 px-4 lg:px-28 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Support Center</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
          We're here to help you with any questions or issues.
        </p>
      </header>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-300 dark:border-gray-700 rounded-md">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-4 py-3 bg-gray-100 dark:bg-gray-800 focus:outline-none flex justify-between items-center"
              >
                <span className="text-gray-800 dark:text-gray-200">{faq.question}</span>
                <span className="text-gray-800 dark:text-gray-200">{openFaqIndex === index ? "-" : "+"}</span>
              </button>
              {openFaqIndex === index && (
                <div className="px-4 py-3 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Ticket Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Contact Support</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Get in Touch</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <span className="font-medium">Phone:</span> +237 612345678
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <span className="font-medium">Email:</span> support@busmanagement.cm
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <span className="font-medium">Address:</span> 123 Boulevard, Yaoundé, Cameroon
            </p>
            <button className="mt-4 bg-violet-600 hover:bg-violet-700 text-white py-2 px-4 rounded">
              Start Live Chat
            </button>
          </div>

          {/* Support Ticket Form */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Submit a Ticket</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-1" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-violet-600 hover:bg-violet-700 text-white py-2 rounded transition">
                Submit Ticket
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-12">
        <p className="text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Bus Management System. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default AdvancedSupportPage;
