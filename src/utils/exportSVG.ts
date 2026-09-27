import { generateAvatarSvgDocument } from '../avatar/renderAvatarSvg';
import type { AvatarState } from '../types/avatar';

/**
 * Exports the avatar as a standalone downloadable SVG file.
 */
export function exportAvatarAsSVG(
  state: AvatarState,
  filename = 'avatar.svg'
): void {
  const svgMarkup = generateAvatarSvgDocument(state);
  const blob = new Blob([svgMarkup], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);

  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
