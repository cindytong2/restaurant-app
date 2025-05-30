import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Gourmet Haven
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link href="/menu" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium">
              Menu
            </Link>
            <Link href="/reservations" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium">
              Reservations
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium">
              Contact
            </Link>
            <Link 
              href="/reservations" 
              className="bg-amber-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-700"
            >
              Book a Table
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-700 hover:text-amber-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
