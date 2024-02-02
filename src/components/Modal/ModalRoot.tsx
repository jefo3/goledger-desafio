'use client'

import React, { useEffect } from 'react'

import { IPropsElementsDiv } from '.'

interface IProps extends IPropsElementsDiv {
  children: React.ReactNode
  isOpen: boolean
}

export const ModalRoot = ({ children, isOpen, className, ...props }: IProps) => {
  useEffect(() => {
    const bodyElement = document.querySelector('body')
    if (isOpen) {
      bodyElement?.classList.add('not-scroll__fullpage')
      return
    }

    bodyElement?.classList.remove('not-scroll__fullpage')
  }, [isOpen])
  return (
    isOpen && (
      <div
        className={`${className} flex fixed overflow-y-auto overflow-x-hidden inset-y-0 inset-x-0 z-50 w-full h-screen`}
        {...props}
      >
        {children}
      </div>
    )
  )
}
