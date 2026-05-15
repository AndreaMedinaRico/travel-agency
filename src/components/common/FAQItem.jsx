import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article
      className="
        rounded-2xl border border-slate-200
        bg-white p-5 shadow-sm
      "
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex w-full items-center justify-between
          text-left
        "
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-slate-800">
          {question}
        </span>

        <span className="text-2xl text-slate-500">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {isOpen && (
        <p className="mt-4 text-slate-600">
          {answer}
        </p>
      )}
    </article>
  );
};

export default FAQItem;