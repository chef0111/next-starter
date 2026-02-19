import Link from 'next/link';
import { Route } from 'next';
import { cn } from '@/lib/utils';
import { LogoIcon } from './logo';

interface BrandProps {
  href?: Route | null;
  showText?: boolean;
  size?: number;
  className?: string;
  containerClassName?: string;
  textClassName?: string;
}

export function Brand({
  href = '/',
  showText = true,
  size = 16,
  className,
  containerClassName,
  textClassName,
}: BrandProps) {
  const content = (
    <div
      className={cn(
        'flex items-center justify-center gap-2',
        containerClassName
      )}
    >
      <div className={cn('bg-primary rounded-md p-2', className)}>
        <LogoIcon width={size} height={size} className="invert dark:invert-0" />
      </div>
      {showText && (
        <p className={cn('text-2xl font-bold max-sm:hidden', textClassName)}>
          Next<span className="text-primary">Starter</span>
        </p>
      )}
    </div>
  );

  if (!href) return content;

  return (
    <Link href={href} className="flex-center">
      {content}
    </Link>
  );
}
