import ReviewCard from '../components/common/ReviewCard';
import { reviewsData } from '../data/reviewsData';
import SectionHeader from '../components/common/SectionHeader';

const ReviewSection = () => { 
  return (
    <section id="reviews" className="px-24 mt-64 flex items-center justify-center"
      style={{ backgroundColor: '#E6F9FF' }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          subtitle="Testimonios de clientes"
          title="Lo que dicen nuestros viajeros"
        />
        <div className="h-20" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviewsData.map((review) => (
            <ReviewCard
              key={review.id}
              {...review}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;