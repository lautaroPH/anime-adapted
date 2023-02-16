import { useState } from 'preact/hooks';
import debounce from 'just-debounce-it';
import SuggestionsAnimes from './SuggestionsAnimes';
import ErrorMessage from './ErrorMessage';
import Loader from './Loader';
import Anime from './Anime';
import { searchAnime } from '../services/searchAnime';

const InputAnime = () => {
  const [animeTitle, setAnimeTitle] = useState('');
  const [animeFound, setAnimeFound] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearchAnime = (malId) => {
    if (!malId) return;

    setAnimeFound(null);
    setLoading(true);
    setError('');

    searchAnime(malId).then(({ anime, error }) => {
      if (error) {
        setError('Anime not found');
        setLoading(false);
        return;
      }
      setAnimeFound(anime);
      setLoading(false);
      setAnimeTitle('');
    });
  };

  const handleChange = debounce((e) => {
    setAnimeTitle('');
    const title = e.target.value;
    setAnimeTitle(title);

    if (!title) {
      setAnimeTitle('');
      return;
    }
  }, 500);

  const changeAnimeSearch = (title, malId) => {
    setAnimeTitle(title);

    handleSearchAnime(malId);
  };

  return (
    <div class="flex flex-col items-center justify-center w-full h-full">
      <label class="text-2xl font-bold text-gray-800">Anime</label>
      <input
        type="text"
        class={`w-1/2 px-4 py-2 mt-2 text-gray-800 border border-gray-300 ${
          animeTitle ? 'rounded-t-md' : 'rounded-md'
        } focus:outline-none`}
        placeholder="Enter anime title"
        value={animeTitle}
        onInput={handleChange}
      />
      {!loading && (
        <SuggestionsAnimes
          animeTitle={animeTitle}
          changeAnimeSearch={changeAnimeSearch}
        />
      )}
      {error && (
        <div class="mt-8">
          <ErrorMessage message={error} />
        </div>
      )}
      {loading && (
        <div class="mt-8">
          <Loader styles={'w-16 h-16'} />
        </div>
      )}
      {animeFound && (
        <Anime
          chapter={animeFound.chapter}
          light_novel={animeFound.light_novel}
          main_picture={animeFound.main_picture}
          source={animeFound.source}
          volume={animeFound.volume}
          title={animeFound.title}
          media_type={animeFound.media_type}
          start_date={animeFound.start_date}
          num_episodes={animeFound.num_episodes}
          status={animeFound.status}
          mean={animeFound.mean}
        />
      )}
    </div>
  );
};

export default InputAnime;
