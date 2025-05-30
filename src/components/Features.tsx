import { FaUtensils, FaWineGlassAlt, FaLeaf, FaRegClock } from 'react-icons/fa';

const features = [
  {
    icon: <FaUtensils className="h-8 w-8 text-amber-600" />,
    title: 'Gourmet Cuisine',
    description: 'Savor dishes prepared by our award-winning chefs using the finest ingredients.'
  },
  {
    icon: <FaWineGlassAlt className="h-8 w-8 text-amber-600" />,
    title: 'Fine Wines',
    description: 'Extensive wine list featuring the best selections from around the world.'
  },
  {
    icon: <FaLeaf className="h-8 w-8 text-amber-600" />,
    title: 'Fresh Ingredients',
    description: 'We source locally and sustainably to bring you the freshest flavors.'
  },
  {
    icon: <FaRegClock className="h-8 w-8 text-amber-600" />,
    title: 'Open Daily',
    description: 'Join us for lunch, dinner, or weekend brunch. We look forward to serving you.'
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes our restaurant the perfect choice for your next dining experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 rounded-full bg-amber-50">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
