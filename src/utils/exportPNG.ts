import { generateAvatarSvgDocument } from '../avatar/renderAvatarSvg';
import type { AvatarState } from '../types/avatar';

/**
 * Renders the avatar SVG onto an offscreen HTML canvas at specified resolution.
 */
export function renderAvatarToCanvas(
  state: AvatarState,
  size = 512
): Promise<HTMLCanvasElement> {
  return new Promise((resolve, reject) => {
    const svgMarkup = generateAvatarSvgDocument(state);
    const blob = new Blob([svgMarkup], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        URL.revokeObjectURL(url);
        reject(new Error('Canvas 2D context is not available'));
        return;
      }

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.clearRect(0, 0, size, size);
      ctx.drawImage(img, 0, 0, size, size);
      URL.revokeObjectURL(url);
      resolve(canvas);
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load avatar SVG into image element'));
    };

    img.src = url;
  });
}

/**
 * Exports the avatar as a high-resolution 512x512 PNG file.
 */
export async function exportAvatarAsPNG(
  state: AvatarState,
  size = 512,
  filename = 'avatar.png'
): Promise<void> {
  const canvas = await renderAvatarToCanvas(state, size);

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error('Failed to generate PNG blob from canvas'));
        return;
      }
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = filename;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);

      setTimeout(() => URL.revokeObjectURL(url), 1000);
      resolve();
    }, 'image/png');
  });
}
