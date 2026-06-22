function TextInput({
  text,
  setText,
}) {

  const words =
    text.trim()
      ? text.trim().split(/\s+/).length
      : 0;

  const readingTime =
    Math.ceil(words / 200);

  return (
    <div>
      <label className="block mb-2 font-medium">
        Text
      </label>

      <textarea
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
        rows={10}
        placeholder="Type or paste text..."
        className="
          w-full
          bg-slate-800
          border
          border-slate-700
          rounded-xl
          p-4
          outline-none
          focus:border-blue-500
        "
      />

      <div className="mt-2 text-sm text-slate-400">
        {text.length} / 100000 characters
      </div>

      <div className="text-sm text-slate-400">
        Reading Time: {readingTime} min
      </div>
    </div>
  );
}

export default TextInput;