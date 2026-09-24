import { TypeAnimation } from 'react-type-animation';

function HelloIntro() {
  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <TypeAnimation
        sequence={['HELLO']}
        speed={120}        // faster typing
        repeat={0}
        cursor={false}     // ❗ removes that blinking line
        wrapper="span"
        className="text-5xl font-bold text-blue-500"
      />
    </div>
  );
}

export default HelloIntro;