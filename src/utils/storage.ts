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

const STORAGE_KEY = 'avatar_generator_state_v1';

function isValidNumber(val: unknown, maxExclusive: number): val is number {
  return typeof val === 'number' && Number.isInteger(val) && val >= 0 && val < maxExclusive;
}

/**
 * Validates whether an unknown object conforms to a valid AvatarState.
 */
export function isValidAvatarState(obj: unknown): obj is AvatarState {
  if (!obj || typeof obj !== 'object') return false;
  const o = obj as Record<string, unknown>;

  return (
    isValidNumber(o.head, HEAD_TYPES.length) &&
    isValidNumber(o.skin, SKIN_COLORS.length) &&
    isValidNumber(o.hair, HAIR_NAMES.length) &&
    isValidNumber(o.hairColor, HAIR_COLORS.length) &&
    isValidNumber(o.eyes, EYE_NAMES.length) &&
    isValidNumber(o.mouth, MOUTH_NAMES.length) &&
    isValidNumber(o.acc, ACC_NAMES.length) &&
    isValidNumber(o.bg, BACKGROUND_OPTIONS.length)
  );
}

/**
 * Retrieves the saved avatar state from localStorage, validating its integrity.
 */
export function loadAvatarFromStorage(): AvatarState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (isValidAvatarState(parsed)) {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Persists the current avatar state to localStorage.
 */
export function saveAvatarToStorage(state: AvatarState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Fail silently in private browsing or quota limit
  }
}
