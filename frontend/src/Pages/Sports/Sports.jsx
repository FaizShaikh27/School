import React from 'react';

const Sports = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-8">Sports Facilities</h1>
      <p className="text-gray-600 mb-6">
        At our military school, we emphasize physical fitness, discipline, and teamwork through an array of outdoor and indoor sports facilities. These activities are designed to build character, resilience, and leadership among students.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Outdoor Sports */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-4">Outdoor Sports</h2>
          <ul className="space-y-3 text-gray-600">
            <li>• Large playground for cricket and football</li>
            <li>• Basketball court</li>
            <li>• Volleyball court</li>
            <li>• Athletics track</li>
            <li>• Parade ground for military training</li>
            <li>• Horse riding arena</li>
            <li>• Obstacle course for endurance training</li>
          </ul>
        </div>

        {/* Indoor Sports */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-4">Indoor Sports</h2>
          <ul className="space-y-3 text-gray-600">
            <li>• Table tennis facility</li>
            <li>• Chess and carrom</li>
            <li>• Yoga and meditation hall</li>
            <li>• Gymnasium with modern equipment</li>
            <li>• Badminton court</li>
            <li>• Martial arts and self-defense training</li>
          </ul>
        </div>

        {/* Specialized Sports */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-4">Specialized Sports</h2>
          <ul className="space-y-3 text-gray-600">
            <li>• Rifle shooting range</li>
            <li>• Archery training</li>
            <li>• Rock climbing wall</li>
            <li>• Swimming pool with lifeguard supervision</li>
          </ul>
        </div>
      </div>

      {/* Additional Section: Sports Philosophy */}
      <div className="bg-gray-100 p-6 rounded-lg mt-12">
        <h2 className="text-2xl font-bold text-primary mb-4">Our Sports Philosophy</h2>
        <p className="text-gray-600">
          Sports at our military school are not just about competition but also about fostering unity, discipline, and a sense of responsibility. Our coaches focus on helping students achieve their full potential while instilling values of sportsmanship and teamwork.
        </p>
      </div>

      {/* Additional Section: Achievements */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Achievements in Sports</h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Students have represented us at national-level athletics competitions.</li>
          <li>Winners of regional football and basketball tournaments.</li>
          <li>Recognized for outstanding performance in rifle shooting championships.</li>
          <li>Regular participants in inter-school chess and badminton leagues.</li>
        </ul>
      </div>
    </div>
  );
};

export default Sports;
