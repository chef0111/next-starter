import { HeroSection } from '@/components/hero';
import { LogosSection } from '@/components/hero/logos-section';
import { Header } from '@/components/navbar';
import { cn } from '@/lib/utils';

export default function Page() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden px-4 supports-[overflow:clip]:overflow-clip">
      <Header />
      <main
        className={cn(
          'relative mx-auto max-w-4xl grow',
          // X Borders
          'before:bg-border before:absolute before:-inset-y-14 before:-left-px before:w-px',
          'after:bg-border after:absolute after:-inset-y-14 after:-right-px after:w-px'
        )}
      >
        <HeroSection />
        <LogosSection />
      </main>
    </div>
  );
}
