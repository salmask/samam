import { AiOutlineInfoCircle } from 'react-icons/ai';

export default function Notifications() {
  // Dummy notifications data
  const notifications = [
    "New event coming up!",
    "Newsletter released.",
    "Meeting scheduled for next week."
  ];

  return (
    <div className="notifications space-y-4">
      {notifications.map((note, index) => (
        <div key={index} className="alert alert-info shadow-lg">
          <div className="flex items-center">
            <AiOutlineInfoCircle className="h-6 w-6 mr-2" />
            <span>{note}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
