import React from 'react';
import { generateAvatarInnerSvg } from '../avatar/renderAvatarSvg';
import { BACKGROUND_OPTIONS } from '../data/avatarOptions';
import type { AvatarState } from '../types/avatar';

interface AvatarProps {
  state: AvatarState;
  isShaking?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({ state, isShaking }) => {
  const bgOpt = BACKGROUND_OPTIONS[state.bg] ?? BACKGROUND_OPTIONS[0];
  const isTransparent = bgOpt.isTransparent || bgOpt.color === 'transparent';
  const innerSvgMarkup = generateAvatarInnerSvg(state);

  return (
    <div
      id="avatar-container"
      role="img"
      aria-label="Avatar preview"
      className={`w-[240px] h-[240px] xs:w-[260px] xs:h-[260px] sm:w-[280px] sm:h-[280px] rounded-full overflow-hidden relative flex items-center justify-center border-[3px] border-[#442831] ${
        isTransparent ? 'bg-checkered' : ''
      } ${isShaking ? 'shake' : ''}`}
      style={{
        backgroundColor: isTransparent ? 'transparent' : bgOpt.color,
      }}
    >
      <svg
        id="avatar-svg"
        viewBox="0 0 200 200"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        dangerouslySetInnerHTML={{ __html: innerSvgMarkup }}
      />
    </div>
  );
};
