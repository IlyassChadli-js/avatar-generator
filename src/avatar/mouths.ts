export function drawMouth(i: number): string {
  const mouths = [
    // 0 Smile
    `<path d="M85 132 Q100 146 115 132" stroke="#1a1a2e" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
    // 1 Grin
    `<path d="M82 130 Q100 150 118 130" fill="white" stroke="#1a1a2e" stroke-width="2"/>`,
    // 2 Open
    `<ellipse cx="100" cy="135" rx="10" ry="8" fill="#1a1a2e"/><ellipse cx="100" cy="133" rx="8" ry="4" fill="white"/>`,
    // 3 Neutral
    `<line x1="87" y1="134" x2="113" y2="134" stroke="#1a1a2e" stroke-width="2.5" stroke-linecap="round"/>`,
    // 4 Smirk
    `<path d="M85 132 Q100 140 115 128" stroke="#1a1a2e" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
    // 5 Lipstick
    `<path d="M84 130 Q100 144 116 130" fill="#e74c3c" stroke="#c0392b" stroke-width="1.5"/>`,
  ];

  const safeIndex = Math.max(0, Math.min(i, mouths.length - 1));
  return mouths[safeIndex];
}
