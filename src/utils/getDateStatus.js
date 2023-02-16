import { dateStatus } from './dateStatus';

export const getDateStatus = (startDate, endDate) => {
  if (startDate && startDate === endDate) return dateStatus.SameDay;
  if (startDate && !endDate && startDate !== endDate) return dateStatus.Ongoing;
  if (startDate && endDate && startDate !== endDate) return dateStatus.Finished;
  if (!startDate && !endDate) return dateStatus.NotYetAired;
};
