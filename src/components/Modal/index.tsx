import { ComponentProps } from 'react'

import { ModalBody } from './ModalBody'
import { ModalContent } from './ModalContent'
import { ModalFooter } from './ModalFooter'
import { ModalHeader } from './ModalHeader'
import { ModalOverlay } from './ModalOverlay'
import { ModalRoot } from './ModalRoot'
import { ModalTitle } from './ModalTitle'

export interface IPropsElementsDiv extends ComponentProps<'div'> {}

export const Modal = {
  Root: ModalRoot,
  Content: ModalContent,
  Footer: ModalFooter,
  Header: ModalHeader,
  Overlay: ModalOverlay,
  Body: ModalBody,
  Title: ModalTitle,
}
