const SectionHeader = ({ subtitle, title, subtitleColor = "#13203e", titleColor = "#13203e" }) => {
  return (
    <div className="mb-20 text-center">
      <p className={`mb-5 text-sm uppercase tracking-[0.3em]`} style={{ color: subtitleColor }}>
        {subtitle}
      </p>
      <h2 className={`text-5xl font-bold`} style={{ color: titleColor }}>
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;