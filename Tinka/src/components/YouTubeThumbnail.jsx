import React, { useState } from "react";

const YouTubeThumbnail = ({ videoId }) => {
  const [isPlayerActive, setPlayerActive] = useState(false);

  const handlePlay = () => {
    setPlayerActive(true);
  };

  return (
    <div className="relative youtube-container w-full aspect-video rounded-lg overflow-hidden shadow-lg">
      {isPlayerActive ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      ) : (
        <>
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="Video Thumbnail"
            className="w-full h-full object-cover"
          />
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold"
          >
            ▶
          </button>
        </>
      )}
    </div>
  );
};

export default YouTubeThumbnail;
