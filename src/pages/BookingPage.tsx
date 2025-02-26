import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { dummyBuses } from './Buses'; // Add this import
import { Bus } from './types'; // Add this import
import { FaStar, FaRegStar } from 'react-icons/fa';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  paymentMethod: 'orange' | 'mobile' | '';
  paymentMessage: string;
}

const BookingPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [bus, setBus] = useState<Bus | null>(null);
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    paymentMethod: '',
    paymentMessage: '',
  });

  useEffect(() => {
    const foundBus = dummyBuses.find(b => b.id === Number(id));
    if (foundBus) {
      setBus(foundBus);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', { bus, ...formData });
    alert('Booking submitted successfully!');
    navigate('/');
  };

  if (!bus) return null;

  return (
    <div className="pt-24 pb-12 px-4 lg:px-28 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
        Book {bus.name}
      </h1>

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        {/* Bus Information */}
        <div className="mb-8 border-b pb-6">
          <h2 className="text-xl font-semibold mb-4">Trip Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold">Route:</span> {bus.route}</p>
              <p><span className="font-semibold">Departure:</span> {bus.departure}</p>
              <p><span className="font-semibold">Arrival:</span> {bus.arrival}</p>
            </div>
            <div>
              <p><span className="font-semibold">Price:</span> XAF {bus.price}</p>
              <p><span className="font-semibold">Seats Available:</span> {bus.seatsAvailable}</p>
              <p><span className="font-semibold">Bus Type:</span> {bus.busType}</p>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Passenger Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full px-4 py-2 border rounded-md"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-4 py-2 border rounded-md"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full px-4 py-2 border rounded-md"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="orange"
                  name="payment"
                  required
                  checked={formData.paymentMethod === 'orange'}
                  onChange={() => setFormData({ ...formData, paymentMethod: 'orange' })}
                  className="mr-2"
                />
                <label htmlFor="orange" className="font-medium">Orange Money</label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="radio"
                  id="mobile"
                  name="payment"
                  required
                  checked={formData.paymentMethod === 'mobile'}
                  onChange={() => setFormData({ ...formData, paymentMethod: 'mobile' })}
                  className="mr-2"
                />
                <label htmlFor="mobile" className="font-medium">Mobile Money</label>
              </div>

              {formData.paymentMethod && (
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
                  <p className="mb-2">
                    Please send payment to {formData.paymentMethod === 'orange' ? 
                    'Orange Money number 655-123-456' : 
                    'Mobile Money number 677-890-123'}
                  </p>
                  <input
                    type="text"
                    placeholder="Enter payment confirmation message"
                    required
                    className="w-full px-4 py-2 border rounded-md"
                    value={formData.paymentMessage}
                    onChange={e => setFormData({ ...formData, paymentMessage: e.target.value })}
                  />
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-md transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;