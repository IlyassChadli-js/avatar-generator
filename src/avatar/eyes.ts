export function drawEyes(i: number): string {
  const brows =
    `<line x1="68" y1="92" x2="88" y2="90" stroke="#1a1a2e" stroke-width="2.5" stroke-linecap="round"/>` +
    `<line x1="112" y1="90" x2="132" y2="92" stroke="#1a1a2e" stroke-width="2.5" stroke-linecap="round"/>`;

  const pairs = [
    // 0 Round
    `<circle cx="78" cy="105" r="7" fill="white"/><circle cx="78" cy="105" r="4" fill="#1a1a2e"/><circle cx="122" cy="105" r="7" fill="white"/><circle cx="122" cy="105" r="4" fill="#1a1a2e"/>`,
    // 1 Narrow
    `<ellipse cx="78" cy="105" rx="8" ry="4" fill="white"/><circle cx="78" cy="105" r="3" fill="#1a1a2e"/><ellipse cx="122" cy="105" rx="8" ry="4" fill="white"/><circle cx="122" cy="105" r="3" fill="#1a1a2e"/>`,
    // 2 Almond
    `<path d="M70 105 Q78 96 86 105 Q78 110 70 105Z" fill="white"/><circle cx="78" cy="104" r="3.5" fill="#1a1a2e"/><path d="M114 105 Q122 96 130 105 Q122 110 114 105Z" fill="white"/><circle cx="122" cy="104" r="3.5" fill="#1a1a2e"/>`,
    // 3 Happy Closed
    `<path d="M71 105 Q78 98 85 105" stroke="#1a1a2e" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M115 105 Q122 98 129 105" stroke="#1a1a2e" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
    // 4 Wink
    `<circle cx="78" cy="105" r="7" fill="white"/><circle cx="78" cy="105" r="4" fill="#1a1a2e"/><path d="M115 105 Q122 99 129 105" stroke="#1a1a2e" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
    // 5 Lashes
    `<circle cx="78" cy="105" r="7" fill="white"/><circle cx="78" cy="105" r="4" fill="#1a1a2e"/><circle cx="122" cy="105" r="7" fill="white"/><circle cx="122" cy="105" r="4" fill="#1a1a2e"/><line x1="72" y1="99" x2="69" y2="94" stroke="#1a1a2e" stroke-width="1.5" stroke-linecap="round"/><line x1="78" y1="98" x2="78" y2="93" stroke="#1a1a2e" stroke-width="1.5" stroke-linecap="round"/><line x1="84" y1="99" x2="87" y2="94" stroke="#1a1a2e" stroke-width="1.5" stroke-linecap="round"/><line x1="116" y1="99" x2="113" y2="94" stroke="#1a1a2e" stroke-width="1.5" stroke-linecap="round"/><line x1="122" y1="98" x2="122" y2="93" stroke="#1a1a2e" stroke-width="1.5" stroke-linecap="round"/><line x1="128" y1="99" x2="131" y2="94" stroke="#1a1a2e" stroke-width="1.5" stroke-linecap="round"/>`,
    // 6 Doe
    `<circle cx="78" cy="105" r="9" fill="white"/><circle cx="80" cy="105" r="5" fill="#1a1a2e"/><circle cx="82" cy="102" r="1.5" fill="white"/><circle cx="122" cy="105" r="9" fill="white"/><circle cx="124" cy="105" r="5" fill="#1a1a2e"/><circle cx="126" cy="102" r="1.5" fill="white"/>`,
    // 7 Cool
    `<circle cx="78" cy="105" r="3" fill="#1a1a2e"/><circle cx="122" cy="105" r="3" fill="#1a1a2e"/>`,
  ];

  const safeIndex = Math.max(0, Math.min(i, pairs.length - 1));
  return brows + pairs[safeIndex];
}
