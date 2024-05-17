import { FaBook } from 'react-icons/fa';
import Footer from '~/components/Layout/Footer';
import Header from '~/components/Layout/Header';

export default function Publications() {
  return (
    <div className="container mx-auto p-4">
        <Header/>
      <h2 className="text-3xl font-bold mb-4 flex items-center">
        <FaBook className="mr-2" /> Publications
      </h2>
      <p className="text-lg">
        Explore our range of publications that delve into various topics of research and knowledge. Our official magazine, Vivekapatham, is a treasure trove of insightful articles and papers.
      </p>
      <p className="text-lg mt-4">
        <a href="https://vivekapatham.blogspot.com/" className="text-primary underline">
          Visit Vivekapatham
        </a>
      </p>
      <Footer/>
    </div>
  );
}
