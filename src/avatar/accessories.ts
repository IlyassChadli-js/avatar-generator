export function drawAcc(i: number, headType: number): string {
  const accList = [
    // 0 None
    '',
    // 1 Round Glasses
    `<circle cx="78" cy="105" r="14" fill="none" stroke="#1a1a2e" stroke-width="2.5"/><circle cx="122" cy="105" r="14" fill="none" stroke="#1a1a2e" stroke-width="2.5"/><line x1="92" y1="105" x2="108" y2="105" stroke="#1a1a2e" stroke-width="2"/><line x1="64" y1="103" x2="50" y2="100" stroke="#1a1a2e" stroke-width="2"/><line x1="136" y1="103" x2="150" y2="100" stroke="#1a1a2e" stroke-width="2"/>`,
    // 2 Square Glasses
    `<rect x="64" y="95" width="28" height="20" rx="3" fill="none" stroke="#1a1a2e" stroke-width="2.5"/><rect x="108" y="95" width="28" height="20" rx="3" fill="none" stroke="#1a1a2e" stroke-width="2.5"/><line x1="92" y1="105" x2="108" y2="105" stroke="#1a1a2e" stroke-width="2"/><line x1="64" y1="103" x2="50" y2="100" stroke="#1a1a2e" stroke-width="2"/><line x1="136" y1="103" x2="150" y2="100" stroke="#1a1a2e" stroke-width="2"/>`,
    // 3 Sunglasses
    `<path d="M62 98 Q78 92 92 98 L92 112 Q78 118 62 112 Z" fill="#1a1a2e"/><path d="M108 98 Q122 92 138 98 L138 112 Q122 118 108 112 Z" fill="#1a1a2e"/><line x1="92" y1="105" x2="108" y2="105" stroke="#1a1a2e" stroke-width="2.5"/><line x1="62" y1="103" x2="48" y2="100" stroke="#1a1a2e" stroke-width="2.5"/><line x1="138" y1="103" x2="152" y2="100" stroke="#1a1a2e" stroke-width="2.5"/>`,
    // 4 Headband
    `<path d="M48 82 Q100 68 152 82" stroke="#e74c3c" stroke-width="6" fill="none" stroke-linecap="round"/>`,
    // 5 Earrings (dedicated SVG sets per head shape)
    headType === 0
      ? `<circle cx="42" cy="128" r="4" fill="#FFD700" stroke="#DAA520" stroke-width="1"/><circle cx="158" cy="128" r="4" fill="#FFD700" stroke="#DAA520" stroke-width="1"/><line x1="42" y1="120" x2="42" y2="124" stroke="#DAA520" stroke-width="1.5"/><line x1="158" y1="120" x2="158" y2="124" stroke="#DAA520" stroke-width="1.5"/>`
      : `<circle cx="45" cy="118" r="4" fill="#FFD700" stroke="#DAA520" stroke-width="1"/><circle cx="155" cy="118" r="4" fill="#FFD700" stroke="#DAA520" stroke-width="1"/><line x1="45" y1="110" x2="45" y2="114" stroke="#DAA520" stroke-width="1.5"/><line x1="155" y1="110" x2="155" y2="114" stroke="#DAA520" stroke-width="1.5"/>`,
    // 6 Hair Bow
    `<path d="M100 42 Q88 32 82 40 Q88 46 100 42Z" fill="#e74c3c"/><path d="M100 42 Q112 32 118 40 Q112 46 100 42Z" fill="#e74c3c"/><circle cx="100" cy="42" r="3" fill="#c0392b"/>`,
  ];

  const safeIndex = Math.max(0, Math.min(i, accList.length - 1));
  return accList[safeIndex];
}
