import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import DestinationItem from '../components/common/DestinationItem';
import { destinationsData } from '../data/destinationsData';
import SectionHeader from '../components/common/SectionHeader';

const DestinationSection = () => {
  return (
    <section id="destinations" className="px-24 mt-64 flex items-center justify-center"
      style={{ backgroundColor: '#E6F9FF' }}>

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          subtitle="Destinos turísticos"
          title="Explora los destinos más populares"
        />
        <div className="h-20" />

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 3,
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