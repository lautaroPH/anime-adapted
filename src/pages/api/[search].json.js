import { options } from '../../utils/optionsFetch';

export async function get({ params }) {
  const { search } = params;

  const res = await fetch(
    `https://animes5.p.rapidapi.com/anime/${search}?fields=chapter,id,light_novel,main_picture,source,volume,title,media_type,status,num_episodes,mean`,
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
