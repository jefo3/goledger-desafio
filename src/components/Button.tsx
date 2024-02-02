import React, { ComponentProps, ElementType } from 'react'

import { tv, VariantProps } from 'tailwind-variants'

import { Spinner } from './Spinner'

const button = tv({
  base: 'text-white flex gap-2 items-center justify-center focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-3 text-center',

  variants: {
    variant: {
      primary: 'bg-primary-base hover:bg-primary-light text-white',
      secundary: 'bg-secundary-base hover:bg-secundary-light text-white',
      outline: 'border border-primary-base text-primary-dark',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

type buttonVariant = ComponentProps<'button'> & VariantProps<typeof button>

interface IProps extends buttonVariant {
  isLoading?: boolean
  icon?: ElementType
}

export const Button = ({ icon: Icon, isLoading, children, variant, ...props }: IProps) => {
  return (
    <button className={button({ variant })} {...props}>
      {isLoading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          {Icon && <Icon />}
          {children}
        </React.Fragment>
      )}
    </button>
  )
}
