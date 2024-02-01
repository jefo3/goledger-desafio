import { ComponentProps } from 'react'

interface IProps extends ComponentProps<'h1'> {
  title: string
}

export const ModalTitle = ({ title, ...props }: IProps) => {
  return <h1 {...props}>{title}</h1>
}
