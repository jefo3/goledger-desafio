import React from 'react'

import { X } from 'lucide-react'

import { IPropsElementsDiv } from '.'

interface IProps extends IPropsElementsDiv {
  close: () => void
  children: React.ReactNode
}

export const ModalHeader = ({ children, close, className, ...props }: IProps) => {
  return (
    <div
      className={`flex items-center justify-between p-4 md:p-5 border-b ${className}`}
      {...props}
    >
      {children}
      <button
        type="button"
        onClick={close}
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
      >
        <X />
        <span className="sr-only">Close modal</span>
      </button>
    </div>
  )
}
