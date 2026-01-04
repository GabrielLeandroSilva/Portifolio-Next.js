"use client"

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react"
import { ChevronDown } from "lucide-react"
import clsx from "clsx"

type SelectProps = {
  value: string
  options: string[]
  onChange: (value: string) => void
  className?: string
}

export function Select({
  value,
  options,
  onChange,
  className,
}: SelectProps) {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className={clsx("relative w-30", className)}>
        <ListboxButton
          className="
            flex w-full items-center justify-between
            rounded-lg border border-border
            bg-white text-black
            dark:bg-zinc-900 dark:text-white
            px-4 py-2 text-sm
            focus:outline-none focus:ring-2 focus:ring-primary
          "
        >
          {value}
          <ChevronDown className="h-4 w-4 opacity-70" />
        </ListboxButton>

        <ListboxOptions
          className="
            absolute z-20 mt-2 w-full
            rounded-lg border border-border
            bg-white dark:bg-zinc-900
            shadow-lg
            overflow-hidden
          "
        >
          {options.map(option => (
            <ListboxOption
              key={option}
              value={option}
              className={({selected }) =>
                clsx(
                  "cursor-pointer px-4 py-2 text-sm hover:bg-primary hover:text-white",
                  "bg-muted",
                  selected && "font-medium"
                )
              }
            >
              {option}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}
