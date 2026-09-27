import {
  ACC_NAMES,
  BACKGROUND_OPTIONS,
  EYE_NAMES,
  HAIR_COLORS,
  HAIR_NAMES,
  HEAD_TYPES,
  MOUTH_NAMES,
  SKIN_COLORS,
} from '../data/avatarOptions';
import type { AvatarState } from '../types/avatar';

/**
 * Validates a numeric index against an array length.
 * Returns null if invalid or NaN.
 */
function validateIndex(value: string | null, maxExclusive: number): number | null {
  if (value === null || value.trim() === '') return null;
  const num = parseInt(value, 10);
  if (Number.isNaN(num) || num < 0 || num >= maxExclusive) {
    return null;
  }
  return num;
}

/**
 * Parses avatar configuration from URL search query string.
 * Returns null if no valid parameters are present.
 */
export function parseAvatarFromUrl(searchString = window.location.search): Partial<AvatarState> | null {
  try {
    const params = new URLSearchParams(searchString);
    const parsed: Partial<AvatarState> = {};

    const head = validateIndex(params.get('head'), HEAD_TYPES.length);
    if (head !== null) parsed.head = head;

    const skin = validateIndex(params.get('skin'), SKIN_COLORS.length);
    if (skin !== null) parsed.skin = skin;

    const hair = validateIndex(params.get('hair'), HAIR_NAMES.length);
    if (hair !== null) parsed.hair = hair;

    const hairColor = validateIndex(params.get('hairColor'), HAIR_COLORS.length);
    if (hairColor !== null) parsed.hairColor = hairColor;

    const eyes = validateIndex(params.get('eyes'), EYE_NAMES.length);
    if (eyes !== null) parsed.eyes = eyes;

    const mouth = validateIndex(params.get('mouth'), MOUTH_NAMES.length);
    if (mouth !== null) parsed.mouth = mouth;

    const acc = validateIndex(params.get('acc'), ACC_NAMES.length);
    if (acc !== null) parsed.acc = acc;

    const bg = validateIndex(params.get('bg'), BACKGROUND_OPTIONS.length);
    if (bg !== null) parsed.bg = bg;

    return Object.keys(parsed).length > 0 ? parsed : null;
  } catch {
    return null;
  }
}

/**
 * Converts AvatarState into URL search query string.
 */
export function buildAvatarQuery(state: AvatarState): string {
  const params = new URLSearchParams({
    head: state.head.toString(),
    skin: state.skin.toString(),
    hair: state.hair.toString(),
    hairColor: state.hairColor.toString(),
    eyes: state.eyes.toString(),
    mouth: state.mouth.toString(),
    acc: state.acc.toString(),
    bg: state.bg.toString(),
  });
  return params.toString();
}

/**
 * Builds the full shareable URL for the avatar.
 */
export function buildAvatarShareUrl(state: AvatarState): string {
  const base = `${window.location.origin}${window.location.pathname}`;
  return `${base}?${buildAvatarQuery(state)}`;
}

/**
 * Updates the browser's current URL without reloading the page.
 */
export function syncUrlWithAvatar(state: AvatarState): void {
  try {
    const newUrl = buildAvatarShareUrl(state);
    window.history.replaceState({ avatar: state }, '', newUrl);
  } catch {
    // Gracefully ignore in restrictive environments (e.g. sandbox iframe)
  }
}

/**
 * Copies the shareable avatar URL to clipboard.
 */
export async function copyShareLink(state: AvatarState): Promise<boolean> {
  const url = buildAvatarShareUrl(state);
  try {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      await navigator.clipboard.writeText(url);
      return true;
    }
    // Fallback using temporary textarea
    const textarea = document.createElement('textarea');
    textarea.value = url;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textarea);
    return successful;
  } catch {
    return false;
  }
}
