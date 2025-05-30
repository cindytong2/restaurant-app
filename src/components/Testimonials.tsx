import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    quote: "The best dining experience I've had in years. The food was exceptional and the service was impeccable.",
    author: "Sarah Johnson",
    role: "Food Critic"
  },
  {
    id: 2,
    quote: "Every dish was a work of art. The flavors were perfectly balanced and the presentation was stunning.",
    author: "Michael Chen",
    role: "Regular Customer"
  },
  {
    id: 3,
    quote: "The ambiance was perfect for our anniversary dinner. We'll definitely be back for special occasions.",
    author: "Emily & David Wilson",
    role: "First-time Visitors"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Guests Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Don't just take our word for it. Here's what our guests have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 text-amber-500">
                <FaQuoteLeft className="h-8 w-8" />
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div className="mt-4">
                <p className="font-medium text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
