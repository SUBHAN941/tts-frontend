function CopyButton({ text }) {
  const copyText = async () => {
    await navigator.clipboard.writeText(text);
    alert("Text copied");
  };

  return (
    <button
      onClick={copyText}
      className="
        bg-slate-700
        hover:bg-slate-600
        px-4
        py-2
        rounded-lg
      "
    >
      Copy Text
    </button>
  );
}

export default CopyButton;