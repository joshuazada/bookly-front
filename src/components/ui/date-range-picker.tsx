'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CalendarIcon } from '@radix-ui/react-icons'
import { endOfMonth, endOfWeek, format, startOfDay, startOfMonth, startOfWeek, sub } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import type * as React from 'react'
import type { DateRange } from 'react-day-picker'

export function DateRangePicker({
  className,
  date,
  setDate
}: React.HTMLAttributes<HTMLDivElement> & {
  date: DateRange | undefined
  setDate: (date: DateRange | undefined) => void
}) {
  const shortcuts = [
    {
      getValue: () => {
        const today = startOfDay(new Date())
        return {
          from: today,
          to: today
        }
      },
      name: 'Hoje'
    },
    {
      getValue: () => {
        const yesterday = sub(startOfDay(new Date()), { days: 1 })
        return {
          from: yesterday,
          to: yesterday
        }
      },
      name: 'Ontem'
    },
    {
      getValue: () => ({
        from: sub(startOfDay(new Date()), { days: 6 }),
        to: startOfDay(new Date())
      }),
      name: 'Últimos 7 dias'
    },
    {
      getValue: () => ({
        from: sub(startOfDay(new Date()), { days: 13 }),
        to: startOfDay(new Date())
      }),
      name: 'Últimos 14 dias'
    },
    {
      getValue: () => ({
        from: sub(startOfDay(new Date()), { days: 29 }),
        to: startOfDay(new Date())
      }),
      name: 'Últimos 30 dias'
    },
    {
      getValue: () => ({
        from: startOfWeek(startOfDay(new Date()), { weekStartsOn: 1 }),
        to: endOfWeek(startOfDay(new Date()), { weekStartsOn: 1 })
      }),
      name: 'Essa semana'
    },
    {
      getValue: () => ({
        from: startOfWeek(sub(startOfDay(new Date()), { weeks: 1 }), { weekStartsOn: 1 }),
        to: endOfWeek(sub(startOfDay(new Date()), { weeks: 1 }), { weekStartsOn: 1 })
      }),
      name: 'Semana passada'
    },
    {
      getValue: () => ({
        from: startOfMonth(startOfDay(new Date())),
        to: endOfMonth(startOfDay(new Date()))
      }),
      name: 'Esse mês'
    },
    {
      getValue: () => ({
        from: startOfMonth(sub(startOfDay(new Date()), { months: 1 })),
        to: endOfMonth(sub(startOfDay(new Date()), { months: 1 }))
      }),
      name: 'Mês passado'
    }
  ]

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn('w-[300px] justify-start text-left font-normal border-input', !date && 'text-muted-foreground')}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-auto p-0 mr-10">
          <div className="flex flex-col lg:flex-row">
            <Calendar initialFocus mode="range" locale={ptBR} selected={date} onSelect={setDate} numberOfMonths={2} defaultMonth={date?.from} />

            <div className="border-l p-2 flex flex-col gap-2">
              {shortcuts.map(shortcut => (
                <Button
                  variant="ghost"
                  key={shortcut.name}
                  className="w-full justify-start font-normal"
                  onClick={() => {
                    const newDate = shortcut.getValue()
                    setDate({ from: newDate.from, to: newDate.to })
                  }}
                >
                  {shortcut.name}
                </Button>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
