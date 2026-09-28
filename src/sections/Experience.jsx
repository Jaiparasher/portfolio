import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>
        <hr className="rounded-4xl border-2 border-[#0140CB] sm:w-96 w-80"/>

        <div className="work-container">
          <div className="work-canvas flex min-h-72 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-[#15191c] via-[#0b0c0d] to-[#b8ff5a]/10 p-8">
            <div className="text-center">
              <span className="mb-4 block text-7xl font-semibold text-[#b8ff5a]/20">{`</>`}</span>
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">Building useful things</p>
            </div>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      {item.icon?<img className="w-full h-full" src={item.icon} alt="" />:<p className='w-full h-full flex items-center font-bold text-white underline decoration-blue-500 justify-center text-center'>{item.name.slice(0,1)}</p>}
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
