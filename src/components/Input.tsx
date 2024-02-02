import React, { ComponentProps, ElementType, ForwardRefRenderFunction, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

import { tv } from 'tailwind-variants'

interface InputProps extends ComponentProps<'input'> {
  icon?: ElementType
  error?: FieldError
  label?: string
}

const containerInput = tv({
  base: 'flex items-center gap-2 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg w-full p-6 focus-within:border-primary-base',
  variants: {
    hasError: {
      true: 'focus-within:border-error border-error',
    },
  },
})

const InputComponent: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error, icon: Icon, label, ...props },
  ref
) => {
  const hasError = error !== undefined
  return (
    <label>
      {label && <div className="font-medium mb-2 text-lg">{label}</div>}
      <div className={containerInput({ hasError })}>
        {Icon && <Icon className={`${hasError && 'text-error'}`} />}
        <input ref={ref} className="flex-1 bg-transparent border-0 outline-none" {...props} />
      </div>
      {hasError && <span className="text-sm text-error">{error.message}</span>}
    </label>
  )
}

export const Input = forwardRef(InputComponent)
