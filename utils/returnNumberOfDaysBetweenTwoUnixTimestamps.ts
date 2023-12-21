const returnNumberOfDaysBetweenTwoUnixTimestamps = (
  timestamp1: number,
  timestamp2: number
): number => {
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const differenceInMilliseconds = timestamp2 - timestamp1;
  const numberOfDays = Math.round(
    differenceInMilliseconds / millisecondsPerDay
  );
  return numberOfDays < 0 ? 0 : numberOfDays;
};

export default returnNumberOfDaysBetweenTwoUnixTimestamps;
