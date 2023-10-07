import tw from 'tailwind-styled-components';

import { TagProps } from './Tag';

export const Tag = tw.p<Pick<TagProps, 'size'>>`
  rounded-full
  bg-gray-500
  px-3
  py-1
  font-normal
  capitalize
  text-gray-200
  transition-colors
  duration-300

  ${({ size }) => `test-${size}`}
`;
