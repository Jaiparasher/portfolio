import Button from '../components/Button.jsx';
import { Bio } from '../constants/index.js';

const Hero = () => {
  return (
    // position={[2,-3,0]} rotation={[0.1, -1.4, 0]}
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col  sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center ">
          Hi, I am Jai Parasher <span className="waving-hand">👋</span>
        </p>
        <div className="font-semibold text-blue-500 text-xl  gap-3  text-center sm:text-3xl sm:leading-10 mb-0 sm:mb-4">
          <span>
            <span>{Bio.roles[0]}</span>
          </span>
        </div>
      </div>

      <div className="hero-grid absolute inset-0" aria-hidden="true">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="hero-glow" />
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
