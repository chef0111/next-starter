import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Portal, PortalBackdrop } from '@/components/ui/portal';
import { Button } from '@/components/ui/button';
import { companyLinks, companyLinks2, productLinks } from './nav-links';
import { LinkItem } from './sheard';
import { XIcon, MenuIcon } from 'lucide-react';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-label="Toggle menu"
        className="md:hidden"
        onClick={() => setOpen(!open)}
        size="icon"
        variant="outline"
      >
        <div
          className={cn(
            'transition-all',
            open ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          )}
        >
          <XIcon />
        </div>
        <div
          className={cn(
            'absolute transition-all',
            open ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
          )}
        >
          <MenuIcon />
        </div>
      </Button>
      {open && (
        <Portal className="top-14">
          <PortalBackdrop />
          <div
            className={cn(
              'size-full overflow-y-auto p-4',
              'data-[slot=open]:zoom-in-97 data-[slot=open]:animate-in ease-out'
            )}
            data-slot={open ? 'open' : 'closed'}
          >
            <div className="flex w-full flex-col gap-y-2">
              <span className="text-sm">Product</span>
              {productLinks.map((link) => (
                <LinkItem
                  className="active:bg-muted dark:active:bg-muted/50 rounded-md p-2"
                  key={`product-${link.label}`}
                  {...link}
                />
              ))}
              <span className="text-sm">Company</span>
              {companyLinks.map((link) => (
                <LinkItem
                  className="active:bg-muted dark:active:bg-muted/50 rounded-md p-2"
                  key={`company-${link.label}`}
                  {...link}
                />
              ))}
              {companyLinks2.map((link) => (
                <LinkItem
                  className="active:bg-muted dark:active:bg-muted/50 rounded-md p-2"
                  key={`company-${link.label}`}
                  {...link}
                />
              ))}
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <Button className="w-full" variant="outline">
                Sign In
              </Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
}
