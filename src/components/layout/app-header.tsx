"use client";

import type { NavItem } from '@/types/portfolio';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, X, Briefcase, GraduationCap, Award, SquareStack, UserRound, Sparkles } from 'lucide-react';

const navItems: NavItem[] = [
  { label: 'About', href: '#about', icon: UserRound },
  { label: 'Experience', href: '#experience', icon: Briefcase },
  { label: 'Education', href: '#education', icon: GraduationCap },
  { label: 'Skills', href: '#skills', icon: SquareStack },
  { label: 'Certifications', href: '#certifications', icon: Award },
  { label: 'AI Bio', href: '#bio-generator', icon: Sparkles },
];

export default function AppHeader() {
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isMounted) {
    return null; 
  }

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background/80 shadow-md backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-headline font-bold text-primary hover:text-primary/80 transition-colors">
          PersonaSite
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-2 lg:space-x-4">
          {navItems.map((item) => (
            <Button key={item.label} variant="ghost" asChild className="text-foreground hover:text-primary hover:bg-accent transition-colors">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between items-center mb-4">
                   <Link href="/" className="text-xl font-headline font-bold text-primary">
                      PersonaSite
                    </Link>
                  <SheetClose asChild>
                     <Button variant="ghost" size="icon">
                        <X className="h-6 w-6 text-primary" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                  </SheetClose>
                </div>
                {navItems.map((item) => (
                  <SheetClose key={item.label} asChild>
                    <Link
                      href={item.href}
                      className="flex items-center space-x-3 rounded-md px-3 py-2 text-lg font-medium text-foreground hover:bg-accent hover:text-primary transition-colors"
                    >
                      {item.icon && <item.icon className="h-5 w-5" />}
                      <span>{item.label}</span>
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
