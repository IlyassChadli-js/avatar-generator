import type { BackgroundOption } from '../types/avatar';

export const HEAD_TYPES = ['Rounded', 'Angular'] as const;

export const SKIN_COLORS = [
  '#FDDBB4',
  '#F1C27D',
  '#E0A370',
  '#C68642',
  '#8D5524',
  '#5C3317',
] as const;

export const SKIN_NAMES = ['1', '2', '3', '4', '5', '6'] as const;

export const HAIR_COLOR_NAMES = [
  'Black',
  'Brown',
  'Blonde',
  'Red',
  'Gray',
  'Blue',
  'Pink',
] as const;

export const HAIR_COLORS = [
  '#1a1a2e',
  '#6B4226',
  '#E8D44D',
  '#C0392B',
  '#95A5A6',
  '#3498DB',
  '#FF69B4',
] as const;

export const EYE_NAMES = [
  'Round',
  'Narrow',
  'Almond',
  'Happy',
  'Wink',
  'Lashes',
  'Doe',
  'Cool',
] as const;

export const MOUTH_NAMES = [
  'Smile',
  'Grin',
  'Open',
  'Neutral',
  'Smirk',
  'Lipstick',
] as const;

export const ACC_NAMES = [
  'None',
  'Round Glasses',
  'Square Glasses',
  'Sunglasses',
  'Headband',
  'Earrings',
  'Hair Bow',
] as const;

export const HAIR_NAMES = [
  'Buzz',
  'Crew Cut',
  'Bob',
  'Pixie',
  'Side Part',
  'Long Straight',
  'Long Wavy',
  'Long Curly',
  'Braids',
  'Ponytail',
  'Space Buns',
  'Mohawk',
  'Bald',
] as const;

export const BACKGROUND_OPTIONS: BackgroundOption[] = [
  { name: 'Pink', color: '#eca2ce' },
  { name: 'Purple', color: '#d4a6ff' },
  { name: 'Blue', color: '#8db2ff' },
  { name: 'Green', color: '#cfe773' },
  { name: 'Yellow', color: '#ffeb7f' },
  { name: 'Orange', color: '#ffa376' },
  { name: 'Transparent', color: 'transparent', isTransparent: true },
];

export const DEFAULT_AVATAR_STATE = {
  head: 0,
  skin: 0,
  hair: 0,
  hairColor: 1,
  eyes: 0,
  mouth: 0,
  acc: 0,
  bg: 2,
};
