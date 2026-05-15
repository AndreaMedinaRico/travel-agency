const DestinationItem = ({ title, image }) => {
  return (
    <article
      className="
        overflow-hidden rounded-3xl
        shadow-lg transition duration-300
        hover:-translate-y-2 hover:shadow-2xl
      "
    >
      <div className="relative h-112.5">
        <img
          src={image}
          alt={`Destino turístico en ${title}`}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute bottom-6 left-6">
          <h3 className="text-3xl font-bold text-white">
            {title}
          </h3>
        </div>
      </div>
    </article>
  );
};

export default DestinationItem;