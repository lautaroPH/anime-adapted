import { options } from '../../utils/optionsFetch';

export async function get({ params }) {
  const { search } = params;

  const res = await fetch(
    `https://animes5.p.rapidapi.com/search/${search}?fields=chapter,id,light_novel,main_picture,source,volume,title`,
    options,
  );

  const { anime } = await res.json();

  if (!anime) {
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

  return new Response(JSON.stringify(anime), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
