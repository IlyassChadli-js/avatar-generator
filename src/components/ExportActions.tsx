import React, { useState } from 'react';
import { Download, Copy, Share2, FileCode, Check } from 'lucide-react';
import type { AvatarState } from '../types/avatar';
import { exportAvatarAsPNG } from '../utils/exportPNG';
import { exportAvatarAsSVG } from '../utils/exportSVG';
import { copyAvatarAsPNG } from '../utils/copyAvatar';
import { copyShareLink } from '../utils/shareAvatar';

interface ExportActionsProps {
  state: AvatarState;
  onNotify: (message: string, type?: 'success' | 'error') => void;
}

export const ExportActions: React.FC<ExportActionsProps> = ({ state, onNotify }) => {
  const [isExportingPng, setIsExportingPng] = useState(false);
  const [isCopyingPng, setIsCopyingPng] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedPng, setCopiedPng] = useState(false);

  const handleDownloadPNG = async () => {
    try {
      setIsExportingPng(true);
      await exportAvatarAsPNG(state, 512, 'avatar.png');
      onNotify('Avatar PNG downloaded!');
    } catch {
      onNotify('Failed to export PNG. Please try again.', 'error');
    } finally {
      setIsExportingPng(false);
    }
  };

  const handleDownloadSVG = () => {
    try {
      exportAvatarAsSVG(state, 'avatar.svg');
      onNotify('Avatar SVG downloaded!');
    } catch {
      onNotify('Failed to export SVG.', 'error');
    }
  };

  const handleCopyPNG = async () => {
    try {
      setIsCopyingPng(true);
      const res = await copyAvatarAsPNG(state);
      if (res.success) {
        setCopiedPng(true);
        setTimeout(() => setCopiedPng(false), 2000);
        onNotify('Copied!');
      } else {
        onNotify(res.message, 'error');
      }
    } catch {
      onNotify('Could not copy image to clipboard.', 'error');
    } finally {
      setIsCopyingPng(false);
    }
  };

  const handleCopyShareLink = async () => {
    try {
      const ok = await copyShareLink(state);
      if (ok) {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
        onNotify('Link copied!');
      } else {
        onNotify('Could not copy link.', 'error');
      }
    } catch {
      onNotify('Failed to copy link.', 'error');
    }
  };

  return (
    <div className="w-full pt-4 mt-2 border-t-2 border-gray-100 flex flex-col gap-2.5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {/* Download PNG */}
        <button
          type="button"
          onClick={handleDownloadPNG}
          disabled={isExportingPng}
          className="canva-button-secondary py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm cursor-pointer disabled:opacity-50"
        >
          <Download size={16} />
          <span>{isExportingPng ? 'Generating...' : 'Download PNG'}</span>
        </button>

        {/* Download SVG */}
        <button
          type="button"
          onClick={handleDownloadSVG}
          className="canva-button-secondary py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm cursor-pointer"
        >
          <FileCode size={16} />
          <span>Download SVG</span>
        </button>

        {/* Copy PNG */}
        <button
          type="button"
          onClick={handleCopyPNG}
          disabled={isCopyingPng}
          className="canva-button-secondary py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm cursor-pointer disabled:opacity-50"
        >
          {copiedPng ? (
            <Check size={16} className="text-emerald-600" />
          ) : (
            <Copy size={16} />
          )}
          <span>{copiedPng ? 'Copied!' : 'Copy PNG'}</span>
        </button>

        {/* Copy Share Link */}
        <button
          type="button"
          onClick={handleCopyShareLink}
          className="canva-button-secondary py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm cursor-pointer"
        >
          {copiedLink ? (
            <Check size={16} className="text-emerald-600" />
          ) : (
            <Share2 size={16} />
          )}
          <span>{copiedLink ? 'Link copied!' : 'Copy Share Link'}</span>
        </button>
      </div>
    </div>
  );
};
