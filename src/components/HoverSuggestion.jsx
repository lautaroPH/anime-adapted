import { FirstLetterOfPhraseUpercase } from '../utils/FirstLetterOfPhraseUpercase';
import AiredDate from './AiredDate';

const HoverSuggestion = ({
  title,
  media_type,
  start_date,
  end_date,
  mean,
  status,
}) => {
  const statusUppercase = FirstLetterOfPhraseUpercase(
    status.split('_').join(' '),
  );

  return (
    <div class="mt-1">
      <p class="leading-4 font-semibold text-sm">
        {title}{' '}
        <span class="text-xs text-gray-600 font-light">({media_type})</span>
      </p>
      <div class="mt-1 text-gray-900 text-xs font-normal leading-4">
        <p>
          <span class="font-medium">Aired: </span>
          <AiredDate startDate={start_date} endDate={end_date} />
        </p>
        {mean && (
          <p>
            <span class="font-medium">Score:</span> {mean}
          </p>
        )}
        <p>
          <span class="font-medium">Status:</span> {statusUppercase}
        </p>
      </div>
    </div>
  );
};

export default HoverSuggestion;
