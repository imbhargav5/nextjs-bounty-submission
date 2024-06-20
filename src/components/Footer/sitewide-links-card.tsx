import { Button } from '@/components/ui/button';

interface SitewideLinksCardProps {
  cardHeading: string;
  sites: {
    sitename: string;
    url: string;
  }[];
}
export function SitewideLinksCard({
  cardHeading,
  sites,
}: SitewideLinksCardProps) {
  return (
    <div className="flex flex-col items-start gap-6">
      <h3 className="text-sm font-semibold">{cardHeading}</h3>
      <div className="flex flex-col items-start gap-y-4">
        {sites.map((site, i) => (
          <Button variant={'ghost'} className="p-0 font-normal">
            {site.sitename}
          </Button>
        ))}
      </div>
    </div>
  );
}
