// routes/register.tsx
import { ActionFunction, json, redirect } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
import { createUser, findUserByEmail } from '~/utils/auth';
import { FaUserPlus } from 'react-icons/fa';
 
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (await findUserByEmail(email)) {
    return json({ error: 'Email already registered' }, { status: 400 });
  }

  await createUser(email, password);

  return redirect('/login');
};

export default function Register() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <FaUserPlus className="mr-2" /> Register
        </h2>
        {actionData?.error && <p className="text-red-500 mb-4">{actionData.error}</p>}
        <Form method="post" className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" className="input input-bordered w-full" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" className="input input-bordered w-full" required />
          </div>
          <button type="submit" className="btn btn-primary w-full">Register</button>
        </Form>
      </div>
   </div>
  );
}
