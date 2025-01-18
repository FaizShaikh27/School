import React from 'react';

function Facilities() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-8">Our Facilities</h1>
      <p className="text-gray-600 mb-6">
        We are proud to offer state-of-the-art facilities to create an enriching and engaging environment for students.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Existing Facilities */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-primary mb-4">Smart Classrooms</h2>
          <p className="text-gray-600">
            Interactive digital boards and modern teaching aids for enhanced learning experience.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-primary mb-4">Library</h2>
          <p className="text-gray-600">
            Well-stocked library with extensive collection of books, journals, and digital resources.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-primary mb-4">Computer Lab</h2>
          <p className="text-gray-600">
            Modern computer lab with latest hardware and software for digital literacy.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-primary mb-4">Science Labs</h2>
          <p className="text-gray-600">
            Fully equipped physics, chemistry, and biology labs for practical learning.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-primary mb-4">Hostel Facility</h2>
          <p className="text-gray-600">
            Separate hostels for boys and girls with modern amenities and 24x7 supervision.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-primary mb-4">Mess</h2>
          <p className="text-gray-600">
            Hygienic mess facility providing nutritious and balanced meals to students.
          </p>
        </div>

        {/* New Facilities */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-primary mb-4">Sports Complex</h2>
          <p className="text-gray-600">
            A fully equipped sports complex with indoor and outdoor facilities for basketball, badminton, and more.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-primary mb-4">Auditorium</h2>
          <p className="text-gray-600">
            A modern auditorium with advanced audio-visual equipment and seating capacity for large events.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-primary mb-4">Medical Facility</h2>
          <p className="text-gray-600">
            On-campus medical facilities with a dedicated health center and emergency care services.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-primary mb-4">Wi-Fi Connectivity</h2>
          <p className="text-gray-600">
            High-speed internet connectivity across the campus for seamless digital learning.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-primary mb-4">Cafeteria</h2>
          <p className="text-gray-600">
            A vibrant cafeteria serving a variety of cuisines in a modern and hygienic environment.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-primary mb-4">Transportation</h2>
          <p className="text-gray-600">
            Safe and reliable transportation facilities with a fleet of buses covering various routes.
          </p>
        </div>
      </div>

      {/* Additional Section: Facility Highlights */}
      <div className="bg-gray-100 p-6 rounded-lg mt-12">
        <h2 className="text-2xl font-bold text-primary mb-4">Why Choose Our Facilities?</h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Modern infrastructure designed for a seamless learning experience.</li>
          <li>Focus on both academic and extracurricular development.</li>
          <li>Commitment to safety, hygiene, and student well-being.</li>
          <li>Accessible and inclusive facilities for all students.</li>
        </ul>
      </div>
    </div>
  );
}

export default Facilities;
