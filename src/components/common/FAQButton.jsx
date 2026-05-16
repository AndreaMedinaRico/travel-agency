const FAQButton = () => {
  return (
    <a
      href="#faq"
      aria-label="Ir a preguntas frecuentes"
      className="
        fixed bottom-6 right-6 z-50
        flex h-14 w-14 items-center justify-center
        rounded-full text-2xl text-white
        shadow-xl transition
        hover:scale-110 hover:bg-slate-800
      "
      style={{ backgroundColor: '#13203e' }}
    >
      ?
    </a>
  );
};

export default FAQButton;