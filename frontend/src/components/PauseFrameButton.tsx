import { PlayIcon, PauseIcon } from "lucide-react";

interface PauseFrameButtonProps {
  isPaused: boolean;
  onToggle: () => void;
}

export default function PauseFrameButton({
  isPaused,
  onToggle,
}: PauseFrameButtonProps) {
  return (
    <button
      onClick={onToggle}
      className="p-1.5 bg-slate-800/40 hover:bg-violet-500/60 text-white rounded-full transition-all border border-slate-700 backdrop-blur-md"
      aria-label={isPaused ? "Play animation" : "Pause animation"}
    >
      {isPaused ? <PlayIcon size={19} /> : <PauseIcon size={19} />}
    </button>
  );
}
