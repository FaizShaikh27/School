function Gallery() {
  const images = [
    { url: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d', caption: 'School Building' },
    { url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754', caption: 'Classroom' },
    { url: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc', caption: 'Library' },
    { url: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6', caption: 'Sports Ground' },
    { url: 'https://images.unsplash.com/photo-1598812866501-87ad598839e7', caption: 'Computer Lab' },
    { url: 'https://images.unsplash.com/photo-1562774053-701939374585', caption: 'Science Lab' },
    { url: 'https://images.unsplash.com/photo-1517511620798-cec17d428bc0', caption: 'Hostel Rooms' },
    { url: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe', caption: 'Mess Area' },
    { url: 'https://images.unsplash.com/photo-1525011268546-bf3f9b007f6e', caption: 'Yoga Hall' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Gallery Header */}
      <h1 className="text-3xl font-bold text-primary mb-4">Photo Gallery</h1>
      <p className="text-gray-600 mb-8">
        Explore our military school campus through this gallery. From state-of-the-art facilities to sprawling green grounds, 
        our infrastructure is designed to provide a perfect balance of education and extracurricular activities.
      </p>
      
      {/* Image Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={image.url}
              alt={image.caption}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <p className="text-lg font-semibold text-primary">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Section: CTA */}
      <div className="bg-gray-100 mt-12 p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Want to Visit Us?</h2>
        <p className="text-gray-600 mb-4">
          Schedule a campus tour to experience our facilities firsthand and see why we stand apart as a premier military school.
        </p>
        <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-300">
          Book a Tour
        </button>
      </div>
    </div>
  );
}

export default Gallery;
