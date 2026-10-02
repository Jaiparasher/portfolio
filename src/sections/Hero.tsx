import { Leva } from 'leva';
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import Typewriter from 'typewriter-effect';
import Button from '@/components/Button';
import CanvasLoader from '@/components/Loading';
import HeroCamera from '@/components/HeroCamera';
import { Bio, calculateSizes } from '@/constants/index';
import { HackerRoom } from '@/components/HackerRoom';

const useViewportFlags = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return {
    isSmall: width > 0 && width <= 440,
    isMobile: width > 0 && width <= 768,
    isTablet: width > 0 && width > 768 && width <= 1024,
  };
};

const Hero = () => {
  const { isSmall, isMobile, isTablet } = useViewportFlags();
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    // position={[2,-3,0]} rotation={[0.1, -1.4, 0]}
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="relative z-10 w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 pointer-events-none">
        <p className="sm:text-3xl text-xl font-medium text-white text-center ">
          Hi, I am Jai Parasher <span className="waving-hand">👋</span>
        </p>
        <div className="font-semibold text-blue-500 text-xl  gap-3  text-center sm:text-3xl sm:leading-10 mb-0 sm:mb-4">
          <span>
            <Typewriter
              options={{
                strings: Bio.roles,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition}  rotation={sizes.deskRotation}/>
            </HeroCamera>

            

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
