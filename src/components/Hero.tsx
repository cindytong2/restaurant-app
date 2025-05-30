import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gray-900">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
            opacity: 0.5
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Reserve Your Table Today
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Experience the finest culinary journey with our carefully crafted menu and exceptional service.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/reservations" 
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-md text-lg transition duration-300"
          >
            Make a Reservation
          </Link>
          <Link 
            href="/menu" 
            className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-4 px-8 rounded-md text-lg border border-gray-300 transition duration-300"
          >
            View Our Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
