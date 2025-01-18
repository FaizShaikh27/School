import { useState } from 'react';

function Admission() {
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    gender: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    previousSchool: '',
    grade: '',
    academicYear: '2024-25',
    category: '',
    documents: []
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR-WEB3FORMS-ACCESS-KEY',
          ...formData
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          studentName: '',
          dob: '',
          gender: '',
          parentName: '',
          email: '',
          phone: '',
          address: '',
          previousSchool: '',
          grade: '',
          academicYear: '2024-25',
          category: '',
          documents: []
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    setSubmitting(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Process Section */}
      <div className="mb-16">
        <h1 className="text-3xl font-bold text-primary mb-8">Admission Process</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">How to Apply</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-2">Step 1: Application Form</h3>
                <p className="text-gray-600">Fill out the online application form below or collect it from the school office.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-2">Step 2: Documents</h3>
                <p className="text-gray-600">Submit required documents including previous academic records.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-2">Step 3: Entrance Test</h3>
                <p className="text-gray-600">Appear for the entrance examination and physical fitness test.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-2">Step 4: Interview</h3>
                <p className="text-gray-600">Personal interview with the student and parents.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">Required Documents</h2>
            <ul className="space-y-3 text-gray-600">
              <li>• Birth Certificate</li>
              <li>• Previous School Transfer Certificate</li>
              <li>• Mark sheets of last two years</li>
              <li>• Character Certificate</li>
              <li>• Medical Fitness Certificate</li>
              <li>• Passport size photographs</li>
              <li>• Aadhar Card copy</li>
              <li>• Parent's ID proof</li>
            </ul>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-primary mb-4">Fee Structure</h3>
              <p className="text-gray-600">
                Please contact the school office for detailed information about the fee structure for the current academic year.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Admission Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-primary mb-6">Online Admission Form</h2>
        {submitted ? (
          <div className="text-center py-8">
            <div className="text-green-600 text-xl mb-4">
              Thank you for submitting your application!
            </div>
            <p className="text-gray-600">
              We will review your application and contact you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="studentName">
                  Student's Full Name *
                </label>
                <input
                  type="text"
                  id="studentName"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="dob">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="gender">
                  Gender *
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="parentName">
                  Parent/Guardian Name *
                </label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2" htmlFor="address">
                  Complete Address *
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="previousSchool">
                  Previous School
                </label>
                <input
                  type="text"
                  id="previousSchool"
                  name="previousSchool"
                  value={formData.previousSchool}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="grade">
                  Applying for Grade *
                </label>
                <select
                  id="grade"
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select Grade</option>
                  <option value="5">Grade 5</option>
                  <option value="6">Grade 6</option>
                  <option value="7">Grade 7</option>
                  <option value="8">Grade 8</option>
                  <option value="9">Grade 9</option>
                  <option value="10">Grade 10</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="category">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select Category</option>
                  <option value="general">General</option>
                  <option value="obc">OBC</option>
                  <option value="sc">SC</option>
                  <option value="st">ST</option>
                </select>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {submitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Additional Information */}
      <div className="mt-16 grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-4">Important Dates</h2>
          <ul className="space-y-3 text-gray-600">
            <li>• Form Submission Start: 1st January 2024</li>
            <li>• Form Submission End: 31st March 2024</li>
            <li>• Entrance Test: 15th April 2024</li>
            <li>• Result Declaration: 30th April 2024</li>
            <li>• Fee Payment: 1st - 15th May 2024</li>
            <li>• Session Begins: 1st June 2024</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-4">Contact for Admission</h2>
          <div className="space-y-4 text-gray-600">
            <p>For any queries regarding admission, please contact:</p>
            <div>
              <p className="font-semibold">Admission Office:</p>
              <p>Phone: +91 1234567890</p>
              <p>Email: admissions@bbchavanschool.edu.in</p>
              <p>Timing: Monday to Saturday (9:00 AM - 4:00 PM)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admission;