const ReviewCard = ({
  name,
  destination,
  comment,
  rating,
  image,
}) => {
  return (
    <article
      className="rounded-3xl bg-white p-6 shadow-lg"
      style={{ backgroundColor: '#FFFEF6', padding: '1rem' }}
    >
      <div className="mb-5 flex items-center gap-4">
        <img
          src={image}
          alt={`Cliente ${name}`}
          className="h-16 w-16 rounded-full object-cover"
        />

        <div>
          <h3 className="text-lg font-bold text-slate-800">
            {name}
          </h3>

          <p className="text-sm text-slate-500">
            {destination}
          </p>
        </div>
      </div>

      <div className="mb-4 flex text-yellow-400">
        {'★'.repeat(rating)}
      </div>

      <p className="text-slate-600">
        “{comment}”
      </p>
    </article>
  );
};

export default ReviewCard;