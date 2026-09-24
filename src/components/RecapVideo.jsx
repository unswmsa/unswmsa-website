import { useState, useRef } from 'react';
import { Icon } from '@iconify/react';

const RecapVideo = ({ src }) => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className="w-full h-64 sm:h-80 object-cover rounded-lg"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={src} type="video/mp4" />
      </video>
      <button
        onClick={toggleMute}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
        className="absolute bottom-3 right-3 bg-black/60 rounded-full p-2 hover:bg-black/80 transition-colors"
      >
        <Icon icon={muted ? 'ph:speaker-slash-fill' : 'ph:speaker-high-fill'} className="w-5 h-5 text-white" />
      </button>
    </div>
  );
};

export default RecapVideo;