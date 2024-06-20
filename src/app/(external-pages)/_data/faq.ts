type FAQ = {
  question: string;
  answer: string;
};

export const faq: FAQ[] = [
  {
    question: 'Is it accessible?',
    answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    question: 'Is it styled?',
    answer:
      ' Yes. It comes with default styles that matches the other components&apos; aesthetic.',
  },
  {
    question: 'Is it animated?',
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer",
  },
];
