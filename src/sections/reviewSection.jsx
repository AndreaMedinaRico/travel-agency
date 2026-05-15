import ReviewCard from '../components/common/ReviewCard';
import { reviewsData } from '../data/reviewsData';

const ReviewSection = () => { 
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-slate-500">
            Testimonios
          </p>

          <h2 className="text-4xl font-bold text-slate-900">
            Lo que dicen nuestros clientes
          </h2>
        </div>

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