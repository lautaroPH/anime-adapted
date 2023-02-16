export const searchSuggestions = async (searchTerm) => {
  const res = await fetch(`/api/suggestions/${searchTerm}.json`);

  const animes = await res.json();

  return {
    animes: animes,
    error: animes.message,
  };
};
