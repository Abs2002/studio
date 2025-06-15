"use client";

import { useEffect, useState } from 'react';

export default function AppFooter() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-muted py-8 text-center text-muted-foreground">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          &copy; {currentYear !== null ? currentYear : 'Loading...'} PersonaSite. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Powered by Next.js & ShadCN UI
        </p>
      </div>
    </footer>
  );
}
