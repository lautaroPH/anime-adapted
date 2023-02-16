import { options } from '../../../utils/optionsFetch';

export async function get({ params }) {
  const { search } = params;

  const res = await fetch(
    `https://animes5.p.rapidapi.com?fields=id,title,main_picture,media_type,start_date,mean,end_date,status,year&q=${search}&limit=50&order_by=mean`,
    options,
  );

  const { animes } = await res.json();
  if (!animes) {
    return new Response(
      JSON.stringify({
        message: 'Not Found',
      }),
      {
        status: 404,
        statusText: 'Not Found',
      },
    );
  }

  return new Response(JSON.stringify(animes), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
