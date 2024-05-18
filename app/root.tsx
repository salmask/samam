import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css?url";

import { LinksFunction, LoaderFunction, json } from "@remix-run/node";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { isAuthenticated } from "./utils/auth";

export const loader: LoaderFunction = async ({ request }) => {
  const authenticated  = await isAuthenticated(request);
  return json({ authenticated });
};


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { authenticated } = useLoaderData<typeof loader>();

  return (
    <html lang="en" data-theme="retro">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header authenticated={authenticated} />
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
