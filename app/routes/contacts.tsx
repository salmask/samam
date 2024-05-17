import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from '~/components/Layout/Footer';
import Header from '~/components/Layout/Header';

export default function Contacts() {
  return (
    <div className="container mx-auto p-4">
        <Header/>
        <h2 className="text-3xl font-bold mb-4 flex items-center">
        <FaMapMarkerAlt className="mr-2" /> Contact Us
      </h2>
      <div className="text-lg">
        <p className="mb-4">
          <FaMapMarkerAlt className="inline-block mr-2" />
          Address: Satyanveshana Mandali, Dorakunta, Kodada, Telangana 508206
        </p>
        <p className="mb-4 flex items-center">
          <FaPhone className="inline-block mr-2" />
          <a href="tel:+919440474404" className="underline text-blue-600">+91 94404 74404</a>
        </p>
        <p className="mb-4 flex items-center">
          <FaEnvelope className="inline-block mr-2" />
          <a href="mailto:satyanveshanamandali@gmail.com" className="underline text-blue-600">satyanveshanamandali@gmail.com</a>
        </p>
        <Footer/>
      </div>
    </div>
  );
}
