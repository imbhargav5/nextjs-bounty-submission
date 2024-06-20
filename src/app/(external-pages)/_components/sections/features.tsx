import { Sparkles } from 'lucide-react';
import TitleBlock from '../title_block';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import { featuresData } from '../../_data/features-data';

export default function Features() {
  return (
    <section className="py-16 max-w-6xl flex flex-col justify-center items-center  mx-auto space-y-10 overflow-hidden px-6">
      <TitleBlock
        icon={<Sparkles size={16} />}
        title="Discover Next-Level Features"
        section="Features"
        subtitle="Discover the ultimate insights into cutting-edge advancements. Our next-level features guide reveals the essentials for staying ahead."
      />
      <BentoGrid className="grid-cols-1 md:grid-cols-2">
        {featuresData.slice(0, 2).map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
      <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {featuresData.slice(2, 5).map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}
