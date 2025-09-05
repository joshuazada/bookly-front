import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { ReactNode } from 'react'

type TProps = { title: string; link?: { text: string; href: string }; children?: ReactNode }

export default function Layout({ children, link, title }: TProps) {
  return (
    <div className="text-foreground bg-card h-fit m-6 p-6 rounded-md flex flex-col gap-y-2">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <h2 className={cn('text-xl font-bold tracking-tight md:text-xl lg:text-2xl 3xl:text-3xl')}>{title}</h2>
        {link && (
          <Button asChild variant="secondary">
            <Link href={link.href}>
              {link.text}
              <ArrowRight size={18} className="ml-1 -rotate-45 w-fit" />
            </Link>
          </Button>
        )}
      </header>
      {children}
    </div>
  )
}
