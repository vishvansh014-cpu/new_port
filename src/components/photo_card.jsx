import React from 'react';
import photo from '../assets/photo.png';

const PhotoCard = () => {
  return (
    <div className='justify-end flex '>
      <div className="w-[360px] bg-[#0b0f17] border border-[#1e293b] rounded-2xl p-4 flex flex-col gap-4 text-white shadow-xl">

        {/* Top Image Box */}
        <div className="w-full h-80 rounded-xl overflow-hidden border border-[#1e293b]">
          <img
            src={photo}
            alt="Profile"
            className="w-full h-full object-cover object-center rounded-2xl"
          />
        </div>

        {/* Bottom Stats Grid */}
        <div className="flex gap-4 mt-6">
          <div>
            <h3>3</h3>
            <p>Projects</p>
          </div>

          <div>
            <h3>150+</h3>
            <p>DSA Problems</p>
          </div>

          <div>
            <h3>AIML</h3>
            <p>Focus</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PhotoCard;