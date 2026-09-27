import type { AvatarState } from '../types/avatar';
import { renderAvatarToCanvas } from './exportPNG';

export interface CopyResult {
  success: boolean;
  message: string;
}

/**
 * Copies the avatar as a PNG image to the user's clipboard.
 * Gracefully handles browsers that do not support image clipboard copying.
 */
export async function copyAvatarAsPNG(
  state: AvatarState,
  size = 512
): Promise<CopyResult> {
  if (!navigator.clipboard || typeof navigator.clipboard.write !== 'function') {
    return {
      success: false,
      message: 'Clipboard image copying is not supported on this browser.',
    };
  }

  try {
    const canvas = await renderAvatarToCanvas(state, size);

    const blob = await new Promise<Blob | null>((resolve) => {
      canvas.toBlob((b) => resolve(b), 'image/png');
    });

    if (!blob) {
      return {
        success: false,
        message: 'Could not create image blob for clipboard.',
      };
    }

    // Attempt writing image/png ClipboardItem
    const item = new ClipboardItem({ 'image/png': blob });
    await navigator.clipboard.write([item]);

    return {
      success: true,
      message: 'Copied!',
    };
  } catch (err) {
    const errorMsg =
      err instanceof Error ? err.message : 'Unknown clipboard error';
    return {
      success: false,
      message: `Failed to copy image: ${errorMsg}`,
    };
  }
}
