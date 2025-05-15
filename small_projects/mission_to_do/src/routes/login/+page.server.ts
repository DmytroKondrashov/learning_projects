import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const form = await request.formData();
    const email = form.get('email')?.toString();
    const password = form.get('password')?.toString();

    if (!email || !password) {
      return fail(400, { error: 'Email and password are required.' });
    }

    // ⚠️ Replace this with real DB call
    if (email === 'user@example.com' && password === '123456') {
      cookies.set('session', 'mock-session-token', {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24
      });
      throw redirect(302, '/lists');
    }

    return fail(401, { error: 'Invalid email or password.' });
  }
};
