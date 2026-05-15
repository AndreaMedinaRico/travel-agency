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
        hover:-translate-y-2 hover:shadow-2xl p-6"
      style={{ backgroundColor: '#FFFEF6', padding: '1rem' }}
    >
      <img
        src={image}
        alt={title}
        className="h-64 w-full object-cover rounded-t-3xl"
      />

      <div className="h-2"/>
      <div className="px-6 py-4">
        <p className="mb-2 text-sm uppercase tracking-wider text-center text-slate-800">
          {destination}
        </p>

        <h3 className="mb-3 text-2xl font-bold text-slate-800 text-center">
          {title}
        </h3>
        <div className="h-2"/>
        <p className="mb-4 text-slate-600 text-justify">
          {description}
        </p>

        <div className="h-2"/>

        <div className="mb-5 flex items-center justify-between text-sm text-#13203e">
          <span>{duration}</span>
          <span className="font-semibold text-slate-800">
            {price}
          </span>
        </div>

        <div className="h-2"/>
        
        <button
          className="
            w-full rounded-full py-3
            font-medium text-white
            transition hover:bg-slate-800
          "
          style={{ backgroundColor: '#13203e' }}
        >
          Más información
        </button>
      </div>
    </article>
  );
};

export default PackageCard;