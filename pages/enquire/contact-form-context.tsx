'use client'

import { createContext, useContext, useReducer } from 'react'

type FormState = {
  currentStep: number
  serviceType: string | null
  budget: string | null
  timeline: string | null
}

type FormAction = 
  | { type: 'SET_STEP'; payload: number }
  | { type: 'SET_SERVICE_TYPE'; payload: string }
  | { type: 'SET_BUDGET'; payload: string }
  | { type: 'SET_TIMELINE'; payload: string }

const initialState: FormState = {
  currentStep: 1,
  serviceType: null,
  budget: null,
  timeline: null,
}

const FormContext = createContext<{
  state: FormState
  dispatch: React.Dispatch<FormAction>
} | undefined>(undefined)

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, currentStep: action.payload }
    case 'SET_SERVICE_TYPE':
      return { ...state, serviceType: action.payload }
    case 'SET_BUDGET':
      return { ...state, budget: action.payload }
    case 'SET_TIMELINE':
      return { ...state, timeline: action.payload }
    default:
      return state
  }
}

export function ContactFormProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(formReducer, initialState)

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  )
}

export function useFormState() {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error('useFormState must be used within a FormProvider')
  }
  return context
}

