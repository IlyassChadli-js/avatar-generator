import React from 'react';
import { Dices } from 'lucide-react';
import {
  ACC_NAMES,
  BACKGROUND_OPTIONS,
  EYE_NAMES,
  HAIR_COLOR_NAMES,
  HAIR_NAMES,
  HEAD_TYPES,
  MOUTH_NAMES,
  SKIN_NAMES,
} from '../data/avatarOptions';
import type { AvatarState } from '../types/avatar';
import { OptionControl } from './OptionControl';
import { ExportActions } from './ExportActions';

interface AvatarEditorProps {
  state: AvatarState;
  onChange: (newState: AvatarState) => void;
  onRandomize: () => void;
  onNotify: (message: string, type?: 'success' | 'error') => void;
}

export const AvatarEditor: React.FC<AvatarEditorProps> = ({
  state,
  onChange,
  onRandomize,
  onNotify,
}) => {
  const cycle = (key: keyof AvatarState, dir: 1 | -1, maxLen: number) => {
    const nextVal = (state[key] + dir + maxLen) % maxLen;
    onChange({
      ...state,
      [key]: nextVal,
    });
  };

  const bgOpt = BACKGROUND_OPTIONS[state.bg] ?? BACKGROUND_OPTIONS[0];

  return (
    <div
      data-template-id="controls-card"
      className="canva-card w-full rounded-2xl p-5 sm:p-6 flex flex-col gap-2.5 justify-center border-[3px] border-[#442831] bg-white"
    >
      {/* Head Shape */}
      <OptionControl
        label="Head Shape"
        valueText={HEAD_TYPES[state.head]}
        onPrev={() => cycle('head', -1, HEAD_TYPES.length)}
        onNext={() => cycle('head', 1, HEAD_TYPES.length)}
      />

      {/* Skin Tone */}
      <OptionControl
        label="Skin Tone"
        valueText={SKIN_NAMES[state.skin]}
        onPrev={() => cycle('skin', -1, SKIN_NAMES.length)}
        onNext={() => cycle('skin', 1, SKIN_NAMES.length)}
      />

      {/* Hair Style */}
      <OptionControl
        label="Hair Style"
        valueText={HAIR_NAMES[state.hair]}
        onPrev={() => cycle('hair', -1, HAIR_NAMES.length)}
        onNext={() => cycle('hair', 1, HAIR_NAMES.length)}
      />

      {/* Hair Color */}
      <OptionControl
        label="Hair Color"
        valueText={HAIR_COLOR_NAMES[state.hairColor]}
        onPrev={() => cycle('hairColor', -1, HAIR_COLOR_NAMES.length)}
        onNext={() => cycle('hairColor', 1, HAIR_COLOR_NAMES.length)}
      />

      {/* Eyes */}
      <OptionControl
        label="Eyes"
        valueText={EYE_NAMES[state.eyes]}
        onPrev={() => cycle('eyes', -1, EYE_NAMES.length)}
        onNext={() => cycle('eyes', 1, EYE_NAMES.length)}
      />

      {/* Mouth */}
      <OptionControl
        label="Mouth"
        valueText={MOUTH_NAMES[state.mouth]}
        onPrev={() => cycle('mouth', -1, MOUTH_NAMES.length)}
        onNext={() => cycle('mouth', 1, MOUTH_NAMES.length)}
      />

      {/* Accessories */}
      <OptionControl
        label="Accessories"
        valueText={ACC_NAMES[state.acc]}
        onPrev={() => cycle('acc', -1, ACC_NAMES.length)}
        onNext={() => cycle('acc', 1, ACC_NAMES.length)}
      />

      {/* Background */}
      <OptionControl
        label="Background"
        isColorSwatch
        swatchColor={bgOpt.color}
        isTransparent={bgOpt.isTransparent}
        swatchTitle={bgOpt.name}
        onPrev={() => cycle('bg', -1, BACKGROUND_OPTIONS.length)}
        onNext={() => cycle('bg', 1, BACKGROUND_OPTIONS.length)}
      />

      {/* Randomize Button */}
      <div className="mt-2">
        <button
          type="button"
          data-template-id="randomize-btn"
          onClick={onRandomize}
          className="canva-button w-full py-2.5 rounded-xl font-bold text-base flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow"
        >
          <Dices size={18} />
          <span>Randomize</span>
        </button>
      </div>

      {/* Export Section underneath the editor */}
      <ExportActions state={state} onNotify={onNotify} />
    </div>
  );
};
