'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { appConfig } from '@/config/app.config';
import { cn } from '@/lib/utils';

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="w-full border border-base-200 rounded-lg bg-base-100 shadow-sm hover:shadow-md transition-all duration-200">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-base-50 rounded-lg transition-colors duration-200"
      >
        <h3 className="text-base font-semibold text-base-content pr-4">
          {question}
        </h3>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-base-content/60 transition-transform duration-200',
            isOpen ? 'rotate-180' : 'rotate-0',
          )}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-4 pt-2 border-t border-base-200/50">
          <p className="text-base-content/80 text-sm leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

type FAQProps = {
  className?: string;
};

const FAQ = ({ className }: FAQProps) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const { faq } = appConfig;

  return (
    <section
      className={cn(
        'w-full relative flex flex-col justify-center items-center py-24 gap-8',
        className,
      )}
      id="faq"
    >
      {/* Background blur effect */}
      <div className="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0" />

      {/* Header section */}
      <div className="self-stretch flex flex-col justify-center items-center gap-2 relative z-10">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="text-4xl md:text-6xl font-bold text-base-content">
            {faq.title}
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm break-words font-light">
            {faq.subtitle}
          </p>
        </div>
      </div>

      {/* FAQ items */}
      <div className="w-full max-w-[600px] pt-0.5 pb-10 flex flex-col justify-start items-start gap-4 relative z-10">
        {faq.items.map((faqItem, index) => (
          <FAQItem
            key={index}
            question={faqItem.question}
            answer={faqItem.answer}
            isOpen={openItems.has(index)}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </section>
  );
};

export { FAQ, FAQItem };
