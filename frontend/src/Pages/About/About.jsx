import React from 'react'

const About = () => {
    const milestones = [
        { year: "1995", event: "Foundation of the School" },
        { year: "2000", event: "First Batch of Military Aspirants" },
        { year: "2005", event: "Introduction of Advanced Military Training Program" },
        { year: "2010", event: "Expansion of Campus Infrastructure" },
        { year: "2015", event: "Achievement of Academic Excellence Award" },
        { year: "2020", event: "Introduction of Modern Technology Integration" }
      ];
    
      const stats = [
        { number: "1000+", label: "Students" },
        { number: "50+", label: "Expert Faculty" },
        { number: "500+", label: "Military Alumni" },
        { number: "25+", label: "Years of Excellence" }
      ];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Our Institution</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Shaping the future of India through excellence in education and military training
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Legacy</h2>
          <p className="text-gray-600 text-lg mb-6">
            DR.B B CHAVAN MILITARY SCHOOL AND ACADEMY, established under Shree Gajanan Maharaj Bahuuddeshiya Shikshan Sanstha's, stands as a beacon of excellence in education and military training. For over two decades, we have been dedicated to nurturing young minds and shaping them into future leaders of our nation.
          </p>
          <p className="text-gray-600 text-lg">
            Our unique approach combines rigorous academic curriculum with military discipline, creating an environment that fosters both intellectual growth and character development. We take pride in our role as one of the premier military schools in the region.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* History Timeline */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center">
                <div className="w-32 font-bold text-primary">{milestone.year}</div>
                <div className="flex-grow pl-8 border-l-4 border-primary py-2">
                  <p className="text-lg text-gray-600">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6">Our Philosophy</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Excellence in every endeavor
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Character development through discipline
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Leadership through example
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Service to nation
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6">Our Commitment</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Quality education for all students
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Holistic development approach
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Safe and nurturing environment
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Innovation in teaching methods
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-secondary text-white p-12 rounded-lg text-center">
          <h3 className="text-3xl font-bold mb-4">Join Our Legacy</h3>
          <p className="text-lg mb-8">Be part of an institution that shapes future leaders</p>
          <a href="/admission" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-block">
            Apply Now
          </a>
        </div>
      </div>
    </div>
)
}

export default About