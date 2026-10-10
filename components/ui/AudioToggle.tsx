"use client";

import React, { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const toggleAtmosphere = () => {
    try {
      if (!isPlaying) {
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        // Create warm ambient drone (E major 9th harmonic chime chord)
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = "sine";
        osc.frequency.setValueAtTime(164.81, ctx.currentTime); // E3 root

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(450, ctx.currentTime);

        // Soft, gentle spa-level volume
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 3);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        oscillatorRef.current = osc;
        gainNodeRef.current = gain;
        setIsPlaying(true);
      } else {
        if (gainNodeRef.current && audioCtxRef.current) {
          gainNodeRef.current.gain.exponentialRampToValueAtTime(
            0.0001,
            audioCtxRef.current.currentTime + 1.2
          );
          setTimeout(() => {
            oscillatorRef.current?.stop();
            audioCtxRef.current?.close();
            setIsPlaying(false);
          }, 1300);
        } else {
          setIsPlaying(false);
        }
      }
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <button
      onClick={toggleAtmosphere}
      data-cursor="SOUND"
      aria-label={isPlaying ? "Mute atelier soundscape" : "Play ambient atelier soundscape"}
      className="group flex items-center gap-2 rounded-full border border-champagne/30 bg-canvas-light/80 px-3 py-1.5 backdrop-blur-md transition-all hover:border-champagne hover:bg-canvas-light"
    >
      {isPlaying ? (
        <Volume2 className="h-3.5 w-3.5 text-champagne-dark animate-pulse" />
      ) : (
        <VolumeX className="h-3.5 w-3.5 text-noir/60 group-hover:text-noir" />
      )}
      <span className="font-sans text-[10px] tracking-widest text-noir/70 uppercase group-hover:text-noir hidden sm:inline">
        {isPlaying ? "ATMOSPHERE ON" : "SOUNDSCAPE"}
      </span>
    </button>
  );
}
