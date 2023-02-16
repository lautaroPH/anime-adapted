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

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    if (!title) return;

    setAnimeFound(null);
    setLoading(true);
    setError('');

    searchAnime(title).then(({ anime, error }) => {
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
  }, 700);

  const changeAnimeSearch = (title) => {
    setAnimeTitle(title);
    handleSubmit({ target: [{ value: title }], preventDefault: () => {} });
  };

  return (
    <div class="flex flex-col items-center justify-center w-full h-full">
      <form
        class="flex flex-col items-center justify-center w-full h-full"
        onSubmit={handleSubmit}
      >
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

        <button
          type="submit"
          class="px-4 py-2 mt-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          Search
        </button>
      </form>
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
        />
      )}
    </div>
  );
};

export default InputAnime;
