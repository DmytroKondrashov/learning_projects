import { supabase } from '$lib/supabaseClient';

export async function GET() {
  const user = await supabase.auth.getUser();
  const { data } = await supabase
    .from('todo_lists')
    .select('*, todo_items(*)')
    .eq('user_id', user.data.user.id);

  return new Response(JSON.stringify(data));
}
