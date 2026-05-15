import FAQItem from '../components/common/FAQItem';
import { faqData } from '../data/faqData';

const FAQSection = () => {
  return (
    <section
      id="faq"
      className="bg-slate-50 px-6 py-24"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-slate-500">
            FAQ
          </p>

          <h2 className="text-4xl font-bold text-slate-900">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((faq) => (
            <FAQItem
              key={faq.id}
              {...faq}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;