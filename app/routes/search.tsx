import { FaSearch } from 'react-icons/fa';

export default function Search() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 flex items-center">
        <FaSearch className="mr-2" /> Search
      </h2>
      <p className="text-lg">
        Use the search function to find articles, events, and publications on our site.
      </p>
      <div className="mt-4">
        {/* Implement search functionality */}
        <input
          type="text"
          className="input input-bordered w-full mb-4"
          placeholder="Search..."
        />
        <button className="btn btn-primary w-full">
          <FaSearch className="mr-2" /> Search
        </button>
      </div> 
    </div>
  );
}
