import { TypeAnimation } from "react-type-animation";

function HelloIntro() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <TypeAnimation
        sequence={["HELLO"]}
        speed={120}
        repeat={0}
        cursor={false}
        wrapper="span"
        className="
          text-4xl  
          sm:text-5xl  
          md:text-6xl  
          lg:text-7xl  
          xl:text-8xl  
          font-bold  
          text-center
          bg-gradient-to-r from-[#00E6FF] via-[#08DEC9] to-[#32F6AA]
          bg-clip-text 
          text-transparent
          drop-shadow-[0_0_15px_#08DEC9]
        "
      />
    </div>
  );
}

export default HelloIntro;