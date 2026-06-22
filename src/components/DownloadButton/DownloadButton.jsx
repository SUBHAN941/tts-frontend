function DownloadButton({
  audioUrl,
}) {
  if (!audioUrl) return null;

  return (
    <a
      href={audioUrl}
      download
      className="
        inline-block
        bg-green-600
        hover:bg-green-700
        px-4
        py-2
        rounded-lg
        text-white
        font-medium
      "
    >
      Download MP3
    </a>
  );
}

export default DownloadButton;