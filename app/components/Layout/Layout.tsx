import { LoaderFunction, json } from '@remix-run/node';
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { isAuthenticated } from '~/utils/auth';
import { useLoaderData } from '@remix-run/react';

type LayoutProps = {
  children: ReactNode;
};

export const loader: LoaderFunction = async ({ request }) => {
  const  authenticated = await isAuthenticated(request);
  return json({ authenticated });
};

const Layout = ({ children }: LayoutProps) => {
  const { authenticated } = useLoaderData<typeof loader>();

  return (
    <div>
      <Header authenticated={authenticated} />
      <main className="container mx-auto p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
