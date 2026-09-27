export function drawHead(type: number, skinColor: string): string {
  if (type === 0) {
    // Rounded Head
    return (
      `<ellipse cx="100" cy="112" rx="58" ry="60" fill="${skinColor}"/>` +
      `<ellipse cx="42" cy="110" rx="10" ry="14" fill="${skinColor}"/>` +
      `<ellipse cx="158" cy="110" rx="10" ry="14" fill="${skinColor}"/>`
    );
  }
  // Angular Head
  return (
    `<path d="M52 80 Q52 52 75 48 L125 48 Q148 52 148 80 L148 120 Q148 155 125 165 L100 172 L75 165 Q52 155 52 120 Z" fill="${skinColor}"/>` +
    `<rect x="42" y="98" width="12" height="22" rx="6" fill="${skinColor}"/>` +
    `<rect x="146" y="98" width="12" height="22" rx="6" fill="${skinColor}"/>`
  );
}
