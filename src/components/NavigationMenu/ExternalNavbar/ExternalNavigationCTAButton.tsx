import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ExternalNavigationCTAButton({
  isLoggedIn = false,
  isLoading,
}: {
  isLoggedIn?: boolean;
  isLoading?: boolean;
}) {
  const href = isLoggedIn ? '/dashboard' : '/login';
  const text = isLoggedIn ? 'Dashboard' : 'Log In';
  return (
    <Link href={href} className="w-full">
      <Button variant="default" size="default" className="group w-full">
        {isLoading ? (
          'Please wait...'
        ) : (
          <>
            {text}
            <svg
              className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </>
        )}
      </Button>
    </Link>
  );
}
