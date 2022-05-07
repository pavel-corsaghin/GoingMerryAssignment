import { isNotEmpty } from '../../app/utils/stringUtils';

test('isUndefinedOrEmpty case #1', () => {
  // Given
  const input = undefined;

  // When
  const result = isNotEmpty(input);

  // Then
  expect(result).toBe(false);
});

test('isUndefinedOrEmpty case #2', () => {
  // Given
  const input = '';

  // When
  const result = isNotEmpty(input);

  // Then
  expect(result).toBe(false);
});

test('isUndefinedOrEmpty case #3', () => {
  // Given
  const input = 'hello';

  // When
  const result = isNotEmpty(input);

  // Then
  expect(result).toBe(true);
});
