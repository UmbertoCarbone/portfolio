import { PlayIcon, PauseIcon } from "lucide-react";

interface PauseFrameButtonProps {
  isPaused: boolean;
  onToggle: () => void;
}

export default function PauseFrameButton({ isPaused, onToggle }: PauseFrameButtonProps) {
  return (
    <button
      onClick={onToggle}
      className="absolute top-6 left-6 z-50 p-3 bg-slate-800/40 hover:bg-violet-600/60 text-white rounded-full transition-all border border-slate-700 backdrop-blur-md"
      aria-label={isPaused ? "Play animation" : "Pause animation"}
    >
      {isPaused ? (
        <PlayIcon size={20} className="fill-current" />
      ) : (
        <PauseIcon size={20} />
      )}
    </button>
  );
}
