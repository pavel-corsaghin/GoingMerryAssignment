import { DateFormat, getFormattedDate } from '../../app/utils/dateUtils';

test('getFormattedDate case #1', () => {
  // Given
  const input = 'abcd';

  // When
  const result = getFormattedDate(input);

  // Then
  expect(result).toBe('Invalid date');
});

test('getFormattedDate case #2', () => {
  // Given
  const input = '2018-08-23T23:24:11.758Z';

  // When
  const result = getFormattedDate(input);

  // Then
  expect(result).toBe('Aug, 24 2018');
});

test('getFormattedDate case #3', () => {
  // Given
  const input = '2018-08-23 00:00:00';

  // When
  const result = getFormattedDate(input);

  // Then
  expect(result).toBe('Aug, 23 2018');
});

test('getFormattedDate case #4', () => {
  // Given
  const input = '2018-08-23T23:24:11.758Z';

  // When
  const result = getFormattedDate(input, DateFormat.time);

  // Then
  expect(result).toBe('06:24');
});
