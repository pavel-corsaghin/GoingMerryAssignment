import React from 'react';
import { Circle, Line, Svg } from 'react-native-svg';
import { IconBodyType } from './@types';

const SearchIcon = ({ color, size }: IconBodyType) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round">
    <Circle cx="11" cy="11" r="8" stroke={color} />
    <Line x1="21" y1="21" x2="16.65" y2="16.65" stroke={color} />
  </Svg>
);

export default SearchIcon;
