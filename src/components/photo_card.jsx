import React from 'react';
import photo from '../assets/photo.png';

const PhotoCard = () => {
  return (
    <div className='justify-end flex '>
      <div className="w-[360px] bg-[#0b0f17] border border-[#1e293b] rounded-2xl p-4 flex flex-col gap-4 text-white shadow-xl">

        {/* Top Image Box */}
        <div className="w-full h-80 rounded-xl overflow-hidden border border-[#1e293b] bg-white">
          <img
            src={photo}
            alt="Profile"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Bottom Stats Grid */}
        <div className="grid grid-cols-3 gap-2">

          {/* Stat Item 1 */}
          <div className="bg-[#111827] border border-[#1e293b] rounded-lg p-2.5 text-center flex flex-col justify-center">
            <p className="text-sm font-bold text-white">3</p>
            <p className="text-[10px] tracking-wider text-gray-400 font-semibold mt-0.5">PROJECTS</p>
          </div>

          {/* Stat Item 2 */}
          <div className="bg-[#111827] border border-[#1e293b] rounded-lg p-2.5 text-center flex flex-col justify-center">
            <p className="text-sm font-bold text-white">DSA</p>
            <p className="text-[10px] tracking-wider text-gray-400 font-semibold mt-0.5">PROBLEM</p>
          </div>

          {/* Stat Item 3 */}
          <div className="bg-[#111827] border border-[#1e293b] rounded-lg p-2.5 text-center flex flex-col justify-center">
            <p className="text-sm font-bold text-white">web dev</p>
            <p className="text-[10px] tracking-wider text-gray-400 font-semibold mt-0.5">FOCUS</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PhotoCard;