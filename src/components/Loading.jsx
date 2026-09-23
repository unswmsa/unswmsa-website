import { useState, useEffect } from 'react';
import logo from '../assets/shared/logo.png';

const Loading = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onFinish, 500);
    }, 2200);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="relative flex flex-col items-center justify-center">
        <div className="absolute w-48 h-48 rounded-full blur-3xl opacity-[0.04] bg-white animate-pulse" />
        <img
          src={logo}
          alt="UNSWMSA logo"
          className="relative w-40 animate-[spin-in_1s_ease-out_forwards]"
        />
        <p className="relative text-white text-sm mt-4 opacity-0 animate-[fade-up_0.6s_ease-out_0.8s_forwards]">
          Assalamu'alaykum
        </p>
      </div>
    </div>
  );
};

export default Loading;