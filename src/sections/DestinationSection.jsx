import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import DestinationItem from '../components/common/DestinationItem';
import { destinationsData } from '../data/destinationsData';

const DestinationSection = () => {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-slate-500">
            Destinos
          </p>

          <h2 className="text-4xl font-bold text-slate-900">
            Explora lugares increíbles
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          aria-label="Carrusel de destinos turísticos"
        >
          {destinationsData.map((destination) => (
            <SwiperSlide key={destination.id}>
              <DestinationItem {...destination} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DestinationSection;