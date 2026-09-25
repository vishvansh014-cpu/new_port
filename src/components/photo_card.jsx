import React from 'react';
import photo from '../assets/photo.png';


const PhotoCard = () => {
  return (
    
    <div className="flex justify-end">

      <div className="relative w-[360px] rounded-2xl p-[1px] bg-gradient-to-br from-blue-400 to-blue-500 via-blue-300">

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
          <div className="grid-cols-3 flex justify-center gap-4 mt-6 text-center">

            <div className="bg-black/75  text-2xl  rounded-xl py-3">
              
                <h2>#Open To Work</h2>
              
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default PhotoCard;