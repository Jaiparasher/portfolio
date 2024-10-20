import { clientReviews } from '../constants/index.js';

const Clients = () => {
  return (
    <section className="c-space my-20">
      <div className='mb-10'>
        <h3 className="head-text ">Hear from My Clients</h3>
        <hr className="rounded-4xl border-2 border-[#0140CB] sm:w-[23.5rem] w-80 "/>
      </div>
      

      <div className="client-container overflow-hidden w-full relative group">
        <div className="reviews-slider flex justify-start gap-5 animate-scroll slider-track">
          {clientReviews.concat(clientReviews).map((item, index) => (
            <div key={`review-${index}`} className="client-review flex-none w-[250px] h-[250px] md:w-[300px] md:h-[370px] lg:w-[350px] lg:h-[350px] bg-black bg-opacity-50 rounded-lg p-5 text-white">
              <div className="h-full flex flex-col justify-between">
                <p className="font-light font-sans italic	">{item.review}</p>

                <div className="client-content flex flex-col lg:flex-row justify-between lg:items-center gap-5 mt-5">
                  <div className="flex gap-3">
                    <img src={item.img} alt="reviewer" className="w-12 h-12 rounded-full" />
                    <div className="flex flex-col">
                      <p className="font-semibold">{item.name}</p>
                      {item.position&&<p className="text-gray-500 md:text-base text-sm font-light">{item.position}</p>}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
