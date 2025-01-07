'use client'

import { useFormState } from './contact-form-context'

const serviceOptions = [
  { id: 'branding', title: 'Branding' },
  { id: 'print', title: 'Print' },
  { id: 'consulting', title: 'Consulting' },
  { id: 'web', title: 'Web Development' },
  { id: 'events', title: 'Events' },
  { id: 'other', title: 'Other' },
]

export function StepOne() {
  const { state, dispatch } = useFormState()

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-12 text-left">
        <h1 className="mb-4 text-5xl font-medium md:text-6xl">
          <span className="inline-block bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent">
            What Are You
            <br />
            Looking For?
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {serviceOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => {
              dispatch({ type: 'SET_SERVICE_TYPE', payload: option.id })
              dispatch({ type: 'SET_STEP', payload: 2 })
            }}
            className={`aspect-square rounded-[32px] border transition-colors
              ${state.serviceType === option.id
                ? 'border-white bg-white/10'
                : 'border-white/10 bg-[#d9d9d9] hover:border-white/20'
              }`}
          >
            <span className="sr-only">{option.title}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

