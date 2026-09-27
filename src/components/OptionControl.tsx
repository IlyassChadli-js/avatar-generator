import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface OptionControlProps {
  label: string;
  valueText?: string;
  onPrev: () => void;
  onNext: () => void;
  isColorSwatch?: boolean;
  swatchColor?: string;
  isTransparent?: boolean;
  swatchTitle?: string;
}

export const OptionControl: React.FC<OptionControlProps> = ({
  label,
  valueText,
  onPrev,
  onNext,
  isColorSwatch = false,
  swatchColor,
  isTransparent = false,
  swatchTitle,
}) => {
  return (
    <div className="flex items-center justify-between py-0.5">
      <span className="font-medium text-[#442831] text-sm w-24 sm:w-28 select-none">
        {label}
      </span>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onPrev}
          aria-label={`Previous ${label}`}
          className="ctrl-btn w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer border border-transparent hover:border-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#442831]"
        >
          <ChevronLeft size={16} className="text-[#442831]" />
        </button>

        <div className="w-24 text-center flex items-center justify-center">
          {isColorSwatch ? (
            <div className="flex items-center gap-1.5 justify-center" title={swatchTitle}>
              <span
                className={`w-6 h-6 rounded-full border-2 border-white shadow-sm inline-block ${
                  isTransparent ? 'bg-checkered' : ''
                }`}
                style={{
                  backgroundColor: isTransparent ? 'transparent' : swatchColor,
                }}
              />
              {isTransparent && (
                <span className="text-xs text-[#442831] font-medium hidden xs:inline">
                  Clear
                </span>
              )}
            </div>
          ) : (
            <span className="text-sm font-medium text-[#442831] truncate select-none block max-w-full px-1">
              {valueText}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={onNext}
          aria-label={`Next ${label}`}
          className="ctrl-btn w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer border border-transparent hover:border-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#442831]"
        >
          <ChevronRight size={16} className="text-[#442831]" />
        </button>
      </div>
    </div>
  );
};
