"use client"

import * as React from "react"
import { DayPicker, NavProps } from "react-day-picker"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "../../lib/utils"
import { buttonVariants } from "./button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "p-2 sm:p-3 rounded-xl bg-purple-950/30 backdrop-blur-sm border border-purple-800/30",
        className
      )}
      classNames={{
        months: "space-y-3 sm:space-y-4",
        month: "space-y-3 sm:space-y-4",
        caption: "flex justify-center pt-1 relative items-center mb-3",
        caption_label: "text-lg sm:text-xl font-semibold text-white/90 tracking-wide",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-6 w-6 sm:h-7 sm:w-7 bg-purple-900/20 p-0 text-white/80 " +
            "hover:bg-purple-800/40 hover:text-white transition-colors rounded-lg"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "grid grid-cols-7",
        head_cell:
          "text-purple-300 w-7 sm:w-9 font-medium text-[0.7rem] sm:text-[0.8rem] uppercase tracking-wider text-center mb-2",
        row: "grid grid-cols-7 mt-1 sm:mt-2",
        cell: cn(
          "text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
          "first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md",
          "[&:has([aria-selected])]:bg-purple-800/30"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-7 w-7 sm:h-9 sm:w-9 p-0 font-normal text-white/80 rounded-lg",
          "hover:bg-purple-800/40 hover:text-white transition-all duration-200",
          "focus:bg-purple-800/40 focus:text-white focus:outline-none focus:ring-2 focus:ring-purple-400/30"
        ),
        day_selected:
          "bg-purple-600 text-white hover:bg-purple-500 hover:text-white shadow-lg shadow-purple-900/20",
        day_today: "bg-purple-800/30 text-white ring-2 ring-purple-400/30",
        day_outside: "text-gray-400 opacity-50 hover:bg-purple-800/20",
        day_disabled: "text-gray-500 opacity-30 hover:bg-transparent cursor-not-allowed",
        day_hidden: "invisible",
        day_range_middle: "aria-selected:bg-purple-800/20",
        ...classNames,
      }}
      components={{
        // -- Provide a custom Nav component to override the default arrows --
        Nav: (navProps: NavProps) => {
          const { previousMonth, nextMonth, onPreviousClick, onNextClick } = navProps
          return (
            <div className="space-x-1 flex items-center relative">
              <button
                type="button"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "nav_button nav_button_previous"
                )}
                disabled={!previousMonth}
                onClick={onPreviousClick}
              >
                <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-200 hover:scale-110" />
              </button>

              <button
                type="button"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "nav_button nav_button_next"
                )}
                disabled={!nextMonth}
                onClick={onNextClick}
              >
                <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-200 hover:scale-110" />
              </button>
            </div>
          )
        },
        // If you want to override the month/year dropdown arrow:
        // IconDropdown: (props: DropdownProps) => <ChevronDown {...props} />,
      }}
      {...props}
    />
  )
}

Calendar.displayName = "Calendar"

export { Calendar }
