import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './banner.css';

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';

const Banner = () => {
  return (
    <div className='h-[600px] pt-5'>
      <>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          autoplay={
            {
              delay:2000,
              disableOnInteraction: false,
            }
          }
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
        
          <SwiperSlide>
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              "background-image":
                `url(${img1})`,
            }}
            data-swiper-parallax="-23%"
          ></div>
           <div className='bg-black bg-opacity-15 p-5 md:w-[500px] backdrop-blur-sm rounded-lg'>
           <div className="title text-white" data-swiper-parallax="-300">
           <p className='font-bold max-sm:text-2xl'> Explore the World with Ease</p>
            </div>
            <div className="text text-white" data-swiper-parallax="-100">
              <p>
              Dreaming of a getaway to stunning destinations or planning your next adventure abroad? Our expert visa services are here to make the process seamless and stress-free. From ensuring your documents are in order to guiding you through every step, we’re committed to turning your travel dreams into reality. Experience the joy of hassle-free travel with our reliable and personalized visa solutions.
              </p>
            </div>
           </div>
          </SwiperSlide>
          <SwiperSlide>
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              "background-image":
                `url(${img2})`,
            }}
            data-swiper-parallax="-23%"
          ></div>
           <div className='bg-white bg-opacity-50 p-5 md:w-[500px] backdrop-blur-sm rounded-lg'>
           <div className="title" data-swiper-parallax="-300">
            <p className='font-bold max-sm:text-2xl'>Your Gateway to Global <br /> Opportunities</p>
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
              The world is full of opportunities, and we are here to help you seize them. Whether you’re pursuing your dream career, advancing your education, or building a business abroad, our visa experts provide comprehensive support tailored to your needs. We simplify the complexities of visa applications, ensuring you can focus on what truly matters—your goals and ambitions. Let us be your trusted partner in opening doors to a brighter future.
              </p>
            </div>
           </div>
          </SwiperSlide>
          <SwiperSlide>
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              "background-image":
                `url(${img3})`,
            }}
            data-swiper-parallax="-23%"
          ></div>
           <div className='bg-white bg-opacity-50 p-5 md:w-[500px] backdrop-blur-sm rounded-lg'>
           <div className="title" data-swiper-parallax="-300">
            <p className='font-bold max-sm:text-2xl'>Travel Beyond Borders</p>
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
              Crossing borders has never been easier. With our dedicated visa services, we take the guesswork out of the application process, ensuring accuracy and efficiency. Whether you're traveling for leisure, business, or family reunions, we’re committed to providing the guidance and support you need. Trust us to handle the details while you prepare for a journey filled with unforgettable moments and new experiences.
              </p>
            </div>
           </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Banner;
