import { json } from '@sveltejs/kit';

export function GET() {
  const number = Math.floor(Math.random() * 6) + 1;

  // Thos is the same as the convenient variant below
  // return new Response(number, {
  //   headers: {
  //     'Content-Type': 'application/json',
  //   }
  // });

  // this is the same as the inconvenient variant above
  return json(number);
}
