import FAQItem from '../components/common/FAQItem';
import { faqData } from '../data/faqData';
import SectionHeader from '../components/common/SectionHeader';

const FAQSection = () => {
  return (
    <section
      id="faq"
      className="px-24 mt-64 flex items-center justify-center"
      style={{ backgroundColor: '#E6F9FF' }}
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          subtitle="Preguntas frecuentes"
          title="Resuelve tus dudas antes de viajar"
        />
        <div className="h-20" />

        <div className="space-y-4">
          {faqData.map((faq) => (
            <FAQItem
              key={faq.id}
              {...faq}
            />
          ))}
        </div>
        <div className="h-20" />
      </div>
      
    </section>
  );
};

export default FAQSection;