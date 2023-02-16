import { dateStatus } from '../utils/dateStatus';
import { getDateStatus } from '../utils/getDateStatus';
import { months } from '../utils/months';

const AiredDate = ({ startDate, endDate }) => {
  const startDateArray = startDate?.split('-');

  const dayStart = startDateArray?.length === 3 && startDateArray[2];
  const monthStart =
    startDateArray?.length >= 2 && months[startDateArray[1] - 1];
  const yearStart = startDateArray?.length >= 1 && startDateArray[0];

  const endDateArray = endDate?.split('-');

  const dayEnd = endDateArray?.length === 3 && endDateArray[2];
  const monthEnd = endDateArray?.length >= 2 && months[endDateArray[1] - 1];
  const yearEnd = endDateArray?.length >= 1 && endDateArray[0];

  const date = getDateStatus(startDate, endDate);

  return (
    <>
      {date === dateStatus.SameDay && (
        <>
          {monthStart && `${monthStart} ${dayStart ? dayStart : '??'}, `}{' '}
          {yearStart}
        </>
      )}
      {date === dateStatus.Ongoing && (
        <>
          {monthStart} {dayStart ? dayStart : '??'}, {yearStart} to ??
        </>
      )}
      {date === dateStatus.Finished && (
        <>
          {monthStart} {dayStart ? dayStart : '??'}, {yearStart} to {monthEnd}{' '}
          {dayEnd}, {yearEnd}
        </>
      )}
      {date === dateStatus.NotYetAired && 'Not available'}
    </>
  );
};

export default AiredDate;
