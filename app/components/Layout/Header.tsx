import { Link } from '@remix-run/react';
import { FaInfoCircle, FaCalendarAlt, FaBook, FaPhone, FaBell, FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-base-100 shadow-md mb-8">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/about"><FaInfoCircle className="mr-2" /> About</Link></li>
              <li><Link to="/events"><FaCalendarAlt className="mr-2" /> Events</Link></li>
              <li><Link to="/publications"><FaBook className="mr-2" /> Publications</Link></li>
              <li><Link to="/contacts"><FaPhone className="mr-2" /> Contacts</Link></li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src="assets/logo.png" alt="Satyanveshana Mandali Logo" className="h-8 mr-2" />
            <span className="hidden lg:inline">Satyanveshana Mandali</span>
          </Link>
        </div>
        
        <div className="navbar-end flex space-x-2">
          <Link to="/search" className="btn btn-ghost btn-circle">
            <FaSearch className="h-5 w-5" />
          </Link>
          <Link to="/notifications" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FaBell className="h-5 w-5" />
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
