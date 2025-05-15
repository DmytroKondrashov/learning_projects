import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';

export const actions: Actions = {
  default: async ({ request, cookies, fetch }) => {
    const form = await request.formData();
    const email = form.get('email')?.toString();
    const password = form.get('password')?.toString();

    if (!email || !password) {
      return fail(400, { error: 'Email and password are required.' });
    }

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!res.ok) {
        const errorData = await res.json();
        return fail(res.status, { error: errorData?.message || 'Login failed' });
      }

      const data = await res.json();

      // Example: { token: '...', user: {...} }
      const token = data.token;

      // Store token in cookie
      cookies.set('session', token, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24
      });

      throw redirect(302, '/lists');

    } catch (err) {
      console.error('Login error:', err);
      return fail(500, { error: 'Server error. Please try again.' });
    }
  }
};
