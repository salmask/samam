import { ActionFunction, LoaderFunction, redirect } from '@remix-run/node';
import { Form, useLoaderData } from '@remix-run/react';

export const action: ActionFunction = async ({ request }) => {
  return redirect('/', {
    headers: {
      'Set-Cookie': 'token=; HttpOnly; Path=/; Max-Age=0'
    }
  });
};

export const loader: LoaderFunction = async () => {
  return {};
};

export default function Logout() {
  const data = useLoaderData();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Logging out...</h1>
      <p>You have been logged out. Redirecting to the home page...</p>
      <Form method="post" className="mt-4">
        <button type="submit" className="btn btn-primary">Confirm Logout</button>
      </Form>
    </div>
  );
}
