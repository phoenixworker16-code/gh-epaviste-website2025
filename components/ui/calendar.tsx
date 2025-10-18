"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker" // Make sure react-day-picker is installed: npm install react-day-picker date-fns

import { cn } from "@/lib/utils" // Utility for conditionally joining Tailwind classes
import { buttonVariants } from "@/components/ui/button" // Component for button styling

// Define the props for your Calendar component, extending DayPicker's props
export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className, // Additional classes for the root element
  classNames, // Additional classes to override DayPicker's internal elements
  showOutsideDays = true, // Whether to show days from previous/next months
  ...props // All other props passed to DayPicker
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      // Apply base styles and any additional classes passed via `className` prop
      className={cn("p-3", className)}
      // Override or extend DayPicker's default class names for its internal elements
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        // Add styling for dropdowns if you use captionLayout="dropdown"
        caption_dropdowns: "flex gap-1", // Important for dropdown layout
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        // Styles for days that are part of a selected range but not the start/end
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        // Specific styles for the start and end of a date range selection
        day_range_start: "rounded-r-none", // Prevent right-rounding for start of range
        day_range_end: "rounded-l-none day-range-end", // Prevent left-rounding for end of range

        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_hidden: "invisible",
        // Merge any custom classNames passed from parent component
        ...classNames,
      }}
      // Custom components for DayPicker (e.g., icons for navigation)
      components={{
        // `IconLeft` and `IconRight` only need to return the icon component
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
        IconRight: () => <ChevronRight className="h-4 w-4" />,
      }}
      {...props} // Pass any remaining props to DayPicker (e.g., mode, selected, onSelect, etc.)
    />
  )
}

// Assign a display name for better debugging in React DevTools
Calendar.displayName = "Calendar"

// Export the component
export { Calendar }