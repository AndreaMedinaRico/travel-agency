const PackageCard = ({
  title,
  destination,
  duration,
  price,
  image,
  description,
}) => {
  return (
    <article
      className="
        overflow-hidden rounded-3xl
        shadow-lg transition duration-300
        hover:-translate-y-2 hover:shadow-2xl"
        style={{ backgroundColor: '#FFFEF6' }}
    >
      <img
        src={image}
        alt={title}
        className="h-64 w-full object-cover"
      />

      <div className="p-6">
        <p className="mb-2 text-sm uppercase tracking-wider text-slate-500">
          {destination}
        </p>

        <h3 className="mb-3 text-2xl font-bold text-slate-800">
          {title}
        </h3>

        <p className="mb-4 text-slate-600">
          {description}
        </p>

        <div className="mb-5 flex items-center justify-between text-sm text-slate-500">
          <span>{duration}</span>
          <span className="font-semibold text-slate-800">
            {price}
          </span>
        </div>

        <button
          className="
            w-full rounded-full bg-black py-3
            font-medium text-white
            transition hover:bg-slate-800
          "
        >
          Más información
        </button>
      </div>
    </article>
  );
};

export default PackageCard;