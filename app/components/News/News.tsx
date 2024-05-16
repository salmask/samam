import { FaNewspaper } from 'react-icons/fa';

export default function News() {
  // Dummy news data
  const news = [
    {
      title: "Event Recap",
      description: "A brief summary of our recent event."
    },
    {
      title: "New Initiative",
      description: "Details about our new initiative."
    }
  ];

  return (
    <div className="news grid grid-cols-1 md:grid-cols-2 gap-4">
      {news.map((item, index) => (
        <div key={index} className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title flex items-center">
              <FaNewspaper className="h-6 w-6 mr-2" />
              {item.title}
            </h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
