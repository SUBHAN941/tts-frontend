import { useEffect, useState } from "react";

import Header from "../components/Header/Header";
import TextInput from "../components/TextInput/TextInput";
import VoiceSelector from "../components/VoiceSelector/VoiceSelector";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import DownloadButton from "../components/DownloadButton/DownloadButton";

import socket from "../services/socket";
import {
  getVoices,
  generateSpeech,
} from "../services/ttsService";

function Home() {
  const [text, setText] =
    useState("");

  const [voice, setVoice] =
    useState("af_heart");
const [stats, setStats] =
  useState(null);
  const [voices, setVoices] =
    useState({
      female: [],
      male: [],
    });

  const [audioUrl, setAudioUrl] =
    useState("");
const [chunkInfo,
setChunkInfo] =
useState(null);
  const [loading, setLoading] =
    useState(false);
useEffect(() => {

  socket.on(
    "chunk-progress",
    (data) => {

      console.log(
        "Chunk Update:",
        data
      );

    }
  );

  return () => {

    socket.off(
      "chunk-progress"
    );

  };

}, []);
  useEffect(() => {

  socket.on(
    "chunk-progress",
    (data) => {

      setChunkInfo(
        data
      );

    }
  );

  return () => {
    socket.off(
      "chunk-progress"
    );
  };

}, []);

  const loadVoices =
    async () => {
      const data =
        await getVoices();

      setVoices(data);
    };

 const handleGenerate =
  async () => {
    try {
      setLoading(true);

      const response =
        await generateSpeech({
          text,
          voice,
        });

      setStats(response);

      setAudioUrl(
        response.audioUrl
      );

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="min-h-screen bg-slate-950 text-white">
    <div className="max-w-5xl mx-auto px-6 py-10">

      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-3">
          AI Text To Speech
        </h1>

        <p className="text-slate-400">
          Generate realistic speech with Kokoro AI
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">

        <TextInput
          text={text}
          setText={setText}
        />

        <div className="mt-6">
          <VoiceSelector
            voices={voices}
            voice={voice}
            setVoice={setVoice}
          />
        </div>

        <div className="mt-6">
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              disabled:bg-slate-700
              text-white
              font-semibold
              py-3
              rounded-xl
              transition
            "
          >
            {loading
              ? "Generating..."
              : "Generate Audio"}
          </button>
          {
  chunkInfo && (
    <div
      className="
        bg-slate-800
        mt-4
        p-4
        rounded-xl
      "
    >
      <div>
        Chunk
        {" "}
        {
          chunkInfo.current
        }
        {" / "}
        {
          chunkInfo.total
        }
      </div>

      <div>
        Status:
        {" "}
        {
          chunkInfo.status
        }
      </div>
    </div>
  )
}
        </div>

        <div className="mt-6">
          <ProgressBar
            loading={loading}
          />
        </div>
{
  stats && (
    <div
      className="
        mt-4
        grid
        grid-cols-3
        gap-4
      "
    >
      <div
        className="
          bg-slate-800
          p-4
          rounded-xl
        "
      >
        Characters

        <div>
          {stats.characters}
        </div>
      </div>

      <div
        className="
          bg-slate-800
          p-4
          rounded-xl
        "
      >
        Chunks

        <div>
          {stats.chunks}
        </div>
      </div>

      <div
        className="
          bg-slate-800
          p-4
          rounded-xl
        "
      >
        Voice

        <div>
          {stats.voice}
        </div>
      </div>
    </div>
  )
}
        <div className="mt-6">
          <AudioPlayer
            audioUrl={audioUrl}
          />
        </div>

        <div className="mt-4">
          <DownloadButton
            audioUrl={audioUrl}
          />
        </div>

      </div>
    </div>
  </div>
);
}

export default Home;