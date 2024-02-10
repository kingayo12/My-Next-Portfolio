//import swiper react
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import modules
import { FreeMode, Pagination } from "swiper";

// icons
import { RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket, RxArrowTopRight } from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description:
      "Conveying your business essence through visuals and messaging, fostering trust and connection with audiences and Partners.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description:
      " delivering creativity into tangible solutions, harmonizing form and function for meaningful experiences.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "Transforming concepts into reality through innovation, iteration, and technical mastery for impactful solutions.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description:
      "Craft captivating narratives, guiding audiences on engaging journeys and inspiring action with compelling storytelling.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description:
      "Optimize online presence by ensuring visibility through strategic techniques and enhancing digital success.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className=' bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg[rgba(89,65,160,0.15)] transition-all duration-300'>
              {/* icon  */}
              <div> {item.icon} </div>
              {/* title & desc  */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'> {item.title} </div>
                <div className='max-w-[350px] leading-normal'> {item.description} </div>
              </div>
              {/* arrow  */}
              <div className='text-3xl'>
                <RxArrowTopRight className=' group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
