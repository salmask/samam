// routes/login.tsx
import { ActionFunction, json, redirect } from '@remix-run/node';
import { Form, useActionData, Link } from '@remix-run/react';
import { comparePassword, generateToken, findUserByEmail } from '~/utils/auth';
import { FaSignInAlt } from 'react-icons/fa';
 
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const user = await findUserByEmail(email);
  if (!user || !(await comparePassword(password, user.password))) {
    return json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const token = generateToken(user);
  return redirect('/', {
    headers: {
      'Set-Cookie': `token=${token}; HttpOnly; Path=/; Max-Age=3600`
    }
  });
};

export default function Login() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <FaSignInAlt className="mr-2" /> Login
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
          <button type="submit" className="btn btn-primary w-full">Login</button>
        </Form>
        <p className="text-center mt-4">
          Don't have an account? <Link to="/register" className="text-blue-500">Register</Link>
        </p>
      </div> 
    </div>
  );
}
