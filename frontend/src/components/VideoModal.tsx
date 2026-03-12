import { useEffect } from "react";
import { X } from "lucide-react";
import "../css/videoModal.css";

interface MediaModalProps {
  url: string;
  type: "image" | "video";
  alt?: string;
  onClose: () => void;
}

export default function VideoModal({
  url,
  type,
  alt,
  onClose,
}: MediaModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <button className="modal-close-btn" onClick={onClose} aria-label="Chiudi">
        <X size={28} />
      </button>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div>
          {type === "video" ? (
            <div className="modal-video-wrapper">
              <video src={url} controls autoPlay className="modal-video" />
            </div>
          ) : (
            <img src={url} alt={alt ?? ""} className="modal-image" />
          )}
        </div>
      </div>
    </div>
  );
}
