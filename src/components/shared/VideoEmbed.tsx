'use client'

import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

interface VideoEmbedProps {
  url: string;
  title?: string;
  className?: string;
  caption?: string;
}

const isYouTube = (url: string) =>
  url.includes("youtube.com") || url.includes("youtu.be");

const getYouTubeEmbedUrl = (url: string, start?: number) => {
  const idMatch =
    url.match(/v=([^&]+)/) || url.match(/youtu\.be\/([^?]+)/);
  const videoId = idMatch?.[1];
  if (!videoId) return url;

  const startParam = start ? `&start=${Math.floor(start)}` : "";
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&enablejsapi=1${startParam}`;
};

export default function VideoEmbed({
  url,
  title = "Demo Video",
  className = "",
}: VideoEmbedProps) {
  const isPlaceholder = !url || url === "#";
  const isYT = isYouTube(url);

  const inlineVideoRef = useRef<HTMLVideoElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [expanded, setExpanded] = useState(false);

  // Track inline playback time
  useEffect(() => {
    if (!inlineVideoRef.current) return;

    const video = inlineVideoRef.current;
    const update = () => setCurrentTime(video.currentTime);

    video.addEventListener("timeupdate", update);
    return () => video.removeEventListener("timeupdate", update);
  }, []);

  const openExpanded = () => {
    if (inlineVideoRef.current) {
      setCurrentTime(inlineVideoRef.current.currentTime);
      inlineVideoRef.current.pause();
    }
    setExpanded(true);
  };

  const closeExpanded = () => {
    setExpanded(false);
    if (inlineVideoRef.current) {
      inlineVideoRef.current.currentTime = currentTime;
      inlineVideoRef.current.play();
    }
  };

  return (
    <>
      {/* Inline player */}
      <div
        className={`relative overflow-hidden rounded-sm ${className}`}
        style={{
          aspectRatio: "16 / 9",
          backgroundColor: "var(--color-accent-cream)",
          border: "1px solid var(--color-border)",
        }}
      >
        {isPlaceholder ? (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-sm text-muted">{title}</span>
          </div>
        ) : isYT ? (
          <iframe
            src={getYouTubeEmbedUrl(url)}
            className="h-full w-full pointer-events-none"
            title={title}
            allow="autoplay; encrypted-media"
          />
        ) : (
          <video
            ref={inlineVideoRef}
            src={url}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        )}

        {!isPlaceholder && (
          <button
            onClick={openExpanded}
            className="cursor-pointer absolute bottom-3 right-3 rounded-md bg-black/60 px-3 py-1.5 text-xs text-white backdrop-blur hover:bg-black/80"
          >
            Expand
          </button>
        )}
      </div>

      {/* Expanded modal */}
      {expanded &&
        ReactDOM.createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={closeExpanded}
          >
            <div
              className="relative w-[90vw] max-w-6xl aspect-video rounded-lg bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeExpanded}
                className="absolute right-3 top-3 z-10 rounded-full bg-black/70 px-3 py-1 text-sm text-white hover:bg-black"
              >
                ✕
              </button>

              {isYT ? (
                <iframe
                  src={getYouTubeEmbedUrl(url, currentTime)}
                  className="h-full w-full rounded-lg"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <video
                  src={url}
                  className="h-full w-full rounded-lg"
                  controls
                  autoPlay
                  onLoadedMetadata={(e) => {
                    e.currentTarget.currentTime = currentTime;
                  }}
                />
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
