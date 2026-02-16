'use client';

import { cn } from '@/lib/utils';
import { useScroll } from '@/hooks/use-scroll';
import { Button } from '@/components/ui/button';
import ThemeToggle from './theme-toggle';
import { GithubIcon } from './icons/github';
import { Brand } from './ui/brand';

export const navLinks = [
  {
    label: 'Features',
    href: '#',
  },
  {
    label: 'Pricing',
    href: '#',
  },
  {
    label: 'About',
    href: '#',
  },
];

export function Header() {
  const scrolled = useScroll(10);

  return (
    <header
      className={cn('sticky top-0 z-50 w-full border-b border-transparent', {
        'border-border bg-background/95 supports-backdrop-filter:bg-background/50 backdrop-blur-sm':
          scrolled,
      })}
    >
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4">
        <Brand />
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost">
            <a href="" target="_blank">
              <GithubIcon />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
