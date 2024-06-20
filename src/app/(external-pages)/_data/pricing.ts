type Pricing = {
  title: string;
  price: string;
  annualPrice: string;
  features: string[];
  description: string;
  isHighlighted?: boolean;
};

export const pricing: Pricing[] = [
  {
    title: 'Basic',
    price: '99',
    annualPrice: '990',
    description: 'Best for small projects',
    features: [
      'Custom Domain Registration',
      'Basic Website Hosting',
      'Standard Security Features',
      'Mobile-Responsive Design',
      'Basic SEO Optimization',
      'Content Management System (CMS)',
      'Contact Form Integration',
      'Social Media Integration',
    ],
  },
  {
    title: 'Standard',
    price: '299',
    annualPrice: '2990',
    description: 'Best for large projects',
    features: [
      'Everything in Basic Plan',
      'Advanced Security Features',
      'Enhanced SEO Optimization',
      'Blog Setup and Management',
      'E-commerce Integration',
      'Up to 10 Pages',
      'Custom Email Accounts',
      'Monthly Performance Reports',
      'Priority Email Support',
      'Bi-Weekly Backups',
      'Social Media Management Tools',
    ],
    isHighlighted: true,
  },
  {
    title: 'Premium',
    price: '399',
    annualPrice: '3990',
    description: 'Best for organizations',
    features: [
      'Everything in Standard Plan',
      'Custom Web Application Development',
      'Advanced E-commerce Features',
      'Unlimited Pages',
      'Dedicated Account Manager',
      '24/7 Phone and Email Support',
      'Weekly Backups',
      'Advanced Analytics and Reporting',
      'End to End Integration test suite',
      'Custom API Integrations',
      'Personalized SEO Strategy',
      'Transcend Framer template ↗',
      'PowerSaas Framer template ↗',
      'Personalized SEO Strategy',
      'Premium CDN Services',
      'Ongoing Website Maintenance and Updates',
    ],
  },
];
