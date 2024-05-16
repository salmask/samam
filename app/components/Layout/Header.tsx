import { Link } from '@remix-run/react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-base-100 shadow-md mb-8">
      <div className="navbar container mx-auto py-4">
        <div className="navbar-start">
          <Link to="/" className="flex items-center space-x-4">
            <img src="assets/logo.png" alt="Satyanveshana Mandali Logo" className="h-12" />
            <h1 className="text-3xl font-bold">Satyanveshana Mandali</h1>
          </Link>
        </div>
        <div className="navbar-end">
          <div className="flex space-x-4">
            <Link to="/about" className="btn btn-primary">About</Link>
            <Link to="/events" className="btn btn-primary">Events</Link>
            <Link to="/publications" className="btn btn-primary">Publications</Link>
            <Link to="/contacts" className="btn btn-primary">Contacts</Link>
            <Link to="/notifications" className="btn btn-primary">Notifications</Link>
            <Link to="/search" className="btn btn-primary">Search</Link>
          </div>
        </div>
      </div>
    </header>
  );
}