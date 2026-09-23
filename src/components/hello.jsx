import { TypeAnimation } from 'react-type-animation';

function HelloIntro() {
    return (
        <div className="h-screen flex items-center justify-center bg-black">
            <TypeAnimation
                sequence={['HELLO']}
                speed={1}     // 👈 increase speed (higher = faster)
                repeat={0}
                wrapper="span"
                cursor={true}
                className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-green-500 to-purple-500 bg-clip-text text-transparent animate-gradient"
            />

        </div>
    );
}

export default HelloIntro;