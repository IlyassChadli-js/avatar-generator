import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'error';
  onClose?: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success' }) => {
  if (!message) return null;

  const isSuccess = type === 'success';

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-5 py-3 rounded-xl border-[3px] border-[#442831] bg-white text-[#442831] font-bold text-sm shadow-[4px_4px_0px_#442831] animate-bounce"
    >
      {isSuccess ? (
        <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
      ) : (
        <AlertCircle size={18} className="text-amber-600 shrink-0" />
      )}
      <span>{message}</span>
    </div>
  );
};
