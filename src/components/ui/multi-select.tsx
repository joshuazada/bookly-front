'use client'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CheckIcon } from 'lucide-react'
import { useState } from 'react'

interface Item<T> {
  id: T
  name: string
}

interface GenericMultiSelectProps<T> {
  items: Item<T>[]
  value: T[]
  onChange: (selected: T[]) => void
  title: string
  placeholder: string
}

export function MultiSelect<T extends string | number>({ items, onChange, placeholder, title, value }: GenericMultiSelectProps<T>) {
  const [open, setOpen] = useState(false)

  const toggleItem = (id: T) => {
    const newValue = value.includes(id) ? value.filter(v => v !== id) : [...value, id]
    onChange(newValue)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button role="combobox" variant="outline" aria-expanded={open} className="w-full justify-between border-input font-normal">
          {title}
          <span className="ml-2 rounded-full bg-secondary px-1.5 py-0.5 text-xs font-semibold text-secondary-foreground">{value.length}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandList>
            <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
            <CommandGroup>
              {items.map(item => {
                const isSelected = value.includes(item.id)
                return (
                  <CommandItem key={item.id} className="capitalize" onSelect={() => toggleItem(item.id)}>
                    <div
                      className={`mr-2 flex h-4 w-4 items-center justify-center rounded-sm border ${
                        isSelected ? 'bg-primary text-primary-foreground' : 'opacity-50'
                      }`}
                    >
                      {isSelected && <CheckIcon className="h-4 w-4" />}
                    </div>
                    {item.name}
                  </CommandItem>
                )
              })}
            </CommandGroup>
            {value.length > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem onSelect={() => onChange([] as T[])} className="justify-center text-center">
                    Limpar seleção
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
