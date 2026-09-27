import React, { useState, useEffect, useCallback } from 'react';
import { Avatar } from './components/Avatar';
import { AvatarEditor } from './components/AvatarEditor';
import { Toast } from './components/Toast';
import {
  ACC_NAMES,
  BACKGROUND_OPTIONS,
  DEFAULT_AVATAR_STATE,
  EYE_NAMES,
  HAIR_COLOR_NAMES,
  HAIR_NAMES,
  HEAD_TYPES,
  MOUTH_NAMES,
  SKIN_NAMES,
} from './data/avatarOptions';
import type { AvatarState } from './types/avatar';
import { parseAvatarFromUrl, syncUrlWithAvatar } from './utils/shareAvatar';
import { loadAvatarFromStorage, saveAvatarToStorage } from './utils/storage';

export const App: React.FC = () => {
  // Determine initial state based on priority:
  // 1. Shared URL params
  // 2. Saved localStorage state
  // 3. Default state
  const [avatarState, setAvatarState] = useState<AvatarState>(() => {
    const urlParams = parseAvatarFromUrl();
    if (urlParams) {
      return {
        ...DEFAULT_AVATAR_STATE,
        ...urlParams,
      };
    }

    const savedState = loadAvatarFromStorage();
    if (savedState) {
      return savedState;
    }

    return DEFAULT_AVATAR_STATE;
  });

  const [isShaking, setIsShaking] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const showNotification = useCallback((message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
  }, []);

  // Automatically clear toast after 2.5 seconds
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      setToast(null);
    }, 2500);
    return () => clearTimeout(timer);
  }, [toast]);

  // Whenever avatar state changes:
  // - update URL search query without reload
  // - persist to localStorage
  const handleStateChange = useCallback((newState: AvatarState) => {
    setAvatarState(newState);
    saveAvatarToStorage(newState);
    syncUrlWithAvatar(newState);
  }, []);

  // Listen for browser popstate (back/forward navigation)
  useEffect(() => {
    const handlePopState = () => {
      const fromUrl = parseAvatarFromUrl();
      if (fromUrl) {
        setAvatarState((prev) => ({
          ...prev,
          ...fromUrl,
        }));
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Randomize all features safely within bounds
  const handleRandomize = useCallback(() => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 400);

    const randomState: AvatarState = {
      head: Math.floor(Math.random() * HEAD_TYPES.length),
      skin: Math.floor(Math.random() * SKIN_NAMES.length),
      hair: Math.floor(Math.random() * HAIR_NAMES.length),
      hairColor: Math.floor(Math.random() * HAIR_COLOR_NAMES.length),
      eyes: Math.floor(Math.random() * EYE_NAMES.length),
      mouth: Math.floor(Math.random() * MOUTH_NAMES.length),
      acc: Math.floor(Math.random() * ACC_NAMES.length),
      bg: Math.floor(Math.random() * BACKGROUND_OPTIONS.length),
    };

    handleStateChange(randomState);
  }, [handleStateChange]);

  return (
    <div className="w-full min-h-screen px-4 pt-8 sm:pt-16 pb-12 flex flex-col justify-center">
      <main className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Card: Avatar Preview & Identity */}
        <div
          data-template-id="avatar-card"
          className="canva-card w-full rounded-2xl p-6 sm:p-8 flex flex-col justify-between items-center border-[3px] border-[#442831] bg-white min-h-[480px]"
        >
          <header className="text-center w-full">
            <h1
              data-template-id="avatar-title"
              className="text-[#442831] font-light text-5xl sm:text-6xl md:text-7xl leading-tight sm:leading-none tracking-tight select-none"
              style={{ fontWeight: 300 }}
            >
              Avatar
              <br />
              Generator
            </h1>
            <p
              data-template-id="avatar-subtitle"
              className="mt-2 text-[#442831] text-lg sm:text-xl font-normal select-none"
            >
              Create your avatar in seconds.
            </p>
          </header>

          <div className="flex flex-col items-center justify-center my-auto py-6">
            <Avatar state={avatarState} isShaking={isShaking} />
          </div>
        </div>

        {/* Right Card: Customization Controls & Export Actions */}
        <AvatarEditor
          state={avatarState}
          onChange={handleStateChange}
          onRandomize={handleRandomize}
          onNotify={showNotification}
        />
      </main>

      {/* Lightweight feedback toast */}
      <Toast message={toast?.message ?? null} type={toast?.type} />
    </div>
  );
};

export default App;
