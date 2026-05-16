const AboutCard = ({ title, description }) => {
  return (
    <div className="rounded-2xl p-5 shadow-md"
      style={{ backgroundColor: '#FFFEF6', padding: '1rem' }}>
      <h3 className="mb-2 font-bold text-slate-800">
        {title}
      </h3>
      <p className="text-sm text-slate-600">
        {description}
      </p>
    </div>
  );
};

export default AboutCard;