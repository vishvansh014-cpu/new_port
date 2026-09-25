import React from 'react';
import photo from '../assets/photo.png';
import { MagicCard } from './UI/magic-card';

const PhotoCard = () => {
  return (
    <div className="flex justify-end">
      {/* MagicCard Wrapper */}
      <MagicCard
        gradientColor="#60a5fa"
        gradientSize={150}
        className="w-[360px] p-0"
      >
        {/* Inner Card Content */}
        <div className="flex flex-col h-full justify-between">
          
          {/* Image Container */}
          <div className="w-full h-80 rounded-xl overflow-hidden">
            <img
              src={photo}
              alt="Profile"
              className="w-full h-full object-cover object-center rounded-xl transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Status Badge */}
          <div className="mt-6 flex justify-center">
            <div className="bg-black/75 text-white font-semibold text-lg rounded-xl py-3 px-6 w-full text-center border border-white/10 tracking-wide">
              #Open To Work
            </div>
          </div>

        </div>
      </MagicCard>
    </div>
  );
};

export default PhotoCard;