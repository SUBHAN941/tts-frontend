function VoiceSelector({
  voices,
  voice,
  setVoice,
}) {
  return (
    <div>
      <label className="block mb-2 font-medium">
        Voice
      </label>

      <select
        value={voice}
        onChange={(e) =>
          setVoice(e.target.value)
        }
        className="
          w-full
          bg-slate-800
          border
          border-slate-700
          rounded-xl
          p-3
        "
      >
        <optgroup label="Female Voices">
          {voices.female?.map(
            (item) => (
              <option
                key={item.id}
                value={item.id}
              >
                {item.name}
              </option>
            )
          )}
        </optgroup>

        <optgroup label="Male Voices">
          {voices.male?.map(
            (item) => (
              <option
                key={item.id}
                value={item.id}
              >
                {item.name}
              </option>
            )
          )}
        </optgroup>
      </select>
    </div>
  );
}

export default VoiceSelector;