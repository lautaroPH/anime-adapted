import { sourceTypes } from '../utils/sourceTypes';
import AnimeData from './AnimeData';

const Anime = ({
  main_picture,
  title,
  source,
  chapter,
  volume,
  light_novel,
}) => {
  return (
    <div class="flex w-full pt-8 justify-center">
      <img src={main_picture.medium} alt={title} />
      <div class="ml-5">
        <h2 class="text-2xl font-bold text-gray-800">{title}</h2>
        <div class="mt-1">
          <p class="text-gray-800 mb-3">
            <span class="font-semibold">Source:</span> {source}
          </p>
          <AnimeData title={'Chapter manga:'} data={chapter} />
          <AnimeData title={'Volume manga:'} data={volume} />
          <AnimeData title={'Light novel:'} data={light_novel} />
          {!light_novel &&
            !chapter &&
            !volume &&
            sourceTypes.includes(source) && (
              <div>
                <p>We don't have information about this anime.</p>
                <p>
                  Please, if you know something about this anime, help us to
                  improve our database.
                </p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Anime;
