import { supabase } from './supabaseClient';

export async function login(email: string) {
  return await supabase.auth.signInWithOtp({ email });
}

export async function logout() {
  return await supabase.auth.signOut();
}

export async function getUser() {
  const { data } = await supabase.auth.getUser();
  return data.user;
}
