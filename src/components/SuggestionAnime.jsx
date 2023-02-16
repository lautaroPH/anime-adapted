import { useState } from 'preact/hooks';
import HoverSuggestion from './HoverSuggestion';
import Suggestion from './Suggestion';

const SuggestionAnime = ({
  main_picture,
  title,
  media_type,
  start_date,
  mean,
  end_date,
  status,
  year,
  animeTitle,
  changeAnimeSearch,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <li
      onClick={() => changeAnimeSearch(title)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      class={`flex ${
        !hover ? 'items-center h-12' : 'h-28'
      } pl-4 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-blue-50 hover:text-gray-900 `}
    >
      <img
        src={main_picture.medium}
        class={`${hover ? 'h-auto' : 'h-[38px]'} w-[58px] mr-2 object-cover`}
      />
      {hover ? (
        <HoverSuggestion
          title={title}
          media_type={media_type}
          start_date={start_date}
          end_date={end_date}
          mean={mean}
          status={status}
        />
      ) : (
        <Suggestion
          title={title}
          media_type={media_type}
          year={year}
          animeTitle={animeTitle}
        />
      )}
    </li>
  );
};

export default SuggestionAnime;
