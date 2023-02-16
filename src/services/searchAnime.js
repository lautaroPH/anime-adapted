export const searchAnime = async (query) => {
  const res = await fetch(`/api/${query}.json`);

  const anime = await res.json();

  return {
    anime,
    error: anime.message,
  };
};
