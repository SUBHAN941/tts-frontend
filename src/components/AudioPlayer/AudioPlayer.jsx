function AudioPlayer({
  audioUrl,
}) {
  if (!audioUrl) return null;

  return (
    <div
      className="
        bg-slate-800
        p-4
        rounded-xl
      "
    >
      <h3 className="mb-3">
        Generated Audio
      </h3>

      <audio
        controls
        src={audioUrl}
        className="w-full"
      />
    </div>
  );
}

export default AudioPlayer;