import { BreweryDetail } from './../../app/api/types/breweries';
import { Brewery } from 'app/api/types/breweries';
import {
  combinedAddress,
  detailCombinedAddress,
} from '../../app/utils/breweryUtils';

test('combinedAddress case #1', () => {
  // Given
  const item = undefined;

  // When
  const result = combinedAddress(item);

  // Then
  expect(result).toBe(undefined);
});

test('combinedAddress case #2', () => {
  // Given
  const item: Brewery = {
    id: '',
  };

  // When
  const result = combinedAddress(item);

  // Then
  expect(result).toBe('');
});

test('combinedAddress case #3', () => {
  // Given
  const item: Brewery = {
    id: '',
    street: '1802 Telegraph Ave',
  };

  // When
  const result = combinedAddress(item);

  // Then
  expect(result).toBe('1802 Telegraph Ave');
});

test('combinedAddress case #4', () => {
  // Given
  const item: Brewery = {
    id: '',
    state: 'California',
  };

  // When
  const result = combinedAddress(item);

  // Then
  expect(result).toBe('California');
});

test('combinedAddress case #5', () => {
  // Given
  const item: Brewery = {
    id: '',
    street: '1802 Telegraph Ave',
    state: 'California',
  };

  // When
  const result = combinedAddress(item);

  // Then
  expect(result).toBe('1802 Telegraph Ave, California');
});

test('combinedAddress case #6', () => {
  // Given
  const item: Brewery = {
    id: '',
    street: '1802 Telegraph Ave',
    city: 'Oakland',
    state: 'California',
  };

  // When
  const result = combinedAddress(item);

  // Then
  expect(result).toBe('1802 Telegraph Ave, Oakland, California');
});

test('detailCombinedAddress case #1', () => {
  // Given
  const item = undefined;

  // When
  const result = detailCombinedAddress(item);

  // Then
  expect(result).toBe(undefined);
});

test('detailCombinedAddress case #2', () => {
  // Given
  const item: BreweryDetail = {
    id: '',
  };

  // When
  const result = detailCombinedAddress(item);

  // Then
  expect(result).toBe('');
});

test('detailCombinedAddress case #3', () => {
  // Given
  const item: BreweryDetail = {
    id: '',
    street: '1802 Telegraph Ave',
    city: 'Oakland',
    state: 'California',
    postal_code: '94612-2110',
    country: 'United States',
  };

  // When
  const result = detailCombinedAddress(item);

  // Then
  expect(result).toBe(
    '1802 Telegraph Ave, Oakland, California, 94612-2110, United States',
  );
});
