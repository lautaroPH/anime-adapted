import SuggestionAnime from './SuggestionAnime';
import { useEffect, useState } from 'preact/hooks';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import { searchSuggestions } from '../services/searchSuggestions';

const SuggestionsAnimes = ({ animeTitle, changeAnimeSearch }) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [animeSuggestion, setAnimeSuggestion] = useState();

  useEffect(() => {
    if (animeTitle) {
      setAnimeSuggestion([]);
      setError('');
      setLoading(true);

      searchSuggestions(animeTitle).then(({ animes, error }) => {
        if (error) {
          setError('Anime not found');
          setLoading(false);
          return;
        }

        setLoading(false);
        setAnimeSuggestion(animes);
      });
    }
  }, [animeTitle]);

  return (
    <>
      {animeTitle && (
        <ul class="bg-white border w-1/2 rounded-b-md max-h-96 overflow-y-scroll">
          {loading && (
            <li
              role="status"
              class="flex justify-center w-full items-center pl-4 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer h-10"
            >
              <Loader styles={'h-8 w-7'} />
            </li>
          )}
          {error && (
            <li class="flex justify-center w-full items-center pl-4 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer h-10">
              <ErrorMessage message={error} />
            </li>
          )}
          {animeSuggestion?.map((anime) => (
            <SuggestionAnime
              key={anime.id}
              anime={anime}
              main_picture={anime.main_picture}
              title={anime.title}
              media_type={anime.media_type}
              start_date={anime.start_date}
              mean={anime.mean}
              end_date={anime.end_date}
              status={anime.status}
              year={anime.year}
              mal_id={anime.mal_id}
              animeTitle={animeTitle}
              changeAnimeSearch={changeAnimeSearch}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default SuggestionsAnimes;
