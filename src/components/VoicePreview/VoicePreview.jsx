import { generateSpeech }
from "../services/ttsService";

function VoicePreview({
  voice,
}) {

  const previewVoice =
    async () => {

      const response =
        await generateSpeech({
          text:
            "Hello, this is a preview of my voice.",
          voice,
        });

      const audio =
        new Audio(
          response.audioUrl
        );

      audio.play();
    };

  return (
    <button
      onClick={previewVoice}
      className="
        bg-purple-600
        px-3
        py-2
        rounded-lg
      "
    >
      Preview Voice
    </button>
  );
}

export default VoicePreview;