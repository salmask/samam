import { FaRegAddressCard } from 'react-icons/fa';
import Footer from '~/components/Layout/Footer';
import Header from '~/components/Layout/Header';

export default function About() {
  return (
    <div className="container mx-auto p-4">
      <Header/>
      <h2 className="text-3xl font-bold mb-4 flex items-center">
        <FaRegAddressCard className="mr-2" /> About Satyanveshana Mandali
      </h2>
      <p className="text-lg">
        Satyanveshana Mandali is dedicated to the pursuit of knowledge and the dissemination of truth through research, events, and publications. Our mission is to provide a platform for intellectual discourse and to foster a community of scholars and enthusiasts.
      </p>
      <p className="text-lg mt-4">
        Founded in [Year], our organization has grown to become a respected institution known for its rigorous research and vibrant community activities.
      </p>
      <p className="text-lg mt-4">
        Join us in our quest for knowledge and be a part of a community that values truth, learning, and intellectual growth.
      </p>
      <Footer/>
    </div>
  );
}
