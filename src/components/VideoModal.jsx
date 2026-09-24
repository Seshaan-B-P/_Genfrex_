import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, videoUrl, title = "Cinematic Experience" }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Format embed url with autoplay
  const getEmbedUrl = (url) => {
    if (!url) return "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
    if (url.includes('embed')) return url.includes('autoplay') ? url : `${url}?autoplay=1`;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}?autoplay=1&rel=0`;
    }
    return url;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="fixed inset-0" 
        onClick={onClose}
        aria-label="Close modal overlay"
      />
      <div className="relative w-full max-w-5xl bg-[#131725] border border-[#0052FF]/30 rounded-2xl overflow-hidden shadow-2xl shadow-[#0052FF]/10 z-10">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#0052FF]/20 bg-[#101424]">
          <h3 className="text-white font-medium text-lg">{title}</h3>
          <button 
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#181E30] hover:bg-[#0052FF]/20 flex items-center justify-center text-white/70 hover:text-white transition-colors border border-[#0052FF]/20"
            aria-label="Close video"
          >
            <X size={20} />
          </button>
        </div>
        <div className="relative w-full aspect-video bg-black flex items-center justify-center">
          {videoUrl && (videoUrl.endsWith('.mp4') || videoUrl.endsWith('.webm') || videoUrl.endsWith('.mov') || videoUrl.includes('.mp4')) ? (
            <video
              src={videoUrl}
              controls
              autoPlay
              className="w-full h-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <iframe
              src={getEmbedUrl(videoUrl)}
              title={title}
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
}
