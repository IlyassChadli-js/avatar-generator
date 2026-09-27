export function drawHairA(i: number, c: string): string {
  // Rounded head: cx=100 cy=112, rx=58 ry=60
  const styles = [
    // 0 Buzz
    `<path d="M58 92 Q56 60 100 48 Q144 60 142 92 L142 85 Q140 62 100 52 Q60 62 58 85 Z" fill="${c}" opacity="0.65"/>`,
    // 1 Crew Cut
    `<path d="M52 90 Q50 55 100 48 Q150 55 148 90 L145 82 Q140 62 100 54 Q60 62 55 82 Z" fill="${c}"/>`,
    // 2 Bob
    `<path d="M48 85 Q46 52 100 44 Q154 52 152 85 L155 130 Q150 140 140 138 L140 90 Q138 62 100 54 Q62 62 60 90 L60 138 Q50 140 45 130 Z" fill="${c}"/>`,
    // 3 Pixie
    `<path d="M56 90 Q54 56 100 46 Q146 56 144 90 L140 78 Q135 62 100 54 Q70 62 65 78 Z" fill="${c}"/><path d="M55 80 Q40 65 38 55 Q50 60 60 70 Z" fill="${c}"/>`,
    // 4 Side Part
    `<path d="M50 88 Q48 52 100 44 Q152 52 150 88" fill="${c}"/><path d="M48 88 Q45 105 48 120 Q52 108 54 88 Z" fill="${c}"/><path d="M85 40 L88 42" stroke="${c}" stroke-width="2"/>`,
    // 5 Long Straight
    `<path d="M50 88 Q48 52 100 44 Q152 52 150 88" fill="${c}"/><path d="M50 88 Q46 100 44 140 Q48 160 56 175 Q58 160 56 88 Z" fill="${c}"/><path d="M150 88 Q154 100 156 140 Q152 160 144 175 Q142 160 144 88 Z" fill="${c}"/>`,
    // 6 Long Wavy
    `<path d="M50 88 Q48 52 100 44 Q152 52 150 88" fill="${c}"/><path d="M50 88 Q46 110 48 135 Q54 150 48 175 Q54 160 58 135 Q62 110 56 88 Z" fill="${c}"/><path d="M150 88 Q154 110 152 135 Q146 150 152 175 Q146 160 142 135 Q138 110 144 88 Z" fill="${c}"/>`,
    // 7 Long Curly
    `<circle cx="60" cy="68" r="16" fill="${c}"/><circle cx="85" cy="55" r="16" fill="${c}"/><circle cx="115" cy="55" r="16" fill="${c}"/><circle cx="140" cy="68" r="16" fill="${c}"/><circle cx="44" cy="85" r="15" fill="${c}"/><circle cx="156" cy="85" r="15" fill="${c}"/><circle cx="44" cy="112" r="13" fill="${c}"/><circle cx="156" cy="112" r="13" fill="${c}"/><circle cx="46" cy="138" r="12" fill="${c}"/><circle cx="154" cy="138" r="12" fill="${c}"/>`,
    // 8 Braids
    `<path d="M50 88 Q48 52 100 44 Q152 52 150 88" fill="${c}"/><path d="M50 82 Q48 120 50 150 Q52 160 56 150 Q58 120 56 82 Z" fill="${c}"/><circle cx="53" cy="158" r="5" fill="${c}"/><path d="M150 82 Q152 120 150 150 Q148 160 144 150 Q142 120 144 82 Z" fill="${c}"/><circle cx="147" cy="158" r="5" fill="${c}"/>`,
    // 9 Ponytail
    `<path d="M50 88 Q48 52 100 44 Q152 52 150 88" fill="${c}"/><ellipse cx="100" cy="38" rx="10" ry="8" fill="${c}"/><path d="M100 38 Q108 20 103 5 Q100 13 97 5 Q92 20 100 38" fill="${c}"/>`,
    // 10 Space Buns
    `<path d="M50 88 Q48 52 100 44 Q152 52 150 88" fill="${c}"/><circle cx="58" cy="65" r="18" fill="${c}"/><circle cx="142" cy="65" r="18" fill="${c}"/>`,
    // 11 Mohawk
    `<path d="M88 52 Q92 10 100 5 Q108 10 112 52" fill="${c}"/><path d="M90 60 Q95 30 100 25 Q105 30 110 60" fill="${c}"/>`,
    // 12 Bald
    '',
  ];

  const safeIndex = Math.max(0, Math.min(i, styles.length - 1));
  return styles[safeIndex];
}

export function drawHairB(i: number, c: string): string {
  // Angular head: top at y=48, sides at x=52/148
  const styles = [
    // 0 Buzz
    `<path d="M56 80 Q56 52 100 42 Q144 52 144 80 L142 74 Q140 58 100 48 Q60 58 58 74 Z" fill="${c}" opacity="0.65"/>`,
    // 1 Crew Cut
    `<path d="M52 80 Q52 48 100 38 Q148 48 148 80 L145 72 Q142 56 100 46 Q58 56 55 72 Z" fill="${c}"/>`,
    // 2 Bob
    `<path d="M48 76 Q48 44 100 34 Q152 44 152 76 L152 125 Q148 135 138 132 L138 82 Q136 56 100 46 Q64 56 62 82 L62 132 Q52 135 48 125 Z" fill="${c}"/>`,
    // 3 Pixie
    `<path d="M55 78 Q55 46 100 37 Q145 46 145 78 L142 70 Q138 54 100 46 Q68 54 62 70 Z" fill="${c}"/><path d="M55 72 Q40 58 36 48 Q50 52 60 64 Z" fill="${c}"/>`,
    // 4 Side Part
    `<path d="M50 78 Q50 44 100 34 Q150 44 150 78" fill="${c}"/><path d="M50 78 Q47 98 50 115 Q54 100 54 78 Z" fill="${c}"/>`,
    // 5 Long Straight
    `<path d="M50 78 Q50 44 100 34 Q150 44 150 78" fill="${c}"/><path d="M50 78 Q46 90 44 130 Q48 150 56 172 Q56 150 56 78 Z" fill="${c}"/><path d="M150 78 Q154 90 156 130 Q152 150 144 172 Q144 150 144 78 Z" fill="${c}"/>`,
    // 6 Long Wavy
    `<path d="M50 78 Q50 44 100 34 Q150 44 150 78" fill="${c}"/><path d="M50 78 Q46 100 48 130 Q54 145 48 172 Q54 150 60 130 Q64 100 56 78 Z" fill="${c}"/><path d="M150 78 Q154 100 152 130 Q146 145 152 172 Q146 150 140 130 Q136 100 144 78 Z" fill="${c}"/>`,
    // 7 Long Curly
    `<circle cx="62" cy="60" r="16" fill="${c}"/><circle cx="85" cy="48" r="16" fill="${c}"/><circle cx="115" cy="48" r="16" fill="${c}"/><circle cx="138" cy="60" r="16" fill="${c}"/><circle cx="44" cy="75" r="15" fill="${c}"/><circle cx="156" cy="75" r="15" fill="${c}"/><circle cx="44" cy="102" r="13" fill="${c}"/><circle cx="156" cy="102" r="13" fill="${c}"/><circle cx="46" cy="128" r="12" fill="${c}"/><circle cx="154" cy="128" r="12" fill="${c}"/>`,
    // 8 Braids
    `<path d="M50 78 Q50 44 100 34 Q150 44 150 78" fill="${c}"/><path d="M50 72 Q48 112 50 145 Q52 155 56 145 Q58 112 56 72 Z" fill="${c}"/><circle cx="53" cy="152" r="5" fill="${c}"/><path d="M150 72 Q152 112 150 145 Q148 155 144 145 Q142 112 144 72 Z" fill="${c}"/><circle cx="147" cy="152" r="5" fill="${c}"/>`,
    // 9 Ponytail
    `<path d="M50 78 Q50 44 100 34 Q150 44 150 78" fill="${c}"/><ellipse cx="100" cy="32" rx="10" ry="8" fill="${c}"/><path d="M100 32 Q108 14 103 2 Q100 10 97 2 Q92 14 100 32" fill="${c}"/>`,
    // 10 Space Buns
    `<path d="M50 78 Q50 44 100 34 Q150 44 150 78" fill="${c}"/><circle cx="58" cy="56" r="18" fill="${c}"/><circle cx="142" cy="56" r="18" fill="${c}"/>`,
    // 11 Mohawk
    `<path d="M88 48 Q92 8 100 2 Q108 8 112 48" fill="${c}"/><path d="M90 55 Q95 25 100 20 Q105 25 110 55" fill="${c}"/>`,
    // 12 Bald
    '',
  ];

  const safeIndex = Math.max(0, Math.min(i, styles.length - 1));
  return styles[safeIndex];
}

export function drawHair(i: number, color: string, headType: number): string {
  return headType === 0 ? drawHairA(i, color) : drawHairB(i, color);
}
