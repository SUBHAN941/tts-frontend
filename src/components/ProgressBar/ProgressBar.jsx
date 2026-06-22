function ProgressBar({
  loading,
}) {
  if (!loading) return null;

  return (
    <div>
      <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
        <div className="h-full bg-blue-500 animate-pulse w-full" />
      </div>

      <p className="mt-2 text-sm text-slate-400">
        Generating audio...
      </p>
    </div>
  );
}

export default ProgressBar;