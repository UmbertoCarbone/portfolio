import { useEffect } from "react";
import { X } from "lucide-react";

interface MediaModalProps {
  url: string;
  type: "image" | "video";
  alt?: string;
  onClose: () => void;
}

export default function VideoModal({ url, type, alt, onClose }: MediaModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 "
      onClick={onClose}
    >
      <div
        className="flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {/* Bottone chiusura attaccato al media */}
          <button
            className="absolute -top-14 left-2 bg-red-900/60 hover:bg-red-700/70 rounded-full p-2 text-white/80 hover:text-white shadow-lg z-20 transition-colors"
            onClick={onClose}
            aria-label="Chiudi"
          >
            <X size={28} />
          </button>
          {type === "video" ? (
            <div className="w-full max-w-5xl rounded-xl  shadow-xl overflow-hidden " style={{ aspectRatio: '16/9' }}>
              <video
                src={url}
                controls
                autoPlay
                className="w-full h-full object-contain bg-transparent"
              />
            </div>
          ) : (
            <img
              src={url}
              alt={alt ?? ''}
              className="max-h-[85vh] max-w-full w-auto object-contain rounded-xl"
            />
          )}
        </div>
      </div>
    </div>
  );
}
