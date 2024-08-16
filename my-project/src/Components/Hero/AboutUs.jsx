// src/Components/AboutUs.js

import React from 'react';

const AboutUs = () => {
  return (
    <section className="about-us-container p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        <p className="mb-4">
          At <strong>Valley360 Parking</strong>, we are dedicated to transforming the way you find and manage parking. Our mission is to provide a seamless and efficient parking experience, whether you're in the heart of the city or closer to home.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Admin</h2>
        <ul className="mb-4">
          <li>Pratiksha Kavthale</li>
          <li>Darshan Borade</li>
          <li>Prof. Megha Mane</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Our Vision</h2>
        <p className="mb-4">
          We envision a future where parking is no longer a stressful part of your day. With our innovative technology and user-centric approach, we aim to make parking easy, accessible, and reliable for everyone.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">What We Offer</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Comprehensive Solutions: We offer a wide range of parking options to suit every need, from short-term city parking to long-term solutions near residential areas.</li>
          <li>Real-Time Availability: Our platform provides real-time updates on available parking spots, so you never have to circle the block again.</li>
          <li>Advanced Booking: Plan ahead and reserve your spot in advance with just a few clicks, ensuring you have a place to park when you arrive.</li>
          <li>Smart Navigation: Our integrated navigation system guides you directly to your parking spot, making your journey smoother and more efficient.</li>
          <li>Security and Trust: With 24/7 monitoring and secure payment options, you can park with confidence knowing your vehicle is safe with us.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Our Commitment</h2>
        <p className="mb-4">
          Valley360 Parking is committed to sustainability and reducing congestion in urban areas. By optimizing parking spaces and reducing the time spent searching for parking, we contribute to a cleaner, greener environment.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Join Us</h2>
        <p className="mb-4">
          Whether you're a driver looking for a convenient parking solution or a property owner interested in maximizing your space, Valley360 Parking is here to help. Join us in revolutionizing the parking experience!
        </p>
      </div>
    </section>
  );
};

export default AboutUs;