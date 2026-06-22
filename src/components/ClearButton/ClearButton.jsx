function ClearButton({
  setText,
  setAudioUrl,
}) {
  const clearAll = () => {
    setText("");
    setAudioUrl("");
  };

  return (
    <button
      onClick={clearAll}
      className="
        bg-red-600
        hover:bg-red-700
        px-4
        py-2
        rounded-lg
      "
    >
      Clear
    </button>
  );
}

export default ClearButton;