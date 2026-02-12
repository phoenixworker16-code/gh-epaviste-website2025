"use client"

// Inspired by react-hot-toast library
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast" // Assuming this path is correct for your toast component

// --- Constants ---
const TOAST_LIMIT = 3 // Adjusted limit to allow more visible toasts
const TOAST_REMOVE_DELAY = 1000000 // A very long delay, consider if this is intended for manual dismissal primarily

// --- Types ---
// Extends ToastProps with an ID and optional content
type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}


// Define the shape of possible actions for the reducer
type Action =
  | {
      type: "ADD_TOAST"
      toast: ToasterToast
    }
  | {
      type: "UPDATE_TOAST"
      toast: Partial<ToasterToast> // `Partial` means all properties are optional for updates
    }
  | {
      type: "DISMISS_TOAST"
      toastId?: ToasterToast["id"] // Optional toast ID to dismiss a specific toast or all
    }
  | {
      type: "REMOVE_TOAST"
      toastId: ToasterToast["id"] | undefined // Explicitly allow undefined for removing all
    }

// Define the state structure for the toast system
interface State {
  toasts: ToasterToast[]
}

// Global state and dispatch mechanism
// This allows `toast` function to work outside of React components
const listeners: Array<(state: State) => void> = [] // List of state update listeners
let memoryState: State = { toasts: [] } // Current global state

// The central dispatch function that updates state and notifies listeners
function dispatch(action: Action) {
  memoryState = reducer(memoryState, action) // Apply the reducer
  listeners.forEach((listener) => {
    listener(memoryState) // Notify all subscribed components
  })
}

// Map to store timeouts for auto-removal of toasts
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

// Function to add a toast to the auto-removal queue
const addToRemoveQueue = (toastId: string) => {
  // If a timeout already exists for this toast, don't add another one
  if (toastTimeouts.has(toastId)) {
    return
  }

  // Set a timeout to dispatch a REMOVE_TOAST action
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId) // Clean up the map
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout) // Store the timeout ID
}

// --- Reducer ---
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      // Add new toast to the beginning, limit total toasts
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      // Find and update a specific toast by ID
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // Clear any pending auto-remove timeout if dismissing manually
      if (toastId && toastTimeouts.has(toastId)) {
        clearTimeout(toastTimeouts.get(toastId))
        toastTimeouts.delete(toastId)
      } else if (toastId === undefined) { // If no specific toastId, clear all timeouts
        toastTimeouts.forEach((timeout) => clearTimeout(timeout));
        toastTimeouts.clear();
      }

      return {
        ...state,
        toasts: state.toasts.map((t) => {
          // If toastId is provided, dismiss that specific toast.
          // If toastId is undefined, dismiss all toasts.
          // The `open: false` property should ideally trigger an exit animation
          // in your actual `Toast` component before `REMOVE_TOAST` is called.
          if (t.id === toastId || toastId === undefined) {
            // Add to remove queue only if we are dismissing a specific toast
            // and it's not already in the queue from auto-dismissal
            if (toastId !== undefined) {
              addToRemoveQueue(t.id); // Re-add to queue for delayed removal after animation
            }
            return {
              ...t,
              open: false, // Set open to false to trigger dismissal animation
            };
          }
          return t;
        }),
      }
    }
    case "REMOVE_TOAST":
      // If toastId is undefined, remove all toasts
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      // Otherwise, filter out the specific toast
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
    default:
      // Always return current state for unhandled actions (should not happen with sealed `ActionType`)
      return state;
  }
}

// --- Toast API (Imperative) ---
type Toast = Omit<ToasterToast, "id"> // `toast` function doesn't need an ID when called

// `toast` function creates and dispatches a new toast
function toast({ ...props }: Toast) {
  const id = genId() // Generate a unique ID for the toast

  // `update` function for this specific toast
  const update = (updatedProps: Partial<ToasterToast>) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...updatedProps, id }, // Ensure the ID is attached
    })

  // `dismiss` function for this specific toast
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  // Dispatch the ADD_TOAST action
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true, // Initially open
      // When the toast's open state changes (e.g., user clicks close button)
      onOpenChange: (open) => {
        if (!open) {
          dismiss() // If closed, dismiss it
        }
      },
    },
  })

  // Return helper functions for controlling this specific toast
  return {
    id: id,
    dismiss,
    update,
  }
}

// --- useToast Hook (Reactive) ---
function useToast() {
  const [state, setState] = React.useState<State>(memoryState) // Initialize state from global memoryState

  React.useEffect(() => {
    // Subscribe to state changes
    listeners.push(setState)
    // Cleanup: unsubscribe when component unmounts
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state]) // Depend on state to ensure listener is always correct if state's identity changes (less common here, but safe)

  return {
    ...state, // Expose current toasts array
    toast, // Expose the imperative `toast` function
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }), // Expose dismiss for external use
  }
}

// --- Utilities ---
let count = 0 // Counter for generating unique IDs

function genId() {
  // Increments count, wraps around at MAX_SAFE_INTEGER to prevent overflow
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

// --- Exports ---
export { useToast, toast }