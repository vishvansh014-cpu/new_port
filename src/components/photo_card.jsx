import React from 'react';
import photo from '../assets/photo.png';

const PhotoCard = () => {
  return (
    <div className="flex justify-end">

      <div className="relative w-[360px] rounded-2xl p-[1px] bg-gradient-to-br from-yellow-300 via-orange-600 to-white">

        {/* Inner Card */}
        <div className="bg-[#0b0f17]/80 backdrop-blur-xl rounded-2xl p-5 text-white shadow-2xl">

          {/* Image */}
          <div className="w-full h-80 rounded-xl overflow-hidden">
            <img
              src={photo}
              alt="Profile"
              className="w-full h-full object-cover object-center rounded-xl transition duration-500 hover:scale-105"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6 text-center">

            <div className="bg-white/5 border border-white/10 rounded-xl py-3">
              <h3 className="text-xl font-bold text-green-400">3+</h3>
              <p className="text-xs text-gray-400">Projects</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl py-3">
              <h3 className="text-xl font-bold text-blue-400">150+</h3>
              <p className="text-xs text-gray-400">DSA</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl py-3">
              <h3 className="text-xl font-bold text-purple-400">AIML</h3>
              <p className="text-xs text-gray-400">Focus</p>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default PhotoCard;