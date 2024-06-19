'use client';
import { useState } from 'react';
import { Plan } from './plan';
import { PlanToggleButton } from './plan-toggle';

const plans = {
  monthly: [
    {
      title: 'Basic',
      subtitle: 'Best for Small projects',
      price: 99,
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
      subtitle: 'Best for Large projects',
      price: 299,
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
    },
    {
      title: 'Premium',
      subtitle: 'Best for organization',
      price: 399,
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
        'Transcend Framer template',
        'PowerSaas Framer template',
        'Premium CDN Services',
        'Ongoing Website Maintenance and Updates',
      ],
    },
  ],
  yearly: [
    {
      title: 'Basic',
      subtitle: 'Best for Small projects',
      price: 999, // 99 * 12 - 1 month discount
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
      subtitle: 'Best for Large projects',
      price: 2999, // 299 * 12 - 1 month discount
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
    },
    {
      title: 'Premium',
      subtitle: 'Best for organization',
      price: 3999, // 399 * 12 - 1 month discount
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
        'Transcend Framer template',
        'PowerSaas Framer template',
        'Premium CDN Services',
        'Ongoing Website Maintenance and Updates',
      ],
    },
  ],
};

export function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  const selectedPlans = isMonthly ? plans.monthly : plans.yearly;
  return (
    <div className="container mx-auto p-4">
      <PlanToggleButton isMonthly={isMonthly} onToggle={handleToggle} />
      <div className="flex flex-col lg:flex-row justify-center gap-4">
        {selectedPlans.map((plan, i) => (
          <Plan
            key={i}
            title={plan.title}
            subtitle={plan.subtitle}
            price={plan.price}
            features={plan.features}
            isMostPopular={i === 2 ? true : false}
            isEven={i % 2 !== 0 ? true: false}
          />
        ))}
      </div>
    </div>
  );
}
