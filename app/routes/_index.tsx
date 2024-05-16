import Header from '~/components/Layout/Header';
import Footer from '~/components/Layout/Footer';
import News from '~/components/News/News';
import UpcomingEvents from '~/components/Events/UpcomingEvents';

export default function Index() {
  return (
    <div className="container mx-auto p-4">
      <Header />
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
      <Footer />
    </div>
  );
}
