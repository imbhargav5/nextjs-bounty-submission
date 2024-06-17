'use client';

import { ExternalNavigationCTAButton } from '@/components/NavigationMenu/ExternalNavbar/ExternalNavigationCTAButton';
import { useQuery } from '@tanstack/react-query';

export function LoginCTAButton() {
  const { data: isLoggedIn, isFetching } = useQuery(
    ['isLoggedInHome'],
    async () => {
      return false;
    },
    {
      initialData: false,
      refetchOnMount: true,
      refetchInterval: false,
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false,
      cacheTime: 0,
      staleTime: 0,
    },
  );

  return (
    <ExternalNavigationCTAButton
      isLoading={isFetching}
      isLoggedIn={isLoggedIn}
    />
  );
}
