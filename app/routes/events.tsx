import { FaCalendarAlt } from 'react-icons/fa';
import UpcomingEvents from '~/components/Events/UpcomingEvents';
import Footer from '~/components/Layout/Footer';
import Header from '~/components/Layout/Header';

export default function Events() {
  return (
    <div className="container mx-auto p-4">
        <Header/>
      <h2 className="text-3xl font-bold mb-4 flex items-center">
        <FaCalendarAlt className="mr-2" /> Events
      </h2>
      <p className="text-lg">
        Stay updated with our upcoming events, seminars, and workshops. Join us to expand your knowledge and network with like-minded individuals.
      </p>
      {/* Replace with actual events data */}
      <div className="mt-4">
        <UpcomingEvents />
      </div>
      <Footer/>
    </div>
  );
}
