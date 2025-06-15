import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  icon?: React.ElementType;
}

export default function Section({ id, title, children, className, titleClassName, icon: Icon }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-10 md:mb-12 text-center">
            <h2 className={cn('text-3xl md:text-4xl font-headline font-bold text-primary flex items-center justify-center gap-3', titleClassName)}>
              {Icon && <Icon className="h-8 w-8 md:h-10 md:w-10" />}
              {title}
            </h2>
            <div className="mt-3 h-1 w-20 bg-accent mx-auto rounded-full"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
