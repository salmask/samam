import Header from '~/components/Layout/Header';
import Footer from '~/components/Layout/Footer';
import Notifications from '~/components/Notifications/Notifications';

export default function NotificationsPage() {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <main>
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Notifications</h2>
          <Notifications />
        </section>
      </main>
      <Footer />
    </div>
  );
}
