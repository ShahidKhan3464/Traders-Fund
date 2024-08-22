import React, { useRef, useState } from 'react';
import video from '../../images/video.m4v';

const Video = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="flex overflow-hidden z-0 flex-col justify-center px-24 py-20 w-full bg-[#141518] min-h-[840px] max-md:px-5 max-md:py-10 max-md:max-w-full max-md:min-h-[300px]">
      <div className="flex relative flex-col flex-1 justify-center items-center w-full rounded-3xl max-md:max-w-full">
        <video
          loop
          muted
          src={video}
          ref={videoRef}
          type="video/mp4"
          className="rounded-3xl absolute top-2/4 left-2/4 z-0 -translate-x-2/4 -translate-y-2/4 max-w-[1240px] w-[1240px] max-md:max-w-full"
        />
        <button
          type="button"
          onClick={handlePlayPause}
          className="flex justify-center font-matter font-bold text-white text-3xl items-center opacity-90 rounded-full bg-[#262729] h-[75px] w-[75px] min-h-[75px] max-md:px-5"
        >
          {!isPlaying ? (
            <img
              alt="img"
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bb4fd97a5dfe27d05835a0cdc3cce83de3c7bbd28d5deb12ed0885001dbf080?apiKey=227fffdadf2841c0827fed858fc04b84&"
              className="object-contain my-auto w-[20px]"
            />
          ) : (
            'II'
          )}
        </button>
      </div>
    </section>
  );
};

export default Video;
