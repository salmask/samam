import News from '~/components/News/News';
import UpcomingEvents from '~/components/Events/UpcomingEvents';
import { MetaFunction } from '@remix-run/node';
export const meta: MetaFunction = () => {
  return [{
      title: "Satyanveshana Mandali - Path to wisdom",
      description: "Satyanveshana Mandali is your go-to platform for exploring knowledge, events, publications, and more. Stay updated with the latest happenings and enrich your knowledge.",
      keywords: "Satyanveshana Mandali, philosophy, epistemology, knowledge, events, publications, contacts",
      "og:title": "Satyanveshana Mandali",
      "og:description": "Explore knowledge and events with Satyanveshana Mandali. Stay updated with our latest publications and contacts.",
      "og:image": "/assets/logo.png",  // Make sure this path is correct
      "og:url": "https://www.satyanveshanamandali.com",  // Replace with your actual URL
      "twitter:card": "summary_large_image",
      "twitter:title": "Satyanveshana Mandali - Explore Knowledge and Events",
      "twitter:description": "Satyanveshana Mandali is your go-to platform for exploring knowledge, philosophy, epistemology, events, publications, and more. Stay updated with the latest happenings and enrich your knowledge.",
      "twitter:image": "/assets/logo.png"  // Make sure this path is correct
  }]
};
export default function Index() {
  return (
    <div className="container mx-auto p-4">
     <main>
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">News</h2>
          <News />
        </section>
        <section>
          <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
          <UpcomingEvents />
        </section>
      </main> 
    </div>
  );
}
