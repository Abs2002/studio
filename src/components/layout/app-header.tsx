"use client";

import type { NavItem } from '@/types/portfolio';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, X, Briefcase, GraduationCap, Award, Share2, SquareStack, Speech, UserRound, Sparkles, ScrollText, Workflow, HeartHandshake } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';


const navItems: NavItem[] = [
  { label: 'About', href: '#about', icon: UserRound },
  { label: 'Experience', href: '#experience', icon: Briefcase },
  { label: 'Certifications', href: '#certifications', icon: Award },
  { label: 'Education', href: '#education', icon: GraduationCap },
  { label: 'Publications and Research', href: '#publications', icon: ScrollText },
  { label: 'Skills', href: '#skills', icon: SquareStack },
  { label: 'Projects', href: '#projects', icon: Workflow },
  { label: 'Volunteering', href: '#volunteering', icon: HeartHandshake },
  { label: 'Languages', href: '#languages', icon: Speech },
  { label: 'Social Media', href: '#social-media', icon: Share2 },
  //{ label: 'Contact', href: '#contact', icon: Sparkles },
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
          Anirudh Bishnoi
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {/* Name */}
          {/* Ensure the div for the name outside this nav has whitespace-nowrap and enough space */}

          {/* Direct Nav Items */}
          <Link href="#experience" className="text-sm font-medium transition-colors hover:text-primary">Experience</Link>
          <Link href="#certifications" className="text-sm font-medium transition-colors hover:text-primary">Certifications</Link>
          <Link href="#social-media" className="text-sm font-medium transition-colors hover:text-primary">Social Media</Link>


          {/* Dropdown Menu for other items */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center">
                <Menu className="h-4 w-4" /> {/* Added Menu icon */}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {navItems
                .filter(item =>
                  !['Experience', 'Certifications', 'Social Media', 'Contact'].includes(item.label)
                )
                .map(item => (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link href={item.href}>
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
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
              <div className="flex flex-col space-y-4 overflow-y-auto h-[calc(100vh-7rem)]">
                {/* Name and Close Button */}
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <Link href="/" className="text-xl font-headline font-bold text-primary">
                    Anirudh Bishnoi
                  </Link>
                </div>
                {/* Scrollable Navigation Items */}
                <div className="flex flex-col space-y-4 overflow-y-auto">
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
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
