import {
  BACKGROUND_OPTIONS,
  HAIR_COLORS,
  SKIN_COLORS,
} from '../data/avatarOptions';
import type { AvatarState } from '../types/avatar';
import { drawAcc } from './accessories';
import { drawEyes } from './eyes';
import { drawHair } from './hair';
import { drawHead } from './heads';
import { drawMouth } from './mouths';

/**
 * Returns inner SVG elements for the avatar layers (head, eyes, mouth, hair, accessory).
 */
export function generateAvatarInnerSvg(state: AvatarState): string {
  const safeHead = Math.max(0, Math.min(state.head, 1));
  const safeSkin = Math.max(0, Math.min(state.skin, SKIN_COLORS.length - 1));
  const safeHairColor = Math.max(
    0,
    Math.min(state.hairColor, HAIR_COLORS.length - 1)
  );

  const skinColor = SKIN_COLORS[safeSkin];
  const hairColor = HAIR_COLORS[safeHairColor];

  let svg = '';
  svg += drawHead(safeHead, skinColor);
  svg += drawEyes(state.eyes);
  svg += drawMouth(state.mouth);
  svg += drawHair(state.hair, hairColor, safeHead);
  svg += drawAcc(state.acc, safeHead);

  return svg;
}

/**
 * Generates a full standalone SVG document string for export or canvas drawing.
 */
export function generateAvatarSvgDocument(state: AvatarState): string {
  const bgOpt =
    BACKGROUND_OPTIONS[state.bg] ?? BACKGROUND_OPTIONS[0];
  const isTransparent = bgOpt.isTransparent || bgOpt.color === 'transparent';

  const innerSvg = generateAvatarInnerSvg(state);

  const bgElement = isTransparent
    ? ''
    : `<circle cx="100" cy="100" r="100" fill="${bgOpt.color}"/>`;

  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">` +
    `<defs>` +
    `<clipPath id="avatar-clip">` +
    `<circle cx="100" cy="100" r="100"/>` +
    `</clipPath>` +
    `</defs>` +
    bgElement +
    `<g clip-path="url(#avatar-clip)">` +
    innerSvg +
    `</g>` +
    `</svg>`
  );
}
