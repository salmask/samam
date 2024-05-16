import { AiOutlineCalendar } from 'react-icons/ai';

export default function UpcomingEvents() {
  // Dummy upcoming events data
  const events = [
    {
      title: "Philosophical Discussion",
      date: "2024-06-01",
      description: "Join us for a discussion on philosophical topics."
    },
    {
      title: "Annual Gathering",
      date: "2024-07-15",
      description: "Our annual gathering event."
    }
  ];

  return (
    <div className="events grid grid-cols-1 md:grid-cols-2 gap-4">
      {events.map((event, index) => (
        <div key={index} className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title flex items-center">
              <AiOutlineCalendar className="h-6 w-6 mr-2" />
              {event.title}
            </h3>
            <p>{event.date}</p>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
