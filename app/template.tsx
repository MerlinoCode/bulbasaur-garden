'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) {
      const searchBar = document.getElementById('search-bar');
      if (searchBar) {
        searchBar.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    } else {
      initialized.current = true;
    }
  }, [pathname]);

  return <>{children}</>;
}
