'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialized = useRef(false);
  const scrollTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialized.current) {
      const searchBar = document.getElementById('search-bar');
      if (searchBar) {
        searchBar.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    } else {
      initialized.current = true;
    }
  }, [pathname, searchParams]);

  return (
    <>
      <div ref={scrollTarget} />
      {children}
    </>
  );
}
